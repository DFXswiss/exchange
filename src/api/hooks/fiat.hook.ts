import { Fiat, FiatUrl } from '../definitions/fiat';
import { useApi } from './api.hook';

export interface FiatInterface {
  getCurrencies: () => Promise<Fiat[]>;
}

export function useFiat(): FiatInterface {
  const { call } = useApi();

  async function getCurrencies(): Promise<Fiat[]> {
    return call<Fiat[]>({ url: FiatUrl.get, method: 'GET' });
  }

  return { getCurrencies };
}
