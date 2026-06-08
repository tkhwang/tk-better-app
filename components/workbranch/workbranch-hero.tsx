"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BackgroundPattern } from "@/components/hero-06/background-pattern";
import { WORKBRANCH } from "@/const/workbranch";

const WorkbranchHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-20">
      <BackgroundPattern />

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col items-center text-center">
        <Badge className="mb-6 rounded-full border-none bg-gradient-to-br from-primary via-muted/30 via-70% to-primary px-4 py-1 text-xs animate-in fade-in slide-in-from-bottom-3 duration-1000 md:text-sm">
          {t("workbranch.hero.badge")}
        </Badge>

        <h1 className="text-5xl font-bold tracking-tight !leading-[1.05] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 sm:text-6xl md:text-7xl">
          {t("workbranch.hero.name")}
        </h1>

        <p className="mt-5 text-xl font-medium text-foreground/85 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-250 md:text-2xl">
          {t("workbranch.hero.tagline")}
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 md:text-lg">
          {t("workbranch.hero.subtitle")}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
          <Button size="lg" asChild className="h-11 rounded-full px-7 text-sm">
            <Link href="#install">{t("workbranch.hero.cta_install")}</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-11 rounded-full bg-background/50 px-7 text-sm shadow-none backdrop-blur-sm"
          >
            <Link href={WORKBRANCH.repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 !h-4 !w-4" />
              {t("workbranch.hero.cta_github")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkbranchHero;
