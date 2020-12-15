export interface ProjectMembersCardProps {
  readonly members?: ProjectMember[];
}

export type ProjectMember = {
  readonly pk: number;
  readonly username: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly account_bonus: number;
};