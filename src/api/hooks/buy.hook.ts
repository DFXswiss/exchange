import { Asset } from '../definitions/asset';
import { Buy, BuyUrl } from '../definitions/buy';
import { Fiat } from '../definitions/fiat';
import { useApi } from './api.hook';

interface PaymentInfo {
  label: string;
  currency: Fiat;
  amount: number;
  asset: Asset;
}

export interface BuyInterface {
  receiveFor: (info: PaymentInfo) => Promise<Buy>;
}

export function useBuy(): BuyInterface {
  const { call } = useApi();

  async function receiveFor(info: PaymentInfo): Promise<Buy> {
    return call<Buy>({ url: BuyUrl.receive, method: 'PUT', data: info });
  }

  return { receiveFor };
}
