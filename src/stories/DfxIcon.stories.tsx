import DfxIcon, { IconColors, IconVariant } from './DfxIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/DfxIcons',
  component: DfxIcon,
} as ComponentMeta<typeof DfxIcon>;

export const WalletIcon: ComponentStory<typeof DfxIcon> = (args) => {
  return <DfxIcon {...args} />;
};

WalletIcon.args = {
  icon: IconVariant.COPY,
  color: IconColors.RED,
};
