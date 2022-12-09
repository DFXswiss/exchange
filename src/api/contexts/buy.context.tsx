import { createContext, PropsWithChildren, useContext } from 'react';

interface BuyInterface {
  test: string;
}

const BuyContext = createContext<BuyInterface>(undefined as any);

export function useBuyContext(): BuyInterface {
  return useContext(BuyContext);
}

export function BuyContextProvider(props: PropsWithChildren): JSX.Element {
  // Krysh: This is just a placeholder, it will be changed to gather all required information for a buy
  const context: BuyInterface = { test: 'test' };

  return <BuyContext.Provider value={context}>{props.children}</BuyContext.Provider>;
}
