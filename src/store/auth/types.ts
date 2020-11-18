export const GET_USER = {
  started: 'GET_USER_START',
  success: 'GET_USER_SUCCESS',
  failed: 'GET_USER_FAILED',
};

export type LoginRequest = {
  readonly email: string;
  readonly password: string;
};

export type LoginResponse = {
  readonly email: string;
  readonly username: string;
  readonly tokens: string;
};
