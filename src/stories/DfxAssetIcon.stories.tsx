import DfxAssetIcon, {
  AssetIconSizes,
  DfxAssetIconUSDT,
  DfxAssetIconUSDC,
  DfxAssetIconBNB,
  DfxAssetIconBTC,
  DfxAssetIconBUSD,
  DfxAssetIconDFI,
  DfxAssetIconDAI,
  DfxAssetIconETH,
} from './DfxAssetIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Building Blocks/DfxAssetIcons',
  component: DfxAssetIcon,
} as ComponentMeta<typeof DfxAssetIcon>;

export const Default: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIcon {...args} />;
};

Default.args = {
  size: AssetIconSizes.LG,
};

export const BNB: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconBNB {...args} />;
};

BNB.args = {
  size: AssetIconSizes.LG,
};

export const BTC: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconBTC {...args} />;
};

BTC.args = {
  size: AssetIconSizes.LG,
};

export const BUSD: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconBUSD {...args} />;
};

BUSD.args = {
  size: AssetIconSizes.LG,
};

export const DAI: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconDAI {...args} />;
};

DAI.args = {
  size: AssetIconSizes.LG,
};

export const DFI: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconDFI {...args} />;
};

DFI.args = {
  size: AssetIconSizes.LG,
};

export const ETH: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconETH {...args} />;
};

ETH.args = {
  size: AssetIconSizes.LG,
};

export const USDT: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconUSDT {...args} />;
};

USDT.args = {
  size: AssetIconSizes.LG,
};

export const USDC: ComponentStory<typeof DfxAssetIcon> = (args) => {
  return <DfxAssetIconUSDC {...args} />;
};

USDC.args = {
  size: AssetIconSizes.LG,
};
