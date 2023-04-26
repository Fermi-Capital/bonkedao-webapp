/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  reactStrictMode: true,
  // allow cors for all domains
  async headers() {
    return [
      {
        source: "*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            // allow credentials
            key: "Access-Control-Allow-Credentials",
            value: true,
          },
          // mode: "cors",
          {
            key: "mode",
            value: "no-cors",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
module.exports = withVideos();
