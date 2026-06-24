import { parseFragment } from "parse5";

// HTML/SVG attribute name -> React prop name
const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  colspan: "colSpan",
  rowspan: "rowSpan",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  spellcheck: "spellCheck",
  contenteditable: "contentEditable",
  crossorigin: "crossOrigin",
  enctype: "encType",
  novalidate: "noValidate",
  formnovalidate: "formNoValidate",
  srcset: "srcSet",
  usemap: "useMap",
  allowfullscreen: "allowFullScreen",
  referrerpolicy: "referrerPolicy",
  frameborder: "frameBorder",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  datetime: "dateTime",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  // SVG
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-opacity": "strokeOpacity",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "color-interpolation-filters": "colorInterpolationFilters",
  "gradientunits": "gradientUnits",
  "gradienttransform": "gradientTransform",
  "text-anchor": "textAnchor",
  "dominant-baseline": "dominantBaseline",
  "letter-spacing": "letterSpacing",
  "marker-end": "markerEnd",
  "marker-start": "markerStart",
  "marker-mid": "markerMid",
  "shape-rendering": "shapeRendering",
  "vector-effect": "vectorEffect",
  "xml:space": "xmlSpace",
  "xlink:href": "xlinkHref",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-weight": "fontWeight",
};

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const DROP_ATTRS = new Set(["onclick", "onchange", "oninput", "onsubmit", "onload", "onmouseover", "onmouseout", "onkeydown", "onkeyup"]);

function camel(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleToObj(str) {
  const out = [];
  for (const decl of str.split(";")) {
    const i = decl.indexOf(":");
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--") ? `'${prop}'` : camel(prop);
    out.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{{ ${out.join(", ")} }}`;
}

function renderAttrs(attrs) {
  const parts = [];
  for (const { name: rawName, value: rawVal } of attrs) {
    const lower = rawName.toLowerCase();
    if (DROP_ATTRS.has(lower)) continue;
    if (lower === "style") {
      parts.push(`style=${styleToObj(rawVal)}`);
      continue;
    }
    const name = ATTR_MAP[lower] || rawName;
    // numeric props
    if ((lower === "tabindex" || lower === "colspan" || lower === "rowspan") && /^-?\d+$/.test(rawVal.trim())) {
      parts.push(`${name}={${parseInt(rawVal, 10)}}`);
      continue;
    }
    // boolean attributes (present-with-empty-value or value === name)
    if (["disabled", "checked", "selected", "readonly", "required", "autofocus", "hidden", "multiple", "controls", "loop", "muted", "open", "allowfullscreen", "playsinline", "autoplay", "novalidate", "default", "reversed"].includes(lower)) {
      if (rawVal === "" || rawVal.toLowerCase() === lower || rawVal === "true") {
        parts.push(name);
        continue;
      }
    }
    parts.push(`${name}=${JSON.stringify(rawVal)}`);
  }
  return parts.length ? " " + parts.join(" ") : "";
}

function escapeText(t) {
  return t.replace(/[{}]/g, (c) => `{'${c}'}`).replace(/</g, "{'<'}").replace(/>/g, "{'>'}");
}

// is an href an internal route link suitable for next/link?
function isInternalHref(href) {
  if (!href) return false;
  // route paths and home-hash links: "/", "/about", "/about#x", "/#x"
  return /^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?(?:#.*)?$/i.test(href) || /^\/#/.test(href);
}

let useLink = false;

function render(node, indent) {
  const nn = node.nodeName;
  if (nn === "#text") {
    const text = node.value;
    if (text.trim() === "") return "";
    return indent + escapeText(text.trim());
  }
  if (nn === "#comment") {
    const c = node.data;
    if (/^\s*$/.test(c)) return "";
    return indent + `{/*${c.replace(/\*\//g, "* /")}*/}`;
  }
  if (nn === "#document-fragment") {
    return node.childNodes.map((c) => render(c, indent)).filter(Boolean).join("\n");
  }
  // element
  let tag = node.tagName;
  const attrsArr = node.attrs || [];
  // convert internal <a> to next/link <Link>
  if (useLink && tag === "a") {
    const href = (attrsArr.find((a) => a.name === "href") || {}).value;
    if (isInternalHref(href)) tag = "Link";
  }
  const attrs = renderAttrs(attrsArr);
  const children = (node.childNodes || []).map((c) => render(c, indent + "  ")).filter((s) => s !== "");
  // NOTE: tag may have been rewritten to "Link" (next/link). Don't treat it as the
  // HTML void <link> element — only genuine void elements self-close without children.
  const isVoid = tag !== "Link" && VOID.has(tag.toLowerCase());
  if (isVoid || children.length === 0) {
    return `${indent}<${tag}${attrs} />`;
  }
  return `${indent}<${tag}${attrs}>\n${children.join("\n")}\n${indent}</${tag}>`;
}

export function htmlToJsx(html, baseIndent = "      ", opts = {}) {
  useLink = !!opts.useLink;
  const frag = parseFragment(html);
  const out = frag.childNodes.map((c) => render(c, baseIndent)).filter(Boolean).join("\n");
  useLink = false;
  return out;
}

// does a converted JSX string use <Link>?
export function usesLink(jsx) {
  return /<Link[\s/>]/.test(jsx);
}

// CLI
if (process.argv[1] && process.argv[1].endsWith("htmltojsx.mjs")) {
  let input = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (d) => (input += d));
  process.stdin.on("end", () => process.stdout.write(htmlToJsx(input)));
}
