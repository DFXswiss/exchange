import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Asset } from '../api/definitions/asset';
import { Protocol } from '../hooks/blockchain.hook';
import BigNumber from 'bignumber.js';
import StyledBalanceSelection from './StyledBalanceSelection';

export default {
  title: 'Building Blocks/StyledBalanceSelection',
  component: StyledBalanceSelection,
} as ComponentMeta<typeof StyledBalanceSelection>;

const balances = [
  {
    asset: {
      name: 'USDT',
      description: 'Tether',
      chainId: '0x93...23452',
      explorerUrl: 'http://duckduckgo.com',
      comingSoon: false,
    } as Asset,
    protocol: Protocol.ERC_20,
    balance: new BigNumber(111112345.67),
    balanceInUsd: new BigNumber(111112345.67),
    isSelected: false,
  },
  {
    asset: {
      name: 'BNB',
      description: 'BNB Morbi leo risus, porta ac consectetur ac, vestibul',
      chainId: '0x93...23452',
      explorerUrl: 'http://duckduckgo.com',
      comingSoon: false,
    } as Asset,
    protocol: Protocol.BEP_20,
    balance: new BigNumber(2.678745),
    balanceInUsd: new BigNumber(3447.67),
    isSelected: false,
  },
  {
    asset: {
      name: 'BUSD',
      description: 'Binance USD',
      chainId: '0x93...23452',
      explorerUrl: 'http://duckduckgo.com',
      comingSoon: false,
    } as Asset,
    protocol: Protocol.BEP_20,
    balance: new BigNumber(5345.22),
    balanceInUsd: new BigNumber(5345.22),
    isSelected: false,
  },
  {
    asset: {
      name: 'DFI',
      description: 'DFI',
      chainId: '0x93...23452',
      explorerUrl: 'http://duckduckgo.com',
      comingSoon: false,
    } as Asset,
    protocol: Protocol.ERC_20,
    balance: new BigNumber(1235.67),
    balanceInUsd: new BigNumber(670.98),
    isSelected: false,
  },
];

export const Default: ComponentStory<typeof StyledBalanceSelection> = () => {
  return (
    <StyledBalanceSelection balances={balances} onSelectionChanged={(asset) => console.log('click on', asset.name)} />
  );
};
