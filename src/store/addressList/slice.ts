import { createSlice } from '@reduxjs/toolkit';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '../helpers';
import { RequestSliceStateProperty } from '../types';
import { addressListResponse } from '../../api/addressList.types';
import { SLICE_NAME } from './types';
import * as thunks from './thunks';

interface InitialState {
  fetchAddressListRequest: RequestSliceStateProperty<addressListResponse>;
}

const initialState: InitialState = {
  fetchAddressListRequest: makeRequestSliceStateProperty<addressListResponse>(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clear: (state) => {
      state.fetchAddressListRequest.data = null;
      state.fetchAddressListRequest.error = null;
    },
  },
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchAddressListThunk,
      'fetchAddressListRequest',
    );
  },
});
