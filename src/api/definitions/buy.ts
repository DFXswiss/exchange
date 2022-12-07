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
