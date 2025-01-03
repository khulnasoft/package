import type { CreateDevToolsOptions, DevToolsAdapter, DevToolsSys } from "../../../types";
export declare function createAngularDevTools(sys: CreateDevToolsOptions): Promise<DevToolsAdapter>;
export declare function createAngularDevToolsSys(sys: DevToolsSys): Promise<AngularDevToolsSys>;
export interface AngularDevToolsSys extends DevToolsSys {
    appDir: string;
    srcDir: string;
    componentsDir: string;
    registryPath: string;
    angularConfigPath: string;
    typescriptEnabled: boolean;
    khulnasoftPageComponentPath: string;
    hasAppModule: boolean;
}
