import DfxLogo from './DfxLogo';
import DfxTitleSection from './DfxTitleSection';
import StyledButton, { StyledButtonSizes, StyledButtonWidths } from './StyledButton';
import StyledDataBox from './StyledDataBox';
import StyledDataTextRow from './StyledDataTextRow';

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
            <StyledDataBox heading="Your wallet">
              <StyledDataTextRow label="Metamask">Account1: 0x6724...f1436</StyledDataTextRow>
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
        <div className="bg-white w-full h-96 rounded-lg text-black">
          <h1>Buy</h1>
        </div>
      </div>
    </div>
  );
}
