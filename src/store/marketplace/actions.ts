import { defaultAction } from 'store/defaultActions';
import * as api from 'store/marketplace/api';

import {
  GET_MARKETPLACE_PRODUCTS,
  ADD_MARKETPLACE_PRODUCT,
  DELETE_MARKETPLACE_PRODUCT,
  GET_CART_ITEMS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  MAKE_PURCHASE,
  VIEW_ALL_PURCHASES,
  VIEW_USER_PURCHASES,
  UPDATE_QUANTITY,
} from './types';

export const getMarketplaceProducts = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_MARKETPLACE_PRODUCTS,
    apiCall: () => {
      return api.getMarketplaceProducts();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const addMarketplaceProduct = (data: any, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: ADD_MARKETPLACE_PRODUCT,
    apiCall: () => {
      return api.addMarketplaceProduct(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const deleteMarketplaceProduct = (productPk: number, callbacks?: any) => (
  dispatch: any,
  getState: any
) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: DELETE_MARKETPLACE_PRODUCT,
    apiCall: () => {
      return api.deleteMarketplaceProduct(productPk);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const getCartItems = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_CART_ITEMS,
    apiCall: () => {
      return api.getCartItems();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const addToCart = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: ADD_TO_CART,
    apiCall: () => {
      return api.addtoCart(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const deleteFromCart = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: DELETE_FROM_CART,
    apiCall: () => {
      return api.deleteFromCart(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const makePurchase = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: MAKE_PURCHASE,
    apiCall: () => {
      return api.makePurchase();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const viewAllPurchases = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: VIEW_ALL_PURCHASES,
    apiCall: () => {
      return api.viewAllPurchases();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const viewUserPurchases = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: VIEW_USER_PURCHASES,
    apiCall: () => {
      return api.viewUserPurchases();
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export const updateQuantity = (data: any, callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UPDATE_QUANTITY,
    apiCall: () => {
      return api.updateQuantity(data);
    },
    onSuccess: (response: any) => ({ data: response }),
    onError: (response: any) => ({ ...response }),
  });
};

export default {
  getMarketplaceProducts,
  addMarketplaceProduct,
  deleteMarketplaceProduct,
  getCartItems,
  addToCart,
  deleteFromCart,
  makePurchase,
  viewAllPurchases,
  viewUserPurchases,
  updateQuantity,
};
