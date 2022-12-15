import { Blockchain } from './blockchain';

export const AssetUrl = { get: 'asset?blockchains=BinanceSmartChain' };

export interface Asset {
  id: number;
  name: string;
  buyable: boolean;
  sellable: boolean;
  blockchain: Blockchain;
}
