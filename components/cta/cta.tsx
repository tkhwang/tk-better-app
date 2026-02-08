"use client";

import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import DotPattern from "@/components/ui/dot-pattern";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative py-24 px-6 overflow-hidden">
      <DotPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-40" />

      <div className="relative z-10 max-w-screen-md mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
          {t("cta.description")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 h-12 gap-2">
            <Mail className="w-5 h-5" />
            {t("cta.contact")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 gap-2 shadow-none bg-background/50 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            {t("cta.github")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
