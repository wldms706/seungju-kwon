import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.browartist-kwon.co.kr" }],
        destination: "https://browartist-kwon.co.kr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
