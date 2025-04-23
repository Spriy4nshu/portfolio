import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Configure basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // Configure assetPrefix for GitHub Pages deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    domains: ['priyanshu.id'],
    formats: ['image/webp'],
    unoptimized: true, // Required for static exports
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Add any rewrites here if needed
      ],
    };
  },
};

export default nextConfig;
