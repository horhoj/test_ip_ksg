import { configureStore } from '@reduxjs/toolkit';
import { addressListSlice } from './addressList';
import { appSlice } from './app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    addressList: addressListSlice.reducer,
  },
});
