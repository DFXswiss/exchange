import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';
import { IconButton } from '../stories/StyledIconButton.stories';
import { IconVariant } from '../stories/DfxIcon';
import { useClipboard } from '../hooks/clipboard.hook';

export function WalletBox(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { address, blockchain, isLoggedIn, login, logout } = useSessionContext();
  const { copy } = useClipboard();

  function blankedAddress(): string {
    return `${address?.slice(0, 6)}...${address?.slice(address?.length - 5)}`;
  }

  return isConnected ? (
    <StyledDataBox
      heading="Your wallet"
      boxButtonLabel={isConnected ? (isLoggedIn ? 'Disconnect from DFX' : 'Reconnect to DFX') : undefined}
      boxButtonOnClick={() => (isConnected ? (isLoggedIn ? logout() : login()) : undefined)}
    >
      <StyledDataTextRow label="Metamask">
        {blankedAddress()}
        <IconButton icon={IconVariant.COPY} onClick={() => copy(address)} inline />
      </StyledDataTextRow>
      <StyledDataTextRow label="Connected to">{blockchain}</StyledDataTextRow>
    </StyledDataBox>
  ) : (
    <></>
  );
}
