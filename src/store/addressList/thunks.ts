import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { SLICE_NAME } from './types';

export const fetchAddressListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchAddressListThunk`,
  async (query: string) => {
    return api.addressList.getAddressList(query);
  },
);
