import { useState } from 'react';

export function useSession() {
  const [address, setAddressState] = useState<string>();

  const setAddress = (address: string) => {
    setAddressState(address);
  };

  return { address, setAddress };
}
