import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DfxTest } from "./DfxTest";

export default {
  title: "Example/DfxTest",
  component: DfxTest,
} as ComponentMeta<typeof DfxTest>;

const Template: ComponentStory<typeof DfxTest> = (args) => (
  <DfxTest {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
