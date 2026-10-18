import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimationProvider } from "@/components/animations";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Bitstack Solutions", template: "%s | Bitstack Solutions" },
  description:
    "Thoughtful websites, AI automation, and connected business systems from Bitstack Solutions.",
  icons: { icon: "/assets/bitstack.svg" },
  openGraph: { type: "website", siteName: "Bitstack Solutions" },
};
export const viewport: Viewport = { themeColor: "#FFFDF6" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <noscript>
          <style>
            {"[data-reveal]{opacity:1!important;transform:none!important}"}
          </style>
        </noscript>
        <AnimationProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </AnimationProvider>
      </body>
    </html>
  );
}
