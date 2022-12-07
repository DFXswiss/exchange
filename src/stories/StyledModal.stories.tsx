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
      {showModal ? (
        <StyledModal onClose={setShowModal}>
          <h2>Überschrift</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam illum ea magni consequatur voluptas,
            necessitatibus temporibus, delectus alias tempora exercitationem accusantium culpa dolorem adipisci. Fugiat
            hic laborum tempore obcaecati.
          </p>
        </StyledModal>
      ) : null}
    </>
  );
};

Primary.args = {
  heading: 'Modal-Heading',
};
