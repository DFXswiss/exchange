import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Country } from '../definitions/country';
import { useCountry } from '../hooks/country.hook';
import { useAuthContext } from './auth.context';

interface CountryInterface {
  countries: Country[];
  countriesLoading: boolean;
}

const CountryContext = createContext<CountryInterface>(undefined as any);

export function useCountryContext(): CountryInterface {
  return useContext(CountryContext);
}

export function CountryContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn } = useAuthContext();
  const { getCountries } = useCountry();
  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesLoading, setCountriesLoading] = useState<boolean>(false);

  useEffect(() => {
    setCountriesLoading(true);
    getCountries()
      .then(setCountries)
      .finally(() => setCountriesLoading(false));
  }, [isLoggedIn]);

  const context: CountryInterface = { countries, countriesLoading };

  return <CountryContext.Provider value={context}>{props.children}</CountryContext.Provider>;
}
