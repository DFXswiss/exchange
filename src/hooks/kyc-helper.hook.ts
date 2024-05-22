import { useUserContext, Utils } from '@dfx.swiss/react';

interface KycInterface {
  status: string;
  limit: string;
  isComplete: boolean;
  start: () => Promise<void>;
  isAllowedToBuy: (amount: number) => boolean;
  isAllowedToSell: (amount: number) => boolean;
}

export function useKycHelper(): KycInterface {
  const { user } = useUserContext();

  const periodMap: Record<string, string> = {
    ['Day']: 'per day',
    ['Year']: 'per year',
  };

  const kycLevel = user?.kyc.level ?? 0;
  const kycIsComplete = user?.kyc.dataComplete;

  const limit =
    user?.tradingLimit != null
      ? `${Utils.formatAmount(user.tradingLimit.limit)} € ${periodMap[user.tradingLimit.period]}`
      : '';

  function buildKycStatusString(): string {
    if (!user) return '0';
    return kycLevel.toString();
  }

  async function start(): Promise<void> {
    if (!user) return;
    const newTab = window.open(
      `${process.env.REACT_APP_PAYMENT_URL}/kyc?code=${user.kyc.hash}`,
      '_blank',
      'noreferrer',
    );
    const popUpBlocked = newTab == null || newTab.closed || typeof newTab.closed == 'undefined';
    if (popUpBlocked) console.error('popUp blocked'); // TODO (Krysh) use correct error handling here
  }

  function isAllowedToBuy(amount: number): boolean {
    if (kycIsComplete) return true;
    return (user?.tradingLimit.limit ?? 0) >= amount;
  }

  function isAllowedToSell(amount: number): boolean {
    if (kycIsComplete) return true;
    return (user?.tradingLimit.limit ?? 0) >= amount;
  }

  return {
    start,
    status: buildKycStatusString(),
    isComplete: kycIsComplete ?? false,
    limit,
    isAllowedToBuy,
    isAllowedToSell,
  };
}
