import type { DevToolsSys, PackageJSON } from "../types";
export declare function hasTsconfig(sys: DevToolsSys): Promise<boolean>;
export declare function findKhulnasoftRegistry(sys: DevToolsSys, defaultFolder: string): Promise<string>;
export declare function findPackageJson(sys: DevToolsSys, dir: string): Promise<PackageJSON | null>;
export declare function findUpNodeModules(sys: DevToolsSys, p: string): Promise<string>;
export declare function recursiveFindDir(sys: DevToolsSys, dir: string, findDirectoryName: string): Promise<string | undefined>;
