import { useForm } from 'react-hook-form';
import {
  Form,
  StyledButton,
  StyledButtonColor,
  StyledButtonWidth,
  StyledInput,
  StyledSpacer,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import {
  BankAccount,
  CreateBankAccount,
  useBankAccountContext,
  useUserContext,
  Utils,
  Validations,
} from '@dfx.swiss/react';

interface AddBankAccountProps {
  onSubmit: (bankAccount: BankAccount) => void;
}

export function AddBankAccount({ onSubmit }: AddBankAccountProps): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateBankAccount>();
  const { createAccount, isAccountLoading } = useBankAccountContext();
  const { countries } = useUserContext();

  async function createBankAccount(newAccount: CreateBankAccount): Promise<void> {
    createAccount(newAccount).then(onSubmit);
  }

  const rules = Utils.createRules({
    iban: [Validations.Required, Validations.Iban(countries)],
  });

  return (
    <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(createBankAccount)}>
      <StyledVerticalStack gap={4}>
        <StyledInput label="IBAN" placeholder="XX XXXX XXXX XXXX XXXX X" name="iban" />
        <StyledInput label="Optional - Account Designation" placeholder="eg. Deutsche Bank" name="label" />
        <StyledSpacer spacing={-1} />
        <StyledButton
          disabled={!isValid}
          color={StyledButtonColor.RED}
          label="Add Bank Account"
          onClick={handleSubmit(createBankAccount)}
          isLoading={isAccountLoading}
          caps
          width={StyledButtonWidth.FULL}
        />
      </StyledVerticalStack>
    </Form>
  );
}
