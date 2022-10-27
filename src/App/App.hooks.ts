import { useEffect } from 'react';
import { MOBILE_WIDTH } from '../const';
import { appSlice } from '../store/app';
import { useAppDispatch } from '../store/hooks';

export const useApp = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const resize = () => {
      const { width } = document.body.getBoundingClientRect();

      if (width <= MOBILE_WIDTH) {
        dispatch(appSlice.actions.setIsShowLeftMenu(false));
        dispatch(appSlice.actions.setIsShowBurgerMenu(true));
        dispatch(appSlice.actions.setIsMobile(true));
      } else {
        dispatch(appSlice.actions.setIsShowLeftMenu(true));
        dispatch(appSlice.actions.setIsShowBurgerMenu(false));
        dispatch(appSlice.actions.setIsMobile(false));
      }
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
};
