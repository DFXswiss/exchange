import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';
import { IconVariant } from '../stories/DfxIcon';
import { useClipboard } from '../hooks/clipboard.hook';
import StyledIconButton from '../stories/StyledIconButton';
import { useBlockchain } from '../hooks/blockchain.hook';
import { CopyButton } from './copy-button';

interface WalletBoxProps {
  onInfoClick: () => void;
}

export function WalletBox({ onInfoClick }: WalletBoxProps): JSX.Element {
  const { isConnected } = useWalletContext();
  const { address, blockchain, isLoggedIn, login, logout } = useSessionContext();
  const { copy } = useClipboard();
  const { toString } = useBlockchain();

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
        <CopyButton onCopy={() => copy(address)} inline />
      </StyledDataTextRow>
      <StyledDataTextRow label="Connected to">
        {blockchain ? toString(blockchain) : ''}
        <StyledIconButton icon={IconVariant.INFO_OUTLINE} onClick={onInfoClick} inline />
      </StyledDataTextRow>
    </StyledDataBox>
  ) : (
    <></>
  );
}
