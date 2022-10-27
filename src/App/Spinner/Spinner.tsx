import React, { FC } from 'react';
import { addressListSlice } from '../../store/addressList';
import { useAppSelector } from '../../store/hooks';

import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const addressSliceIsLoading = useAppSelector(
    addressListSlice.selectors.getIsLoading,
  );

  const isLoading = addressSliceIsLoading;

  return isLoading ? <div className={styles.Spinner} /> : null;
};
