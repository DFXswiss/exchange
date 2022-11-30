import { useApiSession } from '../api/hooks/api-session.hook';
import { useWalletContext } from '../contexts/wallet.context';

export interface SessionInterface {
  isMetaMaskInstalled: boolean;
  address?: string;
  isLoggedIn: boolean;
  login: () => Promise<void>;
}

export function useSession(): SessionInterface {
  const { isLoggedIn, getSignMessage, createSession } = useApiSession();
  const { isInstalled, isConnected, address, connect, signMessage } = useWalletContext();

  async function login(): Promise<void> {
    let connectedAddress = address;
    if (!isConnected) {
      connectedAddress = await connect();
    }
    if (!connectedAddress) return; // TODO (Krysh) add real error handling in here
    // if we are already logged in, do not trigger another signature
    if (isLoggedIn) return;
    const message = await getSignMessage(connectedAddress);
    const signature = await signMessage(message, connectedAddress);
    return createSession(connectedAddress, signature);
  }

  return { isMetaMaskInstalled: isInstalled, address, isLoggedIn, login };
}