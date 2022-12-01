import { Blockchain } from './blockchain';

export const AssetUrl = { get: 'asset?blockchains=Ethereum,BinanceSmartChain' };

export const AssetUrl = { get: 'asset' };

export interface Asset {
  id: number;
  name: string;
  buyable: boolean;
  sellable: boolean;
  blockchain: Blockchain;
}
