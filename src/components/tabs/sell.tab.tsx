import BigNumber from 'bignumber.js';
import { useAssetContext } from '../../api/contexts/asset.context';
import { Blockchain } from '../../api/definitions/blockchain';
import { Protocol } from '../../hooks/blockchain.hook';
import { IconVariant } from '../../stories/DfxIcon';
import StyledBalanceSelection from '../../stories/StyledBalanceSelection';
import StyledNetworkSelection from '../../stories/StyledNetworkSelection';
import { StyledTabProps } from '../../stories/StyledTabContainer';
import StyledTabContentWrapper from '../../stories/StyledTabContentWrapper';
import StyledHorizontalStack from '../../stories/layout-helpers/StyledHorizontalStack';
import StyledVerticalStack from '../../stories/layout-helpers/StyledVerticalStack';
import { Asset } from '../../api/definitions/asset';
import { SellTabContentProcess } from './sell-tab-content/sell.process';
import { useState } from 'react';

export function useSellTab(): StyledTabProps {
  return {
    title: 'Sell',
    icon: IconVariant.SELL,
    deactivated: false,
    content: <SellTabContent />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onActivate: () => {},
  };
}

function SellTabContent(): JSX.Element {
  const { assets } = useAssetContext();
  const [selectedAsset, setSelectedAsset] = useState<Asset>();

  return (
    <StyledVerticalStack gap={5}>
      <StyledNetworkSelection
        networks={[
          { network: 'Ethereum', isActive: true },
          { network: 'another one', isActive: false },
        ]}
        onNetworkChange={console.log}
      />
      <StyledHorizontalStack gap={0}>
        <StyledBalanceSelection
          balances={[
            {
              asset: assets.get(Blockchain.ETH)?.[0] as Asset,
              protocol: Protocol.ERC_20,
              isSelected: (assets.get(Blockchain.ETH)?.[0] as Asset).uniqueName === selectedAsset?.uniqueName,
              balance: new BigNumber(1234.34),
              balanceInUsd: new BigNumber(3),
            },
          ]}
          onSelectionChanged={setSelectedAsset}
        />
        <SellTabContentProcess asset={selectedAsset} />
      </StyledHorizontalStack>
    </StyledVerticalStack>
  );
}
