import StyledLoadingSpinner, { SpinnerSizes, SpinnerVariant } from './StyledLoadingSpinner';
import DfxIcon, { IconColors, IconSizes, IconVariant } from './DfxIcon';

export enum StyledButtonSizes {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export enum StyledButtonWidths {
  MIN = 'MIN',
  SM = 'SM',
  MD = 'MD',
  FULL = 'FULL',
}

export enum StyledButtonColors {
  RED = 'RED',
  GRAY = 'GRAY',
  GRAY_OUTLINE = 'GRAY_OUTLINE',
  PALE_WHITE = 'PALE_WHITE',
  WHITE = 'WHITE',
}

export interface StyledButtonProps {
  label: string;
  onClick: () => void;
  size?: StyledButtonSizes;
  width?: StyledButtonWidths;
  color?: StyledButtonColors;
  caps?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  deactivateMargin?: boolean;
  icon?: IconVariant;
  iconAfterLabel?: boolean;
}

type SizeMapProps = {
  buttonClasses: string;
  loadingSpinnerSize: SpinnerSizes;
  iconSize: IconSizes;
};

const SIZE_MAPS: Record<StyledButtonSizes, SizeMapProps> = {
  [StyledButtonSizes.BIG]: {
    buttonClasses: 'font-bold text-base rounded px-7 py-2.5 gap-4 ',
    loadingSpinnerSize: SpinnerSizes.MD,
    iconSize: IconSizes.MD,
  },
  [StyledButtonSizes.SMALL]: {
    buttonClasses: 'text-sm rounded-md px-3.5 py-0.5 gap-2 ',
    loadingSpinnerSize: SpinnerSizes.SM,
    iconSize: IconSizes.XS,
  },
};

type ColorMapProps = {
  buttonColorClasses: string;
  iconColor: IconColors;
};

const COLOR_MAPS: Record<StyledButtonColors, ColorMapProps> = {
  [StyledButtonColors.RED]: {
    buttonColorClasses:
      'bg-primary-red text-white hover:bg-dfxRed-150 focus:bg-dfxRed-150 active:bg-dfxRed-100 hover:shadow-lg',
    iconColor: IconColors.WHITE,
  },
  [StyledButtonColors.GRAY]: {
    buttonColorClasses: 'bg-dfxGray-800 text-dfxGray-700',
    iconColor: IconColors.DARK_GRAY,
  },
  [StyledButtonColors.GRAY_OUTLINE]: {
    buttonColorClasses: 'border border-dfxGray-700 text-dfxGray-700 hover:border-dfxGray-800 hover:text-dfxGray-800',
    iconColor: IconColors.DARK_GRAY,
  },
  [StyledButtonColors.WHITE]: {
    buttonColorClasses:
      'bg-dfxGray-400 text-primary-blue hover:bg-dfxGray-500 focus:bg-dfxGray-500 active:bg-dfxGray-600 hover:shadow-lg',
    iconColor: IconColors.BLUE,
  },
  [StyledButtonColors.PALE_WHITE]: {
    buttonColorClasses:
      'border border-white/20 text-white bg-white/10 hover:bg-white/20 focus:bg-white/20 active:bg-white/30',
    iconColor: IconColors.WHITE,
  },
};

const WIDTH_MAPS: Record<StyledButtonWidths, string> = {
  [StyledButtonWidths.MIN]: 'mx-4',
  [StyledButtonWidths.SM]: 'w-[250px]',
  [StyledButtonWidths.MD]: 'min-w-[250px]',
  [StyledButtonWidths.FULL]: 'w-full',
};

export default function StyledButton({
  label,
  onClick,
  size = StyledButtonSizes.BIG,
  width = StyledButtonWidths.MD,
  color = StyledButtonColors.RED,
  caps = true,
  isLoading = false,
  disabled = false,
  hidden = false,
  deactivateMargin = false,
  icon,
  iconAfterLabel = false,
}: StyledButtonProps) {
  let buttonClasses =
    'inline-block flex justify-center leading-tight shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out ';

  let renderedColor: string;
  const isDisabled = disabled || isLoading;

  if (isDisabled) {
    renderedColor = COLOR_MAPS[StyledButtonColors.GRAY].buttonColorClasses;
  } else {
    if (color === StyledButtonColors.GRAY) {
      renderedColor =
        COLOR_MAPS[color].buttonColorClasses + ' hover:bg-dfxGray-900  focus:bg-dfxGray-900 active:bg-dfxGray-800';
    } else {
      renderedColor = COLOR_MAPS[color].buttonColorClasses;
    }
  }

  buttonClasses += [
    SIZE_MAPS[size].buttonClasses,
    renderedColor,
    width === StyledButtonWidths.MIN && deactivateMargin ? '' : WIDTH_MAPS[width],
    caps ? 'uppercase' : 'normal-case',
  ].join(' ');

  buttonClasses += hidden ? ' hidden' : '';

  return (
    <>
      <button type="button" className={buttonClasses} onClick={onClick} disabled={isDisabled}>
        {iconAfterLabel && label}
        {icon && (
          <DfxIcon
            icon={icon}
            size={SIZE_MAPS[size].iconSize}
            color={isDisabled ? IconColors.DARK_GRAY : COLOR_MAPS[color].iconColor}
          />
        )}
        {!iconAfterLabel && label}
        {isLoading && (
          <div className="place-self-center">
            <StyledLoadingSpinner variant={SpinnerVariant.PALE} size={SIZE_MAPS[size].loadingSpinnerSize} />
          </div>
        )}
      </button>
    </>
  );
}
