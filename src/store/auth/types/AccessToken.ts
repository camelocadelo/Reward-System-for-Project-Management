export const accessTokenKey = 'access_token';

export type AccessTokenState = {
  readonly accessToken: string;
  readonly hasFullRegistration?: boolean;
};
