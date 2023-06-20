import { useState } from 'react';
import { useClipboard } from '../hooks/clipboard.hook';
import { useKycHelper } from '../hooks/kyc-helper.hook';
import {
  IconColor,
  StyledButton,
  StyledButtonColor,
  StyledButtonSize,
  StyledButtonWidth,
  StyledDataTable,
  StyledDataTableRow,
  StyledModal,
  StyledModalColor,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { Utils } from '../utils';
import { MailEdit, MailEditInfoTextPlacement } from './edit/mail.edit';
import { useUserContext } from '@dfx.swiss/react';

export function UserData(): JSX.Element {
  const { user, refLink } = useUserContext();
  const { copy, isCopying } = useClipboard();
  const { start, status, limit, isComplete } = useKycHelper();
  const [showsUserEdit, setShowsUserEdit] = useState(false);

  const userData = [
    {
      title: 'E-mail address',
      value: user?.mail,
      button:
        user?.mail != null
          ? undefined
          : {
              color: StyledButtonColor.WHITE,
              label: 'Add E-mail address',
              func: () => setShowsUserEdit(true),
              isLoading: false,
              deactivateMargin: true,
            },
    },
    { title: 'KYC status', value: status },
    {
      title: 'Transaction limit',
      value: limit,
      button: {
        color: StyledButtonColor.WHITE,
        label: isComplete ? 'Increase limit' : 'Start KYC to increase',
        func: start,
        isLoading: false,
        deactivateMargin: false,
      },
    },
  ];

  const referralData = [
    {
      title: 'Referral link',
      value: user?.ref,
      button: {
        color: StyledButtonColor.RED,
        label: 'Copy to share',
        func: () => copy(refLink),
        isLoading: isCopying,
        deactivateMargin: false,
      },
    },
    { title: 'Referral commission', value: `${user?.refFeePercent ?? 0 * 100} %` },
    { title: 'Referred users', value: user?.refCount },
    { title: 'Referral volume', value: `${Utils.formatAmount(user?.refVolume)} €` },
    { title: 'Referral reward', value: `${Utils.formatAmount(user?.refCredit)} €` },
    { title: 'Referral payed out', value: `${Utils.formatAmount(user?.paidRefCredit)} €` },
    {
      value:
        'The referral reward will be paid in $ETH on Arbitrum as soon as the pending referral reward is at least 10€.',
    },
  ];

  const data = [
    { header: 'User Data', content: userData },
    {
      header: 'User Referral',
      content: user?.ref
        ? referralData
        : [
            {
              title: 'Referral link',
              value: 'Complete a purchase or sell to receive your personal referral link',
            },
          ],
    },
  ];

  return (
    <>
      {/* MODALS */}
      <StyledModal
        heading="User data"
        color={StyledModalColor.DFX_GRADIENT}
        isVisible={showsUserEdit}
        onClose={setShowsUserEdit}
      >
        <MailEdit
          onSubmit={() => setShowsUserEdit(false)}
          infoText="Enter your email address if you want to be informed about the progress of any purchase or sale."
          infoTextIconColor={IconColor.WHITE}
          infoTextPlacement={MailEditInfoTextPlacement.BELOW_INPUT}
        />
      </StyledModal>
      {/* CONTENT */}
      <StyledVerticalStack gap={6}>
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
                    size={StyledButtonSize.SMALL}
                    width={StyledButtonWidth.MIN}
                    caps={false}
                    isLoading={entry.button.isLoading}
                    deactivateMargin={entry.button.deactivateMargin}
                  />
                )}
              </StyledDataTableRow>
            ))}
          </StyledDataTable>
        ))}
        <StyledButton label="edit user data" onClick={() => setShowsUserEdit(true)} />
      </StyledVerticalStack>
    </>
  );
}
