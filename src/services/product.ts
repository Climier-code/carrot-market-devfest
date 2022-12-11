import { AxiosResponse } from 'axios';
import { ProductInterface } from 'src/schemas/Product';
import client from './_client';

export const getProductList = (): Promise<AxiosResponse<ProductInterface[]>> => {
  return client.get('/product');
};

export const getProductData = (productId: number): Promise<AxiosResponse<ProductInterface>> => {
  return client.get(`/product/${productId}`);
};
