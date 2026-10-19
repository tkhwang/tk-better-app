"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import LanguageToggle from "./language-toggle";

const GITHUB_URL = "https://github.com/tkhwang";

const links = [
  { href: "/#products", key: "nav.projects", match: "/product" },
  { href: "/blog", key: "nav.blog", match: "/blog" },
] as const;

export const Logo = ({ size = "md" }: { size?: "md" | "sm" }) => (
  <span
    className={cn(
      "flex items-center gap-2.5 font-bold tracking-[-0.02em] text-ink",
      size === "md" ? "text-[18px]" : "text-[17px]",
    )}
  >
    <span
      aria-hidden
      className={cn("rounded-[6px] bg-accent", size === "md" ? "size-5" : "size-[18px]")}
    />
    tkBetter.app
  </span>
);

const SiteNav = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="page relative z-20">
      <nav className="flex min-h-[72px] items-center gap-7 py-3.5">
        <Link
          href="/"
          className="flex min-h-11 items-center no-underline"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <div className="flex-1" />

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[15px] text-dim no-underline transition-colors hover:text-ink",
                pathname.startsWith(link.match) && "text-ink",
              )}
            >
              {t(link.key)}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-dim no-underline transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <LanguageToggle />
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={t("nav.menu")}
          onClick={() => setOpen((value) => !value)}
          className="flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[10px] bg-card shadow-[var(--shadow-ring)] md:hidden"
        >
          <span
            className={cn(
              "block h-[1.5px] w-4 bg-ink transition-transform",
              open && "translate-y-[3.25px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-4 bg-ink transition-transform",
              open && "-translate-y-[3.25px] -rotate-45",
            )}
          />
        </button>
      </nav>

      {open ? (
        <div className="card absolute inset-x-[var(--gut)] top-[68px] p-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-[12px] px-4 text-[16px] font-medium text-ink no-underline hover:bg-step"
            >
              {t(link.key)}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center rounded-[12px] px-4 text-[16px] font-medium text-ink no-underline hover:bg-step"
          >
            GitHub ↗
          </a>
          <div className="mt-1 flex items-center justify-between gap-4 border-t border-line px-4 pt-3 pb-2">
            <span className="text-[14px] text-faint">{t("nav.language")}</span>
            <LanguageToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default SiteNav;
