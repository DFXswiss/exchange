/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useBuyContext } from '../../../api/contexts/buy.context';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { PaymentInfo } from '../../../api/definitions/buy';
import { Fiat } from '../../../api/definitions/fiat';
import { CreateBankAccount } from '../../../api/hooks/bank-account.hook';
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

export function BuyTabContentProcess({ asset, onBack }: BuyTabContentProcessProps): JSX.Element {
  const { currencies, bankAccounts } = useBuyContext();
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm<PaymentInfo>();

  useEffect(() => {
    if (asset) setValue('asset', asset);
  }, [asset]);

  useEffect(() => {
    console.log('hey there use effect');
    const subscription = watch(
      debounce(() => {
        if (isValid) {
          console.log('finally asdf');
          console.log(getValues());
        }
      }, 500),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const rules = Utils.createRules({
    iban: Validations.Required,
    currency: Validations.Required,
    asset: Validations.Required,
    amount: Validations.Required,
  });

  async function onSubmit(newInfo: PaymentInfo): Promise<void> {
    console.log(newInfo);
  }

  return (
    <>
      {/* CONTENT */}
      <Form control={control} errors={errors} rules={rules} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <IconButton icon={IconVariant.BACK} onClick={onBack} />
          <StyledModalDropdown
            name="iban"
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
      {showPaymentInfo && <PaymentInformationContent />}
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
