import type { EnsureConfigResult } from "../../../types";
import type { DevToolsSys } from "../..";
export declare function viteEnsureConfigPlugin(sys: DevToolsSys, configFilePath: string, configContent: string): Promise<EnsureConfigResult>;
