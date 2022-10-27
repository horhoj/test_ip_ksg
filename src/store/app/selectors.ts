import { RootState } from '../types';
import { AppRedirectUrl } from './types';

export const getRedirectUrl = (state: RootState): AppRedirectUrl | null =>
  state.app.redirectUrl;

export const getIsShowLeftMenu = (state: RootState): boolean =>
  state.app.isShowLeftMenu;

export const getIsSHowBurgerMenu = (state: RootState): boolean =>
  state.app.isShowBurgerMenu;

export const getIsMobile = (state: RootState): boolean => state.app.isMobile;
