import { useClipboard } from '../hooks/clipboard.hook';
import { useBlockchain } from '../hooks/blockchain.hook';
import {
  CopyButton,
  DfxIcon,
  IconVariant,
  StyledButton,
  StyledButtonColor,
  StyledButtonWidth,
  StyledCheckboxRow,
  StyledDataBox,
  StyledDataTextRow,
  StyledModal,
  StyledModalType,
  StyledModalWidth,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { useEffect, useState } from 'react';
import { useStore } from '../hooks/store.hook';
import { Blockchain, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { useWalletContext } from '../contexts/wallet.context';
import { useMetaMask } from '../hooks/metamask.hook';

export function WalletBox(): JSX.Element {
  const { loginCompleted } = useWalletContext();
  const { isLoggedIn, session } = useAuthContext();
  const { login, logout } = useSessionContext();
  const { isInstalled, register, unregister } = useMetaMask();
  const { copy } = useClipboard();
  const { toString } = useBlockchain();
  const { showsSignatureInfo } = useStore();
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [newMetaMaskAccount, setNewMetaMaskAccount] = useState<string>();

  useEffect(() => {
    setIsConnected(session?.address !== undefined);
  }, [session?.address]);

  useEffect(() => {
    const handleAccountChanged = (newAccount?: string) => {
      if (!newAccount) {
        logout();
      } else {
        if (session?.address !== newAccount && session?.address) {
          setNewMetaMaskAccount(newAccount);
          handleLogin();
        }
      }
    };

    const handleBlockchainChanged = (newBlockchain?: Blockchain) => null;

    if (isInstalled()) {
      register(handleAccountChanged, handleBlockchainChanged);
    }

    return () => {
      if (isInstalled()) {
        unregister(handleAccountChanged, handleBlockchainChanged);
      }
    };
  }, [session?.address]);

  async function handleLogin() {
    if (showsSignatureInfo.get()) {
      setShowModal(true);
    } else {
      return doLogin();
    }
  }

  async function doLogin(): Promise<void> {
    if (newMetaMaskAccount) {
      await login(newMetaMaskAccount).finally(loginCompleted);
      setNewMetaMaskAccount(undefined);
    }
  }

  function blankedAddress(): string {
    return `${session?.address?.slice(0, 6)}...${session?.address?.slice(session?.address?.length - 5)}`;
  }

  return isConnected ? (
    <>
      <StyledModal
        type={StyledModalType.ALERT}
        width={StyledModalWidth.SMALL}
        onClose={setShowModal}
        isVisible={showModal}
      >
        <StyledVerticalStack gap={5} center>
          <DfxIcon icon={IconVariant.SIGNATURE_POPUP} />
          <h2>
            Log in to your DFX account by verifying with your signature that you are the sole owner of the provided
            blockchain address.
          </h2>
          <StyledCheckboxRow isChecked={isChecked} onChange={setIsChecked} centered>
            Don't show this again.
          </StyledCheckboxRow>

          <StyledButton
            width={StyledButtonWidth.MD}
            color={StyledButtonColor.RED}
            label="OK"
            onClick={() => {
              setShowModal(false);
              showsSignatureInfo.set(!isChecked);
              doLogin();
            }}
          />
        </StyledVerticalStack>
      </StyledModal>
      <StyledDataBox
        heading="Your Wallet"
        boxButtonLabel={isConnected ? (isLoggedIn ? 'Disconnect Wallet' : 'Reconnect to DFX') : undefined}
        boxButtonOnClick={() => (isConnected ? (isLoggedIn ? logout() : handleLogin()) : undefined)}
      >
        <StyledDataTextRow label="Address">
          {blankedAddress()}
          <CopyButton onCopy={() => copy(session?.address)} inline />
        </StyledDataTextRow>
        <StyledDataTextRow label="Blockchain">{session?.blockchains[0] ? toString(session?.blockchains[0]) : ''}</StyledDataTextRow>
        {/* <StyledDataTextRow label="Wallet">{walletType()}</StyledDataTextRow> */}
      </StyledDataBox>
    </>
  ) : (
    <></>
  );
}
