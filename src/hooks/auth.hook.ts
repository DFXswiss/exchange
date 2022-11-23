import { Auth, SignIn, SignMessage } from '../api/auth';
import { useApi } from './api.hook';

export interface AuthInterface {
  getSignMessage: (address: string) => Promise<string>;
  signIn: (address: string, signature: string) => Promise<SignIn>;
}

export function useAuth(): AuthInterface {
  const { call } = useApi();

  async function getSignMessage(address: string): Promise<string> {
    return call<SignMessage>({ url: `${Auth.signMessage}?address=${address}`, method: 'GET' }).then(
      (result: SignMessage) => result.message,
    );
  }

  async function signIn(address: string, signature: string): Promise<SignIn> {
    return call({ url: Auth.signIn, method: 'POST', data: { address, signature } });
  }

  return { getSignMessage, signIn };
}
