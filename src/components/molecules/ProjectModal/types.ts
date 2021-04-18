export type FormValues = {
  readonly projectName: string;
  readonly telegramBonus: any;
  readonly gitBonus: any;
  readonly slackBonus: any;
};

export enum FormInputs {
  ProjectName = 'projectName',
  TelegramBonus = 'telegramBonus',
  GitBonus = 'gitBonus',
  SlackBonus = 'slackBonus',
}

export interface ProjectModalProps {
  onCloseModal?: any;
  createProject?: any;
  projectData?: any;
  onProjectFormSubmit?: any;
}
