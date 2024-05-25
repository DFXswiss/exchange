export interface StoreInterface {
  authenticationToken: {
    get: () => string | undefined;
    set: (token: string) => void;
    remove: () => void;
  };
  showsSignatureInfo: {
    get: () => boolean;
    set: (value: boolean) => void;
    remove: () => void;
  };
  activeWallet: {
    get: () => string | undefined;
  };
}

enum StoreKey {
  AUTH_TOKEN = 'authenticationToken',
  SHOWS_SIGNATURE_INFO = 'showsSignatureInfo',
  ACTIVE_WALLET = 'dfx.srv.activeWallet',
}

export function useStore(): StoreInterface {
  const { localStorage } = window;

  function set(key: StoreKey, value: string) {
    localStorage.setItem(key, value);
  }

  function get(key: StoreKey): string | undefined {
    return localStorage.getItem(key) ?? undefined;
  }

  function remove(key: StoreKey) {
    localStorage.removeItem(key);
  }

  return {
    authenticationToken: {
      get: () => get(StoreKey.AUTH_TOKEN),
      set: (value: string) => set(StoreKey.AUTH_TOKEN, value),
      remove: () => remove(StoreKey.AUTH_TOKEN),
    },
    showsSignatureInfo: {
      get: () => (get(StoreKey.SHOWS_SIGNATURE_INFO) ?? 'true') === 'true',
      set: (value: boolean) => set(StoreKey.SHOWS_SIGNATURE_INFO, value ? 'true' : 'false'),
      remove: () => remove(StoreKey.SHOWS_SIGNATURE_INFO),
    },
    activeWallet: {
      get: () => get(StoreKey.ACTIVE_WALLET),
    },
  };
}
