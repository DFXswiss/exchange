import { useState } from 'react';

export function useSession() {
  const [address, setAddress] = useState<string>();

  return { address, setAddress };
}
