import { Asset } from '../api/asset';
import { useSessionContext } from '../contexts/session.context';
import { useApi } from './api.hook';

export interface AssetInterface {
  getAssets: () => Promise<Asset[]>;
}

export function useAsset(): AssetInterface {
  const { authenticationToken } = useSessionContext();
  const { call } = useApi();

  async function getAssets(): Promise<Asset[]> {
    if (!authenticationToken) return [];
    return call<Asset[]>({ url: Asset.get, method: 'GET', authenticationToken: authenticationToken });
  }

  return { getAssets };
}
