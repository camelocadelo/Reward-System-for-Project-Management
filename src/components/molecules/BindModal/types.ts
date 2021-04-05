export type FormValues = {
  readonly slackCode: string;
};

export enum FormInputs {
  slackCode = 'slackCode',
}

export interface BindModalProps {
  onCloseModal(): void;
  bindSlackChannel?: any;
  slackChannelState?: any;
}
