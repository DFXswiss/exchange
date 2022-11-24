import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useStore } from '../hooks/store.hook';

interface SessionInterface {
  authenticationToken?: string;
  setSession(authenticationToken: string): void;
}

const SessionContext = createContext<SessionInterface>(undefined as any);

export function useSessionContext(): SessionInterface {
  return useContext(SessionContext);
}

export function SessionContextProvider(props: PropsWithChildren): JSX.Element {
  const [token, setToken] = useState<string>();
  const { authenticationToken } = useStore();

  useEffect(() => {
    setToken(authenticationToken.get());
  }, []);

  function setSession(token: string) {
    authenticationToken.set(token);
    setToken(token);
  }

  const context: SessionInterface = { authenticationToken: token, setSession };

  return <SessionContext.Provider value={context}>{props.children}</SessionContext.Provider>;
}
