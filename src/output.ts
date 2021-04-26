import * as k8s from './imports/k8s';

export interface EventsourceCreateEventSourceRequest {
    eventSource?: IoArgoprojEventsV1alpha1EventSource;
    namespace?: string;
}
export interface EventsourceEventSourceDeletedResponse {
}
export interface EventsourceEventSourceWatchEvent {
    object?: IoArgoprojEventsV1alpha1EventSource;
    type?: string;
}
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
    time?: k8s.Time; // date-time
}
export interface EventsourceUpdateEventSourceRequest {
    eventSource?: IoArgoprojEventsV1alpha1EventSource;
    name?: string;
    namespace?: string;
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
 * AMQPEventSource refers to an event-source for AMQP stream events
 */
export interface IoArgoprojEventsV1alpha1AMQPEventSource {
    /**
     * Backoff holds parameters applied to connection.
     * +optional
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * ExchangeName is the exchange name
     * For more information, visit https://www.rabbitmq.com/tutorials/amqp-concepts.html
     */
    exchangeName?: string;
    /**
     * ExchangeType is rabbitmq exchange type
     */
    exchangeType?: string;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Routing key for bindings
     */
    routingKey?: string;
    /**
     * TLS configuration for the amqp client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * URL for rabbitmq service
     */
    url?: string;
}
/**
 * AWSLambdaTrigger refers to specification of the trigger to invoke an AWS Lambda function
 */
export interface IoArgoprojEventsV1alpha1AWSLambdaTrigger {
    /**
     * AccessKey refers K8 secret containing aws access key
     */
    accessKey?: k8s.SecretKeySelector;
    /**
     * FunctionName refers to the name of the function to invoke.
     */
    functionName?: string;
    /**
     * +optional
     */
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    payload?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Region is AWS region
     */
    region?: string;
    /**
     * SecretKey refers K8 secret containing aws secret key
     */
    secretKey?: k8s.SecretKeySelector;
}
/**
 * Amount represent a numeric amount.
 */
export interface IoArgoprojEventsV1alpha1Amount {
    value?: string; // byte
}
/**
 * ArgoWorkflowTrigger is the trigger for the Argo Workflow
 */
export interface IoArgoprojEventsV1alpha1ArgoWorkflowTrigger {
    /**
     * The unambiguous kind of this object - used in order to retrieve the appropriate kubernetes api client for this resource
     */
    groupVersionResource?: k8s.GroupVersionResource;
    /**
     * Operation refers to the type of operation performed on the argo workflow resource.
     * Default value is Submit.
     * +optional
     */
    operation?: string;
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Source of the K8 resource file(s)
     */
    source?: IoArgoprojEventsV1alpha1ArtifactLocation;
}
/**
 * ArtifactLocation describes the source location for an external artifact
 */
export interface IoArgoprojEventsV1alpha1ArtifactLocation {
    /**
     * Configmap that stores the artifact
     */
    configmap?: k8s.ConfigMapKeySelector;
    /**
     * File artifact is artifact stored in a file
     */
    file?: IoArgoprojEventsV1alpha1FileArtifact;
    /**
     * Git repository hosting the artifact
     */
    git?: IoArgoprojEventsV1alpha1GitArtifact;
    /**
     * Inline artifact is embedded in sensor spec as a string
     */
    inline?: string;
    /**
     * Resource is generic template for K8s resource
     */
    resource?: IoArgoprojEventsV1alpha1Resource;
    /**
     * S3 compliant artifact
     */
    s3?: IoArgoprojEventsV1alpha1S3Artifact;
    /**
     * URL to fetch the artifact from
     */
    url?: IoArgoprojEventsV1alpha1URLArtifact;
}
/**
 * AzureEventsHubEventSource describes the event source for azure events hub
 * More info at https://docs.microsoft.com/en-us/azure/event-hubs/
 */
export interface IoArgoprojEventsV1alpha1AzureEventsHubEventSource {
    /**
     * FQDN of the EventHubs namespace you created
     * More info at https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string
     */
    fqdn?: string;
    /**
     * Event Hub path/name
     */
    hubName?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * SharedAccessKey is the generated value of the key
     */
    sharedAccessKey?: k8s.SecretKeySelector;
    /**
     * SharedAccessKeyName is the name you chose for your application's SAS keys
     */
    sharedAccessKeyName?: k8s.SecretKeySelector;
}
/**
 * Backoff for an operation
 */
export interface IoArgoprojEventsV1alpha1Backoff {
    /**
     * Duration is the duration in nanoseconds
     */
    duration?: string;
    /**
     * Duration is multiplied by factor each iteration
     */
    factor?: IoArgoprojEventsV1alpha1Amount;
    /**
     * The amount of jitter applied each iteration
     */
    jitter?: IoArgoprojEventsV1alpha1Amount;
    /**
     * Exit with error after this many steps
     */
    steps?: number;
}
/**
 * BasicAuth contains the reference to K8s secrets that holds the username and password
 */
export interface IoArgoprojEventsV1alpha1BasicAuth {
    /**
     * Password refers to the Kubernetes secret that holds the password required for basic auth.
     */
    password?: k8s.SecretKeySelector;
    /**
     * Username refers to the Kubernetes secret that holds the username required for basic auth.
     */
    username?: k8s.SecretKeySelector;
}
/**
 * CalendarEventSource describes a time based dependency. One of the fields (schedule, interval, or recurrence) must be passed.
 * Schedule takes precedence over interval; interval takes precedence over recurrence
 */
export interface IoArgoprojEventsV1alpha1CalendarEventSource {
    exclusionDates?: string[];
    /**
     * Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h...
     */
    interval?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Persistence hold the configuration for event persistence
     */
    persistence?: IoArgoprojEventsV1alpha1EventPersistence;
    /**
     * Schedule is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron
     */
    schedule?: string;
    /**
     * Timezone in which to run the schedule
     * +optional
     */
    timezone?: string;
    /**
     * UserPayload will be sent to sensor as extra data once the event is triggered
     * +optional
     * Deprecated. Please use Metadata instead.
     */
    userPayload?: string; // byte
}
export interface IoArgoprojEventsV1alpha1CatchupConfiguration {
    /**
     * Enabled enables to triggered the missed schedule when eventsource restarts
     */
    enabled?: boolean;
    /**
     * MaxDuration holds max catchup duration
     */
    maxDuration?: string;
}
/**
 * Condition contains details about resource state
 */
export interface IoArgoprojEventsV1alpha1Condition {
    /**
     * Last time the condition transitioned from one status to another.
     * +optional
     */
    lastTransitionTime?: k8s.Time; // date-time
    /**
     * Human-readable message indicating details about last transition.
     * +optional
     */
    message?: string;
    /**
     * Unique, this should be a short, machine understandable string that gives the reason
     * for condition's last transition. For example, "ImageNotFound"
     * +optional
     */
    reason?: string;
    /**
     * Condition status, True, False or Unknown.
     * +required
     */
    status?: string;
    /**
     * Condition type.
     * +required
     */
    type?: string;
}
export interface IoArgoprojEventsV1alpha1ConfigMapPersistence {
    /**
     * CreateIfNotExist will create configmap if it doesn't exists
     */
    createIfNotExist?: boolean;
    /**
     * Name of the configmap
     */
    name?: string;
}
/**
 * CustomTrigger refers to the specification of the custom trigger.
 */
export interface IoArgoprojEventsV1alpha1CustomTrigger {
    /**
     * DeprecatedCertFilePath is path to the cert file within sensor for secure connection between sensor and custom trigger gRPC server.
     * DEPRECATED: use CertSecret instead
     */
    certFilePath?: string;
    /**
     * CertSecret refers to the secret that contains cert for secure connection between sensor and custom trigger gRPC server.
     */
    certSecret?: k8s.SecretKeySelector;
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    payload?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Secure refers to type of the connection between sensor to custom trigger gRPC
     */
    secure?: boolean;
    /**
     * ServerNameOverride for the secure connection between sensor and custom trigger gRPC server.
     */
    serverNameOverride?: string;
    /**
     * ServerURL is the url of the gRPC server that executes custom trigger
     */
    serverURL?: string;
    /**
     * Spec is the custom trigger resource specification that custom trigger gRPC server knows how to interpret.
     */
    spec?: {
        [name: string]: string;
    };
}
/**
 * DataFilter describes constraints and filters for event data
 * Regular Expressions are purposefully not a feature as they are overkill for our uses here
 * See Rob Pike's Post: https://commandcenter.blogspot.com/2011/08/regular-expressions-in-lexing-and.html
 */
export interface IoArgoprojEventsV1alpha1DataFilter {
    /**
     * Comparator compares the event data with a user given value.
     * Can be ">=", ">", "=", "!=", "<", or "<=".
     * Is optional, and if left blank treated as equality "=".
     */
    comparator?: string;
    /**
     * Path is the JSONPath of the event's (JSON decoded) data key
     * Path is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.
     * To access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\'.
     * See https://github.com/tidwall/gjson#path-syntax for more information on how to use this.
     */
    path?: string;
    /**
     * Type contains the JSON type of the data
     */
    type?: string;
    /**
     * Value is the allowed string values for this key
     * Booleans are passed using strconv.ParseBool()
     * Numbers are parsed using as float64 using strconv.ParseFloat()
     * Strings are taken as is
     * Nils this value is ignored
     */
    value?: string[];
}
/**
 * DependencyGroup is the group of dependencies
 */
export interface IoArgoprojEventsV1alpha1DependencyGroup {
    /**
     * Dependencies of events
     */
    dependencies?: string[];
    /**
     * Name of the group
     */
    name?: string;
}
/**
 * EmitterEventSource describes the event source for emitter
 * More info at https://emitter.io/develop/getting-started/
 */
export interface IoArgoprojEventsV1alpha1EmitterEventSource {
    /**
     * Broker URI to connect to.
     */
    broker?: string;
    /**
     * ChannelKey refers to the channel key
     */
    channelKey?: string;
    /**
     * ChannelName refers to the channel name
     */
    channelName?: string;
    /**
     * Backoff holds parameters applied to connection.
     * +optional
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Password to use to connect to broker
     * +optional
     */
    password?: k8s.SecretKeySelector;
    /**
     * TLS configuration for the emitter client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * Username to use to connect to broker
     * +optional
     */
    username?: k8s.SecretKeySelector;
}
/**
 * EventContext holds the context of the cloudevent received from an event source.
 * +protobuf.options.(gogoproto.goproto_stringer)=false
 */
export interface IoArgoprojEventsV1alpha1EventContext {
    /**
     * DataContentType - A MIME (RFC2046) string describing the media type of `data`.
     */
    datacontenttype?: string;
    /**
     * ID of the event; must be non-empty and unique within the scope of the producer.
     */
    id?: string;
    /**
     * Source - A URI describing the event producer.
     */
    source?: string;
    /**
     * SpecVersion - The version of the CloudEvents specification used by the io.argoproj.workflow.v1alpha1.
     */
    specversion?: string;
    /**
     * Subject - The subject of the event in the context of the event producer
     */
    subject?: string;
    /**
     * Time - A Timestamp when the event happened.
     */
    time?: k8s.Time; // date-time
    /**
     * Type - The type of the occurrence which has happened.
     */
    type?: string;
}
/**
 * EventDependency describes a dependency
 */
export interface IoArgoprojEventsV1alpha1EventDependency {
    /**
     * EventName is the name of the event
     */
    eventName?: string;
    /**
     * EventSourceName is the name of EventSource that Sensor depends on
     */
    eventSourceName?: string;
    /**
     * Filters and rules governing toleration of success and constraints on the context and data of an event
     */
    filters?: IoArgoprojEventsV1alpha1EventDependencyFilter;
    /**
     * Name is a unique name of this dependency
     */
    name?: string;
}
/**
 * EventDependencyFilter defines filters and constraints for a io.argoproj.workflow.v1alpha1.
 */
export interface IoArgoprojEventsV1alpha1EventDependencyFilter {
    /**
     * Context filter constraints
     */
    context?: IoArgoprojEventsV1alpha1EventContext;
    /**
     * Data filter constraints with escalation
     */
    data?: IoArgoprojEventsV1alpha1DataFilter[];
    /**
     * Time filter on the event with escalation
     */
    time?: IoArgoprojEventsV1alpha1TimeFilter;
}
export interface IoArgoprojEventsV1alpha1EventPersistence {
    /**
     * Catchup enables to triggered the missed schedule when eventsource restarts
     */
    catchup?: IoArgoprojEventsV1alpha1CatchupConfiguration;
    /**
     * ConfigMap holds configmap details for persistence
     */
    configMap?: IoArgoprojEventsV1alpha1ConfigMapPersistence;
}
/**
 * EventSource is the definition of a eventsource resource
 * +genclient
 * +kubebuilder:resource:shortName=es
 * +k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object
 * +k8s:openapi-gen=true
 */
export interface IoArgoprojEventsV1alpha1EventSource {
    metadata?: k8s.ObjectMeta;
    spec?: IoArgoprojEventsV1alpha1EventSourceSpec;
    status?: IoArgoprojEventsV1alpha1EventSourceStatus;
}
/**
 * EventSourceList is the list of eventsource resources
 * +k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object
 */
export interface IoArgoprojEventsV1alpha1EventSourceList {
    items?: IoArgoprojEventsV1alpha1EventSource[];
    metadata?: k8s.ListMeta;
}
/**
 * EventSourceSpec refers to specification of event-source resource
 */
export interface IoArgoprojEventsV1alpha1EventSourceSpec {
    /**
     * AMQP event sources
     */
    amqp?: {
        [name: string]: IoArgoprojEventsV1alpha1AMQPEventSource;
    };
    /**
     * AzureEventsHub event sources
     */
    azureEventsHub?: {
        [name: string]: IoArgoprojEventsV1alpha1AzureEventsHubEventSource;
    };
    /**
     * Calendar event sources
     */
    calendar?: {
        [name: string]: IoArgoprojEventsV1alpha1CalendarEventSource;
    };
    /**
     * Emitter event source
     */
    emitter?: {
        [name: string]: IoArgoprojEventsV1alpha1EmitterEventSource;
    };
    /**
     * EventBusName references to a EventBus name. By default the value is "default"
     */
    eventBusName?: string;
    /**
     * File event sources
     */
    file?: {
        [name: string]: IoArgoprojEventsV1alpha1FileEventSource;
    };
    /**
     * Generic event source
     */
    generic?: {
        [name: string]: IoArgoprojEventsV1alpha1GenericEventSource;
    };
    /**
     * Github event sources
     */
    github?: {
        [name: string]: IoArgoprojEventsV1alpha1GithubEventSource;
    };
    /**
     * Gitlab event sources
     */
    gitlab?: {
        [name: string]: IoArgoprojEventsV1alpha1GitlabEventSource;
    };
    /**
     * HDFS event sources
     */
    hdfs?: {
        [name: string]: IoArgoprojEventsV1alpha1HDFSEventSource;
    };
    /**
     * Kafka event sources
     */
    kafka?: {
        [name: string]: IoArgoprojEventsV1alpha1KafkaEventSource;
    };
    /**
     * Minio event sources
     */
    minio?: {
        [name: string]: IoArgoprojEventsV1alpha1S3Artifact;
    };
    /**
     * MQTT event sources
     */
    mqtt?: {
        [name: string]: IoArgoprojEventsV1alpha1MQTTEventSource;
    };
    /**
     * NATS event sources
     */
    nats?: {
        [name: string]: IoArgoprojEventsV1alpha1NATSEventsSource;
    };
    /**
     * NSQ event source
     */
    nsq?: {
        [name: string]: IoArgoprojEventsV1alpha1NSQEventSource;
    };
    /**
     * PubSub event sources
     */
    pubSub?: {
        [name: string]: IoArgoprojEventsV1alpha1PubSubEventSource;
    };
    /**
     * Pulsar event source
     */
    pulsar?: {
        [name: string]: IoArgoprojEventsV1alpha1PulsarEventSource;
    };
    /**
     * Redis event source
     */
    redis?: {
        [name: string]: IoArgoprojEventsV1alpha1RedisEventSource;
    };
    /**
     * Replica is the event source deployment replicas
     */
    replica?: number;
    /**
     * Resource event sources
     */
    resource?: {
        [name: string]: IoArgoprojEventsV1alpha1ResourceEventSource;
    };
    /**
     * Service is the specifications of the service to expose the event source
     * +optional
     */
    service?: IoArgoprojEventsV1alpha1Service;
    /**
     * Slack event sources
     */
    slack?: {
        [name: string]: IoArgoprojEventsV1alpha1SlackEventSource;
    };
    /**
     * SNS event sources
     */
    sns?: {
        [name: string]: IoArgoprojEventsV1alpha1SNSEventSource;
    };
    /**
     * SQS event sources
     */
    sqs?: {
        [name: string]: IoArgoprojEventsV1alpha1SQSEventSource;
    };
    /**
     * StorageGrid event sources
     */
    storageGrid?: {
        [name: string]: IoArgoprojEventsV1alpha1StorageGridEventSource;
    };
    /**
     * Stripe event sources
     */
    stripe?: {
        [name: string]: IoArgoprojEventsV1alpha1StripeEventSource;
    };
    /**
     * Template is the pod specification for the event source
     * +optional
     */
    template?: IoArgoprojEventsV1alpha1Template;
    /**
     * Webhook event sources
     */
    webhook?: {
        [name: string]: IoArgoprojEventsV1alpha1WebhookContext;
    };
}
/**
 * EventSourceStatus holds the status of the event-source resource
 */
export interface IoArgoprojEventsV1alpha1EventSourceStatus {
    status?: IoArgoprojEventsV1alpha1Status;
}
/**
 * FileArtifact contains information about an artifact in a filesystem
 */
export interface IoArgoprojEventsV1alpha1FileArtifact {
    path?: string;
}
/**
 * FileEventSource describes an event-source for file related events.
 */
export interface IoArgoprojEventsV1alpha1FileEventSource {
    /**
     * Type of file operations to watch
     * Refer https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information
     */
    eventType?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Use polling instead of inotify
     */
    polling?: boolean;
    /**
     * WatchPathConfig contains configuration about the file path to watch
     */
    watchPathConfig?: IoArgoprojEventsV1alpha1WatchPathConfig;
}
/**
 * GenericEventSource refers to a generic event source. It can be used to implement a custom event source.
 */
export interface IoArgoprojEventsV1alpha1GenericEventSource {
    /**
     * AuthSecret holds a secret selector that contains a bearer token for authentication
     * +optional
     */
    authSecret?: k8s.SecretKeySelector;
    /**
     * Config is the event source configuration
     */
    config?: string;
    /**
     * Insecure determines the type of connection.
     */
    insecure?: boolean;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * URL of the gRPC server that implements the event source.
     */
    url?: string;
}
/**
 * GitArtifact contains information about an artifact stored in git
 */
export interface IoArgoprojEventsV1alpha1GitArtifact {
    /**
     * Branch to use to pull trigger resource
     * +optional
     */
    branch?: string;
    /**
     * Directory to clone the repository. We clone complete directory because GitArtifact is not limited to any specific Git service providers.
     * Hence we don't use any specific git provider client.
     */
    cloneDirectory?: string;
    /**
     * Creds contain reference to git username and password
     * +optional
     */
    creds?: IoArgoprojEventsV1alpha1GitCreds;
    /**
     * Path to file that contains trigger resource definition
     */
    filePath?: string;
    /**
     * Ref to use to pull trigger resource. Will result in a shallow clone and
     * fetch.
     * +optional
     */
    ref?: string;
    /**
     * Remote to manage set of tracked repositories. Defaults to "origin".
     * Refer https://git-scm.com/docs/git-remote
     * +optional
     */
    remote?: IoArgoprojEventsV1alpha1GitRemoteConfig;
    /**
     * DeprecatedSSHKeyPath is path to your ssh key path. Use this if you don't want to provide username and password.
     * ssh key path must be mounted in sensor pod.
     * DEPRECATED: use SSHKeySecret instead.
     * +optional
     */
    sshKeyPath?: string;
    /**
     * SSHKeySecret refers to the secret that contains SSH key
     */
    sshKeySecret?: k8s.SecretKeySelector;
    /**
     * Tag to use to pull trigger resource
     * +optional
     */
    tag?: string;
    /**
     * Git URL
     */
    url?: string;
}
/**
 * GitCreds contain reference to git username and password
 */
export interface IoArgoprojEventsV1alpha1GitCreds {
    password?: k8s.SecretKeySelector;
    username?: k8s.SecretKeySelector;
}
/**
 * GitRemoteConfig contains the configuration of a Git remote
 */
export interface IoArgoprojEventsV1alpha1GitRemoteConfig {
    /**
     * Name of the remote to fetch from.
     */
    name?: string;
    /**
     * URLs the URLs of a remote repository. It must be non-empty. Fetch will
     * always use the first URL, while push will use all of them.
     */
    urls?: string[];
}
/**
 * GithubEventSource refers to event-source for github related events
 */
export interface IoArgoprojEventsV1alpha1GithubEventSource {
    /**
     * Active refers to status of the webhook for event deliveries.
     * https://developer.github.com/webhooks/creating/#active
     * +optional
     */
    active?: boolean;
    /**
     * APIToken refers to a K8s secret containing github api token
     * +optional
     */
    apiToken?: k8s.SecretKeySelector;
    /**
     * ContentType of the event delivery
     */
    contentType?: string;
    /**
     * DeleteHookOnFinish determines whether to delete the GitHub hook for the repository once the event source is stopped.
     * +optional
     */
    deleteHookOnFinish?: boolean;
    events?: string[];
    /**
     * GitHub base URL (for GitHub Enterprise)
     * +optional
     */
    githubBaseURL?: string;
    /**
     * GitHub upload URL (for GitHub Enterprise)
     * +optional
     */
    githubUploadURL?: string;
    /**
     * Id is the webhook's id
     */
    id?: string;
    /**
     * Insecure tls verification
     */
    insecure?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Owner refers to GitHub owner name i.e. argoproj
     */
    owner?: string;
    /**
     * Repository refers to GitHub repo name i.e. argo-events
     */
    repository?: string;
    /**
     * Webhook refers to the configuration required to run a http server
     */
    webhook?: IoArgoprojEventsV1alpha1WebhookContext;
    /**
     * WebhookSecret refers to K8s secret containing GitHub webhook secret
     * https://developer.github.com/webhooks/securing/
     * +optional
     */
    webhookSecret?: k8s.SecretKeySelector;
}
/**
 * GitlabEventSource refers to event-source related to Gitlab events
 */
export interface IoArgoprojEventsV1alpha1GitlabEventSource {
    /**
     * AccessToken is reference to k8 secret which holds the gitlab api access information
     */
    accessToken?: k8s.SecretKeySelector;
    /**
     * DeleteHookOnFinish determines whether to delete the GitLab hook for the project once the event source is stopped.
     * +optional
     */
    deleteHookOnFinish?: boolean;
    /**
     * EnableSSLVerification to enable ssl verification
     * +optional
     */
    enableSSLVerification?: boolean;
    /**
     * Events are gitlab event to listen to.
     * Refer https://github.com/xanzy/go-gitlab/blob/bf34eca5d13a9f4c3f501d8a97b8ac226d55e4d9/projects.go#L794.
     */
    events?: string[];
    /**
     * GitlabBaseURL is the base URL for API requests to a custom endpoint
     */
    gitlabBaseURL?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * ProjectID is the id of project for which integration needs to setup
     */
    projectID?: string;
    /**
     * Webhook holds configuration to run a http server
     */
    webhook?: IoArgoprojEventsV1alpha1WebhookContext;
}
/**
 * HDFSEventSource refers to event-source for HDFS related events
 */
export interface IoArgoprojEventsV1alpha1HDFSEventSource {
    addresses?: string[];
    /**
     * CheckInterval is a string that describes an interval duration to check the directory state, e.g. 1s, 30m, 2h... (defaults to 1m)
     */
    checkInterval?: string;
    /**
     * HDFSUser is the user to access HDFS file system.
     * It is ignored if either ccache or keytab is used.
     */
    hdfsUser?: string;
    /**
     * KrbCCacheSecret is the secret selector for Kerberos ccache
     * Either ccache or keytab can be set to use Kerberos.
     */
    krbCCacheSecret?: k8s.SecretKeySelector;
    /**
     * KrbConfig is the configmap selector for Kerberos config as string
     * It must be set if either ccache or keytab is used.
     */
    krbConfigConfigMap?: k8s.ConfigMapKeySelector;
    /**
     * KrbKeytabSecret is the secret selector for Kerberos keytab
     * Either ccache or keytab can be set to use Kerberos.
     */
    krbKeytabSecret?: k8s.SecretKeySelector;
    /**
     * KrbRealm is the Kerberos realm used with Kerberos keytab
     * It must be set if keytab is used.
     */
    krbRealm?: string;
    /**
     * KrbServicePrincipalName is the principal name of Kerberos service
     * It must be set if either ccache or keytab is used.
     */
    krbServicePrincipalName?: string;
    /**
     * KrbUsername is the Kerberos username used with Kerberos keytab
     * It must be set if keytab is used.
     */
    krbUsername?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Type of file operations to watch
     */
    type?: string;
    watchPathConfig?: IoArgoprojEventsV1alpha1WatchPathConfig;
}
/**
 * HTTPTrigger is the trigger for the HTTP request
 */
export interface IoArgoprojEventsV1alpha1HTTPTrigger {
    /**
     * BasicAuth configuration for the http request.
     * +optional
     */
    basicAuth?: IoArgoprojEventsV1alpha1BasicAuth;
    /**
     * Headers for the HTTP request.
     * +optional
     */
    headers?: {
        [name: string]: string;
    };
    /**
     * Method refers to the type of the HTTP request.
     * Refer https://golang.org/src/net/http/method.go for more io.argoproj.workflow.v1alpha1.
     * Default value is POST.
     * +optional
     */
    method?: string;
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    payload?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Timeout refers to the HTTP request timeout in seconds.
     * Default value is 60 seconds.
     * +optional
     */
    timeout?: string;
    /**
     * TLS configuration for the HTTP client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * URL refers to the URL to send HTTP request to.
     */
    url?: string;
}
/**
 * K8SResourcePolicy refers to the policy used to check the state of K8s based triggers using labels
 */
export interface IoArgoprojEventsV1alpha1K8SResourcePolicy {
    /**
     * Backoff before checking resource state
     */
    backoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * ErrorOnBackoffTimeout determines whether sensor should transition to error state if the trigger policy is unable to determine
     * the state of the resource
     */
    errorOnBackoffTimeout?: boolean;
    /**
     * Labels required to identify whether a resource is in success state
     */
    labels?: {
        [name: string]: string;
    };
}
export interface IoArgoprojEventsV1alpha1KafkaConsumerGroup {
    /**
     * The name for the consumer group to use
     */
    groupName?: string;
    /**
     * When starting up a new group do we want to start from the oldest event (true) or the newest event (false), defaults to false
     * +optional
     */
    oldest?: boolean;
    /**
     * Rebalance strategy can be one of: sticky, roundrobin, range. Range is the default.
     * +optional
     */
    rebalanceStrategy?: string;
}
/**
 * KafkaEventSource refers to event-source for Kafka related events
 */
export interface IoArgoprojEventsV1alpha1KafkaEventSource {
    /**
     * Backoff holds parameters applied to connection.
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * Consumer group for kafka client
     * +optional
     */
    consumerGroup?: IoArgoprojEventsV1alpha1KafkaConsumerGroup;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Sets a limit on how many events get read from kafka per second.
     * +optional
     */
    limitEventsPerSecond?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Partition name
     */
    partition?: string;
    /**
     * TLS configuration for the kafka client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * Topic name
     */
    topic?: string;
    /**
     * URL to kafka cluster, multiple URLs separated by comma
     */
    url?: string;
    /**
     * Specify what kafka version is being connected to enables certain features in sarama, defaults to 1.0.0
     * +optional
     */
    version?: string;
}
/**
 * KafkaTrigger refers to the specification of the Kafka trigger.
 */
export interface IoArgoprojEventsV1alpha1KafkaTrigger {
    /**
     * Compress determines whether to compress message or not.
     * Defaults to false.
     * If set to true, compresses message using snappy compression.
     * +optional
     */
    compress?: boolean;
    /**
     * FlushFrequency refers to the frequency in milliseconds to flush batches.
     * Defaults to 500 milliseconds.
     * +optional
     */
    flushFrequency?: number;
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Partition to write data to.
     */
    partition?: number;
    /**
     * The partitioning key for the messages put on the Kafka topic.
     * Defaults to broker url.
     * +optional.
     */
    partitioningKey?: string;
    payload?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * RequiredAcks used in producer to tell the broker how many replica acknowledgements
     * Defaults to 1 (Only wait for the leader to ack).
     * +optional.
     */
    requiredAcks?: number;
    /**
     * TLS configuration for the Kafka producer.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * Name of the topic.
     * More info at https://kafka.apache.org/documentation/#intro_topics
     */
    topic?: string;
    /**
     * URL of the Kafka broker.
     */
    url?: string;
    /**
     * Specify what kafka version is being connected to enables certain features in sarama, defaults to 1.0.0
     * +optional
     */
    version?: string;
}
export interface IoArgoprojEventsV1alpha1LogTrigger {
    /**
     * Only print messages every interval. Useful to prevent logging too much data for busy events.
     * +optional
     */
    intervalSeconds?: string; // uint64
}
/**
 * MQTTEventSource refers to event-source for MQTT related events
 */
export interface IoArgoprojEventsV1alpha1MQTTEventSource {
    /**
     * ClientID is the id of the client
     */
    clientId?: string;
    /**
     * ConnectionBackoff holds backoff applied to connection.
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * TLS configuration for the mqtt client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * Topic name
     */
    topic?: string;
    /**
     * URL to connect to broker
     */
    url?: string;
}
/**
 * Metadata holds the annotations and labels of an event source pod
 */
export interface IoArgoprojEventsV1alpha1Metadata {
    annotations?: {
        [name: string]: string;
    };
    labels?: {
        [name: string]: string;
    };
}
/**
 * NATSEventsSource refers to event-source for NATS related events
 */
export interface IoArgoprojEventsV1alpha1NATSEventsSource {
    /**
     * ConnectionBackoff holds backoff applied to connection.
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Subject holds the name of the subject onto which messages are published
     */
    subject?: string;
    /**
     * TLS configuration for the nats client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * URL to connect to NATS cluster
     */
    url?: string;
}
/**
 * NATSTrigger refers to the specification of the NATS trigger.
 */
export interface IoArgoprojEventsV1alpha1NATSTrigger {
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    payload?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Name of the subject to put message on.
     */
    subject?: string;
    /**
     * TLS configuration for the NATS producer.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * URL of the NATS cluster.
     */
    url?: string;
}
/**
 * NSQEventSource describes the event source for NSQ PubSub
 * More info at https://godoc.org/github.com/nsqio/go-nsq
 */
export interface IoArgoprojEventsV1alpha1NSQEventSource {
    /**
     * Channel used for subscription
     */
    channel?: string;
    /**
     * Backoff holds parameters applied to connection.
     * +optional
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * HostAddress is the address of the host for NSQ lookup
     */
    hostAddress?: string;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * TLS configuration for the nsq client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * Topic to subscribe to.
     */
    topic?: string;
}
/**
 * OpenWhiskTrigger refers to the specification of the OpenWhisk trigger.
 */
export interface IoArgoprojEventsV1alpha1OpenWhiskTrigger {
    /**
     * Name of the action/function.
     */
    actionName?: string;
    /**
     * AuthToken for authentication.
     * +optional
     */
    authToken?: k8s.SecretKeySelector;
    /**
     * Host URL of the OpenWhisk.
     */
    host?: string;
    /**
     * Namespace for the action.
     * Defaults to "_".
     * +optional.
     */
    namespace?: string;
    /**
     * +optional
     */
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    payload?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Version for the API.
     * Defaults to v1.
     * +optional
     */
    version?: string;
}
/**
 * PubSubEventSource refers to event-source for GCP PubSub related events.
 */
export interface IoArgoprojEventsV1alpha1PubSubEventSource {
    /**
     * CredentialSecret references to the secret that contains JSON credentials to access GCP.
     * If it is missing, it implicitly uses Workload Identity to access.
     * https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
     * +optional
     */
    credentialSecret?: k8s.SecretKeySelector;
    /**
     * CredentialsFile is the file that contains credentials to authenticate for GCP
     * Deprecated, use CredentialSecret instead
     */
    credentialsFile?: string;
    /**
     * DeleteSubscriptionOnFinish determines whether to delete the GCP PubSub subscription once the event source is stopped.
     * +optional
     */
    deleteSubscriptionOnFinish?: boolean;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * ProjectID is GCP project ID for the subscription.
     * Required if you run Argo Events outside of GKE/GCE.
     * (otherwise, the default value is its project)
     * +optional
     */
    projectID?: string;
    /**
     * SubscriptionID is ID of subscription.
     * Required if you use existing subscription.
     * The default value will be auto generated hash based on this eventsource setting, so the subscription
     * might be recreated every time you update the setting, which has a possibility of event loss.
     * +optional
     */
    subscriptionID?: string;
    /**
     * Topic to which the subscription should belongs.
     * Required if you want the eventsource to create a new subscription.
     * If you specify this field along with an existing subscription,
     * it will be verified whether it actually belongs to the specified topic.
     * +optional
     */
    topic?: string;
    /**
     * TopicProjectID is GCP project ID for the topic.
     * By default, it is same as ProjectID.
     * +optional
     */
    topicProjectID?: string;
}
/**
 * PulsarEventSource describes the event source for Apache Pulsar
 */
export interface IoArgoprojEventsV1alpha1PulsarEventSource {
    /**
     * Backoff holds parameters applied to connection.
     * +optional
     */
    connectionBackoff?: IoArgoprojEventsV1alpha1Backoff;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * TLS configuration for the pulsar client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
    /**
     * Whether the Pulsar client accept untrusted TLS certificate from broker.
     * +optional
     */
    tlsAllowInsecureConnection?: boolean;
    /**
     * Trusted TLS certificate secret.
     * +optional
     */
    tlsTrustCertsSecret?: k8s.SecretKeySelector;
    /**
     * Whether the Pulsar client verify the validity of the host name from broker.
     * +optional
     */
    tlsValidateHostname?: boolean;
    /**
     * Name of the topics to subscribe to.
     * +required
     */
    topics?: string[];
    /**
     * Type of the subscription.
     * Only "exclusive" and "shared" is supported.
     * Defaults to exclusive.
     * +optional
     */
    type?: string;
    /**
     * Configure the service URL for the Pulsar service.
     * +required
     */
    url?: string;
}
/**
 * RedisEventSource describes an event source for the Redis PubSub.
 * More info at https://godoc.org/github.com/go-redis/redis#example-PubSub
 */
export interface IoArgoprojEventsV1alpha1RedisEventSource {
    channels?: string[];
    /**
     * DB to use. If not specified, default DB 0 will be used.
     * +optional
     */
    db?: number;
    /**
     * HostAddress refers to the address of the Redis host/server
     */
    hostAddress?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Namespace to use to retrieve the password from. It should only be specified if password is declared
     * +optional
     */
    namespace?: string;
    /**
     * Password required for authentication if any.
     * +optional
     */
    password?: k8s.SecretKeySelector;
    /**
     * TLS configuration for the redis client.
     * +optional
     */
    tls?: IoArgoprojEventsV1alpha1TLSConfig;
}
/**
 * Resource represent arbitrary structured data.
 */
export interface IoArgoprojEventsV1alpha1Resource {
    value?: string; // byte
}
/**
 * ResourceEventSource refers to a event-source for K8s resource related events.
 */
export interface IoArgoprojEventsV1alpha1ResourceEventSource {
    /**
     * EventTypes is the list of event type to watch.
     * Possible values are - ADD, UPDATE and DELETE.
     */
    eventTypes?: string[];
    /**
     * Filter is applied on the metadata of the resource
     * If you apply filter, then the internal event informer will only monitor objects that pass the filter.
     * +optional
     */
    filter?: IoArgoprojEventsV1alpha1ResourceFilter;
    /**
     * Group of the resource
     */
    groupVersionResource?: k8s.GroupVersionResource;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Namespace where resource is deployed
     */
    namespace?: string;
}
/**
 * ResourceFilter contains K8 ObjectMeta information to further filter resource event objects
 */
export interface IoArgoprojEventsV1alpha1ResourceFilter {
    /**
     * If the resource is created after the start time then the event is treated as valid.
     * +optional
     */
    afterStart?: boolean;
    /**
     * If resource is created before the specified time then the event is treated as valid.
     * +optional
     */
    createdBy?: k8s.Time; // date-time
    /**
     * Fields provide field filters similar to K8s field selector
     * (see https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/).
     * Unlike K8s field selector, it supports arbitrary fileds like "spec.serviceAccountName",
     * and the value could be a string or a regex.
     * Same as K8s field selector, operator "=", "==" and "!=" are supported.
     * +optional
     */
    fields?: IoArgoprojEventsV1alpha1Selector[];
    /**
     * Labels provide listing options to K8s API to watch resource/s.
     * Refer https://kubernetes.io/docs/concepts/overview/working-with-objects/label-selectors/ for more io.argoproj.workflow.v1alpha1.
     * +optional
     */
    labels?: IoArgoprojEventsV1alpha1Selector[];
    /**
     * Prefix filter is applied on the resource name.
     * +optional
     */
    prefix?: string;
}
/**
 * S3Artifact contains information about an S3 connection and bucket
 */
export interface IoArgoprojEventsV1alpha1S3Artifact {
    accessKey?: k8s.SecretKeySelector;
    bucket?: IoArgoprojEventsV1alpha1S3Bucket;
    endpoint?: string;
    events?: string[];
    filter?: IoArgoprojEventsV1alpha1S3Filter;
    insecure?: boolean;
    metadata?: {
        [name: string]: string;
    };
    region?: string;
    secretKey?: k8s.SecretKeySelector;
}
/**
 * S3Bucket contains information to describe an S3 Bucket
 */
export interface IoArgoprojEventsV1alpha1S3Bucket {
    key?: string;
    name?: string;
}
/**
 * S3Filter represents filters to apply to bucket notifications for specifying constraints on objects
 */
export interface IoArgoprojEventsV1alpha1S3Filter {
    prefix?: string;
    suffix?: string;
}
/**
 * SNSEventSource refers to event-source for AWS SNS related events
 */
export interface IoArgoprojEventsV1alpha1SNSEventSource {
    /**
     * AccessKey refers K8 secret containing aws access key
     */
    accessKey?: k8s.SecretKeySelector;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Region is AWS region
     */
    region?: string;
    /**
     * RoleARN is the Amazon Resource Name (ARN) of the role to assume.
     * +optional
     */
    roleARN?: string;
    /**
     * SecretKey refers K8 secret containing aws secret key
     */
    secretKey?: k8s.SecretKeySelector;
    /**
     * TopicArn
     */
    topicArn?: string;
    /**
     * ValidateSignature is boolean that can be set to true for SNS signature verification
     * +optional
     */
    validateSignature?: boolean;
    /**
     * Webhook configuration for http server
     */
    webhook?: IoArgoprojEventsV1alpha1WebhookContext;
}
/**
 * SQSEventSource refers to event-source for AWS SQS related events
 */
export interface IoArgoprojEventsV1alpha1SQSEventSource {
    /**
     * AccessKey refers K8 secret containing aws access key
     */
    accessKey?: k8s.SecretKeySelector;
    /**
     * JSONBody specifies that all event body payload coming from this
     * source will be JSON
     * +optional
     */
    jsonBody?: boolean;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Queue is AWS SQS queue to listen to for messages
     */
    queue?: string;
    /**
     * QueueAccountID is the ID of the account that created the queue to monitor
     * +optional
     */
    queueAccountId?: string;
    /**
     * Region is AWS region
     */
    region?: string;
    /**
     * RoleARN is the Amazon Resource Name (ARN) of the role to assume.
     * +optional
     */
    roleARN?: string;
    /**
     * SecretKey refers K8 secret containing aws secret key
     */
    secretKey?: k8s.SecretKeySelector;
    /**
     * WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive
     * in the queue before returning.
     */
    waitTimeSeconds?: string;
}
/**
 * Selector represents conditional operation to select K8s objects.
 */
export interface IoArgoprojEventsV1alpha1Selector {
    /**
     * Key name
     */
    key?: string;
    /**
     * Supported operations like ==, !=, <=, >= etc.
     * Defaults to ==.
     * Refer https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors for more io.argoproj.workflow.v1alpha1.
     * +optional
     */
    operation?: string;
    /**
     * Value
     */
    value?: string;
}
/**
 * Sensor is the definition of a sensor resource
 * +genclient
 * +genclient:noStatus
 * +kubebuilder:resource:shortName=sn
 * +k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object
 * +k8s:openapi-gen=true
 */
export interface IoArgoprojEventsV1alpha1Sensor {
    metadata?: k8s.ObjectMeta;
    spec?: IoArgoprojEventsV1alpha1SensorSpec;
    status?: IoArgoprojEventsV1alpha1SensorStatus;
}
/**
 * SensorList is the list of Sensor resources
 * +k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object
 */
export interface IoArgoprojEventsV1alpha1SensorList {
    items?: IoArgoprojEventsV1alpha1Sensor[];
    metadata?: k8s.ListMeta;
}
/**
 * SensorSpec represents desired sensor state
 */
export interface IoArgoprojEventsV1alpha1SensorSpec {
    /**
     * Circuit is a boolean expression of dependency groups
     * DEPRECATED: Use Switch in triggers instead.
     */
    circuit?: string;
    /**
     * Dependencies is a list of the events that this sensor is dependent on.
     */
    dependencies?: IoArgoprojEventsV1alpha1EventDependency[];
    /**
     * DependencyGroups is a list of the groups of events.
     */
    dependencyGroups?: IoArgoprojEventsV1alpha1DependencyGroup[];
    /**
     * ErrorOnFailedRound if set to true, marks sensor state as `error` if the previous trigger round fails.
     * Once sensor state is set to `error`, no further triggers will be processed.
     */
    errorOnFailedRound?: boolean;
    /**
     * EventBusName references to a EventBus name. By default the value is "default"
     */
    eventBusName?: string;
    /**
     * Template is the pod specification for the sensor
     * +optional
     */
    template?: IoArgoprojEventsV1alpha1Template;
    /**
     * Triggers is a list of the things that this sensor evokes. These are the outputs from this sensor.
     */
    triggers?: IoArgoprojEventsV1alpha1Trigger[];
}
/**
 * SensorStatus contains information about the status of a sensor.
 */
export interface IoArgoprojEventsV1alpha1SensorStatus {
    status?: IoArgoprojEventsV1alpha1Status;
}
/**
 * Service holds the service information eventsource exposes
 */
export interface IoArgoprojEventsV1alpha1Service {
    /**
     * clusterIP is the IP address of the service and is usually assigned
     * randomly by the master. If an address is specified manually and is not in
     * use by others, it will be allocated to the service; otherwise, creation
     * of the service will fail. This field can not be changed through updates.
     * Valid values are "None", empty string (""), or a valid IP address. "None"
     * can be specified for headless services when proxying is not required.
     * More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     * +optional
     */
    clusterIP?: string;
    /**
     * The list of ports that are exposed by this ClusterIP service.
     * +patchMergeKey=port
     * +patchStrategy=merge
     * +listType=map
     * +listMapKey=port
     * +listMapKey=protocol
     */
    ports?: k8s.ServicePort[];
}
/**
 * SlackEventSource refers to event-source for Slack related events
 */
export interface IoArgoprojEventsV1alpha1SlackEventSource {
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Slack App signing secret
     */
    signingSecret?: k8s.SecretKeySelector;
    /**
     * Token for URL verification handshake
     */
    token?: k8s.SecretKeySelector;
    /**
     * Webhook holds configuration for a REST endpoint
     */
    webhook?: IoArgoprojEventsV1alpha1WebhookContext;
}
/**
 * SlackTrigger refers to the specification of the slack notification trigger.
 */
export interface IoArgoprojEventsV1alpha1SlackTrigger {
    /**
     * Channel refers to which Slack channel to send slack message.
     * +optional
     */
    channel?: string;
    /**
     * Message refers to the message to send to the Slack channel.
     * +optional
     */
    message?: string;
    /**
     * +optional
     */
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * SlackToken refers to the Kubernetes secret that holds the slack token required to send messages.
     */
    slackToken?: k8s.SecretKeySelector;
}
/**
 * StandardK8STrigger is the standard Kubernetes resource trigger
 */
export interface IoArgoprojEventsV1alpha1StandardK8STrigger {
    /**
     * The unambiguous kind of this object - used in order to retrieve the appropriate kubernetes api client for this resource
     */
    groupVersionResource?: k8s.GroupVersionResource;
    /**
     * LiveObject specifies whether the resource should be directly fetched from K8s instead
     * of being marshaled from the resource artifact. If set to true, the resource artifact
     * must contain the information required to uniquely identify the resource in the cluster,
     * that is, you must specify "apiVersion", "kind" as well as "name" and "namespace" meta
     * data.
     * Only valid for operation type `update`
     * +optional
     */
    liveObject?: boolean;
    /**
     * Operation refers to the type of operation performed on the k8s resource.
     * Default value is Create.
     * +optional
     */
    operation?: string;
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * PatchStrategy controls the K8s object patching strategy when the trigger operation is specified as patch.
     * possible values:
     * "application/json-patch+json"
     * "application/merge-patch+json"
     * "application/strategic-merge-patch+json"
     * "application/apply-patch+yaml".
     * Defaults to "application/merge-patch+json"
     * +optional
     */
    patchStrategy?: string;
    /**
     * Source of the K8 resource file(s)
     */
    source?: IoArgoprojEventsV1alpha1ArtifactLocation;
}
/**
 * Status is a common structure which can be used for Status field.
 */
export interface IoArgoprojEventsV1alpha1Status {
    /**
     * Conditions are the latest available observations of a resource's current state.
     * +optional
     * +patchMergeKey=type
     * +patchStrategy=merge
     */
    conditions?: IoArgoprojEventsV1alpha1Condition[];
}
/**
 * StatusPolicy refers to the policy used to check the state of the trigger using response status
 */
export interface IoArgoprojEventsV1alpha1StatusPolicy {
    allow?: number /* int32 */ [];
}
/**
 * StorageGridEventSource refers to event-source for StorageGrid related events
 */
export interface IoArgoprojEventsV1alpha1StorageGridEventSource {
    /**
     * APIURL is the url of the storagegrid api.
     */
    apiURL?: string;
    /**
     * Auth token for storagegrid api
     */
    authToken?: k8s.SecretKeySelector;
    /**
     * Name of the bucket to register notifications for.
     */
    bucket?: string;
    events?: string[];
    /**
     * Filter on object key which caused the notification.
     */
    filter?: IoArgoprojEventsV1alpha1StorageGridFilter;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * S3 region.
     * Defaults to us-east-1
     * +optional
     */
    region?: string;
    /**
     * TopicArn
     */
    topicArn?: string;
    /**
     * Webhook holds configuration for a REST endpoint
     */
    webhook?: IoArgoprojEventsV1alpha1WebhookContext;
}
/**
 * StorageGridFilter represents filters to apply to bucket notifications for specifying constraints on objects
 * +k8s:openapi-gen=true
 */
export interface IoArgoprojEventsV1alpha1StorageGridFilter {
    prefix?: string;
    suffix?: string;
}
/**
 * StripeEventSource describes the event source for stripe webhook notifications
 * More info at https://stripe.com/docs/webhooks
 */
export interface IoArgoprojEventsV1alpha1StripeEventSource {
    /**
     * APIKey refers to K8s secret that holds Stripe API key. Used only if CreateWebhook is enabled.
     * +optional
     */
    apiKey?: k8s.SecretKeySelector;
    /**
     * CreateWebhook if specified creates a new webhook programmatically.
     * +optional
     */
    createWebhook?: boolean;
    /**
     * EventFilter describes the type of events to listen to. If not specified, all types of events will be processed.
     * More info at https://stripe.com/docs/api/events/list
     * +optional
     */
    eventFilter?: string[];
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Webhook holds configuration for a REST endpoint
     */
    webhook?: IoArgoprojEventsV1alpha1WebhookContext;
}
/**
 * TLSConfig refers to TLS configuration for a client.
 */
export interface IoArgoprojEventsV1alpha1TLSConfig {
    /**
     * DeprecatedCACertPath refers the file path that contains the CA cert.
     * Deprecated: use CACertSecret instead
     */
    caCertPath?: string;
    /**
     * CACertSecret refers to the secret that contains the CA cert
     */
    caCertSecret?: k8s.SecretKeySelector;
    /**
     * DeprecatedClientCertPath refers the file path that contains client cert.
     * Deprecated: use ClientCertSecret instead
     */
    clientCertPath?: string;
    /**
     * ClientCertSecret refers to the secret that contains the client cert
     */
    clientCertSecret?: k8s.SecretKeySelector;
    /**
     * DeprecatedClientKeyPath refers the file path that contains client key.
     * Deprecated: use ClientKeySecret instead
     */
    clientKeyPath?: string;
    /**
     * ClientKeySecret refers to the secret that contains the client key
     */
    clientKeySecret?: k8s.SecretKeySelector;
}
/**
 * Template holds the information of a sensor deployment template
 */
export interface IoArgoprojEventsV1alpha1Template {
    /**
     * Container is the main container image to run in the sensor pod
     * +optional
     */
    container?: k8s.Container;
    /**
     * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
     * If specified, these secrets will be passed to individual puller implementations for them to use. For example,
     * in the case of docker, only DockerConfig type secrets are honored.
     * More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
     * +optional
     * +patchMergeKey=name
     * +patchStrategy=merge
     */
    imagePullSecrets?: k8s.LocalObjectReference[];
    /**
     * Metadata sets the pods's metadata, i.e. annotations and labels
     */
    metadata?: IoArgoprojEventsV1alpha1Metadata;
    /**
     * NodeSelector is a selector which must be true for the pod to fit on a node.
     * Selector which must match a node's labels for the pod to be scheduled on that node.
     * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     * +optional
     */
    nodeSelector?: {
        [name: string]: string;
    };
    /**
     * SecurityContext holds pod-level security attributes and common container settings.
     * Optional: Defaults to empty.  See type description for default values of each field.
     * +optional
     */
    securityContext?: k8s.PodSecurityContext;
    /**
     * ServiceAccountName is the name of the ServiceAccount to use to run sensor pod.
     * More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
     * +optional
     */
    serviceAccountName?: string;
    /**
     * If specified, the pod's tolerations.
     * +optional
     */
    tolerations?: k8s.Toleration[];
    /**
     * Volumes is a list of volumes that can be mounted by containers in a io.argoproj.workflow.v1alpha1.
     * +patchStrategy=merge
     * +patchMergeKey=name
     * +optional
     */
    volumes?: k8s.Volume[];
}
/**
 * TimeFilter describes a window in time.
 * It filters out events that occur outside the time limits.
 * In other words, only events that occur after Start and before Stop
 * will pass this filter.
 */
export interface IoArgoprojEventsV1alpha1TimeFilter {
    /**
     * Start is the beginning of a time window in UTC.
     * Before this time, events for this dependency are ignored.
     * Format is hh:mm:ss.
     */
    start?: string;
    /**
     * Stop is the end of a time window in UTC.
     * After or equal to this time, events for this dependency are ignored and
     * Format is hh:mm:ss.
     * If it is smaller than Start, it is treated as next day of Start
     * (e.g.: 22:00:00-01:00:00 means 22:00:00-25:00:00).
     */
    stop?: string;
}
/**
 * Trigger is an action taken, output produced, an event created, a message sent
 */
export interface IoArgoprojEventsV1alpha1Trigger {
    /**
     * Parameters is the list of parameters applied to the trigger template definition
     */
    parameters?: IoArgoprojEventsV1alpha1TriggerParameter[];
    /**
     * Policy to configure backoff and execution criteria for the trigger
     */
    policy?: IoArgoprojEventsV1alpha1TriggerPolicy;
    /**
     * Template describes the trigger specification.
     */
    template?: IoArgoprojEventsV1alpha1TriggerTemplate;
}
/**
 * TriggerParameter indicates a passed parameter to a service template
 */
export interface IoArgoprojEventsV1alpha1TriggerParameter {
    /**
     * Dest is the JSONPath of a resource key.
     * A path is a series of keys separated by a dot. The colon character can be escaped with '.'
     * The -1 key can be used to append a value to an existing array.
     * See https://github.com/tidwall/sjson#path-syntax for more information about how this is used.
     */
    dest?: string;
    /**
     * Operation is what to do with the existing value at Dest, whether to
     * 'prepend', 'overwrite', or 'append' it.
     */
    operation?: string;
    /**
     * Src contains a source reference to the value of the parameter from a dependency
     */
    src?: IoArgoprojEventsV1alpha1TriggerParameterSource;
}
/**
 * TriggerParameterSource defines the source for a parameter from a event event
 */
export interface IoArgoprojEventsV1alpha1TriggerParameterSource {
    /**
     * ContextKey is the JSONPath of the event's (JSON decoded) context key
     * ContextKey is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.
     * To access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\'.
     * See https://github.com/tidwall/gjson#path-syntax for more information on how to use this.
     */
    contextKey?: string;
    /**
     * ContextTemplate is a go-template for extracting a string from the event's context.
     * If a ContextTemplate is provided with a ContextKey, the template will be evaluated first and fallback to the ContextKey.
     * The templating follows the standard go-template syntax as well as sprig's extra functions.
     * See https://pkg.go.dev/text/template and https://masterminds.github.io/sprig/
     */
    contextTemplate?: string;
    /**
     * DataKey is the JSONPath of the event's (JSON decoded) data key
     * DataKey is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.
     * To access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\'.
     * See https://github.com/tidwall/gjson#path-syntax for more information on how to use this.
     */
    dataKey?: string;
    /**
     * DataTemplate is a go-template for extracting a string from the event's data.
     * If a DataTemplate is provided with a DataKey, the template will be evaluated first and fallback to the DataKey.
     * The templating follows the standard go-template syntax as well as sprig's extra functions.
     * See https://pkg.go.dev/text/template and https://masterminds.github.io/sprig/
     */
    dataTemplate?: string;
    /**
     * DependencyName refers to the name of the dependency. The event which is stored for this dependency is used as payload
     * for the parameterization. Make sure to refer to one of the dependencies you have defined under Dependencies list.
     */
    dependencyName?: string;
    /**
     * Value is the default literal value to use for this parameter source
     * This is only used if the DataKey is invalid.
     * If the DataKey is invalid and this is not defined, this param source will produce an error.
     */
    value?: string;
}
/**
 * TriggerPolicy dictates the policy for the trigger retries
 */
export interface IoArgoprojEventsV1alpha1TriggerPolicy {
    /**
     * K8SResourcePolicy refers to the policy used to check the state of K8s based triggers using using labels
     */
    k8s?: IoArgoprojEventsV1alpha1K8SResourcePolicy;
    /**
     * Status refers to the policy used to check the state of the trigger using response status
     */
    status?: IoArgoprojEventsV1alpha1StatusPolicy;
}
/**
 * TriggerSwitch describes condition which must be satisfied in order to execute a trigger.
 * Depending upon condition type, status of dependency groups is used to evaluate the result.
 * DEPRECATED
 */
export interface IoArgoprojEventsV1alpha1TriggerSwitch {
    /**
     * All acts as a AND operator between dependencies
     */
    all?: string[];
    /**
     * Any acts as a OR operator between dependencies
     */
    any?: string[];
}
/**
 * TriggerTemplate is the template that describes trigger specification.
 */
export interface IoArgoprojEventsV1alpha1TriggerTemplate {
    /**
     * ArgoWorkflow refers to the trigger that can perform various operations on an Argo io.argoproj.workflow.v1alpha1.
     * +optional
     */
    argoWorkflow?: IoArgoprojEventsV1alpha1ArgoWorkflowTrigger;
    /**
     * AWSLambda refers to the trigger designed to invoke AWS Lambda function with with on-the-fly constructable payload.
     * +optional
     */
    awsLambda?: IoArgoprojEventsV1alpha1AWSLambdaTrigger;
    /**
     * Conditions is the conditions to execute the trigger.
     * For example: "(dep01 || dep02) && dep04"
     * +optional
     */
    conditions?: string;
    /**
     * CustomTrigger refers to the trigger designed to connect to a gRPC trigger server and execute a custom trigger.
     * +optional
     */
    custom?: IoArgoprojEventsV1alpha1CustomTrigger;
    /**
     * HTTP refers to the trigger designed to dispatch a HTTP request with on-the-fly constructable payload.
     * +optional
     */
    http?: IoArgoprojEventsV1alpha1HTTPTrigger;
    /**
     * StandardK8STrigger refers to the trigger designed to create or update a generic Kubernetes resource.
     * +optional
     */
    k8s?: IoArgoprojEventsV1alpha1StandardK8STrigger;
    /**
     * Kafka refers to the trigger designed to place messages on Kafka topic.
     * +optional.
     */
    kafka?: IoArgoprojEventsV1alpha1KafkaTrigger;
    /**
     * Log refers to the trigger designed to invoke log the io.argoproj.workflow.v1alpha1.
     * +optional
     */
    log?: IoArgoprojEventsV1alpha1LogTrigger;
    /**
     * Name is a unique name of the action to take.
     */
    name?: string;
    /**
     * NATS refers to the trigger designed to place message on NATS subject.
     * +optional.
     */
    nats?: IoArgoprojEventsV1alpha1NATSTrigger;
    /**
     * OpenWhisk refers to the trigger designed to invoke OpenWhisk action.
     * +optional
     */
    openWhisk?: IoArgoprojEventsV1alpha1OpenWhiskTrigger;
    /**
     * Slack refers to the trigger designed to send slack notification message.
     * +optional
     */
    slack?: IoArgoprojEventsV1alpha1SlackTrigger;
    /**
     * DeprecatedSwitch is the condition to execute the trigger.
     * DEPRECATED: USE conditions instead
     * +optional
     */
    switch?: IoArgoprojEventsV1alpha1TriggerSwitch;
}
/**
 * URLArtifact contains information about an artifact at an http endpoint.
 */
export interface IoArgoprojEventsV1alpha1URLArtifact {
    /**
     * Path is the complete URL
     */
    path?: string;
    /**
     * VerifyCert decides whether the connection is secure or not
     */
    verifyCert?: boolean;
}
export interface IoArgoprojEventsV1alpha1WatchPathConfig {
    /**
     * Directory to watch for events
     */
    directory?: string;
    /**
     * Path is relative path of object to watch with respect to the directory
     */
    path?: string;
    /**
     * PathRegexp is regexp of relative path of object to watch with respect to the directory
     */
    pathRegexp?: string;
}
/**
 * WebhookContext holds a general purpose REST API context
 */
export interface IoArgoprojEventsV1alpha1WebhookContext {
    /**
     * AuthSecret holds a secret selector that contains a bearer token for authentication
     * +optional
     */
    authSecret?: k8s.SecretKeySelector;
    /**
     * REST API endpoint
     */
    endpoint?: string;
    /**
     * Metadata holds the user defined metadata which will passed along the event payload.
     * +optional
     */
    metadata?: {
        [name: string]: string;
    };
    /**
     * Method is HTTP request method that indicates the desired action to be performed for a given resource.
     * See RFC7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content
     */
    method?: string;
    /**
     * Port on which HTTP server is listening for incoming events.
     */
    port?: string;
    /**
     * DeprecatedServerCertPath refers the file that contains the cert.
     */
    serverCertPath?: string;
    /**
     * ServerCertPath refers the file that contains the cert.
     */
    serverCertSecret?: k8s.SecretKeySelector;
    /**
     * DeprecatedServerKeyPath refers the file that contains private key
     */
    serverKeyPath?: string;
    /**
     * ServerKeyPath refers the file that contains private key
     */
    serverKeySecret?: k8s.SecretKeySelector;
    /**
     * URL is the url of the server.
     */
    url?: string;
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
     * Arguments to the kpoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
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
    lastScheduledTime: k8s.Time; // date-time
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
    finishedAt?: k8s.Time; // date-time
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
    startedAt?: k8s.Time; // date-time
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
    // createOptions?: k8s.CreateOptions;
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
     * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
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
    podDisruptionBudget?: l8s.PodDisruptionBudgetSpec;
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
    finishedAt?: k8s.Time; // date-time
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
     * PersistentVolumeClaims tracks all PVCs that were created as part of the io.argoproj.workflow.v1alpha1. The contents of this list are drained at the end of the workflow.
     */
    persistentVolumeClaims?: k8s.Volume[];
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
    startedAt?: k8s.Time; // date-time
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
    createOptions?: k8s.CreateWorkflow;
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
     * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
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
    podDisruptionBudget?: k8s.KubePodDisruptionBudgetListV1Beta1;
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
