"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Globe } from "lucide-react";

const Navbar04Page = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ko" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-6 inset-x-4 z-50 h-16 bg-background/70 backdrop-blur-lg backdrop-saturate-150 border border-border/50 rounded-full max-w-screen-xl mx-auto shadow-sm">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          tkBetter<span className="text-primary">.app</span>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="rounded-full px-3 gap-2 text-xs font-semibold"
          >
            <Globe className="w-4 h-4" />
            {i18n.language.toUpperCase()}
          </Button>

          <Button size="sm" className="hidden sm:inline-flex rounded-full px-5">
            {t("cta.contact")}
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden border-l pl-3 ml-1">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
