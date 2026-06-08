"use client";

import { FolderGit2, GitPullRequestArrow } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CommandRow {
  cmd: string;
  desc: string;
}

const getCommandRows = (key: string, value: unknown): CommandRow[] => {
  if (Array.isArray(value)) {
    return value as CommandRow[];
  }

  console.warn(`Missing or invalid translation for key "${key}"`, value);
  return [];
};

const CommandList = ({
  icon,
  title,
  subtitle,
  rows,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  rows: CommandRow[];
}) => (
  <div className="rounded-2xl border border-border/50 bg-background p-7">
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
    <ul className="space-y-3">
      {rows.map((row) => (
        <li
          key={row.cmd}
          className="flex flex-col gap-1 border-t border-border/50 pt-3 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <code className="shrink-0 font-mono text-sm text-primary">{row.cmd}</code>
          <span className="text-sm text-muted-foreground sm:text-right">
            {row.desc}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const WorkbranchWorkflow = () => {
  const { t } = useTranslation();

  const lifecycleKey = "workbranch.workflow.lifecycle";
  const branchKey = "workbranch.workflow.branch";
  const lifecycle = getCommandRows(lifecycleKey, t(lifecycleKey, {
    returnObjects: true,
  }));
  const branch = getCommandRows(branchKey, t(branchKey, {
    returnObjects: true,
  }));

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("workbranch.workflow.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t("workbranch.workflow.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <CommandList
            icon={<FolderGit2 className="h-5 w-5" />}
            title={t("workbranch.workflow.lifecycle_title")}
            subtitle={t("workbranch.workflow.lifecycle_subtitle")}
            rows={lifecycle}
          />
          <CommandList
            icon={<GitPullRequestArrow className="h-5 w-5" />}
            title={t("workbranch.workflow.branch_title")}
            subtitle={t("workbranch.workflow.branch_subtitle")}
            rows={branch}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkbranchWorkflow;
