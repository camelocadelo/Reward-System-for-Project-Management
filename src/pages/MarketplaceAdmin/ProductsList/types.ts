export interface ProductsListProps {
  marketplaceProducts: any;
  onGetMarketplaceProducts(): void;
  onDeleteMarketplaceProduct(pk: number): void;
  allPurchases: any;
  viewAllPurchases(): void;
}
