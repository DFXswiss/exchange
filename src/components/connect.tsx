import { useWalletContext } from '../contexts/wallet.context';
import { useSessionContext } from '../contexts/session.context';
import StyledButton from '../stories/StyledButton';

export function Connect(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { login } = useSessionContext();

  return (
    <div className={isConnected ? 'hidden' : ''}>
      <StyledButton label="Connect to Metamask" onClick={login} />
    </div>
  );
}
