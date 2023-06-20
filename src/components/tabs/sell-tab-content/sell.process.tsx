import { DeepPartial, useForm, useWatch } from 'react-hook-form';
import { Utils } from '../../../utils';
import { AddBankAccount } from '../../buy/add-bank-account';
import Validations from '../../../validations';
import { useBlockchain } from '../../../hooks/blockchain.hook';
import { useMetaMask } from '../../../hooks/metamask.hook';
import useDebounce from '../../../hooks/debounce.hook';
import { useEffect, useState } from 'react';
import { useKycHelper } from '../../../hooks/kyc-helper.hook';
import BigNumber from 'bignumber.js';
import { KycHint } from '../../kyc-hint';
import {
  AlignContent,
  CopyButton,
  DfxIcon,
  Form,
  IconColor,
  IconSize,
  IconVariant,
  SpinnerSize,
  StyledBankAccountListItem,
  StyledButton,
  StyledButtonWidth,
  StyledCoinListItem,
  StyledDataTable,
  StyledDataTableRow,
  StyledDropdown,
  StyledHorizontalStack,
  StyledInput,
  StyledLoadingSpinner,
  StyledModalDropdown,
  StyledSpacer,
  StyledTabContentWrapper,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { useWalletContext } from '../../../contexts/wallet.context';
import { useClipboard } from '../../../hooks/clipboard.hook';
import { ApiError, Asset, BankAccount, Fiat, Sell, useBuyContext, useFiat, useSell } from '@dfx.swiss/react';
import { AssetType } from '@dfx.swiss/react/dist/definitions/asset';

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

interface PaymentInformation {
  estimatedAmount: string;
  fee: string;
  minFee: string | undefined;
  depositAddress: string;
}

export function SellTabContentProcess({ asset, balance }: SellTabContentProcessProps): JSX.Element {
  const { currencies, bankAccounts, updateAccount } = useBuyContext();
  const { blockchain } = useWalletContext();
  const { toProtocol } = useBlockchain();
  const { toDescription, toSymbol } = useFiat();
  const { address } = useWalletContext();
  const { addContract, createTransaction } = useMetaMask();
  const { isAllowedToSell } = useKycHelper();
  const { receiveFor } = useSell();
  const { copy } = useClipboard();
  const [customAmountError, setCustomAmountError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [sellTxId, setSellTxId] = useState<string>();
  const [kycRequired, setKycRequired] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInformation>();
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
    setIsCompleting(false);
    setSellTxId(undefined);
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
      .then(toPaymentInformation)
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
    setIsCompleting(true);
    await updateBankAccount();
    createTransaction(new BigNumber(validatedData.amount), validatedData.asset, address, paymentInfo.depositAddress)
      .then((txId) => setSellTxId(txId))
      .finally(() => setIsCompleting(false));
  }

  function toPaymentInformation(sell: Sell | undefined): PaymentInformation | undefined {
    if (!sell) return undefined;
    return {
      estimatedAmount: `≈ ${sell.estimatedAmount} ${data?.currency?.name ?? ''} (incl. DFX fees)`,
      fee: `${sell.fee} %`,
      minFee:
        sell.minFeeTarget > 0 && data.currency ? `${sell.minFeeTarget}${toSymbol(data.currency as Fiat)}` : undefined,
      depositAddress: sell.depositAddress,
    };
  }

  const rules = Utils.createRules({
    bankAccount: Validations.Required,
    asset: Validations.Required,
    currency: Validations.Required,
    amount: Validations.Required,
  });

  return isCompleting ? (
    <StyledTabContentWrapper leftBorder>
      <StyledVerticalStack gap={4} marginY={20} center full>
        <StyledLoadingSpinner size={SpinnerSize.LG} />
        <p>Waiting for the transaction to be executed.</p>
      </StyledVerticalStack>
    </StyledTabContentWrapper>
  ) : sellTxId ? (
    <StyledTabContentWrapper leftBorder>
      <StyledVerticalStack gap={4} full>
        <div className="mx-auto">
          <DfxIcon size={IconSize.XXL} icon={IconVariant.PROCESS_DONE} color={IconColor.BLUE} />
        </div>
        <p className="text-center px-20">
          Your transaction was executed successfully.
          <br />
          We will inform you about the progress via E-mail.
        </p>
        <StyledHorizontalStack gap={2} center>
          <p>Transaction hash:</p>
          <span className="font-bold">{`${sellTxId.substring(0, 5)}...${sellTxId.substring(
            sellTxId.length - 5,
          )}`}</span>
          <CopyButton onCopy={() => copy(sellTxId)} />
        </StyledHorizontalStack>
      </StyledVerticalStack>
    </StyledTabContentWrapper>
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
              itemContent: (b) => <StyledBankAccountListItem bankAccount={{ label: b.label ?? '', ...b }} />,
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
                    isToken={asset.type === AssetType.TOKEN}
                    protocol={toProtocol(asset.blockchain)}
                    popupLabel="Click on the MetaMask symbol in order to add this asset in your portfolio overview of your MetaMask or copy the address to add it manually."
                    onAdd={(svgData) => addContract(asset, svgData, blockchain)}
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
            {paymentInfo.estimatedAmount && (
              <p className="text-dfxBlue-800 text-start w-full text-xs pl-12">{paymentInfo.estimatedAmount}</p>
            )}
            <StyledDataTable alignContent={AlignContent.BETWEEN} showBorder={false} narrow>
              <StyledDataTableRow discreet>
                <p>DFX-Fee</p>
                <p>{paymentInfo.minFee ? `${paymentInfo.fee} (min. ${paymentInfo.minFee})` : paymentInfo.fee}</p>
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
