export interface ProjectPageProps {
  onGetUserProjects(callbacks?: any): any;
  userProjectsState: any;
  createProject(data: any, callbacks?: any): any;
  deleteProject(projectPk: number, callbacks?: any): any;
}
