import axios, { AxiosResponse } from 'axios';
import { ProductInterface, UserInterface } from 'src/schemas/Product';

const getProductList = (): Promise<AxiosResponse<ProductInterface[]>> => {
  return axios.get('/dummy/response_1670175131582.json');
};

const getProductData = (id: number): Promise<AxiosResponse<ProductInterface>> => {
  return axios.get('/dummy/response_1670175149440.json');
};

const getUserData = (id: number): Promise<AxiosResponse<UserInterface>> => {
  return axios.get('/dummy/response_1670175159079.json');
};

export { getProductList, getProductData, getUserData };
