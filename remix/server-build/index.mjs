import * as remixBuild from "@remix-run/dev/server-build";
import * as React from "react";
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
export {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
};
