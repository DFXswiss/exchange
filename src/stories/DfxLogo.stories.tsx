import DfxLogo from './DfxLogo';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/DfxLogo',
  component: DfxLogo,
} as ComponentMeta<typeof DfxLogo>;

export const DefaultLogo: ComponentStory<typeof DfxLogo> = () => {
  return <DfxLogo />;
};
