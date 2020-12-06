export interface ProjectCardProps {
  readonly projectPK: number;
  readonly name: string;
  readonly teamLead: string;
  readonly deletedProjectState?: any;
  readonly onDeleteProject?: any;
}
