"use client";

import { useTranslation } from "react-i18next";
import type { ProductConfig } from "@/const/products";
import { withEmphasis } from "@/lib/emphasis";
import CommandBlock from "./command-block";

interface ProductHeroProps {
  product: ProductConfig;
}

const ProductHero = ({ product }: ProductHeroProps) => {
  const { t } = useTranslation();
  const k = `product.${product.slug}.hero`;

  return (
    <section className="page pt-20 pb-14 max-md:pt-12 max-md:pb-10">
      <p className="eyebrow">
        {t(`${k}.name`)} · {t(`${k}.badge`)}
      </p>
      <h1 className="display mt-5 mb-0 max-w-[18ch] text-[clamp(40px,5.4vw,72px)] ko:max-w-[15em]">
        {withEmphasis(t(`${k}.tagline`))}
      </h1>
      <p className="lede mt-7 mb-0">{t(`${k}.subtitle`)}</p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <CommandBlock command={product.heroCommand} />
        <a
          href={product.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          {t("product.common.github")}
        </a>
      </div>

      <p className="mt-5 mb-0 text-[14px] text-faint">{t(`${k}.platforms`)}</p>
    </section>
  );
};

export default ProductHero;
