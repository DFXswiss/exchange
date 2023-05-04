import { useAssetContext } from '../../../api/contexts/asset.context';
import { Asset } from '../../../api/definitions/asset';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useMetaMask } from '../../../hooks/metamask.hook';
import StyledVerticalStack from '../../../stories/layout-helpers/StyledVerticalStack';
import StyledCoinList from '../../../stories/StyledCoinList';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';

interface BuyTabContentOverviewProps {
  onAssetClicked: (asset: Asset) => void;
}

export function BuyTabContentOverview({ onAssetClicked }: BuyTabContentOverviewProps): JSX.Element {
  const { assets } = useAssetContext();
  const { toHeader, toProtocol } = useBlockchain();
  const { addContract } = useMetaMask();

  return (
    <StyledVerticalStack gap={0}>
      {Array.from(assets.entries()).map(([blockchain, assets], blockchainIndex) => (
        <StyledCoinList key={blockchainIndex} heading={toHeader(blockchain)}>
          {assets.map((asset, assetIndex) => (
            <StyledCoinListItem
              key={assetIndex}
              asset={asset}
              protocol={toProtocol(blockchain)}
              onClick={() => onAssetClicked(asset)}
              popupLabel="Click on the MetaMask symbol in order to add this asset in your portfolio overview of your MetaMask or copy the address to add it manually."
              onAdd={addContract}
            />
          ))}
        </StyledCoinList>
      ))}
    </StyledVerticalStack>
  );
}
