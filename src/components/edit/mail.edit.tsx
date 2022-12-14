import { useForm } from 'react-hook-form';
import { useUserContext } from '../../api/contexts/user.context';
import Form from '../../stories/form/Form';
import StyledInput from '../../stories/form/StyledInput';
import StyledButton, { StyledButtonColors } from '../../stories/StyledButton';
import { Utils } from '../../utils';
import Validations from '../../validations';

interface MailEditProps {
  infoText?: string;
  showCancelButton?: boolean;
  onSubmit: () => void;
  onCancel?: () => void;
}

interface FormData {
  email: string;
}

export function MailEdit({ onSubmit, onCancel, showCancelButton = false, infoText }: MailEditProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>();
  const { changeMail, isUserUpdating } = useUserContext();

  async function saveUser({ email }: FormData): Promise<void> {
    return changeMail(email).then(onSubmit);
  }

  const rules = Utils.createRules({
    email: [Validations.Required, Validations.Mail],
  });

  return (
    <Form control={control} errors={errors} rules={rules} onSubmit={handleSubmit(saveUser)}>
      {infoText && <p>{infoText}</p>}
      <StyledInput label="Contact information" placeholder="E-mail address" name="email" />
      <div className="flex flex-row gap-4">
        {showCancelButton && onCancel && (
          <StyledButton label="cancel" onClick={onCancel} color={StyledButtonColors.PALE_WHITE} caps />
        )}
        <StyledButton
          disabled={!isValid}
          label="save"
          onClick={handleSubmit(saveUser)}
          isLoading={isUserUpdating}
          caps
        />
      </div>
    </Form>
  );
}
