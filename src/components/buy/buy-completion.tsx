import { useUserContext } from '../../api/contexts/user.context';
import StyledButton, { StyledButtonColors, StyledButtonWidths } from '../../stories/StyledButton';
import { MailEdit } from '../edit/mail.edit';

interface BuyCompletionProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export function BuyCompletion({ onCancel, onSubmit }: BuyCompletionProps): JSX.Element {
  const { user } = useUserContext();

  const showsSimple = user?.mail != null;

  function getHeader(): string {
    return showsSimple
      ? 'Nice! You are all set! Give us a minute to handle your transaction'
      : 'As soon as the transfer arrives in our bank account, we will transfer your asset in your wallet.';
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-lg font-bold text-center">{getHeader()}</p>
      {showsSimple ? (
        <>
          <p className="text-center">
            As soon as the transfer arrives in our bank account, we will transfer your asset to your wallet. We will
            inform you about the progress of any purchase or sale via E-mail.
          </p>
          <StyledButton
            label="close"
            onClick={onSubmit}
            color={StyledButtonColors.PALE_WHITE}
            width={StyledButtonWidths.FULL}
            caps
          />
        </>
      ) : (
        <MailEdit
          onSubmit={onSubmit}
          onCancel={onCancel}
          infoText="Enter your email address if you want to be informed about the progress of any purchase or sale."
          showCancelButton
        />
      )}
    </div>
  );
}
