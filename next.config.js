/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"], // For Google profile images
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "https://pizza-dashboard-bgzd.vercel.app",
      ],
    },
  },
};

module.exports = nextConfig;
