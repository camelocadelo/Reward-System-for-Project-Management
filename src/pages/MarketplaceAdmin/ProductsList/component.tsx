import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import marketplaceActions from 'store/marketplace/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import MainButton from 'components/atoms/MainButton/component';
import MarketplacePrizesTable from 'pages/MarketplaceAdmin/ProductsList/Tabs/Prizes/component';
import './index.scss';
import { ProductsListProps } from './types';

function ProductsList(props: ProductsListProps) {
  const { marketplaceProducts, onGetMarketplaceProducts } = props;
  const [isOrdersTable, setIsOrdersTable] = useState<boolean>(false);

  const handleOrderTab = () => {
    setIsOrdersTable(true);
  };

  const handlePrizeTab = () => {
    setIsOrdersTable(false);
  };

  useEffect(() => {
    onGetMarketplaceProducts();
  }, []);

  console.log('the marketplace products: ', marketplaceProducts);

  return (
    <MainTemplate>
      <div>
        <div className="marketplace-header">
          <span className="typography__variant-h1"> Marketplace Management </span>
          <div style={{ marginTop: '24px', marginBottom: '24px' }}>
            <span className="typography__variant-subtext">
              In this section you can create, edit and delete prizes of marketplace
            </span>
          </div>
          <hr
            style={{
              border: '0.5px solid gray',
              width: '100%',
              opacity: '0.1',
              marginBottom: '24px',
            }}
            className="sidebar-horizontal-line"
          />
          <div className="marketplace-header-buttons">
            <div style={{ marginRight: '10px' }}>
              <MainButton buttonText="Prizes" onCreateProject={handlePrizeTab} />
            </div>
            <div>
              <MainButton
                buttonText="Orders"
                bgColor="#FFE5D3"
                textColor="#4339F2"
                onCreateProject={handleOrderTab}
              />
            </div>
          </div>
        </div>
        <div className="marketplace-table">
          <span className="typography__variant-h2">
            {isOrdersTable ? 'Orders' : 'Prizes'}
            {marketplaceProducts ? ` (${marketplaceProducts.length})` : ' (0)'}
          </span>
          {isOrdersTable ? (
            <div> Marketplace orders table </div>
          ) : (
            <MarketplacePrizesTable marketplaceProducts={marketplaceProducts} />
          )}
        </div>
      </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    marketplaceProducts: state.marketplaceReducer.marketplaceProducts.data,
  };
};

const mapDispatchToProps = {
  onGetMarketplaceProducts: marketplaceActions.getMarketplaceProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
