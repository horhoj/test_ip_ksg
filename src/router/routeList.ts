import { FC } from 'react';
import { Page404 } from '../features/Page404';
import { PageAddress } from '../features/PageAddress';
import { Main } from '../features/PageMain';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['main', 'address', 'page404'] as const;

export type RouteNameList = typeof routeNameList[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  main: {
    path: '/',
    component: Main,
  },

  address: {
    path: '/address',
    component: PageAddress,
  },

  page404: {
    path: '*',
    component: Page404,
  },
};
