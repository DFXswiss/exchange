import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useMetaMask } from '../hooks/metamask.hook';
import { Blockchain } from '@dfx.swiss/react';
import { useStore } from '../hooks/store.hook';

export enum WalletType {
  META_MASK = 'MetaMask',
  RABBY = 'Rabby',
  ALBY = 'Alby',
  LEDGER_BTC = 'LedgerBtc',
  LEDGER_ETH = 'LedgerEth',
  BITBOX_BTC = 'BitBoxBtc',
  BITBOX_ETH = 'BitBoxEth',
  TREZOR_BTC = 'TrezorBtc',
  TREZOR_ETH = 'TrezorEth',
  CLI_BTC = 'CliBtc',
  CLI_XMR = 'CliXmr',
  CLI_ETH = 'CliEth',
  CLI_ADA = 'CliAda',
  CLI_AR = 'CliAr',
  CLI_LN = 'CliLn',
  DFX_TARO = 'DfxTaro',
  WALLET_CONNECT = 'WalletConnect',
  CAKE = 'Cake',
  MONERO = 'Monero',
  MAIL = 'Mail',
}

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
  setBlockchain: (blockchain: Blockchain) => void;
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
  const { isInstalled, requestAccount, requestBlockchain, sign } = useMetaMask();
  const { activeWallet } = useStore();


  const isConnected = address !== undefined;

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

  function walletType(): WalletType | undefined {
    return activeWallet.get() as WalletType;
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
    setBlockchain,
    signMessage,
  };

  return <WalletContext.Provider value={context}>{props.children}</WalletContext.Provider>;
}
