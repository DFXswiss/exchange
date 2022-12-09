export enum StyledButtonSizes {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export enum StyledButtonWidths {
  MIN = 'MIN',
  MD = 'MD',
  FULL = 'FULL',
}

export enum StyledButtonColors {
  RED = 'RED',
  GRAY = 'GRAY',
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
}

const SIZE_MAPS: Record<StyledButtonSizes, string> = {
  [StyledButtonSizes.BIG]: 'font-bold text-base rounded px-7 py-2.5 ',
  [StyledButtonSizes.SMALL]: 'text-sm rounded-md px-3.5 py-0.5 ',
};

const COLOR_MAPS: Record<StyledButtonColors, string> = {
  [StyledButtonColors.RED]: 'bg-primary-red text-white hover:bg-dfxRed-150 focus:bg-dfxRed-150 active:bg-dfxRed-100',
  [StyledButtonColors.GRAY]:
    'bg-dfxGray-800 text-dfxGray-700 hover:bg-dfxGray-700 hover:text-dfxGray-800 focus:bg-dfxGray-700 focus:text-dfxGray-800 active:bg-dfxGray-800 active:text-dfxGray-700',
  [StyledButtonColors.WHITE]:
    'bg-dfxGray-400 text-primary-blue hover:bg-dfxGray-500 focus:bg-dfxGray-500 active:bg-dfxGray-600',
  [StyledButtonColors.PALE_WHITE]:
    'border border-white/20 text-white bg-white/10 hover:bg-white/20 focus:bg-white/20 active:bg-white/30',
};

const WIDTH_MAPS: Record<StyledButtonWidths, string> = {
  [StyledButtonWidths.MIN]: 'mx-4',
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
}: StyledButtonProps) {
  let buttonClasses =
    'inline-block leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ';

  buttonClasses += [SIZE_MAPS[size], COLOR_MAPS[color], WIDTH_MAPS[width], caps ? 'uppercase' : 'normal-case'].join(
    ' ',
  );

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
}
