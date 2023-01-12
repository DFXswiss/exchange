import { PropsWithChildren } from 'react';
import DfxIcon, { IconColors, IconSizes, IconVariant } from './DfxIcon';

export interface StyledInfoTextProps extends PropsWithChildren {
  darkTheme?: boolean;
  textSize?: StyledInfoTextSizes;
  invertedIcon?: boolean;
  iconColor?: IconColors;
  discreet?: boolean;
}

export enum StyledInfoTextSizes {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
}

type TextSizeMapsProps = {
  wrapperClasses: string;
  iconSize: IconSizes;
};

const TEXT_SIZE_MAPS: Record<StyledInfoTextSizes, TextSizeMapsProps> = {
  [StyledInfoTextSizes.XS]: { wrapperClasses: ' text-xs', iconSize: IconSizes.SM },
  [StyledInfoTextSizes.SM]: { wrapperClasses: ' text-sm', iconSize: IconSizes.MD },
  [StyledInfoTextSizes.MD]: { wrapperClasses: '', iconSize: IconSizes.LG },
};

export default function StyledInfoText({
  darkTheme,
  children,
  textSize = StyledInfoTextSizes.SM,
  invertedIcon,
  iconColor = IconColors.RED,
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
