import * as k8s from './k8s';

/**
 * structured log entry
 */
export interface EventsourceLogEntry {
    /**
     * optional - the event name (e.g. `example`)
     */
    eventName?: string;
    eventSourceName?: string;
    /**
     * optional - the event source type (e.g. `webhook`)
     */
    eventSourceType?: string;
    level?: string;
    msg?: string;
    namespace?: string;
    time?: Date; // date-time REF FOR CHANGE: https://github.com/kubernetes/apimachinery/blob/v0.21.0/pkg/apis/meta/v1/time.go#L31
}
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
/**
 * Amount represent a numeric amount.
 */
export type Amount = number;
/**
 * ArchiveStrategy describes how to archive files/directory when saving artifacts
 */
export interface ArchiveStrategy {
    none?: NoneStrategy;
    tar?: TarStrategy;
    zip?: ZipStrategy;
}
export interface ArchivedWorkflowDeletedResponse {
}
/**
 * Arguments to a template
 */
export interface Arguments {
    /**
     * Artifacts is the list of artifacts to pass to the template or workflow
     */
    artifacts?: Artifact[];
    /**
     * Parameters is the list of parameters to pass to the template or workflow
     */
    parameters?: Parameter[];
}
/**
 * Artifact indicates an artifact to place at a specified path
 */
export interface Artifact {
    /**
     * Archive controls how the artifact will be saved to the artifact repository.
     */
    archive?: ArchiveStrategy;
    /**
     * ArchiveLogs indicates if the container logs should be archived
     */
    archiveLogs?: boolean;
    /**
     * Artifactory contains artifactory artifact location details
     */
    artifactory?: ArtifactoryArtifact;
    /**
     * From allows an artifact to reference an artifact from a previous step
     */
    from?: string;
    /**
     * FromExpression, if defined, is evaluated to specify the value for the artifact
     */
    fromExpression?: string;
    /**
     * GCS contains GCS artifact location details
     */
    gcs?: GCSArtifact;
    /**
     * Git contains git artifact location details
     */
    git?: GitArtifact;
    /**
     * GlobalName exports an output artifact to the global scope, making it available as '{{io.argoproj.workflow.v1alpha1.outputs.artifacts.XXXX}} and in workflow.status.outputs.artifacts
     */
    globalName?: string;
    /**
     * HDFS contains HDFS artifact location details
     */
    hdfs?: HDFSArtifact;
    /**
     * HTTP contains HTTP artifact location details
     */
    http?: HTTPArtifact;
    /**
     * mode bits to use on this file, must be a value between 0 and 0777 set when loading input artifacts.
     */
    mode?: number;
    /**
     * name of the artifact. must be unique within a template's inputs/outputs.
     */
    name: string;
    /**
     * Make Artifacts optional, if Artifacts doesn't generate or exist
     */
    optional?: boolean;
    /**
     * OSS contains OSS artifact location details
     */
    oss?: OSSArtifact;
    /**
     * Path is the container path to the artifact
     */
    path?: string;
    /**
     * Raw contains raw artifact location details
     */
    raw?: RawArtifact;
    /**
     * If mode is set, apply the permission recursively into the artifact if it is a folder
     */
    recurseMode?: boolean;
    /**
     * S3 contains S3 artifact location details
     */
    s3?: S3Artifact;
    /**
     * SubPath allows an artifact to be sourced from a subpath within the specified source
     */
    subPath?: string;
}
/**
 * ArtifactLocation describes a location for a single or multiple artifacts. It is used as single artifact in the context of inputs/outputs (e.g. outputs.artifacts.artname). It is also used to describe the location of multiple artifacts such as the archive location of a single workflow step, which the executor will use as a default location to store its files.
 */
export interface ArtifactLocation {
    /**
     * ArchiveLogs indicates if the container logs should be archived
     */
    archiveLogs?: boolean;
    /**
     * Artifactory contains artifactory artifact location details
     */
    artifactory?: ArtifactoryArtifact;
    /**
     * GCS contains GCS artifact location details
     */
    gcs?: GCSArtifact;
    /**
     * Git contains git artifact location details
     */
    git?: GitArtifact;
    /**
     * HDFS contains HDFS artifact location details
     */
    hdfs?: HDFSArtifact;
    /**
     * HTTP contains HTTP artifact location details
     */
    http?: HTTPArtifact;
    /**
     * OSS contains OSS artifact location details
     */
    oss?: OSSArtifact;
    /**
     * Raw contains raw artifact location details
     */
    raw?: RawArtifact;
    /**
     * S3 contains S3 artifact location details
     */
    s3?: S3Artifact;
}
/**
 * ArtifactPaths expands a step from a collection of artifacts
 */
export interface ArtifactPaths {
    /**
     * Archive controls how the artifact will be saved to the artifact repository.
     */
    archive?: ArchiveStrategy;
    /**
     * ArchiveLogs indicates if the container logs should be archived
     */
    archiveLogs?: boolean;
    /**
     * Artifactory contains artifactory artifact location details
     */
    artifactory?: ArtifactoryArtifact;
    /**
     * From allows an artifact to reference an artifact from a previous step
     */
    from?: string;
    /**
     * FromExpression, if defined, is evaluated to specify the value for the artifact
     */
    fromExpression?: string;
    /**
     * GCS contains GCS artifact location details
     */
    gcs?: GCSArtifact;
    /**
     * Git contains git artifact location details
     */
    git?: GitArtifact;
    /**
     * GlobalName exports an output artifact to the global scope, making it available as '{{io.argoproj.workflow.v1alpha1.outputs.artifacts.XXXX}} and in workflow.status.outputs.artifacts
     */
    globalName?: string;
    /**
     * HDFS contains HDFS artifact location details
     */
    hdfs?: HDFSArtifact;
    /**
     * HTTP contains HTTP artifact location details
     */
    http?: HTTPArtifact;
    /**
     * mode bits to use on this file, must be a value between 0 and 0777 set when loading input artifacts.
     */
    mode?: number;
    /**
     * name of the artifact. must be unique within a template's inputs/outputs.
     */
    name: string;
    /**
     * Make Artifacts optional, if Artifacts doesn't generate or exist
     */
    optional?: boolean;
    /**
     * OSS contains OSS artifact location details
     */
    oss?: OSSArtifact;
    /**
     * Path is the container path to the artifact
     */
    path?: string;
    /**
     * Raw contains raw artifact location details
     */
    raw?: RawArtifact;
    /**
     * If mode is set, apply the permission recursively into the artifact if it is a folder
     */
    recurseMode?: boolean;
    /**
     * S3 contains S3 artifact location details
     */
    s3?: S3Artifact;
    /**
     * SubPath allows an artifact to be sourced from a subpath within the specified source
     */
    subPath?: string;
}
export interface ArtifactRepositoryRef {
    /**
     * The name of the config map. Defaults to "artifact-repositories".
     */
    configMap?: string;
    /**
     * The config map key. Defaults to the value of the "workflows.argoproj.io/default-artifact-repository" annotation.
     */
    key?: string;
}
export interface ArtifactRepositoryRefStatus {
    /**
     * The name of the config map. Defaults to "artifact-repositories".
     */
    configMap?: string;
    /**
     * If this ref represents the default artifact repository, rather than a config map.
     */
    default?: boolean;
    /**
     * The config map key. Defaults to the value of the "workflows.argoproj.io/default-artifact-repository" annotation.
     */
    key?: string;
    /**
     * The namespace of the config map. Defaults to the workflow's namespace, or the controller's namespace (if found).
     */
    namespace?: string;
}
/**
 * ArtifactoryArtifact is the location of an artifactory artifact
 */
export interface ArtifactoryArtifact {
    /**
     * PasswordSecret is the secret selector to the repository password
     */
    passwordSecret?: k8s.SecretKeySelector;
    /**
     * URL of the artifact
     */
    url: string;
    /**
     * UsernameSecret is the secret selector to the repository username
     */
    usernameSecret?: k8s.SecretKeySelector;
}
/**
 * Backoff is a backoff strategy to use within retryStrategy
 */
export interface Backoff {
    /**
     * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")
     */
    duration?: string;
    /**
     * Factor is a factor to multiply the base duration after each failed retry
     */
    factor?: k8s.IntOrString;
    /**
     * MaxDuration is the maximum amount of time allowed for the backoff strategy
     */
    maxDuration?: string;
}
/**
 * Cache is the configuration for the type of cache to be used
 */
export interface Cache {
    /**
     * ConfigMap sets a ConfigMap-based cache
     */
    configMap: k8s.ConfigMapKeySelector;
}
/**
 * ClusterWorkflowTemplate is the definition of a workflow template resource in cluster scope
 */
export interface ClusterWorkflowTemplate {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
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
/**
 * ClusterWorkflowTemplateList is list of ClusterWorkflowTemplate resources
 */
export interface ClusterWorkflowTemplateList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    items: ClusterWorkflowTemplate[];
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ListMeta;
}
export interface ClusterWorkflowTemplateUpdateRequest {
    /**
     * DEPRECATED: This field is ignored.
     */
    name?: string;
    template?: ClusterWorkflowTemplate;
}
export interface Condition {
    /**
     * Message is the condition message
     */
    message?: string;
    /**
     * Status is the status of the condition
     */
    status?: string;
    /**
     * Type is the type of condition
     */
    type?: string;
}
export interface ContainerNode {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    command?: string[];
    dependencies?: string[];
    /**
     * List of environment variables to set in the container. Cannot be updated.
     */
    env?: k8s.EnvVar[];
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     */
    envFrom?: k8s.EnvFromSource[];
    /**
     * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
     */
    image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     */
    imagePullPolicy?: string;
    /**
     * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
     */
    lifecycle?: k8s.Lifecycle;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    livenessProbe?: k8s.Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
     */
    name: string;
    /**
     * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
     */
    ports?: k8s.ContainerPort[];
    /**
     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    readinessProbe?: k8s.Probe;
    /**
     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     */
    resources?: k8s.ResourceRequirements;
    /**
     * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     */
    securityContext?: k8s.SecurityContext;
    /**
     * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    startupProbe?: k8s.Probe;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     */
    stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     */
    stdinOnce?: boolean;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     */
    terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     */
    tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container.
     */
    volumeDevices?: k8s.VolumeDevice[];
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated.
     */
    volumeMounts?: k8s.VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     */
    workingDir?: string;
}
export interface ContainerSetTemplate {
    containers: ContainerNode[];
    volumeMounts?: k8s.VolumeMount[];
}
/**
 * ContinueOn defines if a workflow should continue even if a task or step fails/errors. It can be specified if the workflow should continue when the pod errors, fails or both.
 */
export interface ContinueOn {
    error?: boolean;
    failed?: boolean;
}
/**
 * Counter is a Counter prometheus metric
 */
export interface Counter {
    /**
     * Value is the value of the metric
     */
    value: string;
}
export interface CreateCronWorkflowRequest {
    createOptions?: k8s.CreateOptions;
    cronWorkflow?: CronWorkflow;
    namespace?: string;
}
/**
 * CreateS3BucketOptions options used to determine automatic automatic bucket-creation process
 */
export interface CreateS3BucketOptions {
    /**
     * ObjectLocking Enable object locking
     */
    objectLocking?: boolean;
}
/**
 * CronWorkflow is the definition of a scheduled workflow resource
 */
export interface CronWorkflow {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: CronWorkflowSpec;
    status?: CronWorkflowStatus;
}
export interface CronWorkflowDeletedResponse {
}
/**
 * CronWorkflowList is list of CronWorkflow resources
 */
export interface CronWorkflowList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    items: CronWorkflow[];
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ListMeta;
}
export interface CronWorkflowResumeRequest {
    name?: string;
    namespace?: string;
}
/**
 * CronWorkflowSpec is the specification of a CronWorkflow
 */
export interface CronWorkflowSpec {
    /**
     * ConcurrencyPolicy is the K8s-style concurrency policy that will be used
     */
    concurrencyPolicy?: string;
    /**
     * FailedJobsHistoryLimit is the number of failed jobs to be kept at a time
     */
    failedJobsHistoryLimit?: number;
    /**
     * Schedule is a schedule to run the Workflow in Cron format
     */
    schedule: string;
    /**
     * StartingDeadlineSeconds is the K8s-style deadline that will limit the time a CronWorkflow will be run after its original scheduled time if it is missed.
     */
    startingDeadlineSeconds?: number;
    /**
     * SuccessfulJobsHistoryLimit is the number of successful jobs to be kept at a time
     */
    successfulJobsHistoryLimit?: number;
    /**
     * Suspend is a flag that will stop new CronWorkflows from running if set to true
     */
    suspend?: boolean;
    /**
     * Timezone is the timezone against which the cron schedule will be calculated, e.g. "Asia/Tokyo". Default is machine's local time.
     */
    timezone?: string;
    /**
     * WorkflowMetadata contains some metadata of the workflow to be run
     */
    workflowMetadata?: k8s.ObjectMeta;
    /**
     * WorkflowSpec is the spec of the workflow to be run
     */
    workflowSpec: WorkflowSpec;
}
/**
 * CronWorkflowStatus is the status of a CronWorkflow
 */
export interface CronWorkflowStatus {
    /**
     * Active is a list of active workflows stemming from this CronWorkflow
     */
    active: k8s.ObjectReference[];
    /**
     * Conditions is a list of conditions the CronWorkflow may have
     */
    conditions: Condition[];
    /**
     * LastScheduleTime is the last time the CronWorkflow was scheduled
     */
    lastScheduledTime: Date; // date-time
}
export interface CronWorkflowSuspendRequest {
    name?: string;
    namespace?: string;
}
/**
 * DAGTask represents a node in the graph during DAG execution
 */
export interface DAGTask {
    /**
     * Arguments are the parameter and artifact arguments to the template
     */
    arguments?: Arguments;
    /**
     * ContinueOn makes argo to proceed with the following step even if this step fails. Errors and Failed states can be specified
     */
    continueOn?: ContinueOn;
    /**
     * Dependencies are name of other targets which this depends on
     */
    dependencies?: string[];
    /**
     * Depends are name of other targets which this depends on
     */
    depends?: string;
    /**
     * Name is the name of the target
     */
    name: string;
    /**
     * OnExit is a template reference which is invoked at the end of the template, irrespective of the success, failure, or error of the primary template.
     */
    onExit?: string;
    /**
     * Name of template to execute
     */
    template?: string;
    /**
     * TemplateRef is the reference to the template resource to execute.
     */
    templateRef?: TemplateRef;
    /**
     * When is an expression in which the task should conditionally execute
     */
    when?: string;
    /**
     * WithItems expands a task into multiple parallel tasks from the items in the list
     */
    withItems?: Item[];
    /**
     * WithParam expands a task into multiple parallel tasks from the value in the parameter, which is expected to be a JSON list.
     */
    withParam?: string;
    /**
     * WithSequence expands a task into a numeric sequence
     */
    withSequence?: Sequence;
}
/**
 * DAGTemplate is a template subtype for directed acyclic graph templates
 */
export interface DAGTemplate {
    /**
     * This flag is for DAG logic. The DAG logic has a built-in "fail fast" feature to stop scheduling new steps, as soon as it detects that one of the DAG nodes is failed. Then it waits until all DAG nodes are completed before failing the DAG itself. The FailFast flag default is true,  if set to false, it will allow a DAG to run all branches of the DAG to completion (either success or failure), regardless of the failed outcomes of branches in the DAG. More info and example about this feature at https://github.com/argoproj/argo-workflows/issues/1442
     */
    failFast?: boolean;
    /**
     * Target are one or more names of targets to execute in a DAG
     */
    target?: string;
    /**
     * Tasks are a list of DAG tasks
     */
    tasks: DAGTask[];
}
/**
 * Data is a data template
 */
export interface Data {
    /**
     * Source sources external data into a data template
     */
    source: DataSource;
    /**
     * Transformation applies a set of transformations
     */
    transformation: TransformationStep[];
}
/**
 * DataSource sources external data into a data template
 */
export interface DataSource {
    /**
     * ArtifactPaths is a data transformation that collects a list of artifact paths
     */
    artifactPaths?: ArtifactPaths;
}
export interface Event {
    /**
     * Selector (https://github.com/antonmedv/expr) that we must must match the io.argoproj.workflow.v1alpha1. E.g. `payload.message == "test"`
     */
    selector: string;
}
export interface EventResponse {
}
/**
 * ExecutorConfig holds configurations of an executor container.
 */
export interface ExecutorConfig {
    /**
     * ServiceAccountName specifies the service account name of the executor container.
     */
    serviceAccountName?: string;
}
/**
 * GCSArtifact is the location of a GCS artifact
 */
export interface GCSArtifact {
    /**
     * Bucket is the name of the bucket
     */
    bucket?: string;
    /**
     * Key is the path in the bucket where the artifact resides
     */
    key: string;
    /**
     * ServiceAccountKeySecret is the secret selector to the bucket's service account key
     */
    serviceAccountKeySecret?: k8s.SecretKeySelector;
}
/**
 * Gauge is a Gauge prometheus metric
 */
export interface Gauge {
    /**
     * Realtime emits this metric in real time if applicable
     */
    realtime: boolean;
    /**
     * Value is the value of the metric
     */
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
/**
 * GitArtifact is the location of an git artifact
 */
export interface GitArtifact {
    /**
     * Depth specifies clones/fetches should be shallow and include the given number of commits from the branch tip
     */
    depth?: number;
    /**
     * Fetch specifies a number of refs that should be fetched before checkout
     */
    fetch?: string[];
    /**
     * InsecureIgnoreHostKey disables SSH strict host key checking during git clone
     */
    insecureIgnoreHostKey?: boolean;
    /**
     * PasswordSecret is the secret selector to the repository password
     */
    passwordSecret?: k8s.SecretKeySelector;
    /**
     * Repo is the git repository
     */
    repo: string;
    /**
     * Revision is the git commit, tag, branch to checkout
     */
    revision?: string;
    /**
     * SSHPrivateKeySecret is the secret selector to the repository ssh private key
     */
    sshPrivateKeySecret?: k8s.SecretKeySelector;
    /**
     * UsernameSecret is the secret selector to the repository username
     */
    usernameSecret?: k8s.SecretKeySelector;
}
/**
 * HDFSArtifact is the location of an HDFS artifact
 */
export interface HDFSArtifact {
    /**
     * Addresses is accessible addresses of HDFS name nodes
     */
    addresses?: string[];
    /**
     * Force copies a file forcibly even if it exists (default: false)
     */
    force?: boolean;
    /**
     * HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab is used.
     */
    hdfsUser?: string;
    /**
     * KrbCCacheSecret is the secret selector for Kerberos ccache Either ccache or keytab can be set to use Kerberos.
     */
    krbCCacheSecret?: k8s.SecretKeySelector;
    /**
     * KrbConfig is the configmap selector for Kerberos config as string It must be set if either ccache or keytab is used.
     */
    krbConfigConfigMap?: k8s.ConfigMapKeySelector;
    /**
     * KrbKeytabSecret is the secret selector for Kerberos keytab Either ccache or keytab can be set to use Kerberos.
     */
    krbKeytabSecret?: k8s.SecretKeySelector;
    /**
     * KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.
     */
    krbRealm?: string;
    /**
     * KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used.
     */
    krbServicePrincipalName?: string;
    /**
     * KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used.
     */
    krbUsername?: string;
    /**
     * Path is a file path in HDFS
     */
    path: string;
}
/**
 * HTTPArtifact allows an file served on HTTP to be placed as an input artifact in a container
 */
export interface HTTPArtifact {
    /**
     * Headers are an optional list of headers to send with HTTP requests for artifacts
     */
    headers?: Header[];
    /**
     * URL of the artifact
     */
    url: string;
}
/**
 * Header indicate a key-value request header to be used when fetching artifacts over HTTP
 */
export interface Header {
    /**
     * Name is the header name
     */
    name: string;
    /**
     * Value is the literal value to use for the header
     */
    value: string;
}
/**
 * Histogram is a Histogram prometheus metric
 */
export interface Histogram {
    /**
     * Buckets is a list of bucket divisors for the histogram
     */
    buckets: Amount[];
    /**
     * Value is the value of the metric
     */
    value: string;
}
export interface InfoResponse {
    links?: Link[];
    managedNamespace?: string;
}
/**
 * Inputs are the mechanism for passing parameters, artifacts, volumes from one template to another
 */
export interface Inputs {
    /**
     * Artifact are a list of artifacts passed as inputs
     */
    artifacts?: Artifact[];
    /**
     * Parameters are a list of parameters passed as inputs
     */
    parameters?: Parameter[];
}
/**
 * Item expands a single workflow step into multiple parallel steps The value of Item can be a map, string, bool, or number
 */
export type Item = any;
/**
 * A link to another app.
 */
export interface Link {
    /**
     * The name of the link, E.g. "Workflow Logs" or "Pod Logs"
     */
    name: string;
    /**
     * "workflow", "pod", "pod-logs", "event-source-logs", "sensor-logs" or "chat"
     */
    scope: string;
    /**
     * The URL. Can contain "${metadata.namespace}", "${metadata.name}", "${status.startedAt}", "${status.finishedAt}" or any other element in workflow yaml, e.g. "${io.argoproj.workflow.v1alpha1.metadata.annotations.userDefinedKey}"
     */
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
/**
 * MemoizationStatus is the status of this memoized node
 */
export interface MemoizationStatus {
    /**
     * Cache is the name of the cache that was used
     */
    cacheName: string;
    /**
     * Hit indicates whether this node was created from a cache entry
     */
    hit: boolean;
    /**
     * Key is the name of the key used for this node's cache
     */
    key: string;
}
/**
 * Memoization enables caching for the Outputs of the template
 */
export interface Memoize {
    /**
     * Cache sets and configures the kind of cache
     */
    cache: Cache;
    /**
     * Key is the key to use as the caching key
     */
    key: string;
    /**
     * MaxAge is the maximum age (e.g. "180s", "24h") of an entry that is still considered valid. If an entry is older than the MaxAge, it will be ignored.
     */
    maxAge: string;
}
/**
 * Pod metdata
 */
export interface Metadata {
    annotations?: {
        [name: string]: string;
    };
    labels?: {
        [name: string]: string;
    };
}
/**
 * MetricLabel is a single label for a prometheus metric
 */
export interface MetricLabel {
    key: string;
    value: string;
}
/**
 * Metrics are a list of metrics emitted from a Workflow/Template
 */
export interface Metrics {
    /**
     * Prometheus is a list of prometheus metrics to be emitted
     */
    prometheus: Prometheus[];
}
/**
 * Mutex holds Mutex configuration
 */
export interface Mutex {
    /**
     * name of the mutex
     */
    name?: string;
}
/**
 * MutexHolding describes the mutex and the object which is holding it.
 */
export interface MutexHolding {
    /**
     * Holder is a reference to the object which holds the Mutex. Holding Scenario:
     *   1. Current workflow's NodeID which is holding the lock.
     *      e.g: ${NodeID}
     * Waiting Scenario:
     *   1. Current workflow or other workflow NodeID which is holding the lock.
     *      e.g: ${WorkflowName}/${NodeID}
     */
    holder?: string;
    /**
     * Reference for the mutex e.g: ${namespace}/mutex/${mutexName}
     */
    mutex?: string;
}
/**
 * MutexStatus contains which objects hold  mutex locks, and which objects this workflow is waiting on to release locks.
 */
export interface MutexStatus {
    /**
     * Holding is a list of mutexes and their respective objects that are held by mutex lock for this io.argoproj.workflow.v1alpha1.
     */
    holding?: MutexHolding[];
    /**
     * Waiting is a list of mutexes and their respective objects this workflow is waiting for.
     */
    waiting?: MutexHolding[];
}
/**
 * NodeStatus contains status information about an individual node in the workflow
 */
export interface NodeStatus {
    /**
     * BoundaryID indicates the node ID of the associated template root node in which this node belongs to
     */
    boundaryID?: string;
    /**
     * Children is a list of child node IDs
     */
    children?: string[];
    /**
     * Daemoned tracks whether or not this node was daemoned and need to be terminated
     */
    daemoned?: boolean;
    /**
     * DisplayName is a human readable representation of the node. Unique within a template boundary
     */
    displayName?: string;
    /**
     * EstimatedDuration in seconds.
     */
    estimatedDuration?: number;
    /**
     * Time at which this node completed
     */
    finishedAt?: Date; // date-time
    /**
     * HostNodeName name of the Kubernetes node on which the Pod is running, if applicable
     */
    hostNodeName?: string;
    /**
     * ID is a unique identifier of a node within the worklow It is implemented as a hash of the node name, which makes the ID deterministic
     */
    id: string;
    /**
     * Inputs captures input parameter values and artifact locations supplied to this template invocation
     */
    inputs?: Inputs;
    /**
     * MemoizationStatus holds information about cached nodes
     */
    memoizationStatus?: MemoizationStatus;
    /**
     * A human readable message indicating details about why the node is in this condition.
     */
    message?: string;
    /**
     * Name is unique name in the node tree used to generate the node ID
     */
    name: string;
    /**
     * OutboundNodes tracks the node IDs which are considered "outbound" nodes to a template invocation. For every invocation of a template, there are nodes which we considered as "outbound". Essentially, these are last nodes in the execution sequence to run, before the template is considered completed. These nodes are then connected as parents to a following step.
     * 
     * In the case of single pod steps (i.e. container, script, resource templates), this list will be nil since the pod itself is already considered the "outbound" node. In the case of DAGs, outbound nodes are the "target" tasks (tasks with no children). In the case of steps, outbound nodes are all the containers involved in the last step group. NOTE: since templates are composable, the list of outbound nodes are carried upwards when a DAG/steps template invokes another DAG/steps template. In other words, the outbound nodes of a template, will be a superset of the outbound nodes of its last children.
     */
    outboundNodes?: string[];
    /**
     * Outputs captures output parameter values and artifact locations produced by this template invocation
     */
    outputs?: Outputs;
    /**
     * Phase a simple, high-level summary of where the node is in its lifecycle. Can be used as a state machine.
     */
    phase?: string;
    /**
     * PodIP captures the IP of the pod for daemoned steps
     */
    podIP?: string;
    /**
     * Progress to completion
     */
    progress?: string;
    /**
     * ResourcesDuration is indicative, but not accurate, resource duration. This is populated when the nodes completes.
     */
    resourcesDuration?: {
        [name: string]: number; // int64
    };
    /**
     * Time at which this node started
     */
    startedAt?: Date; // date-time
    /**
     * SynchronizationStatus is the synchronization status of the node
     */
    synchronizationStatus?: NodeSynchronizationStatus;
    /**
     * TemplateName is the template name which this node corresponds to. Not applicable to virtual nodes (e.g. Retry, StepGroup)
     */
    templateName?: string;
    /**
     * TemplateRef is the reference to the template resource which this node corresponds to. Not applicable to virtual nodes (e.g. Retry, StepGroup)
     */
    templateRef?: TemplateRef;
    /**
     * TemplateScope is the template scope in which the template of this node was retrieved.
     */
    templateScope?: string;
    /**
     * Type indicates type of node
     */
    type: string;
}
/**
 * NodeSynchronizationStatus stores the status of a node
 */
export interface NodeSynchronizationStatus {
    /**
     * Waiting is the name of the lock that this node is waiting for
     */
    waiting?: string;
}
/**
 * NoneStrategy indicates to skip tar process and upload the files or directory tree as independent files. Note that if the artifact is a directory, the artifact driver must support the ability to save/load the directory appropriately.
 */
export interface NoneStrategy {
}
/**
 * OSSArtifact is the location of an Alibaba Cloud OSS artifact
 */
export interface OSSArtifact {
    /**
     * AccessKeySecret is the secret selector to the bucket's access key
     */
    accessKeySecret?: k8s.SecretKeySelector;
    /**
     * Bucket is the name of the bucket
     */
    bucket?: string;
    /**
     * CreateBucketIfNotPresent tells the driver to attempt to create the OSS bucket for output artifacts, if it doesn't exist
     */
    createBucketIfNotPresent?: boolean;
    /**
     * Endpoint is the hostname of the bucket endpoint
     */
    endpoint?: string;
    /**
     * Key is the path in the bucket where the artifact resides
     */
    key: string;
    /**
     * SecretKeySecret is the secret selector to the bucket's secret key
     */
    secretKeySecret?: k8s.SecretKeySelector;
    /**
     * SecurityToken is the user's temporary security token. For more details, check out: https://www.alibabacloud.com/help/doc-detail/100624.htm
     */
    securityToken?: string;
}
/**
 * Outputs hold parameters, artifacts, and results from a step
 */
export interface Outputs {
    /**
     * Artifacts holds the list of output artifacts produced by a step
     */
    artifacts?: Artifact[];
    /**
     * ExitCode holds the exit code of a script template
     */
    exitCode?: string;
    /**
     * Parameters holds the list of output parameters produced by a step
     */
    parameters?: Parameter[];
    /**
     * Result holds the result (stdout) of a script template
     */
    result?: string;
}
export type ParallelSteps = WorkflowStep[];
/**
 * Parameter indicate a passed string parameter to a service template with an optional default value
 */
export interface Parameter {
    /**
     * Default is the default value to use for an input parameter if a value was not supplied
     */
    default?: string;
    /**
     * Enum holds a list of string values to choose from, for the actual value of the parameter
     */
    enum?: string[];
    /**
     * GlobalName exports an output parameter to the global scope, making it available as '{{io.argoproj.workflow.v1alpha1.outputs.parameters.XXXX}} and in workflow.status.outputs.parameters
     */
    globalName?: string;
    /**
     * Name is the parameter name
     */
    name: string;
    /**
     * Value is the literal value to use for the parameter. If specified in the context of an input parameter, the value takes precedence over any passed values
     */
    value?: string;
    /**
     * ValueFrom is the source for the output parameter's value
     */
    valueFrom?: ValueFrom;
}
/**
 * PodGC describes how to delete completed pods as they complete
 */
export interface PodGC {
    /**
     * LabelSelector is the label selector to check if the pods match the labels before being added to the pod GC queue.
     */
    labelSelector?: k8s.LabelSelector;
    /**
     * Strategy is the strategy to use. One of "OnPodCompletion", "OnPodSuccess", "OnWorkflowCompletion", "OnWorkflowSuccess"
     */
    strategy?: string;
}
/**
 * Prometheus is a prometheus metric to be emitted
 */
export interface Prometheus {
    /**
     * Counter is a counter metric
     */
    counter?: Counter;
    /**
     * Gauge is a gauge metric
     */
    gauge?: Gauge;
    /**
     * Help is a string that describes the metric
     */
    help: string;
    /**
     * Histogram is a histogram metric
     */
    histogram?: Histogram;
    /**
     * Labels is a list of metric labels
     */
    labels?: MetricLabel[];
    /**
     * Name is the name of the metric
     */
    name: string;
    /**
     * When is a conditional statement that decides when to emit the metric
     */
    when?: string;
}
/**
 * RawArtifact allows raw string content to be placed as an artifact in a container
 */
export interface RawArtifact {
    /**
     * Data is the string contents of the artifact
     */
    data: string;
}
/**
 * ResourceTemplate is a template subtype to manipulate kubernetes resources
 */
export interface ResourceTemplate {
    /**
     * Action is the action to perform to the resource. Must be one of: get, create, apply, delete, replace, patch
     */
    action: string;
    /**
     * FailureCondition is a label selector expression which describes the conditions of the k8s resource in which the step was considered failed
     */
    failureCondition?: string;
    /**
     * Flags is a set of additional options passed to kubectl before submitting a resource I.e. to disable resource validation: flags: [
     * 	"--validate=false"  # disable resource validation
     * ]
     */
    flags?: string[];
    /**
     * Manifest contains the kubernetes manifest
     */
    manifest?: string;
    /**
     * MergeStrategy is the strategy used to merge a patch. It defaults to "strategic" Must be one of: strategic, merge, json
     */
    mergeStrategy?: string;
    /**
     * SetOwnerReference sets the reference to the workflow on the OwnerReference of generated resource.
     */
    setOwnerReference?: boolean;
    /**
     * SuccessCondition is a label selector expression which describes the conditions of the k8s resource in which it is acceptable to proceed to the following step
     */
    successCondition?: string;
}
/**
 * RetryAffinity prevents running steps on the same host.
 */
export interface RetryAffinity {
    nodeAntiAffinity?: RetryNodeAntiAffinity;
}
/**
 * RetryNodeAntiAffinity is a placeholder for future expansion, only empty nodeAntiAffinity is allowed. In order to prevent running steps on the same host, it uses "kubernetes.io/hostname".
 */
export interface RetryNodeAntiAffinity {
}
/**
 * RetryStrategy provides controls on how to retry a workflow step
 */
export interface RetryStrategy {
    /**
     * Affinity prevents running workflow's step on the same host
     */
    affinity?: RetryAffinity;
    /**
     * Backoff is a backoff strategy
     */
    backoff?: Backoff;
    /**
     * Limit is the maximum number of attempts when retrying a container
     */
    limit?: k8s.IntOrString;
    /**
     * RetryPolicy is a policy of NodePhase statuses that will be retried
     */
    retryPolicy?: string;
}
/**
 * S3Artifact is the location of an S3 artifact
 */
export interface S3Artifact {
    /**
     * AccessKeySecret is the secret selector to the bucket's access key
     */
    accessKeySecret?: k8s.SecretKeySelector;
    /**
     * Bucket is the name of the bucket
     */
    bucket?: string;
    /**
     * CreateBucketIfNotPresent tells the driver to attempt to create the S3 bucket for output artifacts, if it doesn't exist
     */
    createBucketIfNotPresent?: CreateS3BucketOptions;
    /**
     * Endpoint is the hostname of the bucket endpoint
     */
    endpoint?: string;
    /**
     * Insecure will connect to the service with TLS
     */
    insecure?: boolean;
    /**
     * Key is the key in the bucket where the artifact resides
     */
    key?: string;
    /**
     * Region contains the optional bucket region
     */
    region?: string;
    /**
     * RoleARN is the Amazon Resource Name (ARN) of the role to assume.
     */
    roleARN?: string;
    /**
     * SecretKeySecret is the secret selector to the bucket's secret key
     */
    secretKeySecret?: k8s.SecretKeySelector;
    /**
     * UseSDKCreds tells the driver to figure out credentials based on sdk defaults.
     */
    useSDKCreds?: boolean;
}
/**
 * ScriptTemplate is a template subtype to enable scripting through code steps
 */
export interface ScriptTemplate {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    command?: string[];
    /**
     * List of environment variables to set in the container. Cannot be updated.
     */
    env?: k8s.EnvVar[];
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     */
    envFrom?: k8s.EnvFromSource[];
    /**
     * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
     */
    image: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     */
    imagePullPolicy?: string;
    /**
     * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
     */
    lifecycle?: k8s.Lifecycle;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    livenessProbe?: k8s.Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
     */
    name?: string;
    /**
     * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
     */
    ports?: k8s.ContainerPort[];
    /**
     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    readinessProbe?: k8s.Probe;
    /**
     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     */
    resources?: k8s.ResourceRequirements;
    /**
     * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     */
    securityContext?: k8s.SecurityContext;
    /**
     * Source contains the source code of the script to execute
     */
    source: string;
    /**
     * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    startupProbe?: k8s.Probe;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     */
    stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     */
    stdinOnce?: boolean;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     */
    terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     */
    tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container.
     */
    volumeDevices?: k8s.VolumeDevice[];
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated.
     */
    volumeMounts?: k8s.VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     */
    workingDir?: string;
}
export interface SemaphoreHolding {
    /**
     * Holders stores the list of current holder names in the io.argoproj.workflow.v1alpha1.
     */
    holders?: string[];
    /**
     * Semaphore stores the semaphore name.
     */
    semaphore?: string;
}
/**
 * SemaphoreRef is a reference of Semaphore
 */
export interface SemaphoreRef {
    /**
     * ConfigMapKeyRef is configmap selector for Semaphore configuration
     */
    configMapKeyRef?: k8s.ConfigMapKeySelector;
}
export interface SemaphoreStatus {
    /**
     * Holding stores the list of resource acquired synchronization lock for workflows.
     */
    holding?: SemaphoreHolding[];
    /**
     * Waiting indicates the list of current synchronization lock holders.
     */
    waiting?: SemaphoreHolding[];
}
/**
 * Sequence expands a workflow step into numeric range
 */
export interface Sequence {
    /**
     * Count is number of elements in the sequence (default: 0). Not to be used with end
     */
    count?: k8s.IntOrString;
    /**
     * Number at which to end the sequence (default: 0). Not to be used with Count
     */
    end?: k8s.IntOrString;
    /**
     * Format is a printf format string to format the value in the sequence
     */
    format?: string;
    /**
     * Number at which to start the sequence (default: 0)
     */
    start?: k8s.IntOrString;
}
export interface Submit {
    /**
     * Arguments extracted from the event and then set as arguments to the workflow created.
     */
    arguments?: Arguments;
    /**
     * Metadata optional means to customize select fields of the workflow metadata
     */
    metadata?: k8s.ObjectMeta;
    /**
     * WorkflowTemplateRef the workflow template to submit
     */
    workflowTemplateRef: WorkflowTemplateRef;
}
/**
 * SubmitOpts are workflow submission options
 */
export interface SubmitOpts {
    /**
     * Annotations adds to metadata.labels
     */
    annotations?: string;
    /**
     * DryRun validates the workflow on the client-side without creating it. This option is not supported in API
     */
    dryRun?: boolean;
    /**
     * Entrypoint overrides spec.entrypoint
     */
    entryPoint?: string;
    /**
     * GenerateName overrides metadata.generateName
     */
    generateName?: string;
    /**
     * Labels adds to metadata.labels
     */
    labels?: string;
    /**
     * Name overrides metadata.name
     */
    name?: string;
    /**
     * OwnerReference creates a metadata.ownerReference
     */
    ownerReference?: k8s.OwnerReference;
    /**
     * ParameterFile holds a reference to a parameter file. This option is not supported in API
     */
    parameterFile?: string;
    /**
     * Parameters passes input parameters to workflow
     */
    parameters?: string[];
    /**
     * ServerDryRun validates the workflow on the server-side without creating it
     */
    serverDryRun?: boolean;
    /**
     * ServiceAccount runs all pods in the workflow using specified ServiceAccount.
     */
    serviceAccount?: string;
}
/**
 * SuppliedValueFrom is a placeholder for a value to be filled in directly, either through the CLI, API, etc.
 */
export interface SuppliedValueFrom {
}
/**
 * SuspendTemplate is a template subtype to suspend a workflow at a predetermined point in time
 */
export interface SuspendTemplate {
    /**
     * Duration is the seconds to wait before automatically resuming a template
     */
    duration?: string;
}
/**
 * Synchronization holds synchronization lock configuration
 */
export interface Synchronization {
    /**
     * Mutex holds the Mutex lock details
     */
    mutex?: Mutex;
    /**
     * Semaphore holds the Semaphore configuration
     */
    semaphore?: SemaphoreRef;
}
/**
 * SynchronizationStatus stores the status of semaphore and mutex.
 */
export interface SynchronizationStatus {
    /**
     * Mutex stores this workflow's mutex holder details
     */
    mutex?: MutexStatus;
    /**
     * Semaphore stores this workflow's Semaphore holder details
     */
    semaphore?: SemaphoreStatus;
}
/**
 * TTLStrategy is the strategy for the time to live depending on if the workflow succeeded or failed
 */
export interface TTLStrategy {
    /**
     * SecondsAfterCompletion is the number of seconds to live after completion
     */
    secondsAfterCompletion?: number;
    /**
     * SecondsAfterFailure is the number of seconds to live after failure
     */
    secondsAfterFailure?: number;
    /**
     * SecondsAfterSuccess is the number of seconds to live after success
     */
    secondsAfterSuccess?: number;
}
/**
 * TarStrategy will tar and gzip the file or directory when saving
 */
export interface TarStrategy {
    /**
     * CompressionLevel specifies the gzip compression level to use for the artifact. Defaults to gzip.DefaultCompression.
     */
    compressionLevel?: number;
}
/**
 * Template is a reusable and composable unit of execution in a workflow
 */
export interface Template {
    /**
     * Optional duration in seconds relative to the StartTime that the pod may be active on a node before the system actively tries to terminate the pod; value must be positive integer This field is only applicable to container and script templates.
     */
    activeDeadlineSeconds?: k8s.IntOrString;
    /**
     * Affinity sets the pod's scheduling constraints Overrides the affinity set at the workflow level (if any)
     */
    affinity?: k8s.Affinity;
    /**
     * Location in which all files related to the step will be stored (logs, artifacts, etc...). Can be overridden by individual items in Outputs. If omitted, will use the default artifact repository location configured in the controller, appended with the <workflowname>/<nodename> in the key.
     */
    archiveLocation?: ArtifactLocation;
    /**
     * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.
     */
    automountServiceAccountToken?: boolean;
    /**
     * Container is the main container image to run in the pod
     */
    container?: k8s.Container;
    /**
     * ContainerSet groups multiple containers within a single pod.
     */
    containerSet?: ContainerSetTemplate;
    /**
     * Deamon will allow a workflow to proceed to the next step so long as the container reaches readiness
     */
    daemon?: boolean;
    /**
     * DAG template subtype which runs a DAG
     */
    dag?: DAGTemplate;
    /**
     * Data is a data template
     */
    data?: Data;
    /**
     * Executor holds configurations of the executor container.
     */
    executor?: ExecutorConfig;
    /**
     * FailFast, if specified, will fail this template if any of its child pods has failed. This is useful for when this template is expanded with `withItems`, etc.
     */
    failFast?: boolean;
    /**
     * HostAliases is an optional list of hosts and IPs that will be injected into the pod spec
     */
    hostAliases?: k8s.HostAlias[];
    /**
     * InitContainers is a list of containers which run before the main container.
     */
    initContainers?: UserContainer[];
    /**
     * Inputs describe what inputs parameters and artifacts are supplied to this template
     */
    inputs?: Inputs;
    /**
     * Memoize allows templates to use outputs generated from already executed templates
     */
    memoize?: Memoize;
    /**
     * Metdata sets the pods's metadata, i.e. annotations and labels
     */
    metadata?: Metadata;
    /**
     * Metrics are a list of metrics emitted from this template
     */
    metrics?: Metrics;
    /**
     * Name is the name of the template
     */
    name?: string;
    /**
     * NodeSelector is a selector to schedule this step of the workflow to be run on the selected node(s). Overrides the selector set at the workflow level.
     */
    nodeSelector?: {
        [name: string]: string;
    };
    /**
     * Outputs describe the parameters and artifacts that this template produces
     */
    outputs?: Outputs;
    /**
     * Parallelism limits the max total parallel pods that can execute at the same time within the boundaries of this template invocation. If additional steps/dag templates are invoked, the pods created by those templates will not be counted towards this total.
     */
    parallelism?: number;
    /**
     * PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).
     */
    podSpecPatch?: string;
    /**
     * Priority to apply to workflow pods.
     */
    priority?: number;
    /**
     * PriorityClassName to apply to workflow pods.
     */
    priorityClassName?: string;
    /**
     * Resource template subtype which can run k8s resources
     */
    resource?: ResourceTemplate;
    /**
     * RetryStrategy describes how to retry a template when it fails
     */
    retryStrategy?: RetryStrategy;
    /**
     * If specified, the pod will be dispatched by specified scheduler. Or it will be dispatched by workflow scope scheduler if specified. If neither specified, the pod will be dispatched by default scheduler.
     */
    schedulerName?: string;
    /**
     * Script runs a portion of code against an interpreter
     */
    script?: ScriptTemplate;
    /**
     * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
     */
    securityContext?: k8s.PodSecurityContext;
    /**
     * ServiceAccountName to apply to workflow pods
     */
    serviceAccountName?: string;
    /**
     * Sidecars is a list of containers which run alongside the main container Sidecars are automatically killed when the main container completes
     */
    sidecars?: UserContainer[];
    /**
     * Steps define a series of sequential/parallel workflow steps
     */
    steps?: ParallelSteps[];
    /**
     * Suspend template subtype which can suspend a workflow when reaching the step
     */
    suspend?: SuspendTemplate;
    /**
     * Synchronization holds synchronization lock configuration for this template
     */
    synchronization?: Synchronization;
    /**
     * Timout allows to set the total node execution timeout duration counting from the node's start time. This duration also includes time in which the node spends in Pending state. This duration may not be applied to Step or DAG templates.
     */
    timeout?: string;
    /**
     * Tolerations to apply to workflow pods.
     */
    tolerations?: k8s.Toleration[];
    /**
     * Volumes is a list of volumes that can be mounted by containers in a template.
     */
    volumes?: k8s.Volume[];
}
/**
 * TemplateRef is a reference of template resource.
 */
export interface TemplateRef {
    /**
     * ClusterScope indicates the referred template is cluster scoped (i.e. a ClusterWorkflowTemplate).
     */
    clusterScope?: boolean;
    /**
     * Name is the resource name of the template.
     */
    name?: string;
    /**
     * Template is the name of referred template in the resource.
     */
    template?: string;
}
export interface TransformationStep {
    /**
     * Expression defines an expr expression to apply
     */
    expression: string;
}
export interface UpdateCronWorkflowRequest {
    cronWorkflow?: CronWorkflow;
    /**
     * DEPRECATED: This field is ignored.
     */
    name?: string;
    namespace?: string;
}
/**
 * UserContainer is a container specified by a user.
 */
export interface UserContainer {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    command?: string[];
    /**
     * List of environment variables to set in the container. Cannot be updated.
     */
    env?: k8s.EnvVar[];
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     */
    envFrom?: k8s.EnvFromSource[];
    /**
     * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
     */
    image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     */
    imagePullPolicy?: string;
    /**
     * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
     */
    lifecycle?: k8s.Lifecycle;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    livenessProbe?: k8s.Probe;
    /**
     * MirrorVolumeMounts will mount the same volumes specified in the main container to the container (including artifacts), at the same mountPaths. This enables dind daemon to partially see the same filesystem as the main container in order to use features such as docker volume binding
     */
    mirrorVolumeMounts?: boolean;
    /**
     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
     */
    name: string;
    /**
     * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
     */
    ports?: k8s.ContainerPort[];
    /**
     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    readinessProbe?: k8s.Probe;
    /**
     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     */
    resources?: k8s.ResourceRequirements;
    /**
     * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     */
    securityContext?: k8s.SecurityContext;
    /**
     * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. This is a beta feature enabled by the StartupProbe feature flag. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    startupProbe?: k8s.Probe;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     */
    stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     */
    stdinOnce?: boolean;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     */
    terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     */
    tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container.
     */
    volumeDevices?: k8s.VolumeDevice[];
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated.
     */
    volumeMounts?: k8s.VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     */
    workingDir?: string;
}
/**
 * ValueFrom describes a location in which to obtain the value to a parameter
 */
export interface ValueFrom {
    /**
     * Default specifies a value to be used if retrieving the value from the specified source fails
     */
    default?: string;
    /**
     * Selector (https://github.com/antonmedv/expr) that is evaluated against the event to get the value of the parameter. E.g. `payload.message`
     */
    event?: string;
    /**
     * Expression, if defined, is evaluated to specify the value for the parameter
     */
    expression?: string;
    /**
     * JQFilter expression against the resource object in resource templates
     */
    jqFilter?: string;
    /**
     * JSONPath of a resource to retrieve an output parameter value from in resource templates
     */
    jsonPath?: string;
    /**
     * Parameter reference to a step or dag task in which to retrieve an output parameter value from (e.g. '{{steps.mystep.outputs.myparam}}')
     */
    parameter?: string;
    /**
     * Path in the container to retrieve an output parameter value from in container templates
     */
    path?: string;
    /**
     * Supplied value to be filled in directly, either through the CLI, API, etc.
     */
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
/**
 * VolumeClaimGC describes how to delete volumes from completed Workflows
 */
export interface VolumeClaimGC {
    /**
     * Strategy is the strategy to use. One of "OnWorkflowCompletion", "OnWorkflowSuccess"
     */
    strategy?: string;
}
/**
 * Workflow is the definition of a workflow resource
 */
export interface Workflow {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: WorkflowSpec;
    status?: WorkflowStatus;
}
export interface WorkflowCreateRequest {
    createOptions?: k8s.CreateOptions;
    /**
     * This field is no longer used.
     */
    instanceID?: string;
    namespace?: string;
    serverDryRun?: boolean;
    workflow?: Workflow;
}
export interface WorkflowDeleteResponse {
}
/**
 * WorkflowEventBinding is the definition of an event resource
 */
export interface WorkflowEventBinding {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ObjectMeta;
    spec: WorkflowEventBindingSpec;
}
/**
 * WorkflowEventBindingList is list of event resources
 */
export interface WorkflowEventBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    items: WorkflowEventBinding[];
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ListMeta;
}
export interface WorkflowEventBindingSpec {
    /**
     * Event is the event to bind to
     */
    event: Event;
    /**
     * Submit is the workflow template to submit
     */
    submit?: Submit;
}
export interface WorkflowLintRequest {
    namespace?: string;
    workflow?: Workflow;
}
/**
 * WorkflowList is list of Workflow resources
 */
export interface WorkflowList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    items: Workflow[];
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
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
/**
 * WorkflowSpec is the specification of a Workflow.
 */
export interface WorkflowSpec {
    /**
     * Optional duration in seconds relative to the workflow start time which the workflow is allowed to run before the controller terminates the io.argoproj.workflow.v1alpha1. A value of zero is used to terminate a Running workflow
     */
    activeDeadlineSeconds?: number;
    /**
     * Affinity sets the scheduling constraints for all pods in the io.argoproj.workflow.v1alpha1. Can be overridden by an affinity specified in the template
     */
    affinity?: k8s.Affinity;
    /**
     * Arguments contain the parameters and artifacts sent to the workflow entrypoint Parameters are referencable globally using the 'workflow' variable prefix. e.g. {{io.argoproj.workflow.v1alpha1.parameters.myparam}}
     */
    arguments?: Arguments;
    /**
     * ArtifactRepositoryRef specifies the configMap name and key containing the artifact repository config.
     */
    artifactRepositoryRef?: ArtifactRepositoryRef;
    /**
     * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.
     */
    automountServiceAccountToken?: boolean;
    /**
     * PodDnsConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
     */
    dnsConfig?: k8s.PodDnsConfig;
    /**
     * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
     */
    dnsPolicy?: string;
    /**
     * Entrypoint is a template reference to the starting point of the io.argoproj.workflow.v1alpha1.
     */
    entrypoint?: string;
    /**
     * Executor holds configurations of executor containers of the io.argoproj.workflow.v1alpha1.
     */
    executor?: ExecutorConfig;
    hostAliases?: k8s.HostAlias[];
    /**
     * Host networking requested for this workflow pod. Default to false.
     */
    hostNetwork?: boolean;
    /**
     * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
     */
    imagePullSecrets?: k8s.LocalObjectReference[];
    /**
     * Metrics are a list of metrics emitted from this Workflow
     */
    metrics?: Metrics;
    /**
     * NodeSelector is a selector which will result in all pods of the workflow to be scheduled on the selected node(s). This is able to be overridden by a nodeSelector specified in the template.
     */
    nodeSelector?: {
        [name: string]: string;
    };
    /**
     * OnExit is a template reference which is invoked at the end of the workflow, irrespective of the success, failure, or error of the primary io.argoproj.workflow.v1alpha1.
     */
    onExit?: string;
    /**
     * Parallelism limits the max total parallel pods that can execute at the same time in a workflow
     */
    parallelism?: number;
    /**
     * PodDisruptionBudget holds the number of concurrent disruptions that you allow for Workflow's Pods. Controller will automatically add the selector with workflow name, if selector is empty. Optional: Defaults to empty.
     */
    podDisruptionBudget?: k8s.PodDisruptionBudgetSpec;
    /**
     * PodGC describes the strategy to use when to deleting completed pods
     */
    podGC?: PodGC;
    /**
     * PodMetadata defines additional metadata that should be applied to workflow pods
     */
    podMetadata?: Metadata;
    /**
     * Priority to apply to workflow pods.
     */
    podPriority?: number;
    /**
     * PriorityClassName to apply to workflow pods.
     */
    podPriorityClassName?: string;
    /**
     * PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).
     */
    podSpecPatch?: string;
    /**
     * Priority is used if controller is configured to process limited number of workflows in parallel. Workflows with higher priority are processed first.
     */
    priority?: number;
    /**
     * RetryStrategy for all templates in the io.argoproj.workflow.v1alpha1.
     */
    retryStrategy?: RetryStrategy;
    /**
     * Set scheduler name for all pods. Will be overridden if container/script template's scheduler name is set. Default scheduler will be used if neither specified.
     */
    schedulerName?: string;
    /**
     * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
     */
    securityContext?: k8s.PodSecurityContext;
    /**
     * ServiceAccountName is the name of the ServiceAccount to run all pods of the workflow as.
     */
    serviceAccountName?: string;
    /**
     * Shutdown will shutdown the workflow according to its ShutdownStrategy
     */
    shutdown?: string;
    /**
     * Suspend will suspend the workflow and prevent execution of any future steps in the workflow
     */
    suspend?: boolean;
    /**
     * Synchronization holds synchronization lock configuration for this Workflow
     */
    synchronization?: Synchronization;
    /**
     * TemplateDefaults holds default template values that will apply to all templates in the Workflow, unless overridden on the template-level
     */
    templateDefaults?: Template;
    /**
     * Templates is a list of workflow templates used in a workflow
     */
    templates?: Template[];
    /**
     * Tolerations to apply to workflow pods.
     */
    tolerations?: k8s.Toleration[];
    /**
     * TTLStrategy limits the lifetime of a Workflow that has finished execution depending on if it Succeeded or Failed. If this struct is set, once the Workflow finishes, it will be deleted after the time to live expires. If this field is unset, the controller config map will hold the default values.
     */
    ttlStrategy?: TTLStrategy;
    /**
     * VolumeClaimGC describes the strategy to use when to deleting volumes from completed workflows
     */
    volumeClaimGC?: VolumeClaimGC;
    /**
     * VolumeClaimTemplates is a list of claims that containers are allowed to reference. The Workflow controller will create the claims at the beginning of the workflow and delete the claims upon completion of the workflow
     */
    volumeClaimTemplates?: k8s.PersistentVolumeClaimSpec[];
    /**
     * Volumes is a list of volumes that can be mounted by containers in a io.argoproj.workflow.v1alpha1.
     */
    volumes?: k8s.Volume[];
    /**
     * WorkflowTemplateRef holds a reference to a WorkflowTemplate for execution
     */
    workflowTemplateRef?: WorkflowTemplateRef;
}
/**
 * WorkflowStatus contains overall status information about a workflow
 */
export interface WorkflowStatus {
    /**
     * ArtifactRepositoryRef is used to cache the repository to use so we do not need to determine it everytime we reconcile.
     */
    artifactRepositoryRef?: ArtifactRepositoryRefStatus;
    /**
     * Compressed and base64 decoded Nodes map
     */
    compressedNodes?: string;
    /**
     * Conditions is a list of conditions the Workflow may have
     */
    conditions?: Condition[];
    /**
     * EstimatedDuration in seconds.
     */
    estimatedDuration?: number;
    /**
     * Time at which this workflow completed
     */
    finishedAt?: Date; // date-time
    /**
     * A human readable message indicating details about why the workflow is in this condition.
     */
    message?: string;
    /**
     * Nodes is a mapping between a node ID and the node's status.
     */
    nodes?: {
        [name: string]: NodeStatus;
    };
    /**
     * Whether on not node status has been offloaded to a database. If exists, then Nodes and CompressedNodes will be empty. This will actually be populated with a hash of the offloaded data.
     */
    offloadNodeStatusVersion?: string;
    /**
     * Outputs captures output values and artifact locations produced by the workflow via global outputs
     */
    outputs?: Outputs;
    /**
     * PersistentVolumeClaimSpecs tracks all PVCs that were created as part of the io.argoproj.workflow.v1alpha1. The contents of this list are drained at the end of the workflow.
     */
    PersistentVolumeClaimSpecs?: k8s.Volume[];
    /**
     * Phase a simple, high-level summary of where the workflow is in its lifecycle.
     */
    phase?: string;
    /**
     * Progress to completion
     */
    progress?: string;
    /**
     * ResourcesDuration is the total for the workflow
     */
    resourcesDuration?: {
        [name: string]: number; // int64
    };
    /**
     * Time at which this workflow started
     */
    startedAt?: Date; // date-time
    /**
     * StoredTemplates is a mapping between a template ref and the node's status.
     */
    storedTemplates?: {
        [name: string]: Template;
    };
    /**
     * StoredWorkflowSpec stores the WorkflowTemplate spec for future execution.
     */
    storedWorkflowTemplateSpec?: WorkflowSpec;
    /**
     * Synchronization stores the status of synchronization locks
     */
    synchronization?: SynchronizationStatus;
}
/**
 * WorkflowStep is a reference to a template to execute in a series of step
 */
export interface WorkflowStep {
    /**
     * Arguments hold arguments to the template
     */
    arguments?: Arguments;
    /**
     * ContinueOn makes argo to proceed with the following step even if this step fails. Errors and Failed states can be specified
     */
    continueOn?: ContinueOn;
    /**
     * Name of the step
     */
    name?: string;
    /**
     * OnExit is a template reference which is invoked at the end of the template, irrespective of the success, failure, or error of the primary template.
     */
    onExit?: string;
    /**
     * Template is the name of the template to execute as the step
     */
    template?: string;
    /**
     * TemplateRef is the reference to the template resource to execute as the step.
     */
    templateRef?: TemplateRef;
    /**
     * When is an expression in which the step should conditionally execute
     */
    when?: string;
    /**
     * WithItems expands a step into multiple parallel steps from the items in the list
     */
    withItems?: Item[];
    /**
     * WithParam expands a step into multiple parallel steps from the value in the parameter, which is expected to be a JSON list.
     */
    withParam?: string;
    /**
     * WithSequence expands a step into a numeric sequence
     */
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
/**
 * WorkflowTemplate is the definition of a workflow template resource
 */
export interface WorkflowTemplate {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
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
/**
 * WorkflowTemplateList is list of WorkflowTemplate resources
 */
export interface WorkflowTemplateList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string;
    items: WorkflowTemplate[];
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    metadata: k8s.ListMeta;
}
/**
 * WorkflowTemplateRef is a reference to a WorkflowTemplate resource.
 */
export interface WorkflowTemplateRef {
    /**
     * ClusterScope indicates the referred template is cluster scoped (i.e. a ClusterWorkflowTemplate).
     */
    clusterScope?: boolean;
    /**
     * Name is the resource name of the workflow template.
     */
    name?: string;
}
/**
 * WorkflowTemplateSpec is a spec of WorkflowTemplate.
 */
export interface WorkflowTemplateSpec {
    /**
     * Optional duration in seconds relative to the workflow start time which the workflow is allowed to run before the controller terminates the io.argoproj.workflow.v1alpha1. A value of zero is used to terminate a Running workflow
     */
    activeDeadlineSeconds?: number;
    /**
     * Affinity sets the scheduling constraints for all pods in the io.argoproj.workflow.v1alpha1. Can be overridden by an affinity specified in the template
     */
    affinity?: k8s.Affinity;
    /**
     * Arguments contain the parameters and artifacts sent to the workflow entrypoint Parameters are referencable globally using the 'workflow' variable prefix. e.g. {{io.argoproj.workflow.v1alpha1.parameters.myparam}}
     */
    arguments?: Arguments;
    /**
     * ArtifactRepositoryRef specifies the configMap name and key containing the artifact repository config.
     */
    artifactRepositoryRef?: ArtifactRepositoryRef;
    /**
     * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.
     */
    automountServiceAccountToken?: boolean;
    /**
     * PodDnsConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
     */
    dnsConfig?: k8s.PodDnsConfig;
    /**
     * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
     */
    dnsPolicy?: string;
    /**
     * Entrypoint is a template reference to the starting point of the io.argoproj.workflow.v1alpha1.
     */
    entrypoint?: string;
    /**
     * Executor holds configurations of executor containers of the io.argoproj.workflow.v1alpha1.
     */
    executor?: ExecutorConfig;
    hostAliases?: k8s.HostAlias[];
    /**
     * Host networking requested for this workflow pod. Default to false.
     */
    hostNetwork?: boolean;
    /**
     * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
     */
    imagePullSecrets?: k8s.LocalObjectReference[];
    /**
     * Metrics are a list of metrics emitted from this Workflow
     */
    metrics?: Metrics;
    /**
     * NodeSelector is a selector which will result in all pods of the workflow to be scheduled on the selected node(s). This is able to be overridden by a nodeSelector specified in the template.
     */
    nodeSelector?: {
        [name: string]: string;
    };
    /**
     * OnExit is a template reference which is invoked at the end of the workflow, irrespective of the success, failure, or error of the primary io.argoproj.workflow.v1alpha1.
     */
    onExit?: string;
    /**
     * Parallelism limits the max total parallel pods that can execute at the same time in a workflow
     */
    parallelism?: number;
    /**
     * PodDisruptionBudget holds the number of concurrent disruptions that you allow for Workflow's Pods. Controller will automatically add the selector with workflow name, if selector is empty. Optional: Defaults to empty.
     */
    podDisruptionBudget?: k8s.PodDisruptionBudgetSpec;
    /**
     * PodGC describes the strategy to use when to deleting completed pods
     */
    podGC?: PodGC;
    /**
     * PodMetadata defines additional metadata that should be applied to workflow pods
     */
    podMetadata?: Metadata;
    /**
     * Priority to apply to workflow pods.
     */
    podPriority?: number;
    /**
     * PriorityClassName to apply to workflow pods.
     */
    podPriorityClassName?: string;
    /**
     * PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).
     */
    podSpecPatch?: string;
    /**
     * Priority is used if controller is configured to process limited number of workflows in parallel. Workflows with higher priority are processed first.
     */
    priority?: number;
    /**
     * RetryStrategy for all templates in the io.argoproj.workflow.v1alpha1.
     */
    retryStrategy?: RetryStrategy;
    /**
     * Set scheduler name for all pods. Will be overridden if container/script template's scheduler name is set. Default scheduler will be used if neither specified.
     */
    schedulerName?: string;
    /**
     * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
     */
    securityContext?: k8s.PodSecurityContext;
    /**
     * ServiceAccountName is the name of the ServiceAccount to run all pods of the workflow as.
     */
    serviceAccountName?: string;
    /**
     * Shutdown will shutdown the workflow according to its ShutdownStrategy
     */
    shutdown?: string;
    /**
     * Suspend will suspend the workflow and prevent execution of any future steps in the workflow
     */
    suspend?: boolean;
    /**
     * Synchronization holds synchronization lock configuration for this Workflow
     */
    synchronization?: Synchronization;
    /**
     * TemplateDefaults holds default template values that will apply to all templates in the Workflow, unless overridden on the template-level
     */
    templateDefaults?: Template;
    /**
     * Templates is a list of workflow templates used in a workflow
     */
    templates?: Template[];
    /**
     * Tolerations to apply to workflow pods.
     */
    tolerations?: k8s.Toleration[];
    /**
     * TTLStrategy limits the lifetime of a Workflow that has finished execution depending on if it Succeeded or Failed. If this struct is set, once the Workflow finishes, it will be deleted after the time to live expires. If this field is unset, the controller config map will hold the default values.
     */
    ttlStrategy?: TTLStrategy;
    /**
     * VolumeClaimGC describes the strategy to use when to deleting volumes from completed workflows
     */
    volumeClaimGC?: VolumeClaimGC;
    /**
     * VolumeClaimTemplates is a list of claims that containers are allowed to reference. The Workflow controller will create the claims at the beginning of the workflow and delete the claims upon completion of the workflow
     */
    volumeClaimTemplates?: k8s.PersistentVolumeClaimSpec[];
    /**
     * Volumes is a list of volumes that can be mounted by containers in a io.argoproj.workflow.v1alpha1.
     */
    volumes?: k8s.Volume[];
    /**
     * WorkflowMetadata contains some metadata of the workflow to be refer
     */
    workflowMetadata?: k8s.ObjectMeta;
    /**
     * WorkflowTemplateRef holds a reference to a WorkflowTemplate for execution
     */
    workflowTemplateRef?: WorkflowTemplateRef;
}
export interface WorkflowTemplateUpdateRequest {
    /**
     * DEPRECATED: This field is ignored.
     */
    name?: string;
    namespace?: string;
    template?: WorkflowTemplate;
}
export interface WorkflowTerminateRequest {
    name?: string;
    namespace?: string;
}
export interface WorkflowWatchEvent {
    /**
     * the workflow
     */
    object?: Workflow;
    /**
     * the type of change
     */
    type?: string;
}
/**
 * ZipStrategy will unzip zipped input artifacts
 */
export interface ZipStrategy {
}
/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
