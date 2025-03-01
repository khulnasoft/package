import type { ComponentRegistry } from "../types";
export declare const goToSection: (shadow: ShadowRoot, view: string) => void;
export declare const initBackButtons: (shadow: ShadowRoot) => void;
export declare const showToast: (shadow: ShadowRoot, html: string) => void;
export declare const closeToasts: (shadow: ShadowRoot) => void;
export declare const isEditEnabled: () => boolean;
export declare const enableEdit: (enable: boolean) => void;
export declare const getEditorUrl: () => string;
export declare const getKhulnasoftContentUrl: (contentId?: string | null, blockId?: string | null) => string;
export declare const DEV_TOOLS_URL = "__DEV_TOOLS_URL__";
export declare const APP_STATE: AppState;
export declare const updateAppState: (registry: ComponentRegistry) => void;
export interface AppState extends ComponentRegistry {
}
