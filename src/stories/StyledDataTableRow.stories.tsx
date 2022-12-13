import StyledDataTableRow from './StyledDataTableRow';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Building Blocks/StyledDataTableRow',
  component: StyledDataTableRow,
} as ComponentMeta<typeof StyledDataTableRow>;

export const DataRowTextOnly: ComponentStory<typeof StyledDataTableRow> = (args) => {
  return <StyledDataTableRow {...args}>Ethereum Mainnet</StyledDataTableRow>;
};
DataRowTextOnly.args = {
  label: 'Connected to',
};
