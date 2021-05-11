import { BlockItemValues } from '~/modules/form/types';
import { BlockModel, BlockType } from '~/types/models/block';
import { makeFormData } from '~/utils/makeFormData';

import { Api } from './Api';

export class Block {
  static async updateBlock(options: {
    id: number;
    params: Partial<BlockItemValues>;
  }): Promise<Partial<BlockModel>> {
    const params = {
      training_time: options.params.trainingTime ?? undefined,
      break_time: options.params.breakTime ?? undefined,
      name: options.params.name ?? undefined,
    };
    const { data } = await Api.patch(`/block/${options.id}/`, params);
    return Block.createFromApi(data);
  }

  static async updateBlockAd(options: {
    blockId: number;
    params: { advertisement: File };
  }): Promise<{ advertisement: string }> {
    const formData = makeFormData(options.params);
    const { data } = await Api.post(`/ad_block/${options.blockId}/`, formData);
    return {
      advertisement: data.advertisement,
    };
  }

  static async deleteBlockAd(params: { blockId: number }): Promise<void> {
    await Api.delete(`/ad_block/${params.blockId}/`);
  }

  static async getBlocksForAds(): Promise<{ blocksIds: number[] }> {
    const { data } = await Api.get('/ad_blocks/');
    return {
      blocksIds: data.blocks,
    };
  }

  static createFromApi(data: any): BlockModel {
    return {
      id: data.id,
      name: data.name,
      code: data.code as BlockType,
      breakTime: data.break_time,
      trainingTime: data.training_time,
      advertisement: data.advertisement,
      exercises: data.exercises.map((exercise: any) => ({
        id: exercise.id,
        name: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        tempo: exercise.tempo,
        advertisement: exercise.advertisement,
      })),
    };
  }
}
