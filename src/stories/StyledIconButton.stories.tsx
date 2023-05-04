import StyledIconButton from './StyledIconButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconColor, IconSize, IconVariant } from './DfxIcon';

export default {
  title: 'Building Blocks/StyledIconButton',
  component: StyledIconButton,
} as ComponentMeta<typeof StyledIconButton>;

export const DemoIconButton: ComponentStory<typeof StyledIconButton> = (args) => {
  return <StyledIconButton {...args} />;
};
DemoIconButton.args = {
  icon: IconVariant.BANK,
  color: IconColor.RED,
  size: IconSize.MD,
  onClick: () => {
    alert('button clicked.');
  },
};
