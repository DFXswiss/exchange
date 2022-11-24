import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Asset } from '../api/asset';
import { useAsset } from '../hooks/asset.hook';
import { useSessionContext } from './session.context';

interface AssetInterface {
  assets: Asset[];
  loadAssets: () => Promise<void>;
  assetsLoading: boolean;
}

const AssetContext = createContext<AssetInterface>(undefined as any);

export function useAssetContext(): AssetInterface {
  return useContext(AssetContext);
}

export function AssetContextProvider(props: PropsWithChildren): JSX.Element {
  const { isLoggedIn } = useSessionContext();
  // TODO (Krysh): add wallet context here to read network
  const { getAssets } = useAsset();
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsLoading, setAssetsLoading] = useState<boolean>(false);

  useEffect(() => {
    setAssetsLoading(true);
    loadAssets().finally(() => setAssetsLoading(false));
  }, [isLoggedIn]);

  async function loadAssets(): Promise<void> {
    const assets = await getAssets();
    setAssets(assets);
  }

  const context: AssetInterface = { assets, loadAssets, assetsLoading };

  return <AssetContext.Provider value={context}>{props.children}</AssetContext.Provider>;
}
