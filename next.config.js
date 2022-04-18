const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    scope: "/",
    register: true,
    skipWaiting: true,
    disable: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputStandalone: true,
  },
});
