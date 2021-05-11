import { BlockModel, BlockType } from '~/types/models/block';

export interface SessionModel {
  id: number;
  name: string;
  music: string;
  prehypeVideo: string;
  blocks: Record<BlockType, BlockModel>;
}

export enum SessionMedia {
  MUSIC = 'music',
  PREHYPE_VIDEO = 'prehype_video',
}
