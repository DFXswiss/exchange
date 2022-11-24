import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useStore } from '../hooks/store.hook';

interface SessionInterface {
  authenticationToken?: string;
  setSession(authenticationToken: string): void;
  isLoggedIn: boolean;
}

const SessionContext = createContext<SessionInterface>(undefined as any);

export function useSessionContext(): SessionInterface {
  return useContext(SessionContext);
}

export function SessionContextProvider(props: PropsWithChildren): JSX.Element {
  const [token, setToken] = useState<string>();
  const { authenticationToken } = useStore();

  const tokenWithFallback = token ?? authenticationToken.get();
  const isLoggedIn = tokenWithFallback != undefined;

  useEffect(() => {
    setToken(authenticationToken.get());
  }, []);

  function setSession(token: string) {
    authenticationToken.set(token);
    setToken(token);
  }

  const context: SessionInterface = { authenticationToken: tokenWithFallback, setSession, isLoggedIn };

  return <SessionContext.Provider value={context}>{props.children}</SessionContext.Provider>;
}
