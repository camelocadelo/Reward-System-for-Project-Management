export interface GithubAuthPageProps {
  sendGithubCode(data: any, callbacks?: any): any;
  sentGithubCode: any;
  sendGitToken: any;
}

export type FormValues = {
  readonly gitToken: string;
};

export enum FormInputs {
  gitToken = 'gitToken',
}
