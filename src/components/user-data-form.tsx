import { useForm, useWatch } from 'react-hook-form';
import { useUserContext } from '../api/contexts/user.context';
import StyledModal, { StyledModalType, StyledModalWidth } from '../stories/StyledModal';
import StyledVerticalStack from '../stories/layout-helpers/StyledVerticalStack';
import { AccountType, KycData } from '../api/definitions/kyc';
import { useKyc } from '../api/hooks/kyc.hook';
import { useState } from 'react';
import { ApiError } from '../api/definitions/error';
import { Utils } from '../utils';
import Validations from '../validations';
import StyledButton, { StyledButtonWidth } from '../stories/StyledButton';
import DfxIcon, { IconColor, IconVariant } from '../stories/DfxIcon';
import Form from '../stories/form/Form';
import StyledDropdown from '../stories/form/StyledDropdown';
import StyledHorizontalStack from '../stories/layout-helpers/StyledHorizontalStack';
import StyledInput from '../stories/form/StyledInput';
import StyledSpacer from '../stories/layout-helpers/StyledSpacer';

interface UserDataFormProps {
  onFinish?: () => void;
}

export function UserDataForm({ onFinish }: UserDataFormProps): JSX.Element {
  const { countries, reloadUser } = useUserContext();
  const { setKycData } = useKyc();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<KycData>({ mode: 'onTouched' });
  const selectedAccountType = useWatch({ control, name: 'accountType' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [showsErrorAlert, setShowsErrorAlert] = useState(false);

  function onSubmit(data: KycData) {
    setIsSubmitting(true);
    setKycData(data)
      .then(() => reloadUser())
      .then(() => onFinish?.())
      .catch((error: ApiError) => {
        setErrorMessage(error.message);
        setShowsErrorAlert(true);
      })
      .finally(() => setIsSubmitting(false));
  }

  const rules = Utils.createRules({
    accountType: Validations.Required,

    firstname: Validations.Required,
    surname: Validations.Required,
    street: Validations.Required,
    houseNumber: Validations.Required,
    zip: Validations.Required,
    location: Validations.Required,
    country: Validations.Required,

    mail: [Validations.Required, Validations.Mail],
    phone: [Validations.Required, Validations.Phone],

    organizationName: Validations.Required,
    organizationStreet: Validations.Required,
    organizationHouseNumber: Validations.Required,
    organizationLocation: Validations.Required,
    organizationZip: Validations.Required,
    organizationCountry: Validations.Required,
  });
  return (
    <>
      {/* MODAL */}
      <StyledModal
        isVisible={showsErrorAlert}
        onClose={setShowsErrorAlert}
        type={StyledModalType.ALERT}
        width={StyledModalWidth.SMALL}
      >
        <StyledVerticalStack gap={4}>
          <h1>Something went wrong</h1>
          <p>Please try again later, if the issue persists please reach out to our support.</p>
          {errorMessage && <p className="text-dfxGray-800 text-sm">{errorMessage}</p>}
          <div className="mx-auto">
            <StyledButton width={StyledButtonWidth.SM} onClick={() => setShowsErrorAlert(false)} label="Ok" />
          </div>
        </StyledVerticalStack>
      </StyledModal>
      {/* CONTENT */}
      <div className="flex flex-col items-center">
        <DfxIcon icon={IconVariant.USER_DATA} color={IconColor.BLUE} />
        <p className="text-base font-bold text-dfxBlue-800">Please fill in personal information to continue.</p>
        <Form control={control} rules={rules} errors={errors} onSubmit={handleSubmit(onSubmit)}>
          <StyledVerticalStack marginY={4} gap={2} full>
            <div>
              <p className="text-dfxGray-700 text-xs font-semibold text-start ml-4 -mb-1">ACCOUNT TYPE</p>
              <StyledDropdown
                name="accountType"
                label=""
                placeholder="Please select..."
                items={Object.values(AccountType)}
                labelFunc={(item) => item}
              />
            </div>
            <p className="text-dfxGray-700 text-xs font-semibold text-start ml-3 mt-4">PERSONAL INFORMATION</p>
            <StyledHorizontalStack gap={2}>
              <StyledInput name="firstname" label="First name" placeholder="John" full smallLabel />
              <StyledInput name="surname" label="Last name" placeholder="Doe" full smallLabel />
            </StyledHorizontalStack>
            <StyledHorizontalStack gap={2}>
              <StyledInput name="street" label="Street" placeholder="Street" full smallLabel />
              <StyledInput name="houseNumber" label="House nr." placeholder="xx" small smallLabel />
            </StyledHorizontalStack>
            <StyledHorizontalStack gap={2}>
              <StyledInput name="zip" type="number" label="ZIP code" placeholder="12345" small smallLabel />
              <StyledInput name="location" label="City" placeholder="Berlin" full smallLabel />
            </StyledHorizontalStack>
            <StyledDropdown
              name="country"
              label="Country"
              placeholder="Please select..."
              items={countries}
              labelFunc={(item) => item.name}
              smallLabel
            />
            <StyledInput name="mail" type="email" label="Email address" placeholder="example@mail.com" smallLabel />
            <StyledInput name="phone" type="tel" label="Phone number" placeholder="+49 12345678" smallLabel />
            {selectedAccountType && selectedAccountType !== AccountType.PERSONAL && (
              <>
                <p className="text-dfxGray-700 text-xs font-semibold text-start ml-3 mt-4">ORGANIZATION INFORMATION</p>
                <StyledInput
                  name="organizationName"
                  label="Organization name"
                  placeholder="Example inc."
                  full
                  smallLabel
                />
                <StyledHorizontalStack gap={2}>
                  <StyledInput name="organizationStreet" label="Street" placeholder="Street" full smallLabel />
                  <StyledInput name="organizationHouseNumber" label="House nr." placeholder="xx" small smallLabel />
                </StyledHorizontalStack>
                <StyledHorizontalStack gap={2}>
                  <StyledInput
                    name="organizationZip"
                    type="number"
                    label="ZIP code"
                    placeholder="12345"
                    small
                    smallLabel
                  />
                  <StyledInput name="organizationLocation" label="City" placeholder="Berlin" full smallLabel />
                </StyledHorizontalStack>
                <StyledDropdown
                  name="organizationCountry"
                  label="Country"
                  placeholder="Please select..."
                  items={countries}
                  labelFunc={(item) => item.name}
                  smallLabel
                />
              </>
            )}
            <StyledSpacer spacing={1} />
            <StyledButton
              label="continue"
              onClick={handleSubmit(onSubmit)}
              width={StyledButtonWidth.FULL}
              disabled={!isValid}
              isLoading={isSubmitting}
              caps
            />
          </StyledVerticalStack>
        </Form>
      </div>
    </>
  );
}
