import DfxAssetIcon, { AssetIconSize, AssetIconVariant } from './DfxAssetIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Building Blocks/DfxAssetIcons',
  component: DfxAssetIcon,
} as ComponentMeta<typeof DfxAssetIcon>;

export const Default: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIcon {...args} />;
};

Default.args = {
  size: AssetIconSize.LG,
  asset: AssetIconVariant.USDT,
};
