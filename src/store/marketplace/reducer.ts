import { combineReducers } from 'redux';
import {
  GET_MARKETPLACE_PRODUCTS,
  ADD_MARKETPLACE_PRODUCT,
  GET_CART_ITEMS,
  ADD_TO_CART,
  MAKE_PURCHASE,
  VIEW_ALL_PURCHASES,
} from 'store/marketplace/types';

const marketplaceProducts = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_MARKETPLACE_PRODUCTS.started:
      return {
        data: null,
        loading: true,
      };
    case GET_MARKETPLACE_PRODUCTS.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case GET_MARKETPLACE_PRODUCTS.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const addedMarketplaceProduct = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case ADD_MARKETPLACE_PRODUCT.started:
      return {
        data: null,
        loading: true,
      };
    case ADD_MARKETPLACE_PRODUCT.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case ADD_MARKETPLACE_PRODUCT.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const cartItems = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case GET_CART_ITEMS.started:
      return {
        data: null,
        loading: true,
      };
    case GET_CART_ITEMS.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case GET_CART_ITEMS.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const addedCartItem = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case ADD_TO_CART.started:
      return {
        data: null,
        loading: true,
      };
    case ADD_TO_CART.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case ADD_TO_CART.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const purchasedItems = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case MAKE_PURCHASE.started:
      return {
        data: null,
        loading: true,
      };
    case MAKE_PURCHASE.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case MAKE_PURCHASE.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const allPurchases = (state = { data: null, loading: false }, action: any): any => {
  switch (action.type) {
    case VIEW_ALL_PURCHASES.started:
      return {
        data: null,
        loading: true,
      };
    case VIEW_ALL_PURCHASES.success:
      const data = action.data;
      return {
        data: data,
        loading: false,
      };
    case VIEW_ALL_PURCHASES.failed:
      return {
        data: null,
        loading: false,
      };
    default:
      return state;
  }
};

const marketplaceReducer = combineReducers({
  marketplaceProducts,
  addedMarketplaceProduct,
  cartItems,
  addedCartItem,
  purchasedItems,
  allPurchases,
});

export default marketplaceReducer;
