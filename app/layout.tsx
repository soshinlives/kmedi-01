import type { Metadata } from "next";
import Script from "next/script";

// Global stylesheets — load order mirrors the original site
import "../styles/reset.css";
import "../styles/font.css";
import "../styles/theme.css";
import "../styles/components/button.css";
import "../styles/components/accordion.css";
import "../styles/components/modal.css";
import "../styles/components/card.css";
import "../styles/components/tab.css";
import "../styles/components/breadcrumb.css";
import "../styles/common.css";

export const metadata: Metadata = {
  title: "KMEDITOUR — Premium Concierge in Korea",
  description: "한국의 앞선 의료와 서울의 품격을 잇는 프리미엄 컨시어지",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {/*
          Run-once global scripts:
          - image-slot.js defines the <image-slot> custom element (must define only once)
          - contact-popup.js injects the floating contact button into <body> (once)
          app.js + page-specific scripts are re-run on every page mount by PageScripts,
          since they bind to per-page DOM that changes on client-side navigation.
        */}
        <Script src="/js/image-slot.js" strategy="afterInteractive" />
        <Script src="/js/contact-popup.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
