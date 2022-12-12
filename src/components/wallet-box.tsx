import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';

export function WalletBox(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { address, blockchain } = useSessionContext();

  function blankedAddress(): string {
    return `${address?.slice(0, 6)}...${address?.slice(address?.length - 5)}`;
  }

  return (
    <StyledDataBox heading="Your wallet">
      {isConnected && (
        <>
          <StyledDataTextRow label="Metamask">{blankedAddress()}</StyledDataTextRow>
          <StyledDataTextRow label="Connected to">{blockchain}</StyledDataTextRow>
          {/* ToDo (Krysh) show login / logout / disconnect button based on states */}
        </>
      )}
    </StyledDataBox>
  );
}
