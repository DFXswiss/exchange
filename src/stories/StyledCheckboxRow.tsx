import { PropsWithChildren } from 'react';
import DfxIcon, { IconVariant, IconSize } from './DfxIcon';

export interface StyledCheckboxRowProps extends PropsWithChildren {
  darkTheme?: boolean;
  onChange: (isChecked: boolean) => any;
  isChecked?: boolean;
  withBackground?: boolean;
  centered?: boolean;
  textSize?: StyledCheckboxRowTextSize;
}

export enum StyledCheckboxRowTextSize {
  SM = 'SM',
  MD = 'MD',
}

type StyledCheckboxSizeMapsProps = {
  textClasses: string;
  iconSize: IconSize;
};

const CHECKBOX_SIZE_MAPS: Record<StyledCheckboxRowTextSize, StyledCheckboxSizeMapsProps> = {
  [StyledCheckboxRowTextSize.SM]: { textClasses: 'text-sm', iconSize: IconSize.MD },
  [StyledCheckboxRowTextSize.MD]: { textClasses: '', iconSize: IconSize.LG },
};

export default function StyledCheckboxRow({
  darkTheme,
  withBackground,
  children,
  onChange,
  centered = false,
  isChecked = false,
  textSize = StyledCheckboxRowTextSize.MD,
}: StyledCheckboxRowProps) {
  function changeCheckbox(checkBoxState: boolean) {
    onChange?.(checkBoxState);
  }

  let textClasses = CHECKBOX_SIZE_MAPS[textSize].textClasses;
  textClasses += darkTheme ? ' text-white' : ' text-dfxBlue-800';

  let wrapperClasses = 'flex gap-4 rounded';
  wrapperClasses += centered ? ' justify-center ' : ' justify-start ';

  if (withBackground) wrapperClasses += darkTheme ? ' bg-dfxRed-100/10 p-3' : ' bg-dfxGray-400 p-3';

  return (
    <div className={wrapperClasses} onClick={() => changeCheckbox(!isChecked)}>
      <div className="shrink-0">
        <DfxIcon
          icon={isChecked ? IconVariant.CHECKBOX_CHECKED : IconVariant.CHECKBOX_EMPTY}
          size={CHECKBOX_SIZE_MAPS[textSize].iconSize}
        />
      </div>
      <p className={textClasses}>{children}</p>
    </div>
  );
}
