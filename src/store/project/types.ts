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

export type CreateProjectRequest = {
  readonly name: string;
  readonly telegram_bonus: number;
  readonly git_bonus: number;
  readonly slack_bonus: number;
};
