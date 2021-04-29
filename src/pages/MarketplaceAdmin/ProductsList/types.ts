export interface ProductsListProps {
  marketplaceProducts: any;
  onGetMarketplaceProducts(): void;
  onDeleteMarketplaceProduct(pk: number, callbacks?: any): void;
  allPurchases: any;
  viewAllPurchases(): void;
}
