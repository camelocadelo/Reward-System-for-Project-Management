export const CREATE_PROJECT = {
  started: 'CREATE_PROJECT_START',
  success: 'CREATE_PROJECT_SUCCESS',
  failed: 'CREATE_PROJECT_FAILED',
};

export const GET_PROJECTS = {
  started: 'GET_PROJECTS_STARTED',
  success: 'GET_PROJECTS_SUCCESS',
  failed: 'GET_PROJECTS_FAILED',
};

export const GET_PROJECT_ACTIVITIES = {
  started: 'GET_PROJECT_ACTIVITIES_STARTED',
  success: 'GET_PROJECT_ACTIVITIES_SUCCESS',
  failed: 'GET_PROJECT_ACTIVITIES_FAILED',
};

export const ADD_TEAM_MEMBER = {
  started: 'ADD_TEAM_MEMBER_STARTED',
  success: 'ADD_TEAM_MEMBER_SUCCESS',
  failed: 'ADD_TEAM_MEMBER_FAILED',
};

export const GET_PROJECT_MEMBERS = {
  started: 'GET_PROJECT_MEMBERS_STARTED',
  success: 'GET_PROJECT_MEMBERS_SUCCESS',
  failed: 'GET_PROJECT_MEMBERS_FAILED',
};

export type CreateProjectRequest = {
  readonly name: string;
  readonly telegram_bonus: number;
  readonly git_bonus: number;
  readonly slack_bonus: number;
};

export type ProjectActivityResponse = {
  readonly pk: number;
  readonly timestamp: string;
  readonly event_type: string;
  readonly message?: string;
  readonly type?: string;
  readonly event_bonus: string;
  readonly metaData?: string;
  readonly username: string;
};

export type AddTeamMemberRequest = {
  readonly pk: number;
  readonly username: string;
};
