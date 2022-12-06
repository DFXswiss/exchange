import DfxIcon, { IconColors, IconVariant, VARIANT_MAPS } from './DfxIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'DFX/DfxIcons',
  component: DfxIcon,
} as ComponentMeta<typeof DfxIcon>;

export const SingleIcon: ComponentStory<typeof DfxIcon> = (args) => {
  return <DfxIcon {...args} />;
};

SingleIcon.args = {
  icon: IconVariant.COPY,
  color: IconColors.RED,
};

export const AllIcons: ComponentStory<typeof DfxIcon> = (args) => {
  return (
    <div className="grid gap-6 grid-cols-6">
      <DfxIcon {...args} icon={IconVariant.ARROWLEFT} />
      <DfxIcon {...args} icon={IconVariant.ARROWRIGHT} />
      <DfxIcon {...args} icon={IconVariant.BACK} />
      <DfxIcon {...args} icon={IconVariant.FORWARD} />
      <DfxIcon {...args} icon={IconVariant.CHEVLEFT} />
      <DfxIcon {...args} icon={IconVariant.CHEVRIGHT} />
      <DfxIcon {...args} icon={IconVariant.CLOSE} />
      <DfxIcon {...args} icon={IconVariant.CANCEL} />
      <DfxIcon {...args} icon={IconVariant.COPY} />
      <DfxIcon {...args} icon={IconVariant.EXPANDLESS} />
      <DfxIcon {...args} icon={IconVariant.EXPANDMORE} />
      <DfxIcon {...args} icon={IconVariant.INFO} />
      <DfxIcon {...args} icon={IconVariant.INFOOUTLINE} />
      <DfxIcon {...args} icon={IconVariant.SETTINGS} />
      <DfxIcon {...args} icon={IconVariant.UNFOLDLESS} />
      <DfxIcon {...args} icon={IconVariant.UNFOLDMORE} />
      <DfxIcon {...args} icon={IconVariant.WALLET} />
      <DfxIcon {...args} icon={IconVariant.BANK} />
    </div>
  );
};

AllIcons.args = {};
