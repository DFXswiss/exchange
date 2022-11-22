import { Auth, SignIn, SignMessage } from '../api/auth';
import { FetchConfig, fetchFrom } from '../api/fetch';
import { ApiError } from '../dtos/api-error.dto';

export interface ApiInterface {
  getSignMessage: (address: string) => Promise<string>;
  signIn: (address: string, signature: string) => Promise<SignIn>;
}

export function useApi(): ApiInterface {
  async function getSignMessage(address: string): Promise<string> {
    return call<SignMessage>({ url: `${Auth.signMessage}?address=${address}`, method: 'GET' }).then(
      (result: SignMessage) => result.message,
    );
  }

  async function signIn(address: string, signature: string): Promise<SignIn> {
    return call({ url: Auth.signIn, method: 'POST', data: { address, signature } });
  }

  const call = async <T>(config: FetchConfig): Promise<T> => {
    return fetchFrom<T>(config).catch((error: ApiError) => {
      if (error.statusCode === 401) {
        // TODO (Krysh): delete session
      }

      throw error;
    });
  };

  return { getSignMessage, signIn };
}
