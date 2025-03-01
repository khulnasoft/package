import { KhulnasoftDevToolsPlugin } from "../webpack/index.mjs";
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

export default (opts = {}) => {
  return (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        if (opts.enabled !== false) {
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
