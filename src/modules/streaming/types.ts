import { AsyncStatus } from '~/types';
import { SessionModel } from '~/types/models/session';

export interface StreamingState {
  session: SessionModel;
  status: AsyncStatus;
}
