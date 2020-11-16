export type RegisterRequest = {
  readonly email: string;
  readonly password: string;
  readonly username: string;
  readonly first_name: string;
  readonly last_name: string;
};

export type RegisterResponse = {
  readonly email: string;
  readonly username: string;
  readonly first_name: string;
  readonly last_name: string;
};
