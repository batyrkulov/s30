import classNames from 'classnames';
import * as React from 'react';

import formStyles from '~/view/styles/form.pcss';

interface Props extends Omit<React.AllHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  error?: string;
  variant?: 'first';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = ({ className, variant, error, ...inputProps }) => {
  return (
    <>
      <input
        className={classNames(className, formStyles[`form__${variant}__input`], {
          [`${formStyles[`form__${variant}__input--error`]}`]: Boolean(error),
        })}
        type="text"
        {...inputProps}
      />
      {error && <div className={formStyles[`form__${variant}__error`]}>{error}</div>}
    </>
  );
};
