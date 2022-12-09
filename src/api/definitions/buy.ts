import { Asset } from './asset';
import { Fiat } from './fiat';

export const BuyUrl = { receive: 'buy/paymentInfos' };

interface MinDeposit {
  amount: number;
  asset: string;
}

export interface Buy {
  iban: string;
  bic: string;
  remittanceInfo: string;
  minDeposit: MinDeposit[];
}

export interface PaymentInfo {
  label: string;
  currency: Fiat;
  amount: number;
  asset: Asset;
}
