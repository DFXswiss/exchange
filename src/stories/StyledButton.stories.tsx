import StyledButton, { StyledButtonSize, StyledButtonColor, StyledButtonWidth } from './StyledButton';
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
  size: StyledButtonSize.BIG,
  width: StyledButtonWidth.MD,
  color: StyledButtonColor.RED,
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
  size: StyledButtonSize.BIG,
  width: StyledButtonWidth.MD,
  color: StyledButtonColor.RED,
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
  size: StyledButtonSize.SMALL,
  width: StyledButtonWidth.MIN,
  color: StyledButtonColor.RED,
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
  size: StyledButtonSize.SMALL,
  width: StyledButtonWidth.MIN,
  color: StyledButtonColor.WHITE,
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
  size: StyledButtonSize.SMALL,
  width: StyledButtonWidth.MIN,
  color: StyledButtonColor.WHITE,
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
