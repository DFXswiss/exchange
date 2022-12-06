import DfxLogo from './DfxLogo';
import DfxTitleSection from './DfxTitleSection';
import StyledButton, { StyledButtonSizes, StyledButtonWidths } from './StyledButton';
import StyledDataBox from './StyledDataBox';
import StyledDataTextRow from './StyledDataTextRow';
import StyledTabContainer from './StyledTabContainer';
import { TabType } from './StyledTab';

export default function DfxPageLayout() {
  return (
    <div className="text-center p-2">
      <div className="max-w-6xl text-left mx-auto ">
        <div className="flex justify-between">
          <DfxLogo />
          <StyledButton
            label="Connect to Metamask"
            onClick={() => {
              console.log('clicked');
            }}
          />
        </div>
        <div className="md:flex justify-between mt-6">
          <div className="basis-3/5 max-w-[50%] px-6 mx-auto md:mx-0">
            <DfxTitleSection heading="DFX Multichain" subheading="Buy • Sell • Convert • Stake" />
          </div>
          <aside className="basis-2/5 shrink-0 md:min-w-[470px] lg:min-w-[512px] mx-auto md:mx-0">
            <StyledDataBox heading="Your wallet" boxButtonLabel="Log out">
              <StyledDataTextRow label="Metamask">Account1: 0x672423423423423423423423423f1436</StyledDataTextRow>
              <StyledDataTextRow label="Connected to">Ethereum Mainnet</StyledDataTextRow>
            </StyledDataBox>
            <StyledDataBox heading="Your Data">
              <StyledDataTextRow label="E-Mail address">john.doe@gmail.com</StyledDataTextRow>
              <StyledDataTextRow label="Your Referral Code">
                008-802
                <StyledButton
                  label="Copy link to share"
                  size={StyledButtonSizes.SMALL}
                  width={StyledButtonWidths.MIN}
                  caps={false}
                  onClick={() => {
                    console.log('button clicked.');
                  }}
                />
              </StyledDataTextRow>
            </StyledDataBox>
          </aside>
        </div>
        <StyledTabContainer
          tabs={[
            {
              title: 'Buy',
              deactivated: false,
              type: TabType.BUY,
              content: (
                <>
                  <h2>Tab 1: Buy</h2>{' '}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium explicabo, quibusdam
                    nisi quae a! Quis consectetur qui, impedit autem exercitationem incidunt eligendi. Itaque quaerat
                    dolor non velit, maiores perspiciatis?
                  </p>
                </>
              ),
            },
            { title: 'Sell', deactivated: false, type: TabType.SOON, content: <h2>Tab2 : sell</h2> },
            { title: 'Convert', deactivated: false, type: TabType.SOON, content: <h2>Tab 3: convert</h2> },
          ]}
        ></StyledTabContainer>
      </div>
    </div>
  );
}
