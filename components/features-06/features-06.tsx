"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ExpertiseSection = () => {
  const { t } = useTranslation();

  const expertiseIcons = [
    <Bot key="bot" className="w-6 h-6" />,
    <Code2 key="code" className="w-6 h-6" />,
    <Sparkles key="sparkles" className="w-6 h-6" />,
  ];

  // We can't easily map over t('expertise.items') if it's an array in json but i18next returns it differently depending on config.
  // Standard way is to use returnObjects: true or just iterate if we know the count.
  const items = t("expertise.items", { returnObjects: true }) as Array<{
    category: string;
    title: string;
    description: string;
    link: string;
  }>;

  return (
    <div id="expertise" className="py-24 px-6 bg-muted/30">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("expertise.title")}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t("expertise.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border/50 bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {expertiseIcons[index % expertiseIcons.length]}
                </div>
                <span className="uppercase font-semibold text-xs tracking-wider text-muted-foreground">
                  {item.category}
                </span>
                <h4 className="my-3 text-2xl font-bold tracking-tight">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
                <Button
                  variant="ghost"
                  asChild
                  className="group/btn p-0 hover:bg-transparent text-primary font-semibold"
                >
                  <Link href={item.link}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
