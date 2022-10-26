import React from 'react';
import styles from './App.module.scss';
import { Header } from './Header';
import { LeftMenu } from './LeftMenu';
import { Main } from './Main';
import { Spinner } from './Spinner';

export const App: React.FC = () => {
  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <Header />
        <div className={styles.horizontalSplit}>
          <LeftMenu />
          <Main />
        </div>
      </div>
    </>
  );
};
