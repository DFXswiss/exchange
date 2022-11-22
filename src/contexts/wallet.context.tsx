import { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import Web3 from 'web3';
import { useApi } from '../hooks/api.hook';
import { useSession } from '../hooks/session.hook';

interface WalletInterface {
  address?: string;
  login: () => Promise<void>;
  isInstalled: boolean;
}

const WalletContext = createContext<WalletInterface>(undefined as any);

export function useWalletContext(): WalletInterface {
  return useContext(WalletContext);
}

export function WalletContextProvider(props: PropsWithChildren): JSX.Element {
  const { address, setAddress } = useSession();
  const { getSignMessage } = useApi();
  const { ethereum } = window as any;
  const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    web3.eth.getAccounts((err, accounts) => {
      setAddress(verifyAccount(accounts));
    });
    ethereum.on('accountsChanged', (accounts: string[]) => {
      setAddress(verifyAccount(accounts));
    });
  }, []);

  const verifyAccount = (accounts: string[]): string | undefined => {
    if (accounts.length <= 0) return undefined;
    // check if address is valid
    return Web3.utils.toChecksumAddress(accounts[0]);
  };

  const isInstalled = (): boolean => {
    return ethereum && ethereum.isMetaMask;
  };

  const login = async () => {
    try {
      const account = verifyAccount(await web3.eth.requestAccounts());
      if (!account) throw new Error('Permission denied or account not verified');
      setAddress(account);

      const message = await getSignMessage();
      console.log(message);

      const signature = await web3.eth.personal.sign(message, account, '');

      console.log(signature);
    } catch (e: any) {
      // TODO (Krysh): real error handling
      // {code: 4001, message: 'User rejected the request.'} = requests accounts cancel
      // {code: 4001, message: 'MetaMask Message Signature: User denied message signature.'} = login signature cancel
      console.error(e.message, e.code);
    }
  };

  const context: WalletInterface = {
    address,
    login,
    isInstalled: isInstalled(),
  };

  return <WalletContext.Provider value={context}>{props.children}</WalletContext.Provider>;
}
