export interface ProfileCardProps {
  readonly firstName: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly accountBonuses: number;
  readonly onChangeUserInfo: any;
  readonly onSendBonuses: any;
  readonly onAddGithub: any;
  readonly onAddSlack: any;
  readonly onAddJira: any;
}
