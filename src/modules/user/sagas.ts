import { ActionType, getType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'typed-redux-saga';

import { resetStore } from '~/modules/app/actions';
import { User } from '~/services/api/User';

import { setAuth, setUser, signIn, signOut } from './actions';

function* signInSaga(action: ActionType<typeof signIn>): SagaIterator {
  try {
    const { user, accessToken, refreshToken } = yield* call(User.signIn, { ...action.payload });
    console.log({ user });
    yield* put(setUser(user));
    yield* put(setAuth({ access: accessToken, refresh: refreshToken }));
  } catch (e) {
    window.alert('Something went wrong');
  }
}

function* signOutSaga(): SagaIterator {
  yield* put(resetStore());
}

export function* watchUser(): SagaIterator {
  yield* takeLatest(getType(signOut), signOutSaga);
  yield* takeLatest(getType(signIn), signInSaga);
}
