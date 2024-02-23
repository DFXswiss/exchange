import { StyledCoinList, StyledCoinListItem, StyledVerticalStack } from '@dfx.swiss/react-components';
import { useWalletContext } from '../../../contexts/wallet.context';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useMetaMask } from '../../../hooks/metamask.hook';
import { Asset, AssetType, useAssetContext } from '@dfx.swiss/react';
import { AvailableChains, getTokenIndex, isTokenAvailable } from '../../../config';

interface BuyTabContentOverviewProps {
  onAssetClicked: (asset: Asset) => void;
}

export function BuyTabContentOverview({ onAssetClicked }: BuyTabContentOverviewProps): JSX.Element {
  const { blockchain: selectedBlockchain } = useWalletContext();
  const { assets } = useAssetContext();
  const { toHeader, toProtocol } = useBlockchain();
  const { addContract } = useMetaMask();

  return (
    <StyledVerticalStack gap={0}>
      {Array.from(assets.entries())
        .filter(([blockchain]) => AvailableChains.includes(blockchain))
        .sort(([a], [b]) => AvailableChains.indexOf(a) - AvailableChains.indexOf(b))
        .map(([blockchain, assets]) => (
          <StyledCoinList key={blockchain} heading={toHeader(blockchain)}>
            {assets
              .filter((a) => a.buyable || a.comingSoon)
              .filter(isTokenAvailable)
              .sort((a, b) => getTokenIndex(a) - getTokenIndex(b))
              .map((asset) => (
                <StyledCoinListItem
                  key={asset.id}
                  asset={asset}
                  isToken={asset.type === AssetType.TOKEN}
                  protocol={toProtocol(blockchain)}
                  onClick={() => onAssetClicked(asset)}
                  popupLabel="Click on the MetaMask symbol in order to add this asset in your portfolio overview of your MetaMask or copy the address to add it manually."
                  onAdd={(svgData) => addContract(asset, svgData, selectedBlockchain)}
                />
              ))}
          </StyledCoinList>
        ))}
    </StyledVerticalStack>
  );
}
