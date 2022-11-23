import './App.css';
import { Main } from './components/main';
import { WalletContextProvider } from './contexts/wallet.context';

function App() {
  return (
    <WalletContextProvider>
      <Main />
    </WalletContextProvider>
  );
}

export default App;
