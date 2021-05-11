import classNames from 'classnames';
import * as React from 'react';

import styles from './styles.pcss';

interface Props {
  colored?: boolean;
}
export const Loader: React.FC<Props> = ({ colored = false }) => (
  <div
    className={classNames(styles['loader'], {
      [styles['loader--colored']]: colored,
    })}
  />
);
