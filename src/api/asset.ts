export const AssetUrl = { get: 'asset' };

export enum Blockchain {
  ETH = 'Ethereum',
  BSC = 'BinanceSmartChain',
}

export interface Asset {
  id: number;
  name: string;
  buyable: boolean;
  sellable: boolean;
  blockchain: Blockchain;
}
