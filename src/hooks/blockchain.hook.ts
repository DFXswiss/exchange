import { Blockchain } from '../api/definitions/blockchain';

export interface BlockchainInterface {
  toBlockchain: (chainId: string | number) => Blockchain | undefined;
}

// id taken from https://chainlist.org/
export function useBlockchain(): BlockchainInterface {
  function toBlockchain(chainId: string | number): Blockchain | undefined {
    const chainIdToCheck = typeof chainId === 'number' ? chainId : parseInt(chainId);
    switch (chainIdToCheck) {
      case 1:
        return Blockchain.ETH;
      case 56:
        return Blockchain.BSC;
      default:
        return undefined;
    }
  }

  return { toBlockchain };
}
