import { Auth, SignMessage } from '../api/auth';
import { FetchConfig, fetchFrom } from '../api/fetch';
import { useSessionContext } from '../contexts/session.context';
import { ApiError } from '../dtos/api-error.dto';

export interface ApiInterface {
  getSignMessage: (address: string) => Promise<string>;
}

export function useApi(): ApiInterface {
  const { authenticationToken } = useSessionContext();

  async function getSignMessage(address: string): Promise<string> {
    return call<SignMessage>({ url: `${Auth.signMessage}?address=${address}`, method: 'GET' }).then(
      (result: SignMessage) => result.message,
    );
  }

  const call = async <T>(config: FetchConfig): Promise<T> => {
    return fetchFrom<T>(config).catch((error: ApiError) => {
      if (error.statusCode === 401) {
        // TODO (Krysh): delete session
      }

      throw error;
    });
  };

  return { getSignMessage };
}
