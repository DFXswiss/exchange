import { DfxContextProvider } from '@dfx.swiss/react';
import { Main } from './components/main';
import { WalletContextProvider, useWalletContext } from './contexts/wallet.context';

function App() {
  return (
    <WalletContextProvider>
      <AppWrapper />
    </WalletContextProvider>
  );
}

function AppWrapper(): JSX.Element {
  const { signMessage, address, blockchain } = useWalletContext();

  return (
    <DfxContextProvider api={{ signMessage }} data={{ address, blockchain, wallet: '9' }}>
      <Main />
    </DfxContextProvider>
  );
}

export default App;
