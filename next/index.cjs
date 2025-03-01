const orgProcessExit = process.exit;

const noopProcessExit = (code) => {
  if (code === 0) {
    try {
      throw new Error("process.exit(0)");
    } catch (e) {
      const stack = String(e?.stack);
      if (stack.includes("cleanup") && stack.includes("next-dev")) {
        return;
      }
    }
  }

  orgProcessExit(code);
};

process.exit = noopProcessExit;

module.exports = (opts = {}) => {
  return (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        if (opts.enabled !== false) {
          const { KhulnasoftDevToolsPlugin } = require("../webpack/index.cjs");
          config.plugins.push(new KhulnasoftDevToolsPlugin(opts));
        }

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }
        return config;
      },
    });
  };
};
