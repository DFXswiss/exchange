import { useWalletContext } from '../contexts/wallet.context';
import { useSession } from '../hooks/session.hook';
import StyledButton from '../stories/StyledButton';

export function Connect(): JSX.Element {
  const { isConnected } = useWalletContext();
  const { login } = useSession();

  return (
    <div className={isConnected ? 'hidden' : ''}>
      <StyledButton label="Connect to Metamask" onClick={login} />
    </div>
  );
}
