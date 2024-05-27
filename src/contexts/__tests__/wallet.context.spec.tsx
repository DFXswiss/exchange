import { fireEvent, render, waitFor } from '@testing-library/react';
import { Blockchain } from '@dfx.swiss/react';
import { AssetBalance, useMetaMask } from '../../hooks/metamask.hook';
import { useWalletContext, WalletContextProvider } from '../wallet.context';

jest.mock('../../hooks/metamask.hook');

const mockUseMetaMask = useMetaMask as jest.MockedFunction<typeof useMetaMask>;

const TestingComponent = (): JSX.Element => {
  const { isInstalled, isConnected, address, blockchain, signMessage, connect } = useWalletContext();

  return (
    <>
      <p data-testid="is-installed">{isInstalled()?.toString()}</p>
      <p data-testid="is-connected">{isConnected?.toString()}</p>
      <p data-testid="address">{address}</p>
      <p data-testid="blockchain">{blockchain}</p>
      <button
        data-testid="sign-message"
        onClick={() =>
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          signMessage('a-test-sign-message', 'a-test-address').catch(() => { })
        }
      />
      <button
        data-testid="connect"
        onClick={() =>
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          connect().catch(() => { })
        }
      />
    </>
  );
};

interface MockInput {
  isInstalled?: boolean;
  address?: string;
  blockchain?: Blockchain;
  addContract?: boolean;
  balance?: AssetBalance;
  txId?: string;
}

interface Mock {
  isInstalled: () => boolean;
  walletType: jest.Mock<any, any>;
  register: jest.Mock<any, any>;
  unregister: jest.Mock<any, any>;
  getAccount: jest.Mock<any, any>;
  requestAccount: jest.Mock<any, any>;
  requestBlockchain: jest.Mock<any, any>;
  requestChangeToBlockchain: jest.Mock<any, any>;
  requestBalance: jest.Mock<any, any>;
  sign: jest.Mock<any, any>;
  addContract: jest.Mock<any, any>;
  readBalance: jest.Mock<any, any>;
  createTransaction: jest.Mock<any, any>;
}

interface Setup {
  isInstalled: HTMLElement;
  isConnected: HTMLElement;
  address: HTMLElement;
  blockchain: HTMLElement;
  signMessage: HTMLElement;
  connect: HTMLElement;

  register: jest.Mock<any, any>;
  getAccount: jest.Mock<any, any>;
  requestAccount: jest.Mock<any, any>;
  requestBlockchain: jest.Mock<any, any>;
  requestChangeToBlockchain: jest.Mock<any, any>;
  requestBalance: jest.Mock<any, any>;
  sign: jest.Mock<any, any>;
  addContract: jest.Mock<any, any>;
  readBalance: jest.Mock<any, any>;
  createTransaction: jest.Mock<any, any>;
}

describe('WalletContextProvider', () => {
  function mockAndRenderTestElements({
    isInstalled,
    walletType,
    register,
    unregister,
    getAccount,
    requestAccount,
    requestBlockchain,
    requestBalance,
    requestChangeToBlockchain,
    sign,
    addContract,
    readBalance,
    createTransaction,
  }: Mock): Setup {
    mockUseMetaMask.mockImplementation(() => ({
      isInstalled,
      walletType,
      register,
      unregister,
      getAccount,
      requestAccount,
      requestBlockchain,
      requestChangeToBlockchain,
      requestBalance,
      sign,
      addContract,
      readBalance,
      createTransaction,
    }));

    const { getByTestId } = render(
      <WalletContextProvider>
        <TestingComponent />
      </WalletContextProvider>,
    );

    return {
      isInstalled: getByTestId('is-installed'),
      isConnected: getByTestId('is-connected'),
      address: getByTestId('address'),
      blockchain: getByTestId('blockchain'),
      connect: getByTestId('connect'),
      signMessage: getByTestId('sign-message'),
      register,
      getAccount,
      requestAccount,
      requestBlockchain,
      requestBalance,
      requestChangeToBlockchain,
      sign,
      addContract,
      readBalance,
      createTransaction,
    };
  }

  function createMock({ isInstalled, address, blockchain, addContract, balance, txId }: MockInput = {}): Mock {
    return {
      isInstalled: () => isInstalled ?? true,
      walletType: jest.fn(),
      register: jest.fn(),
      unregister: jest.fn(),
      getAccount: jest.fn(() => address),
      requestAccount: jest.fn(() => address),
      requestBlockchain: jest.fn(() => blockchain),
      requestChangeToBlockchain: jest.fn(),
      requestBalance: jest.fn(() => Promise.resolve('0')),
      sign: jest.fn(),
      addContract: jest.fn(() => addContract),
      readBalance: jest.fn(() => balance),
      createTransaction: jest.fn(() => txId),
    };
  }

  const setup = {
    installed: (): Setup => {
      return mockAndRenderTestElements(createMock({ isInstalled: true }));
    },
    notInstalled: (): Setup => {
      return mockAndRenderTestElements(createMock({ isInstalled: false }));
    },
    connectSuccess: (): Setup => {
      return mockAndRenderTestElements(createMock({ address: 'test-address', blockchain: Blockchain.ETHEREUM }));
    },
    connectFail: (): Setup => {
      return mockAndRenderTestElements(createMock());
    },
    connected: (): Setup => {
      return mockAndRenderTestElements(createMock());
    },
  };

  it('should return is installed, not connected and an empty address if installed', () => {
    const { isInstalled, isConnected, address } = setup.installed();
    expect(isInstalled.textContent).toEqual('true');
    expect(isConnected.textContent).toEqual('false');
    expect(address.textContent).toEqual('');
  });

  it('should return not installed, not connected and an empty address if not installed', () => {
    const { isInstalled, isConnected, address } = setup.notInstalled();
    expect(isInstalled.textContent).toEqual('false');
    expect(isConnected.textContent).toEqual('false');
    expect(address.textContent).toEqual('');
  });

  it('should show address and blockchain if connect is successful', async () => {
    const { connect, address, blockchain, requestAccount, requestBlockchain } = setup.connectSuccess();
    fireEvent.click(connect);

    await waitFor(() => {
      expect(requestAccount).toBeCalled();
      expect(requestBlockchain).toBeCalled();
      expect(address.textContent).toEqual('test-address');
      expect(blockchain.textContent).toEqual(Blockchain.ETHEREUM);
    });
  });

  it('should not show address and blockchain if connect fails', async () => {
    const { connect, address, blockchain, requestAccount, requestBlockchain } = setup.connectFail();
    fireEvent.click(connect);

    await waitFor(() => {
      expect(requestAccount).toBeCalled();
      expect(requestBlockchain).toBeCalledTimes(0);
      expect(address.textContent).toEqual('');
      expect(blockchain.textContent).toEqual('');
    });
  });

  it('should call sign with address and message', async () => {
    const { signMessage, sign } = setup.connected();
    fireEvent.click(signMessage);

    await waitFor(() => {
      expect(sign).toBeCalledWith('a-test-address', 'a-test-sign-message');
    });
  });
});
