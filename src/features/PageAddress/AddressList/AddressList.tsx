import { FC } from 'react';
import { addressListSlice } from '../../../store/addressList';
import { useAppSelector } from '../../../store/hooks';
import { getUUID } from '../../../utils/getUUID';
import styles from './AddressList.module.scss';

export const AddressList: FC = () => {
  const fetchAddressListRequest = useAppSelector(
    addressListSlice.selectors.getFetchAddressListRequest,
  );

  const addressList = fetchAddressListRequest.data?.suggestions.map(
    (addressItem) => {
      const { data } = addressItem;
      const result: string[] = [];
      result.push(`${data.country}`);
      result.push(`${data.city_type_full} ${data.city}`);
      result.push(`${data.area_type_full} ${data.area}`);
      result.push(`${data.street_type_full} ${data.street}`);
      result.push(`${data.settlement_type_full} ${data.settlement}`);
      result.push(`${data.house_type_full} ${data.house}`);

      return result.filter((item) => !item.includes(`null`)).join(', ');
    },
  );

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Адреса</h3>
      {addressList && (
        <ul className={styles.addressList}>
          {addressList.map((addressItem) => (
            <li key={getUUID()}>{addressItem} </li>
          ))}
        </ul>
      )}
      {addressList?.length === 0 && (
        <div className={styles.emptyAddressList}>Ничего не найдено</div>
      )}
    </div>
  );
};
