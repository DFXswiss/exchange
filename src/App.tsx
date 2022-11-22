import './App.css';
import { Main } from './components/main';
import { SessionContextProvider } from './contexts/session.context';
import { WalletContextProvider } from './contexts/wallet.context';

function App() {
  return (
    <SessionContextProvider>
      <WalletContextProvider>
        <Main />
      </WalletContextProvider>
    </SessionContextProvider>
  );
}

export default App;
