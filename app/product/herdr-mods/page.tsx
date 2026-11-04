import type { Metadata } from "next";
import ProductHero from "@/components/product/product-hero";
import ProductStrip from "@/components/product/product-strip";
import ProductPlate from "@/components/product/product-plate";
import ProductFeatures from "@/components/product/product-features";
import ProductReference from "@/components/product/product-reference";
import ProductInstall from "@/components/product/product-install";
import ProductCTA from "@/components/product/product-cta";
import {
  HerdrChangesMock,
  HerdrGraphMock,
  HerdrPatchesMock,
  HerdrSpacesMock,
  HerdrSyncMock,
  HerdrTabsMock,
} from "@/components/product/mocks/herdr-mods-mocks";
import { PRODUCTS } from "@/const/products";
import { getRepoStats, resolveFacts } from "@/lib/github";

const product = PRODUCTS["herdr-mods"];

export const metadata: Metadata = {
  title: "tkhwang-herdr-mods — a Herdr window, kept as files",
  description:
    "The main-dev layout for the Herdr app, clones of Herdr's own mods with small marked patches, and third-party mods kept with their licenses. One script applies them into ~/.config/herdr-app and backs them up.",
};

export default async function HerdrModsProductPage() {
  const stats = await getRepoStats(product.repo);

  return (
    <main>
      <ProductHero product={product} />
      <ProductPlate product={product} />
      <ProductStrip slug={product.slug} values={resolveFacts(product.facts, stats)} />
      <ProductFeatures
        slug={product.slug}
        visuals={[
          <HerdrSyncMock key="sync" />,
          <HerdrSpacesMock key="spaces" />,
          <HerdrTabsMock key="tabs" />,
          <HerdrChangesMock key="changes" />,
          <HerdrGraphMock key="graph" />,
          <HerdrPatchesMock key="patches" />,
        ]}
      />
      <ProductReference slug={product.slug} />
      <ProductInstall product={product} />
      <ProductCTA product={product} />
    </main>
  );
}
