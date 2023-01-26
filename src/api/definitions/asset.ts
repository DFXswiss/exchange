import { Blockchain } from './blockchain';

export const AssetUrl = { get: `asset?blockchains=${Object.values(Blockchain).join(',')}` };

export const AddAssetToMetaMaskDesc =
  'Click on the MetaMask symbol in order to add this asset in your portfolio overview of your MetaMask or copy the address to add it manually.';

export interface Asset {
  id: number;
  name: string;
  description: string;
  buyable: boolean;
  sellable: boolean;
  blockchain: Blockchain;
  comingSoon: boolean;
  sortOrder?: number;
  contractAddress: string;
  blockchainExplorerLink?: string;
}
