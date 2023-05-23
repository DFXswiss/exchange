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
  MdEdit,
  MdHelpOutline,
  MdCheck,
  MdDeleteOutline,
  MdDelete,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdMoreVert,
  MdOpenInNew,
  MdSearch,
} from 'react-icons/md';
import { ReactElement, useContext } from 'react';

interface DfxIconProps {
  icon: IconVariant;
  color?: IconColor;
  size?: IconSize;
}

export enum IconVariant {
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_LEFT = 'ARROW_LEFT',
  BACK = 'BACK',
  BANK = 'BANK',
  CANCEL = 'CANCEL',
  CHECK = 'CHECK',
  CHEV_RIGHT = 'CHEV_RIGHT',
  CHEV_LEFT = 'CHEV_LEFT',
  CLOSE = 'CLOSE',
  COPY = 'COPY',
  DELETE_OUTLINE = 'DELETE_OUTLINE',
  DELETE = 'DELETE',
  EDIT = 'EDIT',
  EXPAND_LESS = 'EXPAND_LESS',
  EXPAND_MORE = 'EXPAND_MORE',
  FORWARD = 'FORWARD',
  HELP = 'HELP',
  INFO = 'INFO',
  INFO_OUTLINE = 'INFO_OUTLINE',
  PROCESS_DONE = 'PROCESS_DONE',
  SEPA_INSTANT = 'SEPA_INSTANT',
  SETTINGS = 'SETTINGS',
  UNFOLD_LESS = 'UNFOLD_LESS',
  UNFOLD_MORE = 'UNFOLD_MORE',
  WALLET = 'WALLET',
  CHECKBOX_EMPTY = 'CHECKBOX_EMPTY',
  CHECKBOX_CHECKED = 'CHECKBOX_CHECKED',
  SIGNATURE_POPUP = 'SIGNATURE_POPUP',
  THREE_DOTS_VERT = 'THREE_DOTS_VERT',
  OPEN_IN_NEW = 'OPEN_IN_NEW',
  METAMASK_LOGO = 'METAMASK_LOGO',
  SELL = 'SELL',
  SEARCH = 'SEARCH',
  USER_DATA = 'USER_DATA',
}

export const VARIANT_MAPS: Record<IconVariant, ReactElement<IconType>> = {
  [IconVariant.COPY]: <MdContentCopy />,
  [IconVariant.BACK]: <MdArrowBackIos />,
  [IconVariant.FORWARD]: <MdArrowForwardIos />,
  [IconVariant.UNFOLD_LESS]: <MdUnfoldLess />,
  [IconVariant.UNFOLD_MORE]: <MdUnfoldMore />,
  [IconVariant.EXPAND_LESS]: <MdExpandLess />,
  [IconVariant.EXPAND_MORE]: <MdExpandMore />,
  [IconVariant.CHECK]: <MdCheck />,
  [IconVariant.CHECKBOX_EMPTY]: <MdOutlineCheckBoxOutlineBlank />,
  [IconVariant.CHECKBOX_CHECKED]: <MdOutlineCheckBox />,
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
  [IconVariant.PROCESS_DONE]: <DfxProcessDoneIcon />,
  [IconVariant.EDIT]: <MdEdit />,
  [IconVariant.HELP]: <MdHelpOutline />,
  [IconVariant.DELETE]: <MdDelete />,
  [IconVariant.DELETE_OUTLINE]: <MdDeleteOutline />,
  [IconVariant.SIGNATURE_POPUP]: <DfxSignaturePopupIcon />,
  [IconVariant.THREE_DOTS_VERT]: <MdMoreVert />,
  [IconVariant.OPEN_IN_NEW]: <MdOpenInNew />,
  [IconVariant.METAMASK_LOGO]: <MetamaskLogo />,
  [IconVariant.SELL]: <SellToFiat />,
  [IconVariant.SEARCH]: <MdSearch />,
  [IconVariant.USER_DATA]: <DfxUserData />,
};

export enum IconSize {
  XS = 'EXTRA SMALL',
  SM = 'SMALL',
  MD = 'MEDIUM',
  LG = 'LARGE',
  XL = 'EXTRA LARGE',
}

export enum IconColor {
  RED = 'RED',
  BLUE = 'BLUE',
  LIGHT_BLUE = 'LIGHT_BLUE',
  GRAY = 'GRAY',
  DARK_GRAY = 'DARK_GRAY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

const COLOR_MAPS: Record<IconColor, string> = {
  [IconColor.RED]: '#F5516C',
  [IconColor.BLUE]: '#072440',
  [IconColor.LIGHT_BLUE]: '#5A81BB',
  [IconColor.GRAY]: '#D6DBE2',
  [IconColor.DARK_GRAY]: '#9AA5B8',
  [IconColor.WHITE]: '#ffffff',
  [IconColor.BLACK]: '#000000',
};

const SIZE_MAPS: Record<IconSize, string> = {
  [IconSize.XS]: '16px',
  [IconSize.SM]: '18px',
  [IconSize.MD]: '20px',
  [IconSize.LG]: '24px',
  [IconSize.XL]: '32px',
};

export default function DfxIcon({ icon, color = IconColor.RED, size = IconSize.MD }: DfxIconProps) {
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
    <div className="bg-primary-red text-xs text-white flex gap-1 justify-center rounded-sm w-fit pl-1 pr-2 py-0.25 font-semibold italic">
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

function DfxProcessDoneIcon() {
  const icContext = useContext(IconContext);
  let iconSize: string | undefined;
  icContext.size === '32px' ? (iconSize = '170px') : (iconSize = icContext.size);

  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_885_9990)" filter="url(#filter0_d_885_9990)">
        <path
          opacity="0.18"
          d="M25.9308 118.563C23.2492 114.352 21.02 109.851 19.2969 105.188L29.3985 101.461C30.8523 105.414 32.7369 109.215 35.0092 112.769L25.9308 118.552V118.563Z"
          fill="white"
        />
        <path
          opacity="0.14"
          d="M15.6677 90.703C15.1292 86.826 14.9139 82.8522 15.0323 78.9107C15.0646 77.866 15.1185 76.8322 15.1939 75.7983L25.9308 76.5953C25.8662 77.4676 25.8231 78.3507 25.7908 79.2337C25.6939 82.583 25.8662 85.943 26.3292 89.2276L15.6677 90.7137V90.703Z"
          fill="white"
        />
        <path
          opacity="0.09"
          d="M28.1923 64.1678L17.8646 61.1201C19.2754 56.3385 21.2139 51.7078 23.6154 47.3354L33.0492 52.5262C31.0139 56.2201 29.3877 60.1401 28.1923 64.1785V64.1678Z"
          fill="white"
        />
        <path
          opacity="0.06"
          d="M40.2862 42.1553L32.1554 35.0907C35.4185 31.3322 39.1015 27.9184 43.0862 24.9353L49.5369 33.5615C46.1662 36.0922 43.0539 38.9784 40.2862 42.1661V42.1553Z"
          fill="white"
        />
        <path
          opacity="0.04"
          d="M60.3923 27.1109L55.9123 17.3217C60.4461 15.2432 65.2061 13.6601 70.0738 12.6047L72.3569 23.1263C68.2431 24.0201 64.2154 25.3663 60.3815 27.1217L60.3923 27.1109Z"
          fill="white"
        />
        <path
          opacity="0.2"
          d="M101.143 12.8738C98.3216 12.2062 95.4354 11.7108 92.5385 11.4092C90.04 11.14 87.4877 11 84.9785 11V21.7692C87.1 21.7692 89.2754 21.8877 91.3862 22.1138C93.8308 22.3723 96.2862 22.7923 98.6662 23.3523C125.891 29.7815 145.038 54.7662 144.198 82.7662C143.218 115.408 115.865 141.178 83.2231 140.198C70.0954 139.811 57.797 135.234 47.6416 126.963C45.9939 125.617 44.3893 124.163 42.8923 122.655L35.2354 130.226C37.0016 132.014 38.897 133.726 40.8462 135.32C52.8539 145.098 67.4031 150.505 82.9108 150.968C121.497 152.12 153.815 121.675 154.968 83.0892C155.958 49.9954 133.322 20.4662 101.143 12.8738Z"
          fill="white"
        />
        <path
          d="M75.1139 111.972L48.7723 85.9108L57.1077 77.4893L75.2539 95.4524L115.886 56.5647L124.071 65.1262L75.1139 111.972Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_885_9990"
          x="0"
          y="0"
          width="170"
          height="170"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_885_9990" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_885_9990" result="shape" />
        </filter>
        <clipPath id="clip0_885_9990">
          <rect width="140" height="140" fill="white" transform="translate(15 11)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DfxSignaturePopupIcon() {
  return (
    <svg width="260" height="134" viewBox="0 0 260 134" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1831 23.7369C17.1831 10.5506 27.1218 0 39.5467 0C51.9735 0 61.9122 10.5486 61.9122 23.7369C61.9122 36.9251 50.7285 46.1559 39.5467 46.1559C27.1218 46.1559 17.1831 35.6053 17.1831 23.7369ZM52.1399 80.9951C52.1399 72.2718 56.4536 64.5253 63.0514 59.7876C56.6218 54.9616 48.5347 52.0832 39.5508 52.0832C18.1761 52.0852 0.875 68.3545 0.875 88.4488C1.89189 93.2346 4.94656 96.105 9.01813 96.105H56.9761C53.9334 91.8366 52.1419 86.6195 52.1419 80.9951H52.1399ZM78.1628 59.9901C66.6167 59.9901 57.2004 69.4255 57.2004 80.995C57.2004 92.5646 66.6167 102 78.1628 102C89.7089 102 99.1251 92.5646 99.1251 80.995C99.1251 69.4235 89.7089 59.9901 78.1628 59.9901ZM75.4524 91.4494L64.5028 80.5618L68.3102 76.7166L75.5205 83.8874L87.7251 72.1855L91.4624 76.0988L75.4524 91.4494Z"
        fill="#D6DBE2"
      />
      <rect x="109.125" width="150" height="48" rx="13.9263" fill="#D6DBE2" />
      <g filter="url(#filter0_d_1679_13861)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M206.588 105.744L200.454 111.878L197.908 114.424L178.51 95.0265L179.742 93.795L197.919 111.973L199.246 110.646L196.025 107.425L202.159 101.291L205.38 104.512L206.611 105.744H206.588ZM139.514 38.67L200.833 99.9884L194.698 106.123L133.38 44.8042L130.834 36.9528C130.668 36.4436 131.154 35.9581 131.663 36.1239L139.514 38.67Z"
          fill="#F5516C"
        />
      </g>
      <path
        d="M146.903 36.5787C146.903 36.5787 151.988 38.8133 155.176 32.1914C159.491 23.2221 166.236 9.13776 166.708 26.6971C167.005 37.6755 169.824 38.4443 174.98 31.9454C183.365 21.3668 182.934 37.6755 188.818 37.9933C194.169 38.2803 197.398 35.0821 197.398 35.0821"
        stroke="#F5516C"
        strokeWidth="3.09474"
      />
      <defs>
        <filter
          id="filter0_d_1679_13861"
          x="115.801"
          y="25.0908"
          width="105.811"
          height="108.333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1679_13861" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1679_13861" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

function SellToFiat() {
  const icContext = useContext(IconContext);
  return (
    <svg
      width={icContext.size}
      height={icContext.size}
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 2.79545V14.9091H2.79545V13.0455H18.6364V2.79545H20.5ZM16.7727 11.1818H0V0H16.7727V11.1818ZM11.1818 5.59091C11.1818 4.04409 9.93318 2.79545 8.38636 2.79545C6.83955 2.79545 5.59091 4.04409 5.59091 5.59091C5.59091 7.13773 6.83955 8.38636 8.38636 8.38636C9.93318 8.38636 11.1818 7.13773 11.1818 5.59091Z"
        fill={icContext.color}
      />
    </svg>
  );
}

function MetamaskLogo() {
  const icContext = useContext(IconContext);

  return (
    <svg
      width={icContext.size}
      height={icContext.size}
      viewBox="0 0 256 240"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <polygon
          fill="#E17726"
          points="250.066018 -8.89651791e-15 140.218553 81.2793133 160.645643 33.3787726"
        ></polygon>
        <polygon fill="#E27625" points="6.19062016 0.0955267053 95.3715526 33.38465 114.767923 81.9132784"></polygon>
        <polygon
          fill="#E27625"
          points="205.859986 172.858026 254.410647 173.782023 237.442988 231.424252 178.200429 215.112736"
        ></polygon>
        <polygon
          fill="#E27625"
          points="50.1391619 172.857971 77.6964289 215.11288 18.5530579 231.425317 1.68846828 173.782036"
        ></polygon>
        <polygon
          fill="#E27625"
          points="112.130724 69.5516472 114.115388 133.635085 54.744344 130.933905 71.6319541 105.456448 71.8456974 105.210668"
        ></polygon>
        <polygon
          fill="#E27625"
          points="143.254237 68.8369186 184.153999 105.213392 184.365514 105.45719 201.253537 130.934656 141.89632 133.635226"
        ></polygon>
        <polygon fill="#E27625" points="79.4347776 173.043957 111.853145 198.302774 74.1951401 216.484384"></polygon>
        <polygon fill="#E27625" points="176.57078 173.040009 181.701672 216.484523 144.149363 198.301203"></polygon>
        <polygon
          fill="#D5BFB2"
          points="144.977922 195.921642 183.084879 214.373531 147.637779 231.220354 148.005818 220.085704"
        ></polygon>
        <polygon
          fill="#D5BFB2"
          points="111.01133 195.929982 108.102093 219.90359 108.340838 231.207237 72.8105145 214.373665"
        ></polygon>
        <polygon fill="#233447" points="100.007166 141.998856 109.965172 162.926822 76.0615945 152.995277"></polygon>
        <polygon fill="#233447" points="155.991579 142.000941 180.049716 152.994594 146.03608 162.923638"></polygon>
        <polygon fill="#CC6228" points="82.0263962 172.830401 76.5459821 217.870023 47.1731221 173.814952"></polygon>
        <polygon fill="#CC6228" points="173.976111 172.8305 208.830462 173.815081 179.347016 217.871514"></polygon>
        <polygon
          fill="#CC6228"
          points="202.112267 128.387342 176.746779 154.238424 157.190334 145.301352 147.82685 164.985265 141.688645 131.136429"
        ></polygon>
        <polygon
          fill="#CC6228"
          points="53.8753865 128.386879 114.309585 131.136429 108.17138 164.985265 98.8061425 145.303856 79.3525107 154.238823"
        ></polygon>
        <polygon fill="#E27525" points="52.165606 123.082486 80.8639084 152.203386 81.8584812 180.952278"></polygon>
        <polygon fill="#E27525" points="203.863346 123.029784 174.117491 181.003017 175.237428 152.202737"></polygon>
        <polygon
          fill="#E27525"
          points="112.906762 124.855691 114.061658 132.125682 116.915771 150.236518 115.080954 205.861884 106.405804 161.177486 106.402953 160.71542"
        ></polygon>
        <polygon
          fill="#E27525"
          points="143.077997 124.755417 149.599051 160.715451 149.596194 161.177486 140.899333 205.973714 140.55515 194.76913 139.198167 149.907127"
        ></polygon>
        <polygon
          fill="#F5841F"
          points="177.788479 151.045975 176.81718 176.023897 146.543342 199.61119 140.4233 195.28712 147.283427 159.951634"
        ></polygon>
        <polygon
          fill="#F5841F"
          points="78.3167053 151.046455 108.716464 159.952427 115.576437 195.28712 109.456385 199.611197 79.1807344 176.021881"
        ></polygon>
        <polygon
          fill="#C0AC9D"
          points="67.0180978 208.857597 105.750143 227.209502 105.586194 219.372868 108.826835 216.528328 147.160694 216.528328 150.518758 219.363342 150.271375 227.194477 188.757733 208.903978 170.030292 224.379509 147.384611 239.933315 108.516484 239.933315 85.8855503 224.315941"
        ></polygon>
        <polygon
          fill="#161616"
          points="142.203502 193.479367 147.679764 197.347701 150.888964 222.952494 146.244706 219.030957 109.769299 219.030957 105.213447 223.031398 108.317268 197.349663 113.795429 193.479367"
        ></polygon>
        <polygon
          fill="#763E1A"
          points="242.814251 2.24978946 256 41.8072765 247.765337 81.803692 253.629038 86.3274221 245.694407 92.3812097 251.657525 96.9865879 243.761206 104.178247 248.609106 107.688972 235.743366 122.714803 182.973386 107.350364 182.516079 107.105244 144.488982 75.0267414"
        ></polygon>
        <polygon
          fill="#763E1A"
          points="13.1860054 2.24978557 111.51151 75.0267402 73.4844118 107.105244 73.0271023 107.350365 20.2567388 122.714804 7.39121291 107.688927 12.2352706 104.180751 4.34251001 96.9865923 10.2945566 92.3862179 2.24133703 86.315099 8.32629691 81.7886671 -8.89651791e-15 41.8087534"
        ></polygon>
        <polygon
          fill="#F5841F"
          points="180.391638 103.990363 236.304873 120.269177 254.470245 176.254719 206.546445 176.25462 173.525532 176.671282 197.539657 129.863284"
        ></polygon>
        <polygon
          fill="#F5841F"
          points="75.6080363 103.990376 58.4568191 129.863284 82.4741865 176.671282 49.4693913 176.254719 1.63053271 176.254719 19.6938968 120.269548"
        ></polygon>
        <polygon
          fill="#F5841F"
          points="163.383898 33.1117385 147.744691 75.3505047 144.425852 132.411352 143.155934 150.295986 143.055195 195.983514 112.943788 195.983514 112.846176 150.381702 111.572114 132.395585 108.251786 75.3505047 92.6150854 33.1117385"
        ></polygon>
      </g>
    </svg>
  );
}

function DfxUserData() {
  const icContext = useContext(IconContext);
  return (
    <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.1002 47.0651H0.630615V42.8652C0.630615 40.1202 0.760612 38.5503 3.82554 36.1953C6.89047 33.8404 14.1253 29.5705 15.3553 28.9305C15.5153 28.8755 15.5703 28.7155 15.5703 28.5555V25.2506C14.7153 23.8106 14.2903 22.2106 14.0253 20.7707C13.5453 20.7157 12.8503 20.0257 12.1604 17.5157C11.2004 14.1008 12.2153 13.5708 13.1203 13.6758C13.1203 13.6758 10.0404 6.301 14.9753 3.14108C17.0502 1.80611 19.8502 0.311141 23.9401 0.0211478C27.32 -0.218847 29.5949 1.62111 30.0749 3.64606C30.0749 3.64606 35.8898 3.22107 33.3799 13.5658C33.3799 13.5658 33.3249 13.7808 33.2749 14.1508H33.4349C34.0748 14.3658 34.5548 15.2708 33.8099 17.9357C32.9049 21.2407 32.0499 21.4007 31.5149 21.0807C31.2999 22.2006 30.9799 23.4806 30.3949 24.6556V28.4405C30.3949 28.6005 30.4999 28.7605 30.6099 28.8155C31.1449 29.0805 32.5299 29.7755 34.3448 30.8404C31.7849 33.0804 30.1849 36.3353 30.1849 39.9602C30.1849 42.5752 31.0399 45.0251 32.4249 47.0001H25.97H20.1052V47.0551L20.1002 47.0651Z"
        fill={icContext.color}
        fillOpacity="0.1"
      />
      <path
        d="M42.3947 30.0504C36.8998 30.0504 32.4199 34.5303 32.4199 40.0252C32.4199 45.5201 36.8998 50 42.3947 50C47.8896 50 52.3695 45.5201 52.3695 40.0252C52.3695 34.5303 47.8896 30.0504 42.3947 30.0504Z"
        fill={icContext.color}
        fillOpacity="0.1"
      />
      <path
        d="M48.1445 38.9303H43.4896V34.2754H41.2997V38.9303H36.6448V41.1202H41.2997V45.7751H43.4896V41.1202H48.1445V38.9303Z"
        fill={icContext.color}
      />
    </svg>
  );
}
