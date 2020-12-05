export interface ProjectDetailPageProps {
  projectActivitiesState: any;
  onGetProjectActivities(id: string): void;
  onAddTeamMember: any;
  addedTeamMemberState: any;
  onGetProjectMembers: any;
  projectMembersState: any;
}
