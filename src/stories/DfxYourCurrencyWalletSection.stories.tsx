import { ComponentMeta, ComponentStory } from '@storybook/react';
import DfxYourCurrencyWalletSection from './DfxYourCurrencyWalletSection';
import { dummyCurrencies } from './form/StyledDropdown.stories';

export default {
  title: 'Composites/DfxYourCurrencyWalletSection',
  component: DfxYourCurrencyWalletSection,
} as ComponentMeta<typeof DfxYourCurrencyWalletSection>;

export const Default: ComponentStory<typeof DfxYourCurrencyWalletSection> = () => {
  return (
    <div className="bg-white p-10 max-w-2xl">
      <DfxYourCurrencyWalletSection items={dummyCurrencies} />
    </div>
  );
};
Default.args = {};
