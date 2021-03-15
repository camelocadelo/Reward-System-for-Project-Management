import * as API from 'store/defaultApi';
import { API_URL } from 'core/server';

const access_token = localStorage.getItem('access_token');

const getMarketplaceProductsUrl = `${API_URL}/marketplace/getProducts`;
export const getMarketplaceProducts = () =>
  API.stdApiGET({ url: getMarketplaceProductsUrl, token: access_token });

const addMarketplaceProductUrl = `${API_URL}/marketplace/addProduct`;
export const addMarketplaceProduct = (data: any) =>
  API.stdApiPOST({
    url: addMarketplaceProductUrl,
    token: access_token,
    data,
  });

const deleteMarketplaceProductUrl = `${API_URL}/marketplace/deleteProduct/`;
export const deleteMarketplaceProduct = (productPk: number) =>
  API.stdApiDELETE({ url: `${deleteMarketplaceProductUrl}${productPk}`, token: access_token });
