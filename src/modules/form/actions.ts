import { createAction } from 'deox';

import { BlocksFormValues, ExerciseItemValues, SessionFormValues } from '~/modules/form/types';
import { BlockType } from '~/types/models/block';
import { SessionMedia } from '~/types/models/session';

export const changeSessionValues = createAction(
  'form/CHANGE_SESSION_VALUES',
  resolve => (payload: Partial<SessionFormValues>) => resolve(payload),
);

export const changeBlockValues = createAction(
  'form/CHANGE_BLOCK_VALUES',
  resolve => (payload: { blockCode: BlockType; values: Partial<BlocksFormValues> }) =>
    resolve(payload),
);

export const changeExerciseValues = createAction(
  'form/CHANGE_BLOCK_VALUES',
  resolve => (payload: {
    blockCode: BlockType;
    index: number;
    values: Partial<ExerciseItemValues>;
  }) => resolve(payload),
);

export const setBlock = {
  request: createAction('form/SET_BLOCK_REQUEST', resolve => (payload: { blockId: number }) =>
    resolve(payload),
  ),
  success: createAction('form/SET_BLOCK_SUCCESS'),
  fail: createAction('form/SET_BLOCK_FAIL'),
};

export const updateBlock = {
  request: createAction('form/UPDATE_BLOCK_REQUEST', resolve => (payload: { blockId: number }) =>
    resolve(payload),
  ),
  success: createAction('form/UPDATE_BLOCK_SUCCESS'),
  fail: createAction('form/UPDATE_BLOCK_FAIL'),
};

export const updateSessionMedia = {
  request: createAction(
    'form/UPDATE_SESSION_MEDIA_REQUEST',
    resolve => (payload: { sessionId: number; mediaCode: SessionMedia }) => resolve(payload),
  ),
  success: createAction('form/UPDATE_SESSION_MEDIA_SUCCESS'),
  fail: createAction('form/UPDATE_SESSION_MEDIA_FAIL'),
};

export const deleteSessionMedia = {
  request: createAction(
    'form/DELETE_SESSION_MEDIA_REQUEST',
    resolve => (payload: { sessisonId: number; mediaCode: SessionMedia }) => resolve(payload),
  ),
  success: createAction('form/DELETE_SESSION_MEDIA_SUCCESS'),
  fail: createAction('form/DELETE_SESSION_MEDIA_FAIL'),
};

export const addExercise = createAction(
  'form/ADD_EXERCISE',
  resolve => (payload: { blockType: BlockType }) => resolve(payload),
);

export const removeExercise = createAction(
  'form/REMOVE_EXERCISE',
  resolve => (payload: { blockType: BlockType; index: number }) => resolve(payload),
);

export const resetExercises = createAction(
  'form/RESET_EXERCISES',
  resolve => (payload: { blockType: BlockType }) => resolve(payload),
);

export const changeTempoValue = createAction(
  'form/CHANGE_TEMPO_VALUE',
  resolve => (payload: {
    blockType: BlockType;
    exerciseIndex: number;
    tempoIndex: number;
    value: string;
  }) => resolve(payload),
);
