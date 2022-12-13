import { useState } from 'react';
import { useUserContext } from '../api/contexts/user.context';
import { UserTradingLimit } from '../api/definitions/user';
import { useClipboard } from '../hooks/clipboard.hook';
import { useKyc } from '../hooks/kyc.hook';
import StyledButton, { StyledButtonColors, StyledButtonSizes, StyledButtonWidths } from '../stories/StyledButton';
import StyledDataTable from '../stories/StyledDataTable';
import StyledDataTableRow from '../stories/StyledDataTableRow';
import StyledModal, { StyledModalColors } from '../stories/StyledModal';
import { Utils } from '../utils';
import { MailEdit } from './edit/mail.edit';

export function UserData(): JSX.Element {
  const { user } = useUserContext();
  const { copy } = useClipboard();
  const { start, status } = useKyc();
  const [showsUserEdit, setShowsUserEdit] = useState(false);

  const periodMap: Record<string, string> = {
    ['Day']: 'per day',
    ['Year']: 'per year',
  };

  function toString(limit?: UserTradingLimit): string {
    return limit ? `${Utils.formatAmount(limit.limit)} € ${periodMap[limit.period]}` : '';
  }

  const userData = [
    { title: 'E-mail address', value: user?.mail },
    { title: 'KYC status', value: status },
    {
      title: 'Transaction limit',
      value: toString(user?.tradingLimit),
      button: {
        color: StyledButtonColors.WHITE,
        label: 'Start KYC to increase',
        func: start,
      },
    },
  ];

  const referralData = [
    {
      title: 'Your Referral Code',
      value: user?.ref ?? 'Complete a buy to receive your Ref code',
      button:
        user?.ref != null
          ? {
              color: StyledButtonColors.RED,
              label: 'Copy to share',
              func: () => user && copy(user.ref),
            }
          : undefined,
    },
    { title: 'Referral commission', value: `${user?.refFeePercent ?? 0 * 100} %` },
    { title: 'Ref users', value: user?.refCount },
    { title: 'Ref volume', value: `${Utils.formatAmount(user?.refVolume)} €` },
    { title: 'Ref bonus', value: `${Utils.formatAmount(user?.paidRefCredit)} €` },
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
          <StyledDataTable heading={header} key={index} showBorder={false} darkTheme>
            {content.map((entry, entryIndex) => (
              <StyledDataTableRow key={entryIndex} label={entry.title}>
                {entry.value}
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
              </StyledDataTableRow>
            ))}
          </StyledDataTable>
        ))}
        <StyledButton label="edit user data" onClick={() => setShowsUserEdit(true)} />
      </div>
    </>
  );
}
