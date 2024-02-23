import { Asset, Blockchain } from '@dfx.swiss/react';

export const AvailableTokens: { [c in Blockchain]?: string[] } = {
  [Blockchain.ETHEREUM]: ['ZCHF', 'ETH', 'WBTC', 'USDT'],
  [Blockchain.POLYGON]: ['ZCHF', 'MATIC', 'WBTC', 'USDT'],
  [Blockchain.OPTIMISM]: ['ZCHF', 'ETH', 'WBTC', 'USDT'],
  [Blockchain.ARBITRUM]: ['ZCHF', 'ETH', 'WBTC', 'USDT'],
  [Blockchain.BINANCE_SMART_CHAIN]: ['ZCHF', 'BNB', 'BTCB', 'USDT'],
  [Blockchain.BASE]: ['ZCHF', 'ETH'],
};
export const AvailableChains = Object.keys(AvailableTokens) as Blockchain[];

export function isTokenAvailable(asset: Asset): boolean {
  return AvailableTokens[asset.blockchain]?.includes(asset.name) ?? false;
}

export function getTokenIndex(asset: Asset): number {
  return AvailableTokens[asset.blockchain]?.indexOf(asset.name) ?? 0;
}
