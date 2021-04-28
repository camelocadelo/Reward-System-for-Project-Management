export interface ProjectDetailPageProps {
  projectActivitiesState: any;
  onGetProjectActivities(id: string): void;
  onAddTeamMember: any;
  addedTeamMemberState: any;
  onGetProjectMembers: any;
  projectMembersState: any;
  onRemoveTeamMember?: any;
  onSetTeamLead?: any;
  projectStatisticsData?: any;
  // onGetStatistics?: any;
  onGetStatistics?(data: any, callbacks?: any): void;
  onBindTelegramProject?(data: any, id: any, callbacks?: any): any;
  projectMembers: any;
  onBindSlackProject?(data: any, arg2: any, callbacks?: any): any;
  bindSlackProject?: any;
  getProjectBindInfo(data: any, callbacks?: any): any;
  projectBindInfo: any;
}
