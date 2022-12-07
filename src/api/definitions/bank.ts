export const BankUrl = { get: 'bank' };

export interface Bank {
  id: number;
  name: string;
  iban: string;
  bic: string;
  currency: string;
  receive: boolean;
  send: boolean;
}
