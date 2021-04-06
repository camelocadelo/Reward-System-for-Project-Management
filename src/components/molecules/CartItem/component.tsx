import React, { useState } from 'react';
import { CartItemProps } from './types';
import './index.scss';
import marketplaceActions from 'store/marketplace/actions';
import { connect } from 'react-redux';
import BorderedButton from 'components/atoms/BorderedButton/component';
import Counter from 'components/molecules/Counter/component';
import SizeTag from 'components/atoms/SizeTag/component';
// import CircularProgress from '@material-ui/core/CircularProgress';

function CartItem(props: CartItemProps): JSX.Element {
  const { pk, name, photo, quantity, chosen_size, onRemoveFromCart } = props;

  // const [curQuantity, setCurQuantity] = useState<any>(quantity);

  const available_sizes = ['xs', 's', 'm', 'l', 'xl'];

  const [selectedQuantity, setSelectedQuantity] = useState<number>(quantity || 0);
  const [selectedSize, setSelectedSize] = useState<string>(chosen_size || '');

  const handleChangeQuantity = (quantity: number) => {
    setSelectedQuantity(quantity);
  };

  // const [selectedSizes, setSelectedSizes] = useState<string[]>([available_sizes[0]]);

  const handleRemoveFromCart = () => {
    onRemoveFromCart(pk);
  };

  const handleClickSize = (size: any) => {
    if (selectedSize === size) {
      setSelectedSize('');
    } else {
      setSelectedSize(size);
    }
  };

  console.log('the size isss: ', selectedSize);

  console.log('the selected quan of cart item: ', selectedQuantity);

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
              <Counter onChangeQuantity={handleChangeQuantity} propQuantity={selectedQuantity} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <BorderedButton text="Remove" onSendBonuses={handleRemoveFromCart} color="#02A0FC" />
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
  removeFromCart: marketplaceActions.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
