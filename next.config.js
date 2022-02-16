const withPwa = require("next-pwa")

module.exports = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  }
});
