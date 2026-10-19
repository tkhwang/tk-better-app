import type { Metadata } from "next";
import ProductHero from "@/components/product/product-hero";
import ProductStrip from "@/components/product/product-strip";
import ProductPlate from "@/components/product/product-plate";
import ProductFeatures from "@/components/product/product-features";
import ProductReference from "@/components/product/product-reference";
import ProductInstall from "@/components/product/product-install";
import ProductCTA from "@/components/product/product-cta";
import {
  SkillsDocsMock,
  SkillsGateMock,
  SkillsPeersMock,
  SkillsSignoffMock,
} from "@/components/product/mocks/skills-mocks";
import { PRODUCTS } from "@/const/products";
import { getRepoStats, resolveFacts } from "@/lib/github";

const product = PRODUCTS.skills;

export const metadata: Metadata = {
  title: "skills — tk workflow for coding agents",
  description:
    "Agent skills for Claude Code, Codex, and other skill-aware agents. tk workflow takes one change from intent to signoff in five document-driven stages, with a human gate at each and optional multi-agent review and debate.",
};

export default async function SkillsProductPage() {
  const stats = await getRepoStats(product.repo);

  return (
    <main>
      <ProductHero product={product} />
      <ProductPlate product={product} />
      <ProductStrip slug={product.slug} values={resolveFacts(product.facts, stats)} />
      <ProductFeatures
        slug={product.slug}
        visuals={[
          <SkillsDocsMock key="docs" />,
          <SkillsGateMock key="gate" />,
          <SkillsPeersMock key="peers" />,
          <SkillsSignoffMock key="signoff" />,
        ]}
      />
      <ProductReference slug={product.slug} />
      <ProductInstall product={product} />
      <ProductCTA product={product} />
    </main>
  );
}
