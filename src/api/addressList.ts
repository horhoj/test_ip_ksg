import axios, { AxiosRequestConfig } from 'axios';
import { addressListResponse } from './addressList.types';

const axiosInstance = axios.create({
  baseURL:
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Token 4dc3820a2c62d971e3c1b99f8957262889c7b16f`,
  },
});

export const getAddressList = async (
  query: string,
): Promise<addressListResponse> => {
  const requestConfig: AxiosRequestConfig = {
    url: '/',
    method: 'get',
    params: {
      query,
      count: 20,
    },
  };
  const response = await axiosInstance.request<addressListResponse>(
    requestConfig,
  );

  return response.data;
};
