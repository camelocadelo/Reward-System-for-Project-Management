export interface CartItemProps {
  readonly pk: any;
  readonly name?: any;
  readonly description?: any;
  readonly photo?: any;
  readonly quantity?: any;
  readonly chosen_size?: any;
  readonly onRemoveFromCart?: any;
  updateQuantity(data: any): any;
}
