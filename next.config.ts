import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["*"],
    minimumCacheTTL: 60000,
  },
};

export default nextConfig;
