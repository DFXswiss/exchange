import { useState } from 'react';
import { Controller } from 'react-hook-form';
import StyledVerticalStack from '../layout-helpers/StyledVerticalStack';
import StyledModal, { StyledModalColors } from '../StyledModal';
import { ControlProps } from './Form';

interface StyledModalDropdownProps<T> extends ControlProps {
  placeholder: string;
  labelFunc: (item: T) => JSX.Element;
  modal: {
    heading: string;
    items: T[];
    itemContent: (item: T) => JSX.Element;
    form?: (onFormSubmit: (item: T) => void) => JSX.Element;
  };
}

export default function StyledModalDropdown<T>({
  control,
  name,
  label,
  rules,
  modal,
  placeholder,
  labelFunc,
  ...props
}: StyledModalDropdownProps<T>): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <StyledModal
            isVisible={showModal}
            onClose={setShowModal}
            heading={modal.heading}
            color={StyledModalColors.WHITE}
          >
            {modal.items.length > 0 && (
              <div className="flex flex-col gap-2">
                {modal.items
                  .map((item) => ({ item, content: modal.itemContent(item) }))
                  .map((obj, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        onChange(obj.item);
                        setShowModal(false);
                      }}
                    >
                      {obj.content}
                    </button>
                  ))}
              </div>
            )}
            {modal.form && (
              <>
                <div className="h-[1px] bg-dfxGray-400 mt-8 -mx-14" />
                {modal.form((item) => {
                  onChange(item);
                  setShowModal(false);
                })}
              </>
            )}
          </StyledModal>
          <StyledVerticalStack gap={1} marginY={4}>
            <label className="text-dfxBlue-800 text-base font-semibold pl-4">{label}</label>
            <button onClick={() => setShowModal(true)} onBlur={onBlur} {...props}>
              <div
                className={`text-base font-normal border border-dfxGray-500 rounded-md ${
                  value ? 'text-dfxBlue-800' : 'text-dfxGray-600'
                }`}
              >
                {value ? labelFunc(value) : placeholder}
              </div>
            </button>
          </StyledVerticalStack>
        </>
      )}
      name={name}
      rules={rules}
    />
  );
}
