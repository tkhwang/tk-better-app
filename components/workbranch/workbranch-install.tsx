"use client";

import { useTranslation } from "react-i18next";
import CommandBlock from "./command-block";
import { WORKBRANCH } from "@/const/workbranch";

const WorkbranchInstall = () => {
  const { t } = useTranslation();

  return (
    <section id="install" className="scroll-mt-32 px-6 py-24">
      <div className="mx-auto max-w-screen-md">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("workbranch.install.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t("workbranch.install.subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-sm font-semibold">
                {t("workbranch.install.brew_label")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("workbranch.install.brew_note")}
              </span>
            </div>
            <CommandBlock command={WORKBRANCH.brewInstall} />
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-sm font-semibold">
                {t("workbranch.install.curl_label")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("workbranch.install.curl_note")}
              </span>
            </div>
            <CommandBlock command={WORKBRANCH.curlInstall} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkbranchInstall;
