import { forwardRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import StyledModal, { StyledModalColors } from '../StyledModal';
import { ControlProps } from './Form';

interface StyledModalDropdownProps extends ControlProps {
  placeholder: string;
  labelFunc: (item: any) => string;
  detailLabelFunc?: (item: any) => string;
  modal: {
    heading: string;
    items: any;
    itemContent: (item: any) => JSX.Element;
    form?: (onFormSubmit: (item: any) => void) => JSX.Element;
  };
}

const StyledModalDropdown = forwardRef<any, any>(
  (
    { control, name, label, rules, modal, placeholder, labelFunc, detailLabelFunc, ...props }: StyledModalDropdownProps,
    ref,
  ) => {
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
                    .map((item: any) => [item, modal.itemContent(item)])
                    .map(([item, content]: [any, JSX.Element], index: number) => (
                      <button
                        key={index}
                        onClick={() => {
                          onChange(item);
                          setShowModal(false);
                        }}
                      >
                        {content}
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
            <div className="flex flex-col gap-1 py-4">
              <label className="text-dfxBlue-800 text-base font-semibold pl-4">{label}</label>
              <button onClick={() => setShowModal(true)}>
                {value && detailLabelFunc && <p className="text-dfxGray-600">{detailLabelFunc(value)}</p>}
                <p
                  className={`text-base font-normal border border-dfxGray-500 rounded-md p-3 ${
                    value ? 'text-dfxBlue-800' : 'text-dfxGray-600'
                  }`}
                  onBlur={onBlur}
                  ref={ref}
                  {...props}
                >
                  {value ? labelFunc(value) : placeholder}
                </p>
              </button>
            </div>
          </>
        )}
        name={name}
        rules={rules}
      />
    );
  },
);

export default StyledModalDropdown;
