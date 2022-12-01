import { Blockchain } from '../api/definitions/blockchain';
import { useApiSession } from '../api/hooks/api-session.hook';
import { useWalletContext } from '../contexts/wallet.context';

export interface SessionInterface {
  isMetaMaskInstalled: boolean;
  address?: string;
  blockchain?: Blockchain;
  isLoggedIn: boolean;
  login: () => Promise<void>;
}

export function useSession(): SessionInterface {
  const { isLoggedIn, getSignMessage, createSession } = useApiSession();
  const { isInstalled, isConnected, address, blockchain, connect, signMessage } = useWalletContext();

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

  return { isMetaMaskInstalled: isInstalled, address, blockchain, isLoggedIn, login };
}
