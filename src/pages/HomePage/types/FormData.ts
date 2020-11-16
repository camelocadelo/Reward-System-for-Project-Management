export type FormValues = {
  readonly username: string;
  readonly password: string;
};

export enum FormInputs {
  Username = 'username',
  Password = 'password',
}

export type RegisterFormValues = {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly first_name: string;
  readonly last_name: string;
};

export enum RegisterFormInputs {
  Email = 'email',
  Username = 'username',
  Password = 'password',
  Firstname = 'first_name',
  Lastname = 'last_name',
}
