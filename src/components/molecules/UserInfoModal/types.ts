export type FormValues = {
  readonly FirstName: string;
  readonly LastName: string;
  readonly UserName: string;
  readonly Email: string;
};

export enum FormInputs {
  FirstName = 'firstName',
  LastName = 'lastName',
  UserName = 'userName',
  Email = 'email',
}

export interface UserInfoModalProps {
  onCloseModal(): void;
  createProject: any;
  projectData: any;
}
