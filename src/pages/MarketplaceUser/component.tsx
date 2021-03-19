import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import marketplaceActions from 'store/marketplace/actions';
// import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
// import MainButton from 'components/atoms/MainButton/component';
// import ProjectModal from 'components/molecules/ProjectModal/component';
import { MarketplaceUserProps } from './types';
import MarketplaceProduct from 'components/molecules/MarketplaceProduct/component';
import { photoUrls } from './consts';

function MarketplaceUserPage(props: MarketplaceUserProps): JSX.Element {
  const { onGetMarketplaceProducts, marketplaceProducts } = props;

  useEffect(() => {
    onGetMarketplaceProducts();
  }, []);

  console.log('the marketplace user products: ', marketplaceProducts);

  const handleAddCart = () => {
    console.log('adding to cart');
  };

  return (
    <MainTemplate>
      <div>
        <div style={{ marginBottom: '30px' }}>
          <span className="typography__variant-h1"> Marketplace </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {marketplaceProducts &&
            marketplaceProducts.map((p: any, i: number) => (
              <div key={p.pk} style={{ marginRight: '22px' }}>
                <MarketplaceProduct
                  name={p.name}
                  description={p.description}
                  onAddCart={handleAddCart}
                  photo={photoUrls[i].icon}
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
    marketplaceProducts: state.marketplaceReducer.marketplaceProducts.data,
  };
};

const mapDispatchToProps = {
  onGetMarketplaceProducts: marketplaceActions.getMarketplaceProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceUserPage);
