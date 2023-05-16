import Web3 from 'web3';
import { Blockchain } from '../api/definitions/blockchain';
import { useBlockchain } from './blockchain.hook';
import { Buffer } from 'buffer';

export interface MetaMaskInterface {
  isInstalled: boolean;
  register: (
    onAccountChanged: (account?: string) => void,
    onBlockchainChanged: (blockchain?: Blockchain) => void,
  ) => void;
  requestAccount: () => Promise<string | undefined>;
  requestBlockchain: () => Promise<Blockchain | undefined>;
  requestChangeToBlockchain: (blockchain?: Blockchain) => Promise<void>;
  requestBalance: (account: string) => Promise<string | undefined>;
  sign: (address: string, message: string) => Promise<string>;
  addContract: (address: string, svgData: string) => Promise<boolean>;
}

interface MetaMaskError {
  code: number;
  message: string;
}

export interface MetaMaskChainInterface {
  chainId: string;
  chainName: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export function useMetaMask(): MetaMaskInterface {
  const { ethereum } = window as any;
  const web3 = new Web3(Web3.givenProvider);
  const { toBlockchain, toChainId, toChainObject } = useBlockchain();

  const isInstalled = Boolean(ethereum && ethereum.isMetaMask);

  function register(
    onAccountChanged: (account?: string) => void,
    onBlockchainChanged: (blockchain?: Blockchain) => void,
  ) {
    web3.eth.getAccounts((_err, accounts) => {
      onAccountChanged(verifyAccount(accounts));
    });
    web3.eth.getChainId((_err, chainId) => {
      onBlockchainChanged(toBlockchain(chainId));
    });
    ethereum?.on('accountsChanged', (accounts: string[]) => {
      onAccountChanged(verifyAccount(accounts));
    });
    ethereum?.on('chainChanged', (chainId: string) => {
      onBlockchainChanged(toBlockchain(chainId));
      // Following is a recommendation of metamask documentation. I am not sure, if we will need it.
      // Handle the new chain.
      // Correctly handling chain changes can be complicated.
      // We recommend reloading the page unless you have good reason not to.
      // window.location.reload();
    });
  }

  async function requestAccount(): Promise<string | undefined> {
    return verifyAccount(await web3.eth.requestAccounts());
  }

  async function requestBlockchain(): Promise<Blockchain | undefined> {
    return toBlockchain(await web3.eth.getChainId());
  }

  async function requestChangeToBlockchain(blockchain?: Blockchain): Promise<void> {
    if (!blockchain) return;
    const id = toChainId(blockchain);
    if (!id) return;
    const chainId = web3.utils.toHex(id);
    return ethereum.sendAsync(
      {
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      },
      (e?: MetaMaskError) => {
        // 4902 chain is not yet added to MetaMask, therefore add chainId to MetaMask
        if (e && e.code === 4902) {
          requestAddChainId(blockchain);
        }
      },
    );
  }

  async function requestAddChainId(blockchain: Blockchain): Promise<void> {
    return ethereum.sendAsync({
      method: 'wallet_addEthereumChain',
      params: [toChainObject(blockchain)],
    });
  }

  async function requestBalance(account: string): Promise<string | undefined> {
    return web3.eth.getBalance(account);
  }

  async function sign(address: string, message: string): Promise<string> {
    return web3.eth.personal.sign(message, address, '');
  }

  async function addContract(address: string, svgData: string): Promise<boolean> {
    const tokenContract = new web3.eth.Contract(
      [
        {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              name: '',
              type: 'string',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [
            {
              name: '',
              type: 'uint8',
            },
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function',
        },
      ],
      address,
    );

    const symbol = await tokenContract.methods.symbol().call();
    const decimals = await tokenContract.methods.decimals().call();

    return ethereum.sendAsync({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address,
          symbol,
          decimals,
          image: `data:image/svg+xml;base64,${Buffer.from(svgData).toString('base64')}`,
        },
      },
      id: Math.round(Math.random() * 10000),
    });
  }

  function verifyAccount(accounts: string[]): string | undefined {
    if ((accounts?.length ?? 0) <= 0) return undefined;
    // check if address is valid
    return Web3.utils.toChecksumAddress(accounts[0]);
  }

  return {
    isInstalled,
    register,
    requestAccount,
    requestBlockchain,
    requestChangeToBlockchain,
    requestBalance,
    sign,
    addContract,
  };
}
