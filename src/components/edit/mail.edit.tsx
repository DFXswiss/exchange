import { useForm } from 'react-hook-form';
import { useUserContext } from '../../api/contexts/user.context';
import Form from '../../stories/form/Form';
import StyledInput from '../../stories/form/StyledInput';
import StyledButton from '../../stories/StyledButton';
import { Utils } from '../../utils';
import Validations from '../../validations';

interface MailEditProps {
  onSubmit: () => void;
}

interface FormData {
  email: string;
}

export function MailEdit({ onSubmit }: MailEditProps): JSX.Element {
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
      <StyledInput label="Contact information" placeholder="E-mail address" name="email" />
      <StyledButton disabled={!isValid} label="save" onClick={handleSubmit(saveUser)} isLoading={isUserUpdating} caps />
    </Form>
  );
}
