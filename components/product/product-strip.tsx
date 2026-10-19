"use client";

import { useTranslation } from "react-i18next";
import type { ProductSlug } from "@/const/products";
import { getTranslatedArray, isString } from "@/lib/translation-objects";

interface ProductStripProps {
  slug: ProductSlug;
  /** Resolved display values, same order as the locale labels. */
  values: string[];
}

/** Four numbers in a row, under the artwork. */
const ProductStrip = ({ slug, values }: ProductStripProps) => {
  const { t } = useTranslation();
  const labels = getTranslatedArray(t, `product.${slug}.facts`, isString);

  return (
    <section className="page pb-20 max-md:pb-14">
      <dl className="m-0 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col-reverse justify-end gap-2 pr-4 md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0"
          >
            <dt className="text-[14px] text-faint">{labels[index] ?? ""}</dt>
            <dd className="m-0 text-[clamp(28px,3vw,40px)] leading-none font-semibold tracking-[-0.03em] tabular-nums">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ProductStrip;
