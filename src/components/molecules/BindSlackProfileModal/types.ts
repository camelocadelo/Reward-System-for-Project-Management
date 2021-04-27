export type FormValues = {
  readonly slackProfileCode: string;
};

export enum FormInputs {
  slackProfileCode = 'slackProfileCode',
}

export interface BindSlackProfileModalProps {
  onCloseModal?: any;
  onSlackProfileFormSubmit?: any;
}
