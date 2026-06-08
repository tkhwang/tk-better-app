"use client";

import { Button } from "@/components/ui/button";
import { WORKBRANCH } from "@/const/workbranch";
import { ArrowRight, GitBranch, Github } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative overflow-hidden bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("products.eyebrow")}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {t("products.title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t("products.subtitle")}
          </p>
        </div>

        <article className="flex flex-col gap-6 rounded-[1.75rem] border border-border/60 bg-background p-7 shadow-sm md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-foreground">
              <GitBranch className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {t("products.workbranch.status")}
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {t("products.workbranch.category")}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight">
                {t("products.workbranch.title")}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">
                {t("products.workbranch.description")}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3 md:justify-end">
            <Button asChild className="h-11 rounded-full px-5 active:scale-95">
              <Link href="/product/workbranch">
                {t("products.workbranch.primary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full bg-background px-5 shadow-none active:scale-95"
            >
              <Link
                href={WORKBRANCH.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t("products.workbranch.secondary")}
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductsSection;
