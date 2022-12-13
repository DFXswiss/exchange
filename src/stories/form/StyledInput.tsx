import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { ControlProps } from './Form';

interface StyledInputProps extends ControlProps {
  placeholder?: string;
  customErrorHandling?: boolean;
}

const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  (
    { control, name, label, rules, disabled = false, placeholder, customErrorHandling, ...props }: StyledInputProps,
    ref,
  ) => {
    const textColor = customErrorHandling ? 'text-dfxRed-100' : 'text-dfxBlue-800';

    return (
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <div className="flex flex-col gap-1 py-4">
            <label className="text-dfxBlue-800 text-base font-semibold pl-4">{label}</label>
            <input
              className={
                'text-base font-normal border placeholder:text-dfxGray-600 border-dfxGray-500 rounded-md p-3 outline-dfxBlue-400 outline-2 ' +
                textColor
              }
              type={'text'}
              onBlur={onBlur}
              onChange={(value) => onChange(value.target.value)}
              placeholder={placeholder}
              value={value ?? ''}
              disabled={disabled}
              ref={ref}
              {...props}
            />

            {/* TODO error text */}
          </div>
        )}
        name={name}
        rules={rules}
      />
    );
  },
);

export default StyledInput;
