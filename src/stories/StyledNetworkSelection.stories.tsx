import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledNetworkSelection from './StyledNetworkSelection';

export default {
  title: 'Building Blocks/StyledNetworkSelection',
  component: StyledNetworkSelection,
} as ComponentMeta<typeof StyledNetworkSelection>;

const networks = [
  { network: 'Ethereum mainnet', isActive: false },
  { network: 'Binance Smart Chain', isActive: true },
  { network: 'Arbitrum', isActive: false },
];

export const Default: ComponentStory<typeof StyledNetworkSelection> = () => {
  return (
    <StyledNetworkSelection networks={networks} onNetworkChange={(network) => console.log('changed to', network)} />
  );
};
