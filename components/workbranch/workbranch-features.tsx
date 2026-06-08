"use client";

import {
  Boxes,
  FolderTree,
  GitBranch,
  Layers,
  MonitorSmartphone,
  Tags,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featureIcons = [
  <FolderTree key="folder" className="h-6 w-6" />,
  <Layers key="layers" className="h-6 w-6" />,
  <GitBranch key="branch" className="h-6 w-6" />,
  <Boxes key="boxes" className="h-6 w-6" />,
  <Tags key="tags" className="h-6 w-6" />,
  <MonitorSmartphone key="platform" className="h-6 w-6" />,
];

const WorkbranchFeatures = () => {
  const { t } = useTranslation();

  const items = t("workbranch.features.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("workbranch.features.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t("workbranch.features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border/50 bg-background p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  {featureIcons[index % featureIcons.length]}
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorkbranchFeatures;
