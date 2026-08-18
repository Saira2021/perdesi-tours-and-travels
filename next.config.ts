import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.perdesitours.com" }],
        destination: "https://perdesitours.com/:path*",
        permanent: true,
      },
      {
        source: "/tours",
        destination: "/book-northern-pakistan-tours",
        permanent: true,
      },
      {
        source: "/tours/",
        destination: "/book-northern-pakistan-tours",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
