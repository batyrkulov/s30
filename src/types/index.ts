import { FormState } from '~/modules/form/types';
import { StreamingState } from '~/modules/streaming/types';
import { UserState } from '~/modules/user/types';

export interface RootState {
  streaming: StreamingState;
  user: UserState;
  form: FormState;
}

export enum AsyncStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'fail',
}

export type ResponseErrors = Record<string, string>;
