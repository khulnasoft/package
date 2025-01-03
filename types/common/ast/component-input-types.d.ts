import type ts from "typescript";
import type { ComponentInput, DevToolsSys } from "../../types";
export declare function parseComponentSourcePropsFromNode(sys: DevToolsSys, typeChecker: ts.TypeChecker, fnNode: ts.Node | undefined): ComponentInput[];
export declare function normalizeKhulnasoftInputType(t: string): {
    khulnasoftType: string;
    knownType: boolean;
};
/**
 * https://www.khulnasoft.com/c/docs/custom-components-input-types
 */
export declare const INPUT_TYPES: {
    value: string;
    text: string;
}[];
export declare const STRING_TYPES: string[];
export declare const NUMBER_TYPES: string[];
export declare const BOOLEAN_TYPES: string[];
export declare const ARRAY_TYPES: string[];
export declare const OBJECT_TYPES: string[];
export declare function getPrimitiveType(t: string): "string" | "number" | "boolean" | "object" | "array";
export declare function removeQuotes(text: string): string;
export declare const resolveType: (sys: DevToolsSys, checker: ts.TypeChecker, type: ts.Type) => string[] | undefined;
export declare const typeToString: (sys: DevToolsSys, checker: ts.TypeChecker, type: ts.Type) => string;
export declare const parseDocsType: (sys: DevToolsSys, checker: ts.TypeChecker, type: ts.Type, parts: Set<string>) => void;
