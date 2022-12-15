import { ComponentMeta, ComponentStory } from '@storybook/react';
import DfxYourCurrencyWalletSection from './DfxYourCurrencyWalletSection';

export default {
  title: 'Composites/DfxYourCurrencyWalletSection',
  component: DfxYourCurrencyWalletSection,
} as ComponentMeta<typeof DfxYourCurrencyWalletSection>;

export const Default: ComponentStory<typeof DfxYourCurrencyWalletSection> = () => {
  return (
    <div className="bg-white p-10 max-w-2xl">
      <DfxYourCurrencyWalletSection />
    </div>
  );
};
Default.args = {};
