import { createReducer } from 'deox';
import produce from 'immer';

import { getSession } from '~/modules/streaming/actions';
import { StreamingState } from '~/modules/streaming/types';
import { AsyncStatus } from '~/types';
import { BlockType } from '~/types/models/block';

const initialState: StreamingState = {
  session: {
    id: 1,
    name: '',
    music: '',
    prehypeVideo: '',
    blocks: {
      [BlockType.A]: {
        id: 1,
        code: BlockType.A,
        name: '',
        exercises: [],
        breakTime: '',
        trainingTime: '',
        advertisement: '',
      },
      [BlockType.B]: {
        id: 2,
        code: BlockType.B,
        name: '',
        exercises: [],
        breakTime: '',
        trainingTime: '',
        advertisement: '',
      },
      [BlockType.C]: {
        id: 3,
        code: BlockType.C,
        name: '',
        exercises: [],
        breakTime: '',
        trainingTime: '',
        advertisement: '',
      },
    },
  },
  status: AsyncStatus.IDLE,
};

export const streamingReducer = createReducer(initialState, handle => [
  handle(getSession.request, state =>
    produce(state, draft => {
      draft.status = AsyncStatus.LOADING;
    }),
  ),
  handle(getSession.success, (state, { payload }) =>
    produce(state, draft => {
      draft.session = payload;
      draft.status = AsyncStatus.SUCCESS;
    }),
  ),
  handle(getSession.fail, state =>
    produce(state, draft => {
      draft.status = AsyncStatus.FAIL;
    }),
  ),
]);
