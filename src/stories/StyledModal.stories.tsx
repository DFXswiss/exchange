import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import StyledButton from './StyledButton';

import StyledModal from './StyledModal';

export default {
  title: 'Building Blocks/StyledModal',
  component: StyledModal,
} as ComponentMeta<typeof StyledModal>;

export const Primary: ComponentStory<typeof StyledModal> = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <StyledButton label="Open Modal" onClick={() => setShowModal(true)}></StyledButton>
      {showModal ? <StyledModal onClose={setShowModal}></StyledModal> : null}
    </>
  );
};

Primary.args = {};
