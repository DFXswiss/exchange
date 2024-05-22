import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useMetaMask, WalletType } from '../hooks/metamask.hook';
import { Blockchain } from '@dfx.swiss/react';

interface WalletInterface {
  address?: string;
  blockchain?: Blockchain;
  isInstalled: () => boolean;
  walletType: () => WalletType | undefined;
  isConnected: boolean;
  connect: () => Promise<string>;
  isLoginRequested: boolean;
  requestLogin: () => Promise<void>;
  loginCompleted: () => void;
  signMessage: (message: string, address: string) => Promise<string>;
}

const WalletContext = createContext<WalletInterface>(undefined as any);

export function useWalletContext(): WalletInterface {
  return useContext(WalletContext);
}

export function WalletContextProvider(props: PropsWithChildren): JSX.Element {
  const [address, setAddress] = useState<string>();
  const [blockchain, setBlockchain] = useState<Blockchain>();
  const [isLoginRequested, setIsLoginRequested] = useState<boolean>(false);
  const { isInstalled, walletType, register, requestAccount, requestBlockchain, sign } = useMetaMask();

  console.log("address from wallet.context.tsx", address);
  const isConnected = address !== undefined;

  // useEffect(() => {
  //   register(setAddress, setBlockchain);
  // }, []);

  async function connect(): Promise<string> {
    const account = await requestAccount();
    if (!account) throw new Error('Permission denied or account not verified');

    setAddress(account);
    setBlockchain(await requestBlockchain());
    return account;
  }

  async function requestLogin(): Promise<void> {
    if (!isConnected) await connect();
    setIsLoginRequested(true);
  }

  function loginCompleted() {
    setIsLoginRequested(false);
  }

  async function signMessage(message: string, address: string): Promise<string> {
    try {
      return await sign(address, message);
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
    blockchain,
    isInstalled,
    walletType,
    isConnected,
    connect,
    requestLogin,
    loginCompleted,
    isLoginRequested,
    signMessage,
  };

  return <WalletContext.Provider value={context}>{props.children}</WalletContext.Provider>;
}
