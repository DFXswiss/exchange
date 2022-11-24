import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Asset } from '../api/asset';
import { useAsset } from '../hooks/asset.hook';
import { useSessionContext } from './session.context';

interface AssetInterface {
  assets: Asset[];
  loadAssets: () => Promise<void>;
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    loadAssets().finally(() => setIsLoading(false));
  }, [isLoggedIn]);

  async function loadAssets(): Promise<void> {
    const assets = await getAssets();
    setAssets(assets);
  }

  const context: AssetInterface = { assets, loadAssets, isLoading };

  return <AssetContext.Provider value={context}>{props.children}</AssetContext.Provider>;
}
