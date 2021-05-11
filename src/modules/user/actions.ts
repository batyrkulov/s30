import { createAction } from 'deox';

import { UserProfileModel } from '~/types/models/user';

export const setUser = createAction('user/SET_USER', resolve => (payload: UserProfileModel) =>
  resolve(payload),
);

export const getProfile = {
  request: createAction('user/GET_PROFILE_REQUEST'),
  success: createAction('user/GET_PROFILE_SUCCESS'),
  fail: createAction('user/GET_PROFILE_FAIL'),
};

export const setAuth = createAction(
  'user/SET_AUTH',
  resolve => (payload: Nullable<{ access: string; refresh: string }>) => resolve(payload),
);

export const signOut = createAction('user/SIGN_OUT');

export const signIn = createAction(
  'user/SIGN_IN',
  resolve => (payload: { email: string; password: string }) => resolve(payload),
);
