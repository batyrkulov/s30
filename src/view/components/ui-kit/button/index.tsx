import classNames from 'classnames';
import * as React from 'react';

import { Loader } from '~/view/components/ui-kit/loader';
import buttonStyles from '~/view/styles/buttons.pcss';

import styles from './styles.pcss';

type Props = {
  children?: React.ReactNode;
  isLoading?: boolean;
  secondary?: boolean;
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

export const Button: React.FC<ButtonProps> = React.memo(props => {
  const { children, isLoading, secondary, type, className = '', ...buttonProps } = props;

  return (
    <button
      type={type ?? 'button'}
      className={classNames(buttonStyles['button'], className, {
        [buttonStyles['button-loading']]: isLoading,
        [buttonStyles['button-2']]: secondary,
      })}
      {...buttonProps}
    >
      <div className={classNames(styles['content'], { [styles['content--loading']]: isLoading })}>
        {children}
      </div>
      {isLoading && (
        <div className={styles['loader-wrapper']}>
          <Loader />
        </div>
      )}
    </button>
  );
});
