import { useForm } from 'react-hook-form';
import { useBuyContext } from '../api/contexts/buy.context';
import { useUserContext } from '../api/contexts/user.context';
import { BankAccount } from '../api/definitions/bank-account';
import { CreateBankAccount } from '../api/hooks/bank-account.hook';
import Form from '../stories/form/Form';
import StyledInput from '../stories/form/StyledInput';
import StyledButton from '../stories/StyledButton';
import { Utils } from '../utils';
import Validations from '../validations';

interface AddBankAccountProps {
  onSubmit: (bankAccount: BankAccount) => void;
}

export function AddBankAccount({ onSubmit }: AddBankAccountProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateBankAccount>();
  const { createAccount, isAccountLoading } = useBuyContext();
  const { countries } = useUserContext();

  async function createBankAccount(newAccount: CreateBankAccount): Promise<void> {
    createAccount(newAccount).then(onSubmit);
  }

  const rules = Utils.createRules({
    iban: [Validations.Required, Validations.Iban(countries)],
  });

  return (
    <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(createBankAccount)}>
      <StyledInput label="IBAN" placeholder="XX XXXX XXXX XXXX XXXX X" name="iban" />
      <StyledInput label="Optional - Account Designation" placeholder="eg. Deutsche Bank" name="label" />
      <StyledButton
        disabled={!isValid}
        label="add bank account"
        onClick={handleSubmit(createBankAccount)}
        isLoading={isAccountLoading}
        caps
      />
    </Form>
  );
}
