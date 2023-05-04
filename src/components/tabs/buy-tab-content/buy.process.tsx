import { useEffect, useState } from 'react';
import { DeepPartial, useForm, useWatch } from 'react-hook-form';
import { useBuyContext } from '../../../api/contexts/buy.context';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { Buy } from '../../../api/definitions/buy';
import { Fiat } from '../../../api/definitions/fiat';
import DfxIcon, { IconColor, IconSize, IconVariant } from '../../../stories/DfxIcon';
import Form from '../../../stories/form/Form';
import StyledInput from '../../../stories/form/StyledInput';
import StyledModalDropdown from '../../../stories/form/StyledModalDropdown';
import StyledButton, { StyledButtonWidth } from '../../../stories/StyledButton';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';
import { AddBankAccount } from '../../buy/add-bank-account';
import { Utils } from '../../../utils';
import Validations from '../../../validations';
import StyledTabContentWrapper from '../../../stories/StyledTabContentWrapper';
import { useKyc } from '../../../hooks/kyc.hook';
import useDebounce from '../../../hooks/debounce.hook';
import StyledModal, { StyledModalColor } from '../../../stories/StyledModal';
import { BuyCompletion } from '../../buy/buy-completion';
import StyledBankAccountListItem from '../../../stories/form/StyledBankAccountListItem';
import StyledInfoText from '../../../stories/StyledInfoText';
import StyledVerticalStack from '../../../stories/layout-helpers/StyledVerticalStack';
import StyledDropdown from '../../../stories/form/StyledDropdown';
import StyledSpacer from '../../../stories/layout-helpers/StyledSpacer';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useFiat } from '../../../api/hooks/fiat.hook';
import { PaymentInformation, PaymentInformationContent } from '../../buy/payment-information';
import { useMetaMask } from '../../../hooks/metamask.hook';

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
  const { currencies, bankAccounts, receiveFor, updateAccount } = useBuyContext();
  const { isAllowedToBuy, start, limit } = useKyc();
  const { toProtocol } = useBlockchain();
  const { toDescription, toSymbol } = useFiat();
  const { addContract } = useMetaMask();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInformation>();
  const [customAmountError, setCustomAmountError] = useState<string>();
  const [showsCompletion, setShowsCompletion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (!dataValid) {
      setPaymentInfo(undefined);
      return;
    }

    const amount = Number(validatedData.amount);
    setIsLoading(true);
    receiveFor({
      iban: validatedData.bankAccount.iban,
      currency: validatedData.currency,
      amount,
      asset: validatedData.asset,
    })
      .then((value) => checkForMinDeposit(value, amount, validatedData.currency.name))
      .then((value) => toPaymentInformation(value))
      .then(setPaymentInfo)
      .finally(() => setIsLoading(false));
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

  function checkForMinDeposit(buy: Buy, amount: number, currency: string): Buy | undefined {
    if (buy.minVolume > amount) {
      setCustomAmountError(
        `Entered amount is below minimum deposit of ${Utils.formatAmount(buy.minVolume)} ${currency}`,
      );
      return undefined;
    } else {
      setCustomAmountError(undefined);
      return buy;
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
      estimatedAmount: `≈ ${buy.estimatedAmount} ${asset?.name ?? ''} (incl. all fees)`,
      fee: `${buy.fee} %`,
      minFee: buy.minFee > 0 ? `${buy.minFee}${data.currency ? toSymbol(data.currency as Fiat) : ''}` : undefined,
      currency: data.currency as Fiat,
      amount: Number(data.amount),
    };
  }

  function updateBankAccount() {
    updateAccount(selectedBankAccount.id, { preferredCurrency: data.currency as Fiat });
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
      <StyledModal isVisible={showsCompletion} color={StyledModalColor.DFX_GRADIENT} onClose={setShowsCompletion}>
        <BuyCompletion onSubmit={onBack} onCancel={() => setShowsCompletion(false)} />
      </StyledModal>
      {/* CONTENT */}
      <StyledTabContentWrapper showBackArrow={true} onBackClick={onBack}>
        <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(onSubmit)}>
          <StyledVerticalStack gap={8}>
            {bankAccounts && (
              <StyledModalDropdown<BankAccount>
                name="bankAccount"
                labelFunc={(item) => Utils.formatIban(item.iban) ?? ''}
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
                    descriptionFunc={(item) => toDescription(item)}
                  />
                </div>
                <div className="basis-2/12 shrink-0 flex justify-center pt-9">
                  <div className=" ">
                    <DfxIcon icon={IconVariant.ARROW_RIGHT} size={IconSize.LG} color={IconColor.GRAY} />
                  </div>
                </div>
                <div className="basis-5/12 shrink-1">
                  <div className="flex ml-3.5 mb-2.5">
                    <DfxIcon icon={IconVariant.WALLET} size={IconSize.SM} color={IconColor.BLUE} />

                    <label className="text-dfxBlue-800 text-base font-semibold pl-3.5">Your Wallet</label>
                  </div>
                  <div className="border border-dfxGray-400 rounded px-2 py-1 drop-shadow-sm">
                    <StyledCoinListItem
                      asset={asset}
                      protocol={toProtocol(asset.blockchain)}
                      onClick={onBack}
                      popupLabel="Click on the MetaMask symbol in order to add this asset in your portfolio overview of your MetaMask or copy the address to add it manually."
                      onAdd={addContract}
                      disabled
                      alwaysShowDots
                    />
                  </div>
                </div>
              </div>
            )}
            <StyledInput
              type={'number'}
              label="Buy Amount"
              placeholder="0.00"
              prefix={data?.currency && toSymbol(data.currency as Fiat)}
              name="amount"
              forceError={kycRequired || customAmountError != null}
              forceErrorMessage={customAmountError}
              loading={isLoading}
            />
          </StyledVerticalStack>
          {paymentInfo && (
            <p className="text-dfxBlue-800 text-start w-full text-xs pl-7 pt-1">{paymentInfo.estimatedAmount}</p>
          )}
          <StyledSpacer spacing={6} />
        </Form>
        {paymentInfo && dataValid && !kycRequired && (
          <>
            <PaymentInformationContent info={paymentInfo} />
            <StyledButton
              width={StyledButtonWidth.FULL}
              label="Click once your bank transfer is completed."
              onClick={() => {
                updateBankAccount();
                setShowsCompletion(true);
              }}
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
            <StyledButton width={StyledButtonWidth.FULL} label="Complete KYC" onClick={start} />
          </StyledVerticalStack>
        )}
      </StyledTabContentWrapper>
    </>
  );
}
