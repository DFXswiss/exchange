import { useAuthContext } from '../contexts/auth.context';
import { useAuth } from './auth.hook';

export interface ApiSessionInterface {
  isLoggedIn: boolean;
  getSignMessage: (address: string) => Promise<string>;
  createSession: (address: string, signature: string) => Promise<void>;
}

export function useApiSession(): ApiSessionInterface {
  const { isLoggedIn, setAuthenticationToken } = useAuthContext();
  const { getSignMessage, signIn } = useAuth();

  async function createSession(address: string, signature: string): Promise<void> {
    signIn(address, signature)
      .then((session) => setAuthenticationToken(session.accessToken))
      .catch(console.error); // TODO (Krysh) add real error handling in here
  }

  return { isLoggedIn, getSignMessage, createSession };
}
