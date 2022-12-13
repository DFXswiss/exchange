import { Main } from './components/main';
import { AssetContextProvider } from './api/contexts/asset.context';
import { WalletContextProvider } from './contexts/wallet.context';
import { AuthContextProvider } from './api/contexts/auth.context';
import { UserContextProvider } from './api/contexts/user.context';
import { SessionContextProvider } from './contexts/session.context';
import { BuyContextProvider } from './api/contexts/buy.context';
import { CountryContextProvider } from './api/contexts/country.context';

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <WalletContextProvider>
          <SessionContextProvider>
            <CountryContextProvider>
              <AssetContextProvider>
                <BuyContextProvider>
                  <Main />
                </BuyContextProvider>
              </AssetContextProvider>
            </CountryContextProvider>
          </SessionContextProvider>
        </WalletContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
