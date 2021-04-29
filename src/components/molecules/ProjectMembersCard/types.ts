export interface ProjectMembersCardProps {
  readonly members?: ProjectMember[];
  readonly onDeleteMember?: any;
  readonly onSettingTeamLead?: any;
  onReducePoints(u: any): any;
  onDeleteTeamLead?: any;
}

export type ProjectMember = {
  readonly pk: number;
  readonly username: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly account_bonus: number;
  readonly is_team_lead: any;
};
