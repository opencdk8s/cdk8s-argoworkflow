import * as cdk8s from 'cdk8s';
import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
import { InputParams, initContainer, sshKey, inputGenerator } from './util';

export interface WorkflowProps {
  readonly name?: string;
  readonly namespace?: string;
  readonly image?: string;
  readonly volumes?: k8s.Volume;
  readonly templateName?: string;
  readonly inputParams?: InputParams;
  // readonly gitVals?: Git;
  readonly containerVals?: k8s.Container;
  readonly securityContext?: k8s.SecurityContext;
  readonly initContainers?: initContainer;
  readonly gitSshPrivateKeySecret?: sshKey;
  readonly artifactPath?: string;
}

export class ArgoWorkflow extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'ClusterWorkflowTemplate'
  }
  
  public static propHandler(props: WorkflowProps): any {
    return {
      metadata: {
        name: props.name,
        namespace: props.namespace
      },
      spec: {
        templates: {
          name: props.name,
          inputs: inputGenerator(props.inputParams, props.artifactPath, props.gitSshPrivateKeySecret),
        },
        container: {
          image: props.image,
          command: props.containerVals.command,
          env: props.containerVals.env,
        },
        initContainers: {
          name: props.initContainers.name,
          image: props.initContainers.image || props.image,
          env: props.initContainers.env || props.containerVals.env,
          command: props.initContainers.command,
          args: props.initContainers.args
        },
        volumes: props.volumes,
        securityContext: props.securityContext
      }
    }
  }

  public static manifest(props: WorkflowProps): any {
    return {
      ...ArgoWorkflow.GVK,
      ...this.propHandler(props)
    }
  }

  constructor(scope: Construct, name: string, props: WorkflowProps) {
    super(scope, name, ArgoWorkflow.manifest(props));
  }
}