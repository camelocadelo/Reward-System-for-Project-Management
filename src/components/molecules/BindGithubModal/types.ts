export type FormValues = {
  readonly githubLink: string;
};

export enum FormInputs {
  githubLink = 'githubLink',
}

export interface BindGithubModalProps {
  onCloseModal?: any;
  onGithubFormSubmit?: any;
}
