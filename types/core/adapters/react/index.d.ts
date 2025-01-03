import type { CreateDevToolsOptions, DevToolsAdapter, DevToolsSys } from "../../../types";
export declare function createReactDevTools(sys: CreateDevToolsOptions): Promise<DevToolsAdapter>;
export declare function createReactDevToolsSys(sys: DevToolsSys): Promise<ReactDevToolsSys>;
export interface ReactDevToolsSys extends DevToolsSys {
    srcDir: string | null;
    componentsDir: string;
    khulnasoftComponentPath: string;
    registryPath: string;
    reactConfigPath: string;
    typescriptEnabled: boolean;
    configType: "webpack" | "vite" | "";
    addExternalPackage: (pkgName: string) => void;
}
