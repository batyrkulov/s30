import * as classNames from 'classnames';
import * as React from 'react';

import styles from './styles.pcss';

interface Props {
  name: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ name, className = '', children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={classNames(styles['container'], className)}
  >
    <use xlinkHref={`#${name}-icon`} />
    {children}
  </svg>
);
