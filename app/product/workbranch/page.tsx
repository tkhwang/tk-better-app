import type { Metadata } from "next";
import WorkbranchHero from "@/components/workbranch/workbranch-hero";
import WorkbranchInstall from "@/components/workbranch/workbranch-install";
import WorkbranchStructure from "@/components/workbranch/workbranch-structure";
import WorkbranchFeatures from "@/components/workbranch/workbranch-features";

export const metadata: Metadata = {
  title: "workbranch — Git worktree task spaces",
  description:
    "workbranch is an open-source CLI for managing git worktree task spaces across one repo or many repos.",
};

export default function WorkbranchProductPage() {
  return (
    <main className="flex w-full flex-col">
      <WorkbranchHero />
      <WorkbranchInstall />
      <WorkbranchStructure />
      <WorkbranchFeatures />
    </main>
  );
}
