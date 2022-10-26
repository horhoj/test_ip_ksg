import { FC } from 'react';
import { Router } from '../../router';
import styles from './Main.module.scss';

export const Main: FC = () => {
  return (
    <main className={styles.wrap}>
      <Router />
    </main>
  );
};
