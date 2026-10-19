"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProductConfig } from "@/const/products";
import CommandBlock from "./command-block";

interface ProductInstallProps {
  product: ProductConfig;
}

const ProductInstall = ({ product }: ProductInstallProps) => {
  const { t } = useTranslation();
  const k = `product.${product.slug}.install`;
  const [activeId, setActiveId] = useState(product.install[0]?.id);
  const active =
    product.install.find((option) => option.id === activeId) ?? product.install[0];

  if (!active) return null;

  return (
    <section id="install" className="scroll-mt-4 bg-step py-24 max-md:py-16">
      <div className="page grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start">
        <div>
          <p className="eyebrow">{t("product.common.install_cta")}</p>
          <h2 className="heading mt-3 mb-0 text-[clamp(30px,3.6vw,44px)]">{t(`${k}.title`)}</h2>
          <p className="mt-4 mb-0 max-w-[46ch] text-[16px] leading-relaxed text-dim">
            {t(`${k}.subtitle`)}
          </p>
        </div>

        <div className="card p-6 max-md:p-5">
          <div className="seg max-w-full flex-wrap" role="tablist">
            {product.install.map((option) => (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={option.id === active.id}
                onClick={() => setActiveId(option.id)}
              >
                {t(`${k}.tabs.${option.id}.label`)}
              </button>
            ))}
          </div>

          <p className="mt-4 mb-0 text-[14px] text-faint">{t(`${k}.tabs.${active.id}.note`)}</p>

          <div className="mt-3">
            {active.kind === "command" ? (
              <CommandBlock command={active.command} surface="step" className="w-full" />
            ) : (
              <div className="flex flex-col items-start gap-4 rounded-[10px] bg-step p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="m-0 text-[14.5px] leading-relaxed text-dim">
                  {t(`${k}.tabs.${active.id}.description`)}
                </p>
                <a
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary shrink-0"
                >
                  {t(`${k}.tabs.${active.id}.action`)} ↗
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInstall;
