import {lazy} from 'react';
import {retry} from '../utils';

export const allRoute = [
  {
    path: '/',
    component: lazy(() =>
      retry(() => import(/* webpackChunkName: "Landing" */ '../pages/landing')),
    ),
  },
  {
    component: lazy(() =>
      retry(
        () =>
          import(
            /* webpackChunkName: "Dashboard Layout" */ '../layout/dashboard'
          ),
      ),
    ),
    children: [
      {
        path: '/dashboard',
        component: lazy(() =>
          retry(
            () =>
              import(/* webpackChunkName: "Landing" */ '../pages/dashboard'),
          ),
        ),
      },
      {
        path: '/profile',
        component: lazy(() =>
          retry(
            () =>
              import(
                /* webpackChunkName: "Profile" */ '../pages/dashboard/profile'
              ),
          ),
        ),
      },
    ],
  },
];
