export type FormValues = {
  readonly bonus_amount: string;
};

export enum FormInputs {
  bonus_amount = 'bonus_amount',
}

export interface ReducePointsModalProps {
  onCloseModal?: any;
  onReducePointsFormSubmit?: any;
}
