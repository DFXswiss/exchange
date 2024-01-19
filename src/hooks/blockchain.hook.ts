import { Blockchain } from '@dfx.swiss/react';
import { MetaMaskChainInterface } from './metamask.hook';
import Web3 from 'web3';

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
const chainIds: { [id: number]: Blockchain } = {
  [1]: Blockchain.ETHEREUM,
  [56]: Blockchain.BINANCE_SMART_CHAIN,
  [42161]: Blockchain.ARBITRUM,
  [10]: Blockchain.OPTIMISM,
  [137]: Blockchain.POLYGON,
  [8453]: Blockchain.BASE,
};

interface BlockchainDefinitions {
  headings: Record<string, string>;
  protocols: Record<string, Protocol>;
  mainToken: Record<string, string>;
  stringValue: Record<string, string>;
}

export function useBlockchain(): BlockchainInterface {
  function toBlockchain(chainId: string | number): Blockchain | undefined {
    return chainIds[+chainId];
  }

  function toChainId(blockchain: Blockchain): string | undefined {
    const web3 = new Web3(Web3.givenProvider);

    const id = Object.entries(chainIds).find(([_, b]) => b === blockchain)?.[0];
    return id && web3.utils.toHex(id);
  }

  function toChainObject(blockchain: Blockchain): MetaMaskChainInterface | undefined {
    const chainId = toChainId(blockchain);
    if (!chainId) return undefined;

    switch (blockchain) {
      case Blockchain.BINANCE_SMART_CHAIN:
        return {
          chainId,
          chainName: 'BNB Smart Chain Mainnet',
          nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: ['https://bsc-dataseed.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com/'],
        };

      case Blockchain.ARBITRUM:
        return {
          chainId,
          chainName: 'Arbitrum One',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://arb1.arbitrum.io/rpc'],
          blockExplorerUrls: ['https://arbiscan.io'],
        };

      case Blockchain.OPTIMISM:
        return {
          chainId,
          chainName: 'OP Mainnet',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://mainnet.optimism.io'],
          blockExplorerUrls: ['https://optimistic.etherscan.io/'],
        };

      case Blockchain.POLYGON:
        return {
          chainId,
          chainName: 'Polygon Mainnet',
          nativeCurrency: {
            name: 'Matic Token',
            symbol: 'MATIC',
            decimals: 18,
          },
          rpcUrls: ['https://polygon-rpc.com/'],
          blockExplorerUrls: ['https://polygonscan.com/'],
        };

      case Blockchain.BASE:
        return {
          chainId,
          chainName: 'Base',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://mainnet.base.org'],
          blockExplorerUrls: ['https://basescan.org'],
        };

      case Blockchain.ETHEREUM:
      default:
        return undefined;
    }
  }

  const definitions: BlockchainDefinitions = {
    headings: {
      [Blockchain.ETHEREUM]: 'Ethereum mainnet · ERC-20 token',
      [Blockchain.BINANCE_SMART_CHAIN]: 'BNB Chain · BEP-20 token',
      [Blockchain.ARBITRUM]: 'Arbitrum One · ERC-20 token',
      [Blockchain.OPTIMISM]: 'Optimism · ERC-20 token',
      [Blockchain.POLYGON]: 'Polygon · ERC-20 token',
      [Blockchain.BASE]: 'Base · ERC-20 token',
    },
    protocols: {
      [Blockchain.ETHEREUM]: Protocol.ERC_20,
      [Blockchain.BINANCE_SMART_CHAIN]: Protocol.BEP_20,
      [Blockchain.ARBITRUM]: Protocol.ERC_20,
      [Blockchain.OPTIMISM]: Protocol.ERC_20,
      [Blockchain.POLYGON]: Protocol.ERC_20,
      [Blockchain.BASE]: Protocol.ERC_20,
    },
    mainToken: {
      [Blockchain.ETHEREUM]: 'ETH',
      [Blockchain.BINANCE_SMART_CHAIN]: 'BNB',
      [Blockchain.ARBITRUM]: 'ETH',
      [Blockchain.OPTIMISM]: 'ETH',
      [Blockchain.POLYGON]: 'MATIC',
      [Blockchain.BASE]: 'ETH',
    },
    stringValue: {
      [Blockchain.ETHEREUM]: 'Ethereum',
      [Blockchain.BINANCE_SMART_CHAIN]: 'BNB Chain',
      [Blockchain.ARBITRUM]: 'Arbitrum',
      [Blockchain.OPTIMISM]: 'Optimism',
      [Blockchain.POLYGON]: 'Polygon',
      [Blockchain.BASE]: 'Base',
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
