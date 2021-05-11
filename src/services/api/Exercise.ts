import { ExerciseItemValues } from '~/modules/form/types';
import { makeFormData } from '~/utils/makeFormData';

import { Api } from './Api';

export class Exercise {
  static async createExercises(options: {
    blockId: number;
    params: ExerciseItemValues;
  }): Promise<void> {
    const formData = makeFormData(options.params);
    await Api.post(`/exercise/?block_id=${options.blockId}`, formData);
  }

  static async getExercisesForAds(): Promise<{ exercisesIds: number[] }> {
    const { data } = await Api.get('/ad_exercises/');
    return {
      exercisesIds: data.exercises,
    };
  }

  static async updateExerciseAd(options: {
    exerciseId: number;
    params: { advertisement: File };
  }): Promise<{ advertisement: string }> {
    const formData = makeFormData(options.params);
    const { data } = await Api.post(`/ad_exercise/${options.exerciseId}/`, formData);
    return {
      advertisement: data.advertisement,
    };
  }

  static async deleteExerciseAd(params: { exerciseId: number }): Promise<void> {
    await Api.delete(`/ad_exercise/${params.exerciseId}/`);
  }
}
