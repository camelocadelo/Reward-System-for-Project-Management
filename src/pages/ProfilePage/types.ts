export interface ProfilePageProps {
  userInfoData: any;
  onGetUserInfo(): void;
  userActivitiesData: any;
  onGetUserActivities(): void;
  onBindTelegramProfile(data: any): any;
  onBindSlackProfile(data: any): any;
}
