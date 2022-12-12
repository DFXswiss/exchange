import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useBuyContext } from '../../../api/contexts/buy.context';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { Buy, BuyPaymentInfo } from '../../../api/definitions/buy';
import { Fiat } from '../../../api/definitions/fiat';
import DfxIcon, { IconColors, IconVariant } from '../../../stories/DfxIcon';
import Form from '../../../stories/form/Form';
import StyledInput from '../../../stories/form/StyledInput';
import StyledModalDropdown from '../../../stories/form/StyledModalDropdown';
import StyledButton from '../../../stories/StyledButton';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';
import { IconButton } from '../../../stories/StyledIconButton.stories';
import { AddBankAccount } from '../../add-bank-account';
import { BuyTabDefinitions } from '../buy.tab';
import debounce from 'debounce';
import { Utils } from '../../../utils';
import Validations from '../../../validations';

interface BuyTabContentProcessProps {
  asset?: Asset;
  onBack: () => void;
}

interface FormData {
  bankAccount: BankAccount;
  currency: Fiat;
  asset: Asset;
  amount: string;
}

export function BuyTabContentProcess({ asset, onBack }: BuyTabContentProcessProps): JSX.Element {
  const { currencies, bankAccounts, receiveFor } = useBuyContext();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInformation>();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const debouncedReceiveFor = useRef(
    debounce((info: BuyPaymentInfo) => {
      receiveFor(info)
        .then((value) => toPaymentInformation(value, info.bankAccount))
        .then(setPaymentInfo);
    }, 500),
  ).current;

  useEffect(() => {
    if (asset) setValue('asset', asset);
  }, [asset]);

  useEffect(() => {
    const subscription = watch(() => {
      const formData = getValues();
      if (isFormDataValid(formData)) {
        receiveBuyFor({ ...formData, iban: formData.bankAccount.iban, amount: Number(formData.amount) });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  async function onSubmit(_data: FormData): Promise<void> {
    // TODO (Krysh): fix broken form validation and onSubmit
  }

  function isFormDataValid(data: FormData): boolean {
    return !isNaN(+data.amount) && data.asset != null && data.bankAccount != null && data.currency != null;
  }

  async function receiveBuyFor(info: BuyPaymentInfo): Promise<void> {
    debouncedReceiveFor(info);
  }

  function toPaymentInformation(buy: Buy, bankAccount: BankAccount): PaymentInformation {
    return {
      iban: buy.iban,
      bic: buy.bic,
      purpose: buy.remittanceInfo,
      isSepaInstant: bankAccount.sepaInstant,
      recipient: `${buy.name}, ${buy.street} ${buy.number}, ${buy.zip} ${buy.city}, ${buy.country}`,
      fee: `${buy.fee} %`,
    };
  }

  const rules = Utils.createRules({
    bankAccount: Validations.Required,
    asset: Validations.Required,
    currency: Validations.Required,
    amount: Validations.Required,
  });

  return (
    <>
      {/* CONTENT */}
      <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <IconButton icon={IconVariant.BACK} onClick={onBack} />
          <StyledModalDropdown
            name="bankAccount"
            labelFunc={(item: BankAccount) => item.iban}
            label="Your bank account"
            placeholder="Add or select your IBAN"
            modal={{
              heading: 'Select your bank account',
              items: bankAccounts,
              itemContent: (b: BankAccount) => (
                <div className="flex flex-row gap-2">
                  <DfxIcon icon={IconVariant.BANK} color={IconColors.BLACK} />
                  <div className="flex flex-col gap-1">
                    {b.label && b.label.length > 0 && <p className="text-dfxGray-500">{b.label}</p>}
                    <p className="text-dfxBlue-800">{b.iban}</p>
                  </div>
                </div>
              ),
              form: (onFormSubmit: (item: any) => void) => <AddBankAccount onSubmit={onFormSubmit} />,
            }}
          />
          {asset && (
            <StyledCoinListItem
              asset={asset.name}
              protocol={BuyTabDefinitions.protocols[asset.blockchain]}
              onClick={() => {
                console.log('just a placeholder');
              }}
            />
          )}
          <StyledModalDropdown
            name="currency"
            labelFunc={(item: Fiat) => item.name}
            label="YOUR CURRENCY"
            placeholder="e.g. EUR"
            modal={{
              heading: 'Select your currency',
              items: currencies,
              itemContent: (c: Fiat) => (
                <div className="flex flex-row gap-2">
                  <p className="text-dfxBlue-800">{c.name}</p>
                </div>
              ),
            }}
          />
        </div>
        <StyledInput label="Buy amount" placeholder="0.00" name="amount" />
      </Form>
      {paymentInfo && <PaymentInformationContent info={paymentInfo} />}
    </>
  );
}

interface PaymentInformation {
  iban: string;
  isSepaInstant: boolean;
  bic: string;
  purpose: string;
  recipient: string;
  fee: string;
}

interface PaymentInformationContentProps {
  info: PaymentInformation;
}

function PaymentInformationContent({ info }: PaymentInformationContentProps): JSX.Element {
  return (
    <>
      <h2>Payment Information</h2>
      <p>
        Please transfer the purchase amount using this information via your banking application. The purpose of payment
        is important!
      </p>
      <p>IBAN: {info.iban}</p>
      <p>BIC: {info.bic}</p>
      <p>Purpose {info.purpose}</p>
      <p>Recipient: {info.recipient}</p>
      <p>Fee: {info.fee}</p>
      <div className="border border-dfxGray-500 rounded-md"></div>
      <StyledButton
        label="Click once your bank Transfer is completed."
        onClick={() => console.log('TODO ask what should happen after this button was clicked')}
        caps={false}
      />
    </>
  );
}
