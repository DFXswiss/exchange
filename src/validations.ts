// import * as IbanTools from 'ibantools';
// import { Country } from '../api/definitions/country';
// import BlockedIbans from '../public/blocked-iban.json';
// import regex from './regex';

class ValidationsClass {
  public get Required() {
    return {
      required: {
        value: true,
        message: 'Mandatory field',
      },
    };
  }
  /*
  public Iban(countries: Country[]) {
    return this.Custom((iban: string) => {
      iban = iban.split(' ').join('');

      // check country
      const allowedCountries = countries.filter((c) => c.enable).map((c) => c.symbol.toLowerCase());
      if (iban.length >= 2 && !allowedCountries.find((c) => iban.toLowerCase().startsWith(c))) {
        return 'validation.iban_country_invalid';
      }

      // check blocked IBANs
      const blockedIbans = BlockedIbans.map((i) => i.split(' ').join('').toLowerCase());
      if (blockedIbans.some((i) => iban.toLowerCase().match(i) != null)) {
        return 'validation.iban_blocked';
      }

      return IbanTools.validateIBAN(iban).valid ? true : 'validation.iban_invalid';
    });
  }

  public get Mail() {
    return {
      pattern: {
        value: regex.Mail,
        message: i18n.t('validation.pattern_invalid'),
      },
    };
  }

  public get Ref() {
    return {
      pattern: {
        value: /^\w{3}-\w{3}$/,
        message: i18n.t('validation.pattern_invalid'),
      },
    };
  }

  public get Phone() {
    return this.Custom((number: string) => {
      const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
      if (number && !number.match(/^\+\d+ .+$/)) {
        return 'validation.code_and_number';
      } else if (
        (number && !number.match(/^\+[\d ]*$/)) ||
        (number && !phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(number)))
      ) {
        return 'validation.pattern_invalid';
      }

      return true;
    });
  }

  public Custom = (validator: (value: any) => true | string) => ({
    validate: (val: any) => (typeof validator(val) == 'boolean' ? validator(val) : i18n.t(validator(val) as string)),
  });*/
}

const Validations = new ValidationsClass();
export default Validations;