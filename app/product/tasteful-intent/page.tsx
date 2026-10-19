import type { Metadata } from "next";
import ProductHero from "@/components/product/product-hero";
import ProductStrip from "@/components/product/product-strip";
import ProductPlate from "@/components/product/product-plate";
import ProductFeatures from "@/components/product/product-features";
import ProductReference from "@/components/product/product-reference";
import ProductInstall from "@/components/product/product-install";
import ProductCTA from "@/components/product/product-cta";
import {
  IntentDetailsMock,
  IntentEditorMock,
  IntentLocalMock,
  IntentModesMock,
  IntentTabsMock,
} from "@/components/product/mocks/tasteful-intent-mocks";
import { PRODUCTS } from "@/const/products";
import { getRepoStats, resolveFacts } from "@/lib/github";

const product = PRODUCTS["tasteful-intent"];

export const metadata: Metadata = {
  title: "Tasteful Intent — intent first, local Markdown",
  description:
    "Tasteful Intent is a local Markdown app for macOS. Write your intent in a Human workspace and open what AI makes in a separate AI workspace, without replacing the original.",
};

export default async function TastefulIntentProductPage() {
  const stats = await getRepoStats(product.repo);

  return (
    <main>
      <ProductHero product={product} />
      <ProductPlate product={product} />
      <ProductStrip slug={product.slug} values={resolveFacts(product.facts, stats)} />
      <ProductFeatures
        slug={product.slug}
        visuals={[
          <IntentEditorMock key="editor" />,
          <IntentTabsMock key="tabs" />,
          <IntentModesMock key="modes" />,
          <IntentLocalMock key="local" />,
          <IntentDetailsMock key="details" />,
        ]}
      />
      <ProductReference slug={product.slug} />
      <ProductInstall product={product} />
      <ProductCTA product={product} />
    </main>
  );
}
