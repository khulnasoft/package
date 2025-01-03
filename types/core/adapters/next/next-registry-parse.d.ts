import type ts from "typescript";
import { type ComponentInfo } from "../../../types";
import type { NextDevToolsSys } from "./index";
export declare function parseNextRegistryFromFile(sys: NextDevToolsSys): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function parseNextRegistryFromCode(sys: NextDevToolsSys, code: string): Promise<{
    sourceFile: ts.SourceFile;
    components: ComponentInfo[];
}>;
export declare function ensureKhulnasoftIsInitialized(sys: NextDevToolsSys, sourceFile: ts.SourceFile, typescriptEnabled: boolean): ts.SourceFile;
export declare function parseNextRegisteredComponentSdkGen2(sys: NextDevToolsSys, sourceFile: ts.SourceFile, cmpObjLit: ts.Node): Promise<ComponentInfo | null>;
