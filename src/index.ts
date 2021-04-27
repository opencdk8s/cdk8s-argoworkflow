import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
import * as swagger from './imports/swagger';

import * as k8s from './k8s';


export type Item = any;

export type Amount = number;

export interface GoogleProtobufAny {
    type_url?: string;
    value?: string; // byte
}

export interface GrpcGatewayRuntimeError {
    code?: number;
    details?: GoogleProtobufAny[];
    error?: string;
    message?: string;
}

export interface GrpcGatewayRuntimeStreamError {
    details?: GoogleProtobufAny[];
    grpc_code?: number;
    http_code?: number;
    http_status?: string;
    message?: string;
}

export interface ArchiveStrategy {
    none?: NoneStrategy;
    tar?: TarStrategy;
    zip?: ZipStrategy;
}

export interface ArchivedWorkflowDeletedResponse {
}

export interface Arguments {
    artifacts?: Artifact[];
    parameters?: Parameter[];
}

export interface Artifact {
    archive?: ArchiveStrategy;
    archiveLogs?: boolean;
    artifactory?: ArtifactoryArtifact;
    from?: string;
    fromExpression?: string;
    gcs?: GCSArtifact;
    git?: GitArtifact;
    globalName?: string;
    hdfs?: HDFSArtifact;
    http?: HTTPArtifact;
    mode?: number;
    name: string;
    optional?: boolean;
    oss?: OSSArtifact;
    path?: string;
    raw?: RawArtifact;
    recurseMode?: boolean;
    s3?: S3Artifact;
    subPath?: string;
}

export interface ArtifactLocation {
    archiveLogs?: boolean;
    artifactory?: ArtifactoryArtifact;
    gcs?: GCSArtifact;
    git?: GitArtifact;
    hdfs?: HDFSArtifact;
    http?: HTTPArtifact;
    oss?: OSSArtifact;
    raw?: RawArtifact;
    s3?: S3Artifact;
}

export interface ArtifactPaths {
    archive?: ArchiveStrategy;
    archiveLogs?: boolean;
    artifactory?: ArtifactoryArtifact;
    from?: string;
    fromExpression?: string;
    gcs?: GCSArtifact;
    git?: GitArtifact;
    globalName?: string;
    hdfs?: HDFSArtifact;
    http?: HTTPArtifact;
    mode?: number;
    name: string;
    optional?: boolean;
    oss?: OSSArtifact;
    path?: string;
    raw?: RawArtifact;
    recurseMode?: boolean;
    s3?: S3Artifact;
    subPath?: string;
}

export interface ArtifactRepositoryRef {
    configMap?: string;
    key?: string;
}

export interface ArtifactRepositoryRefStatus {
    configMap?: string;
    default?: boolean;
    key?: string;
    namespace?: string;
}

export interface ArtifactoryArtifact {
    passwordSecret?: k8s.SecretKeySelector;
    url: string;
    usernameSecret?: k8s.SecretKeySelector;
}

export interface Backoff {
    duration?: string;
    factor?: k8s.IntOrString;
    maxDuration?: string;
}

export interface Cache {
    configMap: k8s.ConfigMapKeySelector;
}

export interface ClusterWorkflowTemplate {
    apiVersion?: string;
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: WorkflowTemplateSpec;
}

export interface ClusterWorkflowTemplateCreateRequest {
    createOptions?: k8s.CreateOptions;
    template?: ClusterWorkflowTemplate;
}

export interface ClusterWorkflowTemplateDeleteResponse {
}

export interface ClusterWorkflowTemplateLintRequest {
    createOptions?: k8s.CreateOptions;
    template?: ClusterWorkflowTemplate;
}

export interface ClusterWorkflowTemplateList {
    apiVersion?: string;
    items: ClusterWorkflowTemplate[];
    kind?: string;
    metadata: k8s.ListMeta;
}

export interface ClusterWorkflowTemplateUpdateRequest {
    name?: string;
    template?: ClusterWorkflowTemplate;
}

export interface Condition {
    message?: string;
    status?: string;
    type?: string;
}

export interface ContainerNode {
    args?: string[];
    command?: string[];
    dependencies?: string[];
    env?: k8s.EnvVar[];
    envFrom?: k8s.EnvFromSource[];
    image?: string;
    imagePullPolicy?: string;
    lifecycle?: k8s.Lifecycle;
    livenessProbe?: k8s.Probe;
    name: string;
    ports?: k8s.ContainerPort[];
    readinessProbe?: k8s.Probe;
    resources?: k8s.ResourceRequirements;
    securityContext?: k8s.SecurityContext;
    startupProbe?: k8s.Probe;
    stdin?: boolean;
    stdinOnce?: boolean;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    tty?: boolean;
    volumeDevices?: k8s.VolumeDevice[];
    volumeMounts?: k8s.VolumeMount[];
    workingDir?: string;
}

export interface ContainerSetTemplate {
    containers: ContainerNode[];
    volumeMounts?: k8s.VolumeMount[];
}

export interface ContinueOn {
    error?: boolean;
    failed?: boolean;
}

export interface Counter {
    value: string;
}

export interface CreateCronWorkflowRequest {
    createOptions?: k8s.CreateOptions;
    cronWorkflow?: CronWorkflow;
    namespace?: string;
}

export interface CreateS3BucketOptions {
    objectLocking?: boolean;
}

export interface CronWorkflow {
    apiVersion?: string;
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: CronWorkflowSpec;
    status?: CronWorkflowStatus;
}

export interface CronWorkflowDeletedResponse {
}

export interface CronWorkflowList {
    apiVersion?: string;
    items: CronWorkflow[];
    kind?: string;
    metadata: k8s.ListMeta;
}

export interface CronWorkflowResumeRequest {
    name?: string;
    namespace?: string;
}

export interface CronWorkflowSpec {
    concurrencyPolicy?: string;
    failedJobsHistoryLimit?: number;
    schedule: string;
    startingDeadlineSeconds?: number;
    successfulJobsHistoryLimit?: number;
    suspend?: boolean;
    timezone?: string;
    workflowMetadata?: k8s.ObjectMeta;
    workflowSpec: WorkflowSpec;
}

export interface CronWorkflowStatus {
    active: k8s.ObjectReference[];
    conditions: Condition[];
    lastScheduledTime: Date; // date-time
}

export interface CronWorkflowSuspendRequest {
    name?: string;
    namespace?: string;
}

export interface DAGTask {
    arguments?: Arguments;
    continueOn?: ContinueOn;
    dependencies?: string[];
    depends?: string;
    name: string;
    onExit?: string;
    template?: string;
    templateRef?: TemplateRef;
    when?: string;
    withItems?: Item[];
    withParam?: string;
    withSequence?: Sequence;
}

export interface DAGTemplate {
    failFast?: boolean;
    target?: string;
    tasks: DAGTask[];
}

export interface Data {
    source: DataSource;
    transformation: TransformationStep[];
}

export interface DataSource {
    artifactPaths?: ArtifactPaths;
}

export interface Event {
    selector: string;
}

export interface EventResponse {
}

export interface ExecutorConfig {
    serviceAccountName?: string;
}

export interface GCSArtifact {
    bucket?: string;
    key: string;
    serviceAccountKeySecret?: k8s.SecretKeySelector;
}

export interface Gauge {
    realtime: boolean;
    value: string;
}

export interface GetUserInfoResponse {
    email?: string;
    emailVerified?: boolean;
    groups?: string[];
    issuer?: string;
    serviceAccountName?: string;
    subject?: string;
}

export interface GitArtifact {
    depth?: number;
    fetch?: string[];
    insecureIgnoreHostKey?: boolean;
    passwordSecret?: k8s.SecretKeySelector;
    repo: string;
    revision?: string;
    sshPrivateKeySecret?: k8s.SecretKeySelector;
    usernameSecret?: k8s.SecretKeySelector;
}

export interface HDFSArtifact {
    addresses?: string[];
    force?: boolean;
    hdfsUser?: string;
    krbCCacheSecret?: k8s.SecretKeySelector;
    krbConfigConfigMap?: k8s.ConfigMapKeySelector;
    krbKeytabSecret?: k8s.SecretKeySelector;
    krbRealm?: string;
    krbServicePrincipalName?: string;
    krbUsername?: string;
    path: string;
}

export interface HTTPArtifact {
    headers?: Header[];
    url: string;
}

export interface Header {
    name: string;
    value: string;
}

export interface Histogram {
    buckets: Amount[];
    value: string;
}

export interface InfoResponse {
    links?: Link[];
    managedNamespace?: string;
}

export interface Inputs {
    artifacts?: Artifact[];
    parameters?: Parameter[];
}

export interface Link {
    name: string;
    scope: string;
    url: string;
}

export interface LintCronWorkflowRequest {
    cronWorkflow?: CronWorkflow;
    namespace?: string;
}

export interface LogEntry {
    content?: string;
    podName?: string;
}

export interface MemoizationStatus {
    cacheName: string;
    hit: boolean;
    key: string;
}

export interface Memoize {
    cache: Cache;
    key: string;
    maxAge: string;
}

export interface Metadata {
    annotations?: {
        [name: string]: string;
    }
;
    labels?: {
        [name: string]: string;
    }
;
}

export interface MetricLabel {
    key: string;
    value: string;
}

export interface Metrics {
    prometheus: Prometheus[];
}

export interface Mutex {
    name?: string;
}

export interface MutexHolding {
    holder?: string;
    mutex?: string;
}

export interface MutexStatus {
    holding?: MutexHolding[];
    waiting?: MutexHolding[];
}

export interface NodeStatus {
    boundaryID?: string;
    children?: string[];
    daemoned?: boolean;
    displayName?: string;
    estimatedDuration?: number;
    finishedAt?: Date; // date-time
    hostNodeName?: string;
    id: string;
    inputs?: Inputs;
    memoizationStatus?: MemoizationStatus;
    message?: string;
    name: string;
    outboundNodes?: string[];
    outputs?: Outputs;
    phase?: string;
    podIP?: string;
    progress?: string;
    resourcesDuration?: {
        [name: string]: number; // int64
    }
;
    startedAt?: Date; // date-time
    synchronizationStatus?: NodeSynchronizationStatus;
    templateName?: string;
    templateRef?: TemplateRef;
    templateScope?: string;
    type: string;
}

export interface NodeSynchronizationStatus {
    waiting?: string;
}

export interface NoneStrategy {
}

export interface OSSArtifact {
    accessKeySecret?: k8s.SecretKeySelector;
    bucket?: string;
    createBucketIfNotPresent?: boolean;
    endpoint?: string;
    key: string;
    secretKeySecret?: k8s.SecretKeySelector;
    securityToken?: string;
}

export interface Outputs {
    artifacts?: Artifact[];
    exitCode?: string;
    parameters?: Parameter[];
    result?: string;
}

export type ParallelSteps = WorkflowStep[];
export interface Parameter {
    default?: string;
    enum?: string[];
    globalName?: string;
    name: string;
    value?: string;
    valueFrom?: ValueFrom;
}

export interface PodGC {
    labelSelector?: k8s.LabelSelector;
    strategy?: string;
}

export interface Prometheus {
    counter?: Counter;
    gauge?: Gauge;
    help: string;
    histogram?: Histogram;
    labels?: MetricLabel[];
    name: string;
    when?: string;
}

export interface RawArtifact {
    data: string;
}

export interface ResourceTemplate {
    action: string;
    failureCondition?: string;
    flags?: string[];
    manifest?: string;
    mergeStrategy?: string;
    setOwnerReference?: boolean;
    successCondition?: string;
}

export interface RetryAffinity {
    nodeAntiAffinity?: RetryNodeAntiAffinity;
}

export interface RetryNodeAntiAffinity {
}

export interface RetryStrategy {
    affinity?: RetryAffinity;
    backoff?: Backoff;
    limit?: k8s.IntOrString;
    retryPolicy?: string;
}

export interface S3Artifact {
    accessKeySecret?: k8s.SecretKeySelector;
    bucket?: string;
    createBucketIfNotPresent?: CreateS3BucketOptions;
    endpoint?: string;
    insecure?: boolean;
    key?: string;
    region?: string;
    roleARN?: string;
    secretKeySecret?: k8s.SecretKeySelector;
    useSDKCreds?: boolean;
}

export interface ScriptTemplate {
    args?: string[];
    command?: string[];
    env?: k8s.EnvVar[];
    envFrom?: k8s.EnvFromSource[];
    image: string;
    imagePullPolicy?: string;
    lifecycle?: k8s.Lifecycle;
    livenessProbe?: k8s.Probe;
    name?: string;
    ports?: k8s.ContainerPort[];
    readinessProbe?: k8s.Probe;
    resources?: k8s.ResourceRequirements;
    securityContext?: k8s.SecurityContext;
    source: string;
    startupProbe?: k8s.Probe;
    stdin?: boolean;
    stdinOnce?: boolean;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    tty?: boolean;
    volumeDevices?: k8s.VolumeDevice[];
    volumeMounts?: k8s.VolumeMount[];
    workingDir?: string;
}

export interface SemaphoreHolding {
    holders?: string[];
    semaphore?: string;
}

export interface SemaphoreRef {
    configMapKeyRef?: k8s.ConfigMapKeySelector;
}

export interface SemaphoreStatus {
    holding?: SemaphoreHolding[];
    waiting?: SemaphoreHolding[];
}

export interface Sequence {
    count?: k8s.IntOrString;
    end?: k8s.IntOrString;
    format?: string;
    start?: k8s.IntOrString;
}

export interface Submit {
    arguments?: Arguments;
    metadata?: k8s.ObjectMeta;
    workflowTemplateRef: WorkflowTemplateRef;
}

export interface SubmitOpts {
    annotations?: string;
    dryRun?: boolean;
    entryPoint?: string;
    generateName?: string;
    labels?: string;
    name?: string;
    ownerReference?: k8s.OwnerReference;
    parameterFile?: string;
    parameters?: string[];
    serverDryRun?: boolean;
    serviceAccount?: string;
}

export interface SuppliedValueFrom {
}

export interface SuspendTemplate {
    duration?: string;
}

export interface Synchronization {
    mutex?: Mutex;
    semaphore?: SemaphoreRef;
}

export interface SynchronizationStatus {
    mutex?: MutexStatus;
    semaphore?: SemaphoreStatus;
}

export interface TTLStrategy {
    secondsAfterCompletion?: number;
    secondsAfterFailure?: number;
    secondsAfterSuccess?: number;
}

export interface TarStrategy {
    compressionLevel?: number;
}

export interface Template {
    activeDeadlineSeconds?: k8s.IntOrString;
    affinity?: k8s.Affinity;
    archiveLocation?: ArtifactLocation;
    automountServiceAccountToken?: boolean;
    container?: k8s.Container;
    containerSet?: ContainerSetTemplate;
    daemon?: boolean;
    dag?: DAGTemplate;
    data?: Data;
    executor?: ExecutorConfig;
    failFast?: boolean;
    hostAliases?: k8s.HostAlias[];
    initContainers?: UserContainer[];
    inputs?: Inputs;
    memoize?: Memoize;
    metadata?: Metadata;
    metrics?: Metrics;
    name?: string;
    nodeSelector?: {
        [name: string]: string;
    }
;
    outputs?: Outputs;
    parallelism?: number;
    podSpecPatch?: string;
    priority?: number;
    priorityClassName?: string;
    resource?: ResourceTemplate;
    retryStrategy?: RetryStrategy;
    schedulerName?: string;
    script?: ScriptTemplate;
    securityContext?: k8s.PodSecurityContext;
    serviceAccountName?: string;
    sidecars?: UserContainer[];
    steps?: ParallelSteps[];
    suspend?: SuspendTemplate;
    synchronization?: Synchronization;
    timeout?: string;
    tolerations?: k8s.Toleration[];
    volumes?: k8s.Volume[];
}

export interface TemplateRef {
    clusterScope?: boolean;
    name?: string;
    template?: string;
}

export interface TransformationStep {
    expression: string;
}

export interface UpdateCronWorkflowRequest {
    cronWorkflow?: CronWorkflow;
    name?: string;
    namespace?: string;
}

export interface UserContainer {
    args?: string[];
    command?: string[];
    env?: k8s.EnvVar[];
    envFrom?: k8s.EnvFromSource[];
    image?: string;
    imagePullPolicy?: string;
    lifecycle?: k8s.Lifecycle;
    livenessProbe?: k8s.Probe;
    mirrorVolumeMounts?: boolean;
    name: string;
    ports?: k8s.ContainerPort[];
    readinessProbe?: k8s.Probe;
    resources?: k8s.ResourceRequirements;
    securityContext?: k8s.SecurityContext;
    startupProbe?: k8s.Probe;
    stdin?: boolean;
    stdinOnce?: boolean;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    tty?: boolean;
    volumeDevices?: k8s.VolumeDevice[];
    volumeMounts?: k8s.VolumeMount[];
    workingDir?: string;
}

export interface ValueFrom {
    default?: string;
    event?: string;
    expression?: string;
    jqFilter?: string;
    jsonPath?: string;
    parameter?: string;
    path?: string;
    supplied?: SuppliedValueFrom;
}

export interface Version {
    buildDate: string;
    compiler: string;
    gitCommit: string;
    gitTag: string;
    gitTreeState: string;
    goVersion: string;
    platform: string;
    version: string;
}

export interface VolumeClaimGC {
    strategy?: string;
}

export interface Workflow {
    apiVersion?: string;
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: WorkflowSpec;
    status?: WorkflowStatus;
}

export interface WorkflowCreateRequest {
    createOptions?: k8s.CreateOptions;
    instanceID?: string;
    namespace?: string;
    serverDryRun?: boolean;
    workflow?: Workflow;
}

export interface WorkflowDeleteResponse {
}

export interface WorkflowEventBinding {
    apiVersion?: string;
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: WorkflowEventBindingSpec;
}

export interface WorkflowEventBindingList {
    apiVersion?: string;
    items: WorkflowEventBinding[];
    kind?: string;
    metadata: k8s.ListMeta;
}

export interface WorkflowEventBindingSpec {
    event: Event;
    submit?: Submit;
}

export interface WorkflowLintRequest {
    namespace?: string;
    workflow?: Workflow;
}

export interface WorkflowList {
    apiVersion?: string;
    items: Workflow[];
    kind?: string;
    metadata: k8s.ListMeta;
}

export interface WorkflowResubmitRequest {
    memoized?: boolean;
    name?: string;
    namespace?: string;
}

export interface WorkflowResumeRequest {
    name?: string;
    namespace?: string;
    nodeFieldSelector?: string;
}

export interface WorkflowRetryRequest {
    name?: string;
    namespace?: string;
    nodeFieldSelector?: string;
    restartSuccessful?: boolean;
}

export interface WorkflowSetRequest {
    message?: string;
    name?: string;
    namespace?: string;
    nodeFieldSelector?: string;
    outputParameters?: string;
    phase?: string;
}

export interface WorkflowSpec {
    activeDeadlineSeconds?: number;
    affinity?: k8s.Affinity;
    arguments?: Arguments;
    artifactRepositoryRef?: ArtifactRepositoryRef;
    automountServiceAccountToken?: boolean;
    dnsConfig?: k8s.PodDnsConfig;
    dnsPolicy?: string;
    entrypoint?: string;
    executor?: ExecutorConfig;
    hostAliases?: k8s.HostAlias[];
    hostNetwork?: boolean;
    imagePullSecrets?: k8s.LocalObjectReference[];
    metrics?: Metrics;
    nodeSelector?: {
        [name: string]: string;
    }
;
    onExit?: string;
    parallelism?: number;
    podDisruptionBudget?: k8s.PodDisruptionBudgetSpec;
    podGC?: PodGC;
    podMetadata?: Metadata;
    podPriority?: number;
    podPriorityClassName?: string;
    podSpecPatch?: string;
    priority?: number;
    retryStrategy?: RetryStrategy;
    schedulerName?: string;
    securityContext?: k8s.PodSecurityContext;
    serviceAccountName?: string;
    shutdown?: string;
    suspend?: boolean;
    synchronization?: Synchronization;
    templateDefaults?: Template;
    templates?: Template[];
    tolerations?: k8s.Toleration[];
    ttlStrategy?: TTLStrategy;
    volumeClaimGC?: VolumeClaimGC;
    volumeClaimTemplates?: k8s.PersistentVolumeClaimSpec[];
    volumes?: k8s.Volume[];
    workflowTemplateRef?: WorkflowTemplateRef;
}

export interface WorkflowStatus {
    artifactRepositoryRef?: ArtifactRepositoryRefStatus;
    compressedNodes?: string;
    conditions?: Condition[];
    estimatedDuration?: number;
    finishedAt?: Date; // date-time
    message?: string;
    nodes?: {
        [name: string]: NodeStatus;
    }
;
    offloadNodeStatusVersion?: string;
    outputs?: Outputs;
    PersistentVolumeClaimSpecs?: k8s.Volume[];
    phase?: string;
    progress?: string;
    resourcesDuration?: {
        [name: string]: number; // int64
    }
;
    startedAt?: Date; // date-time
    storedTemplates?: {
        [name: string]: Template;
    }
;
    storedWorkflowTemplateSpec?: WorkflowSpec;
    synchronization?: SynchronizationStatus;
}

export interface WorkflowStep {
    arguments?: Arguments;
    continueOn?: ContinueOn;
    name?: string;
    onExit?: string;
    template?: string;
    templateRef?: TemplateRef;
    when?: string;
    withItems?: Item[];
    withParam?: string;
    withSequence?: Sequence;
}

export interface WorkflowStopRequest {
    message?: string;
    name?: string;
    namespace?: string;
    nodeFieldSelector?: string;
}

export interface WorkflowSubmitRequest {
    namespace?: string;
    resourceKind?: string;
    resourceName?: string;
    submitOptions?: SubmitOpts;
}

export interface WorkflowSuspendRequest {
    name?: string;
    namespace?: string;
}

export interface WorkflowTemplate {
    apiVersion?: string;
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: WorkflowTemplateSpec;
}

export interface WorkflowTemplateCreateRequest {
    createOptions?: k8s.CreateOptions;
    namespace?: string;
    template?: WorkflowTemplate;
}

export interface WorkflowTemplateDeleteResponse {
}

export interface WorkflowTemplateLintRequest {
    createOptions?: k8s.CreateOptions;
    namespace?: string;
    template?: WorkflowTemplate;
}

export interface WorkflowTemplateList {
    apiVersion?: string;
    items: WorkflowTemplate[];
    kind?: string;
    metadata: k8s.ListMeta;
}

export interface WorkflowTemplateRef {
    clusterScope?: boolean;
    name?: string;
}

export interface WorkflowTemplateSpec {
    activeDeadlineSeconds?: number;
    affinity?: k8s.Affinity;
    arguments?: Arguments;
    artifactRepositoryRef?: ArtifactRepositoryRef;
    automountServiceAccountToken?: boolean;
    dnsConfig?: k8s.PodDnsConfig;
    dnsPolicy?: string;
    entrypoint?: string;
    executor?: ExecutorConfig;
    hostAliases?: k8s.HostAlias[];
    hostNetwork?: boolean;
    imagePullSecrets?: k8s.LocalObjectReference[];
    metrics?: Metrics;
    nodeSelector?: {
        [name: string]: string;
    }
;
    onExit?: string;
    parallelism?: number;
    podDisruptionBudget?: k8s.PodDisruptionBudgetSpec;
    podGC?: PodGC;
    podMetadata?: Metadata;
    podPriority?: number;
    podPriorityClassName?: string;
    podSpecPatch?: string;
    priority?: number;
    retryStrategy?: RetryStrategy;
    schedulerName?: string;
    securityContext?: k8s.PodSecurityContext;
    serviceAccountName?: string;
    shutdown?: string;
    suspend?: boolean;
    synchronization?: Synchronization;
    templateDefaults?: Template;
    templates?: Template[];
    tolerations?: k8s.Toleration[];
    ttlStrategy?: TTLStrategy;
    volumeClaimGC?: VolumeClaimGC;
    volumeClaimTemplates?: k8s.PersistentVolumeClaimSpec[];
    volumes?: k8s.Volume[];
    workflowMetadata?: k8s.ObjectMeta;
    workflowTemplateRef?: WorkflowTemplateRef;
}

export interface WorkflowTemplateUpdateRequest {
    name?: string;
    namespace?: string;
    template?: WorkflowTemplate;
}

export interface WorkflowTerminateRequest {
    name?: string;
    namespace?: string;
}

export interface WorkflowWatchEvent {
    object?: Workflow;
    type?: string;
}

export interface ZipStrategy {
}

export class ArgoWorkflow extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'ClusterWorkflowTemplate'
  }
  
  public static manifest(props: ClusterWorkflowTemplate): any {
    return {
      ...ArgoWorkflow.GVK,
      ...props
    }
  }

  constructor(scope: Construct, name: string, props: WorkflowProps) {
    super(scope, name, ArgoWorkflow.manifest(props));
  }
}