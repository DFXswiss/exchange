export const FiatUrl = { get: 'fiat' };

export interface Fiat {
  id: number;
  name: string;
  enable: boolean;
  buyable: boolean;
  sellable: boolean;
}
