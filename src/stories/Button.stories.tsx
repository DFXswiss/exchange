import Button from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const LoggedOut: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
LoggedOut.args = {
  label: 'Your Data',
  // isLoggedIn: false,
};

export const LoggedIn: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

LoggedIn.args = {
  label: 'Your Data',
  // isLoggedIn: true,
  // hasEmail: false,
};
