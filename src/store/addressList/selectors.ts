import { addressListResponse } from '../../api/addressList.types';
import { RequestSliceStateProperty, RootState } from '../types';

export const getFetchAddressListRequest = (
  state: RootState,
): RequestSliceStateProperty<addressListResponse> =>
  state.addressList.fetchAddressListRequest;

export const getIsLoading = (state: RootState): boolean =>
  state.addressList.fetchAddressListRequest.isLoading;
