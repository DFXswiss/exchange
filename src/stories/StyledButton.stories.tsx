import StyledButton, { StyledButtonSizes, StyledButtonColors, StyledButtonWidths } from './StyledButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconVariant } from './DfxIcon';

export default {
  title: 'Building Blocks/StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const BigButton: ComponentStory<typeof StyledButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center">
      <StyledButton {...args} />
    </div>
  );
};
BigButton.args = {
  label: 'connect to Metamask',
  size: StyledButtonSizes.BIG,
  width: StyledButtonWidths.MD,
  color: StyledButtonColors.RED,
  caps: true,
};

export const ButtonOnWhiteBG: ComponentStory<typeof StyledButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center bg-white p-10">
      <StyledButton {...args} />
    </div>
  );
};
ButtonOnWhiteBG.args = {
  label: 'connect to Metamask',
  size: StyledButtonSizes.BIG,
  width: StyledButtonWidths.MD,
  color: StyledButtonColors.RED,
  caps: true,
};

export const CopyButton: ComponentStory<typeof StyledButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center">
      <StyledButton {...args} />
    </div>
  );
};

CopyButton.args = {
  label: 'Copy link to share',
  size: StyledButtonSizes.SMALL,
  width: StyledButtonWidths.MIN,
  color: StyledButtonColors.RED,
  caps: false,
  icon: IconVariant.COPY,
};

export const IncreaseLimit: ComponentStory<typeof StyledButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center">
      <StyledButton {...args} />
    </div>
  );
};

IncreaseLimit.args = {
  label: 'Increase Limit',
  size: StyledButtonSizes.SMALL,
  width: StyledButtonWidths.MIN,
  color: StyledButtonColors.WHITE,
  caps: false,
  icon: IconVariant.EXPAND_LESS,
};

export const SmallEditButton: ComponentStory<typeof StyledButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center">
      <StyledButton {...args} />
    </div>
  );
};

SmallEditButton.args = {
  label: 'Edit',
  size: StyledButtonSizes.SMALL,
  width: StyledButtonWidths.MIN,
  color: StyledButtonColors.WHITE,
  caps: false,
  icon: IconVariant.EDIT,
};

export const DefaultButton: ComponentStory<typeof StyledButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center">
      <StyledButton {...args} />
    </div>
  );
};
DefaultButton.args = {
  label: 'Default-Style: no Args',
};
