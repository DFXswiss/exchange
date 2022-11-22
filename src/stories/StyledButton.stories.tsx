import StyledButton from './StyledButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const BigButton: ComponentStory<typeof StyledButton> = (args) => {
  return <StyledButton {...args} />;
};
BigButton.args = {
  label: 'connect to Metamask',
  size: 'BIG',
  width: 'MD',
  color: 'RED',
  noCaps: false,
};

export const LoggedIn: ComponentStory<typeof StyledButton> = (args) => {
  return <StyledButton {...args} />;
};

LoggedIn.args = {
  label: 'Your Data',
  // isLoggedIn: true,
  // hasEmail: false,
};
