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
import { ReactElement, useContext } from 'react';

interface DfxIconProps {
  icon: IconVariant;
  color?: IconColors;
  size?: IconSizes;
}

export enum IconVariant {
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_LEFT = 'ARROW_LEFT',
  BACK = 'BACK',
  CANCEL = 'CANCEL',
  CHEV_RIGHT = 'CHEV_RIGHT',
  CHEV_LEFT = 'CHEV_LEFT',
  CLOSE = 'CLOSE',
  COPY = 'COPY',
  EXPAND_LESS = 'EXPAND_LESS',
  EXPAND_MORE = 'EXPAND_MORE',
  FORWARD = 'FORWARD',
  INFO = 'INFO',
  INFO_OUTLINE = 'INFO_OUTLINE',
  SETTINGS = 'SETTINGS',
  UNFOLD_LESS = 'UNFOLD_LESS',
  UNFOLD_MORE = 'UNFOLD_MORE',
  WALLET = 'WALLET',
  BANK = 'BANK',
  SEPA_INSTANT = 'SEPA_INSTANT',
}

export const VARIANT_MAPS: Record<IconVariant, ReactElement<IconType>> = {
  [IconVariant.COPY]: <MdContentCopy />,
  [IconVariant.BACK]: <MdArrowBackIos />,
  [IconVariant.FORWARD]: <MdArrowForwardIos />,
  [IconVariant.UNFOLD_LESS]: <MdUnfoldLess />,
  [IconVariant.UNFOLD_MORE]: <MdUnfoldMore />,
  [IconVariant.EXPAND_LESS]: <MdExpandLess />,
  [IconVariant.EXPAND_MORE]: <MdExpandMore />,
  [IconVariant.CHEV_LEFT]: <MdChevronLeft />,
  [IconVariant.CHEV_RIGHT]: <MdChevronRight />,
  [IconVariant.INFO_OUTLINE]: <MdInfoOutline />,
  [IconVariant.INFO]: <MdInfo />,
  [IconVariant.ARROW_LEFT]: <MdWest />,
  [IconVariant.ARROW_RIGHT]: <MdEast />,
  [IconVariant.CLOSE]: <MdClose />,
  [IconVariant.CANCEL]: <MdOutlineCancel />,
  [IconVariant.SETTINGS]: <MdSettings />,
  [IconVariant.WALLET]: <DfxWalletIcon />,
  [IconVariant.BANK]: <DfxBankIcon />,
  [IconVariant.SEPA_INSTANT]: <DfxSepaInstantAvailable />,
};

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
  LIGHT_BLUE = 'LIGHT_BLUE',
  GRAY = 'GRAY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

const COLOR_MAPS: Record<IconColors, string> = {
  [IconColors.RED]: '#F5516C',
  [IconColors.BLUE]: '#072440',
  [IconColors.LIGHT_BLUE]: '#5A81BB',
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

function DfxWalletIcon() {
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

function DfxBankIcon() {
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

function DfxSepaInstantAvailable() {
  return (
    <div className="bg-primary-red text-xs flex gap-1 justify-center rounded-sm w-fit pl-1 pr-2 py-0.25 font-semibold italic">
      <svg
        width="27"
        height="10"
        viewBox="0 0 27 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="place-self-center"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6502 0.166504H26.5877L23.6145 9.1665H10.677L13.6502 0.166504ZM18.7118 6.93191C17.7944 6.93191 17.1585 6.43613 16.9977 5.71236H19.1029L19.3259 5.01754H16.9794C16.9977 4.90174 17.0233 4.78593 17.0598 4.67013C17.0963 4.55433 17.1439 4.43852 17.1987 4.32272H19.5451L19.7681 3.6279H17.6629C18.2879 2.90413 19.2454 2.40835 20.1592 2.40835C20.7476 2.40835 21.2228 2.61462 21.5298 2.95479L22.3741 2.33959C21.9537 1.84018 21.2776 1.53982 20.4369 1.53982C19.0079 1.53258 17.513 2.40835 16.6724 3.62066H15.3858L15.1629 4.31548H16.2813C16.2301 4.43128 16.1863 4.54709 16.1497 4.66289C16.1132 4.7787 16.0839 4.8945 16.062 5.0103H14.9399L14.717 5.70512H16.0035C16.0693 6.92106 17.0013 7.7932 18.4341 7.7932C19.2783 7.7932 20.1446 7.48922 20.8828 6.99343L20.4296 6.37823C19.907 6.7184 19.3039 6.92468 18.7118 6.92468V6.93191ZM4.35541 2.41281H11.1054V1.29526H4.35541V2.41281ZM0.833334 5.22531H7.58333V4.10776H0.833334V5.22531ZM4.58333 8.03781H9.08333V6.92026H4.58333V8.03781Z"
          fill="white"
        />
      </svg>
      <span> SEPA INSTANT AVAILABLE</span>
    </div>
  );
}
