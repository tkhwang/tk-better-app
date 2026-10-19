"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { PRODUCT_ORDER, PRODUCTS } from "@/const/products";
import CommandBlock from "@/components/product/command-block";
import ProductFigure from "@/components/product/product-figure";

/** One card per part of the workflow: copy and install command on the left, README artwork on the right. */
const ProductRows = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="scroll-mt-4 bg-step py-[88px] max-md:py-16">
      <div className="page">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 className="heading m-0 max-w-[13ch] text-[clamp(32px,4vw,48px)] ko:max-w-none">
            {t("products.title")}
          </h2>
          <p className="m-0 max-w-[46ch] text-[17px] leading-relaxed text-dim">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {PRODUCT_ORDER.map((slug) => {
            const product = PRODUCTS[slug];
            const k = `products.items.${slug}`;
            const install = product.install[0];

            return (
              <article
                key={slug}
                className="card card-link flex flex-wrap items-center gap-8 p-7 max-md:gap-6 max-md:p-5"
              >
                <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
                  <p className="eyebrow text-[12.5px] text-accent">{t(`${k}.role`)}</p>
                  <h3 className="m-0 text-[30px] leading-[1.1] font-semibold tracking-[-0.025em]">
                    {/* The title's link covers the whole card. */}
                    <Link
                      href={product.path}
                      className="text-ink no-underline after:absolute after:inset-0 after:rounded-[20px] after:content-['']"
                    >
                      {t(`${k}.title`)}
                    </Link>
                  </h3>
                  <p className="m-0 text-[16px] leading-relaxed text-dim">{t(`${k}.description`)}</p>
                  {install?.kind === "command" ? (
                    <CommandBlock
                      command={install.command}
                      surface="step"
                      className="relative z-10 w-full"
                    />
                  ) : null}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                    <span className="text-[15px] font-semibold text-accent">
                      {t(`${k}.primary`)} →
                    </span>
                    <span className="text-[14px] text-faint">
                      {t(`${k}.category`)} · {t(`${k}.platforms`)}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-[1.6_1_440px] max-md:basis-full">
                  <ProductFigure product={product} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductRows;
