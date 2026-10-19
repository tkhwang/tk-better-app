import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/i18n-provider";
import SiteNav from "@/components/site/site-nav";
import SiteFooter from "@/components/site/site-footer";

const sans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

// Instrument Sans has no Hangul; Korean glyphs fall through to Noto Sans KR.
const korean = Noto_Sans_KR({
  variable: "--font-kr",
  preload: false,
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tkBetter.app",
  description: "An open-source workflow for effective collaboration between people and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${korean.variable} ${mono.variable}`}>
        <I18nProvider>
          <SiteNav />
          {children}
          <SiteFooter />
        </I18nProvider>
      </body>
    </html>
  );
}
