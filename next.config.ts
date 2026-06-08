import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/workbranch",
        destination: "/product/workbranch",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
