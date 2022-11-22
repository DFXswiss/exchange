export interface FetchConfig {
  url: string;
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  authenticationToken?: string;
  data?: any;
  noJson?: boolean;
}

export const fetchFrom = <T>(config: FetchConfig): Promise<T> => {
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
};

const buildInit = (
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  accessToken?: string,
  data?: any,
  noJson?: boolean,
): RequestInit => ({
  method: method,
  headers: {
    ...(noJson ? undefined : { 'Content-Type': 'application/json' }),
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
  body: noJson ? data : JSON.stringify(data),
});
