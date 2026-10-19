"use client";

import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ProductSlug } from "@/const/products";
import {
  getTranslatedArray,
  isRecord,
  isString,
  isStringArray,
} from "@/lib/translation-objects";

interface FeatureItem {
  title: string;
  description: string;
  points?: string[];
}

const isFeatureItem = (value: unknown): value is FeatureItem =>
  isRecord(value) &&
  isString(value.title) &&
  isString(value.description) &&
  (value.points === undefined || isStringArray(value.points));

interface ProductFeaturesProps {
  slug: ProductSlug;
  /** One visual per feature item, matched by index. */
  visuals: ReactNode[];
}

/** One white card per feature: copy on the left, a mock of the product on the right. */
const ProductFeatures = ({ slug, visuals }: ProductFeaturesProps) => {
  const { t } = useTranslation();
  const k = `product.${slug}.features`;
  const items = getTranslatedArray(t, `${k}.items`, isFeatureItem);

  return (
    <section className="bg-step py-24 max-md:py-16">
      <div className="page">
        <p className="eyebrow">{t(`${k}.eyebrow`)}</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 className="heading m-0 max-w-[18ch] text-[clamp(32px,4vw,48px)] ko:max-w-[16em]">
            {t(`${k}.title`)}
          </h2>
          <p className="m-0 max-w-[46ch] text-[17px] leading-relaxed text-dim">
            {t(`${k}.subtitle`)}
          </p>
        </div>

        <ol className="m-0 mt-12 flex list-none flex-col gap-5 p-0">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="card flex flex-wrap items-start gap-8 p-7 max-md:gap-6 max-md:p-5"
            >
              <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3">
                <span className="eyebrow text-[12.5px]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-[26px] leading-[1.15] font-semibold tracking-[-0.025em] ko:tracking-[-0.015em]">
                  {item.title}
                </h3>
                <p className="m-0 text-[16px] leading-relaxed text-dim">{item.description}</p>
                {item.points?.length ? (
                  <ul className="m-0 mt-1 grid list-none gap-2 p-0">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[14.5px] leading-[1.6] text-dim">
                        <Check aria-hidden className="mt-[3px] size-4 shrink-0 text-accent" strokeWidth={2.25} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="w-full min-w-0 flex-[1.4_1_440px] max-md:basis-full">
                {visuals[index] ?? null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProductFeatures;
