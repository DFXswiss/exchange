import { render } from '@testing-library/react';
import { AssetBalance, useMetaMask } from '../metamask.hook';
import { Blockchain } from '@dfx.swiss/react';

jest.mock('../metamask.hook');

const mockUseMetaMask = useMetaMask as jest.MockedFunction<typeof useMetaMask>;

const TestingComponent = (): JSX.Element => {
  const { isInstalled } = useMetaMask();

  return <p data-testid="is-installed">{isInstalled().toString()}</p>;
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
}

describe('useMetaMask', () => {
  function mockAndRenderTestElements({ isInstalled,
    register,
    unregister,
    walletType,
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
      register,
      unregister,
      walletType,
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

    const { getByTestId } = render(<TestingComponent />);

    return {
      isInstalled: getByTestId('is-installed'),
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
  };

  it('should return is installed, if installed', () => {
    const { isInstalled } = setup.installed();
    expect(isInstalled.textContent).toEqual('true');
  });

  it('should return is not installed, if not installed', () => {
    const { isInstalled } = setup.notInstalled();
    expect(isInstalled.textContent).toEqual('false');
  });
});
