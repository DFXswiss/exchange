import { useAssetContext } from '../../../api/contexts/asset.context';
import { Asset } from '../../../api/definitions/asset';
import { Blockchain } from '../../../api/definitions/blockchain';
import StyledCoinList from '../../../stories/StyledCoinList';
import StyledCoinListItem, { Protocols } from '../../../stories/StyledCoinListItem';

interface BuyTabContentOverviewProps {
  onAssetClicked: (asset: Asset) => void;
}

export function BuyTabContentOverview({ onAssetClicked }: BuyTabContentOverviewProps): JSX.Element {
  const { buyableAssets } = useAssetContext();

  const headings: Record<Blockchain, string> = {
    [Blockchain.ETH]: 'Ethereum mainnet · ERC-20 token',
    [Blockchain.BSC]: 'Binance Smart Chain · BEP-20 token',
  };

  const protocols: Record<Blockchain, Protocols> = {
    [Blockchain.ETH]: Protocols.ERC_20,
    [Blockchain.BSC]: Protocols.BEP_20,
  };

  return (
    <div className="flex flex-col gap-8">
      {Array.from(buyableAssets.entries()).map(([blockchain, assets], blockchainIndex) => (
        <StyledCoinList key={blockchainIndex} heading={headings[blockchain]}>
          {assets.map((asset, assetIndex) => (
            <StyledCoinListItem
              key={assetIndex}
              asset={asset.name}
              protocol={protocols[blockchain]}
              onClick={() => onAssetClicked(asset)}
            />
          ))}
        </StyledCoinList>
      ))}
    </div>
  );
}
