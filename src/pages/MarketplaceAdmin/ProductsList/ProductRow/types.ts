export interface ProductRowProps {
  readonly key: any;
  readonly pk: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly sizes_available?: any;
  readonly category?: any;
  readonly onProductDelete?: any;
  readonly photo?: any;
}
