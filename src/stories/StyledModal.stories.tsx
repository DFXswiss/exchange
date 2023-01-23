import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import DfxIcon, { IconVariant } from './DfxIcon';
import StyledHorizontalStack from './layout-helpers/StyledHorizontalStack';
import StyledSpacer from './layout-helpers/StyledSpacer';
import StyledVerticalStack from './layout-helpers/StyledVerticalStack';
import StyledButton, { StyledButtonColor, StyledButtonWidth } from './StyledButton';
import StyledCheckboxRow from './StyledCheckboxRow';

import StyledModal, { StyledModalColor, StyledModalType, StyledModalWidth } from './StyledModal';

export default {
  title: 'Building Blocks/StyledModal',
  component: StyledModal,
} as ComponentMeta<typeof StyledModal>;

export const RegularModalWithHeading: ComponentStory<typeof StyledModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <StyledButton label="Open Modal" onClick={() => setShowModal(true)}></StyledButton>
      <StyledModal {...args} onClose={setShowModal} isVisible={showModal}>
        <h2>Dieses Modal kann man mit X schließen</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam illum ea magni consequatur voluptas,
          necessitatibus temporibus, delectus alias tempora exercitationem accusantium culpa dolorem adipisci. Fugiat
          hic laborum tempore obcaecati.
        </p>
        <p>
          <br></br>
        </p>
        <StyledButton
          width={StyledButtonWidth.FULL}
          color={StyledButtonColor.RED}
          label="Oder über den Button"
          caps={false}
          onClick={() => {
            setShowModal(false);
          }}
        />
      </StyledModal>
    </>
  );
};

RegularModalWithHeading.args = {
  heading: 'Eine Überschrift',
  color: StyledModalColor.DFX_GRADIENT,
  closeWithX: true,
};

export const WhiteModalWithHeading: ComponentStory<typeof StyledModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <StyledButton label="Open White Modal" onClick={() => setShowModal(true)}></StyledButton>
      <StyledModal {...args} onClose={setShowModal} isVisible={showModal}>
        <h2>Hier wurde das X deaktiviert.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam illum ea magni consequatur voluptas,
          necessitatibus temporibus, delectus alias tempora exercitationem accusantium culpa dolorem adipisci. Fugiat
          hic laborum tempore obcaecati.
        </p>
        <p>
          <br></br>
        </p>
        <StyledButton
          width={StyledButtonWidth.FULL}
          color={StyledButtonColor.RED}
          label="Schließen nur über den Button"
          caps={false}
          onClick={() => {
            setShowModal(false);
          }}
        />
      </StyledModal>
    </>
  );
};

WhiteModalWithHeading.args = {
  heading: 'Eine Überschrift',
  color: StyledModalColor.WHITE,
  closeWithX: false,
};

export const AlertModal: ComponentStory<typeof StyledModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <StyledButton label="Open Alert Modal" caps={false} onClick={() => setShowModal(true)}></StyledButton>
      <StyledModal {...args} onClose={setShowModal} isVisible={showModal}>
        <h1>Terms and Conditions.</h1>
        <p>
          Please read our terms and conditions and click on ”Next”to confirm and to continue to the DFX Multichain
          Service.
        </p>
        <p>
          <br></br>
        </p>
        <StyledButton
          width={StyledButtonWidth.MD}
          color={StyledButtonColor.RED}
          label="Schließen nur über den Button"
          caps={false}
          onClick={() => {
            setShowModal(false);
          }}
        />
      </StyledModal>
    </>
  );
};

AlertModal.args = {
  type: StyledModalType.ALERT,
};

export const DeleteBankAccountAlert: ComponentStory<typeof StyledModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <StyledButton label="Open Alert Modal" caps={false} onClick={() => setShowModal(true)}></StyledButton>
      <StyledModal {...args} onClose={setShowModal} isVisible={showModal}>
        <h2>Remove IBAN from your DFX account?</h2>
        <StyledSpacer spacing={7} />
        <StyledHorizontalStack gap={5}>
          <StyledButton
            width={StyledButtonWidth.FULL}
            color={StyledButtonColor.GRAY_OUTLINE}
            label="Cancel"
            onClick={() => {
              setShowModal(false);
            }}
          />

          <StyledButton
            width={StyledButtonWidth.FULL}
            color={StyledButtonColor.RED}
            label="Remove"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </StyledHorizontalStack>
      </StyledModal>
    </>
  );
};

DeleteBankAccountAlert.args = {
  type: StyledModalType.ALERT,
};

export const SignaturePopupAlert: ComponentStory<typeof StyledModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <StyledButton label="Open Alert Modal" caps={false} onClick={() => setShowModal(true)}></StyledButton>
      <StyledModal {...args} onClose={setShowModal} isVisible={showModal}>
        <StyledVerticalStack gap={5} center>
          <DfxIcon icon={IconVariant.SIGNATURE_POPUP} />
          <h2>
            Log in to your DFX account by verifying with your signature that you are the sole owner of the provided
            blockchain address.
          </h2>
          <StyledCheckboxRow isChecked={isChecked} onChange={setIsChecked} centered>
            Don't show this again.
          </StyledCheckboxRow>

          <StyledButton
            width={StyledButtonWidth.MD}
            color={StyledButtonColor.RED}
            label="OK"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </StyledVerticalStack>
      </StyledModal>
    </>
  );
};

SignaturePopupAlert.args = {
  type: StyledModalType.ALERT,
  width: StyledModalWidth.SMALL,
};
