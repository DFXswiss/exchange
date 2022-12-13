import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Blockchain } from '../api/definitions/blockchain';
import { ApiError } from '../api/definitions/error';
import { useApiSession } from '../api/hooks/api-session.hook';
import { useWalletContext } from './wallet.context';

export interface SessionInterface {
  isMetaMaskInstalled: boolean;
  address?: string;
  blockchain?: Blockchain;
  isLoggedIn: boolean;
  needsSignUp: boolean;
  login: () => Promise<void>;
  signUp: () => Promise<void>;
  logout: () => Promise<void>;
}

const SessionContext = createContext<SessionInterface>(undefined as any);

export function useSessionContext(): SessionInterface {
  return useContext(SessionContext);
}

export function SessionContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn, getSignMessage, createSession, deleteSession } = useApiSession();
  const { isInstalled, isConnected, address, blockchain, connect, signMessage } = useWalletContext();
  const [needsSignUp, setNeedsSignUp] = useState(false);
  const [signature, setSignature] = useState<string>();

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
    return createSession(connectedAddress, signature, false).catch((error: ApiError) => {
      if (error.statusCode === 404) {
        setSignature(signature);
        setNeedsSignUp(true);
      }
    });
  }

  async function signUp(): Promise<void> {
    if (!address || !signature) return; // TODO (Krysh) add real error handling
    return createSession(address, signature, true).finally(() => {
      setSignature(undefined);
      setNeedsSignUp(false);
    });
  }

  async function logout(): Promise<void> {
    await deleteSession();
  }

  const context = {
    isMetaMaskInstalled: isInstalled,
    address,
    blockchain,
    isLoggedIn,
    needsSignUp,
    login,
    signUp,
    logout,
  };

  return <SessionContext.Provider value={context}>{props.children}</SessionContext.Provider>;
}
