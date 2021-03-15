export interface ProductsListProps {
  marketplaceProducts: any;
  onGetMarketplaceProducts(): void;
  onDeleteMarketplaceProduct(pk: number): void;
}
