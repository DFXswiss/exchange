import { ControlProps } from './Form';
import { useState } from 'react';
import DfxIcon, { IconColors, IconSizes, IconVariant } from '../DfxIcon';
import { Controller } from 'react-hook-form';

export interface StyledDropdownProps extends ControlProps {
  labelIcon?: IconVariant;
  placeholder?: string;
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

export interface DropdownItem {
  title: string;
  description: string;
}

export default function StyledDropdown({
  label,
  labelIcon,
  control,
  name,
  rules,
  disabled,
  items,
  placeholder,
  onSelect,
  ...props
}: StyledDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const select = (item: DropdownItem): void => {
    setIsOpen(false);
    onSelect(item);
  };

  let buttonClasses = 'flex justify-between border border-dfxGray-400 px-4 py-3 shadow-sm w-full';

  isOpen ? (buttonClasses += ' rounded-x rounded-t bg-dfxGray-400/50') : (buttonClasses += ' rounded');

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="relative">
          <div className="flex ml-3.5 mb-2.5">
            {labelIcon !== undefined && <DfxIcon icon={labelIcon} size={IconSizes.SM} color={IconColors.BLUE} />}

            <label className="text-dfxBlue-800 text-base font-semibold pl-3.5">{label}</label>
          </div>
          <button
            id="dropDownButton"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={buttonClasses}
            onBlur={onBlur}
            disabled={disabled}
            {...props}
          >
            <div className="flex flex-col gap-2 justify-between text-left">
              {value === undefined ? (
                <p className="text-dfxGray-400 drop-shadow-none py-[0.3rem]">{placeholder}</p>
              ) : (
                <>
                  <span className="text-dfxBlue-800 leading-none font-semibold">{value.title}</span>
                  <span className="text-dfxGray-800 text-xs h-min leading-none">{value.description}</span>
                </>
              )}
            </div>
            <div className="place-self-center">
              <DfxIcon icon={IconVariant.EXPAND_MORE} size={IconSizes.LG} />
            </div>
          </button>
          {isOpen && (
            <div className="absolute bg-white rounded-b w-full">
              {items.map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    onChange(item);
                    select(item);
                  }}
                  className="flex flex-col gap-2 justify-between text-left border-x border-dfxGray-400 w-full hover:bg-dfxGray-400/50 last:border-b last:rounded-b px-3.5 py-2.5"
                >
                  <span className="text-dfxBlue-800 leading-none font-semibold">{item.title}</span>
                  <span className="text-dfxGray-800 text-xs h-min leading-none">{item.description}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      name={name}
      rules={rules}
    />
  );
}