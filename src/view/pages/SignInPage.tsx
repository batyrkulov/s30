import classNames from 'classnames';
import * as React from 'react';

import { GuestHeader } from '~/view/components/header/guest-header';
import { SignInForm } from '~/view/components/sign-in-form';
import commonStyles from '~/view/styles/common.pcss';
import styles from '~/view/styles/pages-styles/signInPage.pcss';

export const SignInPage: React.FC = () => {
  return (
    <div className={classNames(commonStyles['grid'], commonStyles['grid-1fr'], styles['page-bg'])}>
      <GuestHeader />

      <div className={styles['main-box']}>
        <div className={styles['main-item']}>
          <div className={classNames(commonStyles['gray-window-base'], styles['login-form-box'])}>
            <div>
              <h2>Welcome to S30 web app!</h2>
              <div className={styles['desc']}>
                <p>
                  Manage your clients, invite them to training programs, create a session schedule.
                </p>
              </div>
            </div>
            <div className={styles['login-form-box-second-item']}>
              <SignInForm />
            </div>
          </div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};
