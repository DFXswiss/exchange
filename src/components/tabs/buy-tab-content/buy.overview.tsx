import { useAssetContext } from '../../../api/contexts/asset.context';
import { Asset } from '../../../api/definitions/asset';
import StyledVerticalStack from '../../../stories/layout-helpers/StyledVerticalStack';
import StyledCoinList from '../../../stories/StyledCoinList';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';
import { BuyTabDefinitions } from '../buy.tab';

interface BuyTabContentOverviewProps {
  onAssetClicked: (asset: Asset) => void;
}

export function BuyTabContentOverview({ onAssetClicked }: BuyTabContentOverviewProps): JSX.Element {
  const { assets } = useAssetContext();

  return (
    <StyledVerticalStack gap={0}>
      {Array.from(assets.entries()).map(([blockchain, assets], blockchainIndex) => (
        <StyledCoinList key={blockchainIndex} heading={BuyTabDefinitions.headings[blockchain]}>
          {assets.map((asset, assetIndex) => (
            <StyledCoinListItem
              key={assetIndex}
              asset={asset.name}
              protocol={BuyTabDefinitions.protocols[blockchain]}
              onClick={() => onAssetClicked(asset)}
              disabled={!asset.buyable}
            />
          ))}
        </StyledCoinList>
      ))}
    </StyledVerticalStack>
  );
}
