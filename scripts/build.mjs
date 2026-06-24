import { parseFragment, serializeOuter } from "parse5";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { htmlToJsx, usesLink } from "./htmltojsx.mjs";

const getAttr = (n, name) => (n.attrs || []).find((a) => a.name === name)?.value || "";

const PAGES = {
  index: "/",
  about: "/about",
  center: "/center",
  cosmetic: "/cosmetic",
  faq: "/faq",
  procedure: "/procedure",
  product: "/product",
  "skin-analysis": "/skin-analysis",
  "skin-sol": "/skin-sol",
  travel: "/travel",
};

// ---- link rewriting: static .html site -> Next routes ----
function rewriteLinks(html) {
  return html
    .replace(/(src|href)="assets\//g, '$1="/assets/')
    .replace(/href="index\.html#([^"]*)"/g, 'href="/#$1"')
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="([a-z][a-z0-9-]*)\.html#([^"]*)"/g, 'href="/$1#$2"')
    .replace(/href="([a-z][a-z0-9-]*)\.html"/g, 'href="/$1"');
}

// Source HTML lives in _src/ (a stable copy of the original page files), so the
// build keeps working even if the root *.html files are removed.
const SRC_DIR = "_src";
const srcPath = (name) => `${SRC_DIR}/${name}.html`;

function bodyInner(name) {
  const html = readFileSync(srcPath(name), "utf8");
  const m = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return m[1];
}

function topChildren(inner) {
  return parseFragment(inner).childNodes.filter((n) => n.tagName);
}
function findBlock(children, pred) {
  const n = children.find(pred);
  return n ? serializeOuter(n) : null;
}

// convert html -> jsx with internal <a> turned into <Link>
function jsx(html, indent = "      ") {
  return htmlToJsx(rewriteLinks(html), indent, { useLink: true });
}

// prepend `import Link` when the generated code uses <Link>
function withLinkImport(code) {
  if (usesLink(code) && !code.includes('from "next/link"')) {
    return `import Link from "next/link";\n\n` + code;
  }
  return code;
}
function writeComp(path, code) {
  writeFileSync(path, withLinkImport(code));
}

mkdirSync("components", { recursive: true });

// ============ CHROME from index ============
const idxChildren = topChildren(bodyInner("index"));
const headerHtml = findBlock(idxChildren, (n) => n.tagName === "header");
let overlayHtml = findBlock(idxChildren, (n) => getAttr(n, "class").includes("gnb-overlay"));
const procSheetHtml = findBlock(idxChildren, (n) => getAttr(n, "id") === "procSheet");

// ============ CHROME from about ============
const aboutChildren = topChildren(bodyInner("about"));
const footContactHtml = findBlock(aboutChildren, (n) => getAttr(n, "class").includes("foot-contact"));
const footerHtml = findBlock(aboutChildren, (n) => n.tagName === "footer");
const mobileBarHtml = findBlock(aboutChildren, (n) => getAttr(n, "class").includes("mobile-bar"));
const langSheetHtml = findBlock(aboutChildren, (n) => getAttr(n, "id") === "langSheet");
const loginModalHtml = findBlock(aboutChildren, (n) => getAttr(n, "id") === "loginModal");

function comp(name, body, { client = false } = {}) {
  const head = client ? '"use client";\n\n' : "";
  return `${head}export default function ${name}() {\n  return (\n${body}\n  );\n}\n`;
}

// rewrite home/brand/nav anchors at the HTML level so the converter emits matching <Link>…</Link>
function homeLinks(html) {
  return html
    .replace('<a href="#" class="brand">', '<a href="/" class="brand">')
    .replace('<a href="#" class="brand gnb-overlay__brand">', '<a href="/" class="brand gnb-overlay__brand">')
    .replace(/<a href="#">홈<\/a>/g, '<a href="/">홈</a>')
    .replace(/href="#(how|services|whyus|treatments|why|booking)"/g, 'href="/#$1"');
}

// ---- SiteHeader (variant prop) ----
let headerJsx = jsx(homeLinks(headerHtml)).replace(
  '<header className="header">',
  '<header className={"header" + (variant ? " header--" + variant : "")}>'
);
const headerComp = `type HeaderVariant = "" | "solid" | "light";\n\ninterface SiteHeaderProps {\n  variant?: HeaderVariant;\n}\n\nexport default function SiteHeader({ variant = "" }: SiteHeaderProps) {\n  return (\n${headerJsx}\n  );\n}\n`;
writeComp("components/SiteHeader.tsx", headerComp);

// ---- GnbOverlay (home prop: flag tabs vs text tabs) ----
const flagTabsHtml = overlayHtml.match(/<div class="gnb-lang-tabs">[\s\S]*?<\/div>/)[0];
const textTabsHtml = `<div class="gnb-lang-tabs">
  <button class="gnb-lang-tab is-active" data-lang="KR">Korea</button>
  <button class="gnb-lang-tab" data-lang="EN">English</button>
  <button class="gnb-lang-tab" data-lang="CN">China</button>
  <button class="gnb-lang-tab" data-lang="JP">Japan</button>
  <button class="gnb-lang-tab" data-lang="VN">Vietnam</button>
</div>`;
const overlayWithToken = homeLinks(overlayHtml).replace(flagTabsHtml, "<!--LANGTABS-->");
let overlayJsx = jsx(overlayWithToken);
const flagTabsJsx = jsx(flagTabsHtml, "          ");
const textTabsJsx = jsx(textTabsHtml, "          ");
overlayJsx = overlayJsx.replace(
  /\{\/\*LANGTABS\*\/\}/,
  `{home ? (\n${flagTabsJsx}\n        ) : (\n${textTabsJsx}\n        )}`
);
const overlayComp = `interface GnbOverlayProps {\n  home?: boolean;\n}\n\nexport default function GnbOverlay({ home = false }: GnbOverlayProps) {\n  return (\n${overlayJsx}\n  );\n}\n`;
writeComp("components/GnbOverlay.tsx", overlayComp);

// ---- ProcSheet ----
let procJsx = jsx(procSheetHtml.replace(/href="#booking"/g, 'href="/#booking"'));
writeComp("components/ProcSheet.tsx", comp("ProcSheet", procJsx));

// ---- FootContact (form -> client) ----
let fcJsx = jsx(footContactHtml).replace(
  '<form className="foot-contact__form">',
  '<form className="foot-contact__form" onSubmit={(e) => e.preventDefault()}>'
);
writeComp("components/FootContact.tsx", `"use client";\n\nexport default function FootContact() {\n  return (\n${fcJsx}\n  );\n}\n`);

// ---- SiteFooter (brandSub + tagline props) ----
let footerJsx = jsx(footerHtml)
  .replace(
    /<div className="footer__brand">\s*KMEDITOUR\s*<small>[\s\S]*?<\/small>\s*<\/div>/,
    '<div className="footer__brand">\n            KMEDITOUR\n            <small>{brandSub}</small>\n          </div>'
  )
  .replace(/<p className="footer__tagline">[\s\S]*?<\/p>/, '<p className="footer__tagline">{tagline}</p>');
const footerComp = `interface SiteFooterProps {\n  brandSub?: string;\n  tagline?: string;\n}\n\nexport default function SiteFooter({\n  brandSub = "Premium Concierge in Korea",\n  tagline = "한국의 앞선 의료와 서울의 품격을 잇는 프리미엄 컨시어지. 시술부터 머무름까지, 전담 코디네이터가 당신만의 여정을 섬세하게 완성합니다.",\n}: SiteFooterProps) {\n  return (\n${footerJsx}\n  );\n}\n`;
writeComp("components/SiteFooter.tsx", footerComp);

// ---- MobileBar (active prop) ----
let mbJsx = jsx(mobileBarHtml)
  .replace(/className="mbar-btn is-active"/g, 'className="mbar-btn"')
  .replace('<Link className="mbar-btn" href="/"', '<Link className={"mbar-btn" + (active === "home" ? " is-active" : "")} href="/"')
  .replace('<Link className="mbar-btn" href="/skin-sol"', '<Link className={"mbar-btn" + (active === "skin-sol" ? " is-active" : "")} href="/skin-sol"')
  .replace('<Link className="mbar-btn" href="/center"', '<Link className={"mbar-btn" + (active === "center" ? " is-active" : "")} href="/center"');
const mobileBarComp = `interface MobileBarProps {\n  active?: "home" | "skin-sol" | "center" | null;\n}\n\nexport default function MobileBar({ active = null }: MobileBarProps) {\n  return (\n${mbJsx}\n  );\n}\n`;
writeComp("components/MobileBar.tsx", mobileBarComp);

// ---- LangSheet, LoginModal ----
writeComp("components/LangSheet.tsx", comp("LangSheet", jsx(langSheetHtml)));
let lmJsx = jsx(loginModalHtml).replace(
  '<form className="login-modal__form">',
  '<form className="login-modal__form" onSubmit={(e) => e.preventDefault()}>'
);
writeComp("components/LoginModal.tsx", `"use client";\n\nexport default function LoginModal() {\n  return (\n${lmJsx}\n  );\n}\n`);

// ============ PAGES ============
mkdirSync("app", { recursive: true });
const pageMeta = {};
for (const [name, route] of Object.entries(PAGES)) {
  const raw = readFileSync(srcPath(name), "utf8");
  const mStart = raw.indexOf('<main id="main-content">');
  const mainOpenEnd = raw.indexOf(">", mStart) + 1;
  const mEnd = raw.indexOf("</main>", mainOpenEnd);
  const mainInner = raw.slice(mainOpenEnd, mEnd);
  const afterMain = raw.slice(mEnd + "</main>".length);
  const fcIdx = afterMain.indexOf('class="foot-contact"');
  const fcOpen = afterMain.lastIndexOf("<section", fcIdx);
  const extra = fcIdx > -1 ? afterMain.slice(0, fcOpen).trim() : "";

  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let sm;
  const inlineScripts = [];
  const srcScripts = [];
  const GLOBALS = ["image-slot.js", "app.js", "contact-popup.js"];
  while ((sm = scriptRe.exec(raw))) {
    const srcMatch = sm[1].match(/src="([^"]+)"/);
    if (srcMatch) {
      const src = srcMatch[1].replace(/^js\//, "");
      if (!GLOBALS.includes(src)) srcScripts.push("/js/" + src);
    } else {
      const code = sm[2].trim();
      if (code) inlineScripts.push(code);
    }
  }
  pageMeta[name] = { route, mainInner, extra, inlineScripts, srcScripts };
}

// ---- per-page settings ----
const PAGE_SETTINGS = {
  index: { dir: "app", comp: "HomePage", variant: "", active: "home", home: true },
  about: { dir: "app/about", comp: "AboutPage", variant: "solid", brandSub: "Premium Concierge in Seoul" },
  center: { dir: "app/center", comp: "CenterPage", variant: "", active: "center" },
  cosmetic: { dir: "app/cosmetic", comp: "CosmeticPage", variant: "light" },
  faq: { dir: "app/faq", comp: "FaqPage", variant: "light", brandSub: "Premium Concierge in Seoul" },
  procedure: { dir: "app/procedure", comp: "ProcedurePage", variant: "" },
  product: { dir: "app/product", comp: "ProductPage", variant: "solid" },
  "skin-analysis": { dir: "app/skin-analysis", comp: "SkinAnalysisPage", variant: "" },
  "skin-sol": { dir: "app/skin-sol", comp: "SkinSolPage", variant: "light", active: "skin-sol" },
  travel: { dir: "app/travel", comp: "TravelPage", variant: "", tagline: "한국의 앞선 의료와 서울의 품격을 잇는 프리미엄 컨시어지." },
};

const q = (s) => JSON.stringify(s);

for (const [name, meta] of Object.entries(pageMeta)) {
  const cfg = PAGE_SETTINGS[name];
  mkdirSync(cfg.dir, { recursive: true });

  const mainJsx = htmlToJsx(rewriteLinks(meta.mainInner), "      ", { useLink: true });
  const extraJsx = meta.extra ? htmlToJsx(rewriteLinks(meta.extra), "        ", { useLink: true }) : "";

  // SiteLayout props
  const props = [];
  if (cfg.home) props.push(`home`);
  if (cfg.variant) props.push(`headerVariant=${q(cfg.variant)}`);
  if (cfg.active) props.push(`mobileActive=${q(cfg.active)}`);
  if (cfg.brandSub) props.push(`footerBrandSub=${q(cfg.brandSub)}`);
  if (cfg.tagline) props.push(`footerTagline=${q(cfg.tagline)}`);
  if (meta.srcScripts.length) props.push(`pageSrc={${q(meta.srcScripts)}}`);
  if (meta.inlineScripts.length) props.push(`pageInline={PAGE_INLINE}`);
  if (extraJsx) props.push(`afterMain={\n        <>\n${extraJsx}\n        </>\n      }`);
  const propStr = props.length ? " " + props.join(" ") : "";

  const cssName = name === "index" ? "home" : name;
  const cssRel = cfg.dir === "app" ? "../styles" : "../../styles";

  // page-specific inline scripts as a const array (kept verbatim, re-run on mount)
  let inlineConst = "";
  if (meta.inlineScripts.length) {
    const items = meta.inlineScripts.map((c) => "`" + c.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`").join(",\n");
    inlineConst = `\nconst PAGE_INLINE: string[] = [\n${items},\n];\n`;
  }

  const needsLink = usesLink(mainJsx) || usesLink(extraJsx);
  const file =
    `import SiteLayout from "@/components/SiteLayout";\n` +
    (needsLink ? `import Link from "next/link";\n` : "") +
    `import "${cssRel}/${cssName}.css";\n` +
    inlineConst +
    `\nexport default function ${cfg.comp}() {\n  return (\n    <SiteLayout${propStr}>\n${mainJsx}\n    </SiteLayout>\n  );\n}\n`;
  writeFileSync(`${cfg.dir}/page.tsx`, file);
}

console.log("Generated chrome components + pages:", Object.keys(pageMeta).join(", "));
