import { useState } from 'react';
import { useUserContext } from '../api/contexts/user.context';
import { UserTradingLimit } from '../api/definitions/user';
import { useClipboard } from '../hooks/clipboard.hook';
import StyledButton, { StyledButtonColors, StyledButtonSizes, StyledButtonWidths } from '../stories/StyledButton';
import StyledModal, { StyledModalColors } from '../stories/StyledModal';
import { MailEdit } from './edit/mail.edit';

export function UserData(): JSX.Element {
  const { user } = useUserContext();
  const { copy } = useClipboard();
  const [showsUserEdit, setShowsUserEdit] = useState(false);

  const periodMap: Record<string, string> = {
    ['Day']: 'per day',
    ['Year']: 'per year',
  };

  function toString(limit?: UserTradingLimit): string {
    return limit ? `${limit.limit} € ${periodMap[limit.period]}` : '';
  }

  const userData = [
    { title: 'E-mail address', value: user?.mail },
    { title: 'Ref code used', value: user?.usedRef },
    { title: 'KYC status', value: user?.kycStatus },
    {
      title: 'Transaction limit',
      value: toString(user?.tradingLimit),
      button: {
        color: StyledButtonColors.WHITE,
        label: 'Start KYC to increase',
        func: () => {
          console.log('TODO start KYC');
        },
      },
    },
  ];

  const referralData = [
    {
      title: 'Your Referral Code',
      value: user?.ref,
      button: {
        color: StyledButtonColors.RED,
        label: 'Copy to share',
        func: () => user && copy(user.ref),
      },
    },
    { title: 'Referral commission', value: user?.refFeePercent },
    { title: 'Ref users', value: user?.refCount },
    { title: 'Ref volume', value: user?.refVolume },
    { title: 'Ref bonus', value: user?.paidRefCredit },
  ];

  const data = [
    { header: 'User data', content: userData },
    { header: 'Your referral', content: referralData },
  ];

  return (
    <>
      {/* MODALS */}
      <StyledModal
        heading="User data"
        color={StyledModalColors.DFX_GRADIENT}
        isVisible={showsUserEdit}
        onClose={setShowsUserEdit}
      >
        <MailEdit onSubmit={() => setShowsUserEdit(false)} />
      </StyledModal>
      {/* CONTENT */}
      <div className="flex flex-col gap-6">
        {data.map(({ header, content }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h2>{header}</h2>
            {content.map((entry, entryIndex) => (
              <div key={entryIndex} className="flex flex-row gap-4">
                <p className="text-dfxGray-600">{entry.title}</p>
                <p>{entry.value}</p>
                {entry.button && (
                  <StyledButton
                    onClick={entry.button.func}
                    label={entry.button.label}
                    color={entry.button.color}
                    size={StyledButtonSizes.SMALL}
                    width={StyledButtonWidths.MIN}
                    caps={false}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <StyledButton label="edit user data" onClick={() => setShowsUserEdit(true)} />
      </div>
    </>
  );
}
