import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import marketplaceActions from 'store/marketplace/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import MainButton from 'components/atoms/MainButton/component';
import MarketplacePrizesTable from 'pages/MarketplaceAdmin/ProductsList/Tabs/Prizes/component';
import './index.scss';
import { ProductsListProps } from './types';
import { Link } from 'react-router-dom';
import ProjectDeleteModal from 'components/molecules/ProjectDeleteModal/component';
import MarketplaceOrdersTable from './Tabs/Orders/component';

function ProductsList(props: ProductsListProps) {
  const {
    marketplaceProducts,
    onGetMarketplaceProducts,
    onDeleteMarketplaceProduct,
    viewAllPurchases,
    allPurchases,
  } = props;
  const [isOrdersTable, setIsOrdersTable] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  const [deleteProductPk, setDeleteProductPk] = useState<number>(-1);

  console.log('the delete product pk: ', deleteProductPk);
  console.log('ALL PURCHASES: ', allPurchases);

  const handleOrderTab = () => {
    setIsOrdersTable(true);
  };

  const handlePrizeTab = () => {
    setIsOrdersTable(false);
  };

  useEffect(() => {
    onGetMarketplaceProducts();
    viewAllPurchases();
  }, []);

  const handleDeleteProduct = (pk: number) => {
    setIsDeleteModal(true);
    setDeleteProductPk(pk);
    console.log('THE PRODUCT TO BE DELETED FROM PRODUCT LIST PAGE: ', pk);
  };

  console.log('the marketplace products: ', marketplaceProducts);

  const handleModalOk = () => {
    onDeleteMarketplaceProduct &&
      deleteProductPk &&
      onDeleteMarketplaceProduct(deleteProductPk, {
        onSuccess: () => {
          setIsDeleteModal(false);
          onGetMarketplaceProducts();
        },
      });
    // onDeleteProject && projectPK && onDeleteProject(projectPK);
    //todo
  };

  const handleModalCancel = () => {
    setIsDeleteModal(false);
  };

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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxWidth: '1200px',
            }}
          >
            <span className="typography__variant-h2">
              {isOrdersTable ? 'Orders' : 'Prizes'}
              {isOrdersTable && allPurchases
                ? ` (${allPurchases.length})`
                : marketplaceProducts
                ? ` (${marketplaceProducts.length})`
                : ' (0)'}
            </span>
            {!isOrdersTable && (
              <a href="admin-marketplace/product-creation">
                <MainButton buttonText="+ Create prize" />
              </a>
            )}
          </div>
          {isOrdersTable ? (
            <MarketplaceOrdersTable marketplaceOrders={allPurchases} />
          ) : (
            <MarketplacePrizesTable
              marketplaceProducts={marketplaceProducts}
              onDeleteProduct={handleDeleteProduct}
            />
          )}
        </div>
      </div>
      {isDeleteModal && (
        <ProjectDeleteModal
          text="Are you sure you want to delete this product?"
          onClickCancel={handleModalCancel}
          onClickModalOk={handleModalOk}
        />
      )}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    marketplaceProducts: state.marketplaceReducer.marketplaceProducts.data,
    allPurchases: state.marketplaceReducer.allPurchases.data,
  };
};

const mapDispatchToProps = {
  onGetMarketplaceProducts: marketplaceActions.getMarketplaceProducts,
  onDeleteMarketplaceProduct: marketplaceActions.deleteMarketplaceProduct,
  viewAllPurchases: marketplaceActions.viewAllPurchases,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
