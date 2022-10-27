import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addressListSlice } from '../../store/addressList';
import styles from './PageAddress.module.scss';
import { AddressSearchInput } from './AddressSearchInput';
import { AddressList } from './AddressList';

export const PageAddress: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(
    () => () => {
      dispatch(addressListSlice.actions.clear());
    },
    [],
  );

  return (
    <div className={styles.wrap}>
      <h3 className={styles.pageTitle}>Поиск адресов</h3>
      <div className={styles.searchHint}>Введите интересующий вас адрес</div>
      <div className={styles.AddressSearchInputWrap}>
        <AddressSearchInput />
      </div>
      <div className={styles.AddressSearchInputWrap}>
        <AddressList />
      </div>
    </div>
  );
};
