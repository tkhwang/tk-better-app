"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, Github, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative overflow-hidden bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("products.eyebrow")}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {t("products.title")}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-right">
            {t("products.subtitle")}
          </p>
        </div>

        <article className="grid overflow-hidden rounded-[2rem] bg-background shadow-[0_24px_80px_rgba(0,0,0,0.08)] ring-1 ring-border/60 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-between gap-12 p-8 md:p-10 lg:p-12">
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {t("products.workbranch.status")}
                </span>
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {t("products.workbranch.category")}
                </span>
              </div>

              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground shadow-inner">
                  <GitBranch className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("products.workbranch.platforms")}
                  </p>
                  <h3 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
                    {t("products.workbranch.title")}
                  </h3>
                </div>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {t("products.workbranch.description")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
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
                  href="https://github.com/tkhwang/workbranch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {t("products.workbranch.secondary")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-foreground p-6 text-background md:p-8 lg:p-10">
            <div className="mb-5 flex items-center justify-between border-b border-background/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-background/60">
                <TerminalSquare className="h-4 w-4" />
                workbranch
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm leading-relaxed">
              <div className="rounded-2xl bg-background/[0.06] p-4 ring-1 ring-background/10">
                <p className="text-background/45">$ workbranch add</p>
                <p className="mt-2 text-background">feat+login created</p>
                <p className="text-background/60">2 repos linked as task worktrees</p>
              </div>
              <div className="rounded-2xl bg-background/[0.06] p-4 ring-1 ring-background/10">
                <p className="text-background/45">$ workbranch status</p>
                <div className="mt-3 grid gap-2 text-background/70 sm:grid-cols-3">
                  <span>base clean</span>
                  <span>task dirty</span>
                  <span>push ready</span>
                </div>
              </div>
              <div className="rounded-2xl bg-background text-foreground p-4">
                <p className="font-mono text-sm text-muted-foreground">$ workbranch push feat+login</p>
                <p className="mt-2 font-sans text-lg font-semibold tracking-tight">
                  branch published to origin
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductsSection;
