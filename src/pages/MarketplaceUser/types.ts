export interface MarketplaceUserProps {
  onGetMarketplaceProducts(): void;
  marketplaceProducts: any;
  onAddToCart?(data: any, callbacks?: any): void;
}
