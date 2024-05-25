import BigNumber from 'bignumber.js';
import { useBlockchain } from '../../hooks/blockchain.hook';
import { SellTabContentProcess } from './sell-tab-content/sell.process';
import { useEffect, useMemo, useState } from 'react';
import { AssetBalance, useMetaMask } from '../../hooks/metamask.hook';

import {
  IconVariant,
  StyledBalanceSelection,
  StyledHorizontalStack,
  StyledModal,
  StyledModalColor,
  StyledModalType,
  StyledNetworkSelection,
  StyledTabContentWrapper,
  StyledTabProps,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { Asset, AssetType, useAssetContext, useAuthContext, useSessionContext, useUserContext } from '@dfx.swiss/react';
import { UserDataForm } from '../user-data-form';

export function useSellTab(): StyledTabProps {
  const { user } = useUserContext();
  return {
    title: 'Sell',
    icon: IconVariant.SELL,
    deactivated: false,
    content: <SellTabContent needsUserDataForm={user != null && !user.kyc.dataComplete} />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onActivate: () => { },
  };
}

function SellTabContent({ needsUserDataForm }: { needsUserDataForm: boolean }): JSX.Element {
  const { availableBlockchains } = useSessionContext();
  const { isLoggedIn, session } = useAuthContext();
  const { assets } = useAssetContext();
  const { toString, toProtocol } = useBlockchain();
  const { requestChangeToBlockchain, readBalance } = useMetaMask();
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [assetBalances, setAssetBalances] = useState<AssetBalance[]>();

  const sellableAssets = useMemo(
    () => session?.blockchains[0] && assets.get(session?.blockchains[0])?.filter((asset) => asset.sellable),
    [session, assets],
  );

  useEffect(() => {
    if (!sellableAssets) return;
    Promise.all(sellableAssets.map((asset: Asset) => readBalance(asset, session?.address)))
      .then((balances) => balances.sort(sortByBalanceAndSortOrder))
      .then(setAssetBalances)
      .catch(console.error);
    if (selectedAsset && selectedAsset.blockchain !== session?.blockchains[0]) {
      setSelectedAsset(undefined);
    }
  }, [session, assets]);

  function sortByBalanceAndSortOrder(a: AssetBalance, b: AssetBalance): number {
    if (!a.balance.isEqualTo(b.balance)) {
      return b.balance.minus(a.balance).toNumber();
    }
    return (a.asset.sortOrder ?? Infinity) - (b.asset.sortOrder ?? Infinity);
  }

  return (
    <>
      <StyledModal isVisible={needsUserDataForm} type={StyledModalType.ALERT} color={StyledModalColor.WHITE}>
        <UserDataForm />
      </StyledModal>
      <StyledVerticalStack gap={5}>
        <StyledNetworkSelection
          networks={
            availableBlockchains
              ?.filter((b) => toString(b))
              .map((b) => ({ network: toString(b), isActive: b === session?.blockchains[0] })) ?? []
          }
          onNetworkChange={(network) =>
            requestChangeToBlockchain(availableBlockchains?.find((b) => toString(b) === network))
          }
        />
        <StyledHorizontalStack gap={5}>
          <StyledBalanceSelection
            balances={
              session?.blockchains[0]
                ? assetBalances?.map((value) => ({
                  asset: value.asset,
                  isToken: value.asset.type === AssetType.TOKEN,
                  protocol: toProtocol(session?.blockchains[0]),
                  isSelected: value.asset.id === selectedAsset?.id,
                  balance: value.balance ?? new BigNumber(0),
                })) ?? []
                : []
            }
            onSelectionChanged={(value) =>
              setSelectedAsset(assetBalances?.find((assetBalance) => assetBalance.asset.id === value.id)?.asset)
            }
          />
          {!session?.address || !isLoggedIn ? (
            <StyledTabContentWrapper leftBorder>
              <StyledVerticalStack gap={4} marginY={12} center>
                <p>Please connect your wallet to proceed!</p>
              </StyledVerticalStack>
            </StyledTabContentWrapper>
          ) : (
            <SellTabContentProcess
              asset={selectedAsset}
              balance={assetBalances?.find((balance) => selectedAsset?.id === balance.asset.id)?.balance}
            />
          )}
        </StyledHorizontalStack>
      </StyledVerticalStack>
    </>
  );
}
