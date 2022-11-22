import { createContext, PropsWithChildren, useContext } from 'react';
import Web3 from 'web3';
import { useApi } from '../hooks/api.hook';
import { useSession } from '../hooks/session.hook';

interface WalletInterface {
  address?: string;
  login: () => Promise<void>;
}

const WalletContext = createContext<WalletInterface>(undefined as any);

export function useWalletContext(): WalletInterface {
  return useContext(WalletContext);
}

export function WalletContextProvider(props: PropsWithChildren): JSX.Element {
  const { address, setAddress } = useSession();
  const { getSignMessage } = useApi();

  const login = async () => {
    try {
      // request meta mask addresses, this will open meta mask and we
      // will receive an array of ETH addresses
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });

      // check if address is valid
      const account = Web3.utils.toChecksumAddress(accounts[0]);
      console.log(account);
      setAddress(account);

      const message = await getSignMessage();
      console.log(message);

      const web3 = new Web3(Web3.givenProvider);
      const signature = await web3.eth.personal.sign(message, account, '');

      console.log(signature);
    } catch (e) {
      // TODO (Krysh): real error handling
      console.error(e);
    }
  };

  const context: WalletInterface = {
    address,
    login,
  };

  return <WalletContext.Provider value={context}>{props.children}</WalletContext.Provider>;
}
