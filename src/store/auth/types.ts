export const GET_USER = {
  started: 'GET_USER_START',
  success: 'GET_USER_SUCCESS',
  failed: 'GET_USER_FAILED',
};

export const REGISTER = {
  started: 'REGISTER_START',
  success: 'REGISTER_SUCCESS',
  failed: 'REGISTER_FAILED',
};

export type LoginRequest = {
  readonly email: string;
  readonly password: string;
};

export type RegisterRequest = {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly first_name: string;
  readonly last_name: string;
};

export type LoginResponse = {
  readonly email: string;
  readonly username: string;
  readonly tokens: string;
};
