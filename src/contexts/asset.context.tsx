import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Asset } from '../api/asset';
import { useAsset } from '../hooks/asset.hook';

interface AssetInterface {
  assets: Asset[];
  loadAssets: () => Promise<void>;
}

const AssetContext = createContext<AssetInterface>(undefined as any);

export function useAssetContext(): AssetInterface {
  return useContext(AssetContext);
}

export function AssetContextProvider(props: PropsWithChildren): JSX.Element {
  // TODO (Krysh): add wallet context here to read network
  const [assets, setAssets] = useState<Asset[]>([]);
  const { getAssets } = useAsset();

  async function loadAssets(): Promise<void> {
    const assets = await getAssets();
    setAssets(assets);
  }

  const context: AssetInterface = { assets, loadAssets };

  return <AssetContext.Provider value={context}>{props.children}</AssetContext.Provider>;
}
