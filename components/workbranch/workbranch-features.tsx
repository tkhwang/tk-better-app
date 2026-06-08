"use client";

import { GitBranch, GitMerge, Layers3, SquareTerminal } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CommandItem {
  cmd: string;
  desc: string;
}

interface FeatureGroup {
  title: string;
  description: string;
  note?: string;
  commands: CommandItem[];
}

const icons = [
  <Layers3 key="lifecycle" className="h-6 w-6" />,
  <GitBranch key="branch" className="h-6 w-6" />,
  <GitMerge key="combined" className="h-6 w-6" />,
  <SquareTerminal key="tool" className="h-6 w-6" />,
];

const isCommandItem = (value: unknown): value is CommandItem => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Record<string, unknown>;
  return typeof item.cmd === "string" && typeof item.desc === "string";
};

const isFeatureGroup = (value: unknown): value is FeatureGroup => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const group = value as Record<string, unknown>;
  return (
    typeof group.title === "string" &&
    typeof group.description === "string" &&
    (group.note === undefined || typeof group.note === "string") &&
    Array.isArray(group.commands) &&
    group.commands.every(isCommandItem)
  );
};

const WorkbranchFeatures = () => {
  const { t } = useTranslation();

  const rawGroups = t("workbranch.features.groups", {
    returnObjects: true,
  });
  const groups: FeatureGroup[] = Array.isArray(rawGroups) && rawGroups.every(isFeatureGroup)
    ? rawGroups
    : [];

  if (!groups.length && (!Array.isArray(rawGroups) || rawGroups.length > 0)) {
    console.warn(
      'Missing or invalid translation for key "workbranch.features.groups"',
      rawGroups,
    );
  }

  return (
    <section className="bg-muted/30 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("workbranch.features.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t("workbranch.features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {groups.map((group, index) => (
              <article
                key={group.title}
                className="rounded-2xl border border-border/50 bg-background p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {icons[index % icons.length]}
                </div>

                <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {group.commands.map((command) => (
                    <li
                      key={command.cmd}
                      className="rounded-xl border border-border/50 bg-muted/30 p-4"
                    >
                      <code className="font-mono text-sm font-semibold text-primary">
                        {command.cmd}
                      </code>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {command.desc}
                      </p>
                    </li>
                  ))}
                </ul>

                {group.note ? (
                  <div className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-sm leading-6 text-foreground/80">
                      {group.note}
                    </p>
                  </div>
                ) : null}
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorkbranchFeatures;
