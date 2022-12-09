import { Buy, BuyUrl, PaymentInfo } from '../definitions/buy';
import { useApi } from './api.hook';

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
