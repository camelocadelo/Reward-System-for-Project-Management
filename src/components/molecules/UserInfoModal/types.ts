export type FormValues = {
  readonly firstName: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
};

export enum FormInputs {
  FirstName = 'firstName',
  LastName = 'lastName',
  UserName = 'userName',
  Email = 'email',
}

export interface UserInfoModalProps {
  onCloseModal(): void;
  onChangeUserInfo: any;
  changedUserInfoData: any;
}
