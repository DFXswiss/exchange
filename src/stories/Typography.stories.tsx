import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'DFX/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Defaults: ComponentStory<typeof Typography> = function () {
  return <Typography />;
};
