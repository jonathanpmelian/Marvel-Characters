import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.annihil.us",
      },
      {
        protocol: "http",
        hostname: "i.annihil.us",
      },
    ],
  },
};

export default nextConfig;
