import type { NextConfig } from "next";
// @ts-ignore
import withPWA from 'next-pwa';

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

const config = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: false,
  disable: process.env.NODE_ENV === 'development',
  fallbacks: {
    document: '/offline.html',
  },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
        },
        networkTimeoutSeconds: 3,
      },
    },
  ],
})(nextConfig);

export default config;
