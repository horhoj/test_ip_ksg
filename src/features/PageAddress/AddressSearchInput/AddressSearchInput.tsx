import { useFormik } from 'formik';
import { FC, useCallback, useEffect } from 'react';
import * as yup from 'yup';
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import * as icons from '../../../assets/iconList';
import { addressListSlice } from '../../../store/addressList';
import styles from './AddressSearchInput.module.scss';

const DEBOUNCE_DELAY = 300;

interface InitialValues {
  findValue: string;
}

const validationSchema = yup.object({
  findValue: yup
    .string()
    .required('Не должно быть пустым!')
    .min(3, 'не менее 3 символов для запроса адреса!'),
});

const INITIAL_VALUES: InitialValues = { findValue: '' };

export const AddressSearchInput: FC = () => {
  const dispatch = useAppDispatch();
  const fetchAddressListRequest = useAppSelector(
    addressListSlice.selectors.getFetchAddressListRequest,
  );

  useEffect(() => {
    if (fetchAddressListRequest.error) {
      const messageError = `При запросе к АПИ возникла ошибка!  Подробности: <${
        fetchAddressListRequest.error?.errorMsg ?? 'Нет подробностей>'
      }> `;

      alert(messageError);
    }
  }, [fetchAddressListRequest.error]);

  const handleSubmit = useCallback(
    debounce((values: InitialValues) => {
      dispatch(addressListSlice.thunks.fetchAddressListThunk(values.findValue));
    }, DEBOUNCE_DELAY),
    [],
  );

  const formik = useFormik<InitialValues>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form
        className={styles.wrap}
        noValidate
        autoComplete={'off'}
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          placeholder="Введите адрес для поиска..."
          className={styles.input}
          {...formik.getFieldProps('findValue')}
        />

        <button className={styles.button} type={'submit'}>
          {icons.addressSearchInputIcFinderIcon}
          <span>Поиск</span>
        </button>
      </form>
      {Boolean(formik.touched.findValue) &&
        Boolean(formik.errors.findValue) && (
          <div className={styles.msgError}>{formik.errors.findValue}</div>
        )}
    </div>
  );
};
