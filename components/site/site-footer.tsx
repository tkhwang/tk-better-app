"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { PRODUCT_ORDER, PRODUCTS } from "@/const/products";
import { Logo } from "./site-nav";

const elsewhere = [
  { href: "https://github.com/tkhwang", label: "GitHub" },
  { href: "https://www.threads.com/@tkbetter.app", label: "Threads" },
] as const;

const SiteFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-line">
      <div className="page pt-14 pb-10">
        <div className="flex flex-wrap gap-x-[72px] gap-y-8">
          <div className="flex flex-[1_1_280px] flex-col gap-2.5">
            <Logo size="sm" />
            <p className="m-0 max-w-[40ch] text-[14px] leading-relaxed text-faint">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[14px]">
            <p className="m-0 mb-1 font-semibold">{t("nav.projects")}</p>
            {PRODUCT_ORDER.map((slug) => (
              <Link
                key={slug}
                href={PRODUCTS[slug].path}
                className="text-dim no-underline transition-colors hover:text-ink"
              >
                {t(`products.items.${slug}.title`)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-[14px]">
            <p className="m-0 mb-1 font-semibold">{t("footer.elsewhere")}</p>
            {elsewhere.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dim no-underline transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="m-0 mt-12 border-t border-line pt-5 text-[13px] text-faint">
          © {new Date().getFullYear()} tkBetter.app · {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
