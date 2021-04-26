import * as cdk8s from 'cdk8s';
import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
import * as k8s from './imports/k8s';
import { InputParams, initContainer, sshKey } from './util';

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
  
  public static manifest(props: WorkflowProps): any {
    return {
      ...ArgoWorkflow.GVK,
      ...props
    }
  }

  constructor(scope: Construct, name: string, props: WorkflowProps) {
    super(scope, name, ArgoWorkflow.manifest(props));
  }
}