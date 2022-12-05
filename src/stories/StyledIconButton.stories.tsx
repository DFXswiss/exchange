import StyledIconButton, { StyledIconButtonSizes } from './StyledIconButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/StyledIconButton',
  component: StyledIconButton,
} as ComponentMeta<typeof StyledIconButton>;

export const BigButton: ComponentStory<typeof StyledIconButton> = (args) => {
  return (
    <div className="flex space-x-2 justify-center">
      <StyledIconButton {...args} />
    </div>
  );
};
BigButton.args = {
  size: StyledIconButtonSizes.BIG,
};
