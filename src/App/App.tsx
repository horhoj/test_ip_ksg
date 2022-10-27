import React from 'react';
import { appSlice } from '../store/app';
import { useAppSelector } from '../store/hooks';
import { useApp } from './App.hooks';
import styles from './App.module.scss';
import { Header } from './Header';
import { LeftMenu } from './LeftMenu';
import { Main } from './Main';
import { Spinner } from './Spinner';

export const App: React.FC = () => {
  useApp();

  const isShowLeftMenu = useAppSelector(appSlice.selectors.getIsShowLeftMenu);

  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <Header />
        <div className={styles.horizontalSplit}>
          {isShowLeftMenu && <LeftMenu />}
          <Main />
        </div>
      </div>
    </>
  );
};
