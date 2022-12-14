import DfxLogo from '../stories/DfxLogo';
import DfxTitleSection from '../stories/DfxTitleSection';
import StyledTabContainer, { StyledTabProps } from '../stories/StyledTabContainer';
import { Connect } from './connect';
import { BuyTab } from './tabs/buy.tab';
import { UserBox } from './user-box';
import { WalletBox } from './wallet-box';

export function Main(): JSX.Element {
  function buildComingSoonTab(title: string): StyledTabProps {
    return {
      title,
      deactivated: true,
      flagWord1: 'Coming',
      flagWord2: 'soon',
      content: undefined,
    };
  }

  return (
    <div className="text-center p-2 mt-4">
      <div className="max-w-6xl text-left mx-auto ">
        <div className="flex justify-between">
          <DfxLogo />
          <Connect />
        </div>
        <div className="md:flex justify-between mt-6">
          <div className="basis-3/5 max-w-[50%] px-6 mx-auto md:mx-0">
            <DfxTitleSection heading="DFX Multichain" subheading="Buy • Sell • Convert • Stake" />
          </div>
          <aside className="basis-2/5 shrink-0 md:min-w-[470px] lg:min-w-[512px] mx-auto md:mx-0">
            <WalletBox />
            <UserBox />
          </aside>
        </div>
        <StyledTabContainer
          tabs={[BuyTab, buildComingSoonTab('Sell'), buildComingSoonTab('Convert'), buildComingSoonTab('Staking')]}
        />
      </div>
    </div>
  );
}
