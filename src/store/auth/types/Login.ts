export type LoginRequest = {
  readonly email: string;
  readonly password: string;
};

export type LoginResponse = {
  readonly email: string;
  readonly username: string;
  readonly tokens: string;
};
