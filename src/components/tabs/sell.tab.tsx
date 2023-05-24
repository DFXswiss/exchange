import BigNumber from 'bignumber.js';
import { useAssetContext } from '../../api/contexts/asset.context';
import { Blockchain } from '../../api/definitions/blockchain';
import { useBlockchain } from '../../hooks/blockchain.hook';
import { IconVariant } from '../../stories/DfxIcon';
import StyledBalanceSelection from '../../stories/StyledBalanceSelection';
import StyledNetworkSelection from '../../stories/StyledNetworkSelection';
import { StyledTabProps } from '../../stories/StyledTabContainer';
import StyledHorizontalStack from '../../stories/layout-helpers/StyledHorizontalStack';
import StyledVerticalStack from '../../stories/layout-helpers/StyledVerticalStack';
import { Asset } from '../../api/definitions/asset';
import { SellTabContentProcess } from './sell-tab-content/sell.process';
import { useEffect, useMemo, useState } from 'react';
import { useAuthContext } from '../../api/contexts/auth.context';
import { useWalletContext } from '../../contexts/wallet.context';
import { AssetBalance, useMetaMask } from '../../hooks/metamask.hook';
import StyledModal from '../../stories/StyledModal';
import { UserDataForm } from '../user-data-form';
import { useUserContext } from '../../api/contexts/user.context';
import { StyledModalType } from '../../stories/StyledModal';
import { StyledModalColor } from '../../stories/StyledModal';
import { useSessionContext } from '../../contexts/session.context';

export function useSellTab(): StyledTabProps {
  const { isLoggedIn, login } = useSessionContext();
  const { user } = useUserContext();
  return {
    title: 'Sell',
    icon: IconVariant.SELL,
    deactivated: false,
    content: <SellTabContent needsUserDataForm={!user?.kycDataComplete} />,
    onActivate: () => {
      if (!isLoggedIn) login();
    },
  };
}

function SellTabContent({ needsUserDataForm }: { needsUserDataForm?: boolean }): JSX.Element {
  const { session } = useAuthContext();
  const { blockchain, address } = useWalletContext();
  const { assets } = useAssetContext();
  const { toString, toProtocol } = useBlockchain();
  const { requestChangeToBlockchain, readBalance } = useMetaMask();
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [assetBalances, setAssetBalances] = useState<AssetBalance[]>();
  const [showsUserDataForm, setShowsUserDataForm] = useState(needsUserDataForm ?? false);

  const sellableAssets = useMemo(
    () => blockchain && assets.get(blockchain)?.filter((asset) => asset.sellable),
    [blockchain, assets],
  );

  useEffect(() => {
    if (!sellableAssets) return;
    Promise.all(sellableAssets.map((asset) => readBalance(asset, address))).then(setAssetBalances);
    if (selectedAsset && selectedAsset.blockchain !== blockchain) {
      setSelectedAsset(undefined);
    }
  }, [blockchain, address, assets]);

  return (
    <>
      <StyledModal isVisible={showsUserDataForm} type={StyledModalType.ALERT} color={StyledModalColor.WHITE}>
        <UserDataForm onFinish={() => setShowsUserDataForm(false)} />
      </StyledModal>
      <StyledVerticalStack gap={5}>
        <StyledNetworkSelection
          networks={
            session?.blockchains
              .filter((b) => b !== Blockchain.POLYGON)
              .map((b) => ({ network: toString(b), isActive: b === blockchain })) ?? []
          }
          onNetworkChange={(network) =>
            requestChangeToBlockchain(session?.blockchains.find((b) => toString(b) === network))
          }
        />
        <StyledHorizontalStack gap={5}>
          <StyledBalanceSelection
            balances={
              blockchain
                ? assetBalances?.map((value) => ({
                    asset: value.asset,
                    protocol: toProtocol(blockchain),
                    isSelected: value.asset.uniqueName === selectedAsset?.uniqueName,
                    balance: value.balance ?? new BigNumber(0),
                  })) ?? []
                : []
            }
            onSelectionChanged={setSelectedAsset}
          />
          <SellTabContentProcess
            asset={selectedAsset}
            balance={assetBalances?.find((balance) => selectedAsset?.uniqueName === balance.asset.uniqueName)?.balance}
          />
        </StyledHorizontalStack>
      </StyledVerticalStack>
    </>
  );
}
