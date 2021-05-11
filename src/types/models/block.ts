export interface BlockModel {
  id: number;
  name: string;
  exercises: ExerciseItem[];
  code: BlockType;
  breakTime: string;
  trainingTime: string;
  advertisement: string;
}

export enum BlockType {
  A = 'A',
  B = 'B',
  C = 'C',
}

export interface ExerciseItem {
  id: number;
  name: string;
  sets: Nullable<number>;
  reps: Nullable<number>;
  tempo: number[];
  advertisement: string;
}
