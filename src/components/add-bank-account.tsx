import { useForm } from 'react-hook-form';
import { useBuyContext } from '../api/contexts/buy.context';
import { BankAccount } from '../api/definitions/bank-account';
import { CreateBankAccount } from '../api/hooks/bank-account.hook';
import Form from '../stories/form/Form';
import StyledInput from '../stories/form/StyledInput';
import StyledButton from '../stories/StyledButton';

interface AddBankAccountProps {
  onSubmit: (bankAccount: BankAccount) => void;
}

export function AddBankAccount({ onSubmit }: AddBankAccountProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBankAccount>();
  const { createAccount } = useBuyContext();

  async function createBankAccount(newAccount: CreateBankAccount): Promise<void> {
    createAccount(newAccount).then(onSubmit);
  }

  return (
    <Form control={control} errors={errors} onSubmit={handleSubmit(createBankAccount)}>
      <StyledInput label="IBAN" placeholder="XX XXXX XXXX XXXX XXXX X" name="iban" />
      <StyledInput label="Optional - Account Designation" placeholder="eg. Deutsche Bank" name="label" />
      <StyledButton label="add bank account" onClick={handleSubmit(createBankAccount)} caps />
    </Form>
  );
}
