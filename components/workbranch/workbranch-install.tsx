"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import CommandBlock from "./command-block";
import { WORKBRANCH } from "@/const/workbranch";

const installTabs = [
  {
    id: "homebrew",
    labelKey: "workbranch.install.brew_label",
    noteKey: "workbranch.install.brew_note",
    command: WORKBRANCH.brewInstall,
  },
  {
    id: "script",
    labelKey: "workbranch.install.script_label",
    noteKey: "workbranch.install.script_note",
    command: WORKBRANCH.curlInstall,
  },
] as const;

const WorkbranchInstall = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<(typeof installTabs)[number]["id"]>(
    "homebrew",
  );

  const active = installTabs.find((tab) => tab.id === activeTab) ?? installTabs[0];

  return (
    <section id="install" className="scroll-mt-32 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-screen-md">
        <div className="mb-7 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("workbranch.install.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground md:text-lg">
            {t("workbranch.install.subtitle")}
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/80 p-3 shadow-xl shadow-primary/5 backdrop-blur-sm">
          <div className="mb-3 grid grid-cols-2 gap-2 rounded-xl bg-muted/60 p-1">
            {installTabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {t(tab.labelKey)}
                </button>
              );
            })}
          </div>

          <div className="mb-2 flex items-baseline justify-between gap-4 px-1">
            <span className="text-sm font-semibold">{t(active.labelKey)}</span>
            <span className="text-xs text-muted-foreground">{t(active.noteKey)}</span>
          </div>
          <CommandBlock command={active.command} />
        </div>
      </div>
    </section>
  );
};

export default WorkbranchInstall;
