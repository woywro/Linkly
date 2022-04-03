const withPWA = require("next-pwa");

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
