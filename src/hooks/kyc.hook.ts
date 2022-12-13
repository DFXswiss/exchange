import { useUserContext } from '../api/contexts/user.context';
import { KycStatus } from '../api/definitions/kyc';

interface KycInterface {
  status: string;
  start: () => Promise<void>;
}

export function useKyc(): KycInterface {
  const { user } = useUserContext();

  const kycMap: Record<string, string> = {
    ['chatbot']: 'chatbot onboarding',
    ['onlineid']: 'online identification',
    ['videoid']: 'video identification',
    ['check']: 'Data in review',
    ['completed']: 'Verification completed',
    ['rejected']: 'Verification rejected',
    ['na']: 'In progress',
    ['reminded']: 'In progress',
    ['failed']: 'Failed',
    ['review']: 'In review',
  };

  const isKycInProgress = [KycStatus.CHATBOT, KycStatus.ONLINE_ID, KycStatus.VIDEO_ID].includes(
    user?.kycStatus ?? KycStatus.NA,
  );

  function buildKycStatusString(): string {
    if (!user) return kycMap[KycStatus.NA.toLowerCase()];
    if (isKycInProgress) {
      return `${kycMap[user.kycState.toLowerCase()]} (${kycMap[user.kycStatus.toLowerCase()]})`;
    } else {
      return kycMap[user.kycStatus.toLowerCase()];
    }
  }

  async function start(): Promise<void> {
    if (!user) return;
    const newTab = window.open(`${process.env.REACT_APP_KYC_URL}?code=${user.kycHash}`, '_blank', 'noreferrer');
    const popUpBlocked = newTab == null || newTab.closed || typeof newTab.closed == 'undefined';
    if (popUpBlocked) console.error('popUp blocked'); // TODO (Krysh) use correct error handling here
  }

  return { start, status: buildKycStatusString() };
}
