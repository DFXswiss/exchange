import { fireEvent, render, waitFor } from '@testing-library/react';
import { Blockchain } from '../../api/definitions/blockchain';
import { useMetaMask } from '../../hooks/metamask.hook';
import { useWalletContext, WalletContextProvider } from '../wallet.context';

jest.mock('../../hooks/metamask.hook');

const mockUseMetaMask = useMetaMask as jest.MockedFunction<typeof useMetaMask>;

const TestingComponent = (): JSX.Element => {
  const { isInstalled, isConnected, address, blockchain, signMessage, connect } = useWalletContext();

  return (
    <>
      <p data-testid="is-installed">{isInstalled?.toString()}</p>
      <p data-testid="is-connected">{isConnected?.toString()}</p>
      <p data-testid="address">{address}</p>
      <p data-testid="blockchain">{blockchain}</p>
      <button
        data-testid="sign-message"
        onClick={() =>
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          signMessage('a-test-sign-message', 'a-test-address').catch(() => {})
        }
      />
      <button
        data-testid="connect"
        onClick={() =>
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          connect().catch(() => {})
        }
      />
    </>
  );
};

enum Test {
  NOT_INSTALLED,
  INSTALLED,
  CONNECT_SUCCESS,
  CONNECT_FAIL,
  CONNECTED,
}

interface Setup {
  isInstalled: HTMLElement;
  isConnected: HTMLElement;
  address: HTMLElement;
  blockchain: HTMLElement;
  signMessage: HTMLElement;
  connect: HTMLElement;

  register: jest.Mock<any, any>;
  requestAccount: jest.Mock<any, any>;
  requestBlockchain: jest.Mock<any, any>;
  sign: jest.Mock<any, any>;
}

describe('WalletContextProvider', () => {
  function setup(testCase: Test): Setup {
    const isInstalled = testCase === Test.INSTALLED;
    const register = jest.fn();
    const requestAccount: jest.Mock<any, any> =
      testCase === Test.CONNECT_SUCCESS ? jest.fn(() => 'test-address') : jest.fn(() => undefined);
    const requestBlockchain: jest.Mock<any, any> = jest.fn(() => Blockchain.ETH);
    const sign = jest.fn();

    mockUseMetaMask.mockImplementation(() => ({
      isInstalled,
      register,
      requestAccount,
      requestBlockchain,
      sign,
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
      requestAccount,
      requestBlockchain,
      sign,
    };
  }

  it('should return is installed, not connected and an empty address if installed', () => {
    const { isInstalled, isConnected, address } = setup(Test.INSTALLED);
    expect(isInstalled.textContent).toEqual('true');
    expect(isConnected.textContent).toEqual('false');
    expect(address.textContent).toEqual('');
  });

  it('should return not installed, not connected and an empty address if not installed', () => {
    const { isInstalled, isConnected, address } = setup(Test.NOT_INSTALLED);
    expect(isInstalled.textContent).toEqual('false');
    expect(isConnected.textContent).toEqual('false');
    expect(address.textContent).toEqual('');
  });

  it('should call register on creation', () => {
    const { register } = setup(Test.INSTALLED);
    expect(register).toBeCalled();
  });

  it('should show address and blockchain if connect is successful', async () => {
    const { connect, address, blockchain, requestAccount, requestBlockchain } = setup(Test.CONNECT_SUCCESS);
    fireEvent.click(connect);

    await waitFor(() => {
      expect(requestAccount).toBeCalled();
      expect(requestBlockchain).toBeCalled();
      expect(address.textContent).toEqual('test-address');
      expect(blockchain.textContent).toEqual(Blockchain.ETH);
    });
  });

  it('should not show address and blockchain if connect fails', async () => {
    const { connect, address, blockchain, requestAccount, requestBlockchain } = setup(Test.CONNECT_FAIL);
    fireEvent.click(connect);

    await waitFor(() => {
      expect(requestAccount).toBeCalled();
      expect(requestBlockchain).toBeCalledTimes(0);
      expect(address.textContent).toEqual('');
      expect(blockchain.textContent).toEqual('');
    });
  });

  it('should call sign with address and message', async () => {
    const { signMessage, sign } = setup(Test.CONNECTED);
    fireEvent.click(signMessage);

    await waitFor(() => {
      expect(sign).toBeCalledWith('a-test-address', 'a-test-sign-message');
    });
  });
});
