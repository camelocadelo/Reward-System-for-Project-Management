import { defaultAction } from 'store/defaultActions';
import * as api from 'store/marketplace/api';

import { GET_MARKETPLACE_PRODUCTS } from './types';

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

export default {
  getMarketplaceProducts,
};
