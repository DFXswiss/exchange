import { fireEvent, render } from '@testing-library/react';
import { useWalletContext, WalletContextProvider } from '../wallet.context';

const TestingComponent = (): JSX.Element => {
  const { isInstalled, isConnected, address, signMessage, connect } = useWalletContext();

  return (
    <>
      <p data-testid="is-installed">{isInstalled?.toString()}</p>
      <p data-testid="is-connected">{isConnected?.toString()}</p>
      <p data-testid="address">{address}</p>
      <button data-testid="sign-message" onClick={() => signMessage('message', 'address')} />
      <button data-testid="connect" onClick={() => connect()} />
    </>
  );
};

enum Test {
  NOT_INSTALLED,
  INSTALLED,
}

interface Setup {
  isInstalled: HTMLElement;
  isConnected: HTMLElement;
  address: HTMLElement;
  signMessage: HTMLElement;
  connect: HTMLElement;
}

describe('WalletContextProvider', () => {
  function setup(testCase: Test): Setup {
    switch (testCase) {
      case Test.INSTALLED:
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        (window as any).ethereum = { isMetaMask: true, on: () => {} };
        break;
      case Test.NOT_INSTALLED:
        (window as any).ethereum = undefined;
        break;
    }

    const { getByTestId } = render(
      <WalletContextProvider>
        <TestingComponent />
      </WalletContextProvider>,
    );
    return {
      isInstalled: getByTestId('is-installed'),
      isConnected: getByTestId('is-connected'),
      address: getByTestId('address'),
      connect: getByTestId('connect'),
      signMessage: getByTestId('sign-message'),
    };
  }

  test('should return is installed, not connected and an empty address if installed', () => {
    const { isInstalled, isConnected, address } = setup(Test.INSTALLED);
    expect(isInstalled.textContent).toEqual('true');
    expect(isConnected.textContent).toEqual('false');
    expect(address.textContent).toEqual('');
  });

  test('should return not installed, not connected and an empty address if not installed', () => {
    const { isInstalled, isConnected, address } = setup(Test.NOT_INSTALLED);
    expect(isInstalled.textContent).toEqual('false');
    expect(isConnected.textContent).toEqual('false');
    expect(address.textContent).toEqual('');
  });
});
