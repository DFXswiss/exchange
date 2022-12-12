import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconVariant } from './DfxIcon';
import StyledDataTable from './StyledDataTable';
import StyledDataTableRow from './StyledDataTableRow';
import StyledIconButton from './StyledIconButton';

export default {
  title: 'Composites/StyledDataTable',
  component: StyledDataTable,
} as ComponentMeta<typeof StyledDataTable>;

export const Default: ComponentStory<typeof StyledDataTable> = (args) => {
  let whiteBG = 'p-10 max-w-xl';
  args.darkTheme ? (whiteBG += ' bg-none') : (whiteBG += ' bg-white');
  return (
    <div className={whiteBG}>
      <StyledDataTable {...args}>
        <StyledDataTableRow label="IBAN">
          LU11 6060 0020 0000 5040
          <StyledIconButton
            icon={IconVariant.COPY}
            onClick={() => {
              console.log('copied.');
            }}
          />
        </StyledDataTableRow>
        <StyledDataTableRow label="BIC">
          OLKILUL1
          <StyledIconButton
            icon={IconVariant.COPY}
            onClick={() => {
              console.log('copied.');
            }}
          />
        </StyledDataTableRow>
        <StyledDataTableRow label="Purpose of Payment">
          OC11-A025-BCF7
          <StyledIconButton
            icon={IconVariant.COPY}
            onClick={() => {
              console.log('copied.');
            }}
          />
        </StyledDataTableRow>
        <StyledDataTableRow label="Purpose of Payment">
          OC11-A025-BCF7
          <StyledIconButton
            icon={IconVariant.COPY}
            onClick={() => {
              console.log('copied.');
            }}
          />
        </StyledDataTableRow>
      </StyledDataTable>
    </div>
  );
};
Default.args = {
  darkTheme: true,
  heading: 'User Data',
};
