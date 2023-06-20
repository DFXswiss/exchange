import { DfxContextProvider } from '@dfx.swiss/react';
import { Main } from './components/main';
import { WalletContextProvider } from './contexts/wallet.context';

function App() {
  return (
    <WalletContextProvider>
      <DfxContextProvider api={{}} data={{}}>
        <Main />
      </DfxContextProvider>
    </WalletContextProvider>
  );
}

export default App;
