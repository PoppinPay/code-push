interface AccessKeyBase {
    createdBy?: string;
    description?: string;
    friendlyName?: string;
    name?: string;
}
export interface AccessKey extends AccessKeyBase {
    createdTime?: number;
    expires: number;
    isSession?: boolean;
}
export interface AccessKeyRequest extends AccessKeyBase {
    ttl?: number;
}
export interface DeploymentMetrics {
    [packageLabelOrAppVersion: string]: UpdateMetrics;
}
export interface DeploymentStatusReport {
    appVersion: string;
    clientUniqueId?: string;
    deploymentKey: string;
    previousDeploymentKey?: string;
    previousLabelOrAppVersion?: string;
    label?: string;
    status?: string;
}
export interface DownloadReport {
    clientUniqueId: string;
    deploymentKey: string;
    label: string;
}
export interface PackageInfo {
    appVersion?: string;
    description?: string;
    isDisabled?: boolean;
    isMandatory?: boolean;
    label?: string;
    packageHash?: string;
    rollout?: number;
}
export interface UpdateCheckResponse extends PackageInfo {
    target_binary_range?: string;
    downloadURL?: string;
    isAvailable: boolean;
    packageSize?: number;
    shouldRunBinaryVersion?: boolean;
    updateAppVersion?: boolean;
}
export interface UpdateCheckCacheResponse {
    originalPackage: UpdateCheckResponse;
    rollout?: number;
    rolloutPackage?: UpdateCheckResponse;
}
export interface UpdateCheckRequest {
    appVersion: string;
    clientUniqueId?: string;
    deploymentKey: string;
    isCompanion?: boolean;
    label?: string;
    packageHash?: string;
}
export interface UpdateMetrics {
    active: number;
    downloaded?: number;
    failed?: number;
    installed?: number;
}
export interface Account {
    email: string;
    name: string;
    linkedProviders: string[];
}
export interface CollaboratorProperties {
    isCurrentAccount?: boolean;
    permission: string;
}
export interface CollaboratorMap {
    [email: string]: CollaboratorProperties;
}
export interface App {
    collaborators?: CollaboratorMap;
    name: string;
    deployments?: string[];
}
export interface AppCreationRequest extends App {
    manuallyProvisionDeployments?: boolean;
}
export interface Deployment {
    key?: string;
    name: string;
    package?: Package;
}
export interface BlobInfo {
    size: number;
    url: string;
}
export interface PackageHashToBlobInfoMap {
    [packageHash: string]: BlobInfo;
}
export interface Package extends PackageInfo {
    blobUrl: string;
    diffPackageMap?: PackageHashToBlobInfoMap;
    originalLabel?: string;
    originalDeployment?: string;
    releasedBy?: string;
    releaseMethod?: string;
    size: number;
    uploadTime: number;
}
export * from "./rest-definitions";
