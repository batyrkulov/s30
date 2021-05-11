import { createAction } from 'deox';

import { SessionModel } from '~/types/models/session';

export const getSession = {
  request: createAction('streaming/GET_SESSION_REQUEST', resolve => (payload: { id: number }) =>
    resolve(payload),
  ),
  success: createAction('streaming/GET_SESSION_SUCCESS', resolve => (payload: SessionModel) =>
    resolve(payload),
  ),
  fail: createAction('streaming/GET_SESSION_FAIL'),
};
