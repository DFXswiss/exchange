import { useSessionContext } from '../contexts/session.context';
import { useWalletContext } from '../contexts/wallet.context';
import DfxLogo from '../stories/DfxLogo';
import DfxTitleSection from '../stories/DfxTitleSection';
import StyledVerticalStack from '../stories/layout-helpers/StyledVerticalStack';
import StyledButton, { StyledButtonColors, StyledButtonWidths } from '../stories/StyledButton';
import StyledModal, { StyledModalTypes } from '../stories/StyledModal';
import StyledTabContainer, { StyledTabProps } from '../stories/StyledTabContainer';
import { BuyTab } from './tabs/buy.tab';
import { UserBox } from './user-box';
import { WalletBox } from './wallet-box';

export function Main(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { isProcessing, needsSignUp, login, signUp } = useSessionContext();

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
    <>
      {/* MODALS */}
      <StyledModal type={StyledModalTypes.ALERT} isVisible={needsSignUp}>
        <StyledVerticalStack>
          <h1>Terms and Conditions.</h1>
          <p>
            Please read our terms and conditions and click on ”Next” to confirm and to continue to the DFX Multichain
            Service.
          </p>
          <a
            className="underline underline-offset-2 pt-6 pb-4"
            target="_blank"
            href={process.env.REACT_APP_TNC_URL}
            rel="noopener noreferrer"
          >
            Terms and conditions DFX Swiss.
          </a>
          <div className="mx-auto">
            <StyledButton
              width={StyledButtonWidths.SM}
              color={StyledButtonColors.RED}
              label="Next"
              caps={false}
              onClick={() => signUp()}
              isLoading={isProcessing}
            />
          </div>
        </StyledVerticalStack>
      </StyledModal>
      {/* CONTENT */}
      <div className="text-center p-2 mt-4">
        <div className="max-w-6xl text-left mx-auto ">
          <div className="flex justify-between">
            <DfxLogo />
            <div className={isConnected ? 'hidden' : ''}>
              <StyledButton label="Connect to Metamask" onClick={login} />
            </div>
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
    </>
  );
}
