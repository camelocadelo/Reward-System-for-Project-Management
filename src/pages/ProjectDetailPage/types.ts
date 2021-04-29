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
  unbindSlackProject(id: any, callbacks?: any): any;
  unbindTelegramProject(id: any, callbacks?: any): any;
  bindRepoToProject(data: any, callbacks?: any): any;
  projectSlackStatisticsData?: any;
  projectGitStatisticsData?: any;
  onGetSlackStatistics?(data: any, callbacks?: any): void;
  onGetGitStatistics?(data: any, callbacks?: any): void;
  unbindGitProject(id: any, callbacks?: any): any;
  reducePoints(data: any, callbacks?: any): any;
  deleteTeamLead(data: any, callbacks?: any): any;
}
