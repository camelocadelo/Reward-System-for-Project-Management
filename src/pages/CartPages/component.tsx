import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import marketplaceActions from 'store/marketplace/actions';
// import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import { CartPageProps } from './types';
import MarketplaceProduct from 'components/molecules/MarketplaceProduct/component';

function MarketplaceUserPage(props: CartPageProps): JSX.Element {
  const { onGetCartItems, cartItems } = props;

  useEffect(() => {
    onGetCartItems();
  }, []);

  console.log('the marketplace user products: ', cartItems);

  const handleAddCart = (pk: any) => {
    console.log('adding to cart', pk);
  };

  return (
    <MainTemplate>
      <div>
        <div style={{ marginBottom: '30px' }}>
          <span className="typography__variant-h1"> My Cart </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {cartItems &&
            cartItems.map((p: any, i: number) => (
              <div key={p.pk} style={{ marginRight: '22px' }}>
                <MarketplaceProduct
                  pk={p.pk}
                  name={p.name}
                  description={p.description}
                  onAddCart={handleAddCart}
                  // photo={photoUrls[i].icon}
                />
              </div>
            ))}
        </div>
      </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.marketplaceReducer.marketplaceProducts.data,
  };
};

const mapDispatchToProps = {
  onGetCartItems: marketplaceActions.getCartItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceUserPage);
