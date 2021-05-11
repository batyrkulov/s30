import { AsyncStatus } from '~/types';
import { UserProfileModel } from '~/types/models/user';

export interface UserState {
  profileStatus: AsyncStatus;
  profile: Nullable<UserProfileModel>;
  auth: Nullable<UserAuth>;
}

export interface UserAuth {
  access: string;
  refresh: string;
}
