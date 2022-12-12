import { createContext, PropsWithChildren, useContext } from 'react';
import { Blockchain } from '../api/definitions/blockchain';
import { ApiError } from '../api/definitions/error';
import { useApiSession } from '../api/hooks/api-session.hook';
import { useWalletContext } from './wallet.context';

export interface SessionInterface {
  isMetaMaskInstalled: boolean;
  address?: string;
  blockchain?: Blockchain;
  isLoggedIn: boolean;
  login: (tncCallback?: () => Promise<void>) => Promise<void>;
}

const SessionContext = createContext<SessionInterface>(undefined as any);

export function useSessionContext(): SessionInterface {
  return useContext(SessionContext);
}

export function SessionContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn, getSignMessage, createSession } = useApiSession();
  const { isInstalled, isConnected, address, blockchain, connect, signMessage } = useWalletContext();

  async function login(tncCallback?: () => Promise<void>): Promise<void> {
    let connectedAddress = address;
    if (!isConnected) {
      connectedAddress = await connect();
    }
    if (!connectedAddress) return; // TODO (Krysh) add real error handling in here
    // if we are already logged in, do not trigger another signature
    if (isLoggedIn) return;

    const message = await getSignMessage(connectedAddress);
    const signature = await signMessage(message, connectedAddress);

    return loginToApi(connectedAddress, signature, tncCallback);
  }

  async function loginToApi(address: string, signature: string, waitForTnc?: () => Promise<void>): Promise<void> {
    createSession(address, signature, false).catch((error: ApiError) => {
      if (error.statusCode === 404 && waitForTnc) {
        return waitForTnc().then(() => signUp(address, signature));
      }
    });
  }

  async function signUp(address: string, signature: string): Promise<void> {
    return createSession(address, signature, true);
  }

  const context = { isMetaMaskInstalled: isInstalled, address, blockchain, isLoggedIn, login };

  return <SessionContext.Provider value={context}>{props.children}</SessionContext.Provider>;
}
