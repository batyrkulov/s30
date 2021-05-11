import * as React from 'react';

import { Button } from '~/view/components/ui-kit/button';
import { Logo } from '~/view/components/ui-kit/logo';

import styles from './styles.pcss';

export const GuestHeader: React.FC = () => {
  return (
    <header className={styles['main-box']}>
      <div className={styles['first-item']}>
        <Logo big />
      </div>
      <div className={styles['second-item']}>
        <Button secondary>create an account</Button>
      </div>
    </header>
  );
};
