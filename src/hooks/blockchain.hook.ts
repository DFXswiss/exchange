import { Blockchain } from '../api/definitions/blockchain';
import { MetaMaskChainInterface } from './metamask.hook';

export interface BlockchainInterface {
  toBlockchain: (chainId: string | number) => Blockchain | undefined;
  toChainId: (blockchain: Blockchain) => string | number | undefined;
  toChainObject: (blockchain: Blockchain) => MetaMaskChainInterface | undefined;
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

  function toChainId(blockchain: Blockchain): string | number | undefined {
    switch (blockchain) {
      case Blockchain.ETH:
        return 1;
      case Blockchain.BSC:
        return 56;
      case Blockchain.ARBITRUM:
        return 42161;
      case Blockchain.OPTIMISM:
        return 10;
      default:
        return undefined;
    }
  }

  function toChainObject(blockchain: Blockchain): MetaMaskChainInterface | undefined {
    let chainId = toChainId(blockchain)?.toString(16);
    if (!chainId) return undefined;
    chainId = `0x${chainId}`;
    const chainName = definitions.stringValue[blockchain];
    switch (blockchain) {
      case Blockchain.BSC:
        return {
          chainId,
          chainName,
          nativeCurrency: {
            name: 'BNB',
            symbol: 'bnb',
            decimals: 18,
          },
          rpcUrls: ['https://bsc-dataseed.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com/'],
        };
      case Blockchain.ARBITRUM:
        return {
          chainId,
          chainName,
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://arb1.arbitrum.io/rpc'],
          blockExplorerUrls: ['https://arbiscan.io/'],
        };
      case Blockchain.OPTIMISM:
        return {
          chainId,
          chainName,
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://mainnet.optimism.io'],
          blockExplorerUrls: ['https://optimistic.etherscan.io/'],
        };
      case Blockchain.ETH:
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
      [Blockchain.POLYGON]: 'Polygon · ERC-20 token',
    },
    protocols: {
      [Blockchain.ETH]: Protocol.ERC_20,
      [Blockchain.BSC]: Protocol.BEP_20,
      [Blockchain.ARBITRUM]: Protocol.ERC_20,
      [Blockchain.OPTIMISM]: Protocol.ERC_20,
      [Blockchain.POLYGON]: Protocol.ERC_20,
    },
    mainToken: {
      [Blockchain.ETH]: 'ETH',
      [Blockchain.BSC]: 'BNB',
      [Blockchain.ARBITRUM]: 'ETH',
      [Blockchain.OPTIMISM]: 'ETH',
      [Blockchain.POLYGON]: 'MATIC',
    },
    stringValue: {
      [Blockchain.ETH]: 'Ethereum',
      [Blockchain.BSC]: 'Binance Smart Chain',
      [Blockchain.ARBITRUM]: 'Arbitrum',
      [Blockchain.OPTIMISM]: 'Optimism',
      [Blockchain.POLYGON]: 'Polygon (not yet supported)',
    },
  };

  return {
    toBlockchain,
    toChainId,
    toChainObject,
    toHeader: (blockchain: Blockchain) => definitions.headings[blockchain],
    toProtocol: (blockchain: Blockchain) => definitions.protocols[blockchain],
    toMainToken: (blockchain: Blockchain) => definitions.mainToken[blockchain],
    toString: (blockchain: Blockchain) => definitions.stringValue[blockchain],
  };
}
