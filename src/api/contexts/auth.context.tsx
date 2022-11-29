import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useStore } from '../../hooks/store.hook';

interface AuthInterface {
  authenticationToken?: string;
  setAuthenticationToken: (authenticationToken: string) => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthInterface>(undefined as any);

export function useAuthContext(): AuthInterface {
  return useContext(AuthContext);
}

export function AuthContextProvider(props: PropsWithChildren): JSX.Element {
  const [token, setToken] = useState<string>();
  const { authenticationToken } = useStore();

  const tokenWithFallback = token ?? authenticationToken.get();
  const isLoggedIn = tokenWithFallback != undefined;

  useEffect(() => {
    setToken(authenticationToken.get());
  }, []);

  function setAuthenticationToken(token: string) {
    authenticationToken.set(token);
    setToken(token);
  }

  const context: AuthInterface = {
    authenticationToken: tokenWithFallback,
    setAuthenticationToken,
    isLoggedIn,
  };

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
}
