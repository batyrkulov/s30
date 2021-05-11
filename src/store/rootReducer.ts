import { getType } from 'deox';
import { Action, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { resetStore } from '~/modules/app/actions';
import { formReducer } from '~/modules/form/reducer';
import { streamingReducer } from '~/modules/streaming/reducer';
import { userReducer } from '~/modules/user/reducer';
import { RootState } from '~/types';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const appReducer = combineReducers({
  user: userReducer,
  streaming: streamingReducer,
  form: formReducer,
});

const rootReducer = (state: RootState | undefined, action: Action): RootState => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
