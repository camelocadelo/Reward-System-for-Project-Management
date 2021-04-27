import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import marketplaceActions, { makePurchase } from 'store/marketplace/actions';
// import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import 'pages/MarketplaceAdmin/ProductsList/ProductRow/index.scss';
import { CartPageProps } from './types';
import CartItem from 'components/molecules/CartItem/component';
import { photoUrls } from 'pages/MarketplaceUser/consts';
import MainButton from 'components/atoms/MainButton/component';
import RegisterSuccessModal from 'components/molecules/RegisterSuccessModal/component';
import MarketplaceOrdersTable from 'pages/MarketplaceAdmin/ProductsList/Tabs/Orders/component';

function MarketplaceUserPage(props: CartPageProps): JSX.Element {
  const {
    onGetCartItems,
    cartItems,
    onDeleteFromCart,
    onMakePurchase,
    userPurchases,
    onGetUserPurchases,
  } = props;

  const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
  const [isPurchasedModal, setIsPurchasedModal] = useState<boolean>(false);
  const [step, setStep] = useState(0);
  const tabs = ['My Cart', ' My Purchases'];

  useEffect(() => {
    onGetCartItems();
    onGetUserPurchases();
  }, []);

  const handleMakePurchase = (pk: any, size: any, selectedQuantity: any) => {
    onMakePurchase &&
      onMakePurchase({
        onSuccess: (response: any) => {
          setIsPurchasedModal(true);
          console.log('the returned success response: ', response);
          // const { data } = response?.createdTagState;
        },
      });
  };

  const handleDeleteFromCart = (pk: any) => {
    onDeleteFromCart &&
      onDeleteFromCart(
        {
          product_pk: pk,
        },
        {
          onSuccess: (response: any) => {
            setIsSuccessModal(true);
            onGetCartItems();
            console.log('the returned success response: ', response);
            // const { data } = response?.createdTagState;
          },
        }
      );
    console.log('the deleted cart item pk: ', pk);
  };

  const handleModalOk = () => {
    setIsSuccessModal(false);
  };

  const handlePurchaseModalOk = () => {
    setIsPurchasedModal(false);
  };

  return (
    <MainTemplate>
      <div>
        <div style={{ marginBottom: '30px', display: 'flex' }}>
          {tabs.map((tab, idx) => (
            <div
              key={tab}
              onClick={() => setStep(idx)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '10px',
                marginRight: '25px',
                border: step === idx ? '1px solid #191970' : 'none',
                backgroundColor: step === idx ? 'white' : 'transparent',
                color: step === idx ? '#191970' : 'black',
              }}
            >
              <span className="typography__variant-h1"> {tab} </span>
            </div>
          ))}
        </div>
        {step === 0 ? (
          <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {cartItems &&
                cartItems.map((p: any, i: number) => (
                  <div key={p.pk} style={{ marginRight: '22px' }}>
                    <CartItem
                      pk={p.product}
                      name={p.product_name}
                      quantity={p.quantity}
                      chosen_size={p.chosen_size}
                      // description={p.description}
                      photo={p.photo}
                      onRemoveFromCart={handleDeleteFromCart}
                    />
                  </div>
                ))}
            </div>
            {cartItems && cartItems.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '150px' }}>
                <div style={{ width: 'fit-content' }}>
                  <MainButton buttonText="Buy" onCreateProject={handleMakePurchase} />
                </div>
              </div>
            )}
            {cartItems && cartItems.length === 0 && (
              <div>
                <span className="typography__variant-subtext" style={{ fontSize: '22px' }}>
                  Your cart is empty
                </span>
              </div>
            )}
          </div>
        ) : (
          <div>
            <MarketplaceOrdersTable marketplaceOrders={userPurchases} />
          </div>
        )}
      </div>
      {isSuccessModal && (
        <RegisterSuccessModal
          titleText="You have successfully deleted the item from cart"
          onClickModalOk={handleModalOk}
        />
      )}
      {isPurchasedModal && (
        <RegisterSuccessModal
          titleText="You have successfully puchased the items in your cart"
          onClickModalOk={handlePurchaseModalOk}
        />
      )}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.marketplaceReducer.cartItems.data,
    userPurchases: state.marketplaceReducer.userPurchases.data,
  };
};

const mapDispatchToProps = {
  onGetCartItems: marketplaceActions.getCartItems,
  onGetUserPurchases: marketplaceActions.viewUserPurchases,
  onDeleteFromCart: marketplaceActions.deleteFromCart,
  onMakePurchase: marketplaceActions.makePurchase,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceUserPage);
