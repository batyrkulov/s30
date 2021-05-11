import { createReducer } from 'deox';
import produce from 'immer';

import {
  addExercise,
  changeBlockValues,
  changeExerciseValues,
  changeSessionValues,
  changeTempoValue,
  removeExercise,
  resetExercises,
} from '~/modules/form/actions';
import { ExerciseItemValues, FormState } from '~/modules/form/types';
import { BlockType } from '~/types/models/block';

const exerciseInitialValues: ExerciseItemValues = {
  name: '',
  sets: '',
  reps: '',
  tempo: ['', '', '', ''],
  advertisement: null,
};

const initialState: FormState = {
  sessionValues: {
    name: '',
    music: null,
    prehypeVideo: null,
  },
  blocksValues: {
    [BlockType.A]: {
      name: '',
      exercises: [exerciseInitialValues],
      breakTime: '',
      trainingTime: '',
      advertisement: null,
    },
    [BlockType.B]: {
      name: '',
      exercises: [exerciseInitialValues],
      breakTime: '',
      trainingTime: '',
      advertisement: null,
    },
    [BlockType.C]: {
      name: '',
      exercises: [exerciseInitialValues],
      breakTime: '',
      trainingTime: '',
      advertisement: null,
    },
  },
};

export const formReducer = createReducer(initialState, handle => [
  handle(changeSessionValues, (state, { payload }) =>
    produce(state, draft => {
      draft.sessionValues = { ...state.sessionValues, ...payload };
    }),
  ),
  handle(changeBlockValues, (state, { payload }) =>
    produce(state, draft => {
      draft.blocksValues[payload.blockCode] = {
        ...state.blocksValues[payload.blockCode],
        ...payload.values,
      };
    }),
  ),
  handle(changeExerciseValues, (state, { payload }) =>
    produce(state, draft => {
      draft.blocksValues[payload.blockCode].exercises[payload.index] = {
        ...state.blocksValues[payload.blockCode].exercises[payload.index],
        ...payload.values,
      };
    }),
  ),
  handle(addExercise, (state, { payload }) =>
    produce(state, draft => {
      draft.blocksValues[payload.blockType].exercises.push(exerciseInitialValues);
    }),
  ),
  handle(removeExercise, (state, { payload }) =>
    produce(state, draft => {
      draft.blocksValues[payload.blockType].exercises.splice(payload.index, 1);
    }),
  ),
  handle(resetExercises, (state, { payload }) =>
    produce(state, draft => {
      draft.blocksValues[payload.blockType].exercises = [exerciseInitialValues];
    }),
  ),
  handle(changeTempoValue, (state, { payload }) =>
    produce(state, draft => {
      const exercise = draft.blocksValues[payload.blockType].exercises[payload.exerciseIndex];
      exercise.tempo[payload.tempoIndex] = payload.value;
    }),
  ),
]);
