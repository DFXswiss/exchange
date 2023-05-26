import { useKycHelper } from '../hooks/kyc-helper.hook';
import StyledButton, { StyledButtonWidth } from '../stories/StyledButton';
import StyledInfoText from '../stories/StyledInfoText';
import StyledVerticalStack from '../stories/layout-helpers/StyledVerticalStack';

export function KycHint(): JSX.Element {
  const { start, limit } = useKycHelper();
  return (
    <StyledVerticalStack gap={4} marginY={4}>
      <StyledInfoText invertedIcon>
        Your account needs to get verified once your daily transaction volume exceeds {limit}. If you want to increase
        your daily trading limit, please complete our KYC (Know-Your-Customer) process.
      </StyledInfoText>
      <StyledButton width={StyledButtonWidth.FULL} label="Complete KYC" onClick={start} />
    </StyledVerticalStack>
  );
}
