import { FC } from 'react';
import headerLogoImg from '../../assets/img/header__logo.svg';
import headerIcPersonImg from '../../assets/img/header__ic-person.svg';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.logoWrap}>
        <img
          src={headerLogoImg}
          alt="headerLogoImg"
          className={styles.logoImg}
        />
        <div className={styles.logoText}>Wrench CRM</div>
      </div>
      <div className={styles.avatarWrap}>
        <img className={styles.avatarLogo} src={headerIcPersonImg} alt="" />
        <div className={styles.avatarText}>Имя Фамилия</div>
      </div>
    </header>
  );
};
