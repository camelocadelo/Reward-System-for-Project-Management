export interface ProfilePageProps {
  userInfoData: any;
  onGetUserInfo(pk: any): void;
  userActivitiesData: any;
  onGetUserActivities(pk: any, token: any, callbacks?: any): void;
  onBindTelegramProfile(data: any, token: any, callbacks?: any): any;
  onBindSlackProfile(data: any, token: any, callbacks?: any): any;
  onUnbindSlackProfile(token: any, callbacks?: any): any;
  onUnbindTelegramProfile(token: any, callbacks?: any): any;
  onUnbindGit(token: any, callbacks?: any): any;
}
