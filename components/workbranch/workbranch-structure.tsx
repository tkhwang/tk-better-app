"use client";

import { FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const tree = [
  { text: "my-project/", tone: "root" },
  { text: "├─ _base/", tone: "base" },
  { text: "│  ├─ frontend    main", tone: "muted" },
  { text: "│  └─ backend     main", tone: "muted" },
  { text: "│", tone: "muted" },
  { text: "├─ feat-login/", tone: "task" },
  { text: "│  ├─ frontend    feat/login", tone: "muted" },
  { text: "│  └─ backend     feat/login", tone: "muted" },
  { text: "│", tone: "muted" },
  { text: "└─ fix-api/", tone: "task" },
  { text: "   ├─ frontend    fix/api", tone: "muted" },
  { text: "   └─ backend     fix/api", tone: "muted" },
] as const;

const toneClass = {
  root: "text-foreground",
  base: "text-sky-600 dark:text-sky-400",
  task: "text-primary",
  muted: "text-muted-foreground",
};

const WorkbranchStructure = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FolderGit2 className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("workbranch.structure.title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
            {t("workbranch.structure.subtitle")}
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
              <div>
                <p className="font-semibold tracking-tight">
                  {t("workbranch.structure.base_label")}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {t("workbranch.structure.base_desc")}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              <div>
                <p className="font-semibold tracking-tight">
                  {t("workbranch.structure.task_label")}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {t("workbranch.structure.task_desc")}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-xl shadow-primary/5 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              {t("workbranch.structure.window_title")}
            </span>
          </div>

          <pre className="overflow-x-auto p-5 text-sm leading-7 md:text-base">
            {tree.map((line) => (
              <code key={line.text} className={`block font-mono ${toneClass[line.tone]}`}>
                {line.text}
              </code>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default WorkbranchStructure;
