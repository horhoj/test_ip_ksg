import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRedirectUrl } from './types';

interface InitialState {
  redirectUrl: AppRedirectUrl | null;
  isShowLeftMenu: boolean;
  isShowBurgerMenu: boolean;
  isMobile: boolean;
}

const initialState: InitialState = {
  redirectUrl: null,
  isShowLeftMenu: true,
  isShowBurgerMenu: false,
  isMobile: true,
};

export const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // в компоненте RedirectExecutor мы отслеживаем изменение
    // redirectUrl и соответственно делаем redirect
    // это нужно что бы не привязывать компоненты к роутеру
    // и была возможность делать переадресацию из redux-middleware
    // без доступа напрямую к HISTORY API
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectUrl = {
        path: action.payload,
      };
    },
    setIsShowLeftMenu: (state, action: PayloadAction<boolean>) => {
      state.isShowLeftMenu = action.payload;
    },
    setIsShowBurgerMenu: (state, action: PayloadAction<boolean>) => {
      state.isShowBurgerMenu = action.payload;
    },
    toggleShowLeftMenu: (state) => {
      state.isShowLeftMenu = !state.isShowLeftMenu;
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});
