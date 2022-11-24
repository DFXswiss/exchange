import { ApiError } from '../api/error';

export interface ApiInterface {
  call: <T>(config: CallConfig) => Promise<T>;
}

export interface CallConfig {
  url: string;
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  authenticationToken?: string;
  data?: any;
  noJson?: boolean;
}

export function useApi(): ApiInterface {
  // TODO (Krysh): add session context here and change if required

  async function call<T>(config: CallConfig): Promise<T> {
    return fetchFrom<T>(config).catch((error: ApiError) => {
      if (error.statusCode === 401) {
        // TODO (Krysh): delete session
      }

      throw error;
    });
  }

  async function fetchFrom<T>(config: CallConfig): Promise<T> {
    return fetch(
      `${process.env.REACT_APP_API_URL}/${config.url}`,
      buildInit(config.method, config.authenticationToken, config.data, config.noJson),
    ).then((response) => {
      if (response.ok) {
        return response.json().catch(() => undefined);
      }
      return response.json().then((body) => {
        throw body;
      });
    });
  }

  function buildInit(
    method: 'GET' | 'PUT' | 'POST' | 'DELETE',
    accessToken?: string,
    data?: any,
    noJson?: boolean,
  ): RequestInit {
    return {
      method: method,
      headers: {
        ...(noJson ? undefined : { 'Content-Type': 'application/json' }),
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
      body: noJson ? data : JSON.stringify(data),
    };
  }

  return { call };
}
