import type { CreateDevToolsOptions, DevToolsAdapter, DevToolsSys } from "../../../types";
export declare function createNextDevTools(sys: CreateDevToolsOptions): Promise<DevToolsAdapter>;
export declare function createNextDevToolsSys(sys: DevToolsSys): Promise<NextDevToolsSys>;
/**
 * Any Next.js-specific features that are enabled. This can be used to adjust how
 * Dev Tools integrates with Next.js apps based on the installed version of
 * Next.js.
 */
interface NextDevToolsFeatures {
    /**
     * If `true`, Next.js params will be awaited before accessed.
     * Only applies to Next.js 15+
     */
    asyncParams: boolean;
}
export interface NextDevToolsSys extends DevToolsSys {
    appDir: string | null;
    pagesDir: string | null;
    srcDir: string | null;
    componentsDir: string;
    khulnasoftComponentPath: string;
    registryPath: string;
    nextConfigPath: string;
    typescriptEnabled: boolean;
    addExternalPackage: (pkgName: string) => void;
    features: NextDevToolsFeatures;
}
export {};
