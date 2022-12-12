import { useAuthContext } from '../contexts/auth.context';
import { ApiError } from '../definitions/error';
import { useAuth } from './auth.hook';

export interface ApiSessionInterface {
  isLoggedIn: boolean;
  getSignMessage: (address: string) => Promise<string>;
  createSession: (address: string, signature: string, isSignUp: boolean) => Promise<void>;
}

export function useApiSession(): ApiSessionInterface {
  const { isLoggedIn, setAuthenticationToken } = useAuthContext();
  const { getSignMessage, signIn, signUp } = useAuth();

  async function createSession(address: string, signature: string, isSignUp: boolean): Promise<void> {
    return (isSignUp ? signUp(address, signature) : signIn(address, signature))
      .then((session) => setAuthenticationToken(session.accessToken))
      .catch((error: ApiError) => {
        if (error.statusCode === 401) {
          setAuthenticationToken(undefined);
        }
        throw error;
      });
  }

  return { isLoggedIn, getSignMessage, createSession };
}
