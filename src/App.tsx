import { Main } from './components/main';
import { AssetContextProvider } from './api/contexts/asset.context';
import { WalletContextProvider } from './contexts/wallet.context';
import { AuthContextProvider } from './api/contexts/auth.context';
import { UserContextProvider } from './api/contexts/user.context';

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <WalletContextProvider>
          <AssetContextProvider>
            <Main />
          </AssetContextProvider>
        </WalletContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
