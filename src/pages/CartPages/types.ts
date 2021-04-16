export interface CartPageProps {
  onGetCartItems(): void;
  cartItems: any;
  onDeleteFromCart?: any;
  onMakePurchase?: any;
}
