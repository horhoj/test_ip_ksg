import { FC } from 'react';
import headerLogoImg from '../../assets/img/header__logo.svg';
import headerIcPersonImg from '../../assets/img/header__ic-person.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appSlice } from '../../store/app';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const isShowBurgerMenu = useAppSelector(
    appSlice.selectors.getIsSHowBurgerMenu,
  );

  const dispatch = useAppDispatch();

  const handleBurgerMenuClick = () => {
    dispatch(appSlice.actions.toggleShowLeftMenu());
  };

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
        {isShowBurgerMenu && (
          <button className={styles.burgerMenu} onClick={handleBurgerMenuClick}>
            <div />
            <div />
            <div />
          </button>
        )}
      </div>
    </header>
  );
};
