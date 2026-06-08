import type { Metadata } from "next";
import WorkbranchHero from "@/components/workbranch/workbranch-hero";
import WorkbranchInstall from "@/components/workbranch/workbranch-install";
import WorkbranchFeatures from "@/components/workbranch/workbranch-features";
import WorkbranchWorkflow from "@/components/workbranch/workbranch-workflow";
import WorkbranchCTA from "@/components/workbranch/workbranch-cta";

export const metadata: Metadata = {
  title: "workbranch — Git worktree task spaces, without the ceremony",
  description:
    "workbranch is an open-source CLI that creates one task folder per feature, works across one repo or many, and keeps your git worktree branch sync commands short and safe.",
};

export default function WorkbranchProductPage() {
  return (
    <main className="flex w-full flex-col">
      <WorkbranchHero />
      <WorkbranchInstall />
      <WorkbranchFeatures />
      <WorkbranchWorkflow />
      <WorkbranchCTA />
    </main>
  );
}
