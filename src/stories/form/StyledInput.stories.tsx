import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Form from './Form';
import StyledInput from './StyledInput';

export default {
  title: 'Forms/StyledInput',
  component: StyledInput,
} as ComponentMeta<typeof StyledInput>;

export const BuyAmount: ComponentStory<typeof StyledInput> = (args) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ test: string }>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="bg-white p-10">
      <Form control={control} errors={errors} onSubmit={onSubmit}>
        <StyledInput {...args} name="test" />
      </Form>
    </div>
  );
};
BuyAmount.args = {
  label: 'Buy amount',
  placeholder: '0.00',
};
