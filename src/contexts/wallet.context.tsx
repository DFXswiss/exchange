import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

interface WalletInterface {
  address?: string;
  isInstalled: boolean;
  isConnected: boolean;
  connect: () => Promise<string>;
  signMessage: (message: string, address: string) => Promise<string>;
}

const WalletContext = createContext<WalletInterface>(undefined as any);

export function useWalletContext(): WalletInterface {
  return useContext(WalletContext);
}

export function WalletContextProvider(props: PropsWithChildren): JSX.Element {
  const [address, setAddress] = useState<string>();
  const { ethereum } = window as any;
  const web3 = new Web3(Web3.givenProvider);

  const isInstalled = ethereum && ethereum.isMetaMask;
  const isConnected = address !== undefined;

  useEffect(() => {
    web3.eth.getAccounts((err, accounts) => {
      setAddress(verifyAccount(accounts));
    });
    ethereum?.on('accountsChanged', (accounts: string[]) => {
      setAddress(verifyAccount(accounts));
    });
  }, []);

  function verifyAccount(accounts: string[]): string | undefined {
    if ((accounts?.length ?? 0) <= 0) return undefined;
    // check if address is valid
    return Web3.utils.toChecksumAddress(accounts[0]);
  }

  async function connect(): Promise<string> {
    const account = verifyAccount(await web3.eth.requestAccounts());
    if (!account) throw new Error('Permission denied or account not verified');
    setAddress(account);
    return account;
  }

  async function signMessage(message: string, address: string): Promise<string> {
    try {
      return await web3.eth.personal.sign(message, address, '');
    } catch (e: any) {
      // TODO (Krysh): real error handling
      // {code: 4001, message: 'User rejected the request.'} = requests accounts cancel
      // {code: 4001, message: 'MetaMask Message Signature: User denied message signature.'} = login signature cancel
      console.error(e.message, e.code);
      throw e;
    }
  }

  const context: WalletInterface = {
    address,
    isInstalled,
    isConnected,
    connect,
    signMessage,
  };

  return <WalletContext.Provider value={context}>{props.children}</WalletContext.Provider>;
}
