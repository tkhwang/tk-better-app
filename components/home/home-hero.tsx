"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { withEmphasis } from "@/lib/emphasis";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <section className="page pt-24 pb-24 max-md:pt-14 max-md:pb-16">
      <p className="eyebrow">{t("hero.eyebrow")}</p>
      <h1 className="display mt-5 mb-0 max-w-[14ch] text-[clamp(44px,6vw,80px)] ko:max-w-[13em]">
        {withEmphasis(t("hero.title"))}
      </h1>
      <p className="lede mt-7 mb-0">{t("hero.subtitle")}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/#products" className="btn btn-primary">
          {t("hero.primary")}
        </Link>
        <a
          href="https://github.com/tkhwang"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          GitHub
        </a>
      </div>
      <p className="mt-6 mb-0 text-[14px] text-faint">
        {t("hero.meta")}{" "}
        <a
          href="https://github.com/tkhwang"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent no-underline hover:underline"
        >
          {t("hero.meta_link")}
        </a>
      </p>
    </section>
  );
};

export default HomeHero;
