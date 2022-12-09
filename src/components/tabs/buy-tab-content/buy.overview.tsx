import { useAssetContext } from '../../../api/contexts/asset.context';
import { Asset } from '../../../api/definitions/asset';
import DfxIcon, { IconVariant } from '../../../stories/DfxIcon';

interface BuyTabContentOverviewProps {
  onAssetClicked: (asset: Asset) => void;
}

export function BuyTabContentOverview({ onAssetClicked }: BuyTabContentOverviewProps): JSX.Element {
  const { buyableAssets } = useAssetContext();
  return (
    <div className="flex flex-col gap-8">
      {Array.from(buyableAssets.entries()).map(([blockchain, assets], blockchainIndex) => (
        <div key={blockchainIndex} className="flex flex-col gap-4">
          <p>
            <strong>{blockchain}</strong>
          </p>
          <div className="flex flex-row gap-4">
            {assets.map((asset, assetIndex) => (
              <button key={assetIndex} className="flex flex-row gap-1" onClick={() => onAssetClicked(asset)}>
                <DfxIcon icon={IconVariant.INFO} />
                <p>{asset.name}</p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
