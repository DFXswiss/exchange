import { User, UserUrl } from '../definitions/user';
import { useApi } from './api.hook';

export interface UserInterface {
  getUser: () => Promise<User | undefined>;
  changeUser: (user?: User, specialHandling?: () => void) => Promise<User | undefined>;
}

export function useUser(): UserInterface {
  const { call } = useApi();

  async function getUser(): Promise<User | undefined> {
    return call<User>({ url: UserUrl.get, method: 'GET' });
  }

  async function changeUser(user?: User, specialHandling?: () => void): Promise<User | undefined> {
    if (!user) return undefined;
    return call<User>({
      url: UserUrl.change,
      method: 'PUT',
      data: { ...user },
      specialHandling: { action: specialHandling, statusCode: 202 },
    });
  }

  return { getUser, changeUser };
}
