import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Utils } from '../../utils';
import { Asset } from '../definitions/asset';
import { Blockchain } from '../definitions/blockchain';
import { useAsset } from '../hooks/asset.hook';

import { useAuthContext } from './auth.context';

interface AssetInterface {
  assets: Map<Blockchain, Asset[]>;
  assetsLoading: boolean;
}

const AssetContext = createContext<AssetInterface>(undefined as any);

export function useAssetContext(): AssetInterface {
  return useContext(AssetContext);
}

export function AssetContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn } = useAuthContext();
  const { getAssets } = useAsset();
  const [assets, setAssets] = useState<Map<Blockchain, Asset[]>>(new Map());
  const [assetsLoading, setAssetsLoading] = useState<boolean>(false);

  useEffect(() => {
    setAssetsLoading(true);
    getAssets()
      .then(updateAssets)
      .finally(() => setAssetsLoading(false));
  }, [isLoggedIn]);

  function updateAssets(assets: Asset[]) {
    setAssets(Utils.groupBy(assets.filter((a) => a.buyable).concat(dummyAssets), 'blockchain'));
  }

  const context: AssetInterface = { assets, assetsLoading };

  return <AssetContext.Provider value={context}>{props.children}</AssetContext.Provider>;
}

// TODO (Krysh) remove those as soon as available via API
const dummyAssets: Asset[] = [
  // ETH assets
  {
    id: 1001,
    name: 'ETH',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ETH,
  },
  {
    id: 1002,
    name: 'USDC',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ETH,
  },
  {
    id: 1003,
    name: 'USDT',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ETH,
  },
  {
    id: 1004,
    name: 'DFI',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ETH,
  },
  // ARBITRUM assets
  {
    id: 2001,
    name: 'ETH',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ARBITRUM,
  },
  {
    id: 2002,
    name: 'USDC',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ARBITRUM,
  },
  {
    id: 2003,
    name: 'USDT',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ARBITRUM,
  },
  {
    id: 2004,
    name: 'DFI',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.ARBITRUM,
  },
  // OPTIMISM assets
  {
    id: 3001,
    name: 'ETH',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.OPTIMISM,
  },
  {
    id: 3002,
    name: 'USDC',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.OPTIMISM,
  },
  {
    id: 3003,
    name: 'USDT',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.OPTIMISM,
  },
  {
    id: 3004,
    name: 'DFI',
    buyable: false,
    comingSoon: true,
    sellable: false,
    blockchain: Blockchain.OPTIMISM,
  },
];
