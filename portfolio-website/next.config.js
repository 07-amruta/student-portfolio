import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch potential issues during development
  images: {
    domains: ['your-image-host.com'], // Add any domains from which you're fetching images (if applicable)
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // If running on the client-side, avoid bundling server-only modules
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
  // Optional: You can set up incremental static regeneration (ISR) or caching settings
  // Example for static generation with a revalidation interval:
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
