import StyledCoinListItem, { Protocols } from './StyledCoinListItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AssetIconVariant } from './DfxAssetIcon';

export default {
  title: 'Building Blocks/CoinListItem',
  component: StyledCoinListItem,
} as ComponentMeta<typeof StyledCoinListItem>;

export const SingleCoinListItem: ComponentStory<typeof StyledCoinListItem> = (args) => {
  return (
    <div className="bg-white p-10">
      <StyledCoinListItem {...args}></StyledCoinListItem>
    </div>
  );
};
SingleCoinListItem.args = {
  asset: AssetIconVariant.BNB,
  protocol: Protocols.ERC_20,
};