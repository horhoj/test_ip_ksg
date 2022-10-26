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
  reducers: {},
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchAddressListThunk,
      'fetchAddressListRequest',
    );
  },
});
