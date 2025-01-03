/// <reference types="node" />
import type { spawnSync } from "node:child_process";
export interface DevToolsPath {
    basename: (path: string, suffix?: string) => string;
    extname: (path: string) => string;
    dirname: (path: string) => string;
    isAbsolute: (path: string) => boolean;
    join: (...paths: string[]) => string;
    normalize: (path: string) => string;
    relative: (from: string, to: string) => string;
    resolve: (...pathSegments: string[]) => string;
}
export interface RepoInfo {
    remoteUrl: string;
    defaultBranch: string;
    currentBranch: string;
    commit: string;
}
export interface DevToolsSys extends DevToolsPath {
    cwd: () => string;
    getCwdDir: () => string;
    getAppRootDir: () => string;
    getRepoRootDir: () => string;
    exists: (path: string) => Promise<boolean>;
    existsSync: (path: string) => boolean;
    readdir: (path: string, absolutePaths?: boolean) => Promise<string[]>;
    readdirRecursive: (path: string, skipFolders?: string[]) => Promise<string[]>;
    readdirSync: (path: string) => string[];
    readFile: (filePath: string) => Promise<string | null>;
    readFileSync: (filePath: string) => string | null;
    spawnSync: typeof spawnSync | undefined;
    stat: (path: string) => Promise<{
        isDirectory: () => boolean;
        isFile: () => boolean;
    }>;
    statSync: (path: string) => {
        isDirectory: () => boolean;
        isFile: () => boolean;
    };
    writeFile: (filePath: string, content: string) => Promise<void>;
    unlink: (filePath: string) => Promise<void>;
    unlinkSync: (filePath: string) => void;
    formatCode: (filePath: string, code: string) => Promise<string>;
    hash: (str: string) => Promise<string>;
    on: (eventName: "change", callback: FileChangeCallback) => void;
    off: (eventName: "change", callback: FileChangeCallback) => void;
    debug: (...args: any[]) => void;
    launchEditor: (file: LaunchEditorFile) => Promise<void>;
    platform: () => DevtoolsPlatform;
    getDeviceId: () => Promise<string>;
    getFrameworks: () => Framework[];
    getRepoInfo: () => Promise<RepoInfo>;
    ts: typeof import("typescript");
    version: string;
    sdkVersion: SDK_VERSION_VALUES | null;
    ignoreMissingConfig?: boolean;
    kind: SPACE_KIND_VALUES;
    magicast: typeof import("magicast") | undefined;
}
export interface DevtoolsPlatform {
    runtime: string;
    os: string;
}
export type FileChangeCallback = (file: FileChangeInfo) => Promise<void> | void;
export interface FileChangeInfo {
    path: string;
    basename: string;
    extname: string;
    dirname: string;
}
export interface EnsureConfigResult {
    content: string;
    filePath: string;
    fileName: string;
    hasContentUpdates: boolean;
}
export interface FrameworkDependency {
    name: string;
    version?: string;
    devDependency?: boolean;
}
export interface BuildToolConfig {
    id: string;
    content: string;
    filePath: string;
}
export interface CreateDevToolsOptions extends DevToolsSys {
    frameworks?: Framework[];
}
export interface FrameworkKhulnasoftPageOptions {
    templateContentId: string;
    title: string;
    pathname: string;
    localePathname?: string;
}
export interface DevToolsAdapter {
    getPublicApiKey: () => Promise<EnvInfo>;
    setPublicApiKey: (opts: SetPublicApiKeyOptions) => Promise<EnvInfo>;
    khulnasoftPageOptions: () => Promise<FrameworkKhulnasoftPageOptions>;
    ensureKhulnasoftSetup: () => Promise<ModifiedFile[]>;
    ensureFigmaImportPage: () => Promise<ModifiedFile[]>;
    getRegistry: (opts?: GetRegistryOptions) => Promise<ComponentRegistry>;
    getRegistryPath: () => string;
    loadComponent: (opts: LoadComponentOptions) => Promise<LoadComponent>;
    addExternalPackage: (pkgName: string) => void;
    registerComponent: (opts: RegisterComponentOptions) => Promise<ComponentRegistry>;
    unregisterComponent: (opts: UnregisterComponentOptions) => Promise<ComponentRegistry>;
    setRegisteredComponentInfo: (opts: SetComponentInfoOptions) => Promise<ComponentRegistry>;
    setRegisteredComponentInput: (opts: SetComponentInputOptions) => Promise<ComponentRegistry>;
    getDependencies: (opts: DependenciesOptions) => FrameworkDependency[];
    getDevRunCommand: () => string;
    getCache: () => Promise<Record<string, any>>;
    setCache: (cache: Record<string, any>) => Promise<void>;
}
export interface DevTools extends DevToolsAdapter {
    exportRegistry: () => Promise<string>;
    importRegistry: (exportedRegistry: string) => Promise<ComponentRegistry>;
    framework: string;
    findAllDependencies: () => Promise<DependencyTree>;
}
export interface DevToolsServerOptions extends DevToolsSys, DevTools {
    getClientId: () => string;
    getPastSyncInfo?: (data: {
        sessionKey: string;
        since: number;
    }) => any;
    resyncSnippet?: (data: {
        syncInfo: SyncInfo;
        snippet: Snippet;
    }) => any;
    enableAppWatch: (enabled: boolean) => Promise<boolean>;
    closeAppServer: () => Promise<void>;
    restartAppServer: () => Promise<void>;
    port?: number;
}
export interface DevToolsHttpServer {
    url: string;
    port: number;
    setContext(ctx: DevToolsServerContext): void;
    close(): Promise<void>;
}
export interface KhulnasoftAppCredentials {
    publicApiKey: string | null;
}
export interface DevToolsServerContext extends Required<DevToolsServerOptions>, KhulnasoftAppCredentials {
    devToolsServerUrl: string;
    isValid: boolean;
    serverShouldRestart: boolean;
}
export interface SetPublicApiKeyOptions {
    publicApiKey: string;
}
export interface EnvInfo {
    envKey: string;
    envValue: string | null;
    file: string;
    modifiedType?: "create" | "update" | null;
}
export interface DevToolsServer {
    getUrl: () => string;
}
export type ApiRequest = ApiConnectKhulnasoftRequest | ApiDevToolsEnabledRequest | ApiGetRegistryRequest | ApiLaunchEditorRequest | ApiRegisterComponentRequest | ApiRegisteredComponentInfoRequest | ApiRegisteredComponentInputRequest | ApiLoadComponentRequest | ApiUnregisterComponentRequest | ApiValidateKhulnasoftRequest | ApiFrameworksRequest | ApiReadFileRequest | ApiWriteFileRequest | ApiReaddirRequest | ApiGetKhulnasoftCacheRequest | ApiEnsureFigmaImportPageRequest | ApiSetKhulnasoftCacheRequest | ApiTranspileModuleRequest | ApiTranspileFileRequest | ApiPastSyncInfoRequest | ApiResyncSnippetRequest | ApiLocalConfigRequest;
export interface ApiTranspileModuleRequest extends TranspileModuleOptions {
    type: "transileModule";
}
export interface ApiTranspileFileRequest extends TranspileFileOptions {
    type: "transileFile";
}
export interface ApiGetKhulnasoftCacheRequest {
    type: "getCache";
}
export interface ApiSetKhulnasoftCacheRequest {
    type: "setCache";
    data: Record<string, any>;
}
export interface ApiPastSyncInfoRequest {
    type: "getPastSyncInfo";
    data: {
        sessionKey: string;
        since: number;
    };
}
export interface ApiResyncSnippetRequest {
    type: "resyncSnippet";
    data: {
        syncInfo: SyncInfo;
        snippet: Snippet;
    };
}
export interface ApiEnsureFigmaImportPageRequest {
    type: "ensureFigmaImportPage";
}
export interface ApiConnectKhulnasoftRequest {
    type: "connectKhulnasoft";
    data: {
        publicApiKey: string;
        privateAuthKey: string;
        kind: string | null;
    };
}
export interface ApiDevToolsEnabledRequest {
    type: "enableDevTools";
    data: {
        enabled: boolean;
    };
}
export interface ApiGetRegistryRequest {
    type: "getRegistry";
    data?: GetRegistryOptions;
}
export interface GetRegistryOptions {
    readAllInputTypes?: boolean;
}
export interface ApiLocalConfigRequest {
    type: "localConfig";
}
export interface ApiLaunchEditorRequest {
    type: "launchEditor";
    data: LaunchEditorFile;
}
export interface ApiRegisterComponentRequest {
    type: "registerComponent";
    data: RegisterComponentOptions;
}
export interface ApiUnregisterComponentRequest {
    type: "unregisterComponent";
    data: UnregisterComponentOptions;
}
export interface ApiRegisteredComponentInfoRequest {
    type: "setComponentInfo";
    data: SetComponentInfoOptions;
}
export interface ApiRegisteredComponentInputRequest {
    type: "setComponentInput";
    data: SetComponentInputOptions;
}
export interface ApiLoadComponentRequest {
    type: "loadComponent";
    data: LoadComponentOptions;
}
export interface ApiValidateKhulnasoftRequest {
    type: "validateKhulnasoft";
}
export interface ApiFrameworksRequest {
    type: "getFrameworks";
}
export interface ApiReadFileRequest {
    type: "readFile";
    path: string;
}
export interface ApiWriteFileRequest {
    type: "writeFile";
    path: string;
    content: string;
}
export interface ApiReaddirRequest {
    type: "readdir";
    path: string;
}
export interface ApiResponse<T = any> {
    type?: string;
    data?: T;
    errors?: string[];
}
export interface ValidatedKhulnasoft {
    isValid: boolean;
    pathname: string;
    platform: DevtoolsPlatform;
}
export interface ConnectedKhulnasoft {
    success: boolean;
    pathname: string;
    modifiedFiles: ModifiedFile[];
    platform: DevtoolsPlatform;
    kind: SPACE_KIND_VALUES;
}
export interface LocalConfig {
    userId?: string;
    deviceId?: string;
}
export interface ModifiedFile {
    filePath: string;
    displayFilePath?: string;
    modifiedType: "create" | "update";
}
export interface Framework {
    name: string;
    version?: SemanticVersion;
}
export interface SemanticVersion {
    major?: number;
    minor?: number;
    patch?: number;
}
export interface ComponentRegistry {
    components: ComponentInfo[];
    registryPath: string;
    registryDisplayPath: string;
    frameworks: Framework[];
    dependencies: AppDependency[];
    publicApiKey: string | undefined;
    devToolsVersion: string;
}
export interface AppDependency {
    name: string;
}
export interface ExportedRegistry {
    components: MinimalComponentInfo[];
    version: number;
}
export interface LoadComponent extends ComponentRegistry {
    component: ComponentInfo;
}
export interface LoadComponentOptions {
    cmpId: string;
}
export interface RegisterComponentOptions {
    cmpId: string | string[];
}
export interface UnregisterComponentOptions {
    cmpId: string;
}
export interface SetComponentInfoOptions {
    cmpId: string;
    name?: string;
    image?: string | null;
    description?: string | null;
}
export interface SetComponentInputOptions extends Partial<Omit<ComponentInput, "isRegistered">> {
    cmpId: string;
    name: string;
    registerInput?: boolean;
}
export interface DependenciesOptions {
    sdkVersion: SDK_VERSION_VALUES | null;
}
export interface ComponentInfo {
    id: string;
    filePath: string;
    relFilePath: string;
    importPath: string;
    name: string;
    image?: string;
    description?: string;
    inputs: ComponentInput[];
    displayFilePath?: string;
    exportName: string;
    exportType?: ExportType;
    importName: string;
    nodeIndex?: number;
    isRegistered?: boolean;
    acceptsChildren?: boolean;
    meta?: Record<string, any>;
    dependencies?: AppDependency[];
    externalImportPath?: string;
}
export interface MinimalComponentInfo {
    filePath: string;
    name: string;
    image?: string;
    description?: string;
    inputs: ComponentInput[];
    exportName: string;
}
/**
 * Extends the @khulnasoft.com/sdk Input type to include additional properties.
 * If a property is set to null, it will be removed from the input.
 */
export interface ComponentInput {
    /** This is the name of the component prop this input represents */
    name: string;
    /** A friendlier name to show in the UI if the component prop name is not ideal for end users. Setting to null will remove the value. */
    friendlyName?: string | null;
    /** A default value to use. Setting to null will remove the value. */
    defaultValue?: string | number | boolean | null;
    /**
     * The type of input to use, such as 'text'
     *
     * See all available inputs [here](https://www.khulnasoft.com/c/docs/custom-react-components#input-types)
     * and you can create your own custom input types and associated editor UIs with [plugins](https://www.khulnasoft.com/c/docs/extending/plugins)
     */
    type: string;
    /** Is this input mandatory or not. Setting to null will remove the setting. */
    required?: boolean | null;
    /**
     * Additional text to render in the UI to give guidance on how to use this
     *
     * @example
     * ```js
     * helperText: 'Be sure to use a proper URL, starting with "https://"'
     * 111
     */
    helperText?: string | null;
    /**
     * For "text" input type, specifying an enum will show a dropdown of options instead
     */
    enum?: string[] | {
        label: string;
        value: string | number | boolean;
        helperText?: string;
    }[];
    meta?: Record<string, any>;
    /** Add-on data that should not go in the registry */
    isRegistered?: boolean;
    hideFromUI?: boolean;
}
export type ExportType = "default" | "named";
export interface PackageJSON {
    dependencies?: {
        [pkgName: string]: string;
    };
    devDependencies?: {
        [pkgName: string]: string;
    };
    scripts?: {
        [scriptName: string]: string;
    };
    [key: string]: any;
}
export type ModuleFormat = "esm" | "cjs";
export interface LaunchEditorFile {
    filePath: string;
    line?: number;
    column?: number;
}
export interface TranspileFileOptions {
    filePath: string;
    compilerOptions: import("typescript").CompilerOptions;
}
export interface TranspileModuleOptions {
    code: string;
    filePath?: string;
    compilerOptions: import("typescript").CompilerOptions;
}
export interface TranspileResult {
    code: string | null;
    output: string | null;
    diagnostics: TranspileDiagnostic[];
}
export interface TranspileDiagnostic {
    messageText: string;
}
export declare const SDK_VERSIONS: {
    readonly gen1: "Gen 1";
    readonly gen2: "Gen 2";
};
type SDK_VERSION_KEYS = keyof typeof SDK_VERSIONS;
export type SDK_VERSION_VALUES = (typeof SDK_VERSIONS)[SDK_VERSION_KEYS];
export interface SDKVersionInfo {
    version: SDK_VERSION_VALUES;
    recommended: boolean;
}
export interface SDKFrameworks {
    [key: string]: SDKVersionInfo[];
}
export interface UpdateRegistry {
    addCmpToRegistry: ComponentInfo | null;
    removeCmpFromRegistry: ComponentInfo | null;
    updateRegisteredCmp: ComponentInfo | null;
    nodeIndex: number;
    components: ComponentInfo[];
}
export interface AddCliOptions {
    cwd: string;
    command?: string;
    snippetId?: string;
    snippet?: Snippet;
    path?: string;
}
export interface FileNode {
    name: string;
    code: string;
    path: string;
    timestamp?: number;
    snippetId?: string;
}
export interface FolderNode {
    name: string;
    path: string;
    files: (FileNode | FolderNode)[];
}
export interface Snippet {
    createdDate: number;
    contentId: string;
    code: string;
    framework: string;
    suggestedName: string;
    id: string;
    files: Array<FileNode | FolderNode>;
    sessionKey: string;
}
export interface SyncInfo {
    snippet: Snippet;
    pathInput: string;
    writtenFiles: Array<FileNode>;
    timeStamp: number;
}
export interface Package {
    name: string;
    subPackages: string[];
}
export type DependencyTree = Package[];
export declare const SPACE_KIND: {
    readonly CMS: "cms";
    readonly VCP: "vcp";
    readonly HYBRID: "hybrid";
};
type SPACE_KIND_KEYS = keyof typeof SPACE_KIND;
export type SPACE_KIND_VALUES = (typeof SPACE_KIND)[SPACE_KIND_KEYS] | null;
export {};
