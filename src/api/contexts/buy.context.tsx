import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Fiat } from '../definitions/fiat';
import { useFiat } from '../hooks/fiat.hook';
import { useAuthContext } from './auth.context';
import { CreateBankAccount, useBankAccount } from '../hooks/bank-account.hook';
import { BankAccount } from '../definitions/bank-account';
import { useBuy } from '../hooks/buy.hook';
import { Buy, BuyPaymentInfo } from '../definitions/buy';

interface BuyInterface {
  currencies?: Fiat[];
  bankAccounts?: BankAccount[];
  createAccount: (newAccount: CreateBankAccount) => Promise<BankAccount>;
  receiveFor: (info: BuyPaymentInfo) => Promise<Buy>;
}

const BuyContext = createContext<BuyInterface>(undefined as any);

export function useBuyContext(): BuyInterface {
  return useContext(BuyContext);
}

export function BuyContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn } = useAuthContext();
  const [currencies, setCurrencies] = useState<Fiat[]>();
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>();
  const { getCurrencies } = useFiat();
  const { getAccounts, createAccount } = useBankAccount();
  const { receiveFor } = useBuy();

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getCurrencies(), getAccounts()])
        .then(([currencies, bankAccounts]) => {
          setCurrencies(currencies.filter((c) => c.sellable));
          setBankAccounts(bankAccounts);
        })
        .catch(console.error); // TODO (Krysh) add real error handling
    }
  }, [isLoggedIn]);

  async function addNewAccount(newAccount: CreateBankAccount): Promise<BankAccount> {
    return createAccount(newAccount).then((b) => {
      setBankAccounts(bankAccounts?.concat(b));
      return b;
    });
  }

  const context: BuyInterface = { currencies, bankAccounts, createAccount: addNewAccount, receiveFor };

  return <BuyContext.Provider value={context}>{props.children}</BuyContext.Provider>;
}
