"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import type { ProductConfig } from "@/const/products";
import { cn } from "@/lib/utils";

interface ProductFigureProps {
  product: ProductConfig;
  /** Empty for decorative use, e.g. inside a card whose link already names it. */
  alt?: string;
  priority?: boolean;
  className?: string;
}

/** The product's README artwork in the current language, with its narrow variant when it has one. */
const ProductFigure = ({ product, alt = "", priority, className }: ProductFigureProps) => {
  const { i18n } = useTranslation();
  const lang: "en" | "ko" = i18n.language.startsWith("ko") ? "ko" : "en";
  const figure = product.heroFigure;
  const mobile = figure.mobile;

  return (
    <>
      <Image
        src={figure[lang]}
        alt={alt}
        width={figure.width}
        height={figure.height}
        unoptimized
        priority={priority}
        className={cn("block h-auto w-full", mobile && "max-md:hidden", className)}
      />
      {mobile ? (
        <Image
          src={mobile[lang]}
          alt={alt}
          width={mobile.width}
          height={mobile.height}
          unoptimized
          priority={priority}
          className={cn("block h-auto w-full md:hidden", className)}
        />
      ) : null}
    </>
  );
};

export default ProductFigure;
