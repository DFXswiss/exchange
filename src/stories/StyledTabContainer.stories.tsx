import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyledTabContainer from './StyledTabContainer';

export default {
  title: 'DFX/StyledTabContainer',
  component: StyledTabContainer,
} as ComponentMeta<typeof StyledTabContainer>;

export const Primary: ComponentStory<typeof StyledTabContainer> = () => {
  return <StyledTabContainer></StyledTabContainer>;
};

Primary.args = {};
