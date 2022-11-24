export interface StoreInterface {
  authenticationToken: {
    get: () => string | undefined;
    set: (token: string) => void;
  };
}

enum StoreKey {
  AUTH_TOKEN = 'authenticationToken',
}

export function useStore(): StoreInterface {
  const { localStorage } = window;

  function set(key: StoreKey, value: string) {
    console.log('storing', key);
    localStorage.setItem(key, value);
  }

  function get(key: StoreKey): string | undefined {
    console.log('reading', key);
    return localStorage.getItem(key) ?? undefined;
  }

  return {
    authenticationToken: {
      get: () => get(StoreKey.AUTH_TOKEN),
      set: (value: string) => set(StoreKey.AUTH_TOKEN, value),
    },
  };
}
