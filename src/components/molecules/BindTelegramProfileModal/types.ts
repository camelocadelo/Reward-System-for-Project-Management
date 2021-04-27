export type FormValues = {
  readonly telegramProfileCode: string;
};

export enum FormInputs {
  telegramProfileCode = 'telegramProfileCode',
}

export interface BindTelegramProfileModalProps {
  onCloseModal?: any;
  onTelegramProfileFormSubmit?: any;
}
