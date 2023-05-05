import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledCheckboxRow from './StyledCheckboxRow';
import { useState } from 'react';

export default {
  title: 'Building Blocks/StyledCheckboxRow',
  component: StyledCheckboxRow,
} as ComponentMeta<typeof StyledCheckboxRow>;

export const Default: ComponentStory<typeof StyledCheckboxRow> = (args) => {
  const [checked, setChecked] = useState(false);

  let whiteBG = 'p-10 max-w-xl rounded';
  args.darkTheme ? (whiteBG += ' bg-none') : (whiteBG += ' bg-white');

  return (
    <div className={whiteBG}>
      <StyledCheckboxRow {...args} isChecked={checked} onChange={setChecked}>
        Please transfer the purchase amount using this <strong>information</strong> via your banking application. The
        purpose of payment is important!
      </StyledCheckboxRow>
    </div>
  );
};
Default.args = {
  darkTheme: false,
};

export const Checked: ComponentStory<typeof StyledCheckboxRow> = (args) => {
  const [isChecked, setIsChecked] = useState(true);

  let whiteBG = 'p-10 max-w-xl rounded';
  args.darkTheme ? (whiteBG += ' bg-none') : (whiteBG += ' bg-white');

  return (
    <div className={whiteBG}>
      <StyledCheckboxRow {...args} isChecked={isChecked} onChange={setIsChecked}>
        Don't show this again.
      </StyledCheckboxRow>
    </div>
  );
};
Checked.args = {
  darkTheme: false,
  isChecked: true,
};
