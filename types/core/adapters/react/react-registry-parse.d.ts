import type ts from "typescript";
import { type ComponentInfo } from "../../../types";
import type { ReactDevToolsSys } from "./index";
export declare function parseReactRegistryFromFile(sys: ReactDevToolsSys): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseReactRegistryFromCode(sys: ReactDevToolsSys, code: string): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function ensureKhulnasoftIsInitialized(sys: ReactDevToolsSys, sourceFile: ts.SourceFile, typescriptEnabled: boolean): ts.SourceFile;
export declare function parseReactRegisteredComponentSdkGen2(sys: ReactDevToolsSys, sourceFile: ts.SourceFile, cmpObjLit: ts.Node): Promise<ComponentInfo | null>;
