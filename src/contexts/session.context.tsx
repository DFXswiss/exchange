import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface SessionInterface {
  authenticationToken?: string;
  createSession: (address: string, signature: string) => Promise<string>;
}

const SessionContext = createContext<SessionInterface>(undefined as any);

export function useSessionContext(): SessionInterface {
  return useContext(SessionContext);
}

export function SessionContextProvider(props: PropsWithChildren): JSX.Element {
  const [authenticationToken, setAuthenticationToken] = useState<string>();

  const createSession = async (address: string, signature: string): Promise<string> => {
    console.log('create session', address, signature);
    setAuthenticationToken('test');
    return '';
  };

  const context: SessionInterface = { authenticationToken, createSession };

  return <SessionContext.Provider value={context}>{props.children}</SessionContext.Provider>;
}
