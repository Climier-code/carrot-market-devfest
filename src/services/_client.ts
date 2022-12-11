import axios, { AxiosError } from 'axios';
import { BASE_URL } from 'src/constants/Url';

const client = axios.create({ baseURL: BASE_URL });

client.interceptors.response.use(
  (response) => response,
  (error: AxiosError): Promise<never> => {
    window.alert('알 수 없는 오류가 발생되었습니다.\n잠시 후 다시 이용바랍니다.');

    return Promise.reject(error);
  }
);

export default client;
