import { combineReducers } from 'redux';
import { GET_MARKETPLACE_PRODUCTS } from 'store/marketplace/types';

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

const marketplaceReducer = combineReducers({
  marketplaceProducts,
});

export default marketplaceReducer;
