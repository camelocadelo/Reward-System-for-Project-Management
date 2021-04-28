export interface ProfilePageProps {
  userInfoData: any;
  onGetUserInfo(): void;
  userActivitiesData: any;
  onGetUserActivities(): void;
  onBindTelegramProfile(data: any, callbacks?: any): any;
  onBindSlackProfile(data: any, callbacks?: any): any;
  onUnbindSlackProfile(callbacks?: any): any;
  onUnbindTelegramProfile(callbacks?: any): any;
}
