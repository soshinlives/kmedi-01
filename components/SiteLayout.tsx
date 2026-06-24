import { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import GnbOverlay from "@/components/GnbOverlay";
import ProcSheet from "@/components/ProcSheet";
import FootContact from "@/components/FootContact";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";
import LangSheet from "@/components/LangSheet";
import LoginModal from "@/components/LoginModal";
import PageScripts from "@/components/PageScripts";

type HeaderVariant = "" | "solid" | "light";

interface SiteLayoutProps {
  children: ReactNode;
  afterMain?: ReactNode;
  home?: boolean;
  headerVariant?: HeaderVariant;
  mobileActive?: "home" | "skin-sol" | "center" | null;
  footerBrandSub?: string;
  footerTagline?: string;
  pageSrc?: string[];
  pageInline?: string[];
}

export default function SiteLayout({
  children,
  afterMain,
  home = false,
  headerVariant = "",
  mobileActive = null,
  footerBrandSub,
  footerTagline,
  pageSrc,
  pageInline,
}: SiteLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 이동
      </a>
      <SiteHeader variant={headerVariant} />
      <GnbOverlay home={home} />
      <ProcSheet />
      <main id="main-content">{children}</main>
      {afterMain}
      <FootContact />
      <SiteFooter brandSub={footerBrandSub} tagline={footerTagline} />
      <MobileBar active={mobileActive} />
      <LangSheet />
      <LoginModal />
      <PageScripts pageSrc={pageSrc} pageInline={pageInline} />
    </>
  );
}
