import { Blockchain } from '../api/definitions/blockchain';

export interface BlockchainInterface {
  toBlockchain: (chainId: string | number) => Blockchain | undefined;
  toHeader: (blockchain: Blockchain) => string;
  toProtocol: (blockchain: Blockchain) => Protocol;
  toMainToken: (blockchain: Blockchain) => string;
  toString: (blockchain: Blockchain) => string;
}

export enum Protocol {
  ERC_20 = 'ERC-20',
  BEP_20 = 'BEP-20',
}

// id taken from https://chainlist.org/
export function useBlockchain(): BlockchainInterface {
  function toBlockchain(chainId: string | number): Blockchain | undefined {
    switch (+chainId) {
      case 1:
        return Blockchain.ETH;
      case 56:
        return Blockchain.BSC;
      case 42161:
        return Blockchain.ARBITRUM;
      case 10:
        return Blockchain.OPTIMISM;
      default:
        return undefined;
    }
  }

  const definitions = {
    headings: {
      [Blockchain.ETH]: 'Ethereum mainnet · ERC-20 token',
      [Blockchain.BSC]: 'Binance Smart Chain · BEP-20 token',
      [Blockchain.ARBITRUM]: 'Arbitrum One · ERC-20 token',
      [Blockchain.OPTIMISM]: 'Optimism · ERC-20 token',
    },
    protocols: {
      [Blockchain.ETH]: Protocol.ERC_20,
      [Blockchain.BSC]: Protocol.BEP_20,
      [Blockchain.ARBITRUM]: Protocol.ERC_20,
      [Blockchain.OPTIMISM]: Protocol.ERC_20,
    },
    mainToken: {
      [Blockchain.ETH]: 'ETH',
      [Blockchain.BSC]: 'BNB',
      [Blockchain.ARBITRUM]: 'ETH',
      [Blockchain.OPTIMISM]: 'ETH',
    },
    stringValue: {
      [Blockchain.ETH]: 'Ethereum (not yet supported)',
      [Blockchain.BSC]: 'Binance Smart Chain',
      [Blockchain.ARBITRUM]: 'Arbitrum (not yet supported)',
      [Blockchain.OPTIMISM]: 'Optimism (not yet supported)',
    },
  };

  return {
    toBlockchain,
    toHeader: (blockchain: Blockchain) => definitions.headings[blockchain],
    toProtocol: (blockchain: Blockchain) => definitions.protocols[blockchain],
    toMainToken: (blockchain: Blockchain) => definitions.mainToken[blockchain],
    toString: (blockchain: Blockchain) => definitions.stringValue[blockchain],
  };
}
