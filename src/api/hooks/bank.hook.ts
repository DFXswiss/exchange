import { Bank, BankUrl } from '../definitions/bank';
import { useApi } from './api.hook';

export interface BankInterface {
  getBanks: () => Promise<Bank[]>;
}

export function useBank(): BankInterface {
  const { call } = useApi();

  async function getBanks(): Promise<Bank[]> {
    return call<Bank[]>({ url: BankUrl.get, method: 'GET' });
  }

  return { getBanks };
}
