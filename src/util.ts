import * as k8s from './imports/k8s';

export interface InputParams {
  readonly repo_url: string;
  readonly repo_ref: string;
  readonly repo_name?: string;
  readonly pr_number?: string;
  readonly repo_commit_id?: string;
  readonly root_ecr?: string,
}

export interface sshKey {
  readonly name: string;
  readonly key: string;
}

export interface Git {
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

export interface Artifact {
  name: string,
  path: string,
  git?: Git
}

export function artifactGenerator(
  path: string, 
  type: string,
  secret?: sshKey
) {
  switch(type) {
    case 'git':
      const artifact: Artifact = {
        name: 'repo-source',
        path: path,
        git: {
          repo: "{{inputs.parameters.repo_url}}",
          revision: "{{inputs.parameters.repo_ref}}",
          sshPrivateKeySecret: {
            name: secret.name,
            key: secret.key
          },
          insecureIgnoreHostKey: false
        }
      }
      return artifact;
  }
}

export function inputGenerator(
  inputParams: InputParams,
  artifactPath?: string,
  secret?: sshKey
) {
  const input: Input = {
    parameters: inputParams,
    artifacts: artifactGenerator(
      artifactPath,
      'git',
      secret
    )
  };
  return input;
}