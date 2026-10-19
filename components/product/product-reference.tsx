"use client";

import { useTranslation } from "react-i18next";
import type { ProductSlug } from "@/const/products";
import { getTranslatedArray, isRecord, isString } from "@/lib/translation-objects";

interface ReferenceItem {
  cmd: string;
  desc: string;
}

interface ReferenceGroup {
  title: string;
  description: string;
  note?: string;
  items: ReferenceItem[];
}

const isReferenceItem = (value: unknown): value is ReferenceItem =>
  isRecord(value) && isString(value.cmd) && isString(value.desc);

const isReferenceGroup = (value: unknown): value is ReferenceGroup =>
  isRecord(value) &&
  isString(value.title) &&
  isString(value.description) &&
  (value.note === undefined || isString(value.note)) &&
  Array.isArray(value.items) &&
  value.items.every(isReferenceItem);

interface ProductReferenceProps {
  slug: ProductSlug;
}

/** The cheat sheet: one card per command group. */
const ProductReference = ({ slug }: ProductReferenceProps) => {
  const { t } = useTranslation();
  const k = `product.${slug}.reference`;
  const groups = getTranslatedArray(t, `${k}.groups`, isReferenceGroup);

  return (
    <section className="py-24 max-md:py-16">
      <div className="page">
        <h2 className="heading m-0 text-[clamp(32px,4vw,48px)]">{t(`${k}.title`)}</h2>
        <p className="mt-4 mb-0 max-w-[60ch] text-[17px] leading-relaxed text-dim">
          {t(`${k}.subtitle`)}
        </p>

        <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.title} className="card flex flex-col p-7 max-md:p-5">
              <h3 className="m-0 text-[20px] font-semibold tracking-[-0.02em]">{group.title}</h3>
              <p className="mt-1.5 mb-0 text-[14.5px] leading-relaxed text-dim">{group.description}</p>

              <ul className="m-0 mt-5 list-none p-0">
                {group.items.map((item) => (
                  <li
                    key={item.cmd}
                    className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-line py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"
                  >
                    <code className="font-mono text-[12.5px] leading-[1.6] text-ink [overflow-wrap:anywhere]">
                      <span className="select-none text-faint">$ </span>
                      {item.cmd}
                    </code>
                    <span className="text-[13.5px] leading-[1.55] text-dim">{item.desc}</span>
                  </li>
                ))}
              </ul>

              {group.note ? (
                <p className="mt-3 mb-0 rounded-[10px] bg-step px-4 py-3 text-[13.5px] leading-relaxed text-dim">
                  {group.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReference;
