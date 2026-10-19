"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { ProductConfig } from "@/const/products";

interface ProductCTAProps {
  product: ProductConfig;
}

const ProductCTA = ({ product }: ProductCTAProps) => {
  const { t } = useTranslation();
  const k = `product.${product.slug}.cta`;

  return (
    <section className="page py-24 max-md:py-16">
      <h2 className="heading m-0 max-w-[16ch] text-[clamp(34px,4.6vw,56px)] ko:max-w-[14em]">
        {t(`${k}.title`)}
      </h2>
      <p className="lede mt-5 mb-0">{t(`${k}.description`)}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="#install" className="btn btn-primary">
          {t(`${k}.primary`)}
        </Link>
        <a
          href={product.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          {t(`${k}.secondary`)} ↗
        </a>
      </div>
    </section>
  );
};

export default ProductCTA;
