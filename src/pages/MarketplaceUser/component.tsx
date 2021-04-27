import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import marketplaceActions from 'store/marketplace/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import { MarketplaceUserProps } from './types';
import MarketplaceProduct from 'components/molecules/MarketplaceProduct/component';
import { photoUrls } from './consts';
import RegisterSuccessModal from 'components/molecules/RegisterSuccessModal/component';

function MarketplaceUserPage(props: MarketplaceUserProps): JSX.Element {
  const { onGetMarketplaceProducts, marketplaceProducts, onAddToCart } = props;

  const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);

  useEffect(() => {
    onGetMarketplaceProducts();
  }, []);

  const handleAddCart = (pk: any, size: any, selectedQuantity: any) => {
    onAddToCart &&
      onAddToCart(
        {
          product_pk: pk,
          quantity: selectedQuantity,
          chosen_size: size,
        },
        {
          onSuccess: (response: any) => {
            setIsSuccessModal(true);
            console.log('the returned success response: ', response);
            // const { data } = response?.createdTagState;
          },
        }
      );
  };

  const handleModalOk = () => {
    setIsSuccessModal(false);
  };

  return (
    <MainTemplate>
      <div>
        <div style={{ marginBottom: '30px' }}>
          <span className="typography__variant-h1"> Marketplace </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {marketplaceProducts &&
            marketplaceProducts.map((p: any, i: number) => (
              <div key={p.pk} style={{ marginRight: '22px', flex: '0 0 30%' }}>
                <MarketplaceProduct
                  pk={p.pk}
                  name={p.name}
                  description={p.description}
                  onAddCart={handleAddCart}
                  photo={p.photo}
                  price={p.price}
                  available_sizes={p.sizes_available}
                />
              </div>
            ))}
        </div>
      </div>
      {isSuccessModal && (
        <RegisterSuccessModal
          onClickModalOk={handleModalOk}
          titleText="The product is successfully added to cart"
        />
      )}
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
  onAddToCart: marketplaceActions.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceUserPage);
