import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["playwright", "playwright-core"],
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
