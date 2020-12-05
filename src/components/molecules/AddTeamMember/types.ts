export interface AddTeamMemberProps {
  readonly pk: number;
  addedTeamMemberState: any;
  onAddTeamMember: any;
  onClose: any;
}

export type FormValues = {
  readonly username: string;
};

export enum FormInputs {
  username = 'username',
}
