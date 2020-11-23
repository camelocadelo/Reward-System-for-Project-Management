export const GET_USERINFO = {
  started: 'GET_USERINFO_START',
  success: 'GET_USERINFO_SUCCESS',
  failed: 'GET_USERINFO_FAILED',
};

export const CHANGE_USERINFO = {
  started: 'CHANGE_USERINFO_START',
  success: 'CHANGE_USERINFO_SUCCESS',
  failed: 'CHANGE_USERINFO_FAILED',
};

export const GET_USER_ACTIVITIES = {
  started: 'GET_USER_ACTIVITIES_START',
  success: 'GET_USER_ACTIVITIES_SUCCESS',
  failed: 'GET_USER_ACTIVITIES_FAILED',
};

export type ChangeUserInfoRequest = {
  readonly first_name: string;
  readonly last_name: string;
  readonly username: string;
  readonly email: string;
};
