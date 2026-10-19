"use client";

import { useTranslation } from "react-i18next";
import type { ProductConfig } from "@/const/products";
import ProductFigure from "./product-figure";

interface ProductPlateProps {
  product: ProductConfig;
}

/** The README hero artwork, large, with its caption. */
const ProductPlate = ({ product }: ProductPlateProps) => {
  const { t } = useTranslation();

  return (
    <section className="page pb-16">
      <figure className="m-0">
        <ProductFigure
          product={product}
          alt={t(`product.${product.slug}.hero.figure_alt`)}
          priority
          className="figure-shadow"
        />
        <figcaption className="mt-5 max-w-[74ch] text-[14px] leading-relaxed text-faint">
          {t(`product.${product.slug}.plate.caption`)}
        </figcaption>
      </figure>
    </section>
  );
};

export default ProductPlate;
