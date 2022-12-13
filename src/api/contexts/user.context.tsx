import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Country } from '../definitions/country';
import { User } from '../definitions/user';
import { useCountry } from '../hooks/country.hook';
import { useUser } from '../hooks/user.hook';
import { useAuthContext } from './auth.context';

interface UserInterface {
  user?: User;
  countries: Country[];
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
  const { getCountries } = useCountry();
  const [user, setUser] = useState<User>();
  const [countries, setCountries] = useState<Country[]>([]);
  const [userLoading, setUserLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isLoggedIn) {
      setUserLoading(true);
      getUser()
        .then(setUser)
        .catch(console.error) // TODO (Krysh) add real error handling
        .finally(() => setUserLoading(false));

      getCountries().then(setCountries);
    } else {
      setUser(undefined);
      setCountries([]);
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

  const context: UserInterface = { user, countries, userLoading, changeMail };

  return <UserContext.Provider value={context}>{props.children}</UserContext.Provider>;
}
