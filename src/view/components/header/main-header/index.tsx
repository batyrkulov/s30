import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from '~/view/components/ui-kit/logo';
import { UserMenu } from '~/view/components/user-menu';

import styles from './styles.pcss';

const navItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Reports',
    path: '/reports',
  },
  {
    label: 'Members',
    path: '/members',
  },
  {
    label: 'Sessions Schedule',
    path: '/schedule',
  },
  {
    label: 'Sessions Streaming',
    path: '/streaming',
  },
];

export const MainHeader: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Logo />
      <nav className={styles['nav-container']}>
        <ul className={styles['nav-items']}>
          {navItems.map(item => (
            <li className={styles['nav-item']}>
              <NavLink to={item.path} className={styles['nav-item__link']}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <UserMenu />
    </div>
  );
};
