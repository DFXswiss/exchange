import { useEffect, useState } from 'react';
import { useClipboard } from '../hooks/clipboard.hook';
import {
  IconColor,
  IconSize,
  IconVariant,
  StyledButton,
  StyledButtonColor,
  StyledButtonSize,
  StyledButtonWidth,
  StyledDataBox,
  StyledDataTextRow,
  StyledModal,
  StyledModalColor,
} from '@dfx.swiss/react-components';
import { MailEdit } from './edit/mail.edit';
import { UserData } from './user-data';
import { useAuthContext, useUserContext } from '@dfx.swiss/react';

export function UserBox(): JSX.Element {
  // const { isConnected } = useWalletContext();
  // const { isLoggedIn } = useSessionContext();
  const { authenticationToken, isLoggedIn, session } = useAuthContext(); // tracks the address state via session
  const { user, refLink, isUserLoading } = useUserContext();
  const { copy, isCopying } = useClipboard();
  const [showsEmailEdit, setShowsEmailEdit] = useState(false);
  const [showsUserData, setShowsUserData] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setIsConnected(session?.address !== undefined);
  }, [session]);

  return isConnected && isLoggedIn ? (
    <>
      {/* MODALS */}
      <StyledModal
        heading="E-mail address"
        color={StyledModalColor.DFX_GRADIENT}
        isVisible={showsEmailEdit}
        onClose={setShowsEmailEdit}
      >
        <MailEdit onSubmit={() => setShowsEmailEdit(false)} />
      </StyledModal>
      <StyledModal
        heading="Your Data"
        color={StyledModalColor.DFX_GRADIENT}
        isVisible={showsUserData}
        onClose={setShowsUserData}
      >
        <UserData />
      </StyledModal>
      {/* CONTENT */}
      <StyledDataBox
        heading="Your Data"
        boxButtonLabel="My DFX"
        boxButtonOnClick={() =>
          window.open(`${process.env.REACT_APP_PAYMENT_URL}/login?token=${authenticationToken}`, '_blank', 'noreferrer')
        }
        rightIconButton={{
          icon: IconVariant.SETTINGS,
          color: IconColor.RED,
          size: IconSize.LG,
          onClick: () => setShowsUserData(true),
        }}
      >
        <StyledDataTextRow label="E-mail address" isLoading={isUserLoading}>
          {user?.mail ?? (
            <StyledButton
              label="Add E-mail address"
              size={StyledButtonSize.SMALL}
              width={StyledButtonWidth.MIN}
              color={StyledButtonColor.WHITE}
              caps={false}
              onClick={() => setShowsEmailEdit(true)}
              deactivateMargin
            />
          )}
        </StyledDataTextRow>
        {user?.activeAddress?.refCode && (
          <StyledDataTextRow label="Your referral link">
            {user?.activeAddress?.refCode}
            <StyledButton
              label="Copy link to share"
              size={StyledButtonSize.SMALL}
              width={StyledButtonWidth.MIN}
              caps={false}
              onClick={() => copy(refLink)}
              isLoading={isCopying}
            />
          </StyledDataTextRow>
        )}
      </StyledDataBox>
    </>
  ) : (
    <></>
  );
}
