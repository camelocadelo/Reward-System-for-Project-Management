export type FormValues = {
  readonly username: string;
};

export enum FormInputs {
  username = 'username',
}

export interface TeamLeadModalProps {
  onCloseModal?: any;
  onTeamLeadFormSubmit?: any;
}
