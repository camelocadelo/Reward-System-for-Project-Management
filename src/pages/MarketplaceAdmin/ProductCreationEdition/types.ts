export interface ProductTypes {
  name: string;
  description: string;
  category: string;
  price: string;
  photo?: any;
  sizes_available?: any;
}

export type FormValues = {
  readonly name: string;
  readonly description: any;
  readonly price: any;
  readonly category: any;
  // readonly slackBonus: any;
};

export enum FormInputs {
  name = 'name',
  description = 'description',
  price = 'price',
  category = 'category',
  // SlackBonus = 'slackBonus',
}
