import * as React from 'react';

import { MainHeader } from '~/view/components/header/main-header';
import { SessionForm } from '~/view/components/session-form';
import styles from '~/view/styles/pages-styles/sessionStreamingPage.pcss';

export const SessionStreamingPage: React.FC = () => {
  return (
    <div className={styles['wrapper']}>
      <MainHeader />
      <div className={styles['session-wrapper']}>
        <div className={styles['heading']}>
          <div className={styles['heading__text']}>drip drip</div>
          <button className={styles['button']}>start</button>
        </div>
        <SessionForm />
      </div>
    </div>
  );
};
