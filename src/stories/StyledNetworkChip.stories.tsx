import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledNetworkChip from './StyledNetworkChip';

export default {
  title: 'Building Blocks/StyledNetworkChip',
  component: StyledNetworkChip,
} as ComponentMeta<typeof StyledNetworkChip>;

export const Default: ComponentStory<typeof StyledNetworkChip> = (args) => {
  return <StyledNetworkChip {...args} />;
};

Default.args = {
  network: 'Ethereum mainnet',
  isActive: false,
};
