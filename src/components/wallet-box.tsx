import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';
import { IconVariant } from '../stories/DfxIcon';
import { useClipboard } from '../hooks/clipboard.hook';
import StyledIconButton from '../stories/StyledIconButton';

export function WalletBox(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { address, blockchain, isLoggedIn, login, logout } = useSessionContext();
  const { copy } = useClipboard();

  function blankedAddress(): string {
    return `${address?.slice(0, 6)}...${address?.slice(address?.length - 5)}`;
  }

  return isConnected ? (
    <StyledDataBox
      heading="Your Wallet"
      boxButtonLabel={isConnected ? (isLoggedIn ? 'Disconnect from DFX' : 'Reconnect to DFX') : undefined}
      boxButtonOnClick={() => (isConnected ? (isLoggedIn ? logout() : login()) : undefined)}
    >
      <StyledDataTextRow label="MetaMask">
        {blankedAddress()}
        <StyledIconButton icon={IconVariant.COPY} onClick={() => copy(address)} inline />
      </StyledDataTextRow>
      <StyledDataTextRow label="Connected to">{blockchain}</StyledDataTextRow>
    </StyledDataBox>
  ) : (
    <></>
  );
}
