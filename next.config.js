const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    scope: "/",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputStandalone: true,
  },
});
