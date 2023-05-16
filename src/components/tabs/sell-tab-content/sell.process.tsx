import { useForm } from 'react-hook-form';
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

interface SellTabContentProcessProps {
  asset?: Asset;
}

interface FormData {
  bankAccount: BankAccount;
  asset: Asset;
  currency: Fiat;
  amount: string;
}

export function SellTabContentProcess({ asset }: SellTabContentProcessProps): JSX.Element {
  const { currencies, bankAccounts } = useBuyContext();
  const { toProtocol } = useBlockchain();
  const { toDescription } = useFiat();
  const { addContract } = useMetaMask();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { asset } });

  async function onSubmit(_data: FormData): Promise<void> {
    // TODO (Krysh): fix broken form validation and onSubmit
  }

  const rules = Utils.createRules({
    bankAccount: Validations.Required,
    asset: Validations.Required,
    currency: Validations.Required,
    amount: Validations.Required,
  });

  return (
    <StyledTabContentWrapper leftBorder>
      <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(onSubmit)}>
        <StyledVerticalStack gap={8}>
          {bankAccounts && (
            <StyledModalDropdown<BankAccount>
              name="bankAccount"
              labelFunc={(item) => Utils.formatIban(item.iban) ?? ''}
              descriptionFunc={(item) => item.label}
              label="Cash out to my bank account"
              placeholder="Add or select your IBAN"
              modal={{
                heading: 'Select your bank account',
                items: bankAccounts,
                itemContent: (b) => <StyledBankAccountListItem bankAccount={b} />,
                form: (onFormSubmit: (item: BankAccount) => void) => <AddBankAccount onSubmit={onFormSubmit} />,
              }}
            />
          )}
          {currencies && (
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
                    <div className="p-3 h-full text-dfxGray-600">Select a coin</div>
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
                  items={currencies}
                  labelFunc={(item) => item.name}
                  descriptionFunc={(item) => toDescription(item)}
                />
              </div>
            </div>
          )}
          <StyledInput
            type={'number'}
            label="Enter your desired payout amount"
            placeholder="0.00"
            // prefix={data?.currency && toSymbol(data.currency as Fiat)}
            name="amount"
            // forceError={kycRequired || customAmountError != null}
            // forceErrorMessage={customAmountError}
            // loading={isLoading}
          />
        </StyledVerticalStack>
        {/* {paymentInfo && (
          <p className="text-dfxBlue-800 text-start w-full text-xs pl-7 pt-1">{paymentInfo.estimatedAmount}</p>
        )} */}
        <StyledSpacer spacing={6} />
      </Form>
    </StyledTabContentWrapper>
  );
}
