import type { DevToolsSys } from "../types";
import ts from "typescript";
export declare function codeEqual(sys: DevToolsSys, n: ts.Node | null | undefined | string, expectCode: string, removeComments?: boolean): void;
export declare function createTestFsSys(rootDir: string): Promise<DevToolsSys>;
export declare function createTestMemSys(rootDir?: string): Promise<DevToolsSys>;
export declare function createRemixTestMemSys(rootDir?: string): Promise<DevToolsSys>;
export declare function createAngularTestMemSys(rootDir?: string): Promise<DevToolsSys>;
