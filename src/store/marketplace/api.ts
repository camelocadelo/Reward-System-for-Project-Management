import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');

const getMarketplaceProductsUrl = `${API_URL}/marketplace/getProducts`;
export const getMarketplaceProducts = () =>
  API.stdApiGET({ url: getMarketplaceProductsUrl, token: access_token });
