import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Asset } from '../definitions/asset';
import { useAsset } from '../hooks/asset.hook';

import { useAuthContext } from './auth.context';

interface AssetInterface {
  assets: Asset[];
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
  const [assetsLoading, setAssetsLoading] = useState<boolean>(false);

  useEffect(() => {
    setAssetsLoading(true);
    getAssets()
      .then(setAssets)
      .finally(() => setAssetsLoading(false));
  }, [isLoggedIn]);

  const context: AssetInterface = { assets, assetsLoading };

  return <AssetContext.Provider value={context}>{props.children}</AssetContext.Provider>;
}
