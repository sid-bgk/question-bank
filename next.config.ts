import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Add headers for better SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
  // Optimize for development
  experimental: {
    // Disable some experimental features that might cause issues
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
