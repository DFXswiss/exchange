import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { User } from '../definitions/user';
import { useUser } from '../hooks/user.hook';
import { useAuthContext } from './auth.context';

interface UserInterface {
  user?: User;
  userLoading: boolean;
  changeMail: (mail: string) => Promise<void>;
}

const UserContext = createContext<UserInterface>(undefined as any);

export function useUserContext(): UserInterface {
  return useContext(UserContext);
}

export function UserContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn } = useAuthContext();
  const { getUser, changeUser } = useUser();
  const [user, setUser] = useState<User>();
  const [userLoading, setUserLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoggedIn) {
      setUserLoading(true);
      getUser()
        .then(setUser)
        .catch(console.error) // TODO (Krysh) add real error handling
        .finally(() => setUserLoading(false));
    } else {
      setUser(undefined);
    }
  }, [isLoggedIn]);

  async function changeMail(mail: string): Promise<void> {
    if (!user) return; // TODO (Krysh) add real error handling
    setUserLoading(true);
    changeUser({ ...user, mail })
      .then(setUser)
      .catch(console.error) // TODO (Krysh) add real error handling
      .finally(() => setUserLoading(false));
  }

  const context: UserInterface = { user, userLoading, changeMail };

  return <UserContext.Provider value={context}>{props.children}</UserContext.Provider>;
}
