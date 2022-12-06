import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabType } from './StyledTab';
import StyledTabContainer from './StyledTabContainer';

export default {
  title: 'Composites/StyledTabContainer',
  component: StyledTabContainer,
} as ComponentMeta<typeof StyledTabContainer>;

export const Default: ComponentStory<typeof StyledTabContainer> = (args) => {
  return <StyledTabContainer {...args} />;
};

Default.args = {
  openTabOnLoad: 0,
  tabs: [
    {
      title: 'Buy',
      type: TabType.BUY,
      deactivated: false,
      content: (
        <>
          <h2>Tab 1: Buy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium explicabo, quibusdam nisi quae
            a! Quis consectetur qui, impedit autem exercitationem incidunt eligendi. Itaque quaerat dolor non velit,
            maiores perspiciatis?
          </p>
        </>
      ),
    },
    {
      title: 'Sell',
      type: TabType.SOON,
      deactivated: false,
      content: (
        <>
          <h2>Tab 2: Sell</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium explicabo, quibusdam nisi quae
            a! Quis consectetur qui, impedit autem exercitationem incidunt eligendi. Itaque quaerat dolor non velit,
            maiores perspiciatis?
          </p>
        </>
      ),
    },
    {
      title: 'Convert',
      deactivated: false,
      content: (
        <>
          <h2>Tab 3: Convert</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium explicabo, quibusdam nisi quae
            a! Quis consectetur qui, impedit autem exercitationem incidunt eligendi. Itaque quaerat dolor non velit,
            maiores perspiciatis?
          </p>
        </>
      ),
    },
    { title: 'Stake', deactivated: true, type: TabType.SOON, content: 'null' },
  ],
};
