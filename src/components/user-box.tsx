import { useUserContext } from '../api/contexts/user.context';
import { useSession } from '../hooks/session.hook';
import StyledButton, { StyledButtonColors, StyledButtonSizes, StyledButtonWidths } from '../stories/StyledButton';
import StyledDataBox from '../stories/StyledDataBox';
import StyledDataTextRow from '../stories/StyledDataTextRow';

export function UserBox(): JSX.Element {
  const { isLoggedIn } = useSession();
  const { user } = useUserContext();

  return isLoggedIn ? (
    <StyledDataBox heading="Your Data">
      <StyledDataTextRow label="E-Mail address">
        {user?.mail ?? (
          <StyledButton
            label="add e-mail address"
            size={StyledButtonSizes.SMALL}
            width={StyledButtonWidths.MIN}
            color={StyledButtonColors.WHITE}
            caps={false}
            onClick={() => console.log('ToDo adding email')}
          />
        )}
      </StyledDataTextRow>
      {user?.ref && (
        <StyledDataTextRow label="Your Referral Code">
          {user?.ref}
          <StyledButton
            label="Copy link to share"
            size={StyledButtonSizes.SMALL}
            width={StyledButtonWidths.MIN}
            caps={false}
            onClick={() => {
              console.log('ToDo add clipboard');
            }}
          />
        </StyledDataTextRow>
      )}
    </StyledDataBox>
  ) : (
    <></>
  );
}
