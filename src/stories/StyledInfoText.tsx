import { PropsWithChildren } from 'react';
import DfxIcon, { IconColors, IconSizes, IconVariant } from './DfxIcon';

export interface StyledInfoTextProps extends PropsWithChildren {
  darkTheme?: boolean;
  bigText?: boolean;
  invertedIcon?: boolean;
  iconColor?: IconColors;
}

export default function StyledInfoText({
  darkTheme,
  children,
  bigText,
  invertedIcon,
  iconColor = IconColors.RED,
}: StyledInfoTextProps) {
  let wrapperClasses = 'flex gap-2';
  let iconSize: IconSizes;
  let iconVariant: IconVariant;

  invertedIcon ? (iconVariant = IconVariant.INFO) : (iconVariant = IconVariant.INFO_OUTLINE);

  darkTheme ? (wrapperClasses += ' text-white') : (wrapperClasses += ' text-dfxBlue-800');

  if (bigText) {
    iconSize = IconSizes.LG;
  } else {
    iconSize = IconSizes.MD;
    wrapperClasses += ' text-sm';
  }

  return (
    <div className={wrapperClasses}>
      <div className="shrink-0">
        <DfxIcon icon={iconVariant} size={iconSize} color={iconColor} />
      </div>
      <span>{children}</span>
    </div>
  );
}
