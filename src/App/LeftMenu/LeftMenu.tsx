import { FC, useState } from 'react';

import { getRoutePath } from '../../router';
import * as iconList from '../../assets/iconList';
import styles from './LeftMenu.module.scss';
import { LeftMenuItem } from './LeftMenuItem';

export const LeftMenu: FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(true);

  const handleMenuItemClk = (menuItemText: string) => {
    alert(`Вы кликнули по "${menuItemText}"`);
  };

  return (
    <nav className={styles.wrap}>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.LinkList}>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcMainIcon}
            text={'main'}
            link={getRoutePath('main')}
          />
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcFinderIcon}
            text={'Поиск адресов'}
            link={getRoutePath('address')}
          />
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcTableIcon}
            text={'Таблицы'}
            onClick={() => handleMenuItemClk('Таблицы')}
          />
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcCalendarIcon}
            text={'Календарь'}
            onClick={() => handleMenuItemClk('Календарь')}
          />
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcMapIcon}
            text={'Карты'}
            onClick={() => handleMenuItemClk('Карты')}
          />
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcWidgetIcon}
            text={'Виджеты'}
            onClick={() => handleMenuItemClk('Виджеты')}
          />
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcSettingsIcon}
            text={'Настройки'}
            onClick={() => setIsOpenSettings((prev) => !prev)}
            isParentOpen={isOpenSettings}
          >
            <LeftMenuItem
              icon={iconList.leftMenuIcWidgetIcon}
              text={'Настройки профиля'}
              onClick={() => handleMenuItemClk('Настройки профиля')}
            />
            <LeftMenuItem
              icon={iconList.leftMenuIcFinancialManagementIcon}
              text={'Управление финансами'}
              onClick={() => handleMenuItemClk('Управление финансами')}
            />
          </LeftMenuItem>
        </li>
        <li>
          <LeftMenuItem
            icon={iconList.leftMenuIcExitIcon}
            text={'Выход'}
            onClick={() => handleMenuItemClk('Выход')}
          />
        </li>
      </ul>
    </nav>
  );
};
