import type { CLIArgs } from "./index";
import type { DevToolsSys } from "../types";
import { type FigmaKhulnasoftLink } from "./figma-publish";
interface KVGetRequest {
    privateKey: string;
    spaceId: string;
}
export declare const runFigmaMigrate: (sys: DevToolsSys, args: CLIArgs) => Promise<undefined>;
export declare function getKhulnasoftSpaceFigmaLinks(kvReq: KVGetRequest): Promise<FigmaKhulnasoftLink[]>;
export {};
