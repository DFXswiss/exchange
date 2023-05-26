import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Asset } from '../api/definitions/asset';
import { Protocol } from '../hooks/blockchain.hook';
import BigNumber from 'bignumber.js';
import StyledBalance from './StyledBalance';

export default {
  title: 'Building Blocks/StyledBalance',
  component: StyledBalance,
} as ComponentMeta<typeof StyledBalance>;

export const Default: ComponentStory<typeof StyledBalance> = (args) => {
  return <StyledBalance {...args} />;
};

Default.args = {
  asset: {
    name: 'BNB',
    description: 'BNB Morbi leo risus, porta ac consectetur ac, vestibul',
    chainId: '0x93...23452',
    explorerUrl: 'http://duckduckgo.com',
    comingSoon: false,
  } as Asset,
  protocol: Protocol.ERC_20,
  balance: new BigNumber(111112345.67),
  balanceInUsd: new BigNumber(111112345.67),
  isSelected: false,
};
