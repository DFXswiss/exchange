import { PaymentInformation } from './payment-information';
import QRCode from 'react-qr-code';

interface GiroCodeProps {
  info: PaymentInformation;
}

export function GiroCode({ info }: GiroCodeProps): JSX.Element {
  const defaultValues = {
    service: 'BCD',
    version: '001',
    encoding: '2',
    transfer: 'SCT',
    char: '',
    ref: '',
  };

  function isValid(): boolean {
    return Boolean(info.currency) && Boolean(info.amount);
  }

  function toValue(info: PaymentInformation): string {
    if (!isValid()) return '';
    return `
    ${defaultValues.service}
    ${defaultValues.version}
    ${defaultValues.encoding}
    ${defaultValues.transfer}
    ${info.bic}
    ${info.recipient}
    ${info.iban}
    ${info.currency?.name}${info.amount}
    ${defaultValues.char}
    ${defaultValues.ref}
    ${info.purpose}
    `.trim();
  }

  return isValid() ? <QRCode className="mx-auto" value={toValue(info)} size={128} fgColor={'#072440'} /> : <></>;
}
