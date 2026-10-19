import type { Metadata } from "next";
import ProductHero from "@/components/product/product-hero";
import ProductStrip from "@/components/product/product-strip";
import ProductPlate from "@/components/product/product-plate";
import ProductFeatures from "@/components/product/product-features";
import ProductReference from "@/components/product/product-reference";
import ProductInstall from "@/components/product/product-install";
import ProductCTA from "@/components/product/product-cta";
import {
  WorkbranchAgentsMock,
  WorkbranchBoardMock,
  WorkbranchRefreshMock,
  WorkbranchShipMock,
  WorkbranchTreeMock,
  WorkbranchUsageMock,
} from "@/components/product/mocks/workbranch-mocks";
import { PRODUCTS } from "@/const/products";
import { getRepoStats, resolveFacts } from "@/lib/github";

const product = PRODUCTS.workbranch;

export const metadata: Metadata = {
  title: "workbranch — Git worktree task spaces",
  description:
    "workbranch is an open-source CLI plus a macOS Companion for Git worktree task spaces: one task folder per feature across one repo or many, and a menu bar board that shows which AI agent is waiting on you.",
};

export default async function WorkbranchProductPage() {
  const stats = await getRepoStats(product.repo);

  return (
    <main>
      <ProductHero product={product} />
      <ProductPlate product={product} />
      <ProductStrip slug={product.slug} values={resolveFacts(product.facts, stats)} />
      <ProductFeatures
        slug={product.slug}
        visuals={[
          <WorkbranchTreeMock key="tree" />,
          <WorkbranchRefreshMock key="refresh" />,
          <WorkbranchShipMock key="ship" />,
          <WorkbranchBoardMock key="board" />,
          <WorkbranchUsageMock key="usage" />,
          <WorkbranchAgentsMock key="agents" />,
        ]}
      />
      <ProductReference slug={product.slug} />
      <ProductInstall product={product} />
      <ProductCTA product={product} />
    </main>
  );
}
