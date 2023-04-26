/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  // allow cors for all domains
  async rewrites() {
    return [
      {
        source: "*",
        destination: "*",
      },
    ];
  },
};

module.exports = nextConfig;
module.exports = withVideos();
