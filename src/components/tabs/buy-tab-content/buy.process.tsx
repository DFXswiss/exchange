/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useBuyContext } from '../../../api/contexts/buy.context';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { Fiat } from '../../../api/definitions/fiat';
import DfxIcon, { IconColors, IconVariant } from '../../../stories/DfxIcon';
import Form from '../../../stories/form/Form';
import StyledInput from '../../../stories/form/StyledInput';
import StyledButton, { StyledButtonColors, StyledButtonSizes, StyledButtonWidths } from '../../../stories/StyledButton';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';
import { IconButton } from '../../../stories/StyledIconButton.stories';
import StyledModal, { StyledModalColors } from '../../../stories/StyledModal';
import { AddBankAccount } from '../../add-bank-account';
import { BuyTabDefinitions } from '../buy.tab';

interface BuyTabContentProcessProps {
  asset?: Asset;
  onBack: () => void;
}

export function BuyTabContentProcess({ asset, onBack }: BuyTabContentProcessProps): JSX.Element {
  const { currencies, bankAccounts } = useBuyContext();
  const [selectedCurrency, setSelectedCurrency] = useState<Fiat>();
  const [selectedBankAccount, setSelectedBankAccount] = useState<BankAccount>();
  const [amount, setAmount] = useState<number>();
  const [showEditBankAccounts, setShowEditBankAccounts] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ amount: string }>();

  function select(bankAccount: BankAccount) {
    setSelectedBankAccount(bankAccount);
    setSelectedCurrency(bankAccount.preferredCurrency);
    setShowEditBankAccounts(false);
  }

  async function create(bankAccount: Partial<BankAccount>): Promise<void> {}

  return (
    <>
      {/* MODALS */}
      <StyledModal
        heading="Select your bank account"
        color={StyledModalColors.WHITE}
        isVisible={showEditBankAccounts}
        onClose={setShowEditBankAccounts}
      >
        {bankAccounts?.map((b, i) => (
          <button onClick={() => select(b)} key={i}>
            <div className="flex flex-row gap-2">
              <DfxIcon icon={IconVariant.BANK} color={IconColors.BLACK} />
              <div className="flex flex-col gap-1">
                {b.label && b.label.length > 0 && <p className="text-dfxGray-500">{b.label}</p>}
                <p>{b.iban}</p>
              </div>
            </div>
          </button>
        ))}
        <div className="h-[1px] bg-dfxGray-400 mt-8 -mx-14" />
        <AddBankAccount onSubmit={(b) => console.log(b)} />
      </StyledModal>

      {/* CONTENT */}
      <div className="flex flex-col gap-8">
        <IconButton icon={IconVariant.BACK} onClick={onBack} />
        {selectedBankAccount ? (
          <p>IBAN: {selectedBankAccount.iban}</p>
        ) : (
          <StyledButton
            label="Add or select your IBAN "
            onClick={() => setShowEditBankAccounts(true)}
            size={StyledButtonSizes.BIG}
            width={StyledButtonWidths.MD}
            color={StyledButtonColors.WHITE}
            caps={false}
          />
        )}
        {asset && (
          <StyledCoinListItem
            asset={asset.name}
            protocol={BuyTabDefinitions.protocols[asset.blockchain]}
            onClick={() => {
              console.log('just a placeholder');
            }}
          />
        )}
        {selectedCurrency ? (
          <p>buying with {selectedCurrency.name}</p>
        ) : (
          currencies?.map((c, i) => (
            <button onClick={() => setSelectedCurrency(c)} key={i}>
              {c.name}
            </button>
          ))
        )}
      </div>
      <Form control={control} errors={errors} onSubmit={handleSubmit(() => {})}>
        <StyledInput
          label="Buy amount"
          placeholder="0.00"
          name="amount"
          valueHook={(v: string) => {
            setAmount(+v);
            return v;
          }}
        />
      </Form>
      <PaymentInformationContent />
    </>
  );
}

interface PaymentInformation {
  iban: string;
  isSepaInstant: boolean;
  bic: string;
  purpose: string;
  recipient: string;
}

interface PaymentInformationContentProps {
  info?: PaymentInformation;
}

function PaymentInformationContent({ info }: PaymentInformationContentProps): JSX.Element {
  return (
    <>
      <h2>Payment Information</h2>
      <p>
        Please transfer the purchase amount using this information via your banking application. The purpose of payment
        is important!
      </p>
      <div className="border border-dfxGray-500 rounded-md"></div>
      <StyledButton
        label="Click once your bank Transfer is completed."
        onClick={() => console.log('TODO ask what should happen after this button was clicked')}
        caps={false}
      />
    </>
  );
}
