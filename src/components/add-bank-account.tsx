import { useForm } from 'react-hook-form';
import { BankAccount } from '../api/definitions/bank-account';
import Form from '../stories/form/Form';
import StyledInput from '../stories/form/StyledInput';
import StyledButton from '../stories/StyledButton';

interface AddBankAccountProps {
  onSubmit: (bankAccount: Partial<BankAccount>) => void;
}

export function AddBankAccount({ onSubmit }: AddBankAccountProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<BankAccount>>();

  return (
    <Form control={control} errors={errors} onSubmit={handleSubmit(onSubmit)}>
      <StyledInput label="IBAN" placeholder="XX XXXX XXXX XXXX XXXX X" name="iban" />
      <StyledInput label="Optional - Account Designation" placeholder="eg. Deutsche Bank" name="label" />
      <StyledButton label="add bank account" onClick={handleSubmit(onSubmit)} caps />
    </Form>
  );
}
