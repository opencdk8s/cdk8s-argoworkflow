import * as k8s from './imports/k8s';

export interface InputParams {
  readonly repo_url: string;
  readonly repo_ref: string;
  readonly repo_name?: string;
  readonly pr_number?: string;
  readonly repo_commit_id?: string;
  readonly root_ecr?: string,
  readonly artifacts?: Artifact[],
}

export interface sshKey {
  readonly name: string;
  readonly key: string;
}

export interface Artifact {
  readonly name: string,
  readonly path: string,
  readonly git?: GitArtifact
}

export interface GitArtifact {
  readonly repo: string;
  readonly revision?:string;
  readonly sshPrivateKeySecret?: sshKey;
  readonly insecureIgnoreHostKey?: boolean;
}

export interface initContainer {
  readonly name: string;
  readonly image?: string;
  readonly env?: k8s.EnvVar;
  readonly command?: string[];
  readonly args?: string[];
}