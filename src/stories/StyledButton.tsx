import StyledLoadingSpinner, { SpinnerSize, SpinnerVariant } from './StyledLoadingSpinner';
import DfxIcon, { IconColor, IconSize, IconVariant } from './DfxIcon';

export enum StyledButtonSize {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export enum StyledButtonWidth {
  MIN = 'MIN',
  SM = 'SM',
  MD = 'MD',
  FULL = 'FULL',
}

export enum StyledButtonColor {
  RED = 'RED',
  GRAY = 'GRAY',
  GRAY_OUTLINE = 'GRAY_OUTLINE',
  PALE_WHITE = 'PALE_WHITE',
  WHITE = 'WHITE',
}

export interface StyledButtonProps {
  label: string;
  onClick: () => void;
  size?: StyledButtonSize;
  width?: StyledButtonWidth;
  color?: StyledButtonColor;
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
  loadingSpinnerSize: SpinnerSize;
  iconSize: IconSize;
};

const SIZE_MAPS: Record<StyledButtonSize, SizeMapProps> = {
  [StyledButtonSize.BIG]: {
    buttonClasses: 'font-bold text-base rounded px-7 py-2.5 gap-4 ',
    loadingSpinnerSize: SpinnerSize.MD,
    iconSize: IconSize.MD,
  },
  [StyledButtonSize.SMALL]: {
    buttonClasses: 'text-sm rounded-md px-3.5 py-0.5 gap-2 ',
    loadingSpinnerSize: SpinnerSize.SM,
    iconSize: IconSize.XS,
  },
};

type ColorMapProps = {
  buttonColorClasses: string;
  iconColor: IconColor;
};

const COLOR_MAPS: Record<StyledButtonColor, ColorMapProps> = {
  [StyledButtonColor.RED]: {
    buttonColorClasses:
      'bg-primary-red text-white hover:bg-dfxRed-150 focus:bg-dfxRed-150 active:bg-dfxRed-100 hover:shadow-lg',
    iconColor: IconColor.WHITE,
  },
  [StyledButtonColor.GRAY]: {
    buttonColorClasses: 'bg-dfxGray-800 text-dfxGray-700',
    iconColor: IconColor.DARK_GRAY,
  },
  [StyledButtonColor.GRAY_OUTLINE]: {
    buttonColorClasses: 'border border-dfxGray-700 text-dfxGray-700 hover:border-dfxGray-800 hover:text-dfxGray-800',
    iconColor: IconColor.DARK_GRAY,
  },
  [StyledButtonColor.WHITE]: {
    buttonColorClasses:
      'bg-dfxGray-400 text-primary-blue hover:bg-dfxGray-500 focus:bg-dfxGray-500 active:bg-dfxGray-600 hover:shadow-lg',
    iconColor: IconColor.BLUE,
  },
  [StyledButtonColor.PALE_WHITE]: {
    buttonColorClasses:
      'border border-white/20 text-white bg-white/10 hover:bg-white/20 focus:bg-white/20 active:bg-white/30',
    iconColor: IconColor.WHITE,
  },
};

const WIDTH_MAPS: Record<StyledButtonWidth, string> = {
  [StyledButtonWidth.MIN]: 'mx-4',
  [StyledButtonWidth.SM]: 'w-[250px]',
  [StyledButtonWidth.MD]: 'min-w-[250px]',
  [StyledButtonWidth.FULL]: 'w-full',
};

export default function StyledButton({
  label,
  onClick,
  size = StyledButtonSize.BIG,
  width = StyledButtonWidth.MD,
  color = StyledButtonColor.RED,
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
    renderedColor = COLOR_MAPS[StyledButtonColor.GRAY].buttonColorClasses;
  } else {
    if (color === StyledButtonColor.GRAY) {
      renderedColor =
        COLOR_MAPS[color].buttonColorClasses + ' hover:bg-dfxGray-900  focus:bg-dfxGray-900 active:bg-dfxGray-800';
    } else {
      renderedColor = COLOR_MAPS[color].buttonColorClasses;
    }
  }

  buttonClasses += [
    SIZE_MAPS[size].buttonClasses,
    renderedColor,
    width === StyledButtonWidth.MIN && deactivateMargin ? '' : WIDTH_MAPS[width],
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
            color={isDisabled ? IconColor.DARK_GRAY : COLOR_MAPS[color].iconColor}
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
