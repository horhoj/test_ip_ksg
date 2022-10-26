import { RootState } from '../types';

export const getFetchAddressListRequest = (state: RootState) =>
  state.addressList.fetchAddressListRequest;
