import type { EnsureConfigResult } from "../../../types";
import type { DevToolsSys } from "../..";
export declare function angularEnsureConfigPlugin(sys: DevToolsSys, configFilePath: string, configContent: string): Promise<EnsureConfigResult>;
export declare function angularEnsureMainFileUpdate(sys: DevToolsSys): Promise<void>;
export declare function angularEnsureMainFileCode(sys: DevToolsSys, code: string): Promise<string>;
export declare function updatePackage(sys: DevToolsSys): Promise<void>;
export declare function packageConcurrentlyScriptUpdate(sys: DevToolsSys, code: string): string | undefined;
export declare const DEV_TOOLS_SCRIPT_NAME = "khulnasoft-dev";
export declare const DEV_TOOLS_COMMAND = "npx khulnasoft-dev-tools";
