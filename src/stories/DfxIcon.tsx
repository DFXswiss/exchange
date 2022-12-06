import { IconContext, IconType } from 'react-icons';
import {
  MdContentCopy,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdUnfoldLess,
  MdUnfoldMore,
  MdExpandLess,
  MdExpandMore,
  MdChevronLeft,
  MdChevronRight,
  MdInfoOutline,
  MdInfo,
  MdClose,
  MdOutlineCancel,
  MdEast,
  MdWest,
  MdSettings,
} from 'react-icons/md';
import React, { ReactElement, useContext } from 'react';

export enum IconVariant {
  ARROWRIGHT = 'ARROWRIGHT',
  ARROWLEFT = 'ARROWLEFT',
  BACK = 'BACK',
  CANCEL = 'CANCEL',
  CHEVRIGHT = 'CHEVRIGHT',
  CHEVLEFT = 'CHEVLEFT',
  CLOSE = 'CLOSE',
  COPY = 'COPY',
  EXPANDLESS = 'EXPANDLESS',
  EXPANDMORE = 'EXPANDMORE',
  FORWARD = 'FORWARD',
  INFO = 'INFO',
  INFOOUTLINE = 'INFOOUTLINE',
  SETTINGS = 'SETTINGS',
  UNFOLDLESS = 'UNFOLDLESS',
  UNFOLDMORE = 'UNFOLDMORE',
  WALLET = 'WALLET',
  BANK = 'BANK',
}

export const VARIANT_MAPS: Record<IconVariant, ReactElement<IconType>> = {
  [IconVariant.COPY]: <MdContentCopy />,
  [IconVariant.BACK]: <MdArrowBackIos />,
  [IconVariant.FORWARD]: <MdArrowForwardIos />,
  [IconVariant.UNFOLDLESS]: <MdUnfoldLess />,
  [IconVariant.UNFOLDMORE]: <MdUnfoldMore />,
  [IconVariant.EXPANDLESS]: <MdExpandLess />,
  [IconVariant.EXPANDMORE]: <MdExpandMore />,
  [IconVariant.CHEVLEFT]: <MdChevronLeft />,
  [IconVariant.CHEVRIGHT]: <MdChevronRight />,
  [IconVariant.INFOOUTLINE]: <MdInfoOutline />,
  [IconVariant.INFO]: <MdInfo />,
  [IconVariant.ARROWLEFT]: <MdWest />,
  [IconVariant.ARROWRIGHT]: <MdEast />,
  [IconVariant.CLOSE]: <MdClose />,
  [IconVariant.CANCEL]: <MdOutlineCancel />,
  [IconVariant.SETTINGS]: <MdSettings />,
  [IconVariant.WALLET]: <DfxWalletIcon />,
  [IconVariant.BANK]: <DfxBankIcon />,
};

interface DfxIconProps {
  icon: IconVariant;
  color: IconColors;
  size: IconSizes;
}

export enum IconSizes {
  XS = 'EXTRA SMALL',
  SM = 'SMALL',
  MD = 'MEDIUM',
  LG = 'LARGE',
  XL = 'EXTRA LARGE',
}

export enum IconColors {
  RED = 'RED',
  BLUE = 'BLUE',
  LIGHTBLUE = 'LIGHTBLUE',
  GRAY = 'GRAY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

const COLOR_MAPS: Record<IconColors, string> = {
  [IconColors.RED]: '#F5516C',
  [IconColors.BLUE]: '#072440',
  [IconColors.LIGHTBLUE]: '#5A81BB',
  [IconColors.GRAY]: '#D6DBE2',
  [IconColors.WHITE]: '#ffffff',
  [IconColors.BLACK]: '#000000',
};

const SIZE_MAPS: Record<IconSizes, string> = {
  [IconSizes.XS]: '16px',
  [IconSizes.SM]: '18px',
  [IconSizes.MD]: '20px',
  [IconSizes.LG]: '24px',
  [IconSizes.XL]: '32px',
};

export default function DfxIcon({ icon, color = IconColors.RED, size = IconSizes.MD }: DfxIconProps) {
  return (
    <IconContext.Provider value={{ color: COLOR_MAPS[color], size: SIZE_MAPS[size] }}>
      {VARIANT_MAPS[icon]}
    </IconContext.Provider>
  );
}

export function DfxWalletIcon() {
  const icContext = useContext(IconContext);
  return (
    <svg
      width={icContext.size}
      height={icContext.size}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.73133 18.5474H18.3231V18.5463C19.4184 18.5463 20.3106 17.6552 20.3106 16.5588V5.7378C20.3106 4.64249 19.4195 3.7503 18.3231 3.7503H17.3785L17.3839 2.54469C17.3861 2.01178 17.1808 1.51054 16.8052 1.13269C16.4295 0.75485 15.9293 0.547363 15.3964 0.547363H3.33492C1.66629 0.547363 0.5 1.32708 0.5 2.44313V2.49664V16.3152C0.5 16.8984 0.806862 17.4652 1.34305 17.8692C1.93056 18.3126 2.75614 18.5474 3.73133 18.5474ZM1.08533 2.44313C1.08533 1.67107 2.01028 1.13269 3.33492 1.13269H9.36568H15.3964C15.7721 1.13269 16.1248 1.28012 16.3902 1.54657C16.6556 1.81303 16.8008 2.16685 16.7986 2.54251L16.7931 3.7503H3.33492C1.98953 3.7503 1.08533 3.2152 1.08533 2.44313ZM15.1717 11.1468C15.1717 10.1529 15.9776 9.34701 16.9715 9.34701H20.3103V8.34701H16.9715C15.4253 8.34701 14.1717 9.60066 14.1717 11.1468C14.1717 12.693 15.4253 13.9467 16.9715 13.9467H20.3103V12.9467H16.9715C15.9776 12.9467 15.1717 12.1407 15.1717 11.1468Z"
        fill={icContext.color}
      />
    </svg>
  );
}

export function DfxBankIcon() {
  const icContext = useContext(IconContext);
  return (
    <svg
      width={icContext.size}
      height={icContext.size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.6265 7.69076H8.2978V15.2792H10.6265V7.69076Z" fill={icContext.color} />
      <path d="M15.7708 7.69076H13.4421V15.2792H15.7708V7.69076Z" fill={icContext.color} />
      <path d="M5.48224 7.69076H3.1535V15.2792H5.48224V7.69076Z" fill={icContext.color} />
      <path
        d="M0.404925 5.57356L9.4141 0.856445L18.4025 5.57356L18.4043 6.63816H0.404297L0.404925 5.57356Z"
        fill={icContext.color}
      />
      <path d="M18.4043 16.3309H0.404297V18.366H18.4043V16.3309Z" fill={icContext.color} />
    </svg>
  );
}
