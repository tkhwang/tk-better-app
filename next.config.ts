import type { NextConfig } from "next";

const productShortcuts = ["workbranch", "tasteful-intent", "skills"] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return productShortcuts.map((slug) => ({
      source: `/${slug}`,
      destination: `/product/${slug}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
