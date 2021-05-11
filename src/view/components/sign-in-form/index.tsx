import { useFormik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as UserActions from '~/modules/user/actions';
import { globalErrorName, handleRequestError } from '~/utils/handleRequestError';
import { Button } from '~/view/components/ui-kit/button';
import { TextInput } from '~/view/components/ui-kit/input/text';
import { Modal } from '~/view/components/ui-kit/modal';
import commonStyles from '~/view/styles/common.pcss';

import styles from './styles.pcss';

const initialValues = {
  email: '',
  password: '',
};

interface Values {
  email: string;
  password: string;
}

export const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [forgotPasswordModalIsOpen, setForgotPasswordModalOpen] = React.useState<boolean>(false);

  const closeForgotPasswordModal = React.useCallback(() => {
    setForgotPasswordModalOpen(false);
  }, []);

  const handleSubmit = React.useCallback(async (values, { setSubmitting, setErrors }) => {
    try {
      dispatch(UserActions.signIn({ email: values.email, password: values.password }));
      history.push('/');
    } catch (e) {
      const errors = handleRequestError(e);
      if (errors[globalErrorName]) {
        window.alert(errors[globalErrorName]);
        return;
      }
      setErrors({ email: errors.email, password: errors.password });
    } finally {
      setSubmitting(false);
    }
  }, []);

  const form = useFormik<Values>({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={commonStyles['sm-label']} htmlFor="fchID">
              Enter Franchise ID
            </label>
          </div>
          <TextInput
            variant="first"
            name="email"
            onChange={form.handleChange}
            value={form.values.email}
          />
        </div>
        <div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={commonStyles['sm-label']} htmlFor="password">
              Enter password
            </label>
          </div>
          <TextInput
            variant="first"
            id="password"
            name="password"
            onChange={form.handleChange}
            value={form.values.password}
          />
        </div>
        <div className={styles['link-box']}>
          <button type="button" onClick={() => setForgotPasswordModalOpen(true)}>
            Forgot password?
          </button>
        </div>
        <div className={styles['button-box']}>
          <Button type="submit">Login</Button>
        </div>
      </form>
      <Modal isOpen={forgotPasswordModalIsOpen} onClose={closeForgotPasswordModal}>
        <div className={styles['helper-box-head']}>
          <div>
            <h3>forgot password?</h3>
          </div>
        </div>
        <div className={styles['helper-box-desc']}>
          We will send a SMS with 6-digit verification code to the your phone number.
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <div>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="number">Enter phone number</label>
            </div>
            <input id="number" />
          </div>
          <Button>send code</Button>
        </form>
      </Modal>
    </>
  );
};
