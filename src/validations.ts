import * as IbanTools from 'ibantools';
import BlockedIbans from './static/blocked-iban.json';
import { Country } from './api/definitions/country';
import regex from './regex';
import { MinDeposit } from './api/definitions/buy';
import { Utils } from './utils';
import { Blockchain } from './api/definitions/blockchain';

class ValidationsClass {
  public get Required() {
    return {
      required: {
        value: true,
        message: 'Mandatory field',
      },
    };
  }

  public get Mail() {
    return {
      pattern: {
        value: regex.Mail,
        message: 'Invalid E-mail address',
      },
    };
  }

  public Iban(countries: Country[]) {
    return this.Custom((iban: string) => {
      iban = iban.split(' ').join('');

      // check country
      const allowedCountries = countries.map((c) => c.symbol.toLowerCase());
      if (iban.length >= 2 && !allowedCountries.find((c) => iban.toLowerCase().startsWith(c))) {
        return 'IBAN country code not allowed';
      }

      // check blocked IBANs
      const blockedIbans = BlockedIbans.map((i) => i.split(' ').join('').toLowerCase());
      if (blockedIbans.some((i) => iban.toLowerCase().match(i) != null)) {
        return 'IBAN not allowed';
      }

      return IbanTools.validateIBAN(iban).valid ? true : 'Invalid IBAN';
    });
  }

  // TODO (Krysh) as soon as buy process form is fixed, we should use this validation for min deposit check
  public MinDeposit(minDeposit: MinDeposit, blockchain: Blockchain) {
    return this.Custom((amount: string) => {
      if (isNaN(+amount)) {
        return 'Invalid amount';
      }

      if (minDeposit.amount > +amount) {
        const amount = Utils.formatAmount(minDeposit.amount);
        const asset = minDeposit.asset;

        return blockchain === Blockchain.ETH
          ? `Due to high transaction costs on the Ethereum mainnet, please use Layer-2 Arbitrum for volumes below ${amount} ${asset}. Ethereum and Arbitrum both use the ERC-20 standard.`
          : `Entered amount is below minimum deposit of ${amount} ${asset}`;
      }

      return true;
    });
  }

  public Custom = (validator: (value: any) => true | string) => ({
    validate: (val: any) => validator(val),
  });
}

const Validations = new ValidationsClass();
export default Validations;
