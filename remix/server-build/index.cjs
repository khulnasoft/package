"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(server_build_exports);
var remixBuild = __toESM(require("@remix-run/dev/server-build"));
var React = __toESM(require("react"));
const assets = remixBuild.assets;
const assetsBuildDirectory = remixBuild.assetsBuildDirectory;
const entry = remixBuild.entry;
const remixRoutes = remixBuild.routes;
const future = remixBuild.future;
const publicPath = remixBuild.publicPath;
const RemixRootApp = remixRoutes.root.module.default;
const devToolsServerUrl = typeof process !== "undefined" && process.env.KHULNASOFT_REMIX_DEVTOOLS_URL ? process.env.KHULNASOFT_REMIX_DEVTOOLS_URL : `http://localhost:5273/`;
const KhulnasoftDevToolsScript = process.env.NODE_ENV !== "development" ? () => null : function KhulnasoftDevToolsScript2() {
  const url = new URL(`/~khulnasoft-dev-tools.js`, devToolsServerUrl);
  let c = `/* Khulnasoft Devtools (Remix) */
`;
  c += `if (typeof document !== "undefined" && typeof window !== "undefined" && !window.__khulnasoftDevTools) {
`;
  c += `  window.__khulnasoftDevTools = true;
`;
  c += `  import(${JSON.stringify(url)}).catch(e => console.error(e));
`;
  c += `}
`;
  return React.createElement("script", {
    suppressHydrationWarning: true,
    type: "module",
    dangerouslySetInnerHTML: {
      __html: c
    }
  });
};
const KhulnasoftRootApp = () => {
  const remixRoot = RemixRootApp();
  const remixRootProps = remixRoot.props;
  const remixRootChildren = Array.isArray(remixRootProps.children) ? remixRootProps.children : [remixRootProps.children];
  return {
    ...remixRoot,
    props: {
      ...remixRootProps,
      children: [...remixRootChildren, KhulnasoftDevToolsScript()]
    }
  };
};
const routes = process.env.NODE_ENV !== "development" ? remixRoutes : {
  ...remixRoutes,
  root: {
    ...remixRoutes.root,
    module: {
      ...remixRoutes.root.module,
      default: KhulnasoftRootApp
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
