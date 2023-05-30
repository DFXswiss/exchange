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
import StyledTabContentWrapper from '../../stories/StyledTabContentWrapper';
import StyledButton from '../../stories/StyledButton';

export function useSellTab(): StyledTabProps {
  const { user } = useUserContext();
  return {
    title: 'Sell',
    icon: IconVariant.SELL,
    deactivated: false,
    content: <SellTabContent needsUserDataForm={user != null && !user.kycDataComplete} />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onActivate: () => {},
  };
}

function SellTabContent({ needsUserDataForm }: { needsUserDataForm: boolean }): JSX.Element {
  const { isLoggedIn, login } = useSessionContext();
  const { session } = useAuthContext();
  const { blockchain, address } = useWalletContext();
  const { assets } = useAssetContext();
  const { toString, toProtocol } = useBlockchain();
  const { requestChangeToBlockchain, readBalance } = useMetaMask();
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [assetBalances, setAssetBalances] = useState<AssetBalance[]>();

  const sellableAssets = useMemo(
    () => blockchain && assets.get(blockchain)?.filter((asset) => asset.sellable),
    [blockchain, assets],
  );

  useEffect(() => {
    if (!sellableAssets) return;
    Promise.all(sellableAssets.map((asset) => readBalance(asset, address)))
      .then((balances) => balances.sort((a, b) => b.balance.minus(a.balance).toNumber()))
      .then((balances) => balances.sort((a, b) => (a.asset.sortOrder ?? Infinity) - (b.asset.sortOrder ?? Infinity)))
      .then(setAssetBalances)
      .catch(console.error);
    if (selectedAsset && selectedAsset.blockchain !== blockchain) {
      setSelectedAsset(undefined);
    }
  }, [blockchain, address, assets]);

  return (
    <>
      <StyledModal isVisible={needsUserDataForm} type={StyledModalType.ALERT} color={StyledModalColor.WHITE}>
        <UserDataForm />
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
                    isSelected: value.asset.id === selectedAsset?.id,
                    balance: value.balance ?? new BigNumber(0),
                  })) ?? []
                : []
            }
            onSelectionChanged={setSelectedAsset}
          />
          {!address || !isLoggedIn ? (
            <StyledTabContentWrapper leftBorder>
              <StyledVerticalStack gap={4} marginY={12} center>
                {!address ? (
                  <>
                    <p>Please connect your Metamask in order to proceed</p>
                    <StyledButton label="Connect to Metamask" onClick={login} />
                  </>
                ) : (
                  <>
                    <p>Please reconnect to DFX in order to proceed</p>
                    <StyledButton label="Reconnect to DFX" onClick={login} />
                  </>
                )}
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
