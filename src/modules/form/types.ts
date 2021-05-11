import { BlockType } from '~/types/models/block';

export interface FormState {
  sessionValues: SessionFormValues;
  blocksValues: BlocksFormValues;
}

export interface SessionFormValues {
  name: string;
  music: Nullable<File>;
  prehypeVideo: Nullable<File>;
}

export type BlocksFormValues = Record<BlockType, BlockItemValues>;

export interface BlockItemValues {
  name: string;
  exercises: ExerciseItemValues[];
  breakTime: string;
  trainingTime: string;
  advertisement: Nullable<File>;
}

export interface ExerciseItemValues {
  name: string;
  sets: string;
  reps: string;
  tempo: [string, string, string, string];
  advertisement: Nullable<File>;
}
