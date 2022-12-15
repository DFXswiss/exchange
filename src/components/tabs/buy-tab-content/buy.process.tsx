import { useEffect, useState } from 'react';
import { DeepPartial, useForm, useWatch } from 'react-hook-form';
import { useBuyContext } from '../../../api/contexts/buy.context';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { Buy } from '../../../api/definitions/buy';
import { Fiat } from '../../../api/definitions/fiat';
import DfxIcon, { IconColors, IconSizes, IconVariant } from '../../../stories/DfxIcon';
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
import StyledBankAccountListItem from '../../../stories/form/StyledBankAccountListItem';
import StyledInfoText from '../../../stories/StyledInfoText';
import StyledVerticalStack from '../../../stories/layout-helpers/StyledVerticalStack';
import StyledDropdown from '../../../stories/form/StyledDropdown';
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
  const [customAmountError, setCustomAmountError] = useState<string>();
  const [showsCompletion, setShowsCompletion] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { asset } });
  const data = useWatch({ control });
  const validatedData = validateData(useDebounce(data, 500));
  const selectedBankAccount = useWatch({ control, name: 'bankAccount' });

  const dataValid = validatedData != null;
  const kycRequired = dataValid && !isAllowedToBuy(Number(validatedData?.amount));

  const currencyDescription: Record<string, string> = {
    ['EUR']: 'Euro',
    ['USD']: 'US Dollar',
    ['CHF']: 'Swiss Franc',
    ['GBP']: 'British Pound',
  };

  useEffect(() => {
    if (!dataValid) return;

    const amount = Number(validatedData.amount);
    receiveFor({
      iban: validatedData.bankAccount.iban,
      currency: validatedData.currency,
      amount,
      asset: validatedData.asset,
    })
      .then((value) => checkForMinDeposit(value, amount))
      .then((value) => toPaymentInformation(value))
      .then(setPaymentInfo);
  }, [validatedData]);

  useEffect(() => {
    if (selectedBankAccount && selectedBankAccount.preferredCurrency)
      setValue('currency', selectedBankAccount.preferredCurrency);
  }, [selectedBankAccount]);

  async function onSubmit(_data: FormData): Promise<void> {
    // TODO (Krysh): fix broken form validation and onSubmit
  }

  function validateData(data?: DeepPartial<FormData>): FormData | undefined {
    if (data && Number(data.amount) > 0 && data.asset != null && data.bankAccount != null && data.currency != null) {
      return data as FormData;
    }
  }

  function checkForMinDeposit(buy: Buy, amount: number): Buy | undefined {
    // should we search for the right currency?
    const minDepositToCheck = buy.minDeposits.length === 0 ? undefined : buy.minDeposits[0];
    if (!minDepositToCheck || amount >= minDepositToCheck.amount) {
      setCustomAmountError(undefined);
      return buy;
    } else {
      setCustomAmountError(
        `Entered amount is below minimum deposit of ${Utils.formatAmount(minDepositToCheck.amount)} ${
          minDepositToCheck.asset
        }`,
      );
      return undefined;
    }
  }

  function toPaymentInformation(buy: Buy | undefined): PaymentInformation | undefined {
    if (!buy) return undefined;
    return {
      iban: buy.iban,
      bic: buy.bic,
      purpose: buy.remittanceInfo,
      isSepaInstant: buy.sepaInstant,
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
          <StyledVerticalStack gap={8}>
            {bankAccounts && (
              <StyledModalDropdown<BankAccount>
                name="bankAccount"
                labelFunc={(item) => item.iban}
                descriptionFunc={(item) => item.label}
                label="Your Bank Account"
                placeholder="Add or select your IBAN"
                modal={{
                  heading: 'Select your bank account',
                  items: bankAccounts,
                  itemContent: (b) => <StyledBankAccountListItem bankAccount={b} />,
                  form: (onFormSubmit: (item: BankAccount) => void) => <AddBankAccount onSubmit={onFormSubmit} />,
                }}
              />
            )}
            {currencies && asset && (
              <div className="flex justify-between  items-center">
                <div className="basis-5/12 shrink-1">
                  <StyledDropdown<Fiat>
                    name="currency"
                    label="Your Currency"
                    placeholder="e.g. EUR"
                    labelIcon={IconVariant.BANK}
                    items={currencies}
                    labelFunc={(item) => item.name}
                    descriptionFunc={(item) => currencyDescription[item.name]}
                  />
                </div>
                <div className="basis-2/12 shrink-0 flex justify-center pt-9">
                  <div className=" ">
                    <DfxIcon icon={IconVariant.ARROW_RIGHT} size={IconSizes.LG} color={IconColors.GRAY} />
                  </div>
                </div>
                <div className="basis-5/12 shrink-1">
                  <div className="flex ml-3.5 mb-2.5">
                    <DfxIcon icon={IconVariant.WALLET} size={IconSizes.SM} color={IconColors.BLUE} />

                    <label className="text-dfxBlue-800 text-base font-semibold pl-3.5">Your Wallet</label>
                  </div>
                  <div className="border border-dfxGray-400 rounded px-2 py-1 drop-shadow-sm">
                    <StyledCoinListItem
                      asset={asset.name}
                      protocol={BuyTabDefinitions.protocols[asset.blockchain]}
                      onClick={onBack}
                      disabled
                    />
                  </div>
                </div>
              </div>
            )}
            <StyledInput
              label="Buy Amount"
              placeholder="0.00"
              name="amount"
              forceError={kycRequired || customAmountError != null}
              forceErrorMessage={customAmountError}
            />
          </StyledVerticalStack>
          <StyledSpacer spacing={6} />
        </Form>
        {paymentInfo && dataValid && !kycRequired && (
          <>
            <PaymentInformationContent info={paymentInfo} />
            <StyledButton
              width={StyledButtonWidths.FULL}
              label="Click once your bank transfer is completed."
              onClick={() => setShowsCompletion(true)}
              caps={false}
            />
          </>
        )}
        {kycRequired && (
          <StyledVerticalStack gap={4} marginY={4}>
            <StyledInfoText invertedIcon>
              Your account needs to get verified once your daily transaction volume exceeds {limit}. If you want to
              increase your daily trading limit, please complete our KYC (Know-Your-Customer) process.
            </StyledInfoText>
            <StyledButton width={StyledButtonWidths.FULL} label="Complete KYC" onClick={start} />
          </StyledVerticalStack>
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
      <StyledVerticalStack marginY={5} gap={2}>
        <h2 className="text-center">Payment Information</h2>
        <StyledInfoText iconColor={IconColors.BLUE}>
          Please transfer the purchase amount using this information via your banking application. The purpose of
          payment is important!
        </StyledInfoText>
      </StyledVerticalStack>
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
      <StyledDataTable alignContent={AlignContent.BETWEEN} showBorder={false} narrow>
        <StyledDataTableRow discreet>
          <p>DFX-Fee</p>
          <p>{info.fee}</p>
        </StyledDataTableRow>
      </StyledDataTable>
    </>
  );
}
