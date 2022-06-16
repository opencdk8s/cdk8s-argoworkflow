import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
export * as k8s from './imports/k8s';

export type Item = any;

export type Amount = number;

export interface GoogleProtobufAny {
  readonly typeUrl?: string;
  readonly value?: string; // byte
}

export interface GrpcGatewayRuntimeError {
  readonly code?: number;
  readonly details?: GoogleProtobufAny[];
  readonly error?: string;
  readonly message?: string;
}

export interface GrpcGatewayRuntimeStreamError {
  readonly details?: GoogleProtobufAny[];
  readonly grpcCode?: number;
  readonly httpCode?: number;
  readonly httpStatus?: string;
  readonly message?: string;
}

export interface ArchiveStrategy {
  readonly none?: NoneStrategy;
  readonly tar?: TarStrategy;
  readonly zip?: ZipStrategy;
}

export interface ArchivedWorkflowDeletedResponse {
}

export interface Arguments {
  readonly artifacts?: Artifact[];
  readonly parameters?: Parameter[];
}

export interface Artifact {
  readonly archive?: ArchiveStrategy;
  readonly archiveLogs?: boolean;
  readonly artifactory?: ArtifactoryArtifact;
  readonly from?: string;
  readonly fromExpression?: string;
  readonly gcs?: GCSArtifact;
  readonly git?: GitArtifact;
  readonly globalName?: string;
  readonly hdfs?: HDFSArtifact;
  readonly http?: HTTPArtifact;
  readonly mode?: number;
  readonly name: string;
  readonly optional?: boolean;
  readonly oss?: OSSArtifact;
  readonly path?: string;
  readonly raw?: RawArtifact;
  readonly recurseMode?: boolean;
  readonly s3?: S3Artifact;
  readonly subPath?: string;
}

export interface ArtifactLocation {
  readonly archiveLogs?: boolean;
  readonly artifactory?: ArtifactoryArtifact;
  readonly gcs?: GCSArtifact;
  readonly git?: GitArtifact;
  readonly hdfs?: HDFSArtifact;
  readonly http?: HTTPArtifact;
  readonly oss?: OSSArtifact;
  readonly raw?: RawArtifact;
  readonly s3?: S3Artifact;
}

export interface ArtifactPaths {
  readonly archive?: ArchiveStrategy;
  readonly archiveLogs?: boolean;
  readonly artifactory?: ArtifactoryArtifact;
  readonly from?: string;
  readonly fromExpression?: string;
  readonly gcs?: GCSArtifact;
  readonly git?: GitArtifact;
  readonly globalName?: string;
  readonly hdfs?: HDFSArtifact;
  readonly http?: HTTPArtifact;
  readonly mode?: number;
  readonly name: string;
  readonly optional?: boolean;
  readonly oss?: OSSArtifact;
  readonly path?: string;
  readonly raw?: RawArtifact;
  readonly recurseMode?: boolean;
  readonly s3?: S3Artifact;
  readonly subPath?: string;
}

export interface ArtifactRepositoryRef {
  readonly configMap?: string;
  readonly key?: string;
}

export interface ArtifactRepositoryRefStatus {
  readonly configMap?: string;
  readonly default?: boolean;
  readonly key?: string;
  readonly namespace?: string;
}

export interface ArtifactoryArtifact {
  readonly passwordSecret?: k8s.SecretKeySelector;
  readonly url: string;
  readonly usernameSecret?: k8s.SecretKeySelector;
}

export interface Backoff {
  readonly duration?: string;
  readonly factor?: k8s.IntOrString;
  readonly maxDuration?: string;
}

export interface Cache {
  readonly configMap: k8s.ConfigMapKeySelector;
}

export interface ClusterWorkflowTemplate {
  readonly apiVersion?: string;
  readonly kind?: string;
  readonly metadata: k8s.ObjectMeta;
  readonly spec: WorkflowTemplateSpec;
}

export interface WorkflowTemplate {
  readonly apiVersion?: string;
  readonly kind?: string;
  readonly metadata: k8s.ObjectMeta;
  readonly spec: WorkflowTemplateSpec;
}

export interface ClusterWorkflowTemplateDeleteResponse {
}

export interface ClusterWorkflowTemplateLintRequest {
  readonly createOptions?: k8s.CreateOptions;
  readonly template?: ClusterWorkflowTemplate;
}

export interface ClusterWorkflowTemplateList {
  readonly apiVersion?: string;
  readonly items: ClusterWorkflowTemplate[];
  readonly kind?: string;
  readonly metadata: k8s.ListMeta;
}

export interface ClusterWorkflowTemplateUpdateRequest {
  readonly name?: string;
  readonly template?: ClusterWorkflowTemplate;
}

export interface Condition {
  readonly message?: string;
  readonly status?: string;
  readonly type?: string;
}

export interface ContainerNode {
  readonly args?: string[];
  readonly command?: string[];
  readonly dependencies?: string[];
  readonly env?: k8s.EnvVar[];
  readonly envFrom?: k8s.EnvFromSource[];
  readonly image?: string;
  readonly imagePullPolicy?: string;
  readonly lifecycle?: k8s.Lifecycle;
  readonly livenessProbe?: k8s.Probe;
  readonly name: string;
  readonly ports?: k8s.ContainerPort[];
  readonly readinessProbe?: k8s.Probe;
  readonly resources?: k8s.ResourceRequirements;
  readonly securityContext?: k8s.SecurityContext;
  readonly startupProbe?: k8s.Probe;
  readonly stdin?: boolean;
  readonly stdinOnce?: boolean;
  readonly terminationMessagePath?: string;
  readonly terminationMessagePolicy?: string;
  readonly tty?: boolean;
  readonly volumeDevices?: k8s.VolumeDevice[];
  readonly volumeMounts?: k8s.VolumeMount[];
  readonly workingDir?: string;
}

export interface ContainerSetTemplate {
  readonly containers: ContainerNode[];
  readonly volumeMounts?: k8s.VolumeMount[];
}

export interface ContinueOn {
  readonly error?: boolean;
  readonly failed?: boolean;
}

export interface Counter {
  readonly value: string;
}

export interface CreateCronWorkflowRequest {
  readonly createOptions?: k8s.CreateOptions;
  readonly cronWorkflow?: CronWorkflow;
  readonly namespace?: string;
}

export interface CreateS3BucketOptions {
  readonly objectLocking?: boolean;
}

export interface CronWorkflow {
  readonly metadata: k8s.ObjectMeta;
  readonly spec: CronWorkflowSpec;
  readonly status?: CronWorkflowStatus;
}

export interface CronWorkflowDeletedResponse {
}

export interface CronWorkflowList {
  readonly apiVersion?: string;
  readonly items: CronWorkflow[];
  readonly kind?: string;
  readonly metadata: k8s.ListMeta;
}

export interface CronWorkflowResumeRequest {
  readonly name?: string;
  readonly namespace?: string;
}

export interface CronWorkflowSpec {
  readonly concurrencyPolicy?: string;
  readonly failedJobsHistoryLimit?: number;
  readonly schedule: string;
  readonly startingDeadlineSeconds?: number;
  readonly successfulJobsHistoryLimit?: number;
  readonly suspend?: boolean;
  readonly timezone?: string;
  readonly workflowMetadata?: k8s.ObjectMeta;
  readonly workflowSpec: WorkflowSpec;
}

export interface CronWorkflowStatus {
  readonly active: k8s.ObjectReference[];
  readonly conditions: Condition[];
  readonly lastScheduledTime: Date; // date-time
}

export interface CronWorkflowSuspendRequest {
  readonly name?: string;
  readonly namespace?: string;
}

export interface DAGTask {
  readonly arguments?: Arguments;
  readonly continueOn?: ContinueOn;
  readonly dependencies?: string[];
  readonly depends?: string;
  readonly name: string;
  readonly onExit?: string;
  readonly template?: string;
  readonly templateRef?: TemplateRef;
  readonly when?: string;
  readonly withItems?: Item[];
  readonly withParam?: string;
  readonly withSequence?: Sequence;
}

export interface DAGTemplate {
  readonly failFast?: boolean;
  readonly target?: string;
  readonly tasks: DAGTask[];
}

export interface Data {
  readonly source: DataSource;
  readonly transformation: TransformationStep[];
}

export interface DataSource {
  readonly artifactPaths?: ArtifactPaths;
}

export interface Event {
  readonly selector: string;
}

export interface EventResponse {
}

export interface ExecutorConfig {
  readonly serviceAccountName?: string;
}

export interface GCSArtifact {
  readonly bucket?: string;
  readonly key: string;
  readonly serviceAccountKeySecret?: k8s.SecretKeySelector;
}

export interface Gauge {
  readonly realtime: boolean;
  readonly value: string;
}

export interface GetUserInfoResponse {
  readonly email?: string;
  readonly emailVerified?: boolean;
  readonly groups?: string[];
  readonly issuer?: string;
  readonly serviceAccountName?: string;
  readonly subject?: string;
}

export interface GitArtifact {
  readonly depth?: number;
  readonly fetch?: string[];
  readonly insecureIgnoreHostKey?: boolean;
  readonly passwordSecret?: k8s.SecretKeySelector;
  readonly repo: string;
  readonly revision?: string;
  readonly sshPrivateKeySecret?: k8s.SecretKeySelector;
  readonly usernameSecret?: k8s.SecretKeySelector;
}

export interface HDFSArtifact {
  readonly addresses?: string[];
  readonly force?: boolean;
  readonly hdfsUser?: string;
  readonly krbCCacheSecret?: k8s.SecretKeySelector;
  readonly krbConfigConfigMap?: k8s.ConfigMapKeySelector;
  readonly krbKeytabSecret?: k8s.SecretKeySelector;
  readonly krbRealm?: string;
  readonly krbServicePrincipalName?: string;
  readonly krbUsername?: string;
  readonly path: string;
}

export interface HTTPArtifact {
  readonly headers?: Header[];
  readonly url: string;
}

export interface Header {
  readonly name: string;
  readonly value: string;
}

export interface Histogram {
  readonly buckets: Amount[];
  readonly value: string;
}

export interface InfoResponse {
  readonly links?: Link[];
  readonly managedNamespace?: string;
}

export interface Inputs {
  readonly artifacts?: Artifact[];
  readonly parameters?: Parameter[];
}

export interface Link {
  readonly name: string;
  readonly scope: string;
  readonly url: string;
}

export interface LintCronWorkflowRequest {
  readonly cronWorkflow?: CronWorkflow;
  readonly namespace?: string;
}

export interface LogEntry {
  readonly content?: string;
  readonly podName?: string;
}

export interface MemoizationStatus {
  readonly cacheName: string;
  readonly hit: boolean;
  readonly key: string;
}

export interface Memoize {
  readonly cache: Cache;
  readonly key: string;
  readonly maxAge: string;
}

export interface Metadata {
  readonly annotations?: {
    [name: string]: string;
  };
  readonly labels?: {
    [name: string]: string;
  };
}

export interface MetricLabel {
  readonly key: string;
  readonly value: string;
}

export interface Metrics {
  readonly prometheus: Prometheus[];
}

export interface Mutex {
  readonly name?: string;
}

export interface MutexHolding {
  readonly holder?: string;
  readonly mutex?: string;
}

export interface MutexStatus {
  readonly holding?: MutexHolding[];
  readonly waiting?: MutexHolding[];
}

export interface NodeStatus {
  readonly boundaryID?: string;
  readonly children?: string[];
  readonly daemoned?: boolean;
  readonly displayName?: string;
  readonly estimatedDuration?: number;
  readonly finishedAt?: Date; // date-time
  readonly hostNodeName?: string;
  readonly id: string;
  readonly inputs?: Inputs;
  readonly memoizationStatus?: MemoizationStatus;
  readonly message?: string;
  readonly name: string;
  readonly outboundNodes?: string[];
  readonly outputs?: Outputs;
  readonly phase?: string;
  readonly podIP?: string;
  readonly progress?: string;
  readonly resourcesDuration?: {
    [name: string]: number; // int64
  };
  readonly startedAt?: Date; // date-time
  readonly synchronizationStatus?: NodeSynchronizationStatus;
  readonly templateName?: string;
  readonly templateRef?: TemplateRef;
  readonly templateScope?: string;
  readonly type: string;
}

export interface NodeSynchronizationStatus {
  readonly waiting?: string;
}

export interface NoneStrategy {
}

export interface OSSArtifact {
  readonly accessKeySecret?: k8s.SecretKeySelector;
  readonly bucket?: string;
  readonly createBucketIfNotPresent?: boolean;
  readonly endpoint?: string;
  readonly key: string;
  readonly secretKeySecret?: k8s.SecretKeySelector;
  readonly securityToken?: string;
}

export interface Outputs {
  readonly artifacts?: Artifact[];
  readonly exitCode?: string;
  readonly parameters?: Parameter[];
  readonly result?: string;
}

export type ParallelSteps = WorkflowStep[];
export interface Parameter {
  readonly default?: string;
  readonly enum?: string[];
  readonly globalName?: string;
  readonly name: string;
  readonly value?: string;
  readonly valueFrom?: ValueFrom;
}

export interface PodGC {
  readonly labelSelector?: k8s.LabelSelector;
  readonly strategy?: string;
}

export interface Prometheus {
  readonly counter?: Counter;
  readonly gauge?: Gauge;
  readonly help: string;
  readonly histogram?: Histogram;
  readonly labels?: MetricLabel[];
  readonly name: string;
  readonly when?: string;
}

export interface RawArtifact {
  readonly data: string;
}

export interface ResourceTemplate {
  readonly action: string;
  readonly failureCondition?: string;
  readonly flags?: string[];
  readonly manifest?: string;
  readonly mergeStrategy?: string;
  readonly setOwnerReference?: boolean;
  readonly successCondition?: string;
}

export interface RetryAffinity {
  readonly nodeAntiAffinity?: RetryNodeAntiAffinity;
}

export interface RetryNodeAntiAffinity {
}

export interface RetryStrategy {
  readonly affinity?: RetryAffinity;
  readonly backoff?: Backoff;
  readonly limit?: k8s.IntOrString;
  readonly retryPolicy?: string;
}

export interface S3Artifact {
  readonly accessKeySecret?: k8s.SecretKeySelector;
  readonly bucket?: string;
  readonly createBucketIfNotPresent?: CreateS3BucketOptions;
  readonly endpoint?: string;
  readonly insecure?: boolean;
  readonly key?: string;
  readonly region?: string;
  readonly roleARN?: string;
  readonly secretKeySecret?: k8s.SecretKeySelector;
  readonly useSDKCreds?: boolean;
}

export interface ScriptTemplate {
  readonly args?: string[];
  readonly command?: string[];
  readonly env?: k8s.EnvVar[];
  readonly envFrom?: k8s.EnvFromSource[];
  readonly image: string;
  readonly imagePullPolicy?: string;
  readonly lifecycle?: k8s.Lifecycle;
  readonly livenessProbe?: k8s.Probe;
  readonly name?: string;
  readonly ports?: k8s.ContainerPort[];
  readonly readinessProbe?: k8s.Probe;
  readonly resources?: k8s.ResourceRequirements;
  readonly securityContext?: k8s.SecurityContext;
  readonly source: string;
  readonly startupProbe?: k8s.Probe;
  readonly stdin?: boolean;
  readonly stdinOnce?: boolean;
  readonly terminationMessagePath?: string;
  readonly terminationMessagePolicy?: string;
  readonly tty?: boolean;
  readonly volumeDevices?: k8s.VolumeDevice[];
  readonly volumeMounts?: k8s.VolumeMount[];
  readonly workingDir?: string;
}

export interface SemaphoreHolding {
  readonly holders?: string[];
  readonly semaphore?: string;
}

export interface SemaphoreRef {
  readonly configMapKeyRef?: k8s.ConfigMapKeySelector;
}

export interface SemaphoreStatus {
  readonly holding?: SemaphoreHolding[];
  readonly waiting?: SemaphoreHolding[];
}

export interface Sequence {
  readonly count?: k8s.IntOrString;
  readonly end?: k8s.IntOrString;
  readonly format?: string;
  readonly start?: k8s.IntOrString;
}

export interface Submit {
  readonly arguments?: Arguments;
  readonly metadata?: k8s.ObjectMeta;
  readonly workflowTemplateRef: WorkflowTemplateRef;
}

export interface SubmitOpts {
  readonly annotations?: string;
  readonly dryRun?: boolean;
  readonly entryPoint?: string;
  readonly generateName?: string;
  readonly labels?: string;
  readonly name?: string;
  readonly ownerReference?: k8s.OwnerReference;
  readonly parameterFile?: string;
  readonly parameters?: string[];
  readonly serverDryRun?: boolean;
  readonly serviceAccount?: string;
}

export interface SuppliedValueFrom {
}

export interface SuspendTemplate {
  readonly duration?: string;
}

export interface Synchronization {
  readonly mutex?: Mutex;
  readonly semaphore?: SemaphoreRef;
}

export interface SynchronizationStatus {
  readonly mutex?: MutexStatus;
  readonly semaphore?: SemaphoreStatus;
}

export interface TTLStrategy {
  readonly secondsAfterCompletion?: number;
  readonly secondsAfterFailure?: number;
  readonly secondsAfterSuccess?: number;
}

export interface TarStrategy {
  readonly compressionLevel?: number;
}

export interface Template {
  readonly activeDeadlineSeconds?: k8s.IntOrString;
  readonly affinity?: k8s.Affinity;
  readonly archiveLocation?: ArtifactLocation;
  readonly automountServiceAccountToken?: boolean;
  readonly container?: k8s.Container;
  readonly containerSet?: ContainerSetTemplate;
  readonly daemon?: boolean;
  readonly dag?: DAGTemplate;
  readonly data?: Data;
  readonly executor?: ExecutorConfig;
  readonly failFast?: boolean;
  readonly hostAliases?: k8s.HostAlias[];
  readonly initContainers?: UserContainer[];
  readonly inputs?: Inputs;
  readonly memoize?: Memoize;
  readonly metadata?: Metadata;
  readonly metrics?: Metrics;
  readonly name?: string;
  readonly nodeSelector?: {
    [name: string]: string;
  };
  readonly outputs?: Outputs;
  readonly parallelism?: number;
  readonly podSpecPatch?: string;
  readonly priority?: number;
  readonly priorityClassName?: string;
  readonly resource?: ResourceTemplate;
  readonly retryStrategy?: RetryStrategy;
  readonly schedulerName?: string;
  readonly script?: ScriptTemplate;
  readonly securityContext?: k8s.PodSecurityContext;
  readonly serviceAccountName?: string;
  readonly sidecars?: UserContainer[];
  readonly steps?: ParallelSteps[];
  readonly suspend?: SuspendTemplate;
  readonly synchronization?: Synchronization;
  readonly timeout?: string;
  readonly tolerations?: k8s.Toleration[];
  readonly volumes?: k8s.Volume[];
}

export interface TemplateRef {
  readonly clusterScope?: boolean;
  readonly name?: string;
  readonly template?: string;
}

export interface TransformationStep {
  readonly expression: string;
}

export interface UpdateCronWorkflowRequest {
  readonly cronWorkflow?: CronWorkflow;
  readonly name?: string;
  readonly namespace?: string;
}

export interface UserContainer {
  readonly args?: string[];
  readonly command?: string[];
  readonly env?: k8s.EnvVar[];
  readonly envFrom?: k8s.EnvFromSource[];
  readonly image?: string;
  readonly imagePullPolicy?: string;
  readonly lifecycle?: k8s.Lifecycle;
  readonly livenessProbe?: k8s.Probe;
  readonly mirrorVolumeMounts?: boolean;
  readonly name: string;
  readonly ports?: k8s.ContainerPort[];
  readonly readinessProbe?: k8s.Probe;
  readonly resources?: k8s.ResourceRequirements;
  readonly securityContext?: k8s.SecurityContext;
  readonly startupProbe?: k8s.Probe;
  readonly stdin?: boolean;
  readonly stdinOnce?: boolean;
  readonly terminationMessagePath?: string;
  readonly terminationMessagePolicy?: string;
  readonly tty?: boolean;
  readonly volumeDevices?: k8s.VolumeDevice[];
  readonly volumeMounts?: k8s.VolumeMount[];
  readonly workingDir?: string;
}

export interface ValueFrom {
  readonly default?: string;
  readonly event?: string;
  readonly expression?: string;
  readonly jqFilter?: string;
  readonly jsonPath?: string;
  readonly parameter?: string;
  readonly path?: string;
  readonly supplied?: SuppliedValueFrom;
}

export interface Version {
  readonly buildDate: string;
  readonly compiler: string;
  readonly gitCommit: string;
  readonly gitTag: string;
  readonly gitTreeState: string;
  readonly goVersion: string;
  readonly platform: string;
  readonly version: string;
}

export interface VolumeClaimGC {
  readonly strategy?: string;
}

export interface Workflow {
  readonly apiVersion?: string;
  readonly kind?: string;
  readonly metadata: k8s.ObjectMeta;
  readonly spec: WorkflowSpec;
  readonly status?: WorkflowStatus;
}

export interface WorkflowCreateRequest {
  readonly createOptions?: k8s.CreateOptions;
  readonly instanceID?: string;
  readonly namespace?: string;
  readonly serverDryRun?: boolean;
  readonly workflow?: Workflow;
}

export interface WorkflowDeleteResponse {
}

export interface WorkflowEventBinding {
  readonly apiVersion?: string;
  readonly kind?: string;
  readonly metadata: k8s.ObjectMeta;
  readonly spec: WorkflowEventBindingSpec;
}

export interface WorkflowEventBindingList {
  readonly apiVersion?: string;
  readonly items: WorkflowEventBinding[];
  readonly kind?: string;
  readonly metadata: k8s.ListMeta;
}

export interface WorkflowEventBindingSpec {
  readonly event: Event;
  readonly submit?: Submit;
}

export interface WorkflowLintRequest {
  readonly namespace?: string;
  readonly workflow?: Workflow;
}

export interface WorkflowList {
  readonly apiVersion?: string;
  readonly items: Workflow[];
  readonly kind?: string;
  readonly metadata: k8s.ListMeta;
}

export interface WorkflowResubmitRequest {
  readonly memoized?: boolean;
  readonly name?: string;
  readonly namespace?: string;
}

export interface WorkflowResumeRequest {
  readonly name?: string;
  readonly namespace?: string;
  readonly nodeFieldSelector?: string;
}

export interface WorkflowRetryRequest {
  readonly name?: string;
  readonly namespace?: string;
  readonly nodeFieldSelector?: string;
  readonly restartSuccessful?: boolean;
}

export interface WorkflowSetRequest {
  readonly message?: string;
  readonly name?: string;
  readonly namespace?: string;
  readonly nodeFieldSelector?: string;
  readonly outputParameters?: string;
  readonly phase?: string;
}

export interface WorkflowSpec {
  readonly activeDeadlineSeconds?: number;
  readonly affinity?: k8s.Affinity;
  readonly arguments?: Arguments;
  readonly artifactRepositoryRef?: ArtifactRepositoryRef;
  readonly automountServiceAccountToken?: boolean;
  readonly dnsConfig?: k8s.PodDnsConfig;
  readonly dnsPolicy?: string;
  readonly entrypoint?: string;
  readonly executor?: ExecutorConfig;
  readonly hostAliases?: k8s.HostAlias[];
  readonly hostNetwork?: boolean;
  readonly imagePullSecrets?: k8s.LocalObjectReference[];
  readonly metrics?: Metrics;
  readonly nodeSelector?: {
    [name: string]: string;
  };
  readonly onExit?: string;
  readonly parallelism?: number;
  readonly podDisruptionBudget?: k8s.PodDisruptionBudgetSpec;
  readonly podGC?: PodGC;
  readonly podMetadata?: Metadata;
  readonly podPriority?: number;
  readonly podPriorityClassName?: string;
  readonly podSpecPatch?: string;
  readonly priority?: number;
  readonly retryStrategy?: RetryStrategy;
  readonly schedulerName?: string;
  readonly securityContext?: k8s.PodSecurityContext;
  readonly serviceAccountName?: string;
  readonly shutdown?: string;
  readonly suspend?: boolean;
  readonly synchronization?: Synchronization;
  readonly templateDefaults?: Template;
  readonly templates?: Template[];
  readonly tolerations?: k8s.Toleration[];
  readonly ttlStrategy?: TTLStrategy;
  readonly volumeClaimGC?: VolumeClaimGC;
  readonly volumeClaimTemplates?: k8s.KubePersistentVolumeClaimProps[];
  readonly volumes?: k8s.Volume[];
  readonly workflowTemplateRef?: WorkflowTemplateRef;
}

export interface WorkflowStatus {
  readonly artifactRepositoryRef?: ArtifactRepositoryRefStatus;
  readonly compressedNodes?: string;
  readonly conditions?: Condition[];
  readonly estimatedDuration?: number;
  readonly finishedAt?: Date; // date-time
  readonly message?: string;
  readonly nodes?: {
    [name: string]: NodeStatus;
  };
  readonly offloadNodeStatusVersion?: string;
  readonly outputs?: Outputs;
  readonly persistentVolumeClaimSpecs?: k8s.Volume[];
  readonly phase?: string;
  readonly progress?: string;
  readonly resourcesDuration?: {
    [name: string]: number; // int64
  };
  readonly startedAt?: Date; // date-time
  readonly storedTemplates?: {
    [name: string]: Template;
  };
  readonly storedWorkflowTemplateSpec?: WorkflowSpec;
  readonly synchronization?: SynchronizationStatus;
}

export interface WorkflowStep {
  readonly arguments?: Arguments;
  readonly continueOn?: ContinueOn;
  readonly name?: string;
  readonly onExit?: string;
  readonly template?: string;
  readonly templateRef?: TemplateRef;
  readonly when?: string;
  readonly withItems?: Item[];
  readonly withParam?: string;
  readonly withSequence?: Sequence;
}

export interface WorkflowStopRequest {
  readonly message?: string;
  readonly name?: string;
  readonly namespace?: string;
  readonly nodeFieldSelector?: string;
}

export interface WorkflowSubmitRequest {
  readonly namespace?: string;
  readonly resourceKind?: string;
  readonly resourceName?: string;
  readonly submitOptions?: SubmitOpts;
}

export interface WorkflowSuspendRequest {
  readonly name?: string;
  readonly namespace?: string;
}

export interface WorkflowTemplate {
  readonly apiVersion?: string;
  readonly kind?: string;
  readonly metadata: k8s.ObjectMeta;
  readonly spec: WorkflowTemplateSpec;
}

export interface WorkflowTemplateCreateRequest {
  readonly createOptions?: k8s.CreateOptions;
  readonly namespace?: string;
  readonly template?: WorkflowTemplate;
}

export interface WorkflowTemplateDeleteResponse {
}

export interface WorkflowTemplateLintRequest {
  readonly createOptions?: k8s.CreateOptions;
  readonly namespace?: string;
  readonly template?: WorkflowTemplate;
}

export interface WorkflowTemplateList {
  readonly apiVersion?: string;
  readonly items: WorkflowTemplate[];
  readonly kind?: string;
  readonly metadata: k8s.ListMeta;
}

export interface WorkflowTemplateRef {
  readonly clusterScope?: boolean;
  readonly name?: string;
}

export interface WorkflowTemplateSpec {
  readonly activeDeadlineSeconds?: number;
  readonly affinity?: k8s.Affinity;
  readonly arguments?: Arguments;
  readonly artifactRepositoryRef?: ArtifactRepositoryRef;
  readonly automountServiceAccountToken?: boolean;
  readonly dnsConfig?: k8s.PodDnsConfig;
  readonly dnsPolicy?: string;
  readonly entrypoint?: string;
  readonly executor?: ExecutorConfig;
  readonly hostAliases?: k8s.HostAlias[];
  readonly hostNetwork?: boolean;
  readonly imagePullSecrets?: k8s.LocalObjectReference[];
  readonly metrics?: Metrics;
  readonly nodeSelector?: {
    [name: string]: string;
  };
  readonly onExit?: string;
  readonly parallelism?: number;
  readonly podDisruptionBudget?: k8s.PodDisruptionBudgetSpec;
  readonly podGC?: PodGC;
  readonly podMetadata?: Metadata;
  readonly podPriority?: number;
  readonly podPriorityClassName?: string;
  readonly podSpecPatch?: string;
  readonly priority?: number;
  readonly retryStrategy?: RetryStrategy;
  readonly schedulerName?: string;
  readonly securityContext?: k8s.PodSecurityContext;
  readonly serviceAccountName?: string;
  readonly shutdown?: string;
  readonly suspend?: boolean;
  readonly synchronization?: Synchronization;
  readonly templateDefaults?: Template;
  readonly templates?: Template[];
  readonly tolerations?: k8s.Toleration[];
  readonly ttlStrategy?: TTLStrategy;
  readonly volumeClaimGC?: VolumeClaimGC;
  readonly volumeClaimTemplates?: k8s.PersistentVolumeClaimSpec[];
  readonly volumes?: k8s.Volume[];
  readonly workflowMetadata?: k8s.ObjectMeta;
  readonly workflowTemplateRef?: WorkflowTemplateRef;
}

export interface WorkflowTemplateUpdateRequest {
  readonly name?: string;
  readonly namespace?: string;
  readonly template?: WorkflowTemplate;
}

export interface WorkflowTerminateRequest {
  readonly name?: string;
  readonly namespace?: string;
}

export interface WorkflowWatchEvent {
  readonly object?: Workflow;
  readonly type?: string;
}

export interface ZipStrategy {
}

export class ArgoWorkflowClusterWorkflowTemplate extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'ClusterWorkflowTemplate',
  };

  public static manifest(props: ClusterWorkflowTemplate): any {
    return {
      ...ArgoWorkflowClusterWorkflowTemplate.GVK,
      ...props,
    };
  }

  constructor(scope: Construct, name: string, props: ClusterWorkflowTemplate) {
    super(scope, name, ArgoWorkflowClusterWorkflowTemplate.manifest(props));
  }
}

export class ArgoWorkflowWorkflowTemplate extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'WorkflowTemplate',
  };

  public static manifest(props: WorkflowTemplate): any {
    return {
      ...ArgoWorkflowWorkflowTemplate.GVK,
      ...props,
    };
  }

  constructor(scope: Construct, name: string, props: WorkflowTemplate) {
    super(scope, name, ArgoWorkflowWorkflowTemplate.manifest(props));
  }
}


export class ArgoWorkflowCronWorkflow extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'CronWorkflow',
  };

  public static manifest(props: CronWorkflow): any {
    return {
      ...ArgoWorkflowCronWorkflow.GVK,
      ...props,
    };
  }

  constructor(scope: Construct, name: string, props: CronWorkflow) {
    super(scope, name, ArgoWorkflowCronWorkflow.manifest(props));
  }

}
