import { DeepPartial, useForm, useWatch } from 'react-hook-form';
import { Asset } from '../../../api/definitions/asset';
import { BankAccount } from '../../../api/definitions/bank-account';
import { Fiat } from '../../../api/definitions/fiat';
import StyledTabContentWrapper from '../../../stories/StyledTabContentWrapper';
import Form from '../../../stories/form/Form';
import StyledVerticalStack from '../../../stories/layout-helpers/StyledVerticalStack';
import { useBuyContext } from '../../../api/contexts/buy.context';
import StyledModalDropdown from '../../../stories/form/StyledModalDropdown';
import { Utils } from '../../../utils';
import StyledBankAccountListItem from '../../../stories/form/StyledBankAccountListItem';
import { AddBankAccount } from '../../buy/add-bank-account';
import Validations from '../../../validations';
import StyledDropdown from '../../../stories/form/StyledDropdown';
import DfxIcon, { IconColor, IconSize, IconVariant } from '../../../stories/DfxIcon';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useFiat } from '../../../api/hooks/fiat.hook';
import StyledCoinListItem from '../../../stories/StyledCoinListItem';
import { useMetaMask } from '../../../hooks/metamask.hook';
import StyledInput from '../../../stories/form/StyledInput';
import StyledSpacer from '../../../stories/layout-helpers/StyledSpacer';
import useDebounce from '../../../hooks/debounce.hook';
import { useEffect, useState } from 'react';
import { Sell } from '../../../api/definitions/sell';
import { useKycHelper } from '../../../hooks/kyc-helper.hook';
import { useSell } from '../../../api/hooks/sell.hook';
import { ApiError } from '../../../api/definitions/error';
import BigNumber from 'bignumber.js';
import { KycHint } from '../../kyc-hint';
import StyledDataTable, { AlignContent } from '../../../stories/StyledDataTable';
import StyledDataTableRow from '../../../stories/StyledDataTableRow';
import StyledButton, { StyledButtonWidth } from '../../../stories/StyledButton';
import { useWalletContext } from '../../../contexts/wallet.context';
import { CopyButton } from '../../copy-button';
import StyledHorizontalStack from '../../../stories/layout-helpers/StyledHorizontalStack';
import { useClipboard } from '../../../hooks/clipboard.hook';

interface SellTabContentProcessProps {
  asset?: Asset;
  balance?: BigNumber;
}

interface FormData {
  bankAccount: BankAccount;
  asset: Asset;
  currency: Fiat;
  amount: string;
}

export function SellTabContentProcess({ asset, balance }: SellTabContentProcessProps): JSX.Element {
  const { currencies, bankAccounts, updateAccount } = useBuyContext();
  const { toProtocol } = useBlockchain();
  const { toDescription } = useFiat();
  const { address } = useWalletContext();
  const { addContract, createTransaction } = useMetaMask();
  const { isAllowedToSell } = useKycHelper();
  const { receiveFor } = useSell();
  const { copy } = useClipboard();
  const [customAmountError, setCustomAmountError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [sellTxId, setSellTxId] = useState<string>();
  const [kycRequired, setKycRequired] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<Sell>();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { asset }, mode: 'onTouched' });
  const data = useWatch({ control });
  const validatedData = validateData(useDebounce(data, 500));
  const selectedBankAccount = useWatch({ control, name: 'bankAccount' });
  const enteredAmount = useWatch({ control, name: 'amount' });

  const dataValid = validatedData != null;

  useEffect(() => {
    asset && setValue('asset', asset);
    setValue('amount', '');
  }, [asset]);

  useEffect(() => {
    if (selectedBankAccount && selectedBankAccount.preferredCurrency)
      setValue('currency', selectedBankAccount.preferredCurrency);
  }, [selectedBankAccount]);

  useEffect(() => {
    if (!enteredAmount) {
      setCustomAmountError(undefined);
      setKycRequired(false);
    }
  }, [enteredAmount]);

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
      .then((value) => checkForMinDeposit(value, amount, validatedData.asset.name))
      .then((value) => checkForAmountAvailable(amount, validatedData.asset.name, value))
      .then((value) => {
        setKycRequired(dataValid && !isAllowedToSell(Number(value?.estimatedAmount)));
        return value;
      })
      .then(setPaymentInfo)
      .catch((error: ApiError) => {
        if (error.statusCode === 400 && error.message === 'Ident data incomplete') {
          setKycRequired(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [validatedData]);

  function checkForMinDeposit(sell: Sell, amount: number, currency: string): Sell | undefined {
    if (sell.minVolume > amount) {
      setCustomAmountError(
        `Entered amount is below minimum deposit of ${Utils.formatAmountCrypto(sell.minVolume)} ${currency}`,
      );
      return undefined;
    } else {
      setCustomAmountError(undefined);
      return sell;
    }
  }

  function checkForAmountAvailable(amount: number, asset: string, sell?: Sell): Sell | undefined {
    if (!sell) return sell;
    if (balance?.isLessThan(amount) ?? true) {
      setCustomAmountError(`Entered amount is higher than available balance of ${balance?.toString() ?? 0} ${asset}`);
    } else {
      setCustomAmountError(undefined);
      return sell;
    }
  }

  function validateData(data?: DeepPartial<FormData>): FormData | undefined {
    if (data && Number(data.amount) > 0 && data.asset != null && data.bankAccount != null && data.currency != null) {
      return data as FormData;
    }
  }

  async function updateBankAccount(): Promise<BankAccount> {
    return updateAccount(selectedBankAccount.id, { preferredCurrency: data.currency as Fiat });
  }

  async function onSubmit(_data: FormData): Promise<void> {
    // TODO (Krysh): fix broken form validation and onSubmit
  }

  async function handleNext(): Promise<void> {
    if (!validatedData || !validatedData.amount || !validatedData.asset || !address || !paymentInfo) return;
    await updateBankAccount();
    const txId = await createTransaction(
      new BigNumber(validatedData.amount),
      validatedData.asset,
      address,
      paymentInfo.depositAddress,
    );
    setSellTxId(txId);
  }

  const rules = Utils.createRules({
    bankAccount: Validations.Required,
    asset: Validations.Required,
    currency: Validations.Required,
    amount: Validations.Required,
  });

  return sellTxId ? (
    <StyledVerticalStack gap={4} full>
      <div className="mx-auto">
        <DfxIcon size={IconSize.XXL} icon={IconVariant.PROCESS_DONE} color={IconColor.BLUE} />
      </div>
      <p className="text-center px-20">
        Your transaction was successfully broadcasted.
        <br />
        We will inform you about the progress via E-mail.
      </p>
      <StyledHorizontalStack gap={2} center>
        <p>Transaction hash:</p>
        <span className="font-bold">{`${sellTxId.substring(0, 5)}...${sellTxId.substring(sellTxId.length - 5)}`}</span>
        <CopyButton onCopy={() => copy(sellTxId)} />
      </StyledHorizontalStack>
    </StyledVerticalStack>
  ) : (
    <StyledTabContentWrapper leftBorder>
      <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(onSubmit)}>
        <StyledVerticalStack gap={8}>
          <StyledModalDropdown<BankAccount>
            name="bankAccount"
            labelFunc={(item) => Utils.formatIban(item.iban) ?? ''}
            descriptionFunc={(item) => item.label}
            label="Cash out to my bank account"
            placeholder="Add or select your IBAN"
            modal={{
              heading: 'Select your bank account',
              items: bankAccounts ?? [],
              itemContent: (b) => <StyledBankAccountListItem bankAccount={b} />,
              form: (onFormSubmit: (item: BankAccount) => void) => <AddBankAccount onSubmit={onFormSubmit} />,
            }}
          />
          <div className="flex justify-between  items-center">
            <div className="basis-5/12 shrink-1">
              <div className="flex ml-3.5 mb-2.5">
                <DfxIcon icon={IconVariant.WALLET} size={IconSize.SM} color={IconColor.BLUE} />

                <label className="text-dfxBlue-800 text-base font-semibold pl-3.5">Your Wallet</label>
              </div>
              <div className="border border-dfxGray-400 rounded drop-shadow-sm">
                {asset ? (
                  <StyledCoinListItem
                    asset={asset}
                    protocol={toProtocol(asset.blockchain)}
                    popupLabel="Click on the MetaMask symbol in order to add this asset in your portfolio overview of your MetaMask or copy the address to add it manually."
                    onAdd={addContract}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={() => {}}
                    disabled
                    alwaysShowDots
                  />
                ) : (
                  <div className="px-3 py-4 h-full text-dfxGray-600">Select a coin</div>
                )}
              </div>
            </div>
            <div className="basis-2/12 shrink-0 flex justify-center pt-9">
              <div className=" ">
                <DfxIcon icon={IconVariant.ARROW_RIGHT} size={IconSize.LG} color={IconColor.GRAY} />
              </div>
            </div>
            <div className="basis-5/12 shrink-1 z-1">
              <StyledDropdown<Fiat>
                name="currency"
                label="Your Currency"
                placeholder="e.g. EUR"
                labelIcon={IconVariant.BANK}
                items={currencies ?? []}
                labelFunc={(item) => item.name}
                descriptionFunc={(item) => toDescription(item)}
              />
            </div>
          </div>
          <StyledInput
            type={'number'}
            label="Enter your desired payout amount"
            placeholder="0.00"
            prefix={asset?.name}
            name="amount"
            forceError={kycRequired || customAmountError != null}
            forceErrorMessage={customAmountError}
            loading={isLoading}
          />
        </StyledVerticalStack>
        {kycRequired && !customAmountError && <KycHint />}
        {paymentInfo && !kycRequired && (
          <>
            {paymentInfo.estimatedAmount > 0 && (
              <p className="text-dfxBlue-800 text-start w-full text-xs pl-12">
                {`≈ ${paymentInfo.estimatedAmount} ${validatedData?.currency.name ?? ''} (incl. DFX fees)`}
              </p>
            )}
            <StyledDataTable alignContent={AlignContent.BETWEEN} showBorder={false} narrow>
              <StyledDataTableRow discreet>
                <p>DFX-Fee</p>
                <p>{`${paymentInfo.fee} %`}</p>
              </StyledDataTableRow>
            </StyledDataTable>
            <StyledButton
              width={StyledButtonWidth.FULL}
              label="Complete transaction"
              onClick={handleNext}
              caps={false}
            />
          </>
        )}
        <StyledSpacer spacing={6} />
      </Form>
    </StyledTabContentWrapper>
  );
}
