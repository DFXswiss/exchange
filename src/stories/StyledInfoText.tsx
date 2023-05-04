import { PropsWithChildren } from 'react';
import DfxIcon, { IconColor, IconSize, IconVariant } from './DfxIcon';

export interface StyledInfoTextProps extends PropsWithChildren {
  darkTheme?: boolean;
  textSize?: StyledInfoTextSize;
  invertedIcon?: boolean;
  iconColor?: IconColor;
  discreet?: boolean;
}

export enum StyledInfoTextSize {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
}

type TextSizeMapsProps = {
  wrapperClasses: string;
  iconSize: IconSize;
};

const TEXT_SIZE_MAPS: Record<StyledInfoTextSize, TextSizeMapsProps> = {
  [StyledInfoTextSize.XS]: { wrapperClasses: ' text-xs', iconSize: IconSize.SM },
  [StyledInfoTextSize.SM]: { wrapperClasses: ' text-sm', iconSize: IconSize.MD },
  [StyledInfoTextSize.MD]: { wrapperClasses: '', iconSize: IconSize.LG },
};

export default function StyledInfoText({
  darkTheme,
  children,
  textSize = StyledInfoTextSize.SM,
  invertedIcon,
  iconColor = IconColor.RED,
  discreet,
}: StyledInfoTextProps) {
  let wrapperClasses = 'flex gap-2' + TEXT_SIZE_MAPS[textSize].wrapperClasses;
  const iconSize = TEXT_SIZE_MAPS[textSize].iconSize;
  const iconVariant = invertedIcon ? IconVariant.INFO : IconVariant.INFO_OUTLINE;

  if (darkTheme) {
    wrapperClasses += discreet ? ' text-white/50' : ' text-white';
  } else {
    wrapperClasses += discreet ? ' text-dfxGray-700' : ' text-dfxBlue-800';
  }

  return (
    <div className={wrapperClasses}>
      <div className="shrink-0">
        <DfxIcon icon={iconVariant} size={iconSize} color={iconColor} />
      </div>
      <p>{children}</p>
    </div>
  );
}
