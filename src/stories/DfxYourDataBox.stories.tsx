import DfxYourDataBox from './DfxYourDataBox';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/YourDataBox',
  component: DfxYourDataBox,
} as ComponentMeta<typeof DfxYourDataBox>;

export const LoggedOut: ComponentStory<typeof DfxYourDataBox> = (args) => {
  return <DfxYourDataBox {...args} />;
};
LoggedOut.args = {
  heading: 'Your Data',
  isLoggedIn: false,
};

export const LoggedIn: ComponentStory<typeof DfxYourDataBox> = (args) => {
  return <DfxYourDataBox {...args} />;
};

LoggedIn.args = {
  heading: 'Your Data',
  isLoggedIn: true,
  hasEmail: false,
};
