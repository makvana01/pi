import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/Verify",
        destination: "/verify",
      },
    ];
  },
};

export default nextConfig;
