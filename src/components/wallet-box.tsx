import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';

export function WalletBox(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { address, blockchain, isLoggedIn, login, logout } = useSessionContext();

  function blankedAddress(): string {
    return `${address?.slice(0, 6)}...${address?.slice(address?.length - 5)}`;
  }

  return (
    <StyledDataBox
      heading="Your wallet"
      boxButtonLabel={isConnected ? (isLoggedIn ? 'Disconnect from DFX' : 'Reconnect to DFX') : undefined}
      boxButtonOnClick={() => (isConnected ? (isLoggedIn ? logout() : login()) : undefined)}
    >
      {isConnected && (
        <>
          <StyledDataTextRow label="Metamask">{blankedAddress()}</StyledDataTextRow>
          <StyledDataTextRow label="Connected to">{blockchain}</StyledDataTextRow>
        </>
      )}
    </StyledDataBox>
  );
}
