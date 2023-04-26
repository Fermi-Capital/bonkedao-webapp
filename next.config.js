/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  // allow cors for all domains
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
module.exports = withVideos();
