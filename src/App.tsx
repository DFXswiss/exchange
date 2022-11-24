import './App.css';
import { Main } from './components/main';
import { AssetContextProvider } from './contexts/asset.context';
import { SessionContextProvider } from './contexts/session.context';
import { WalletContextProvider } from './contexts/wallet.context';

function App() {
  return (
    <SessionContextProvider>
      <WalletContextProvider>
        <AssetContextProvider>
          <Main />
        </AssetContextProvider>
      </WalletContextProvider>
    </SessionContextProvider>
  );
}

export default App;
