/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"], // For Google profile images
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
