import { AxiosResponse } from 'axios';
import { UserInterface } from 'src/schemas/Product';
import client from './_client';

export const getUserData = (userId: number): Promise<AxiosResponse<UserInterface>> => {
  return client.get(`users/${userId}`);
};
