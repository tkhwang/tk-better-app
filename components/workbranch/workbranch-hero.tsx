"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, GithubIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";
import { WORKBRANCH } from "@/const/workbranch";

const WorkbranchHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24">
      <BackgroundPattern />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 rounded-full border-none bg-gradient-to-br via-70% from-primary via-muted/30 to-primary px-4 py-1 text-xs animate-in fade-in slide-in-from-bottom-3 duration-1000 md:text-sm">
              {t("workbranch.hero.badge")}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight !leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 sm:text-5xl md:text-6xl">
              {t("workbranch.hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300 lg:mx-0 md:text-xl">
              {t("workbranch.hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 lg:justify-start">
              <Button size="lg" asChild className="h-12 rounded-full px-8 text-base">
                <Link href="#install">
                  <Download className="mr-2 !h-5 !w-5" />
                  {t("workbranch.hero.cta_install")}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-12 rounded-full bg-background/50 px-8 text-base shadow-none backdrop-blur-sm"
              >
                <Link href={WORKBRANCH.repoUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 !h-5 !w-5" />
                  {t("workbranch.hero.cta_github")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  {t("workbranch.hero.terminal_title")}
                </span>
              </div>
              <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
                {WORKBRANCH.quickStart.map((line) => (
                  <div key={line} className="flex gap-2">
                    <span className="select-none text-primary/70">$</span>
                    <span className="text-foreground/90">{line}</span>
                  </div>
                ))}
                <div className="flex gap-2 pt-1 text-muted-foreground">
                  <span className="select-none text-emerald-500">✓</span>
                  <span>feat/login pushed to origin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkbranchHero;
