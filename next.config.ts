import type { NextConfig } from "next";

// Import bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Enable compression and optimization
  compress: true,

  // Configure webpack for better bundle splitting
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
          },
          data: {
            test: /[\\/]data[\\/]/,
            name: "data",
            priority: 10,
            chunks: "all",
          },
        },
      };
    }

    return config;
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default withBundleAnalyzer(nextConfig);
