import { Blockchain } from './blockchain';

export const AssetUrl = { get: 'asset?blockchains=BinanceSmartChain,Ethereum,Arbitrum,Optimism' };

export interface Asset {
  id: number;
  name: string;
  description: string;
  buyable: boolean;
  sellable: boolean;
  blockchain: Blockchain;
  comingSoon: boolean;
}
