import { SessionMedia, SessionModel } from '~/types/models/session';

import { Api } from './Api';

export class Session {
  static async getSession(options: { id: number }): Promise<SessionModel> {
    const { data } = await Api.get(`/session/${options.id}/`);
    return Session.createFromApi(data);
  }

  /* Edit music OR pre hype video */
  /* returns music, prehypeVideo */
  static async updateMedia(options: {
    id: number;
    params: { music?: string; prehypeVideo?: string };
  }): Promise<Partial<SessionModel>> {
    let params = {};
    if (options.params.music) {
      params = { music: options.params.music };
    } else if (options.params.prehypeVideo) {
      params = { music: options.params.prehypeVideo };
    }
    const { data } = await Api.patch(`/session_media/${options.id}`, params);
    return Session.createFromApi(data);
  }

  static async deleteMedia(options: {
    sessisonId: number;
    mediaCode: SessionMedia;
  }): Promise<void> {
    await Api.delete(`/session_media/${options.sessisonId}`, { to_delete: options.mediaCode });
  }

  /* blockId is for ordering */
  static async getStreamingData(options: {
    sessionId: number;
    blockId: number;
  }): Promise<Partial<SessionModel>> {
    const { data } = await Api.get(
      `/session_streaming/${options.sessionId}/?block_id=${options.blockId}`,
    );
    return Session.createFromApi(data);
  }

  static createFromApi(data: any): SessionModel {
    return {
      id: data.id,
      name: data.name,
      music: data.music,
      prehypeVideo: data.prehype_video,
      blocks: data.blocks.map((block: any) => ({
        id: block.id,
        name: block.name,
        code: block.code,
        breakTime: block.break_time,
        trainingTime: block.training_time,
        advertisement: block.advertisement,
        exercises: block.exercises.map((exercise: any) => ({
          id: exercise.id,
          name: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
          tempo: exercise.tempo,
          advertisement: exercise.advertisement,
        })),
      })),
    };
  }
}
