import React, { useState } from 'react';
import { MarketplaceProductProps } from './types';
// import { Link } from 'react-router-dom';
import './index.scss';
import projectActions from 'store/project/actions';
import { connect } from 'react-redux';
import BorderedButton from 'components/atoms/BorderedButton/component';
import Counter from 'components/molecules/Counter/component';
import SizeTag from 'components/atoms/SizeTag/component';
// import CircularProgress from '@material-ui/core/CircularProgress';

function MarketplaceProduct(props: MarketplaceProductProps): JSX.Element {
  const { name, description, photo, onAddCart, pk, addedCartItemState } = props;

  const available_sizes = ['xs', 'M', 'l', 'xl'];

  const [selectedQuantity, setSelectedQuantity] = useState<number>();
  const [selectedSize, setSelectedSize] = useState<string>(available_sizes[0]);

  const handleChangeQuantity = (quantity: number) => {
    setSelectedQuantity(quantity);
  };

  // const [selectedSizes, setSelectedSizes] = useState<string[]>([available_sizes[0]]);

  console.log('the selec', selectedSize);
  console.log('the quantity from marketplace product: ', selectedQuantity);

  console.log('the added cart item state: ', addedCartItemState);

  const handleAddCart = () => {
    onAddCart(pk, selectedSize);
  };

  const handleClickSize = (size: any) => {
    if (selectedSize === size) {
      setSelectedSize('');
    } else {
      setSelectedSize(size);
    }
    console.log('the size isss: ', size);
  };

  return (
    <>
      <div className="marketplace-product">
        <div style={{ marginTop: '18px', marginBottom: '18px' }}>
          <div className="product-top">
            <img
              src={photo}
              style={{ width: '325px', height: '160px', objectFit: 'cover' }}
              alt="Marketplace product"
            />
          </div>
          <div className="product-bottom">
            <div>
              <span className="typography__variant-h2">{name}</span>
            </div>
            <div>
              <span className="typography__variant-subtext">
                {description.substr(0, 50)}
                {description.length > 49 ? '...' : ''}
              </span>
            </div>
            <div style={{ marginTop: '9px', display: 'flex' }}>
              {available_sizes.map((av: any, i: number) => (
                <div style={{ marginRight: '8px' }} key={i}>
                  <SizeTag
                    size={av}
                    isSelected={selectedSize === av}
                    onClickSize={handleClickSize}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: '11px', display: 'flex', alignItems: 'flex-start' }}>
              <Counter onChangeQuantity={handleChangeQuantity} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <BorderedButton text="Add to cart" onSendBonuses={handleAddCart} color="#02A0FC" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    addedCartItemState: state.marketplaceReducer.addedCartItem.data,
  };
};

const mapDispatchToProps = {
  onDeleteProject: projectActions.deleteProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceProduct);
