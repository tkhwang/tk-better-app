"use client";

import { Button } from "@/components/ui/button";
import { Download, GithubIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import DotPattern from "@/components/ui/dot-pattern";
import { WORKBRANCH } from "@/const/workbranch";

const WorkbranchCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <DotPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-screen-md text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
          {t("workbranch.cta.title")}
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {t("workbranch.cta.description")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="h-12 gap-2 rounded-full px-8">
            <Link href="#install">
              <Download className="h-5 w-5" />
              {t("workbranch.cta.primary")}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-12 gap-2 rounded-full bg-background/50 px-8 shadow-none backdrop-blur-sm"
          >
            <Link href={WORKBRANCH.repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
              {t("workbranch.cta.secondary")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkbranchCTA;
