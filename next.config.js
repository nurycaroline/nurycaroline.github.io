const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // "/blog": { page: "/blog" }
    };
  },
  assetPrefix: !debug ? "/" : "",
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  },

  images: {
    disableStaticImages: true,
  },

};
