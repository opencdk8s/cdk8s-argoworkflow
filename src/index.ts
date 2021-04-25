import * as cdk8s from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
import { InputParams, initContainer, sshKey, inputGenerator } from './util';

export interface WorkflowOpts {
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

export class ArgoWorkflow extends Construct {
  public readonly name?: string;
  public readonly namespace?: string;

  constructor(scope: Construct, name: string, opts: WorkflowOpts) {
    super(scope, name);

    this.name = opts.name ?? 'unnamed-workflow';
    this.namespace = opts.namespace ?? 'argo';

    new cdk8s.ApiObject(this, 'argo-workflow', {
      apiVersion: 'argoproj.io/v1alpha1',
      kind: 'ClusterWorkflowTemplate',
      metadata: {
        name: this.name,
        namespace: this.namespace
      },
      spec: {
        templates: {
          name: this.name,
          inputs: inputGenerator(opts.inputParams, opts.artifactPath, opts.gitSshPrivateKeySecret),
        },
        container: {
          image: opts.image,
          command: opts.containerVals.command,
          env: opts.containerVals.env,
        },
        initContainers: {
          name: opts.initContainers.name,
          image: opts.initContainers.image || opts.image,
          env: opts.initContainers.env || opts.containerVals.env,
          command: opts.initContainers.command,
          args: opts.initContainers.args
        },
        volumes: opts.volumes,
        securityContext: opts.securityContext
      }
    })
  }
}