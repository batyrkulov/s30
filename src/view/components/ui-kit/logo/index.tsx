import * as React from 'react';

import logo from '~/view/assets/images/logo.png';

interface Props {
  big?: boolean;
}

export const Logo: React.FC<Props> = ({ big = false }) => (
  <img src={logo} alt="logo" width={big ? '114px' : '104px'} height={big ? '56px' : '54px'} />
);
