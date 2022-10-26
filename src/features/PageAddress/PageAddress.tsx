import { FC } from 'react';
import styles from './PageAddress.module.scss';
import { AddressSearchInput } from './AddressSearchInput';
import { AddressList } from './AddressList';

export const PageAddress: FC = () => {
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
