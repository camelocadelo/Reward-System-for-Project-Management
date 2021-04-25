export interface CartPageProps {
  onGetCartItems(): void;
  cartItems: any;
  onDeleteFromCart?: any;
  onMakePurchase?: any;
  userPurchases?: any;
  onGetUserPurchases?: any;
}
