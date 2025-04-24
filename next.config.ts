import type { NextConfig } from "next";

// Check if using a custom domain (via CNAME) or the default GitHub Pages domain
const isCustomDomain = process.env.GITHUB_REPOSITORY 
  ? false  // When in GitHub Actions, default to GitHub Pages path
  : true;  // For local development and when using custom domain

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only use basePath and assetPrefix if NOT using a custom domain
  basePath: isCustomDomain ? '' : '/portfolio',
  assetPrefix: isCustomDomain ? '' : '/portfolio',
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
