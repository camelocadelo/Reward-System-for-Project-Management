export interface ProjectDetailPageProps {
  projectActivitiesState: any;
  onGetProjectActivities(id: string): void;
  onAddTeamMember: any;
  addedTeamMemberState: any;
  onGetProjectMembers: any;
  projectMembersState: any;
  onRemoveTeamMember?: any;
  onSetTeamLead?: any;
  projectStatistics?: any;
  // onGetStatistics?: any;
  onGetStatistics?(data: any, callbacks?: any): void;
  onBindTelegramProject?(data: any, callbacks?: any): any;
}
