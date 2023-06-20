import Web3 from 'web3';
import { useBlockchain } from './blockchain.hook';
import { Buffer } from 'buffer';
import BigNumber from 'bignumber.js';
import ERC20_ABI from '../static/erc20.abi.json';
import { Contract } from 'web3-eth-contract';
import { Asset, Blockchain } from '@dfx.swiss/react';
import { AssetType } from '@dfx.swiss/react/dist/definitions/asset';

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
  addContract: (asset: Asset, svgData: string, currentBlockchain?: Blockchain) => Promise<boolean>;
  readBalance: (asset: Asset, address?: string) => Promise<AssetBalance>;
  createTransaction: (amount: BigNumber, asset: Asset, from: string, to: string) => Promise<string>;
}

export interface AssetBalance {
  asset: Asset;
  balance: BigNumber;
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
    await ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
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

  async function addContract(asset: Asset, svgData: string, currentBlockchain?: Blockchain): Promise<boolean> {
    if (asset.blockchain !== currentBlockchain) {
      await requestChangeToBlockchain(asset.blockchain);
      return false;
    }
    const tokenContract = createContract(asset.chainId);

    const symbol = await tokenContract.methods.symbol().call();
    const decimals = await tokenContract.methods.decimals().call();

    return ethereum.sendAsync({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: asset.chainId,
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

  function toUsableNumber(balance: any, decimals = 18): BigNumber {
    return new BigNumber(balance).dividedBy(Math.pow(10, decimals));
  }

  async function readBalance(asset: Asset, address?: string): Promise<AssetBalance> {
    if (!address || !asset) return { asset, balance: new BigNumber(0) };
    if (asset.type === AssetType.COIN) {
      return web3.eth.getBalance(address).then((balance) => ({ asset, balance: toUsableNumber(balance) }));
    }
    try {
      const tokenContract = createContract(asset.chainId);
      const decimals = await tokenContract.methods.decimals().call();
      return await tokenContract.methods
        .balanceOf(address)
        .call()
        .then((balance: any) => ({ asset, balance: toUsableNumber(balance, decimals) }));
    } catch {
      return { asset, balance: new BigNumber(0) };
    }
  }

  async function createTransaction(amount: BigNumber, asset: Asset, from: string, to: string): Promise<string> {
    if (asset.type === AssetType.COIN) {
      const transactionData = { from, to, value: web3.utils.toWei(amount.toString(), 'ether') };
      return web3.eth.sendTransaction(transactionData).then((value) => value.transactionHash);
    } else {
      const tokenContract = createContract(asset.chainId);
      const decimals = await tokenContract.methods.decimals().call();
      const adjustedAmount = amount.multipliedBy(Math.pow(10, decimals));
      return tokenContract.methods
        .transfer(to, adjustedAmount.toString())
        .send({ from })
        .then((value: any) => value.transactionHash);
    }
  }

  function createContract(chainId?: string): Contract {
    return new web3.eth.Contract(ERC20_ABI as any, chainId);
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
    readBalance,
    createTransaction,
  };
}
