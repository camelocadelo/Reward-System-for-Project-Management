export interface CartPageProps {
  onGetCartItems(): void;
  cartItems: any;
  onDeleteFromCart?: any;
  onMakePurchase(callbacks?: any): any;
  userPurchases?: any;
  onGetUserPurchases?: any;
}
