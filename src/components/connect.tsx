import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledButton, { StyledButtonColors, StyledButtonWidths } from '../stories/StyledButton';
import StyledModal, { StyledModalTypes } from '../stories/StyledModal';
import { useState } from 'react';
import { useDeferredPromise } from '../hooks/deferred-promise.hook';

export function Connect(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { login } = useSessionContext();
  const { defer, deferRef } = useDeferredPromise<void>();

  const [showTnc, setShowTnc] = useState(false);

  function confirmTnc(): Promise<void> {
    setShowTnc(true);
    return defer().promise;
  }

  function tncConfirmed() {
    setShowTnc(false);
    deferRef?.resolve();
  }

  return (
    <>
      {/* MODALS */}
      <StyledModal type={StyledModalTypes.ALERT} isVisible={showTnc}>
        <div className="flex flex-col">
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
        </div>

        <StyledButton
          width={StyledButtonWidths.MD}
          color={StyledButtonColors.RED}
          label="Next"
          caps={false}
          onClick={tncConfirmed}
        />
      </StyledModal>
      <div className={isConnected ? 'hidden' : ''}>
        <StyledButton label="Connect to Metamask" onClick={() => login(confirmTnc)} />
      </div>
    </>
  );
}
