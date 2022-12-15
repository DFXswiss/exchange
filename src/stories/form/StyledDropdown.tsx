import { ControlProps } from './Form';
import { useState, useEffect } from 'react';
import DfxIcon, { IconColors, IconSizes, IconVariant } from '../DfxIcon';

export interface StyledDropdownProps extends ControlProps {
  labelIcon?: IconVariant;
  placeholder?: string;
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
  preSelection?: DropdownItem;
}

export interface DropdownItem {
  title: string;
  description: string;
}

export const dummyCurrencies: DropdownItem[] = [
  { title: 'EUR', description: 'EURO' },
  { title: 'USD', description: 'US Dollar' },
  { title: 'CHF', description: 'Swiss Franc' },
  { title: 'GBP', description: 'British Pound' },
];

export default function StyledDropdown({
  label,
  labelIcon,
  control,
  name,
  rules,
  error,
  disabled,
  preSelection,
  items,
  placeholder,
  onSelect,
}: StyledDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem>();

  useEffect(() => {
    if (preSelection) setSelectedItem(preSelection);
  }, [preSelection]);

  const select = (item: DropdownItem): void => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  let buttonClasses = 'flex justify-between border border-dfxGray-400 px-4 py-3 shadow-sm w-full';

  isOpen ? (buttonClasses += ' rounded-x rounded-t bg-dfxGray-400/50') : (buttonClasses += ' rounded');

  return (
    <div className="relative">
      <div className="flex ml-3.5 mb-2.5">
        {labelIcon !== undefined && <DfxIcon icon={labelIcon} size={IconSizes.SM} color={IconColors.BLUE} />}

        <label className="text-dfxBlue-800 text-base font-semibold pl-3.5">{label}</label>
      </div>
      <button id="dropDownButton" type="button" onClick={() => setIsOpen(!isOpen)} className={buttonClasses}>
        <div className="flex flex-col gap-2 justify-between text-left">
          {selectedItem === undefined ? (
            <p className="text-dfxGray-400 drop-shadow-none py-[0.3rem]">e.g. EUR</p>
          ) : (
            <>
              <span className="text-dfxBlue-800 leading-none font-semibold">{selectedItem?.title}</span>
              <span className="text-dfxGray-800 text-xs h-min leading-none">{selectedItem?.description}</span>
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
  );
}
