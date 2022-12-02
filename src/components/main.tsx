import { useAssetContext } from '../api/contexts/asset.context';
import { useUserContext } from '../api/contexts/user.context';
import { useSession } from '../hooks/session.hook';
import DfxLogo from '../stories/DfxLogo';
import DfxTitleSection from '../stories/DfxTitleSection';
import StyledButton, { StyledButtonSizes, StyledButtonWidths } from '../stories/StyledButton';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';

export function Main() {
  const { user } = useUserContext();
  const { assets } = useAssetContext();
  const { address, blockchain, login } = useSession();

  return (
    <div className="text-center p-2 h-screen">
      <div className="max-w-6xl text-left mx-auto ">
        <div className="flex justify-between">
          <DfxLogo />
          <StyledButton label="Connect to Metamask" onClick={login} />
        </div>
        <div className="md:flex justify-between mt-6">
          <div className="basis-3/5 max-w-[50%] px-6 mx-auto md:mx-0">
            <DfxTitleSection heading="DFX Multichain" subheading="Buy • Sell • Convert • Stake" />
          </div>
          <aside className="basis-2/5 shrink-0 md:min-w-[470px] lg:min-w-[512px] mx-auto md:mx-0">
            <StyledDataBox heading="Your wallet">
              <StyledDataTextRow label="Metamask">{address}</StyledDataTextRow>
              <StyledDataTextRow label="Connected to">{blockchain}</StyledDataTextRow>
            </StyledDataBox>
            <StyledDataBox heading="Your Data">
              <StyledDataTextRow label="E-Mail address">{user?.mail}</StyledDataTextRow>
              <StyledDataTextRow label="Your Referral Code">
                {user?.ref}
                <StyledButton
                  label="Copy link to share"
                  size={StyledButtonSizes.SMALL}
                  width={StyledButtonWidths.MIN}
                  caps={false}
                  onClick={() => {
                    console.log('ToDo add clipboard');
                  }}
                />
              </StyledDataTextRow>
            </StyledDataBox>
          </aside>
        </div>
        <div className="bg-white w-full h-96 rounded-lg text-black">
          <h1>Buy</h1>
          <p className="break-words">{assets.map((asset) => `${asset.name} (${asset.blockchain})`).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
