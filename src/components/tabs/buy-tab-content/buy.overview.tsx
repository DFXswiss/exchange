import { StyledCoinList, StyledCoinListItem, StyledVerticalStack } from '@dfx.swiss/react-components';
import { useAssetContext } from '../../../api/contexts/asset.context';
import { Asset, AssetType } from '../../../api/definitions/asset';
import { useWalletContext } from '../../../contexts/wallet.context';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useMetaMask } from '../../../hooks/metamask.hook';

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
      {Array.from(assets.entries()).map(([blockchain, assets]) => (
        <StyledCoinList key={blockchain} heading={toHeader(blockchain)}>
          {assets
            .filter((a) => a.buyable || a.comingSoon)
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
