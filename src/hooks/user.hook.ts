import { User, UserUrl } from '../api/user';
import { useApi } from './api.hook';

export interface UserInterface {
  getUser: (token?: string) => Promise<User | undefined>;
  changeUser: (user?: User, token?: string) => Promise<User | undefined>;
}

export function useUser(): UserInterface {
  const { call } = useApi();

  async function getUser(token?: string): Promise<User | undefined> {
    if (!token) return undefined;
    return call<User>({ url: UserUrl.get, method: 'GET', authenticationToken: token });
  }

  async function changeUser(user?: User, token?: string): Promise<User | undefined> {
    if (!user) return undefined;
    return call<User>({ url: UserUrl.change, method: 'PUT', authenticationToken: token, data: { ...user } });
  }

  return { getUser, changeUser };
}
