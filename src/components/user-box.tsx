import { useState } from 'react';
import { useUserContext } from '../api/contexts/user.context';
import { useSessionContext } from '../contexts/session.context';
import { useClipboard } from '../hooks/clipboard.hook';
import { IconColors, IconSizes, IconVariant } from '../stories/DfxIcon';
import StyledButton, { StyledButtonColors, StyledButtonSizes, StyledButtonWidths } from '../stories/StyledButton';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';
import StyledModal, { StyledModalColors } from '../stories/StyledModal';
import { MailEdit } from './edit/mail.edit';
import { UserDataEdit } from './edit/user-data.edit';

export function UserBox(): JSX.Element {
  const { isLoggedIn } = useSessionContext();
  const { user } = useUserContext();
  const { copy } = useClipboard();
  const [showsEmailEdit, setShowsEmailEdit] = useState(false);
  const [showsUserEdit, setShowsUserEdit] = useState(false);

  return isLoggedIn ? (
    <>
      {/* MODALS */}
      <StyledModal
        heading="E-mail address"
        color={StyledModalColors.DFX_GRADIENT}
        isVisible={showsEmailEdit}
        onClose={setShowsEmailEdit}
      >
        <MailEdit onSubmit={() => setShowsEmailEdit(false)} />
      </StyledModal>
      <StyledModal
        heading="User data"
        color={StyledModalColors.DFX_GRADIENT}
        isVisible={showsUserEdit}
        onClose={setShowsUserEdit}
      >
        <UserDataEdit />
      </StyledModal>
      {/* CONTENT */}
      <StyledDataBox
        heading="Your Data"
        rightIconButton={{
          icon: IconVariant.SETTINGS,
          color: IconColors.RED,
          size: IconSizes.LG,
          onClick: () => setShowsUserEdit(true),
        }}
      >
        <StyledDataTextRow label="E-Mail address">
          {user?.mail ?? (
            <StyledButton
              label="add e-mail address"
              size={StyledButtonSizes.SMALL}
              width={StyledButtonWidths.MIN}
              color={StyledButtonColors.WHITE}
              caps={false}
              onClick={() => setShowsEmailEdit(true)}
            />
          )}
        </StyledDataTextRow>
        {user?.ref && (
          <StyledDataTextRow label="Your Referral Code">
            {user.ref}
            <StyledButton
              label="Copy link to share"
              size={StyledButtonSizes.SMALL}
              width={StyledButtonWidths.MIN}
              caps={false}
              onClick={() => user && user.ref && copy(user.ref)}
            />
          </StyledDataTextRow>
        )}
      </StyledDataBox>
    </>
  ) : (
    <></>
  );
}
