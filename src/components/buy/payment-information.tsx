import {
  AlignContent,
  CopyButton,
  DfxIcon,
  IconColor,
  IconVariant,
  StyledDataTable,
  StyledDataTableRow,
  StyledInfoText,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { Fiat } from '../../api/definitions/fiat';
import { useClipboard } from '../../hooks/clipboard.hook';
import { GiroCode } from './giro-code';

export interface PaymentInformation {
  iban: string;
  isSepaInstant: boolean;
  bic: string;
  purpose: string;
  recipient: string;
  estimatedAmount: string;
  fee: string;
  minFee?: string;
  currency?: Fiat;
  amount?: number;
}

interface PaymentInformationContentProps {
  info: PaymentInformation;
}

export function PaymentInformationContent({ info }: PaymentInformationContentProps): JSX.Element {
  const { copy } = useClipboard();
  return (
    <>
      <StyledVerticalStack marginY={5} gap={2}>
        <h2 className="text-center">Payment Information</h2>
        <StyledInfoText iconColor={IconColor.BLUE}>
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
                <DfxIcon icon={IconVariant.SEPA_INSTANT} color={IconColor.RED} />
              </div>
            )}
          </div>
          <CopyButton onCopy={() => copy(info.iban)} />
        </StyledDataTableRow>
        <StyledDataTableRow label="BIC">
          {info.bic}
          <CopyButton onCopy={() => copy(info.bic)} />
        </StyledDataTableRow>
        <StyledDataTableRow
          label="Purpose of payment"
          infoText="The purpose of payment remains identical for the selected asset and can be used for recurring payments and standing orders."
        >
          {info.purpose}
          <CopyButton onCopy={() => copy(info.purpose)} />
        </StyledDataTableRow>
      </StyledDataTable>
      <GiroCode info={info} />
      <StyledDataTable label="Recipient" showBorder>
        <StyledDataTableRow>{info.recipient}</StyledDataTableRow>
      </StyledDataTable>
      <StyledDataTable alignContent={AlignContent.BETWEEN} showBorder={false} narrow>
        <StyledDataTableRow discreet>
          <p>DFX-Fee</p>
          <p>{info.minFee ? `${info.fee} (min. ${info.minFee})` : info.fee}</p>
        </StyledDataTableRow>
      </StyledDataTable>
    </>
  );
}
