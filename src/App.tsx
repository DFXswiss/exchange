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
  const { signMessage, connect, address, blockchain, isConnected } = useWalletContext();

  return (
    <DfxContextProvider api={{ signMessage, connect }} data={{ address, blockchain, isConnected }}>
      <Main />
    </DfxContextProvider>
  );
}

export default App;
