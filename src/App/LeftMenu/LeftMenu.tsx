import { FC, useState } from 'react';

import { getRoutePath } from '../../router';
import * as iconList from '../../assets/iconList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appSlice } from '../../store/app';
import styles from './LeftMenu.module.scss';
import { LeftMenuItemDataItem } from './LeftMenuItem/LeftMenuItem.types';
import { LeftMenuItem } from './LeftMenuItem';

export const LeftMenu: FC = () => {
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);

  const isMobile = useAppSelector(appSlice.selectors.getIsMobile);

  const dispatch = useAppDispatch();

  const menuItemList: LeftMenuItemDataItem[] = [
    {
      id: 1,
      data: {
        icon: iconList.leftMenuIcMainIcon,
        text: 'Главная',
        link: getRoutePath('main'),
      },
    },
    {
      id: 2,
      data: {
        icon: iconList.leftMenuIcFinderIcon,
        text: 'Поиск адресов',
        link: getRoutePath('address'),
      },
    },
    {
      id: 3,
      data: {
        icon: iconList.leftMenuIcTableIcon,
        text: 'Таблицы',
        onClick: () => handleMenuItemClk('Таблицы'),
      },
    },
    {
      id: 4,
      data: {
        icon: iconList.leftMenuIcCalendarIcon,
        text: 'Календарь',
        onClick: () => handleMenuItemClk('Календарь'),
      },
    },
    {
      id: 5,
      data: {
        icon: iconList.leftMenuIcMapIcon,
        text: 'Карты',
        onClick: () => handleMenuItemClk('Карты'),
      },
    },
    {
      id: 6,
      data: {
        icon: iconList.leftMenuIcWidgetIcon,
        text: 'Виджеты',
        onClick: () => handleMenuItemClk('Виджеты'),
      },
    },
    {
      id: 7,
      data: {
        icon: iconList.leftMenuIcSettingsIcon,
        text: 'Настройки',
        onClick: () => setIsOpenSettings((prev) => !prev),
        isParentOpen: isOpenSettings,
      },
      children: [
        {
          id: 9,
          data: {
            icon: iconList.leftMenuIcWidgetIcon,
            text: 'Настройки профиля',
            onClick: () => handleMenuItemClk('Настройки профиля'),
          },
        },
        {
          id: 10,
          data: {
            icon: iconList.leftMenuIcFinancialManagementIcon,
            text: 'Управление финансами',
            onClick: () => handleMenuItemClk('Управление финансами'),
          },
        },
      ],
    },
    {
      id: 8,
      data: {
        icon: iconList.leftMenuIcExitIcon,
        text: 'Выход',
        onClick: () => handleMenuItemClk('Выход'),
      },
    },
  ];

  const handleMenuItemClk = (menuItemText: string) => {
    alert(`Вы кликнули по "${menuItemText}"`);
  };

  const handleCloseMobileMenu = () => {
    dispatch(appSlice.actions.setIsShowLeftMenu(false));
  };

  return (
    <nav className={styles.wrap}>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.LinkList}>
        {menuItemList.map((menuItem) => (
          <li
            key={menuItem.id}
            onClick={() => {
              if (menuItem.children) {
                return;
              }
              isMobile && handleCloseMobileMenu();
            }}
          >
            <LeftMenuItem {...menuItem.data}>
              {menuItem.children?.map((childItem) => (
                <li
                  key={childItem.id}
                  onClick={() => isMobile && handleCloseMobileMenu()}
                >
                  <LeftMenuItem {...childItem.data} />
                </li>
              ))}
            </LeftMenuItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};
