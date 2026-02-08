"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import { useTranslation } from "react-i18next";
import Particles from "@/components/ui/particles";

const Hero06 = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[calc(100vh-7rem)] flex items-center justify-center px-6 overflow-hidden">
      <BackgroundPattern />
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#888888"
        refresh
      />

      <div className="relative z-10 text-center max-w-3xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 px-4 border-none text-xs md:text-sm mb-6 animate-in fade-in slide-in-from-bottom-3 duration-1000">
          {t("hero.badge")}
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold !leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          {t("hero.title")}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
          {t("hero.subtitle")}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          <Button size="lg" className="rounded-full text-base px-8 h-12">
            {t("hero.cta_primary")} <ArrowUpRight className="ml-2 !h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base px-8 h-12 shadow-none backdrop-blur-sm bg-background/50"
          >
            <Mail className="ml-0 mr-2 !h-5 !w-5" /> {t("hero.cta_secondary")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
