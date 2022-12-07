import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Utils } from '../../utils';
import { Asset } from '../definitions/asset';
import { Blockchain } from '../definitions/blockchain';
import { useAsset } from '../hooks/asset.hook';

import { useAuthContext } from './auth.context';

interface AssetInterface {
  assets: Asset[];
  buyableAssets: Map<Blockchain, Asset[]>;
  assetsLoading: boolean;
}

const AssetContext = createContext<AssetInterface>(undefined as any);

export function useAssetContext(): AssetInterface {
  return useContext(AssetContext);
}

export function AssetContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn } = useAuthContext();
  // TODO (Krysh): add wallet context here to read network
  const { getAssets } = useAsset();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [buyableAssets, setBuyableAssets] = useState<Map<Blockchain, Asset[]>>(new Map());
  const [assetsLoading, setAssetsLoading] = useState<boolean>(false);

  useEffect(() => {
    setAssetsLoading(true);
    getAssets()
      .then(updateAssets)
      .finally(() => setAssetsLoading(false));
  }, [isLoggedIn]);

  function updateAssets(assets: Asset[]) {
    setAssets(assets);
    setBuyableAssets(
      Utils.groupBy(
        assets.filter((a) => a.buyable),
        'blockchain',
      ),
    );
  }

  const context: AssetInterface = { assets, buyableAssets, assetsLoading };

  return <AssetContext.Provider value={context}>{props.children}</AssetContext.Provider>;
}
