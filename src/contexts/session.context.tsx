import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { User } from '../api/user';
import { useStore } from '../hooks/store.hook';
import { useUser } from '../hooks/user.hook';

interface SessionInterface {
  authenticationToken?: string;
  setToken: (authenticationToken: string) => void;
  user?: User;
  changeMail: (mail: string) => Promise<void>;
  isLoggedIn: boolean;
}

const SessionContext = createContext<SessionInterface>(undefined as any);

export function useSessionContext(): SessionInterface {
  return useContext(SessionContext);
}

export function SessionContextProvider(props: PropsWithChildren): JSX.Element {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<User>();
  const { authenticationToken } = useStore();
  const { getUser, changeUser } = useUser();

  const tokenWithFallback = token ?? authenticationToken.get();
  const isLoggedIn = tokenWithFallback != undefined;

  useEffect(() => {
    setToken(authenticationToken.get());
  }, []);

  useEffect(() => {
    getUser(tokenWithFallback).then(setUser);
  }, [isLoggedIn]);

  function setAuthenticationToken(token: string) {
    authenticationToken.set(token);
    setToken(token);
  }

  async function changeMail(mail: string): Promise<void> {
    await changeUser({ ...user, mail }, tokenWithFallback).then(setUser);
  }

  const context: SessionInterface = {
    authenticationToken: tokenWithFallback,
    setToken: setAuthenticationToken,
    user,
    changeMail,
    isLoggedIn,
  };

  return <SessionContext.Provider value={context}>{props.children}</SessionContext.Provider>;
}
