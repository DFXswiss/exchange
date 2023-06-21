import { StyledCoinList, StyledCoinListItem, StyledVerticalStack } from '@dfx.swiss/react-components';
import { useWalletContext } from '../../../contexts/wallet.context';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useMetaMask } from '../../../hooks/metamask.hook';
import { Asset, Blockchain, useAssetContext } from '@dfx.swiss/react';
import { AssetType } from '@dfx.swiss/react/dist/definitions/asset';

interface BuyTabContentOverviewProps {
  onAssetClicked: (asset: Asset) => void;
}

export function BuyTabContentOverview({ onAssetClicked }: BuyTabContentOverviewProps): JSX.Element {
  const { blockchain: selectedBlockchain } = useWalletContext();
  const { assets } = useAssetContext();
  const { toHeader, toProtocol } = useBlockchain();
  const { addContract } = useMetaMask();
  const availableChains: Blockchain[] = [
    Blockchain.ETHEREUM,
    Blockchain.BINANCE_SMART_CHAIN,
    Blockchain.ARBITRUM,
    Blockchain.OPTIMISM,
    Blockchain.POLYGON,
  ];

  const blockchainToOrder: Record<Blockchain, number> = {
    [Blockchain.ETHEREUM]: 0,
    [Blockchain.ARBITRUM]: 1,
    [Blockchain.BINANCE_SMART_CHAIN]: 2,
    [Blockchain.OPTIMISM]: 3,
    [Blockchain.POLYGON]: 4,
    [Blockchain.DEFICHAIN]: Infinity,
    [Blockchain.BITCOIN]: Infinity,
    [Blockchain.CARDANO]: Infinity,
  };

  function orderByBlockchain(a: [Blockchain, Asset[]], b: [Blockchain, Asset[]]): number {
    return blockchainToOrder[a[0]] - blockchainToOrder[b[0]];
  }

  return (
    <StyledVerticalStack gap={0}>
      {Array.from(assets.entries())
        .filter(([blockchain]) => availableChains.includes(blockchain))
        .sort(orderByBlockchain)
        .map(([blockchain, assets]) => (
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
