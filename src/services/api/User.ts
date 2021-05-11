import { UserProfileModel } from '~/types/models/user';

import { Api } from './Api';

export class User {
  static async signIn(
    params: FormData | Record<string, any>,
  ): Promise<{ user: UserProfileModel; accessToken: string; refreshToken: string }> {
    const { data } = await Api.post('/login/', params);
    return {
      user: User.createFromApi(data),
      accessToken: data.access,
      refreshToken: data.refresh,
    };
  }

  static async signUp(options: {
    key: string;
    data: FormData | Record<string, any>;
  }): Promise<UserProfileModel> {
    const { data } = await Api.post(`/accounts/register/${options.key}`, options.data);
    return User.createFromApi(data);
  }

  static createFromApi(data: any): UserProfileModel {
    return {
      id: data.id,
      email: data.email,
    };
  }
}
