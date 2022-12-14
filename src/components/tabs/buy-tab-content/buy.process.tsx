import { useEffect, useState } from 'react';
import { DeepPartial, useForm, useWatch } from 'react-hook-form';
import { useBuyContext } from '../../../api/contexts/buy.context';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { Buy } from '../../../api/definitions/buy';
import { Fiat } from '../../../api/definitions/fiat';
import DfxIcon, { IconColors, IconVariant } from '../../../stories/DfxIcon';
import Form from '../../../stories/form/Form';
import StyledInput from '../../../stories/form/StyledInput';
import StyledModalDropdown from '../../../stories/form/StyledModalDropdown';
import StyledButton, { StyledButtonWidths } from '../../../stories/StyledButton';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';
import { AddBankAccount } from '../../buy/add-bank-account';
import { BuyTabDefinitions } from '../buy.tab';
import { Utils } from '../../../utils';
import Validations from '../../../validations';
import StyledDataTable, { AlignContent } from '../../../stories/StyledDataTable';
import StyledDataTableRow from '../../../stories/StyledDataTableRow';
import StyledIconButton from '../../../stories/StyledIconButton';
import { useClipboard } from '../../../hooks/clipboard.hook';
import StyledTabContentWrapper from '../../../stories/StyledTabContentWrapper';
import { useKyc } from '../../../hooks/kyc.hook';
import useDebounce from '../../../hooks/debounce.hook';
import StyledModal, { StyledModalColors } from '../../../stories/StyledModal';
import { BuyCompletion } from '../../buy/buy-completion';
import StyledSpacer from '../../../stories/layout-helpers/StyledSpacer';

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
  const { isAllowedToBuy, start, limit } = useKyc();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInformation>();
  const [showsCompletion, setShowsCompletion] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { asset } });
  const data = useWatch({ control });
  const validatedData = validateData(useDebounce(data, 500));

  const dataValid = validatedData != null;
  const kycRequired = dataValid && !isAllowedToBuy(Number(validatedData?.amount));

  useEffect(() => {
    if (!dataValid) return;

    receiveFor({
      iban: validatedData.bankAccount.iban,
      currency: validatedData.currency,
      amount: Number(validatedData.amount),
      asset: validatedData.asset,
    })
      .then((value) => toPaymentInformation(value, validatedData.bankAccount.sepaInstant))
      .then(setPaymentInfo);
  }, [validatedData]);

  async function onSubmit(_data: FormData): Promise<void> {
    // TODO (Krysh): fix broken form validation and onSubmit
  }

  function validateData(data?: DeepPartial<FormData>): FormData | undefined {
    if (data && Number(data.amount) > 0 && data.asset != null && data.bankAccount != null && data.currency != null) {
      return data as FormData;
    }
  }

  function toPaymentInformation(buy: Buy, isSepaInstant: boolean): PaymentInformation {
    return {
      iban: buy.iban,
      bic: buy.bic,
      purpose: buy.remittanceInfo,
      isSepaInstant,
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
      {/* MODALS */}
      <StyledModal isVisible={showsCompletion} color={StyledModalColors.DFX_GRADIENT} onClose={setShowsCompletion}>
        <BuyCompletion onSubmit={onBack} onCancel={() => setShowsCompletion(false)} />
      </StyledModal>
      {/* CONTENT */}
      <StyledTabContentWrapper showBackArrow={true} onBackClick={onBack}>
        <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            {bankAccounts && (
              <StyledModalDropdown<BankAccount>
                name="bankAccount"
                labelFunc={(item) => item.iban}
                detailLabelFunc={(item) => item.label ?? ''}
                label="Your bank account"
                placeholder="Add or select your IBAN"
                modal={{
                  heading: 'Select your bank account',
                  items: bankAccounts,
                  itemContent: (b) => (
                    <div className="flex flex-row gap-2">
                      <DfxIcon icon={IconVariant.BANK} color={IconColors.BLACK} />
                      <div className="flex flex-col gap-1">
                        {b.label && b.label.length > 0 && <p className="text-dfxGray-500">{b.label}</p>}
                        <p className="text-dfxBlue-800">{b.iban}</p>
                      </div>
                    </div>
                  ),
                  form: (onFormSubmit: (item: BankAccount) => void) => <AddBankAccount onSubmit={onFormSubmit} />,
                }}
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
            {currencies && (
              <StyledModalDropdown<Fiat>
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
            )}
          </div>
          <StyledInput label="Buy amount" placeholder="0.00" name="amount" forceError={kycRequired} />
        </Form>
        {paymentInfo && dataValid && !kycRequired && (
          <>
            <PaymentInformationContent info={paymentInfo} />
            <StyledButton
              width={StyledButtonWidths.FULL}
              label="Click once your bank Transfer is completed."
              onClick={() => setShowsCompletion(true)}
              caps={false}
            />
          </>
        )}
        {kycRequired && (
          <>
            <p>
              Your account needs to get verified once your daily transaction volume exceeds {limit}. If you want to
              increase your daily trading limit, please complete our KYC (Know-Your-Customer) process.
            </p>
            <StyledSpacer spacing={4} />
            <StyledButton width={StyledButtonWidths.FULL} label="Complete KYC" onClick={start} />
          </>
        )}
      </StyledTabContentWrapper>
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
  const { copy } = useClipboard();
  return (
    <>
      <h2>Payment Information</h2>
      <p>
        Please transfer the purchase amount using this information via your banking application. The purpose of payment
        is important!
      </p>
      <StyledDataTable alignContent={AlignContent.RIGHT} showBorder>
        <StyledDataTableRow label="IBAN">
          <div>
            <p>{info.iban}</p>
            {info.isSepaInstant && (
              <div className="text-white">
                <DfxIcon icon={IconVariant.SEPA_INSTANT} color={IconColors.RED} />
              </div>
            )}
          </div>

          <StyledIconButton icon={IconVariant.COPY} onClick={() => copy(info.iban)} />
        </StyledDataTableRow>
        <StyledDataTableRow label="BIC">
          {info.bic}
          <StyledIconButton icon={IconVariant.COPY} onClick={() => copy(info.bic)} />
        </StyledDataTableRow>
        <StyledDataTableRow label="Purpose of payment">
          {info.purpose}
          <StyledIconButton icon={IconVariant.COPY} onClick={() => copy(info.purpose)} />
        </StyledDataTableRow>
      </StyledDataTable>
      <StyledDataTable label="Recipient" showBorder>
        <StyledDataTableRow>{info.recipient}</StyledDataTableRow>
      </StyledDataTable>
      <StyledDataTable alignContent={AlignContent.BETWEEN}>
        <StyledDataTableRow discreet>
          <p>DFX-Fee</p>
          <p>{info.fee}</p>
        </StyledDataTableRow>
      </StyledDataTable>
    </>
  );
}
