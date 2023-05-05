import { createContext, ReactElement, useContext } from 'react';

interface DfxAssetIconProps {
  size?: AssetIconSize;
  asset: AssetIconVariant;
  disabled?: boolean;
}

export enum AssetIconVariant {
  USDT = 'USDT',
  BNB = 'BNB',
  DFI = 'DFI',
  USDC = 'USDC',
  BUSD = 'BUSD',
  ETH = 'ETH',
  DAI = 'DAI',
  BTC = 'BTC',
  WBTC = 'WBTC',
  BTCB = 'BTCB',
  MATIC = 'MATIC',
  GMX = 'GMX',
  CHZ = 'CHZ',
  RPL = 'RPL',
  ARB = 'ARB',
  SUSHI = 'SUSHI',
  INCH = '1INCH',
  TUSD = 'TUSD',
  SNX = 'SNX',
  MKR = 'MKR',
  ENJ = 'ENJ',
  COMP = 'COMP',
  BAT = 'BAT',
  CRV = 'CRV',
  AXS = 'AXS',
  GRT = 'GRT',
  AAVE = 'AAVE',
  MANA = 'MANA',
  SAND = 'SAND',
  APE = 'APE',
  LINK = 'LINK',
  UNI = 'UNI',
  QNT = 'QNT',
  XCHF = 'XCHF',
}

export enum AssetIconSize {
  SM = 'SMALL',
  MD = 'MEDIUM',
  LG = 'LARGE',
}

export const SizeContext = createContext(AssetIconSize.MD);

const SIZE_MAPS: Record<AssetIconSize, string> = {
  [AssetIconSize.SM]: '16px',
  [AssetIconSize.MD]: '24px',
  [AssetIconSize.LG]: '32px',
};

const VARIANT_MAPS: Record<AssetIconVariant, (props: BaseAssetIconProps) => ReactElement> = {
  [AssetIconVariant.USDT]: ({ forceColor }) => <DfxAssetIconUSDT forceColor={forceColor} />,
  [AssetIconVariant.BNB]: ({ forceColor }) => <DfxAssetIconBNB forceColor={forceColor} />,
  [AssetIconVariant.DFI]: ({ forceColor }) => <DfxAssetIconDFI forceColor={forceColor} />,
  [AssetIconVariant.USDC]: ({ forceColor }) => <DfxAssetIconUSDC forceColor={forceColor} />,
  [AssetIconVariant.BUSD]: ({ forceColor }) => <DfxAssetIconBUSD forceColor={forceColor} />,
  [AssetIconVariant.ETH]: ({ forceColor }) => <DfxAssetIconETH forceColor={forceColor} />,
  [AssetIconVariant.DAI]: ({ forceColor }) => <DfxAssetIconDAI forceColor={forceColor} />,
  [AssetIconVariant.BTC]: ({ forceColor }) => <DfxAssetIconBTC forceColor={forceColor} />,
  [AssetIconVariant.WBTC]: ({ forceColor }) => <DfxAssetIconWBTC forceColor={forceColor} />,
  [AssetIconVariant.BTCB]: ({ forceColor }) => <DfxAssetIconBTCB forceColor={forceColor} />,
  [AssetIconVariant.MATIC]: ({ forceColor }) => <DfxAssetIconMATIC forceColor={forceColor} />,
  [AssetIconVariant.GMX]: ({ forceColor }) => <DfxAssetIconGMX forceColor={forceColor} />,
  [AssetIconVariant.CHZ]: ({ forceColor }) => <DfxAssetIconCHZ forceColor={forceColor} />,
  [AssetIconVariant.RPL]: ({ forceColor }) => <DfxAssetIconRPL forceColor={forceColor} />,
  [AssetIconVariant.ARB]: ({ forceColor }) => <DfxAssetIconARB forceColor={forceColor} />,
  [AssetIconVariant.SUSHI]: ({ forceColor }) => <DfxAssetIconSUSHI forceColor={forceColor} />,
  [AssetIconVariant.INCH]: ({ forceColor }) => <DfxAssetIconINCH forceColor={forceColor} />,
  [AssetIconVariant.TUSD]: ({ forceColor }) => <DfxAssetIconTUSD forceColor={forceColor} />,
  [AssetIconVariant.SNX]: ({ forceColor }) => <DfxAssetIconSNX forceColor={forceColor} />,
  [AssetIconVariant.MKR]: ({ forceColor }) => <DfxAssetIconMKR forceColor={forceColor} />,
  [AssetIconVariant.ENJ]: ({ forceColor }) => <DfxAssetIconENJ forceColor={forceColor} />,
  [AssetIconVariant.COMP]: ({ forceColor }) => <DfxAssetIconCOMP forceColor={forceColor} />,
  [AssetIconVariant.BAT]: ({ forceColor }) => <DfxAssetIconBAT forceColor={forceColor} />,
  [AssetIconVariant.CRV]: ({ forceColor }) => <DfxAssetIconCRV forceColor={forceColor} />,
  [AssetIconVariant.AXS]: ({ forceColor }) => <DfxAssetIconAXS forceColor={forceColor} />,
  [AssetIconVariant.GRT]: ({ forceColor }) => <DfxAssetIconGRT forceColor={forceColor} />,
  [AssetIconVariant.AAVE]: ({ forceColor }) => <DfxAssetIconAAVE forceColor={forceColor} />,
  [AssetIconVariant.MANA]: ({ forceColor }) => <DfxAssetIconMANA forceColor={forceColor} />,
  [AssetIconVariant.SAND]: ({ forceColor }) => <DfxAssetIconSAND forceColor={forceColor} />,
  [AssetIconVariant.APE]: ({ forceColor }) => <DfxAssetIconAPE forceColor={forceColor} />,
  [AssetIconVariant.LINK]: ({ forceColor }) => <DfxAssetIconLINK forceColor={forceColor} />,
  [AssetIconVariant.UNI]: ({ forceColor }) => <DfxAssetIconUNI forceColor={forceColor} />,
  [AssetIconVariant.QNT]: ({ forceColor }) => <DfxAssetIconQNT forceColor={forceColor} />,
  [AssetIconVariant.XCHF]: ({ forceColor }) => <DfxAssetIconXCHF forceColor={forceColor} />,
};

export default function DfxAssetIcon({ size = AssetIconSize.MD, asset, disabled }: DfxAssetIconProps) {
  const icon = VARIANT_MAPS[asset];
  return (
    <SizeContext.Provider value={size}>
      {icon ? icon({ forceColor: disabled ? '#B8C4D8' : undefined }) : DfxAssetIconPlaceholder()}
    </SizeContext.Provider>
  );
}

interface BaseAssetIconProps {
  forceColor?: string;
}

function DfxAssetIconUSDT({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={forceColor ?? '#50AF95'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9856 17.6759C17.8747 17.6843 17.3017 17.7185 16.0236 17.7185C15.007 17.7185 14.2852 17.688 14.032 17.6759C10.1033 17.5029 7.17092 16.8182 7.17092 15.9984C7.17092 15.1785 10.1033 14.4947 14.032 14.3189V16.994C14.2889 17.0125 15.0245 17.056 16.0411 17.056C17.261 17.056 17.8719 17.0051 17.9819 16.9949V14.3208C21.9022 14.4957 24.8282 15.1804 24.8282 15.9984C24.8282 16.8163 21.9032 17.5011 17.9819 17.675L17.9856 17.6759ZM17.9856 14.0441V11.6503H23.4567V8H8.56088V11.6503H14.0311V14.0432C9.58486 14.2477 6.2412 15.1295 6.2412 16.1862C6.2412 17.2429 9.58486 18.1238 14.0311 18.3292V26H17.9847V18.3264C22.4207 18.1219 25.7588 17.241 25.7588 16.1853C25.7588 15.1295 22.4235 14.2486 17.9847 14.0432L17.9856 14.0441Z"
        fill="white"
      />
    </svg>
  );
}

function DfxAssetIconUSDC({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_102_23)">
        <path
          d="M16 32C24.8667 32 32 24.8667 32 16C32 7.13328 24.8667 0 16 0C7.13328 0 0 7.13328 0 16C0 24.8667 7.13328 32 16 32Z"
          fill={forceColor ?? '#2775CA'}
        />
        <path
          d="M20.4 18.5333C20.4 16.2 19 15.4 16.2 15.0667C14.2 14.8 13.8 14.2667 13.8 13.3333C13.8 12.3998 14.4667 11.8 15.8 11.8C17 11.8 17.6667 12.2 18 13.2C18.0667 13.4 18.2667 13.5333 18.4667 13.5333H19.5333C19.8 13.5333 20 13.3333 20 13.0667V13C19.7333 11.5333 18.5333 10.4 17 10.2667V8.66672C17 8.4 16.8 8.2 16.4667 8.13328H15.4667C15.2 8.13328 15 8.33328 14.9333 8.66672V10.2C12.9333 10.4667 11.6667 11.8 11.6667 13.4667C11.6667 15.6667 13 16.5333 15.8 16.8667C17.6667 17.2 18.2667 17.6 18.2667 18.6667C18.2667 19.7334 17.3333 20.4667 16.0667 20.4667C14.3333 20.4667 13.7333 19.7333 13.5333 18.7333C13.4667 18.4667 13.2667 18.3333 13.0667 18.3333H11.9333C11.6667 18.3333 11.4667 18.5333 11.4667 18.8V18.8667C11.7333 20.5333 12.8 21.7333 15 22.0667V23.6667C15 23.9333 15.2 24.1333 15.5333 24.2H16.5333C16.8 24.2 17 24 17.0667 23.6667V22.0667C19.0667 21.7333 20.4 20.3333 20.4 18.5333Z"
          fill="white"
        />
        <path
          d="M12.6 25.5333C7.4 23.6667 4.73328 17.8667 6.66672 12.7333C7.66672 9.93328 9.86672 7.8 12.6 6.8C12.8667 6.66672 13 6.46672 13 6.13328V5.2C13 4.93328 12.8667 4.73328 12.6 4.66672C12.5333 4.66672 12.4 4.66672 12.3333 4.73328C6 6.73328 2.53328 13.4667 4.53328 19.8C5.73328 23.5333 8.6 26.4 12.3333 27.6C12.6 27.7333 12.8667 27.6 12.9333 27.3333C13 27.2667 13 27.2 13 27.0667V26.1333C13 25.9333 12.8 25.6667 12.6 25.5333ZM19.6667 4.73328C19.4 4.6 19.1333 4.73328 19.0667 5C19 5.06672 19 5.13328 19 5.26672V6.2C19 6.46672 19.2 6.73328 19.4 6.86672C24.6 8.73328 27.2667 14.5333 25.3333 19.6667C24.3333 22.4667 22.1333 24.6 19.4 25.6C19.1333 25.7333 19 25.9333 19 26.2667V27.2C19 27.4667 19.1333 27.6667 19.4 27.7333C19.4667 27.7333 19.6 27.7333 19.6667 27.6667C26 25.6667 29.4667 18.9333 27.4667 12.6C26.2667 8.8 23.3333 5.93328 19.6667 4.73328Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_102_23">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DfxAssetIconETH({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z"
        fill="white"
        stroke={forceColor ?? 'url(#paint0_linear_1817_5282)'}
        strokeWidth="1.5"
      />
      <path
        d="M11.9989 4.125L11.8933 4.48389V14.8981L11.9989 15.0035L16.8436 12.146L11.9989 4.125Z"
        fill={forceColor ?? '#424242'}
      />
      <path d="M11.9989 4.125L7.1543 12.146L11.9989 15.0035V4.125Z" fill={forceColor ?? '#424242'} />
      <path
        d="M11.9989 15.9185L11.9395 15.991V19.7008L11.9989 19.8746L16.8466 13.0625L11.9989 15.9185Z"
        fill={forceColor ?? '#FF0079'}
      />
      <path d="M11.9989 19.8746V15.9185L7.1543 13.0625L11.9989 19.8746Z" fill={forceColor ?? '#FF0079'} />
      <defs>
        <linearGradient id="paint0_linear_1817_5282" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#444243" />
          <stop offset="1" stopColor="#FD0078" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DfxAssetIconDFI({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_297_30)">
        <path
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill={forceColor ?? '#FF00AF'}
        />
        <path
          d="M18.217 23.454V8.546C21.427 9.504 23.772 12.483 23.772 16C23.772 19.517 21.426 22.496 18.217 23.454ZM15.994 6V14.428L14.725 13.158L14.563 9.991L15.887 6.006C15.0581 6.01602 14.2337 6.12957 13.433 6.344L12.793 8.27L10.977 7.36C10.2597 7.77551 9.59661 8.27834 9.003 8.857L12.366 10.542L12.464 12.47L10.537 12.371L8.85 9.01C8.27145 9.60333 7.76862 10.266 7.353 10.983L8.264 12.799L6.337 13.439C6.12326 14.2395 6.01005 15.0635 6 15.892L9.986 14.568L13.154 14.73L14.424 16L13.154 17.27L9.986 17.432L6 16.108C6.009 16.957 6.13 17.777 6.338 18.562L8.265 19.202L7.354 21.018C7.772 21.737 8.274 22.401 8.851 22.991L10.537 19.629L12.464 19.53L12.366 21.458L9.003 23.143C9.59662 23.7219 10.2597 24.2251 10.977 24.641L12.792 23.73L13.432 25.656C14.233 25.8706 15.0578 25.9842 15.887 25.994L14.563 22.009L14.725 18.841L15.995 17.571V26C21.517 26 25.995 21.523 25.995 16C25.995 10.477 21.517 6 15.995 6"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_297_30">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DfxAssetIconDAI({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_65)">
        <path
          d="M16 0C24.8374 0 32 7.16407 32 16C32 24.8374 24.8374 32 16 32C7.16407 32 0 24.8366 0 16C0 7.16407 7.16407 0 16 0Z"
          fill={forceColor ?? '#F5AC37'}
        />
        <path
          d="M16.5897 17.1297H22.6694C22.799 17.1297 22.8602 17.1297 22.8696 16.9598C22.9193 16.3413 22.9193 15.7192 22.8696 15.1C22.8696 14.9798 22.8098 14.9301 22.6795 14.9301H10.5798C10.43 14.9301 10.3897 14.9797 10.3897 15.1202V16.9C10.3897 17.1297 10.3897 17.1297 10.6295 17.1297H16.5897ZM22.1906 12.85C22.2079 12.8046 22.2079 12.7549 22.1906 12.7103C22.0891 12.4892 21.9689 12.2783 21.8292 12.0803C21.6189 11.7419 21.3713 11.4301 21.089 11.15C20.9558 10.9808 20.8017 10.8289 20.6289 10.7C19.7635 9.96346 18.7346 9.44217 17.6287 9.18009C17.0707 9.05481 16.5004 8.99505 15.9287 9.00009H10.5589C10.4091 9.00009 10.389 9.05985 10.389 9.19017V12.7398C10.389 12.8896 10.389 12.9299 10.5791 12.9299H22.1186C22.1186 12.9299 22.2187 12.9097 22.2389 12.85H22.1899H22.1906ZM22.1906 19.2098C22.0207 19.1911 21.8493 19.1911 21.6794 19.2098H10.5899C10.4401 19.2098 10.3897 19.2098 10.3897 19.41V22.8804C10.3897 23.0402 10.3897 23.0806 10.5899 23.0806H15.7098C15.9546 23.0993 16.1994 23.082 16.4392 23.0309C17.1823 22.9776 17.9131 22.8163 18.61 22.5506C18.8635 22.4628 19.1083 22.3483 19.3394 22.2108H19.4092C20.6095 21.5865 21.5844 20.6059 22.1993 19.402C22.1993 19.402 22.2691 19.2508 22.1906 19.2112V19.2098ZM8.38016 24.8798V24.8201V22.4901V21.7003V19.3502C8.38016 19.2199 8.38016 19.2004 8.22032 19.2004H6.05022C5.92998 19.2004 5.8803 19.2004 5.8803 19.0406V17.1405H8.20016C8.32976 17.1405 8.38016 17.1405 8.38016 16.9706V15.0906C8.38016 14.9704 8.38016 14.9409 8.22032 14.9409H6.05022C5.92998 14.9409 5.8803 14.9409 5.8803 14.781V13.0213C5.8803 12.9112 5.8803 12.8816 6.04014 12.8816H8.19008C8.33984 12.8816 8.38016 12.8816 8.38016 12.6916V7.30159C8.38016 7.14175 8.38016 7.10143 8.58033 7.10143H16.0799C16.6242 7.12303 17.165 7.18279 17.6999 7.28143C18.8023 7.48519 19.8614 7.87904 20.8298 8.44136C21.4721 8.81937 22.0632 9.27585 22.5895 9.80146C22.9855 10.2126 23.3426 10.6575 23.6594 11.1313C23.9741 11.6116 24.2354 12.1249 24.4406 12.6613C24.4658 12.801 24.5998 12.8953 24.7394 12.8716H26.5294C26.7591 12.8716 26.7591 12.8716 26.7691 13.0919V14.7321C26.7691 14.8919 26.7094 14.9322 26.5488 14.9322H25.1686C25.0289 14.9322 24.9886 14.9322 24.9987 15.1122C25.0534 15.7214 25.0534 16.3326 24.9987 16.9418C24.9987 17.1117 24.9986 17.1319 25.1895 17.1319H26.7684C26.8383 17.2219 26.7684 17.3119 26.7684 17.4026C26.7785 17.5185 26.7785 17.6359 26.7684 17.7518V18.9621C26.7684 19.132 26.7187 19.1824 26.5683 19.1824H24.6782C24.5465 19.1572 24.4183 19.2415 24.3881 19.3725C23.9381 20.5425 23.2181 21.5916 22.2878 22.4325C21.948 22.7385 21.5909 23.0265 21.2179 23.2922C20.8176 23.5226 20.428 23.7624 20.0176 23.9525C19.2624 24.2923 18.4703 24.5429 17.6575 24.702C16.8856 24.8402 16.103 24.9029 15.3174 24.8921H8.37728V24.882L8.38016 24.8798Z"
          fill="#FEFEFD"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_65">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DfxAssetIconBUSD({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0C24.8372 0 32 7.16282 32 16C32 24.8372 24.8372 32 16 32C7.16282 32 0 24.8372 0 16C0 7.16282 7.16282 0 16 0Z"
        fill={forceColor ?? '#F0B90B'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6845 7.78274L15.9673 5L9.125 11.9077L11.8423 14.625L18.6845 7.78274ZM22.8095 11.9077L20.0923 9.125L9.125 20.1577L11.8423 22.875L22.8095 11.9077ZM7.71726 13.25L10.4345 16.0327L7.71726 18.75L5 16.0327L7.71726 13.25ZM26.9345 16.0327L24.2173 13.25L13.25 24.2827L15.9673 27L26.9345 16.0327Z"
        fill="white"
      />
    </svg>
  );
}

function DfxAssetIconBTC({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={forceColor ?? '#F99602'} />
      <path
        d="M19.5141 9.30328L20.3141 6.30338L18.5141 5.80339L17.8142 8.7033C17.3142 8.6033 16.8142 8.5033 16.3142 8.40331L17.0142 5.40341L15.1143 5.00342L14.4143 8.00332C14.0143 7.90332 13.6143 7.80333 13.2143 7.70333L10.7144 7.10335L10.2144 9.10328C10.2144 9.10328 11.6144 9.40327 11.5144 9.40327C12.2144 9.60327 12.4143 10.1033 12.4143 10.5032L10.3144 18.703C10.2144 18.903 10.0144 19.303 9.41444 19.103L8.11449 18.803L7.21452 20.9029L9.61444 21.5029L10.9144 21.8029L10.1144 24.8028L11.9144 25.3028L12.7143 22.3029C13.2143 22.4029 13.7143 22.6028 14.2143 22.7028L13.5143 25.7027L15.3143 26.2027L16.1142 23.2028C19.2141 23.8028 21.614 23.6028 22.614 20.7029C23.414 18.403 22.614 17.103 20.9141 16.303C22.114 16.0031 23.014 15.2031 23.214 13.6031C23.514 11.3032 21.914 10.1033 19.5141 9.30328ZM19.0141 19.4029C18.4142 21.7029 14.6143 20.4029 13.4143 20.1029L14.4143 16.1031C15.6142 16.403 19.6141 17.003 19.0141 19.4029ZM19.6141 13.5031C19.1141 15.6031 15.9142 14.5031 14.9143 14.3031L15.8142 10.6032C16.8142 10.8032 20.1141 11.3032 19.6141 13.5031Z"
        fill="white"
      />
    </svg>
  );
}

function DfxAssetIconBNB({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0C24.8372 0 32 7.16282 32 16C32 24.8372 24.8372 32 16 32C7.16282 32 0 24.8372 0 16C0 7.16282 7.16282 0 16 0Z"
        fill={forceColor ?? '#F0B90B'}
      />
      <path
        d="M8.79359 16L8.80513 20.2308L12.4 22.3461V24.8231L6.70128 21.4808V14.7628L8.79359 16ZM8.79359 11.7692V14.2346L6.7 12.9961V10.5308L8.79359 9.2923L10.8974 10.5308L8.79359 11.7692ZM13.9013 10.5308L15.9949 9.2923L18.0987 10.5308L15.9949 11.7692L13.9013 10.5308Z"
        fill="white"
      />
      <path
        d="M10.3064 19.3538V16.8769L12.4 18.1154V20.5808L10.3064 19.3538ZM13.9013 23.2333L15.9949 24.4718L18.0987 23.2333V25.6987L15.9949 26.9372L13.9013 25.6987V23.2333ZM21.1013 10.5308L23.1949 9.2923L25.2987 10.5308V12.9961L23.1949 14.2346V11.7692L21.1013 10.5308ZM23.1949 20.2308L23.2064 16L25.3 14.7615V21.4795L19.6013 24.8218V22.3449L23.1949 20.2308Z"
        fill="white"
      />
      <path d="M21.6936 19.3538L19.6 20.5808V18.1154L21.6936 16.8769V19.3538Z" fill="white" />
      <path
        d="M21.6936 12.6461L21.7051 15.1231L18.1 17.2384V21.4795L16.0064 22.7064L13.9128 21.4795V17.2384L10.3077 15.1231V12.6461L12.4103 11.4077L15.9936 13.5333L19.5987 11.4077L21.7026 12.6461H21.6936ZM10.3064 8.41665L15.9949 5.06281L21.6936 8.41665L19.6 9.65511L15.9949 7.52947L12.4 9.65511L10.3064 8.41665Z"
        fill="white"
      />
    </svg>
  );
}

function DfxAssetIconMATIC({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={forceColor ?? '#8247E5'} />
      <path
        d="M15.9463 9.37611C15.6659 9.21588 15.3054 9.21588 14.9849 9.37611L12.7416 10.6981L11.2193 11.5393L9.01604 12.8613C8.73563 13.0215 8.3751 13.0215 8.05462 12.8613L6.33207 11.8197C6.05165 11.6595 5.85136 11.339 5.85136 10.9785V8.97552C5.85136 8.65504 6.01159 8.33457 6.33207 8.13427L8.05462 7.13279C8.33504 6.97255 8.69557 6.97255 9.01604 7.13279L10.7386 8.17433C11.019 8.33457 11.2193 8.65504 11.2193 9.01558V10.3375L12.7416 9.45623V8.09421C12.7416 7.77374 12.5813 7.45326 12.2609 7.25297L9.0561 5.37018C8.77569 5.20994 8.41515 5.20994 8.09468 5.37018L4.80981 7.29303C4.48934 7.45326 4.3291 7.77374 4.3291 8.09421V11.8598C4.3291 12.1803 4.48934 12.5007 4.80981 12.701L8.05462 14.5838C8.33504 14.7441 8.69557 14.7441 9.01604 14.5838L11.2193 13.3019L12.7416 12.4206L14.9448 11.1387C15.2252 10.9785 15.5858 10.9785 15.9063 11.1387L17.6288 12.1402C17.9092 12.3004 18.1095 12.6209 18.1095 12.9815V14.9844C18.1095 15.3049 17.9493 15.6254 17.6288 15.8257L15.9463 16.8272C15.6659 16.9874 15.3054 16.9874 14.9849 16.8272L13.2623 15.8257C12.9819 15.6654 12.7816 15.345 12.7816 14.9844V13.7025L11.2594 14.5838V15.9058C11.2594 16.2263 11.4196 16.5467 11.7401 16.747L14.9849 18.6298C15.2653 18.7901 15.6258 18.7901 15.9463 18.6298L19.1911 16.747C19.4715 16.5868 19.6718 16.2663 19.6718 15.9058V12.1001C19.6718 11.7797 19.5116 11.4592 19.1911 11.2589L15.9463 9.37611Z"
        fill="white"
      />
    </svg>
  );
}

function DfxAssetIconBTCB({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1817_1412)">
        <circle cx="12" cy="12" r="12" fill={forceColor ?? '#333333'} />
        <g clipPath="url(#clip1_1817_1412)">
          <path
            d="M7.9218 10.3242L12 6.246L16.0803 10.3263L18.4533 7.9533L12 1.5L5.5488 7.9512L7.9218 10.3242ZM1.5 12L3.873 9.627L6.246 12L3.873 14.373L1.5 12ZM7.9218 13.6758L12 17.754L16.0803 13.6737L18.4543 16.0456H18.4533L12 22.5L5.5488 16.0488L5.54565 16.0456L7.9218 13.6758ZM17.754 12.001L20.127 9.62805L22.5 12.001L20.127 14.374L17.754 12.001Z"
            fill={forceColor ? '#ffffff' : '#E7BB41'}
          />
          <path
            d="M14.4063 11.9985L11.9986 9.59082L10.2189 11.3706L10.0141 11.5753L9.59202 11.9974L9.58887 12.0006L9.59202 12.0037L11.9976 14.4093L14.4052 12.0016H14.4063L14.4042 11.9995"
            fill={forceColor ? '#ffffff' : '#E7BB41'}
          />
        </g>
        <mask
          id="mask0_1817_1412"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <circle cx="12" cy="12" r="12" fill={forceColor ?? '#333333'} />
        </mask>
        <g mask="url(#mask0_1817_1412)">
          <ellipse cx="17.25" cy="19.3496" rx="4.5" ry="4.5" fill={forceColor ? '#cccccc' : '#F99602'} />
          <path
            d="M18.2386 17.4662L18.4636 16.6224L17.9573 16.4818L17.7604 17.2974C17.6198 17.2693 17.4792 17.2412 17.3386 17.2131L17.5355 16.3693L17.0011 16.2568L16.8042 17.1006C16.6917 17.0724 16.5792 17.0443 16.4667 17.0162L15.7636 16.8474L15.623 17.4099C15.623 17.4099 16.0168 17.4943 15.9886 17.4943C16.1855 17.5505 16.2417 17.6912 16.2417 17.8037L15.6511 20.1098C15.623 20.1661 15.5668 20.2786 15.398 20.2223L15.0324 20.138L14.7793 20.7286L15.4543 20.8973L15.8199 20.9817L15.5949 21.8254L16.1011 21.966L16.3261 21.1223C16.4667 21.1504 16.6074 21.2067 16.748 21.2348L16.5511 22.0785L17.0573 22.2191L17.2823 21.3754C18.1542 21.5442 18.8292 21.4879 19.1104 20.6723C19.3354 20.0255 19.1104 19.6598 18.6323 19.4349C18.9698 19.3505 19.2229 19.1255 19.2792 18.6755C19.3635 18.0287 18.9135 17.6912 18.2386 17.4662ZM18.0979 20.3067C17.9292 20.9536 16.8605 20.5879 16.523 20.5036L16.8042 19.3786C17.1417 19.463 18.2667 19.6317 18.0979 20.3067ZM18.2667 18.6474C18.1261 19.238 17.2261 18.9286 16.9449 18.8724L17.198 17.8318C17.4792 17.888 18.4073 18.0287 18.2667 18.6474Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1817_1412">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_1817_1412">
          <rect width="21" height="21" fill="white" transform="translate(1.5 1.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DfxAssetIconWBTC({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1759_11423)">
        <circle cx="12" cy="12" r="12" fill="white" />
        <path
          d="M19.5692 5.03784L18.9092 5.69784C22.1684 9.26184 22.1684 14.7242 18.9092 18.2882L19.5692 18.9482C23.1956 15.0146 23.1956 8.95704 19.5692 5.02344V5.03784Z"
          fill={forceColor ?? '#5A5564'}
        />
        <path
          d="M5.71249 5.09269C9.27649 1.83349 14.7389 1.83349 18.3029 5.09269L18.9629 4.43269C15.0293 0.806291 8.97169 0.806291 5.03809 4.43269L5.71249 5.09269Z"
          fill={forceColor ?? '#5A5564'}
        />
        <path
          d="M5.09269 18.293C1.83829 14.729 1.83829 9.2714 5.09269 5.7098L4.43269 5.0498C0.806291 8.9834 0.806291 15.041 4.43269 18.9746L5.09269 18.293Z"
          fill={forceColor ?? '#5A5564'}
        />
        <path
          d="M18.2924 18.9023C14.7284 22.1615 9.26599 22.1615 5.70199 18.9023L5.04199 19.5623C8.97559 23.1887 15.0332 23.1887 18.9668 19.5623L18.2924 18.9023Z"
          fill={forceColor ?? '#5A5564'}
        />
        <path
          d="M16.1592 9.80186C16.0272 8.42666 14.8416 7.96586 13.3416 7.82426V5.93066H12.1824V7.78826H11.256V5.93066H10.104V7.83626H7.75195V9.07706C7.75195 9.07706 8.60875 9.06266 8.59435 9.07706C8.91595 9.04106 9.20635 9.26666 9.25435 9.58586V14.8059C9.24715 14.9163 9.19675 15.0171 9.11275 15.0891C9.03115 15.1611 8.92315 15.1995 8.81515 15.1899C8.82955 15.2019 7.97275 15.1899 7.97275 15.1899L7.75195 16.5771H10.0824V18.5139H11.2416V16.6059H12.168V18.5067H13.3296V16.5915C15.288 16.4739 16.656 15.9891 16.8264 14.1555C16.9656 12.6795 16.2696 12.0195 15.1608 11.7555C15.8352 11.4243 16.2528 10.8099 16.1592 9.80186ZM14.5344 13.9275C14.5344 15.3675 12.0648 15.2043 11.28 15.2043V12.6483C12.0672 12.6483 14.5344 12.4251 14.5344 13.9299V13.9275ZM13.9968 10.3251C13.9968 11.6427 11.9352 11.4819 11.2824 11.4819V9.15866C11.9376 9.15866 13.9968 8.95226 13.9968 10.3251Z"
          fill={forceColor ?? '#F09242'}
        />
        <path
          d="M11.9976 24C5.3712 23.9976 0 18.6264 0 11.9976C0 5.3712 5.3736 0 12.0024 0C18.6288 0 24 5.3712 24 11.9976C24 18.624 18.6288 23.9976 12.0024 24H11.9976ZM11.9976 0.936C5.892 0.9408 0.9432 5.8944 0.948 12.0024C0.9528 18.1104 5.9064 23.0568 12.0144 23.052C18.1152 23.0472 23.0616 18.1008 23.064 11.9976C23.0664 5.8896 18.1176 0.9384 12.0096 0.936C12.0048 0.936 12 0.936 11.9976 0.936Z"
          fill={forceColor ?? '#282138'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1759_11423">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function DfxAssetIconGMX({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 810 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="gmx_e">
          <path d="M0 109h810v592H0Zm0 0" />
        </clipPath>
        <clipPath id="gmx_f">
          <path d="M810 700.164 406.297 109.836 0 700.164h565.703l-159.406-225.18-79.703 118.258h-84.89l164.593-236.195 236.195 343.117Zm0 0" />
        </clipPath>
        <clipPath id="gmx_b">
          <path d="M0 0h810v811H0z" />
        </clipPath>
        <linearGradient
          id="gmx_d"
          x1={1343.3}
          x2={157.828}
          y1={-454.415}
          y2={2564.809}
          gradientTransform="matrix(.324 0 0 -.324 0 810.92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#03D1CF" />
          <stop offset={0.125} stopColor="#03D1CF" />
          <stop offset={0.188} stopColor="#03D1CF" />
          <stop offset={0.219} stopColor="#03D1CF" />
          <stop offset={0.227} stopColor="#03D1CF" />
          <stop offset={0.23} stopColor="#03D0CF" />
          <stop offset={0.234} stopColor="#04CFCF" />
          <stop offset={0.238} stopColor="#04CED0" />
          <stop offset={0.242} stopColor="#05CDD0" />
          <stop offset={0.246} stopColor="#05CCD0" />
          <stop offset={0.25} stopColor="#06CAD0" />
          <stop offset={0.254} stopColor="#06C9D1" />
          <stop offset={0.258} stopColor="#06C8D1" />
          <stop offset={0.262} stopColor="#07C7D1" />
          <stop offset={0.266} stopColor="#07C6D1" />
          <stop offset={0.27} stopColor="#08C4D2" />
          <stop offset={0.273} stopColor="#08C3D2" />
          <stop offset={0.277} stopColor="#09C2D2" />
          <stop offset={0.281} stopColor="#09C1D2" />
          <stop offset={0.285} stopColor="#0AC0D3" />
          <stop offset={0.289} stopColor="#0ABED3" />
          <stop offset={0.293} stopColor="#0ABDD3" />
          <stop offset={0.297} stopColor="#0BBCD3" />
          <stop offset={0.301} stopColor="#0BBBD4" />
          <stop offset={0.305} stopColor="#0CBAD4" />
          <stop offset={0.309} stopColor="#0CB9D4" />
          <stop offset={0.313} stopColor="#0DB7D4" />
          <stop offset={0.316} stopColor="#0DB6D5" />
          <stop offset={0.32} stopColor="#0EB5D5" />
          <stop offset={0.324} stopColor="#0EB4D5" />
          <stop offset={0.328} stopColor="#0EB3D5" />
          <stop offset={0.332} stopColor="#0FB1D6" />
          <stop offset={0.336} stopColor="#0FB0D6" />
          <stop offset={0.34} stopColor="#10AFD6" />
          <stop offset={0.344} stopColor="#10AED6" />
          <stop offset={0.348} stopColor="#11ADD7" />
          <stop offset={0.352} stopColor="#11ABD7" />
          <stop offset={0.355} stopColor="#12AAD7" />
          <stop offset={0.359} stopColor="#12A9D7" />
          <stop offset={0.363} stopColor="#12A8D8" />
          <stop offset={0.367} stopColor="#13A7D8" />
          <stop offset={0.371} stopColor="#13A6D8" />
          <stop offset={0.375} stopColor="#14A4D8" />
          <stop offset={0.379} stopColor="#14A3D8" />
          <stop offset={0.383} stopColor="#15A2D9" />
          <stop offset={0.387} stopColor="#15A1D9" />
          <stop offset={0.391} stopColor="#16A0D9" />
          <stop offset={0.395} stopColor="#169ED9" />
          <stop offset={0.398} stopColor="#179DDA" />
          <stop offset={0.402} stopColor="#179CDA" />
          <stop offset={0.406} stopColor="#179BDA" />
          <stop offset={0.41} stopColor="#189ADA" />
          <stop offset={0.414} stopColor="#1898DB" />
          <stop offset={0.418} stopColor="#1997DB" />
          <stop offset={0.422} stopColor="#1996DB" />
          <stop offset={0.426} stopColor="#1A95DB" />
          <stop offset={0.43} stopColor="#1A94DC" />
          <stop offset={0.434} stopColor="#1B92DC" />
          <stop offset={0.438} stopColor="#1B91DC" />
          <stop offset={0.441} stopColor="#1B90DC" />
          <stop offset={0.445} stopColor="#1C8FDD" />
          <stop offset={0.449} stopColor="#1C8EDD" />
          <stop offset={0.453} stopColor="#1D8DDD" />
          <stop offset={0.457} stopColor="#1D8BDD" />
          <stop offset={0.461} stopColor="#1E8ADE" />
          <stop offset={0.465} stopColor="#1E89DE" />
          <stop offset={0.469} stopColor="#1F88DE" />
          <stop offset={0.473} stopColor="#1F87DE" />
          <stop offset={0.477} stopColor="#1F85DF" />
          <stop offset={0.48} stopColor="#2084DF" />
          <stop offset={0.484} stopColor="#2083DF" />
          <stop offset={0.488} stopColor="#2182DF" />
          <stop offset={0.492} stopColor="#2181E0" />
          <stop offset={0.496} stopColor="#227FE0" />
          <stop offset={0.5} stopColor="#227EE0" />
          <stop offset={0.504} stopColor="#237DE0" />
          <stop offset={0.508} stopColor="#237CE1" />
          <stop offset={0.512} stopColor="#237BE1" />
          <stop offset={0.516} stopColor="#2479E1" />
          <stop offset={0.52} stopColor="#2478E1" />
          <stop offset={0.523} stopColor="#2577E2" />
          <stop offset={0.527} stopColor="#2576E2" />
          <stop offset={0.531} stopColor="#2675E2" />
          <stop offset={0.535} stopColor="#2674E2" />
          <stop offset={0.539} stopColor="#2772E2" />
          <stop offset={0.543} stopColor="#2771E3" />
          <stop offset={0.547} stopColor="#2770E3" />
          <stop offset={0.551} stopColor="#286FE3" />
          <stop offset={0.555} stopColor="#286EE3" />
          <stop offset={0.559} stopColor="#296CE4" />
          <stop offset={0.563} stopColor="#296BE4" />
          <stop offset={0.566} stopColor="#2A6AE4" />
          <stop offset={0.57} stopColor="#2A69E4" />
          <stop offset={0.574} stopColor="#2B68E5" />
          <stop offset={0.578} stopColor="#2B66E5" />
          <stop offset={0.582} stopColor="#2B65E5" />
          <stop offset={0.586} stopColor="#2C64E5" />
          <stop offset={0.59} stopColor="#2C63E6" />
          <stop offset={0.594} stopColor="#2D62E6" />
          <stop offset={0.598} stopColor="#2D60E6" />
          <stop offset={0.602} stopColor="#2E5FE6" />
          <stop offset={0.605} stopColor="#2E5EE7" />
          <stop offset={0.609} stopColor="#2F5DE7" />
          <stop offset={0.613} stopColor="#2F5CE7" />
          <stop offset={0.617} stopColor="#2F5BE7" />
          <stop offset={0.621} stopColor="#3059E8" />
          <stop offset={0.625} stopColor="#3058E8" />
          <stop offset={0.629} stopColor="#3157E8" />
          <stop offset={0.633} stopColor="#3156E8" />
          <stop offset={0.637} stopColor="#3255E9" />
          <stop offset={0.641} stopColor="#3253E9" />
          <stop offset={0.645} stopColor="#3352E9" />
          <stop offset={0.648} stopColor="#3351E9" />
          <stop offset={0.652} stopColor="#3350EA" />
          <stop offset={0.656} stopColor="#344FEA" />
          <stop offset={0.66} stopColor="#344DEA" />
          <stop offset={0.664} stopColor="#354CEA" />
          <stop offset={0.668} stopColor="#354BEB" />
          <stop offset={0.672} stopColor="#364AEB" />
          <stop offset={0.676} stopColor="#3649EB" />
          <stop offset={0.68} stopColor="#3748EB" />
          <stop offset={0.684} stopColor="#3746EC" />
          <stop offset={0.688} stopColor="#3745EC" />
          <stop offset={0.691} stopColor="#3844EC" />
          <stop offset={0.695} stopColor="#3843EC" />
          <stop offset={0.699} stopColor="#3942EC" />
          <stop offset={0.703} stopColor="#3940ED" />
          <stop offset={0.707} stopColor="#3A3FED" />
          <stop offset={0.711} stopColor="#3A3EED" />
          <stop offset={0.715} stopColor="#3B3DED" />
          <stop offset={0.719} stopColor="#3B3CEE" />
          <stop offset={0.723} stopColor="#3B3AEE" />
          <stop offset={0.727} stopColor="#3C39EE" />
          <stop offset={0.73} stopColor="#3C38EE" />
          <stop offset={0.734} stopColor="#3D37EF" />
          <stop offset={0.738} stopColor="#3D36EF" />
          <stop offset={0.742} stopColor="#3E34EF" />
          <stop offset={0.746} stopColor="#3E33EF" />
          <stop offset={0.75} stopColor="#3F32F0" />
          <stop offset={0.754} stopColor="#3F31F0" />
          <stop offset={0.758} stopColor="#4030F0" />
          <stop offset={0.762} stopColor="#402FF0" />
          <stop offset={0.766} stopColor="#402DF1" />
          <stop offset={0.77} stopColor="#412CF1" />
          <stop offset={0.773} stopColor="#412BF1" />
          <stop offset={0.777} stopColor="#422AF1" />
          <stop offset={0.781} stopColor="#4229F2" />
          <stop offset={0.785} stopColor="#4327F2" />
          <stop offset={0.789} stopColor="#4326F2" />
          <stop offset={0.793} stopColor="#4425F2" />
          <stop offset={0.797} stopColor="#4424F3" />
          <stop offset={0.801} stopColor="#4423F3" />
          <stop offset={0.805} stopColor="#4521F3" />
          <stop offset={0.809} stopColor="#4520F3" />
          <stop offset={0.813} stopColor="#461FF4" />
          <stop offset={0.816} stopColor="#461EF4" />
          <stop offset={0.82} stopColor="#471DF4" />
          <stop offset={0.824} stopColor="#471BF4" />
          <stop offset={0.828} stopColor="#481AF5" />
          <stop offset={0.832} stopColor="#4819F5" />
          <stop offset={0.836} stopColor="#4818F5" />
          <stop offset={0.84} stopColor="#4917F5" />
          <stop offset={0.844} stopColor="#4916F6" />
          <stop offset={0.848} stopColor="#4A14F6" />
          <stop offset={0.852} stopColor="#4A13F6" />
          <stop offset={0.855} stopColor="#4B12F6" />
          <stop offset={0.859} stopColor="#4B11F7" />
          <stop offset={0.863} stopColor="#4C10F7" />
          <stop offset={0.867} stopColor="#4C0EF7" />
          <stop offset={0.871} stopColor="#4C0DF7" />
          <stop offset={0.875} stopColor="#4D0CF7" />
          <stop offset={0.879} stopColor="#4D0BF8" />
          <stop offset={0.883} stopColor="#4E0AF8" />
          <stop offset={0.891} stopColor="#4E09F8" />
          <stop offset={0.906} stopColor="#4E09F8" />
          <stop offset={0.938} stopColor="#4E09F8" />
          <stop offset={1} stopColor="#4E09F8" />
        </linearGradient>
        <pattern
          id="gmx_g"
          width={810}
          height={811}
          x={0}
          y={0}
          patternTransform="matrix(1 0 0 -1 0 810.92)"
          patternUnits="userSpaceOnUse"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clipPath="url(#gmx_b)" mask="url(#gmx_c)">
            <path fill={forceColor ?? 'url(#gmx_d)'} d="M-178.2-177.28H988.2v1166.4H-178.2z" />
          </g>
        </pattern>
        <filter id="gmx_a" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix colorInterpolationFilters="sRGB" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        </filter>
        <mask id="gmx_c">
          <g filter="url(#gmx_a)">
            <image
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyoAAAMrCAYAAACmlWZiAAAABmJLR0QA/wD/AP+gvaeTAAAaJElEQVR4nO3dOZIjxxJF0fw07n/L/AJZ3ahqDJGZMbh7nKPBoITgZnhXwv+O4/jnAID1/B4B8Mvfqx8AwPYECgB/ECoArCBOAHhLqAAwk0ABoIlQAWA0cQLAaUIFgFEECgCXCRUAehInAHQhVAC4S5wA0J1QAeAqgQLAMEIFgDPECQBTCBUAWggUAKYSKgC8Ik4AWEaoAPCTQAFgOaECwHGIEwCCESoAexMoAIQkVAD2I04ACE+oAOxDoACQhlABqE2cAJCSUAGoR5wAkJ5QAahDoABQhlAByE2cAFCSUAHISaAAUJpQAchDnACwDaECEJ9AAWA7QgUgJnECwNaECkAsAgUADqECEIE4AYAfhArAOgIFAF4QKgBziRMAaCBUAMYTJwBwklABGEegAMBFQgWgL3ECAB0IFYA+BAoAdCRUAK4TJwAwiFABOE+gAMBgQgWgjTgBgImECsB7AgUAFhAqAH8SJwCwmFAB+E2gAEAQQgXYnTgBgICECrAjcQIAwQkVYCcCBQCSECpAdeIEABISKkBVAgUAEhMqQCXiBACKECpABQIFAIoRKkBW4gQAChMqQDYCBQA2IFSADMQJAGxGqACRCRQA2JRQAaIRJwCAUAFCECcAwDdCBVhJoAAATwkVYDZxAgB8JFSAWQQKANBMqAAjiRMA4BKhAowgUACAW4QK0Is4AQC6ESrAXQIFAOhOqABXiBMAYCihArQSJwDANEIF+ESgAADTCRXgGXECACwlVIBHAgUACEGoAOIEAAhHqMC+BAoAEJZQgb2IEwAgBaECexAoAEAqQgXqEicAQFpCBeoRKABAekIFahAnAEApQgXyEicAQFlCBfIRKABAeUIFchAnAMBWhArEJlAAgC0JFYhHnAAA2xMqEIdAAQD4j1CBtcQJAMATQgXWECgAAG8IFZhHnAAANBIqMJ5AAQA4SajAGOIEAOAGoQL9iBMAgE6ECtwnUAAAOhMqcI04AQAYSKjAOQIFAGACoQKfiRMAgMmECrwmUAAAFhEq8J04AQAIQKjAvwQKAEAgQoWdiRMAgKCECjsSKAAAwQkVdiFOAAASESpUJk4AAJISKlQkUAAAkhMqVCFOAAAKESpkJ1AAAAoSKmQkTgAAihMqZCJQAAA2IVSITpwAAGxIqBCVQAEA2JhQIRJxAgDAcRxChRgECgAA3wgVVhEnAAC8JFSYSZwAANDiH6HCDAIFAIAWv3ajUGEUcQIAQIunu1Go0JtAAQCgxdvdKFToQZwAANCieTcKFe4QKAAAtDi9G4UKZ4kTAABa3NqNQoVWAgUAgBZddqNQ4R1xAgBAi+67UajwjEABAKDFsN0oVPgiTgAAaDFlNwqVvYkTAABaTN+NQmVPAgUAgBbLdqNQ2Yc4AQCgRYjdKFTqC3FoAACEF2o3CpWaQh0ZAABhhd2NQqWWsIcGAEAo4XejUMkv/JEBABBCqt0oVPJKdWgAACyTcjcKlVxSHhkAANOl341CJYf0hwYAwBRldqNQiavMkQEAMFTJ3ShUYil5ZAAAdFd+NwqVGMofGgAAXWyzG4XKOtscGQAAt2y5G4XKfFseGgAAp229G4XKHFsfGQAAzezG/wiVsRwaAAAt7MYfhEp/jgwAgBZ24xtCpR+HBgBAC7uxgVC5x5EBANDCbjxJqJznyAAAaGE33iBU2jk0AABa2I0dCJX3HBkAAC3sxs6EynMODQCAFnbjIELlN0cGAEALu3ECoeLQAABoYzdOtGuoODIAAFrYjYvsFioODQCAFnbjYjuEiiMDAKCF3RhI5VBxaAAAtLAbA6oWKo4MAIAWdmNwVULFoQEA8InNmEjmUHFoAAC0sBsTyhYqjgwAgBZ2Y3JZQsWhAQDQwm4sInKoODIAAFrYjQVFDBWHBgBAC7uxsCih4sgAAGhhN25idag4NAAAWtiNm1kRKo4MAIAWduPGZoaKQwMAoIXdyPBQcWQAALSwG/lmRKg4MgAAWtiNvNQzVBwaAAAt7EY+uhsqjgwAgBZ2I6dcDRWHBgBAC7uRS86EiiMDAKCF3chtLaHi0AAAaGE30s2rUHFkAAC0sBsZ4meoODQAAFrYjQz19+HIAABoYzcyzeh/pgcAID+BwnRCBQCAZ8QJSwkVAAC+iBPCECoAAAgUwhEqAAB7EieEJlQAAPYiUEhBqAAA1CdOSEeoAADUJVBIS6gAANQiTihBqAAA1CBQKEWoAADkJU4oS6gAAOQjUChPqAAA5CBO2IpQAQCIS5ywLaECABCPQGF7QgUAIAZxAg+ECgDAWgIFnhAqAADziRP4QKgAAMwjUKCRUAEAGEucwAVCBQBgDIECNwgVAIB+xAl0IlQAAO4TKNCZUAEAuEacwEBCBQCgnTiBSYQKAMBnAgUmEyoAAM+JE1hIqAAAfCdQIAChAgAgTiAcoQIA7EygQFBCBQDYjTiBBIQKALALgQKJCBUAoDJxAkkJFQCgGnECBQgVAKAKgQKFCBUAIDNxAkUJFQAgI4ECxQkVACALcQIbESoAQHQCBTYkVACAiMQJbE6oAACRCBTgOA6hAgCsJ06APwgVAGAVgQK8JFQAgJnECdBEqAAAo4kT4DShAgCMIlCAy4QKANCTOAG6ECoAQA8CBehKqAAAV4kTYBihAgCcJVCA4YQKANBCnABTCRUA4B2BAiwhVACAn8QJsJxQAQC+CBQgDKECAHsTJ0BIQgUA9iNOgPCECgDsQ6AAaQgVAKhNnAApCRUAqEmgAKkJFQCoQ5wAZQgVAMhPoADlCBUAyEmcAKUJFQDIRaAAWxAqABCfOAG2I1QAIC6BAmxLqABALOIE4BAqABCBOAH4QagAwDoCBeAFoQIAc4kTgAZCBQDmECgAJwgVABhHnABcJFQAoD+BAnCTUAGAPsQJQEdCBQDuESgAAwgVADhPnAAMJlQAoJ1AAZhEqADAe+IEYAGhAgB/EicAiwkVAPhNoAAEIVQA2J04AQhIqACwK4ECEJhQAWAn4gQgCaECwA4ECkAyQgWAqsQJQGJCBYBqBApAAUIFgArECUAxQgWAzAQKQFFCBYBsxAnABoQKABmIE4DNCBUAIhMoAJsSKgBEI04AECoAhCFQAPhFqACwkjgB4CmhAsAKAgWAt4QKALOIEwCaCRUARhMoAJwmVAAYQZwAcItQAaAXcQJAN0IFgLsECgDdCRUArhAnAAwlVAA4Q6AAMIVQAeATcQLAdEIFgFcECgDLCBUAHokTAEIQKgAch0ABIBihArAvcQJAWEIFYD8CBYDwhArAHsQJAKkIFYC6xAkAaQkVgHoECgDpCRWAGsQJAKUIFYDcBAoAJQkVgHzECQDlCRWAPAQKANsQKgCxiRMAtiRUAGISKABsTagAxCFOAOA/QgVgPYECAD8IFYA1xAkAvCFUAOYRJwDQSKgAjCdQAOAkoQIwhjgBgBuECkBfAgUAOhAqAPeJEwDoTKgAXCdQAGAQoQJwjjgBgAmECkAbgQIAEwkVgNfECQAsIlQA/iRQAGAxoQLwL3ECAIEIFWBn4gQAghIqwI4ECgAEJ1SAXYgTAEhEqADVCRQASEioABWJEwBITqgAlQgUAChCqADZiRMAKEioAFkJFAAoTKgAmYgTANiEUAEyECgAsBmhAkQlTgBgY0IFiEScAADHcQgVIAaBAgB8I1SAVcQJAPCSUAFmEygAwEdCBZhBnAAApwgVYCSBAgBcIlSA3sQJAHCbUAF6ESgAQDdCBbhDnAAAQwgV4AqBAgAMJVSAVuIEAJhGqADviBMAYAmhAjwjUACApYQK8EWcAABhCBVAoAAA4QgV2JM4AQBCEyqwF4ECAKQgVKA+cQIApCNUoC6BAgCkJVSgFnECAJQgVCA/cQIAlCNUIC+BAgCUJVQgF3ECAGxBqEAOAgUA2IpQgbjECQCwLaEC8QgUAGB7QgViECcAAA+ECqwlUAAAnhAqMJ84AQD4QKjAPAIFAKCRUIGxxAkAwAVCBfoTJwAANwkV6EegAAB0IlTgHnECADCAUIFrBAoAwEBCBdqJEwCASYQKfCZQAAAmEyrwnDgBAFhIqMB3AgUAIAChAuIEACAcocLOBAoAQFBChd2IEwCABIQKOxAnAADJCBUqEygAAEkJFaoRJwAABQgVqhAoAACFCBUyEycAAEUJFTISKAAAxQkVshAnAAAbESpEJ1AAADYkVIhInAAAbE6oEIlAAQDgOA6hwnriBACAPwgVVhAnAAC8JVSYSaAAANBEqDCaOAEA4DShwigCBQCAy4QKPYkTAAC6ECr0IFAAAOhKqHCVOAEAYBihwlkCBQCA4YQKLcQJAABTCRVeEScAACwjVPhJoAAAsJxQ4TjECQAAwQiVvQkUAABCEir7EScAAIQnVPYhUAAASEOo1CZOAABISajUJFAAAEhNqNQhTgAAKEOo5CdQAAAoR6jkJE4AAChNqOQiUAAA2IJQiU+cAACwHaESkzgBAGBrQiUWgQIAAIdQiUCcAADAD0JlHYECAAAvCJW5xAkAADQQKnMIFAAAOEGojCNOAADgIqHSn0ABAICbhEof4gQAADoSKteJEwAAGESonCdQAABgMKHSRpwAAMBEQuU9gQIAAAsIlT+JEwAAWEyo/CZQAAAgiN1DRZwAAEBAu4aKQAEAgMB2ChVxAgAASewQKgIFAACSqRoq4gQAABKrFCriBAAAiqgQKgIFAACKyRoq4gQAAArLFioCBQAANpAhVMQJAABsJnKoCBQAANhUtFARJwAAQJhQESgAAMAvK0NFnAAAAE+tCBWBAgAAvDUrVMQJAADQbGSoiBMAAOCSEaEiUAAAgFt6hYo4AQAAurkbKgIFAADo7kqoiBMAAGCoM6EiUAAAgCk+hYo4AQAApnsVKgIFAABY5jFUxAkAABDC34dAAQAAgvlr9QMAAAB+EioAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADC+Xv1AwAAAB78cxxCBQAAiOGfxw9CBQAAWOWfV18IFQAAYLaXgfJFqAAAADN8jJNHQgUAABjpVKB8ESoAAEBvl+LkkVABAAB6uR0oX4QKAABwR7c4eSRUAACAs4bEySOhAgAAtBoeKF+ECgAA8M60OHkkVAAAgGeWBMoXoQIAAHxZGiePhAoAABAmUL4IFQAA2FO4OHkkVAAAYC+hA+WLUAEAgPpSxMkjoQIAAHWlC5QvQgUAAGpJGyePhAoAAORXIk4eCRUAAMirXKB8ESoAAJBL2Th5JFQAACCHLQLli1ABAIC4toqTR0IFAADi2TZQvggVAACIYfs4eSRUAABgLYHyhFABAID5xMkHQgUAAOYRKI2ECgAAjCVOLhAqAADQnzi5SagAAEA/AqUToQIAAPeIkwGECgAAXCNQBhIqAADQTpxMIlQAAOAzgTKZUAEAgOfEyUJCBQAAvhMoAQgVAAAQJ+EIFQAAdiZQghIqAADsRpwkIFQAANiBOElGqAAAUJlASUqoAABQjTgpQKgAAFCFQClEqAAAkJk4KUqoAACQkUApTqgAAJCFONmIUAEAIDqBsiGhAgBAROJkc0IFAIAoxAm/CBUAAFYTKPxBqAAAsII44S2hAgDATAKFJkIFAIDRxAmnCRUAAEYRKFwmVAAA6Emc0IVQAQCgB4FCV0IFAICrxAnDCBUAAM4SKAwnVAAAaCFOmEqoAADwijhhGaECAMBPAoXlhAoAAMchTghGqAAA7E2gEJJQAQDYjzghPKECALAPgUIaQgUAoDZxQkpCBQCgJoFCakIFAKAOcUIZQgUAID+BQjlCBQAgJ3FCaUIFACAPccI2hAoAQHwChe0IFQCAmMQJWxMqAACxCBQ4hAoAQATiBH4QKgAA6wgUeEGoAADMJU6ggVABAJhDoMAJQgUAYBxxAhcJFQCA/gQK3CRUAAD6ECfQkVABALhOnMAgQgUA4DyBAoMJFQCANuIEJhIqAADvCRRYQKgAAPxJnMBiQgUA4DeBAkEIFQBgd+IEAhIqAMCuBAoEJlQAgJ2IE0hCqAAAOxAokIxQAQCqEieQmFABACoRJ1CEUAEAKhAoUIxQAQCyEidQmFABALIRKLABoQIAZCBOYDNCBQCITKDApoQKABCNOAGECgAQhkABfhEqAMBK4gR4SqgAACsIFOAtoQIAzCJOgGZCBQAYSZwAlwgVAGAEgQLcIlQAgF7ECdCNUAEA7hIoQHdCBQC4QpwAQwkVAOAMgQJMIVQAgE/ECTCdUAEAXhEowDJCBQB4JE6AEIQKACBOgHCECgDsS6AAYQkVANiLOAFSECoAsAeBAqQiVACgLnECpCVUAKAegQKkJ1QAoAZxApQiVAAgN4EClCRUACAfcQKUJ1QAIA+BAmxDqABAbOIE2JJQAYB4xAmwPaECAHEIFID/CBUAWEucADwhVABgDYEC8IZQAYB5xAlAI6ECAOMJFICThAoAjCFOAG4QKgDQl0AB6ECoAMB94gSgM6ECANcJFIBBhAoAnCNOACYQKgDwmTgBmEyoAMBrAgVgEaECAN+JE4AAhAoA/EugAAQiVADYmTgBCEqoALAjgQIQnFABYBfiBCARoQJAdQIFICGhAkBF4gQgOaECQCUCBaAIoQJAduIEoCChAkBG4gSgOKECQCYCBWATQgWA6MQJwIaECgBRCRSAjQkVACIRJwAcxyFUAIhBoADwjVABYBVxAsBLQgWA2QQKAB8JFQBmECcAnCJUABhJoABwiVABoDdxAsBtQgWAHsQJAF0JFQDuECgADCFUADhLnAAwnFABoJVAAWAaoQLAO+IEgCWECgDPCBQAlhIqAHwRJwCEIVQAECgAhCNUAPYkTgAITagA7EWgAJCCUAGoT5wAkI5QAahJnACQmlABqEWgAFCCUAHIT5wAUI5QAchLoABQllAByEWcALAFoQKQg0ABYCtCBSAucQLAtoQKQDwCBYDtCRWAGMQJADwQKgDriBMAeEGoAMwnUADgA6ECMIc4AYAThArAWAIFAC4QKgD9iRMAuEmoAPQjUACgE6ECcI84AYABhArANQIFAAYSKgDtxAkATCJUAD4TKAAwmVABeE6cAMBCQgXgN3ECAEEIFQCBAgDhCBVgV+IEAAITKsBuBAoAJCBUgB2IEwBIRqgAlQkUAEhKqADViBMAKECoAFUIFAAoRKgAmYkTAChKqAAZCRQAKE6oAFmIEwDYiFABIhMnALApoQJEJFAAYHNCBYhCnAAAvwgVYDWBAgD8QagAK4gTAOAtoQLMJFAAgCZCBRhNnAAApwkVYBSBAgBcJlSAnsQJANCFUAF6ECgAQFdCBbhKnAAAwwgV4AxxAgBMIVSAFgIFAJhKqACviBMAYBmhAvwkUACA5YQKcBziBAAIRqjA3gQKABCSUIH9iBMAIDyhAvsQKABAGkIFahMnAEBKQgVqEigAQGpCBeoQJwBAGUIFchMnAEBJQgVyEigAQGlCBfIQJwDANoQKxCdQAIDtCBWISZwAAFsTKhCLQAEAOIQKRCBOAAB+ECqwjkABAHhBqMBc4gQAoIFQgTkECgDACUIFxhEnAAAXCRXoS5wAAHQgVKAPgQIA0JFQgevECQDAIEIFzhMoAACDCRVoI04AACYSKvCeQAEAWECowJ/ECQDAYkIFfhMoAABBCBV2J04AAAISKuxInAAABCdU2IlAAQBIQqhQnTgBAEhIqFCVQAEASEyoUIk4AQAoQqhQgUABAChGqJCVOAEAKEyokI1AAQDYgFAhA3ECALAZoUJkAgUAYFNChWjECQAAQoUQxAkAAN8IFVYSKAAAPCVUmE2cAADwkVBhFoECAEAzocJI4gQAgEuECiMIFAAAbhEq9CJOAADoRqhwl0ABAKA7ocIV4gQAgKGECmcIFAAAphAqfCJOAACYTqjwjDgBAGApocIjgQIAQAhCBXECAEA4QmVfAgUAgLCEyl7ECQAAKQiVPQgUAABSESp1iRMAANISKvUIFAAA0hMqNYgTAABKESq5CRQAAEoSKvmIEwAAyhMqOYgTAAC2IlRiEygAAGxJqMQjTgAA2J5QiUOgAADAf4TKWuIEAACeECprCBQAAHhDqMwjTgAAoJFQGU+gAADASUJlDHECAAA3CJW+BAoAAHQgVO4TJwAA0JlQuUacAADAQELlHIECAAATCJXPxAkAAEwmVF4TKAAAsIhQ+U6cAABAAELlXwIFAAAC2TlUxAkAAAS1Y6gIFAAACG6XUBEnAACQSPVQESgAAJBQxVARJwAAkFyVUBEnAABQSPZQESgAAFBQxlARJwAAUFymUBEoAACwieihIk4AAGBDUUNFoAAAwMYihYo4AQAAjuOIESoCBQAA+GZVqIgTAADgpZmhIk4AAIAmM0JFoAAAAKeMChVxAgAAXNY7VAQKAABwW49QEScAAEBXd0JFoAAAAEOcDRVxAgAADNcaKgIFAACY5l2oiBMAAGCJZ6EiUAAAgKW+QkWcAAAAYfx1iBQAACCYv1Y/AAAA4CehAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQjlABAADCESoAAEA4QgUAAAhHqAAAAOEIFQAAIByhAgAAhCNUAACAcIQKAAAQzv8BqVsuJsioi/kAAAAASUVORK5CYII="
              width={810}
              height={811}
            />
          </g>
        </mask>
      </defs>
      <g clipPath="url(#gmx_e)">
        <g clipPath="url(#gmx_f)">
          <path fill={forceColor ?? 'url(#gmx_g)'} d="M0 109.836h810v590.328H0Zm0 0" />
        </g>
      </g>
    </svg>
  );
}

function DfxAssetIconCHZ({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8,15.7c0-.2,0-.3-.2-.4-.7-.5-1.5-1-2.2-1.5a.45.45,0,0,0-.5,0l-2.2,1.6a.55.55,0,0,0-.3.5,1.07,1.07,0,0,1-.2.6.45.45,0,0,0,0,.5c.8,1.6,1.5,3.2,2.3,4.8.3.5.5,1.1.8,1.7.1-.1.1-.2.2-.3.9-2,1.7-4,2.6-6,.1-.2.1-.3-.1-.4A1.31,1.31,0,0,1,17.8,15.7Z"
        fill={forceColor ?? '#cd0124'}
      />
      <path
        d="M14.4,13.1c-2-1.4-4-2.8-5.9-4.1l-.1.1c.1.2.1.3.2.5l2.1,4.5c.2.4.3.8.9.9a.9.9,0,0,0,.5-.1c.6-.5,1.3-.9,1.9-1.4Z"
        fill={forceColor ?? '#cd0124'}
      />
      <path
        d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm8.1,8.7c-.2,0-.3.1-.4.3-.8,2-1.7,4-2.5,6v.4a1.3,1.3,0,0,1-.8,1.8q-.15,0-.3.3c-.9,2-1.8,4.1-2.6,6.1a.45.45,0,0,0,0,.5,1.26,1.26,0,0,1-.2,1.7,1.22,1.22,0,0,1-1.6.1,1.15,1.15,0,0,1-.3-1.6.64.64,0,0,0,0-.6c-1-2-1.9-4-2.9-6a.7.7,0,0,0-.5-.4,1.28,1.28,0,0,1-.9-1.9.45.45,0,0,0,0-.5C9.2,12.9,8.3,11,7.3,9c0-.1-.1-.2-.4-.2A1.28,1.28,0,0,1,5.8,7.6a1.54,1.54,0,0,1,.9-1.3,1.24,1.24,0,0,1,1.5.5c.1.2.2.2.5.2H21.4c.2,0,.4,0,.5-.3a1.15,1.15,0,0,1,1.4-.5,1.4,1.4,0,0,1,.9,1.2A1.3,1.3,0,0,1,23.1,8.7Z"
        fill={forceColor ?? '#cd0124'}
      />
      <path
        d="M15,12.4a.45.45,0,0,0,.5,0c1.9-1.4,3.8-2.7,5.6-4.1.1-.1.2-.1.2-.2V8H8.7a.77.77,0,0,1,.3.2Z"
        fill={forceColor ?? '#cd0124'}
      />
      <path
        d="M16,13.1c.8.6,1.6,1.1,2.4,1.6.2.1.5,0,.8,0,.1,0,.2-.2.2-.3.7-1.6,1.4-3.3,2.1-4.9,0-.1.1-.2.1-.3h-.1C19.8,10.4,17.9,11.7,16,13.1Z"
        fill={forceColor ?? '#cd0124'}
      />
    </svg>
  );
}

function DfxAssetIconRPL({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd">
        <path
          fill="#fcfbfb"
          d="M283.897 101.351c-.042.039-1.104.167-2.361.284-5.943.554-13.069 2.118-19.653 4.315-3.102 1.035-6.451 2.278-7.861 2.919-.302.137-.96.425-1.463.64-.502.214-1.173.507-1.49.65-.317.144-.634.261-.704.261-.189 0-7.066 3.415-8.775 4.357l-2.285 1.259c-2.867 1.58-6.366 3.742-10.31 6.371-5.338 3.559-8.438 5.824-13.341 9.749-2.163 1.731-2.507 2.015-4.129 3.402-.47.402-1.255 1.06-1.744 1.462a51.84 51.84 0 0 0-1.087.914 1860.2 1860.2 0 0 1-4.56 4.132c-3.216 2.894-9.484 9.687-13.977 15.145-1.361 1.653-1.907 2.204-2.187 2.204-.157 0-1.485.291-2.949.647-1.465.355-3.691.894-4.948 1.197a444.9 444.9 0 0 0-3.291.807 600.74 600.74 0 0 1-7.221 1.726c-.905.212-1.933.464-2.285.562-.352.097-1.38.346-2.285.553-3.408.777-3.134.594-6.399 4.272a151.38 151.38 0 0 1-1.472 1.643c-.106.111-.805.9-1.554 1.753a146.57 146.57 0 0 1-1.635 1.842c-.584.618-1.762 1.929-2.446 2.723-.697.81-3.039 3.435-3.587 4.022-.151.161-1.097 1.233-2.103 2.382a143.393 143.393 0 0 1-2.498 2.796c-1.751 1.848-1.965 2.781-.749 3.262.278.11.648.273.822.363.175.09.451.163.613.163.162 0 .554.111.871.247.316.136 1.563.56 2.769.943 1.207.384 2.453.807 2.77.942.317.134.705.245.862.245.158 0 .557.112.887.25a17.77 17.77 0 0 0 2.611.873c.402.098.81.255.905.35.096.094.342.172.549.173.206.001.61.124.898.274.288.15.646.273.795.273.149 0 .531.111.848.245.316.135 1.193.436 1.947.669.754.234 1.63.535 1.947.669.317.135.732.246.923.246.191 0 .425.077.521.172.095.095.503.252.905.349 3.415.828 4.218 1.464 3.879 3.077-.334 1.591.312 6.091 1.268 8.833.337.968 1.51 3.341 1.718 3.475.727.471.369 1.201-1.746 3.566a441.378 441.378 0 0 0-4.129 4.659c-.837.955-1.675 1.901-1.862 2.103-1.472 1.58-1.653 1.242 3.421 6.374 3.968 4.013 4.157 4.177 4.705 4.067.44-.088 1.693-1.253 5.434-5.05 5.166-5.244 5.064-5.169 6.367-4.671 2.856 1.093 9.044 1.792 12.206 1.379 3.875-.505 4.479-.336 4.479 1.25 0 .21.077.57.17.801.093.231.471 1.407.838 2.614.368 1.206.774 2.481.902 2.833.468 1.289.685 1.932.832 2.468.083.302.24.796.349 1.097.11.302.619 1.865 1.132 3.474.514 1.608 1 3.089 1.081 3.29.184.457.698 2.014.906 2.743.147.514.266.867.833 2.468.124.352.409 1.232.631 1.955.602 1.956 1.396 2.326 2.655 1.235a228.823 228.823 0 0 0 3.849-3.42 35.004 35.004 0 0 1 1.466-1.276c.285-.224.733-.615.996-.868.938-.904 3.571-3.269 4.108-3.689.3-.235.677-.551.836-.702.159-.15.654-.602 1.099-1.003.445-.402 1.306-1.183 1.912-1.737a74.531 74.531 0 0 1 1.98-1.739 61.915 61.915 0 0 0 2.004-1.781 56.364 56.364 0 0 1 2.07-1.828c1.156-.956 1.516-1.533 1.719-2.755.246-1.476.543-2.873.827-3.889.143-.512.26-1.139.26-1.394 0-.255.124-.814.275-1.241.151-.427.274-.986.274-1.241 0-.255.117-.882.26-1.394a31.53 31.53 0 0 0 .461-1.935c.111-.553.318-1.541.46-2.194 1.156-5.31 1.354-6.242 1.569-7.404.111-.603.32-1.497.463-1.986.143-.49.26-1.162.26-1.496 0-.437.166-.774.596-1.213.851-.868 1.75-1.612 1.947-1.612a.265.265 0 0 0 .23-.154c.034-.084.801-.79 1.706-1.568 4.953-4.259 14.711-13.925 18.584-18.409 1.383-1.602 1.613-1.863 2.317-2.63.37-.402 1.14-1.311 1.713-2.02a51.246 51.246 0 0 1 1.463-1.743c.231-.249.995-1.192 1.698-2.093a219.63 219.63 0 0 1 1.502-1.913c.945-1.151 2.156-2.714 2.403-3.1.164-.256.381-.558.483-.672a7.59 7.59 0 0 0 .459-.608c.151-.221.644-.925 1.097-1.565.452-.639 1.11-1.582 1.462-2.094.605-.881 1.035-1.459 1.46-1.963.102-.121.186-.29.186-.374 0-.084.126-.314.28-.511.498-.635 1.548-2.304 1.548-2.46 0-.083.062-.179.137-.212.194-.086.96-1.202.96-1.398 0-.089.236-.489.525-.888.289-.399.583-.905.653-1.124.069-.22.203-.399.297-.399.093 0 .17-.091.17-.203 0-.112.399-.873.887-1.691.488-.818.942-1.611 1.009-1.762.068-.151.401-.768.74-1.371 1.141-2.028 3.723-7.37 4.616-9.552.352-.861.791-1.884 1.078-2.514.137-.302.303-.776.368-1.053.065-.278.191-.55.28-.605.09-.055.163-.227.163-.382s.12-.541.266-.858c.324-.702.804-2.027 1.002-2.769.081-.302.229-.755.33-1.006.209-.524.844-2.667 1.57-5.302.512-1.859 1.101-4.628 1.488-6.995.144-.882.306-1.675.361-1.763.529-.856.77-13.902.276-14.909-.321-.654-.971-.9-3.109-1.176-1.438-.186-9.337-.295-9.512-.131m-48.796 45.279c2.783.38 5.393 1.456 7.469 3.078 1.499 1.172 3.865 3.74 3.865 4.196 0 .115.062.209.138.209.075 0 .33.391.566.869.237.477.511 1.023.611 1.212.404.768 1.03 3.532 1.335 5.898.598 4.632-2.83 11.509-7.129 14.303-.402.262-.772.528-.823.591-.05.064-.626.361-1.279.66-4.821 2.205-11.518 1.669-16.147-1.292-2.791-1.786-6.703-6.665-6.705-8.364 0-.161-.14-.572-.311-.914-.472-.948-.462-6.966.015-8.392 1.565-4.679 4.685-8.706 7.883-10.174.301-.139.672-.321.822-.406.449-.25 1.51-.707 2.194-.944.914-.317 4.742-.892 5.393-.811.302.038 1.248.165 2.103.281M18.786 205.265c-.769.04-1.091.138-1.202.366-.168.341.16 7.117.505 10.457 1.414 13.677 3.081 22.65 6.302 33.915 1.542 5.394 3.967 12.714 4.965 14.988a81.6 81.6 0 0 1 .904 2.285 143.753 143.753 0 0 0 3.233 7.668c.399.86.893 1.934 1.098 2.387.799 1.767 2.941 6.048 4.072 8.135a130.013 130.013 0 0 1 1.315 2.468c.069.151.481.878.915 1.615.434.737.789 1.372.789 1.411 0 .067 2.365 4.052 2.925 4.929.151.235.624.99 1.052 1.676 9.675 15.512 23.674 31.411 37.88 43.02 1.046.855 2.196 1.808 2.554 2.119.6.52 5.872 4.51 7.746 5.863 1.455 1.05 8.141 5.511 9.461 6.313.713.433 1.517.927 1.786 1.098.27.171 1.107.659 1.861 1.085.754.426 1.865 1.074 2.468 1.439 3.823 2.317 14.158 7.503 18.27 9.168.509.206 1.09.445 1.291.53 4.479 1.896 11.966 4.685 14.9 5.549.452.133 1.933.584 3.29 1.001 3.043.936 4.369 1.31 7.45 2.104 2.758.71 4.699 1.172 6.901 1.64.704.15 1.856.398 2.56.553.704.154 2.308.45 3.565.657 1.257.207 2.655.455 3.108.55.452.096 2.18.344 3.839.551 1.659.207 3.551.46 4.204.561 8.308 1.287 26.409 1.592 36.472.614l3.883-.377c.878-.085 1.005-.159 1.527-.887.874-1.216 1.811-1.2 1.811.032 0 .28.108.422.32.421.43-.001 5.207-.679 6.353-.901.503-.097 1.696-.309 2.651-.47 4.181-.706 10.068-2.001 14.625-3.219a983.66 983.66 0 0 1 2.285-.608c6.483-1.715 17.434-5.582 23.583-8.329.202-.09.777-.338 1.28-.552 4.737-2.015 12.694-6.034 17.002-8.589.804-.477 1.545-.898 1.645-.936.189-.072 1.995-1.141 2.742-1.624.234-.15.823-.511 1.31-.802 18.386-10.975 39.019-30.236 51.917-48.466 2.488-3.516 3.778-5.418 5.455-8.044a104.04 104.04 0 0 1 1.395-2.141c.189-.272.344-.539.344-.592 0-.054.373-.642.829-1.308.932-1.362.939-1.337-.555-2.07-3.313-1.624-6.992-.794-10.059 2.269-1.447 1.446-1.831 2.055-3.023 4.802-.477 1.097-.492 1.103-1.409.543-4.934-3.012-12.153-.935-14.478 4.164a27.519 27.519 0 0 1-.616 1.28c-.662 1.208-.289 5.44.636 7.209.38.726.291.904-.798 1.591-.876.553-.845.557-2.196-.263-3.589-2.175-9.286-2.703-12.361-1.144a65.51 65.51 0 0 1-1.343.631c-.573.263-1.092.56-1.154.66-.214.347-1.173.18-1.956-.341-2.534-1.69-6.984-2.436-9.378-1.574-.402.145-.855.268-1.005.273-.151.005-.604.168-1.006.362-.402.194-.802.356-.889.359-.314.013-2.734 1.724-3.708 2.623-1.916 1.767-2.963 3.306-4.342 6.387-.492 1.098-.905 1.311-1.712.883-.175-.092-1.351-.308-2.613-.478-8.454-1.143-16.539 1.946-19.636 7.502-.675 1.21-1.288 2.653-1.458 3.428-.091.416-.384.634-1.706 1.269-2.009.966-4.61 2.723-5.902 3.987-1.339 1.311-.83 1.396-4.108-.687a4.477 4.477 0 0 0-.635-.335 24.54 24.54 0 0 1-1.006-.44c-2.93-1.343-8.263-2.217-10.218-1.676-1.013.281-1.269.073-2.167-1.757-1.536-3.131-3.861-5.888-6.262-7.424a68.418 68.418 0 0 1-1.592-1.047c-.273-.19-.606-.345-.741-.345-.134 0-.341-.097-.458-.214-.21-.21-.591-.364-2.602-1.053-3.516-1.204-8.793-1.052-12.157.35-3.153 1.314-4.148 1.96-6.621 4.299-1.85 1.749-2.741 2.925-3.668 4.844-1.207 2.497-1.273 2.765-1.758 7.113-.338 3.032-.66 3.279-3.127 2.39-5.867-2.114-14.116-2.381-20.384-.661-1.546.424-3.934 1.249-4.527 1.564-.174.093-.921.464-1.658.824-.737.359-1.787.95-2.333 1.313-1.017.675-1.902.596-1.902-.168 0-.36-.954-2.07-2.043-3.662-1.342-1.961-3.899-4.56-5.785-5.879-1.279-.895-1.693-1.135-3.324-1.926-.855-.415-1.697-.83-1.871-.922-.175-.093-.409-.169-.521-.169-.112 0-.463-.114-.78-.254-3.241-1.433-10.259-1.337-14.653.2-.703.246-1.437.496-1.629.554-.193.059-.892.394-1.554.745-.662.35-1.451.76-1.753.911-.301.15-.976.597-1.499.993-1.276.968-1.496.889-1.905-.681-.69-2.648-1.49-4.838-2.371-6.49-.904-1.694-1.204-2.209-1.663-2.851-.519-.726-.584-1.541-.144-1.813.081-.05.324-.481.541-.958.217-.477.472-.991.566-1.142.2-.321.156-.212.875-2.193.516-1.423.686-2.198 1.123-5.119.194-1.297.197-4.583.006-5.759-.366-2.247-.836-4.188-1.284-5.302-.936-2.326-2.951-5.749-3.922-6.662-.651-.611-.59-.957.308-1.755.428-.379 1.477-1.356 2.333-2.169.856-.814 1.8-1.67 2.098-1.903.297-.233 1.164-1.015 1.927-1.737.763-.722 2.005-1.889 2.759-2.593.755-.704 2.478-2.316 3.829-3.582a942.56 942.56 0 0 1 2.934-2.742c.262-.242 1.445-1.345 2.628-2.451a658.242 658.242 0 0 1 2.63-2.449 556.11 556.11 0 0 0 3.04-2.851 1067.128 1067.128 0 0 1 5.612-5.26c.347-.325 1.559-1.455 2.693-2.511 3.333-3.102 3.428-3.663 1.045-6.184-2.423-2.563-3.261-2.619-5.616-.372-.46.438-1.368 1.291-2.019 1.894-.65.603-2.278 2.125-3.619 3.382-1.34 1.257-2.736 2.562-3.1 2.9-.887.82-2.145 1.992-5.421 5.047a1636.835 1636.835 0 0 1-3.734 3.473c-.547.506-1.658 1.551-2.468 2.322a93.098 93.098 0 0 1-1.925 1.794c-.249.216-1.035.942-1.746 1.615-.712.672-2.437 2.292-3.834 3.599a508.388 508.388 0 0 0-4.378 4.148c-3.501 3.374-3.121 3.22-5.264 2.136-.175-.089-.833-.242-1.462-.341-.63-.099-1.515-.26-1.967-.357a9.58 9.58 0 0 0-1.6-.185c-.983-.01-1.011-.315-.105-1.136.37-.335 1.46-1.355 2.423-2.266 1.61-1.525 3.07-2.885 5.671-5.285.548-.505 1.699-1.588 2.559-2.405.86-.818 2.006-1.886 2.548-2.375a149.86 149.86 0 0 0 1.736-1.596l3.311-3.109a790.774 790.774 0 0 1 5.026-4.688 936.09 936.09 0 0 0 2.964-2.795 250.66 250.66 0 0 1 3.028-2.834c.433-.376 4.401-4.079 6.71-6.262a536.048 536.048 0 0 1 5.29-4.928c.598-.553 1.917-1.793 2.93-2.755a365.76 365.76 0 0 1 4.784-4.462l1.98-1.833c3.051-2.818 3.117-3.369.724-6.055-2.226-2.5-3.269-2.513-5.83-.072a548.293 548.293 0 0 1-5.837 5.498l-1.382 1.269c-.163.151-1.497 1.409-2.963 2.795a233.477 233.477 0 0 1-3.053 2.856c-.302.262-4.214 3.915-5.213 4.868-.109.104-1.433 1.335-2.941 2.734a1019.76 1019.76 0 0 0-3.817 3.558 75.556 75.556 0 0 1-1.29 1.197c-.117.1-.95.882-1.85 1.738-.899.855-2.701 2.541-4.004 3.747a893.236 893.236 0 0 0-3.839 3.574c-.809.759-1.998 1.87-2.642 2.468-.645.598-1.432 1.334-1.749 1.635-.317.302-1.023.962-1.57 1.466a675.31 675.31 0 0 0-4.193 3.946 851.11 851.11 0 0 1-4.366 4.11c-.642.595-1.552 1.452-2.023 1.904-6.034 5.797-6.812 6.359-6.384 4.611.42-1.715.522-2.937.523-6.275l.001-3.583 2.331-2.168a550.996 550.996 0 0 0 2.623-2.449c.485-.467 3.806-3.517 4.235-3.889.22-.191.986-.897 1.701-1.569.716-.672 2.321-2.169 3.566-3.325a857.236 857.236 0 0 0 3.731-3.483 522.5 522.5 0 0 1 2.638-2.468c.644-.598 1.431-1.334 1.748-1.636.317-.301 1.723-1.617 3.124-2.923s3.165-2.956 3.919-3.665c.754-.71 1.902-1.78 2.55-2.379 7.954-7.343 8.293-7.741 7.852-9.214-.308-1.028-2.758-3.557-3.698-3.816-1.418-.391-1.55-.298-7.428 5.27-.372.352-1.163 1.091-1.758 1.643-.596.551-1.823 1.703-2.728 2.559a484.34 484.34 0 0 1-3.657 3.41 362.35 362.35 0 0 0-5.037 4.706 815.569 815.569 0 0 1-6.396 5.963c-.163.151-.907.85-1.654 1.554l-4.266 4.022-4.189 3.951c-1.473 1.39-1.706 1.41-2.264.197-2.718-5.91-9.167-11.255-16.047-13.299-1.721-.511-6.108-1.035-7.702-.921-1.671.121-1.693.109-2.17-1.171-1.055-2.834-1.959-4.373-3.589-6.113-1.072-1.143-3.509-3.028-3.915-3.028-.074 0-.472-.153-.886-.34-1.397-.633-2.026-.779-3.827-.887-2.154-.129-2.317-.244-2.317-1.639 0-1.433-1.035-5.854-1.489-6.357-.086-.095-.157-.301-.159-.457-.002-.268-.448-1.203-1.512-3.168-1.398-2.582-4.43-5.766-7.157-7.518-.779-.5-3.602-1.937-3.805-1.937-.096 0-.433-.118-.75-.262-1.15-.523-2.998-.88-5.146-.993l-2.194-.116-.058-.607a1.807 1.807 0 0 1 .268-1.097c.493-.742.493-6.345-.001-7.533-1.143-2.751-1.943-3.908-3.549-5.136-2.214-1.693-3.934-2.189-7.033-2.026"
        />
        <path
          fill={forceColor ?? '#fba672'}
          d="M189.762 17.386c-.955.082-2.97.238-4.479.346-6.47.465-12.707 1.308-20.292 2.74-3.148.595-8.935 1.937-12.202 2.831l-2.011.55c-.529.144-1.537.435-2.241.646-.703.21-1.526.45-1.828.531-.974.265-4.196 1.32-4.485 1.469-.154.08-.562.208-.908.283-.345.076-.754.204-.908.283-.154.08-.815.326-1.468.546a28.07 28.07 0 0 0-1.765.655c-.317.139-.663.253-.77.253-.108 0-.465.116-.796.258a228.62 228.62 0 0 1-4.348 1.744c-.553.217-1.17.468-1.371.557-.201.09-.777.337-1.279.549-3.512 1.481-11.133 5.132-14.443 6.919-2.951 1.593-3.782 2.056-4.486 2.5-.408.258-.923.547-1.144.643-.407.177-.549.261-1.865 1.098-.402.257-.855.525-1.006.597a8.71 8.71 0 0 0-.764.448c-.269.175-1.092.681-1.828 1.125-7.397 4.46-16.279 11.148-25.265 19.024-2.518 2.207-9.089 8.668-11.635 11.44-3.013 3.281-6.345 7.106-7.954 9.131-.399.503-.774.955-.833 1.006-.744.635-6.257 8.189-9.073 12.431a660.816 660.816 0 0 1-2.382 3.575c-.168.235-.228.332-1.966 3.189l-1.559 2.56c-.589.955-2.006 3.467-2.006 3.556 0 .059-.197.419-.437.8-1.418 2.246-6.176 11.888-7.687 15.576-.266.65-.559 1.347-.649 1.548-.21.466-.756 1.775-1.183 2.834-.182.453-.434 1.07-.56 1.371-1.153 2.762-4.367 12.198-5.387 15.814a322.118 322.118 0 0 1-.839 2.925c-.363 1.22-1.252 4.773-1.714 6.855a75.16 75.16 0 0 1-.56 2.377c-.084.302-.329 1.494-.544 2.651a174.378 174.378 0 0 1-.645 3.29 73.36 73.36 0 0 0-.536 2.971l-.551 3.474c-1.185 7.456-1.989 18.72-1.895 26.547l.061 5.111 2.559.018c3.769.026 5.998 1.162 8.248 4.201 1.975 2.669 2.688 8.997 1.259 11.178-.489.746-.161.988 1.473 1.084 10.656.628 19.767 9.606 20.674 20.371.161 1.918.23 2.01 1.488 2.012 5.634.005 11.224 4.479 13.019 10.419.39 1.288.302 1.254 3.2 1.251 1.445-.001 3.106.093 3.69.209 2.511.5 3.669.795 4.389 1.12.422.19.86.345.975.345.561 0 4.407 2.204 6.113 3.503 3.035 2.311 5.914 5.719 7.488 8.863.259.517.575.98.702 1.029.214.082 4.354-3.669 6.069-5.499 1.435-1.531 3.678-3.747 4.821-4.763a123.3 123.3 0 0 0 2.683-2.493c.838-.804 1.921-1.822 2.406-2.261.486-.44 1.419-1.304 2.074-1.92.655-.616 2.038-1.902 3.072-2.857a353.72 353.72 0 0 0 2.748-2.56c.477-.452 1.931-1.81 3.232-3.016 1.301-1.207 2.583-2.4 2.848-2.651l3.02-2.86c5.038-4.774 5.233-4.8 8.572-1.143 2.324 2.545 1.691 3.796-4.733 9.364-.444.384-3.93 3.644-5.216 4.877-.472.452-1.794 1.686-2.938 2.742a239.748 239.748 0 0 0-2.929 2.742 308.48 308.48 0 0 1-3.211 3.017 703.894 703.894 0 0 0-3.717 3.473c-.745.704-1.576 1.485-1.847 1.737-.271.251-1.541 1.444-2.822 2.651-1.282 1.206-2.561 2.317-2.843 2.468-.541.29-5.638 4.943-8.088 7.385l-.715.713.12 2.212c.11 2.018-.107 4.834-.582 7.56-.169.976.163.751 3.379-2.283a1292.28 1292.28 0 0 1 4.132-3.884c1.061-.989 3.099-3.031 4.473-4.482.578-.611 2.969-2.88 5.587-5.302.326-.301 1.655-1.543 2.952-2.759a485.044 485.044 0 0 1 2.907-2.709 554.81 554.81 0 0 0 5.928-5.527 97.416 97.416 0 0 1 2.272-2.102 73.355 73.355 0 0 0 1.94-1.802c.681-.654 1.763-1.672 2.404-2.263.642-.59 1.744-1.619 2.449-2.285.705-.666 2.218-2.075 3.363-3.131a260.365 260.365 0 0 0 2.557-2.38c.481-.465 1.445-1.362 5.394-5.024a509.497 509.497 0 0 0 2.648-2.468c.265-.251 1.545-1.444 2.845-2.65a1479.86 1479.86 0 0 0 4.331-4.034c1.883-1.754 2.989-1.624 5.162.608 2.518 2.587 2.65 4.187.481 5.827-.151.114-.859.772-1.572 1.462-.714.691-1.824 1.741-2.468 2.333-.644.593-1.788 1.663-2.542 2.377-.754.714-2.388 2.245-3.631 3.401a457.89 457.89 0 0 0-3.121 2.925c-.473.453-1.794 1.687-2.935 2.742a357.907 357.907 0 0 0-2.648 2.468c-.692.663-5.415 5.087-6.928 6.49-.596.553-1.428 1.335-1.848 1.737-.421.402-1.867 1.76-3.214 3.016a1712.418 1712.418 0 0 0-5.667 5.302c-.265.251-1.289 1.198-2.274 2.102-.985.905-2.088 1.921-2.45 2.258-1.797 1.67-4.357 4.063-5.286 4.941-3.114 2.944-5.026 4.701-5.258 4.831-.428.24-.321.821.151.816.731-.007 4.589.91 5.509 1.309 1.24.538 1.212.556 4.948-3.158 2.972-2.954 4.912-4.807 8.852-8.455.641-.594 1.726-1.614 2.411-2.267.685-.654 2.13-2.011 3.213-3.017a708.033 708.033 0 0 0 3.257-3.045c.709-.67 1.535-1.441 1.837-1.714.869-.788 4.237-3.927 5.289-4.93.527-.503 1.806-1.696 2.842-2.651a290.242 290.242 0 0 0 2.361-2.194c4.103-3.93 4.49-3.982 7.41-1.005 2.834 2.89 2.756 3.274-1.465 7.221l-4.198 3.931c-1.395 1.307-3.066 2.87-3.714 3.473a212.07 212.07 0 0 0-1.75 1.646 283.33 283.33 0 0 1-2.555 2.376 485.47 485.47 0 0 0-3.743 3.491c-.966.915-2.24 2.108-2.831 2.651-.591.543-1.465 1.358-1.942 1.811-4.445 4.213-5.815 5.464-6.465 5.902-.416.281-1.695 1.391-2.842 2.468-1.148 1.077-2.238 2.066-2.423 2.198-.414.294-.434.823-.044 1.147.705.585 1.994 2.478 2.976 4.372 3.534 6.814 3.314 16.401-.52 22.631-.705 1.147-.707 1.13.26 2.585 1.536 2.31 3.428 6.933 3.84 9.382.146.868.339.86 1.668-.072 9.474-6.636 22.357-5.64 30.38 2.35 2.204 2.195 4.775 5.779 5.239 7.303.199.653.655.673 1.502.064 5.533-3.973 16.651-6.006 24.065-4.401 2.199.476 4.556 1.105 5.589 1.492l1.16.433.587-.641c.627-.684.731-1.415.737-5.157.001-.678.055-1.234.121-1.234s.172-.329.236-.731c.065-.402.189-.731.278-.731.088 0 .214-.288.28-.64.066-.352.199-.64.295-.64.096 0 .174-.159.174-.353 0-.193.104-.461.231-.594.127-.133.332-.447.455-.698.467-.948 1.259-1.874 2.429-2.84a76.602 76.602 0 0 0 1.682-1.49c7.425-6.737 19.559-6.087 26.556 1.423 1.539 1.652 3.748 5.134 3.748 5.909 0 .498.617.631 2.417.524 4.175-.249 9.169 1.171 12.813 3.643l1.063.721.857-.796a25.661 25.661 0 0 1 6.107-4.215c1.606-.797 1.54-.722 2.123-2.401 2.692-7.755 13.419-12.067 23.453-9.427 1.074.282 1.167.232 1.616-.878 3.575-8.835 13.618-13.043 20.337-8.521 1.153.776 1.164.775 3.152-.188 4.587-2.223 9.648-2.051 13.793.467 1.303.792 1.556.782 2.664-.101.508-.405.522-.453.262-.865-1.28-2.017-1.421-6.068-.295-8.455 2.569-5.447 9.276-7.519 14.806-4.575l.872.464.279-.698c2.728-6.834 8.341-9.856 13.535-7.289 1.618.799 1.602.8 2.03-.038.528-1.031 1.727-3.219 1.878-3.427.467-.641 5.005-9.523 6.074-11.887.57-1.262 1.734-3.848 1.973-4.384.09-.201.337-.777.549-1.28.212-.502.459-1.078.549-1.279.089-.201.34-.818.557-1.371a228.62 228.62 0 0 1 1.744-4.348c.142-.331.258-.688.258-.796 0-.107.114-.453.253-.77.14-.317.434-1.111.655-1.765.22-.653.466-1.314.546-1.468.079-.154.207-.563.283-.908.075-.346.203-.754.283-.908.149-.289 1.204-3.511 1.469-4.485.081-.302.321-1.125.531-1.828.211-.704.507-1.733.657-2.286l.549-2.011c.899-3.262 2.052-8.209 2.728-11.7.921-4.758 1.053-5.551 1.85-11.152.327-2.304.723-6.018.974-9.14l.402-5.028c.284-3.552.286-16.746.004-20.292l-.409-5.119c-.395-4.934-1.294-12.091-1.996-15.905-.527-2.859-1.234-6.431-1.503-7.587-.105-.452-.299-1.316-.431-1.919a90.05 90.05 0 0 0-.526-2.24c-.157-.628-.401-1.616-.542-2.194a110.62 110.62 0 0 0-.657-2.513c-.221-.805-.467-1.71-.548-2.011a139.8 139.8 0 0 0-.815-2.743 98.522 98.522 0 0 1-.844-2.885c-.097-.381-.248-.833-.336-1.006-.088-.172-.346-.93-.574-1.684-.227-.755-.473-1.454-.547-1.554-.074-.101-.193-.456-.264-.79a5.199 5.199 0 0 0-.386-1.097c-.14-.269-.256-.583-.257-.696 0-.113-.253-.854-.562-1.645a425.04 425.04 0 0 1-.823-2.125 119.056 119.056 0 0 0-1.753-4.342l-.442-1.054a54.016 54.016 0 0 0-.518-1.188 112.5 112.5 0 0 1-.661-1.506c-.625-1.457-1.066-2.411-2.212-4.783-.59-1.223-1.074-2.313-1.074-2.423 0-.109-.082-.198-.182-.198-.101 0-.184-.103-.186-.228-.001-.126-.232-.681-.513-1.234-.47-.923-.919-1.756-2.684-4.978-.346-.631-.721-1.373-.835-1.649-.113-.277-.28-.503-.371-.503-.09 0-.165-.09-.165-.2 0-.261-3.665-6.454-3.867-6.534-.085-.033-.155-.161-.155-.283 0-.122-.126-.382-.28-.579-.519-.663-1.548-2.307-1.548-2.475 0-.092-.069-.167-.153-.167-.085 0-.25-.185-.368-.411-.45-.864-1.876-2.94-2.084-3.032-.075-.033-.137-.144-.137-.245 0-.102-.144-.373-.32-.604-.176-.23-.443-.601-.594-.824a178.365 178.365 0 0 0-2.011-2.745 166.591 166.591 0 0 1-2.011-2.746 6.895 6.895 0 0 0-.463-.613c-.104-.113-.76-.946-1.459-1.851-.699-.905-1.359-1.728-1.466-1.828-.108-.101-.52-.594-.916-1.097a43.775 43.775 0 0 0-1.821-2.174 60.765 60.765 0 0 1-1.006-1.205c-1.792-2.187-4.572-5.139-9.132-9.7-4.974-4.973-7.032-6.89-10.789-10.047a51.647 51.647 0 0 1-1.177-1.01c-.11-.102-.61-.509-1.113-.904s-.996-.806-1.097-.914c-.1-.107-.923-.767-1.828-1.466s-1.738-1.355-1.851-1.459a6.715 6.715 0 0 0-.616-.463 31.068 31.068 0 0 1-1.555-1.145 221.577 221.577 0 0 0-3.933-2.877 41.725 41.725 0 0 1-1.196-.868c-.435-.327-.845-.594-.912-.594-.067 0-.434-.247-.814-.549-.381-.302-.746-.548-.811-.548-.163 0-1.278-.791-1.353-.96a.25.25 0 0 0-.212-.137c-.156 0-1.825-1.051-2.46-1.548-.197-.154-.457-.28-.579-.28-.122 0-.25-.069-.283-.152-.034-.084-.637-.499-1.341-.924-.704-.424-1.403-.848-1.554-.941-1.301-.802-3.487-2.005-3.644-2.005-.107 0-.195-.075-.195-.165 0-.091-.226-.259-.503-.374-.491-.203-.902-.422-3.702-1.966-2.203-1.215-3.913-2.064-4.159-2.065-.125 0-.228-.083-.228-.184 0-.1-.089-.182-.198-.182-.11 0-1.2-.487-2.423-1.081-2.723-1.322-5.032-2.393-5.163-2.393-.053 0-.484-.17-.956-.379-.472-.208-1.146-.502-1.498-.652-.352-.15-.804-.345-1.005-.433-.638-.28-3.631-1.486-4.296-1.732a75.011 75.011 0 0 1-2.886-1.118c-.33-.141-.7-.257-.823-.257-.122-.001-.443-.117-.712-.257a5.199 5.199 0 0 0-1.097-.386c-.334-.071-.689-.189-.79-.262-.187-.136-3.398-1.221-4.387-1.483a88.826 88.826 0 0 1-2.377-.716 106.92 106.92 0 0 0-2.833-.846c-2.957-.809-3.842-1.045-4.799-1.278-.578-.141-1.566-.385-2.194-.542a90.05 90.05 0 0 0-2.24-.526c-.603-.132-1.467-.326-1.919-.431-1.156-.269-4.728-.976-7.587-1.503-1.142-.21-3.34-.541-6.764-1.017-2.374-.33-6.16-.717-9.598-.982l-4.845-.373c-2.77-.214-17.657-.201-20.201.018m16.964.166c4.23.173 5.499.257 11.098.732 2.32.197 5.97.615 7.953.912 6.391.958 10.398 1.716 15.905 3.012 10.612 2.495 22.564 6.435 30.804 10.152.201.091.654.28 1.006.42 1.926.77 11.34 5.385 13.985 6.856 3.168 1.763 5.948 3.376 7.859 4.56 3.252 2.016 3.726 2.322 7.126 4.601 2.843 1.907 3.806 2.59 7.407 5.26 10.947 8.119 23.37 20.145 32.255 31.226a613.87 613.87 0 0 0 1.912 2.377c2.212 2.697 7.208 9.763 9.83 13.9a219.085 219.085 0 0 1 6.407 10.78c.806 1.446 5.306 10.456 5.979 11.974.29.654.771 1.723 1.067 2.377 3.743 8.24 8.06 21.249 10.466 31.536.813 3.477.91 3.938 1.807 8.592 6.61 34.307 2.314 72.572-11.822 105.302-3.221 7.458-9.896 20.381-10.604 20.529-.141.03-.864-.251-1.606-.623-2.767-1.389-7.267-.675-9.438 1.496a5.756 5.756 0 0 1-.576.486c-.356.257-2.09 2.449-2.279 2.883a7.061 7.061 0 0 1-.277.549c-.319.555-.732 1.567-.838 2.05-.114.521-.469.527-.986.016a.942.942 0 0 0-.572-.238c-.181 0-.432-.124-.557-.274-.126-.151-.372-.275-.549-.275-.176 0-.616-.123-.977-.274-.898-.375-3.97-.366-5.263.015-1.145.338-3.632 1.54-3.632 1.756 0 .082-.091.149-.203.149-.255 0-2.174 1.905-2.174 2.158 0 .103-.061.215-.137.249-.211.094-.959 1.21-.959 1.431 0 .108-.114.379-.253.601-1.089 1.745-1.014 5.075.174 7.712l.409.909-.668.411c-.827.509-.964.514-1.491.057-.231-.201-.532-.366-.667-.366-.136 0-.247-.076-.247-.17 0-.094-.185-.223-.411-.287a9.118 9.118 0 0 1-1.003-.383c-1.505-.678-1.905-.793-3.711-1.061-2.472-.368-5.91.142-7.811 1.157a6.87 6.87 0 0 1-.592.276c-.151.059-.521.269-.823.468-.883.583-1.002.609-1.346.297-.18-.163-.424-.297-.542-.297-.118 0-.214-.08-.214-.179 0-.099-.202-.23-.45-.292-.247-.062-.545-.228-.662-.369-.117-.141-.392-.257-.611-.257-.219 0-.499-.1-.622-.224-.684-.684-4.494-1.042-6.405-.601-1.926.443-4.596 1.479-4.596 1.783 0 .076-.089.139-.199.139-.11 0-.388.144-.619.32-.23.176-.608.444-.838.594-.632.414-2.914 2.697-2.914 2.917 0 .105-.074.191-.165.191-.374 0-2.76 4.086-2.76 4.726 0 .562-1.665.688-2.317.175-.626-.493-9.329-.489-10.221.005-.193.107-.739.244-1.215.306-.475.061-.912.189-.97.283-.059.095-.23.173-.38.173s-.619.152-1.04.338c-.422.187-.891.392-1.042.456-1.029.44-3.787 2.423-4.661 3.352-1.423 1.51-2.541 3.119-2.751 3.957-.067.269-.189.489-.27.489-.08 0-.205.348-.277.773-.172 1.019-.573 1.603-1.1 1.603-.234 0-.473.078-.531.172-.058.094-.536.388-1.062.653-1.672.843-1.962 1.02-1.962 1.196 0 .095-.091.173-.202.173-.253 0-1.446.921-2.593 2.002-1.198 1.129-1.331 1.185-1.769.746-.205-.204-.444-.371-.532-.371-.089 0-.246-.103-.351-.229-.323-.39-3.982-2.148-4.47-2.148a.7.7 0 0 1-.429-.181c-.099-.1-.548-.259-.996-.354a39.486 39.486 0 0 1-1.546-.366c-.403-.107-2.072-.187-3.709-.178-3.265.017-3.404-.023-3.593-1.03-.065-.348-.197-.633-.293-.633-.096 0-.175-.088-.175-.197 0-.301-1.482-2.728-1.666-2.728a.164.164 0 0 1-.162-.164c0-.299-1.723-2.158-3.222-3.475-1.174-1.032-4.688-3.123-5.251-3.125-.086 0-.415-.121-.732-.268-.597-.278-1.629-.56-3.044-.832-1.157-.223-5.977-.209-6.855.019a63.36 63.36 0 0 1-1.554.375 8.826 8.826 0 0 0-1.399.445c-.317.144-.708.261-.868.261-.161 0-.293.073-.293.163 0 .089-.2.213-.444.274-.377.095-1.384.657-2.917 1.629-.19.121-.56.414-.823.652-1.967 1.785-2.271 1.622-.704-.379 7.353-9.384 21.013-9.544 28.024-.328.977 1.283 1.074 1.441 1.815 2.938 1.056 2.134.545 1.891 4.242 2.017 3.199.11 4.191.269 6.27 1.008 1.233.438 3.274 1.496 4.233 2.195 1.089.794 1.182.783 2.274-.251a23.492 23.492 0 0 1 1.518-1.326c.331-.251.713-.56.848-.685.135-.126.288-.229.34-.229.053 0 .449-.237.882-.527.432-.289 1.344-.786 2.026-1.103 1.326-.616 1.282-.558 2.15-2.849 2.387-6.294 10.73-9.842 19.585-8.328 1.143.195 2.213.406 2.376.469.378.145 1.008-.513 1.162-1.213.063-.287.313-.872.555-1.3.243-.429.497-.903.566-1.054.309-.675 2.368-3.154 3.141-3.781.468-.38.879-.755.913-.832a.257.257 0 0 1 .219-.14c.087 0 .513-.234.945-.52 3.681-2.436 8.48-2.415 12.651.056.891.528.898.529 1.462.199 3.291-1.927 7.464-2.586 10.413-1.644 1.056.338 1.073.338 1.324-.017.793-1.12 1.737-1.685 3.155-1.888l.849-.121.024-1.461c.074-4.546 2.665-7.903 7.042-9.124 2.031-.566 4.256-.365 6.697.607 1.368.544 1.342.559 2.241-1.294 1.486-3.062 3.241-4.81 6.301-6.277.86-.412 2.283-2.098 2.283-2.704 0-.104.111-.319.247-.478.325-.38.739-1.939.607-2.284-.122-.318-.074-.335 2.346-.843 2.451-.514 2.492-.529 2.439-.879-.026-.167.19-.675.479-1.127.642-1.002 2.109-4.13 2.109-4.494 0-.145.617-1.496 1.371-3.001.754-1.506 1.371-2.865 1.371-3.02 0-.155.247-.77.549-1.368.301-.598.548-1.184.548-1.302 0-.119.247-.739.549-1.377.301-.639.548-1.283.548-1.431 0-.149.241-.786.535-1.417.295-.63.672-1.617.838-2.192.167-.575.452-1.235.634-1.467.192-.244.365-.841.413-1.422.045-.55.19-1.289.321-1.641.132-.352.268-.722.302-.822.034-.101.134-.306.222-.457.253-.434.57-1.425 1.026-3.2.232-.905.503-1.851.602-2.102.344-.878.591-1.766.591-2.124 0-.199.083-.445.184-.546.101-.1.256-.761.344-1.467.089-.706.305-1.561.479-1.899.323-.623.89-2.92 1.174-4.75.085-.553.455-2.482.821-4.287.366-1.805.632-3.371.59-3.48-.082-.212.528-4.013.684-4.266.052-.083.265-1.79.473-3.794.209-2.004.462-3.972.563-4.374.1-.402.212-1.965.249-3.474.038-1.508.163-3.565.28-4.57.175-1.52.162-11.744-.019-13.985-.02-.252-.019-1.033.003-1.737.041-1.302-.238-6.165-.429-7.496l-.291-2.011c-.102-.703-.25-2.472-.329-3.93-.092-1.717-.25-2.941-.449-3.474-.169-.452-.396-1.686-.505-2.742-.109-1.056-.278-2.29-.376-2.742-.356-1.637-.538-2.675-.692-3.938-.087-.708-.363-1.9-.614-2.651-.252-.75-.509-1.852-.573-2.448-.063-.597-.187-1.173-.274-1.28-.14-.172-.485-1.464-.832-3.12-.23-1.095-.625-2.757-.805-3.382-.1-.352-.346-1.227-.545-1.945-.199-.718-.533-1.64-.742-2.049-.209-.41-.381-.974-.383-1.255-.002-.28-.222-1.086-.488-1.789-.266-.704-.505-1.65-.533-2.103a24.528 24.528 0 0 0-.061-.879c-.021-.102-1.186.596-2.151 1.291-.524.377-1.032.685-1.128.685-.096 0-.223.103-.282.229-.058.125-.061-.156-.006-.626.088-.754.002-1.049-.731-2.51-.458-.911-.832-1.796-.832-1.968 0-.171-.148-.481-.328-.689-.181-.208-.478-.871-.661-1.474a25.038 25.038 0 0 0-.86-2.3c-.29-.662-.528-1.299-.528-1.416 0-.118-.244-.73-.542-1.361-.339-.718-.502-1.3-.436-1.555.169-.645-.316-.504-1.589.462-.63.477-1.317.991-1.528 1.142-.211.15-.54.415-.731.588-.192.172-.418.271-.503.218-.237-.147-.185-.763.073-.867.137-.056.1-.099-.091-.107-.255-.012-.32-.181-.32-.837 0-.61-.071-.823-.274-.823-.183 0-.275-.183-.275-.548 0-.302-.086-.549-.192-.549-.106 0-.443-.535-.748-1.188-.306-.654-.631-1.188-.722-1.188-.091 0-.166-.155-.166-.344a.847.847 0 0 0-.274-.57c-.151-.126-.274-.341-.274-.48 0-.138-.124-.252-.274-.252-.183 0-.275-.183-.275-.548 0-.366-.091-.549-.274-.549-.189 0-.274-.19-.274-.617 0-.34-.123-.72-.274-.845-.151-.125-.274-.506-.274-.845 0-.707-.199-.764-1.097-.316-1.028.513-1.377-.497-.601-1.738.195-.312.214-.486.069-.631a.802.802 0 0 1-.2-.494c0-.163-.246-.532-.548-.821-.302-.289-.549-.705-.549-.926 0-.22-.123-.503-.274-.628-.151-.125-.274-.372-.274-.548 0-.177-.123-.423-.274-.549-.151-.125-.274-.372-.274-.548 0-.176-.124-.423-.275-.548a.855.855 0 0 1-.274-.571c0-.189-.123-.344-.274-.344-.151 0-.274-.11-.274-.245 0-.335-.668-.919-.802-.702-.162.261-1.026.382-1.026.143 0-.112.185-.41.411-.66.545-.605 2.335-2.866 2.842-3.592l.404-.578-1.029-1.524c-.566-.839-1.108-1.747-1.203-2.017-.107-.302-.27-.455-.423-.396-.155.06-.384-.171-.612-.618-.2-.392-.488-.816-.64-.942-.152-.126-.332-.676-.4-1.224-.068-.547-.19-1.035-.27-1.085-.08-.049-.203-.439-.274-.866-.183-1.102-.264-1.243-1.634-2.839-.456-.531-.829-1.047-.829-1.146 0-.099-.464-.652-1.032-1.228-.568-.576-1.138-1.294-1.265-1.596-.128-.301-.493-.795-.812-1.097a5.464 5.464 0 0 1-.925-1.217c-.189-.368-.407-.697-.486-.733-.223-.102-3.392-3.498-3.798-4.072-.4-.564-.915-1.11-4.799-5.084-1.433-1.465-2.605-2.78-2.605-2.921 0-.171-.473-.362-1.417-.572-2.709-.604-2.969-.699-3.346-1.228-.244-.342-.558-.531-.948-.569-.509-.05-.605-.146-.747-.748-.109-.464-.321-.774-.645-.943-.266-.139-.876-.63-1.355-1.092-.48-.461-.976-.839-1.103-.839s-.722-.5-1.322-1.111c-.6-.611-1.338-1.238-1.64-1.394-.301-.156-1.055-.766-1.675-1.357-.62-.591-1.237-1.075-1.371-1.077-.134-.002-.638-.372-1.118-.823-.481-.45-.978-.819-1.106-.819-.127 0-.553-.329-.945-.732-.393-.402-.829-.731-.97-.731-.14 0-.492-.226-.782-.503-.851-.811-1.433-1.307-1.873-1.595-.474-.31-3.554-.998-5.105-1.14-.873-.08-1.051-.155-1.051-.44 0-.271-.136-.344-.64-.344-.517 0-.64-.07-.64-.363 0-.224-.275-.537-.718-.817a13.376 13.376 0 0 1-1.325-.977 9.625 9.625 0 0 0-1.202-.868c-.327-.189-.594-.409-.594-.488 0-.078-.199-.143-.443-.143s-.687-.206-.986-.457c-.299-.251-.648-.457-.777-.457-.128 0-.363-.116-.522-.257-.45-.401-4.619-2.485-4.97-2.485-.335 0-.349-.057-.723-2.925-.283-2.169-.659-3.152-1.145-2.998-.325.103-3.107-1.079-5.242-2.228-1.231-.662-4.548-2.252-5.073-2.432-1.473-.505-1.849-.645-2.879-1.075a52.82 52.82 0 0 0-1.463-.591 24.49 24.49 0 0 1-1.057-.432c-.381-.164-.81-.299-.955-.299-.145 0-.615-.154-1.045-.343-.923-.404-1.85-.733-2.61-.925-.302-.076-.895-.315-1.318-.532-.424-.217-1.043-.394-1.377-.394-.333 0-1.212-.29-1.952-.645-.74-.355-1.385-.605-1.434-.556-.049.049-.428-.088-.843-.303a6.404 6.404 0 0 0-1.577-.527c-1.213-.201-2.869-.623-4.12-1.049-.607-.207-1.471-.433-1.92-.501-.449-.069-.898-.186-.999-.26-.1-.074-.429-.182-.731-.24-.301-.058-1.124-.231-1.828-.384a26.337 26.337 0 0 0-2.377-.394c-.603-.064-1.202-.201-1.331-.307-.13-.105-.87-.305-1.646-.445l-2.324-.415a15.295 15.295 0 0 0-2.069-.176c-.635-.008-1.297-.09-1.472-.183-.174-.094-.836-.196-1.471-.227-1.23-.061-1.844-.489-1.844-1.284 0-.193-.087-.697-.193-1.118l-.193-.767h-1.589c-1.965 0-5.291-.268-5.827-.47-1.685-.635-19.574-.652-25.562-.024-1.005.106-2.527.24-3.382.299-3.565.245-5.847.448-7.295.648-.845.117-1.729.164-1.963.106-.486-.122-.964.117-1.807.904-.323.302-.825.746-1.114.988-.449.375-2.842 2.467-3.472 3.034a60.27 60.27 0 0 1-2.14 1.815l-.88.717-.549-.324c-.34-.201-.702-.278-.948-.203-1.034.316-2.141.606-4.786 1.252a29.52 29.52 0 0 0-1.645.449c-.302.1-.919.282-1.371.406a15.6 15.6 0 0 0-1.463.483c-.352.143-1.051.29-1.554.326-1.078.079-2.487.422-2.733.665-.095.095-.353.173-.572.173-.219 0-.5.123-.625.274-.126.151-.503.274-.839.274a3.7 3.7 0 0 0-1.212.256c-1.637.699-3.046 1.202-3.678 1.313-.386.067-1.189.359-1.785.648-.597.289-1.235.525-1.419.525-.184 0-.483.165-.665.366-.182.201-.527.365-.766.365-.238 0-.481.124-.539.275-.058.151-.282.277-.497.28-.216.004-.598.124-.849.268-.251.144-.749.264-1.106.268-.357.003-.745.102-.863.22-.117.117-.483.314-.813.436-.987.366-2.592 1.031-2.885 1.195-.504.281-1.724.852-3.108 1.456-.754.329-1.604.791-1.888 1.025-.342.283-.654.393-.924.325-.424-.106-4.953 2.066-5.326 2.555-.103.133-.843.585-1.646 1.004-.802.418-1.788.958-2.191 1.2a52.19 52.19 0 0 1-1.769.995c-.571.306-1.09.642-1.155.746-.065.105-.516.392-1.002.639-.486.246-.912.512-.947.591-.034.078-.68.466-1.434.861-1.759.923-2.726 1.698-2.854 2.287a7.295 7.295 0 0 1-.201.742c-.163.452-.567-1.377-.902-4.089-.268-2.17-.347-2.486-.547-2.194a3.27 3.27 0 0 1-.379.468l-.967.845c-.452.395-1.316.98-1.919 1.3-.604.32-1.348.824-1.654 1.12-.307.297-.685.539-.84.539-.156 0-.44.175-.632.389-.475.532-1.45 1.119-2.519 1.519l-.892.334 1.075.325a71.68 71.68 0 0 0 1.851.532c.913.242.995.468.227.622-.806.161-1.685.854-1.447 1.141.262.315-2.163 2.717-3.338 3.307-.484.243-.881.522-.881.619 0 .096-.946 1.139-2.102 2.315-1.156 1.177-2.102 2.096-2.102 2.042 0-1.69-.862-3.172-1.357-2.334-.17.288-.384.524-.476.524-.21 0-2.459 2.107-6.775 6.349-1.869 1.837-3.493 3.34-3.611 3.34-.117 0-.213.141-.213.313 0 .336-1.597 2.061-1.913 2.066-.104.002-.354.239-.555.527-.201.288-.91 1.104-1.575 1.813-.666.709-1.26 1.42-1.322 1.58-.061.16-.257.341-.435.404-.404.141-1.695 1.353-1.695 1.59 0 .097-.481.718-1.068 1.38-.587.662-1.174 1.41-1.305 1.661-.13.252-.616.9-1.08 1.441-.765.892-1.636 2.02-2.798 3.621-.232.32-.607.668-.833.773-.227.105-.412.309-.412.454 0 .146-.226.532-.502.858-.277.326-.668.862-.869 1.191a71.776 71.776 0 0 1-1.2 1.843 943.593 943.593 0 0 0-2.224 3.329c-.375.563-.684 1.117-.686 1.23-.002.114-.133.314-.292.446-.158.131-.494.656-.745 1.165-.252.509-.65 1.09-.885 1.291-.235.201-.9 1.271-1.478 2.377-.579 1.106-1.196 2.151-1.372 2.324-.176.172-.458.785-.625 1.363l-.306 1.051-.343-.45c-.315-.412-.462-.95-.825-3.009l-.128-.731-.149.527a2.715 2.715 0 0 1-.502.914c-.193.213-.454.716-.579 1.118-.125.403-.532 1.225-.905 1.829-.734 1.188-.939 1.629-1.02 2.193-.081.564-.408 1.322-.629 1.459-.109.068-.535.795-.946 1.617-.974 1.95-1.66 3.034-1.924 3.042-.116.004-.269.344-.339.757-.07.413-.263.887-.429 1.053-.411.411-1.256 2.171-1.404 2.924-.067.337-.314.898-.549 1.245-.236.347-.553 1.06-.706 1.584-.152.523-.444 1.132-.649 1.352-.205.22-.373.52-.373.667 0 .146-.063.294-.139.327-.077.034-.339.678-.582 1.432-.243.754-.624 1.742-.847 2.194-.223.452-.465 1.193-.539 1.645-.074.452-.443 1.48-.82 2.285-.712 1.517-1.026 2.337-1.27 3.315a6.918 6.918 0 0 1-.441 1.171c-.164.329-.298.863-.298 1.188 0 .324-.123.691-.274.816-.151.126-.274.496-.274.823 0 .327-.122.696-.27.819-.148.123-.317.524-.376.891-.133.825-.783 3.083-1.048 3.637-.261.547-.128.637.576.392.804-.281.888-.111.421.851-.22.453-.402 1.048-.403 1.322-.003.513-.394 2.262-.633 2.829-.219.519.477.395 1.357-.243.813-.589 1.473-.821 1.473-.518 0 .647-1.779 3.254-3.103 4.549-.788.77-1.14 1.598-1.217 2.863-.038.629-.153 1.364-.256 1.633-.128.339-.125.562.01.725.235.283-.258 3.43-.552 3.528-.101.034-.184.178-.184.321 0 .142-.07.259-.155.259-.085 0-.207 1.048-.272 2.33-.064 1.282-.17 2.64-.235 3.017-.117.684.42 1.043.753.503.295-.477.823-.183.823.457 0 .352-.082.64-.183.64-.1 0-.185.102-.188.228-.003.126-.246.547-.541.937-1.097 1.45-1.268 2.433-1.356 7.792-.044 2.665-.139 5.198-.21 5.63-.1.597-.065.837.146 1.005.806.645.455 2.413-.702 3.539-1.143 1.11-1.177 3.172-.053 3.172.29 0 .528.083.528.184 0 .101.493.67 1.096 1.264 1.042 1.026 1.321 1.477.914 1.477-.1 0-.182-.164-.182-.366 0-.203-.122-.365-.275-.365-.15 0-.274-.082-.274-.183 0-.101-.119-.183-.265-.183a.548.548 0 0 1-.411-.228c-.187-.292-1.596-1.052-1.95-1.052-.148 0-.296-.08-.329-.178-.096-.279-3.068-.776-3.987-.667-.455.054-1.074.123-1.376.152l-.548.054.042-6.947c.087-14.124 1.577-26.699 4.701-39.671.145-.604.359-1.509.476-2.011.173-.749.887-3.386 1.832-6.764.085-.302.27-1.001.412-1.554.263-1.02 1.861-6.003 2.14-6.673.084-.201.415-1.147.737-2.103.912-2.712 3.237-8.685 4.376-11.243.09-.201.34-.777.556-1.279.381-.888.585-1.338 1.82-4.022 1.529-3.321 4.714-9.502 6.245-12.117.487-.833.886-1.548.886-1.59 0-.09 2.547-4.329 3.364-5.599.311-.484 1.019-1.6 1.572-2.479 8.021-12.752 20.912-27.815 31.814-37.173.644-.553 1.549-1.335 2.009-1.737a128.65 128.65 0 0 1 1.828-1.554c.545-.452 1.281-1.073 1.636-1.38a63.135 63.135 0 0 1 1.927-1.549c.703-.546 1.32-1.041 1.371-1.101.181-.213 4.533-3.445 7.038-5.226 4.976-3.538 11.742-7.811 16.454-10.391a652.51 652.51 0 0 0 2.742-1.513c1.324-.735 7.678-3.888 11.313-5.613 18.281-8.675 43.164-14.765 64.647-15.821 7.923-.39 11.222-.425 17.146-.183m88.049 83.891c1.331.267 1.507.353 1.9.934l.433.639-.084 5.302c-.081 5.109-.179 6.374-.789 10.146-.413 2.558-1.261 6.558-1.725 8.136-.088.301-.279.959-.423 1.462-.92 3.211-1.624 5.383-2.399 7.404a180.761 180.761 0 0 1-1.184 3.017c-1.512 3.604-2.519 5.832-3.759 8.318-1.923 3.852-2.2 4.364-4.569 8.446-1.282 2.207-5.459 8.749-5.989 9.378-.085.101-.92 1.264-1.857 2.584-4.378 6.176-9.553 12.451-16.181 19.623-3.012 3.259-8.011 8.27-10.708 10.732l-2.56 2.337c-.301.275-1.487 1.294-2.634 2.265-3.767 3.186-3.632 3.027-3.962 4.69a235.366 235.366 0 0 1-1.171 5.575c-.211.956-.459 2.107-.551 2.56-.092.452-.34 1.604-.553 2.559-.752 3.383-2.33 10.787-2.773 13.013-.238 1.195-.574 1.619-2.887 3.639-.854.746-1.681 1.479-1.839 1.63-.158.151-1.966 1.755-4.017 3.565a765.316 765.316 0 0 0-4.839 4.296c-.61.553-1.761 1.581-2.558 2.285-.798.704-1.949 1.732-2.56 2.285-3.659 3.314-4.082 3.643-4.684 3.651-.823.01-1.314-.673-1.967-2.737a154.241 154.241 0 0 0-1.054-3.199c-.246-.704-.78-2.308-1.188-3.565-.407-1.257-.807-2.45-.888-2.651-.081-.201-.695-2.052-1.363-4.113-.669-2.061-1.326-4.036-1.46-4.388a35.22 35.22 0 0 1-.644-2.011c-.221-.754-.477-1.514-.571-1.688-.093-.175-.17-.627-.17-1.006-.001-1.175-.611-1.945-1.427-1.802-4.684.821-11.733.295-15.449-1.153-.283-.11-.628-.201-.766-.201s-2.543 2.308-5.344 5.129c-5.07 5.106-5.095 5.127-5.632 4.924-.298-.112-2.235-1.885-4.306-3.94-2.071-2.055-3.84-3.737-3.931-3.737-.855-.007-1.123-1.772-.389-2.558.235-.252 1.28-1.438 2.321-2.635a167.622 167.622 0 0 1 2.184-2.482c.475-.498 1.5-1.658 2.667-3.019.603-.704 1.158-1.307 1.233-1.34.21-.094.163-.846-.067-1.076-.34-.341-1.088-1.757-1.57-2.977-1.234-3.117-1.957-7.717-1.497-9.514.362-1.409.192-1.685-1.339-2.181-.732-.237-4.293-1.405-7.912-2.596-13.214-4.348-15.377-5.052-16.404-5.345-1.926-.549-1.835-2.305.207-3.947.063-.05.935-1.035 1.939-2.187 1.005-1.153 2.073-2.356 2.375-2.673.301-.318.715-.773.919-1.012.62-.726 3.084-3.519 3.377-3.827.28-.295 1.99-2.215 3.572-4.012.828-.94 1.825-2.05 2.461-2.738.15-.163.845-.951 1.542-1.75 2.188-2.507 2.224-2.531 4.634-3.09 1.178-.274 2.347-.565 2.599-.647.251-.083 1.033-.278 1.737-.434 2.754-.611 4.598-1.041 5.21-1.214a142.35 142.35 0 0 1 3.382-.82c1.508-.351 3.195-.759 3.748-.907a88.423 88.423 0 0 1 2.742-.658c.955-.215 1.911-.458 2.124-.541.213-.083.789-.21 1.28-.281 1.193-.174 1.736-.474 2.361-1.306.288-.383.705-.902.927-1.153.583-.661 1.877-2.181 2.723-3.199.402-.484.819-.97.926-1.08.107-.11.591-.653 1.075-1.206 1.549-1.767 5.439-5.877 7.177-7.581a126.371 126.371 0 0 1 6.361-5.856c.583-.503 1.152-.996 1.263-1.097.111-.1.777-.663 1.48-1.25.704-.588 1.485-1.245 1.736-1.461.251-.216.868-.717 1.371-1.114.503-.396.955-.773 1.006-.837.23-.294 8.591-6.568 10.231-7.678.52-.352 1.043-.725 1.162-.829.118-.105.545-.39.947-.634.402-.245.813-.514.914-.599 2.423-2.051 19.074-11.409 21.892-12.303.224-.071.944-.37 1.598-.664 1.791-.803 1.845-.826 2.927-1.253a61.116 61.116 0 0 0 1.581-.65c.317-.139.668-.252.78-.252.111 0 .346-.082.52-.182.175-.1.688-.308 1.141-.464 2.096-.72 4.545-1.531 5.21-1.726l1.645-.483c4.253-1.249 8.864-2.205 14.129-2.928 4.681-.643 11.942-.686 14.924-.087m3.437 5.138c.1.757.131 2.724.071 4.388-.169 4.624-.501 7.369-1.583 13.071-.827 4.365-3.409 12.697-5.099 16.454a98.65 98.65 0 0 0-1.12 2.638c-4.65 11.429-14.293 26.307-25.309 39.048-4.017 4.645-5.204 5.918-10.327 11.073-4.472 4.499-9.72 9.38-13.522 12.578-1.911 1.607-1.687 1.139-2.465 5.145-.36 1.856-.951 4.732-1.312 6.391-.362 1.66-.77 3.552-.907 4.205-.137.654-.416 1.888-.619 2.742a92.483 92.483 0 0 0-.732 3.474c-.34 1.802-1.022 4.995-1.222 5.716-.117.425-.704 1.028-2.812 2.89l-3.193 2.82a490.59 490.59 0 0 0-2.466 2.194c-.559.502-1.711 1.531-2.559 2.285a234.98 234.98 0 0 0-2.923 2.651c-.76.704-1.956 1.785-2.658 2.402-.702.618-2.304 2.038-3.561 3.156-2.906 2.586-3.554 2.748-4.396 1.097-.393-.77-.329-.897.455-.897.364 0 .768-.18 1.122-.502.304-.277 1.248-1.113 2.098-1.859 1.656-1.454 4.117-3.658 4.916-4.403.27-.251 1.061-.95 1.758-1.554 1.274-1.101 2.45-2.14 2.999-2.651.163-.15.99-.891 1.84-1.645 2.821-2.505 2.982-2.649 3.276-2.925.161-.151.578-.512.928-.803.349-.29 1.437-1.269 2.417-2.174 1.915-1.769 1.885-1.716 2.457-4.427 1.197-5.683 2.008-9.477 2.889-13.528.525-2.411.816-3.775 1.366-6.399.855-4.074.833-4.014 1.701-4.695 1.136-.892 3.835-3.141 4.451-3.709.111-.104.605-.553 1.096-1 2.485-2.256 3.294-3.02 5.738-5.415 3.396-3.328 6.503-6.525 8.233-8.471.751-.844 1.494-1.667 1.651-1.828.777-.797 3.766-4.23 5.267-6.05a206.943 206.943 0 0 0 3.8-4.697c2.356-2.981 2.463-3.12 3.242-4.243.391-.564.935-1.313 1.208-1.665.273-.352.893-1.216 1.376-1.92 2.248-3.271 3.194-4.677 3.194-4.746 0-.041.35-.599.777-1.24.887-1.329.875-1.311 2.201-3.52.543-.905 1.04-1.769 1.106-1.92.065-.15.201-.397.301-.548.655-.984 2.003-3.518 3.55-6.673.986-2.011 1.859-3.788 1.94-3.948a68.58 68.58 0 0 0 .905-2.103c.416-.995.834-1.974.928-2.176.686-1.452 2.984-8.131 3.662-10.639 2.159-7.996 2.898-13.055 2.907-19.906.006-4.698.45-5.41.959-1.539m-67.773 40.233c-6.465.747-11.568 5.32-13.553 12.144-.886 3.048-.096 9.804 1.252 10.71.087.059.228.347.312.64.133.466.17.49.295.189.086-.208.046-.498-.101-.731-1.212-1.928-1.146-7.507.124-10.534 1.913-4.559 6.159-7.917 10.882-8.608 11.677-1.707 20.277 9.991 15.142 20.599-.945 1.952-1.899 3.13-3.62 4.469-1.836 1.429-1.707 1.337-2.232 1.583l-.457.214.498.012c1.637.041 6.669-4.08 6.441-5.275-.073-.383-.06-.404.068-.109.283.654 1.876-2.312 2.649-4.932.524-1.775.568-6.97.073-8.501-.179-.553-.455-1.417-.614-1.92-2.071-6.554-9.462-10.84-17.159-9.95m5.85.471c2.456.596 4.456 1.487 6.033 2.69.884.674 3.199 3.008 3.199 3.225 0 .086.104.265.231.398.497.519.866 1.256.866 1.729 0 .463-.036.441-.553-.34-3.651-5.513-12.543-7.836-18.734-4.894-.201.096-.571.261-.823.368-2.238.952-5.405 3.869-6.871 6.329-1.686 2.83-2.106 4.472-2.119 8.292-.009 2.547-.032 2.751-.228 2.011-.121-.452-.296-.987-.391-1.188-.563-1.199-.108-6.206.789-8.684 2.69-7.429 10.886-11.808 18.601-9.936m-180.53 27.029c0 .151.123.275.274.275.183 0 .274.182.274.548 0 .488-.061.549-.548.549-.488 0-.549.06-.549.548 0 .505-.051.548-.64.548-.609 0-.639.031-.639.64 0 .589-.044.64-.549.64-.487 0-.548.061-.548.549 0 .487-.061.548-.549.548-.365 0-.548.091-.548.274a.275.275 0 0 1-.274.274.276.276 0 0 0-.275.275.274.274 0 0 1-.274.274c-.183 0-.274.183-.274.548 0 .366-.092.549-.274.549-.153 0-.275.162-.275.365 0 .244-.121.366-.365.366-.203 0-.366.122-.366.274a.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.275.275 0 0 0-.274.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.275c0 .15-.124.274-.274.274-.204 0-.275-.213-.275-.823 0-.609.071-.822.275-.822.195 0 .274-.2.274-.698 0-.822 1.836-2.959 2.541-2.959.211 0 .384-.082.384-.183 0-.1.123-.182.274-.182a.275.275 0 0 0 .274-.275c0-.15.124-.274.275-.274.15 0 .274-.123.274-.274 0-.151.123-.274.274-.274.152 0 .274-.163.274-.366 0-.203.122-.366.274-.366a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.274.274 0 0 0 .274-.274c0-.151.123-.274.274-.274a.276.276 0 0 0 .275-.275c0-.152.162-.274.365-.274.203 0 .366-.122.366-.274 0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.124-.274.274-.274.151 0 .275.124.275.274m2.193 2.834c0 .203.122.366.275.366.203 0 .274.213.274.822 0 .701.054.823.366.823.203 0 .365.122.365.274 0 .157-.165.274-.385.274-.267 0-.353.084-.28.275.072.186-.01.274-.255.274-.236 0-.36.124-.36.36 0 .245-.087.326-.274.254-.189-.072-.274.013-.274.275s-.085.347-.274.274c-.19-.073-.274.013-.274.28 0 .22-.118.385-.275.385a.275.275 0 0 0-.274.274.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.275.275 0 0 0-.274.274.274.274 0 0 1-.274.274.269.269 0 0 0-.274.261c0 .143-1.234 1.507-2.742 3.03-1.509 1.523-2.743 2.821-2.743 2.883 0 .22-3.174 3.15-3.413 3.15-.134 0-.243.123-.243.274 0 .151-.105.274-.234.274-.217 0-.453.249-.86.909-.267.432-.291.211-.221-1.96.053-1.617.123-2.056.326-2.056.142 0 .258-.124.258-.275 0-.152.162-.274.365-.274.204 0 .366-.122.366-.274 0-.151.114-.274.253-.274.146 0 .339-.345.459-.823.159-.629.293-.823.57-.823.201 0 .363-.122.363-.274 0-.151.124-.274.275-.274.15 0 .274-.123.274-.274 0-.151.123-.275.274-.275.152 0 .274-.162.274-.365 0-.203.122-.366.274-.366a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.153.163-.275.366-.275.203 0 .365-.122.365-.274 0-.151.124-.274.275-.274.15 0 .274-.124.274-.274 0-.151.123-.275.274-.275a.274.274 0 0 0 .274-.274c0-.151.124-.274.275-.274.15 0 .274-.123.274-.274 0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.151.124-.274.274-.274.153 0 .275-.162.275-.366 0-.203.122-.365.274-.365a.275.275 0 0 0 .274-.274c0-.151.123-.275.274-.275a.275.275 0 0 0 .275-.274c0-.152.162-.274.365-.274.203 0 .366-.122.366-.274 0-.151.123-.275.274-.275a.274.274 0 0 0 .274-.274c0-.151.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274.152 0 .274-.163.274-.366 0-.203.122-.366.274-.366.153 0 .274.163.274.366m3.474 5.231c0 .139.123.254.274.254.151 0 .274.123.274.274 0 .151.124.274.275.274.182 0 .274.183.274.548 0 .366.091.549.274.549.183 0 .274.183.274.548 0 .427.082.549.366.549.203 0 .366.122.366.274 0 .183.182.274.548.274.427 0 .548.081.548.366 0 .203.122.365.275.365.182 0 .274.183.274.549 0 .896.335.676 2.927-1.926 2.255-2.264 3.471-3.249 3.471-2.813 0 .093-.082.169-.182.169-.101 0-.183.093-.183.207 0 .326-9.746 10.021-10.078 10.026-.177.002-.338.21-.399.515a1.224 1.224 0 0 1-.568.761c-.257.137-.51.387-.564.556-.054.169-.293.412-.531.54a1.897 1.897 0 0 0-.666.666c-.128.238-.384.482-.569.54-.185.059-.336.171-.336.25 0 .148-6.391 6.802-9.144 9.522-1.836 1.813-4.152 3.897-4.451 4.006-.114.041-.308.206-.431.365-.2.262-.223.259-.228-.029-.003-.176.056-.321.131-.322.437-.004.594-1.153.594-4.331 0-2.852-.04-3.346-.274-3.346-.221 0-.274-.284-.274-1.462s-.053-1.463-.274-1.463c-.347 0-.353-.313-.014-.652.143-.143.41-.451.594-.684a4.2 4.2 0 0 1 .836-.753c.277-.181.503-.443.503-.582 0-.14.124-.254.274-.254.151 0 .275-.106.275-.237 0-.13.915-1.138 2.034-2.239 2.644-2.603 2.687-2.643 2.902-2.643.1 0 .182-.123.182-.274 0-.151.124-.274.275-.274.151 0 .274-.076.274-.168 0-.283 4.196-4.402 4.484-4.402a.273.273 0 0 0 .269-.275c0-.15.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.151.123-.275.274-.275a.274.274 0 0 0 .274-.274c0-.151.124-.274.275-.274a.275.275 0 0 0 .274-.274c0-.157.165-.275.385-.275.267 0 .353-.084.28-.274-.072-.188.011-.274.263-.274.249 0 .35-.103.314-.32-.037-.218.048-.303.266-.266.21.035.32-.064.32-.288 0-.276.106-.327.549-.262.306.045.548.192.548.334m5.818 8.415c-.414.414-.699.579-.778.451-.07-.113-.008-.203.138-.203.145 0 .309-.173.364-.384.056-.213.188-.33.297-.263.108.067.247-.01.309-.172.062-.161.16-.246.218-.188.058.058-.188.399-.548.759m-43.121 1.734a880.193 880.193 0 0 1-.028 4.594c-.012 1.183.031 2.202.094 2.265.125.125.574-.839.513-1.101-.02-.087-.034-1.867-.03-3.954.006-3.153-.039-3.833-.267-4.022-.24-.199-.274.068-.282 2.218m121.919-1.272c1.574.52 3.519 1.167 4.324 1.438.804.271 3.19 1.047 5.301 1.725 2.112.678 4.004 1.297 4.205 1.377.201.079 1.312.445 2.468.812 1.156.368 2.39.785 2.742.927.352.142 1.233.432 1.958.646 1.404.413 1.656.689 1.433 1.575-.086.345-.194.428-.428.332-.771-.317-3.584-1.27-7.716-2.615-16.379-5.334-16.892-5.513-17.413-6.076-1.243-1.343-.601-1.372 3.126-.141m-80.777 1.489c0 .031-.247.293-.548.582-.429.411-.549.458-.549.217 0-.169.124-.308.274-.308a.276.276 0 0 0 .275-.274c0-.151.123-.275.274-.275.151 0 .274.026.274.058m-2.925 3.05c-.519.656-1.097.966-1.097.589 0-.195.791-.866.96-.814.075.023.137-.081.137-.232 0-.151.13-.274.29-.274.216 0 .142.186-.29.731m-1.097 1.014c0 .282-3.112 3.21-3.293 3.098-.224-.138.512-.953.781-.865.08.026.2-.094.266-.266.181-.471.652-.97.916-.97.128 0 .233-.123.233-.274 0-.151.124-.274.274-.274a.276.276 0 0 0 .275-.274c0-.151.123-.275.274-.275.151 0 .274.045.274.1m-3.473 3.505c0 .072-1.518 1.656-3.373 3.519a1332.783 1332.783 0 0 0-4.719 4.759c-1.886 1.922-4.16 3.94-4.372 3.881-.098-.028-.118.046-.045.164.075.121-.014.323-.203.461-.32.234-.321.278-.028.893.169.356.308.758.308.895s.124.296.274.354c.181.069.275.356.275.842 0 .533-.076.737-.275.737-.203 0-.274-.213-.274-.823 0-.609-.071-.822-.274-.822-.171 0-.274-.173-.274-.457 0-.252-.165-.622-.366-.823-.201-.201-.365-.489-.365-.64 0-.151-.083-.274-.183-.274-.101 0-.183-.139-.183-.309 0-.276.027-.273.248.03.293.401 1.465-.311 2.312-1.405.629-.811 4.63-4.897 4.796-4.897.074 0 1.514-1.397 3.199-3.103 2.719-2.753 3.522-3.433 3.522-2.982m-32.724 3.251c0 .553-.083 1.005-.183 1.005-.202 0-.256-1.694-.061-1.889.22-.22.244-.133.244.884m14.076 5.21c.208.134.128.178-.33.18-.358.002-.559-.072-.492-.18.142-.23.467-.23.822 0m1.385.571c.055.088-.152.16-.46.16-.518 0-.701-.162-.457-.406.135-.135.791.041.917.246m-1.476.61c4.676 1.877 7.254 7.956 5.471 12.9-.614 1.701-.555 1.823.876 1.827.632.002 1.724.125 2.428.274.704.15 1.485.272 1.737.273.251 0 .693.124.981.274.288.15.604.273.703.273.099 0 .481.131.848.291 1.672.729 2.368 1.08 3.099 1.565.432.286.864.521.959.521.096 0 .174.084.174.188s.144.242.32.307c.329.121 3.15 2.885 3.797 3.72.617.797 1.185 1.616 1.185 1.709 0 .05.247.456.548.903.302.447.549.867.549.933 0 .066.169.507.375.979.207.472.446 1.023.532 1.224.544 1.271.96 3.082 1.302 5.667.24 1.815.279 1.845 2.589 1.964 1.194.062 2.14.214 2.606.418.402.176.937.406 1.188.511 3.072 1.285 5.797 4.573 7.145 8.625.396 1.188.395 1.188 2.521 1.191 3.129.005 7.091.558 7.793 1.088.1.076.429.197.731.269.518.123 3.917 1.713 4.113 1.924.242.259 1.287.921 1.456.921.104 0 .19.071.19.158 0 .087.308.368.685.625.377.256 1.242.997 1.921 1.647l1.236 1.18-1.144 1.106c-.629.608-1.473 1.406-1.876 1.773-.402.367-1.281 1.196-1.953 1.842-1.569 1.508-1.626 1.492-2.535-.699-.115-.276-.283-.503-.374-.503-.091 0-.165-.085-.165-.19 0-.174-.562-1.049-1.005-1.567a13.331 13.331 0 0 1-.549-.727c-1.604-2.257-6.61-6.656-7.574-6.656-.083 0-.253-.124-.378-.274-.126-.151-.347-.275-.493-.275-.146 0-.388-.123-.539-.274-.151-.151-.423-.274-.604-.274a.836.836 0 0 1-.558-.274c-.125-.151-.362-.275-.525-.276-.164 0-.533-.124-.821-.274-.288-.15-.605-.273-.704-.273-.099 0-.439-.119-.756-.265-.555-.255-1.568-.495-3.501-.83-.503-.087-2.162-.164-3.688-.171l-2.773-.014-.12-.594c-.172-.857-1.033-2.77-1.747-3.885a10.474 10.474 0 0 1-.477-.808 3.122 3.122 0 0 0-.413-.58 43.352 43.352 0 0 1-.923-1.09c-.71-.862-2.949-2.732-3.271-2.732-.114 0-.208-.063-.208-.14 0-.124-.791-.52-2.468-1.235-.893-.38-3.623-.834-4.257-.708-.429.086-.593.05-.609-.134a45.25 45.25 0 0 1-.057-.799c-.051-.797-.451-2.793-.755-3.773-.145-.466-.264-1.005-.264-1.199 0-.193-.12-.511-.268-.706-.148-.196-.271-.507-.274-.693-.003-.185-.117-.556-.252-.822a92.146 92.146 0 0 1-.686-1.4c-.241-.502-.48-.955-.53-1.006-.051-.05-.29-.462-.532-.914-1.402-2.621-5.256-6.475-7.877-7.878-.453-.242-.865-.495-.916-.562-.052-.067-.32-.179-.595-.248-.276-.07-.501-.193-.501-.275 0-.081-.267-.206-.594-.277-.327-.071-.757-.243-.955-.38-.198-.138-.497-.251-.665-.251-.167 0-.539-.123-.827-.273-.288-.151-.812-.275-1.164-.277-.352-.001-1.043-.125-1.537-.275-.494-.15-1.46-.272-2.148-.272-1.205 0-1.425-.094-1.098-.466.66-.752 1.059-3.769.772-5.841-.218-1.577-.611-3.312-.79-3.492-.074-.074-.13-.306-.123-.515.011-.366.018-.365.177.03.201.501.234.503 1.066.049 2.849-1.553 5.813-1.849 8.343-.833m3.513.549c.122.104.348.296.503.425.154.13.28.486.28.79v.555l-.801-.836c-.44-.46-.884-.836-.985-.836-.102 0-.233-.123-.291-.274a.45.45 0 0 0-.385-.274c-.336 0-.373-.301-.051-.419.21-.077 1.208.424 1.73.869m26.377 5.948c0 .186-.655.914-.822.914-.228 0-.059-.624.228-.842.386-.293.594-.318.594-.072m-22.601.96c.235.876.124 4.077-.153 4.444-.24.318-.269.081-.275-2.25-.005-2.399.154-3.215.428-2.194m21.322.229a.275.275 0 1 1-.275-.275c.151 0 .275.124.275.275m-1.097 1.279a.276.276 0 0 1-.274.275.276.276 0 0 1-.275-.275c0-.15.124-.274.275-.274.15 0 .274.124.274.274m4.022.549c0 .151.123.274.274.274.183 0 .274.183.274.549 0 .365.092.548.274.548.151 0 .275.123.275.274 0 .151.123.274.274.274.183 0 .274.183.274.549 0 .426.081.548.366.548.243 0 .365.122.365.366 0 .203.122.366.275.366.182 0 .274.182.274.548 0 .366.091.548.274.548.151 0 .274.124.274.275 0 .182.183.274.549.274.487 0 .548.061.548.548 0 .366-.091.549-.274.549a.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.276.276 0 0 0-.274.274.275.275 0 0 1-.274.275c-.152 0-.274.162-.274.365 0 .203-.122.366-.274.366a.275.275 0 0 0-.275.274c0 .153-.162.274-.365.274-.203 0-.366.122-.366.275 0 .15-.123.274-.274.274a.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.276.276 0 0 0-.274.274.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.275.275 0 0 1-.274.274.27.27 0 0 0-.275.262c0 .144-1.193 1.456-2.651 2.916-2.22 2.223-2.65 2.742-2.65 3.197 0 .689-.174 1.148-.385 1.017-.09-.055-.164-.263-.164-.461 0-.199-.123-.408-.274-.466-.151-.058-.274-.296-.274-.53 0-.233-.124-.548-.274-.698-.151-.151-.275-.332-.275-.401 0-.177-1.305-2.317-1.591-2.609-.13-.133-.237-.309-.237-.391 0-.082-.493-.661-1.097-1.287-.603-.627-1.097-1.214-1.097-1.307 0-.092-.123-.215-.274-.273-.507-.194-.28-.441.344-.372.615.068 2.307-1.307 2.307-1.874 0-.108.123-.196.274-.196a.275.275 0 0 0 .274-.275c0-.15.124-.274.275-.274.15 0 .274-.123.274-.274 0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.151.103-.277.229-.28.126-.003.468-.249.762-.548.293-.299.725-.544.959-.544.319 0 .427-.102.427-.404 0-.556 4.136-4.689 4.707-4.704.249-.006.412.098.412.264m-5.119.548a.276.276 0 0 1-.274.275.276.276 0 0 1-.275-.275.275.275 0 0 1 .549 0m-1.097 1.097a.274.274 0 0 1-.274.274c-.151 0-.274.085-.274.187 0 .103-1.317 1.51-2.925 3.127-2.975 2.989-3.158 3.257-2.623 3.848.282.311.282.334 0 .334-.166 0-.303-.082-.303-.183 0-.101-.106-.183-.237-.183-.259 0-.916-.457-1.378-.96-.162-.176-.39-.32-.508-.32s-.261-.123-.319-.274c-.058-.151-.314-.274-.568-.274-.29 0-.463-.103-.463-.274 0-.172-.173-.274-.463-.274-.254 0-.51-.124-.568-.275-.058-.15-.286-.274-.508-.274-.221 0-.562-.121-.757-.268-.195-.148-.534-.271-.753-.274-.219-.004-.514-.122-.656-.264-.141-.141-.729-.316-1.306-.388-1.138-.142-1.159-.393-.05-.573.458-.074.808-.015 1.12.19.25.164.603.297.784.297.181 0 .636.165 1.011.366.375.201.796.366.935.366s.355.123.48.274a.836.836 0 0 0 .561.274c.184 0 .4.103.481.229.162.253.671.596 1.271.857.216.094.447.259.513.365.329.532.976.054 3.698-2.731 1.642-1.681 3.001-2.925 3.194-2.925.185 0 .337-.123.337-.274a.274.274 0 0 1 .548 0m-18.464 1.737c0 .302.061.539.137.527.363-.058.777.038.777.179 0 .196-1.614.432-1.871.273-.113-.07-.07-.181.111-.282.17-.095.297-.398.297-.706 0-.358.093-.54.274-.54.183 0 .275.183.275.549m137.882.983c3.065 1.288 11.626 2 15.159 1.26.846-.177.848-.176 1.143.441.325.682.399 1.607.115 1.431-.099-.061-1.354-.012-2.789.11-4.146.353-8.93-.15-12.464-1.311-.594-.195-1.148-.355-1.23-.355-.082 0-2.386 2.263-5.119 5.028-6.247 6.32-5.119 6.146-9.728 1.498-4.67-4.709-5.139-5.234-4.895-5.478.142-.142 1.261.873 3.952 3.582 4.673 4.706 3.947 4.61 7.481.993 6.285-6.433 7.314-7.451 7.539-7.451.129 0 .506.114.836.252M65.13 239.446c-.086.223-.128.218-.268-.031-.204-.365.012-.812.226-.466a.64.64 0 0 1 .042.497m.671 1.997c.02.906-.298.879-.435-.037-.136-.903.051-1.495.283-.9.077.194.145.616.152.937m.625 3.392c-.047.075-.204.138-.349.138-.29 0-.319-.28-.141-1.357l.118-.718.229.899c.125.495.19.962.143 1.038m3.135-.045c.148.239-2.097.239-2.468 0-.191-.124.124-.178 1.041-.18.723-.002 1.365.079 1.427.18m1.463.548c.066.107-.124.183-.457.183-.334 0-.523-.076-.457-.183.062-.1.267-.183.457-.183.189 0 .395.083.457.183m2.833 1.646c.222.143.196.177-.137.18-.226.001-.411-.08-.411-.18 0-.23.194-.23.548 0m2.025 1.878c-.023.219-.273.176-.352-.059-.04-.121.026-.187.146-.147.121.041.214.133.206.206m.593.794c-.085.221-.141.232-.254.048-.172-.277-.033-.577.2-.432.09.055.114.228.054.384m.562.542c.147.384.141.442-.05.442-.089 0-.205-.165-.258-.366-.112-.432.147-.496.308-.076m.66.899c0 .151-.083.274-.183.274-.101 0-.183-.123-.183-.274 0-.151.082-.274.183-.274.1 0 .183.123.183.274m.548 1.005c0 .201-.082.366-.183.366-.1 0-.183-.165-.183-.366 0-.201.083-.365.183-.365.101 0 .183.164.183.365m.548 1.097c0 .201-.082.366-.182.366-.101 0-.183-.165-.183-.366 0-.201.082-.365.183-.365.1 0 .182.164.182.365m1.372 2.377c.064.104-.094.183-.366.183-.273 0-.43-.079-.366-.183.062-.101.227-.183.366-.183.139 0 .303.082.366.183m4.981.133a8.047 8.047 0 0 1-1.371 0c-.377-.039-.068-.072.686-.072s1.062.033.685.072m2.788.415c.206.133.114.178-.365.178-.48 0-.572-.045-.366-.178.151-.097.315-.177.366-.177.05 0 .214.08.365.177m15.97 16.366c-.056.146-.006.534.112.862.422 1.174.915 3.299 1.034 4.457.066.647.191 1.221.277 1.275.541.334.241.655-6.076 6.489a153.211 153.211 0 0 0-3.015 2.864c-.633.628-1.205 1.143-1.269 1.143-.18 0 .11-1.52.346-1.811.139-.172.216-1.557.231-4.191l.024-3.935 1.622-1.534c1.644-1.555 2.499-2.361 5.051-4.765 1.292-1.217 1.927-1.543 1.663-.854m1.215.647c0 .195-.082.355-.183.355-.101 0-.183-.211-.183-.468 0-.265.079-.419.183-.355.101.062.183.273.183.468m.548 1.817c0 .201-.082.366-.183.366-.1 0-.182-.165-.182-.366 0-.201.082-.365.182-.365.101 0 .183.164.183.365m.543 2.605c-.004.473-.042.532-.183.29-.098-.167-.127-.434-.066-.594.172-.448.255-.346.249.304m11.34 11.107c0 .259-2.372 2.533-2.776 2.661-.183.058-.682-.054-1.109-.249-1.167-.533-2.049-.783-3.168-.899-.589-.061-.943-.172-.848-.267.241-.241 4.289-1.062 6.073-1.231a66.624 66.624 0 0 0 1.691-.173c.076-.014.137.057.137.158m11.588 5.164c5.837 5.795 7.928 15.171 5.045 22.623a43.633 43.633 0 0 0-.541 1.463c-.166.5-1.168 2.46-1.519 2.971-.172.25-.171.39.005.64 1.77 2.516 3.056 5.415 4.073 9.186l.286 1.051c.071.253 1.107.318 1.203.076.18-.451 4.404-2.595 6.551-3.325 8.614-2.931 18.601.118 23.971 7.317.487.653.968 1.286 1.068 1.405.227.27 1.25 2.064 1.388 2.434.4 1.075 1.13 1.815 1.309 1.325.045-.125.154-.228.241-.228s.512-.234.945-.521c.432-.286 1.444-.833 2.248-1.216.805-.382 1.601-.762 1.771-.844.339-.165 2.023-.736 3.165-1.074 3.222-.955 8.861-1.36 12.706-.913 1.813.211 4.17.65 4.811.896.283.109.726.198.984.198h.47l-.138 1.326a50.315 50.315 0 0 0-.188 2.416c-.036.8-.152 1.206-.433 1.522-.399.448-.559.444-1.758-.043-1.126-.457-2.459-.839-3.318-.951-.488-.063-.969-.179-1.07-.256-1.007-.775-12.694-.781-14.713-.008-.253.097-.831.232-1.283.3-.453.068-.905.187-1.006.264-.1.078-.455.2-.789.271a5.179 5.179 0 0 0-1.097.386c-.27.14-.598.256-.729.257-.281.001-4.107 1.816-4.24 2.011-.051.074-.277.192-.503.263-.226.07-.411.205-.411.299 0 .093-.097.17-.214.17-.118 0-.366.137-.55.304-.185.167-.375.263-.424.215-.162-.163-1.002-1.701-1.206-2.21-.111-.277-.276-.503-.366-.503-.091 0-.165-.085-.165-.19 0-.216-.752-1.332-.96-1.425-.076-.033-.137-.159-.137-.279 0-.12-.144-.351-.32-.512-.176-.162-.773-.822-1.326-1.466-.885-1.033-2.266-2.326-3.382-3.165-1.515-1.141-2.12-1.541-2.878-1.903-.477-.228-.914-.49-.971-.582-.056-.092-.252-.167-.435-.167a.81.81 0 0 1-.548-.26c-.119-.143-.54-.315-.937-.382-.396-.067-.721-.187-.721-.268 0-.08-.308-.204-.685-.274-.377-.071-.788-.213-.912-.316-.125-.103-.783-.23-1.463-.281-.68-.052-1.351-.187-1.492-.299-.348-.278-5.728-.272-6.691.007-.402.116-1.142.294-1.645.395-1.542.309-2.533.582-3.136.862-.316.147-.659.268-.762.268-.102 0-.419.119-.703.265-.285.146-.888.439-1.341.652a14.57 14.57 0 0 0-1.371.738 8.643 8.643 0 0 1-.822.473c-.151.067-.609.391-1.019.719-.907.728-1.108.628-1.33-.659-.185-1.073-.464-1.968-.871-2.797-.14-.285-.254-.635-.254-.778 0-.143-.164-.567-.366-.942-.201-.375-.365-.787-.365-.914s-.076-.231-.168-.231c-.093 0-.223-.247-.289-.548-.066-.302-.178-.549-.249-.549-.07 0-.225-.226-.344-.503-.21-.488-.593-1.14-.778-1.325a9.16 9.16 0 0 1-.483-.651l-.391-.559.44-.721a20.01 20.01 0 0 0 .901-1.725c.254-.553.54-1.149.637-1.323.096-.175.178-.422.182-.549.003-.127.165-.56.359-.962.194-.402.356-.941.359-1.197.004-.257.093-.553.198-.658.77-.77.776-10.886.007-11.843-.086-.108-.215-.545-.285-.972-.07-.427-.203-.822-.295-.879-.092-.057-.167-.226-.167-.377 0-.519-1.747-4.156-2.131-4.437-.195-.142-.559-.721-.79-1.255-.098-.226-.262-.411-.365-.411a.188.188 0 0 1-.187-.189c0-.104-.241-.424-.535-.712l-.535-.523 2.043-1.923c2.85-2.682 3.056-2.869 3.155-2.869.048 0 .936.843 1.975 1.874m92.236 24.202c.042.037-.781.059-1.828.048-1.249-.011-1.747-.069-1.447-.166.417-.135 3.097-.039 3.275.118m-3.868.387c.055.168-.273.228-1.257.228-.798 0-1.262-.066-1.158-.165.427-.405 2.286-.454 2.415-.063m7.083.045c.071.116-.368.183-1.189.183-.821 0-1.259-.067-1.188-.183.062-.1.597-.182 1.188-.182.592 0 1.127.082 1.189.182m-9.823.515c.049.145-.187.217-.711.217-.777 0-.818-.24-.07-.417.486-.116.694-.063.781.2m11.468.034c.068.11-.185.183-.64.183s-.708-.073-.64-.183c.062-.101.35-.183.64-.183.29 0 .578.082.64.183m-13.071.548c0 .101-.154.183-.341.183-.188 0-.55.165-.806.366-.256.201-.596.365-.756.365-.16 0-.291.081-.291.18 0 .098-.206.231-.457.294-.251.063-.457.19-.457.282 0 .092-.206.246-.457.341-.252.096-.457.258-.457.361 0 .103-.126.188-.28.188a.449.449 0 0 0-.385.274c-.058.151-.22.274-.36.274-.14 0-.255.124-.255.274a.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274c-.15 0-.276.062-.278.137-.002.076-.27.44-.594.81-.93 1.062-1.23 1.486-1.23 1.741 0 .13-.123.237-.274.237-.151 0-.274.156-.274.346 0 .19-.124.394-.275.451-.15.058-.274.273-.274.477 0 .204-.114.371-.253.371s-.301.184-.359.409c-.084.319-.155.36-.328.187-.173-.173-.154-.295.085-.56.169-.186.307-.479.307-.65 0-.171.116-.356.257-.41.142-.054.308-.299.37-.543.061-.244.192-.444.29-.444.099 0 .18-.126.18-.28a.45.45 0 0 1 .274-.385c.151-.058.274-.208.274-.335 0-.385 3.461-3.753 3.857-3.753.091 0 .165-.084.165-.187s.185-.271.411-.374c.622-.281 1.241-.652 1.469-.88a.83.83 0 0 1 .511-.204c.168 0 .409-.124.534-.274.253-.305 1.28-.379 1.28-.092m14.341-.015c.057.092 0 .202-.126.244-.316.106-.87-.053-.87-.25 0-.214.864-.209.996.006m1.132.655c.058.151.212.274.343.274.505 0 1.734.975 1.713 1.358-.017.309-.037.32-.105.059-.046-.176-.204-.32-.35-.32a.431.431 0 0 1-.368-.263c-.055-.145-.341-.316-.634-.38s-.533-.186-.533-.271c0-.084-.247-.208-.548-.274-.302-.066-.549-.196-.549-.289 0-.282.918-.187 1.031.106m-42.713 1.097c0 .518.07.64.366.64.203 0 .365.122.365.274 0 .183.183.274.549.274.536 0 .548.021.548.914 0 .894.013.914.549.914.487 0 .548.061.548.549 0 .366.092.548.274.548.151 0 .275.124.275.275 0 .15.123.274.274.274.151 0 .274.123.274.274 0 .151.124.274.274.274.192 0 .275.193.275.64 0 .518.069.64.365.64.203 0 .366.122.366.274 0 .183.183.274.548.274.528 0 .549.031.549.823 0 .609.071.823.274.823.151 0 .274.123.274.274 0 .151.124.274.274.274.151 0 .275.124.275.274 0 .151.123.275.274.275.151 0 .274.123.274.274 0 .151.123.274.274.274.153 0 .275.163.275.366 0 .203.121.365.274.365.203 0 .274.214.274.823 0 .818.003.823.64.823.583 0 .64.047.64.525 0 .469.076.537.711.639.391.062.759.237.817.389.061.158.333.275.64.275s.58.117.64.274c.144.375-1.478.37-1.975-.006-.21-.159-.769-.271-1.371-.274-.572-.003-1.162-.116-1.349-.258-.517-.392-9.532-.407-10.465-.018-.37.155-1.058.282-1.53.282-.471 0-1.016.121-1.211.268-.196.148-.607.271-.914.274-.308.004-.719.127-.914.275-.196.147-.666.271-1.047.274-.428.003-.729.106-.792.269-.055.144-.33.313-.61.375-.28.061-1.116.434-1.858.829-.743.394-1.535.799-1.761.9-.227.101-.412.267-.412.37 0 .103-.096.188-.214.188s-.359.131-.537.292c-.348.315-.711.21-.711-.205 0-.258-1.49-2.852-1.949-3.392-.364-.429-.297-.717.166-.719.291-.001 1.501-1.094 4.114-3.714 2.036-2.042 3.704-3.625 3.707-3.518.003.108.023 1.923.046 4.035.039 3.776.047 3.84.434 3.895.876.125.977-.406.979-5.17l.003-4.393.836-.868c.46-.478.953-.868 1.095-.868.142 0 .258-.076.258-.169 0-.092.465-.606 1.033-1.142a78.087 78.087 0 0 0 2.135-2.117c1.274-1.319 1.585-1.418 1.585-.503m-4.753 4.296c0 .268.122.366.457.366s.457-.098.457-.366-.122-.365-.457-.365-.457.097-.457.365m-7.404 12.249c-.064.103.09.183.355.183.257 0 .468-.083.468-.183 0-.101-.16-.183-.355-.183-.195 0-.406.082-.468.183m47.207 42.933c-.525.793-.489.942.229.942.736 0 1.143-.385 1.071-1.014-.096-.849-.713-.815-1.3.072m1.148-.083c0 .396-.299.66-.747.66-.297 0-.178-.707.153-.9.484-.282.594-.238.594.24"
        />
        <path
          fill={forceColor ?? '#fb462f'}
          d="M190.27 18.132c.159.158 2.727.232 9.681.277 5.803.038 9.845.139 10.448.26.541.109 2.392.27 4.113.358 3.944.202 4.647.304 4.754.69.046.166.136.959.2 1.764.265 3.348.649 4.696 1.195 4.202.346-.313.414-.31 1.739.084.759.225 1.501.363 1.649.306.148-.057.475-.024.727.071.253.096.89.184 1.416.196 1.622.034 3.291.344 4.247.788.515.239 1.666.524 2.639.653.948.126 2.106.343 2.572.481a9.89 9.89 0 0 0 1.608.32c.418.038.865.153.992.255.128.102.418.243.644.312.226.069.411.208.411.307 0 .1.083.131.183.069.101-.062.183-.033.183.065 0 .218 2.21.802 3.136.829.367.011.625.09.571.176-.053.087.181.102.521.035.47-.093.551-.075.342.077-.213.156-.162.174.229.083.276-.064.503-.042.503.049 0 .092.273.265.607.386.693.25 1.333.281.764.036-.241-.103-.273-.16-.092-.167.151-.005.398.07.549.167.151.098.192.181.091.184-.404.015 2.61 1.42 3.291 1.534a8.354 8.354 0 0 1 1.371.372c.352.138 1.38.47 2.285.74.905.269 1.933.576 2.285.683.352.106.886.367 1.186.58.887.628 1.383.843 1.943.843.29 0 .528.08.528.176 0 .097.349.269.777.383.427.113 1.023.353 1.325.533.302.179 1.001.47 1.554.647.553.176 1.097.393 1.208.48.112.088.648.313 1.193.501.545.187 1.441.628 1.991.979 1.234.787 2.942 1.603 3.355 1.603.17 0 .356.123.414.274.063.166.339.275.697.275.871 0 1.245.979 1.501 3.93.132 1.521.322 2.102.686 2.102.148 0 1.519.627 3.048 1.392 2.656 1.329 3.035 1.488 3.625 1.519.142.008.211.062.152.121-.291.291 1.532 1.468 1.925 1.243.123-.071.161-.06.085.024-.076.084.417.509 1.097.945.679.435 1.317.895 1.418 1.022.1.126.717.51 1.371.852.653.341 1.394.777 1.645.967.813.615 1.721 1.216 2.41 1.595.37.203.726.456.791.56.064.105.666.47 1.338.811.671.342 1.494.876 1.828 1.187.335.31.87.699 1.189.864.661.341 3.048 2.263 3.048 2.454 0 .176.621.314 2.013.45 2.016.196 4.025.735 4.498 1.207a16.5 16.5 0 0 0 1.26 1.069c1.538 1.184 5.831 4.935 8.013 7 1.191 1.127 2.301 2.122 2.468 2.211.167.088 1.217 1.096 2.333 2.239 1.933 1.979 2.072 2.083 2.925 2.188 1.687.209 3.366.79 3.541 1.226.088.221.539.812 1.001 1.315 1.299 1.413 2.231 2.487 2.885 3.327 1.446 1.856 2.446 2.956 2.701 2.969.39.02.842 1.687 1.192 4.399.215 1.656.415 2.5.73 3.066.238.43.344.726.235.659-.11-.068-.043.142.147.466.24.408.365.5.406.301.089-.434.5-.345.846.182.169.258.469.631.668.83.334.334 1.652 2.185 2.723 3.825.251.385.889 1.32 1.416 2.078.528.757.96 1.456.96 1.551 0 .096.213.329.472.518l.472.344-.491 1.038-.492 1.039.477.566c.262.312.476.636.476.721 0 .086.196.388.435.672.239.284.712 1.052 1.051 1.705.665 1.283.652 1.263 1.37 2.159.643.802 1.166 1.848 1.166 2.332 0 .409.759 1.359 1.085 1.359.103 0 .363.35.577.777.215.427.535.942.713 1.143.177.201.423.8.547 1.331.251 1.075.419 1.067 1.02-.049.417-.774.549-.8.715-.14.138.552 2.01 4.12 2.351 4.482.229.242 1.737 3.459 1.906 4.065.056.201.213.431.348.512.134.08.245.232.245.338 0 .197.094.429 1.072 2.638.315.712.573 1.462.573 1.666 0 .205.165.583.368.84.202.257.497.906.654 1.442.158.535.527 1.489.821 2.12.293.63.536 1.288.54 1.462.004.174.117.517.253.762.181.327.198.583.064.969-.288.825-.089.787 1.564-.302 1.815-1.195 1.769-1.183 1.769-.458 0 .31.194 1.07.431 1.691.577 1.511 1.906 5.724 2.058 6.522.067.351.191.728.276.837.085.11.27.526.411.926.141.4.423 1.092.627 1.539.203.447.541 1.552.75 2.457.209.904.466 1.906.572 2.227.106.32.27 1.02.365 1.554.096.534.294 1.506.441 2.159.147.654.389 1.764.539 2.468.149.704.436 1.651.638 2.105.201.454.455 1.541.564 2.416.109.875.281 1.985.382 2.466.101.481.254 1.409.34 2.063a57.4 57.4 0 0 0 .372 2.376l.466 2.56c.24 1.316.601 4.426.689 5.927.025.423.147.752.299.802.214.07.235-.195.13-1.586-.083-1.111-.062-1.67.064-1.67.104 0 .192.185.196.411.003.227.08 1.234.171 2.24.101 1.126.099 1.895-.007 2.002-.21.214-.229 2.294-.02 2.294.304 0 .515 2.194.554 5.759.022 2.011.124 4.438.227 5.393.117 1.088.128 2.522.029 3.839-.087 1.156-.14 2.555-.117 3.108.125 3.108.112 4-.098 6.57-.132 1.615-.171 3.258-.091 3.84.077.558.113 1.098.08 1.199-.18.549-.596 4.469-.65 6.124-.034 1.056-.227 3.112-.429 4.57-.433 3.124-.627 5.066-.626 6.255.001.475-.059.826-.132.78-.2-.123-.375.977-.241 1.511.087.347.058.43-.112.325-.175-.108-.198 0-.099.453.084.381.065.554-.053.481-.197-.122-.406.276-.401.768.002.264.027.268.18.031.289-.447.216 1.628-.086 2.468-.145.402-.267 1.022-.272 1.378-.004.356-.172.969-.373 1.364-.201.394-.366.9-.366 1.125 0 .224-.072.452-.161.506-.088.055-.119.468-.068.918a3.304 3.304 0 0 1-.208 1.569c-.166.413-.257.822-.203.909.054.087-.12.637-.387 1.222-.464 1.018-.628 1.725-.969 4.184-.085.61-.287 1.367-.45 1.682-.163.315-.296.703-.296.862 0 .159-.195.677-.432 1.151-.464.925-.816 3.148-.499 3.148.111 0 .084.283-.07.718-.339.961-.811 1.814-.82 1.483-.004-.147-.176.058-.382.457-.237.457-.339.913-.277 1.236.068.355.034.472-.111.383-.121-.075-.158-.048-.088.066.159.257-.056.802-.265.672-.09-.055-.164-.014-.164.093 0 .106.082.193.183.193.489 0 .127 1.397-.888 3.431-.785 1.574-1.103 2.436-1.194 3.235-.068.599-.245 1.222-.392 1.385-.148.163-.268.422-.268.576 0 .154-.206.583-.457.954-.252.37-.458.828-.458 1.017 0 .189-.192.576-.428.86-.325.393-.397.633-.296.998.073.265.062.594-.026.731-.087.138-.159.436-.161.662-.001.242-.115.411-.277.411-.18 0-.274.181-.274.529 0 .301-.118.574-.274.634-.151.058-.274.314-.274.568 0 .29-.103.463-.275.463-.151 0-.274.113-.274.252 0 .138-.123.354-.274.479-.155.129-.274.527-.274.917 0 .444-.098.727-.275.795-.15.057-.274.275-.274.482 0 .207-.123.424-.274.482-.151.058-.274.251-.274.429s-.124.426-.274.551a.85.85 0 0 0-.275.571c0 .851-.336.217-.533-1.006-.287-1.781-1.112-2.757-1.112-1.316 0 .232-.249.734-.553 1.117-.576.725-.822 1.367-.678 1.769.206.574-.223.876-1.243.876-1.416 0-1.398.471.023.588.562.047 1.076.169 1.142.273.067.103.322.25.569.327.247.077.561.253.699.39.467.467.772.253 1.334-.938.309-.653.638-1.188.731-1.188.093 0 .17-.159.17-.353 0-.194.103-.465.228-.603.211-.23.685-1.049 1.405-2.426.157-.302.337-.589.399-.64.062-.05.175-.293.252-.54.077-.247.253-.561.391-.699a.982.982 0 0 0 .25-.602c0-.194.076-.353.168-.353.093 0 .264-.288.38-.64.116-.352.287-.639.38-.639.093 0 .169-.159.169-.353 0-.194.119-.472.265-.618.146-.146.319-.481.385-.744.066-.264.194-.479.284-.479.089 0 .163-.094.163-.21 0-.115.287-.808.639-1.539.352-.732.64-1.419.64-1.528 0-.108.083-.197.183-.197.101 0 .183-.094.183-.208 0-.203.612-1.619.937-2.168.089-.151.208-.398.264-.549.056-.151.218-.543.36-.871l.552-1.28c.162-.375.411-.915.554-1.2.142-.285.258-.598.258-.696 0-.161.28-.84 1.019-2.47.143-.317.261-.657.261-.756 0-.099.123-.416.273-.704.15-.288.273-.651.274-.807a.757.757 0 0 1 .171-.457c.175-.179.623-1.331.955-2.459.104-.352.263-.718.355-.813.091-.096.166-.343.167-.549 0-.206.124-.61.274-.898.15-.288.273-.605.273-.704 0-.099.115-.439.257-.756.141-.317.56-1.563.931-2.77.371-1.206.756-2.413.856-2.681.1-.268.252-.762.339-1.097.086-.335.331-1.185.544-1.889.212-.704.455-1.568.538-1.92.084-.352.332-1.298.551-2.102.428-1.571.774-2.954 1.214-4.845.253-1.086.415-1.83.979-4.479.276-1.297.679-3.4.998-5.21l.485-2.742c.717-4.047 1.542-11.473 2.012-18.099.26-3.667.263-18.276.004-21.938-.821-11.616-2.089-20.217-4.528-30.713-.656-2.821-1.059-4.391-1.715-6.672a94.738 94.738 0 0 1-.423-1.554c-.732-2.778-3.153-10.273-4.221-13.072-.231-.603-.683-1.796-1.006-2.651-.558-1.48-1.671-4.245-2.022-5.027-.09-.201-.383-.9-.65-1.554-.456-1.115-.774-1.816-2.695-5.941-1.494-3.21-4.607-9.233-5.549-10.737-.235-.375-.427-.725-.427-.778 0-.119-3.971-6.733-4.941-8.229a49.002 49.002 0 0 1-.947-1.51c-.287-.5-3.474-5.217-3.612-5.346-.054-.05-.297-.374-.54-.72-1.165-1.656-2.831-3.951-2.926-4.033-.059-.05-.334-.428-.613-.838a12.95 12.95 0 0 0-.823-1.097 47.343 47.343 0 0 1-1.32-1.63 158.928 158.928 0 0 0-3.355-4.113c-4.238-5.023-4.392-5.188-10.813-11.614-4.331-4.336-7.379-7.239-9.324-8.884-.402-.34-.82-.7-.928-.8a42.016 42.016 0 0 0-1.087-.915c-.49-.402-1.389-1.143-1.998-1.647a124.754 124.754 0 0 0-2.386-1.915c-.704-.55-1.321-1.049-1.371-1.109-.05-.06-.873-.684-1.828-1.387l-3.474-2.554c-1.752-1.288-6.221-4.349-6.989-4.787-.228-.13-.908-.556-1.512-.946-1.667-1.078-8.091-4.942-8.215-4.942-.061 0-.417-.192-.792-.427-2.073-1.299-9.6-5.098-13.936-7.032-3.02-1.347-10.592-4.424-10.889-4.424-.064 0-.375-.113-.692-.252-2.211-.968-11.607-4.003-15.384-4.969-.503-.129-1.408-.368-2.011-.532-6.643-1.806-16.753-3.721-23.675-4.484a43.777 43.777 0 0 1-2.086-.27c-.292-.054-.808.001-1.145.123-.519.188-.694.174-1.142-.09-.449-.265-1.061-.312-4.097-.312-2.929 0-3.619-.049-3.844-.274-.237-.237-1.62-.274-10.196-.274-7.62 0-9.871.05-9.706.216m-7.272.344-3.382.347c-1.106.113-2.61.325-3.341.472-.732.146-1.626.266-1.987.266-.592 0-1.868.202-4.818.762a52.69 52.69 0 0 1-2.168.35c-.639.087-1.421.238-1.737.335-.576.178-1.821.422-3.865.759-.603.099-1.227.253-1.387.342-.16.088-.757.219-1.328.29-.571.072-1.079.197-1.129.279-.051.081-.564.205-1.14.275-.577.07-1.131.192-1.232.271-.1.079-.594.229-1.096.333-1.21.249-2.413.568-3.2.849-.732.261-1.924.582-3.088.832-.442.095-.894.245-1.006.335-.111.089-.551.22-.978.291-.427.07-.819.198-.873.284-.053.086-.464.212-.915.279-.45.068-.818.188-.818.269 0 .08-.35.204-.777.276-.427.072-.939.244-1.137.382-.199.138-.59.251-.869.251s-.508.079-.508.175c0 .096-.308.231-.685.3-.377.069-.848.237-1.046.374-.199.136-.533.248-.742.248-.21 0-.541.121-.737.268-.195.148-.524.271-.731.275-.207.003-.536.126-.731.274-.195.147-.524.271-.731.274-.207.003-.537.127-.732.274-.195.148-.478.274-.629.281-.151.006-.603.171-1.005.365-.402.194-.876.356-1.051.359-.176.004-.32.08-.32.17 0 .089-.227.215-.503.28-.277.065-.769.24-1.094.391-.326.15-.86.385-1.189.523-2.447 1.03-3.613 1.596-3.613 1.754 0 .085-.156.204-.347.265-.236.075-.317.224-.253.469.117.446.182.446.924-.007.33-.201.764-.365.966-.365.202 0 .414-.123.472-.274.058-.151.292-.274.52-.274.229 0 .518-.124.643-.275.125-.15.495-.274.823-.274.327 0 .697-.123.822-.274.126-.151.372-.274.549-.274.176 0 .423-.124.548-.274.126-.151.345-.275.487-.275.143 0 .582-.164.976-.365.394-.201.876-.366 1.07-.366.194 0 .401-.123.459-.274.065-.17.343-.274.728-.274.343 0 .726-.124.851-.275.125-.15.425-.274.668-.274.242 0 .487-.123.545-.274.068-.177.351-.274.795-.274.39 0 .788-.119.917-.275.125-.15.402-.274.616-.275.214 0 .625-.124.913-.274.288-.15.639-.273.779-.273.141 0 .413-.098.604-.218.251-.156.467-.164.775-.026.308.139.578.129.975-.035.567-.234 1.774-.611 3.199-.999a24.01 24.01 0 0 0 1.462-.453c2.016-.72 2.284-.802 4.297-1.314 1.294-.329 1.974-.355 2.066-.08.097.293 1.597.247 1.849-.057.117-.141.559-.297.982-.347.769-.091 1.849-.347 3.055-.726.352-.11 1.01-.264 1.463-.341 2.038-.349 3.056-.555 3.564-.721.302-.098 1.189-.23 1.972-.292.783-.063 1.466-.183 1.519-.269.053-.085.302-.155.554-.155.252 0 .622-.087.821-.194.213-.114 1.661-.199 3.508-.206 2.151-.008 3.317-.086 3.692-.249.615-.266 3.931-.46 3.931-.23 0 .228.546.174.815-.081.266-.253.347-.319 2.249-1.853l1.328-1.071 2.216-.154c2.875-.2 2.974-.349.232-.352-1.198-.002-2.343-.031-2.544-.065-.201-.034-.983.002-1.737.079M78.151 64.539c-.2.076-1.035.805-1.857 1.62-.822.816-1.582 1.483-1.691 1.483-.108 0-.197.123-.197.274a.275.275 0 0 1-.274.274.276.276 0 0 0-.275.274.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.274.274 0 0 1-.274.274.274.274 0 0 0-.274.274c0 .151-.08.274-.177.274-.097 0-.755.579-1.463 1.286-.707.708-1.286 1.366-1.286 1.463 0 .097-.123.177-.274.177a.274.274 0 0 0-.274.274.274.274 0 0 1-.274.274.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.276.276 0 0 0-.274.275c0 .15-.123.274-.274.274-.151 0-.274.084-.274.187 0 .104-.371.558-.823 1.011-.452.452-.823.855-.823.895 0 .04-.41.51-.912 1.046s-.913 1.077-.914 1.203c-.001.125-.125.228-.276.228a.275.275 0 0 0-.274.274.276.276 0 0 1-.274.275c-.151 0-.275.106-.275.237 0 .13-.243.439-.54.685-.298.247-.545.51-.549.586-.004.075-.172.302-.373.503-.394.393-.478.731-.183.731.101 0 .183-.095.183-.211 0-.116.308-.513.685-.882.377-.368 1.179-1.236 1.783-1.928 2.078-2.385 10.63-11.025 11.877-12 .298-.234.889-.772 1.314-1.196.425-.425.983-.825 1.242-.89.258-.065.505-.175.548-.244.143-.232-.539-.515-.907-.377M60.146 83.295c0 .243.05.255.274.069.151-.125.275-.259.275-.297 0-.038-.124-.069-.275-.069-.15 0-.274.134-.274.297m-1.097 1.257c0 .151-.079.274-.176.274-.097 0-.264.165-.372.366-.156.292-.139.366.085.366a.28.28 0 0 0 .281-.275c0-.15.062-.274.138-.274.077 0 .242-.164.368-.365.19-.305.182-.366-.048-.366a.275.275 0 0 0-.276.274m238.265 24.818c-.038 4.909-.118 5.683-1.247 12.019-.408 2.29-.642 3.365-.816 3.748-.091.201-.22.654-.286 1.006-.066.352-.24 1.051-.387 1.554l-.562 1.919a65.953 65.953 0 0 1-.734 2.285c-.242.704-.51 1.527-.596 1.828-.335 1.177-.889 2.626-1.387 3.626-.141.285-.257.598-.257.695 0 .155-.237.74-.914 2.261-.09.201-.338.777-.552 1.279-1.058 2.488-1.444 3.354-1.67 3.748a4.54 4.54 0 0 0-.26.549c-.057.15-.181.397-.275.548a3.795 3.795 0 0 0-.274.549c-.057.15-.173.397-.259.548-.086.151-.509.973-.942 1.828-.433.855-.83 1.595-.882 1.646-.053.05-.249.379-.436.731-.727 1.368-1.254 2.307-1.59 2.833a14.6 14.6 0 0 0-.538.914c-.104.202-.351.613-.549.915a8.72 8.72 0 0 0-.489.822c-.07.151-.4.664-.733 1.141-.333.477-.606.916-.606.977 0 .061-.493.849-1.097 1.751-.603.902-1.097 1.683-1.097 1.736 0 .053-.144.285-.32.515-.176.231-.443.603-.594.828a6.94 6.94 0 0 1-.461.616c-.103.113-.668.926-1.256 1.805-.588.88-1.142 1.6-1.23 1.6-.088 0-.161.085-.161.189 0 .237-2.352 3.404-3.667 4.939-.157.183-.445.55-.64.814-.554.751-1.238 1.593-1.588 1.955-.176.181-.321.392-.323.467-.001.075-.309.472-.685.881a47.508 47.508 0 0 0-1.415 1.633 99.867 99.867 0 0 1-2.376 2.758l-1.28 1.446c-.603.682-1.508 1.691-2.011 2.242-.503.55-1.14 1.253-1.417 1.561-.497.554-.673 1.225-.32 1.225.101 0 .183.164.183.365 0 .202.082.366.183.366.1 0 .183-.126.183-.28a.45.45 0 0 1 .274-.385c.151-.058.274-.22.274-.36 0-.14.124-.255.274-.255a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.274.274 0 0 0 .274-.274c0-.151.123-.275.274-.275.151 0 .275-.088.275-.197 0-.108.356-.554.792-.99a44.653 44.653 0 0 0 1.783-1.934 80.94 80.94 0 0 1 1.446-1.63c.252-.268.905-1.016 1.453-1.661a94.114 94.114 0 0 1 1.279-1.486c.157-.171.368-.417.469-.548 1.251-1.612 2.204-2.814 2.289-2.888.058-.05.348-.42.644-.823.297-.402.681-.888.855-1.081.174-.193.544-.687.823-1.097.279-.411.589-.84.689-.953a7.11 7.11 0 0 0 .457-.613c.151-.223.686-.965 1.189-1.649a82.641 82.641 0 0 0 1.188-1.649c.151-.224.377-.514.503-.645.125-.132.228-.294.228-.36 0-.067.144-.31.32-.541.438-.574.568-.767 2.327-3.478.848-1.307 1.628-2.476 1.733-2.597.105-.121.191-.301.191-.398 0-.098.102-.29.228-.427.303-.331.632-.844.969-1.514.152-.301.438-.795.635-1.096.196-.302.416-.672.487-.823.072-.151.468-.85.882-1.554.991-1.688 4.843-9.449 4.843-9.757 0-.133.111-.46.248-.727 1.26-2.457 2.539-5.68 4.039-10.174 3.059-9.168 4.654-20.388 3.867-27.194-.278-2.402-.383-1.601-.42 3.2m-56.497 94.631c-.324.162-.591.398-.594.524-.002.125-.082.228-.177.228-.553 0-1.106.887-1.097 1.758.011 1.022.599.571.653-.501.025-.499.85-1.422 1.282-1.434.114-.003.342-.211.507-.463.338-.516.263-.53-.574-.112m-2.287 4.134c-.197 1.07-.179 1.485.055 1.251.107-.107.168-.596.137-1.088l-.057-.894-.135.731m-203.795 1.356c-.151.087-.645.215-1.097.287-.452.071-1.005.245-1.228.386-.222.141-.503.256-.623.256-.121 0-.626.261-1.122.58-.944.605-1.123 1.504-.458 2.305.135.163.209 1.172.209 2.86 0 2.599-.079 3.021-.809 4.354-.272.496-.251.505 1.152.507.729.001 1.729.124 2.223.274.493.15 1.151.273 1.462.273.311.001.801.124 1.089.275.288.15.66.273.827.273.168 0 .467.113.665.251.198.137.628.309.955.38.327.071.594.196.594.277 0 .082.225.205.501.275.275.069.543.181.595.248.051.067.463.32.916.562 2.621 1.403 6.475 5.257 7.877 7.878.242.452.488.864.546.914.059.051.295.504.526 1.006.23.503.532 1.133.671 1.4.138.266.254.637.257.822.003.186.126.497.274.693.148.195.271.565.275.822.004.257.124.674.268.925.143.251.264.733.267 1.071.004.337.134 1.104.289 1.703.156.6.24 1.229.187 1.398-.158.51.125.689 1.085.684 1.034-.005 3.018.365 3.839.716 1.693.723 2.468 1.111 2.468 1.235 0 .077.094.14.208.14.322 0 2.561 1.87 3.271 2.732.349.424.764.914.923 1.09.158.176.344.436.413.58.069.143.283.507.477.808.714 1.115 1.575 3.028 1.747 3.885l.12.594 2.773.014c1.526.007 3.185.084 3.688.171 1.933.335 2.946.575 3.501.83.317.146.657.265.756.265.099 0 .416.123.704.273.288.15.657.274.821.274.163.001.4.125.525.276.125.15.361.277.525.282.164.004.627.209 1.029.456.402.246.854.506 1.005.577 2.033.961 6.371 4.81 7.679 6.811.15.23.356.514.457.63.435.503 1.005 1.39 1.005 1.565 0 .105.074.19.165.19.091 0 .259.227.374.503.873 2.106.975 2.153 2.167 1.006.496-.478 1.748-1.65 2.782-2.605 2.392-2.21 2.373-2.191 2.373-2.378 0-.501-4.995-4.514-6.025-4.841-.206-.065-.373-.195-.373-.289 0-.094-.121-.171-.269-.171-.234 0-1.118-.381-2.151-.928-.175-.093-.422-.169-.549-.17-.127 0-.477-.131-.779-.289-.302-.159-.96-.364-1.463-.455a76.63 76.63 0 0 1-1.736-.343c-.453-.096-1.99-.179-3.416-.183-3.134-.01-3.382-.086-3.71-1.133-.369-1.179-1.402-3.564-1.65-3.811-.051-.051-.317-.421-.592-.823-.91-1.333-3.083-3.382-3.585-3.382-.116 0-.21-.062-.21-.138 0-.146-1.418-.826-2.194-1.053-.251-.073-.541-.2-.643-.281-.103-.082-1.113-.207-2.245-.279-2.314-.146-2.271-.117-2.436-1.631-.181-1.66-.524-3.612-.707-4.022a5.665 5.665 0 0 1-.283-.972 4.852 4.852 0 0 0-.375-1.097c-.14-.27-.256-.58-.257-.69 0-.11-.201-.563-.446-1.006a56.023 56.023 0 0 1-.855-1.628c-.914-1.834-3.789-5.035-5.662-6.307-.444-.301-.849-.589-.899-.64-.102-.102-2.119-1.096-3.108-1.531-1.892-.832-3.323-1.136-6.435-1.367-1.905-.142-2.185-.33-1.747-1.173.597-1.15.897-2.842.817-4.594-.098-2.116-.433-3.411-1.257-4.863a7.015 7.015 0 0 1-.274-.549c-1.07-2.477-6.808-5.274-8.654-4.22m203.245 1.173c-.076.184-.13.76-.121 1.28.016.917.022.927.193.332.209-.727.146-2.145-.072-1.612m-.585 2.544c-.038.126-.122.595-.185 1.043-.063.447-.182.899-.264 1.005-.083.106-.205.68-.272 1.277-.067.596-.191 1.172-.275 1.279-.085.108-.212.727-.283 1.377-.07.65-.184 1.267-.252 1.371-.118.18-.307 1.094-.777 3.754-.116.654-.278 1.353-.361 1.554-.263.643-.402 2.468-.187 2.468.108 0 .196-.29.196-.645 0-.355.129-.952.288-1.326.158-.374.364-1.091.458-1.594.243-1.301.557-2.768 1.518-7.085.464-2.087.844-4 .844-4.25 0-.47-.323-.634-.448-.228m-3.459 16.09a4.228 4.228 0 0 0-.113.889c-.005.966-.697 2.061-2.124 3.36-.774.703-1.737 1.591-2.141 1.973-.404.381-1.057.957-1.453 1.28-.396.322-1.245 1.1-1.888 1.728-.643.629-1.251 1.143-1.353 1.143-.101 0-.184.123-.184.274 0 .151-.082.274-.183.274-.276 0-.946.727-.872.947.035.107.431-.153.879-.576a58.578 58.578 0 0 1 1.816-1.621 29.299 29.299 0 0 0 1.372-1.231c.203-.209.514-.432.69-.497.176-.065.32-.203.32-.307 0-.103.123-.188.274-.188.331 0 .367.48.046.61-.137.055-.1.098.091.107.176.008.32-.109.32-.26 0-.151.124-.274.274-.274.151 0 .275-.083.275-.183 0-.101-.124-.183-.275-.183-.422 0-.337-.154.486-.882.418-.369 1.056-.941 1.417-1.271.361-.33.79-.566.954-.526.224.055.272-.022.196-.315-.089-.346-.066-.361.211-.133.171.14.33.222.353.182.25-.418.881-2.672.973-3.475.118-1.036-.145-1.652-.361-.845m140.561 5.985c-.068.217-.166.352-.216.302-.05-.05-.035-.268.033-.484.069-.217.166-.353.217-.302.05.05.035.268-.034.484m-153.076 7.521c-.333.297-.579.619-.547.714.032.096.372-.105.756-.447.384-.341.63-.663.547-.714-.083-.052-.423.149-.756.447m-1.86 1.62c0 .101-.094.183-.21.183-.115 0-.473.267-.796.594a33.389 33.389 0 0 1-1.652 1.508 64.403 64.403 0 0 0-1.933 1.737 72.548 72.548 0 0 1-1.918 1.737 34.506 34.506 0 0 0-1.632 1.508c-.319.327-.705.594-.858.594-.545 0-.776.516-.413.918.609.672 1.168.409 3.379-1.586l1.646-1.487a53.327 53.327 0 0 1 1.645-1.432c.352-.288.855-.729 1.119-.982a68.3 68.3 0 0 1 .914-.857c.77-.705.935-.974.746-1.209-.206-.256.038-1.043.323-1.043a.186.186 0 0 0 .189-.183c0-.1-.124-.183-.275-.183-.15 0-.274.083-.274.183m-117.935 29.485a635.53 635.53 0 0 1-3.907 3.708l-2.151 2.024-.024 3.935c-.015 2.635-.092 4.021-.231 4.193-.236.291-.526 1.811-.346 1.811.064 0 .636-.515 1.269-1.143.634-.628 1.991-1.917 3.015-2.864 4.13-3.814 5.764-5.36 5.9-5.583.216-.353-.614-5.049-1.095-6.19a3.249 3.249 0 0 1-.217-1.051c0-.828-.312-.664-2.213 1.16m14.188 14.875c-1.443.114-5.119.798-5.942 1.107-.151.057.261.207.914.335 1.777.347 2.813.635 2.922.812.241.388 1.07.4 1.45.02.21-.21.419-.382.464-.382.045 0 .498-.415 1.005-.922 1.212-1.212 1.277-1.134-.813-.97m226.346 1.168c-1.447.433-2.947 1.379-4.166 2.626-.556.57-1.793 2.358-1.803 2.608-.003.084-.165.481-.359.883-.194.403-.356.83-.36.95-.022.788-1.784.714-2.839-.119-.101-.08-.96-.286-1.91-.458-2.369-.429-4.223-.073-6.866 1.318-1.814.955-3.568 3.687-3.908 6.087a13.148 13.148 0 0 0-.075 2.377l.095 1.18-1.168.016c-.952.013-1.309.109-1.927.518-1.095.724-1.254 1.386-.334 1.386.237 0 .459.07.492.156.034.086.514.414 1.067.73 1.505.858.39.784-1.234-.082-2.798-1.492-7.828-1.727-10.649-.498-1.563.68-2.194 1.018-2.194 1.172 0 .253-1.208.2-1.425-.062-.105-.126-.711-.489-1.348-.806-5.246-2.615-11.94-.726-15.654 4.417-.517.716-1.264 1.919-1.419 2.285-1.198 2.825-1.171 2.788-1.901 2.662a64.076 64.076 0 0 0-2.019-.286c-.754-.096-1.717-.269-2.139-.383-1.311-.354-6.559.116-7.974.715-.283.119-.667.217-.853.217-.186 0-.572.114-.857.252-.284.139-.846.401-1.248.583-2.116.958-4.522 2.875-5.492 4.375-.58.899-.795 1.265-.911 1.554a30.81 30.81 0 0 1-.358.823c-.136.302-.357.917-.491 1.367-.233.783-.316.855-1.895 1.655-2.26 1.145-3.539 2.023-5.082 3.489-1.481 1.407-1.667 1.464-2.419.743-.295-.284-.907-.699-1.36-.923a58.31 58.31 0 0 1-1.097-.555c-.956-.516-1.44-.721-1.965-.833-.327-.07-.594-.191-.594-.269 0-.145-1.493-.454-3.748-.777-.704-.101-2.148-.137-3.209-.081-2.096.111-2.337.019-2.639-1.008-.136-.462-.702-1.663-1.062-2.254-.807-1.326-3.058-4.119-3.319-4.119-.055 0-.251-.144-.435-.32a6.475 6.475 0 0 0-.754-.594 5.625 5.625 0 0 1-.657-.503c-.131-.125-.287-.228-.346-.228s-.579-.268-1.156-.594c-1.077-.611-1.361-.731-3.242-1.373-2.463-.841-8.408-.876-9.934-.06-.204.109-.498.199-.653.199-.383 0-3.139 1.309-4 1.9-.382.262-.735.476-.785.476-.301 0-3.374 3.106-4.031 4.074-.288.424-.585.798-.661.832-.075.033-.137.183-.137.332 0 .311.556-.041 1.611-1.02.333-.309.645-.561.693-.561.086 0 1.174-.736 1.353-.915.175-.176 1.778-.914 1.985-.914.114 0 .208-.082.208-.182 0-.101.144-.184.32-.184.176-.001.54-.116.808-.256s.844-.313 1.28-.385c.435-.072.907-.224 1.048-.339.354-.286 8.086-.289 8.445-.003.141.113.562.26.934.327.373.067.908.242 1.189.388.28.147.586.267.679.268.406.002 3.142 1.482 4.218 2.281 2.557 1.897 6.086 6.04 6.119 7.181.003.125.085.228.181.228.096 0 .228.285.293.633.189 1.007.328 1.047 3.593 1.03 1.637-.009 3.306.071 3.709.178.402.106 1.098.271 1.546.366.448.095.897.254.996.354.1.1.297.181.437.181.447 0 3.198 1.285 4.185 1.955.342.232.659.422.705.422.046 0 .25.167.455.371.439.44.535.398 1.862-.828 1.449-1.34 2.194-1.92 2.463-1.92.132 0 .239-.084.239-.187s.185-.271.411-.374c.622-.281 1.241-.652 1.469-.88a.83.83 0 0 1 .511-.204c.169 0 .409-.123.534-.274.125-.151.414-.275.641-.275.485 0 .896-.562 1.069-1.462.147-.763 1.211-2.955 1.535-3.163.126-.08.229-.238.229-.35 0-.112.123-.334.274-.494 2.316-2.448 3.389-3.32 5.484-4.456.912-.494 2.248-1.043 2.539-1.043.15 0 .321-.078.38-.173.058-.094.495-.222.97-.283.476-.062 1.02-.198 1.21-.303.919-.508 9.297-.522 10.279-.018.995.511 2.264.419 2.264-.165 0-.399.999-2.318 1.967-3.779.659-.993 3.103-3.56 3.862-4.055.232-.15.59-.418.797-.594.208-.176.488-.32.623-.32.136 0 .246-.063.246-.139 0-.292 2.63-1.324 4.479-1.757 2.432-.571 5.578-.151 7.587 1.012.151.087.501.247.777.356.277.109.503.263.503.342 0 .079.144.192.32.251.176.059.466.213.645.341.249.179.357.183.461.017.074-.119.339-.304.589-.411.249-.106.597-.276.773-.377l.64-.367c.176-.101.402-.212.503-.247.1-.034.47-.164.822-.289 1.905-.675 4.741-.978 6.285-.671.817.162 1.695.294 1.953.294.257 0 .627.121.822.268.195.148.53.271.744.275.214.003.491.129.617.28.125.15.376.274.557.274.182 0 .454.123.605.274.151.151.35.274.442.274.092 0 .358.165.589.366.527.457.664.452 1.491-.057l.668-.411-.409-.909c-1.374-3.05-1.278-5.949.288-8.678.086-.151.237-.459.335-.685.098-.227.262-.412.365-.412.103 0 .187-.091.187-.202 0-.256 1.906-2.174 2.159-2.174.103 0 .215-.062.249-.137.089-.201 1.204-.96 1.409-.96.097 0 .409-.118.693-.262 1.646-.83 5.761-1.169 6.825-.561.251.144.632.264.846.268.214.003.491.13.617.281.125.15.376.274.557.274.182 0 .439.107.572.238.517.511.872.505.986-.016.106-.483.519-1.495.838-2.05.086-.151.211-.398.277-.549.742-1.698 4.034-4.642 5.642-5.045.48-.121.651-.805.201-.805-.137 0-.812-.288-1.499-.64-1.313-.672-3.976-.892-5.451-.45m7.794 1.221c.277.042.729.042 1.006 0 .276-.042.05-.076-.503-.076s-.779.034-.503.076m-223.469 1.286c-.158.176-1.236 1.22-2.396 2.32l-2.11 2 .528.463c.29.254.528.559.528.677 0 .117.123.261.274.319a.45.45 0 0 1 .274.385c0 .154.069.28.154.28.084 0 .249.185.367.411.118.227.373.659.566.96.688 1.073 1.838 3.577 1.838 4.001 0 .151.075.32.167.377.092.057.225.452.295.879.07.427.206.873.301.991.76.943.74 11.061-.023 11.824-.105.105-.192.401-.192.658-.001.256-.124.701-.275.989-.15.288-.273.601-.273.696 0 .393-1.972 4.489-2.244 4.66-.078.049.087.392.366.762.688.913.939 1.313 1.194 1.905.119.277.274.503.344.503.071 0 .183.247.249.549.066.301.196.548.289.548.092 0 .168.104.168.231s.164.539.365.914c.202.375.366.799.366.942 0 .143.114.493.254.778.407.829.686 1.724.871 2.797.222 1.287.423 1.387 1.33.659.41-.328.868-.652 1.019-.719.15-.067.521-.28.822-.473 1.039-.666 3.574-1.838 3.976-1.838a.707.707 0 0 0 .429-.181c.176-.177.761-.331 2.816-.741a17.788 17.788 0 0 0 1.554-.379c.903-.292 4.82-.402 6.033-.17.604.116 1.665.285 2.36.376.694.09 1.348.25 1.453.355.105.105.36.194.566.198.206.003.704.165 1.106.359.402.194.865.356 1.029.359.163.004.4.13.525.281.125.151.372.274.548.274.177 0 .423.123.549.274.125.151.372.274.548.274.177 0 .423.124.548.275.126.151.304.274.396.274.2 0 1.315.763 1.402.96.034.075.174.137.311.137s.316.103.396.228c.081.126.557.558 1.058.96.945.758 2.492 2.337 3.225 3.291.231.301.526.614.656.694a.533.533 0 0 1 .235.397c0 .137.061.277.137.31.208.093.96 1.209.96 1.425 0 .105.063.19.141.19.077 0 .458.617.846 1.371.744 1.447.842 1.536 1.206 1.097.126-.151.341-.274.48-.274.138 0 .252-.077.252-.17 0-.094.185-.229.411-.299.226-.071.452-.189.503-.262.05-.074.544-.354 1.097-.623a28.71 28.71 0 0 0 1.279-.652c.151-.089.768-.343 1.371-.562a23.6 23.6 0 0 0 1.378-.538c.154-.076.565-.199.914-.274.348-.075.716-.201.816-.28.101-.08.594-.204 1.097-.277.503-.072 1.063-.209 1.246-.304.91-.472 9.311-.881 11.003-.535a40.55 40.55 0 0 0 2.285.367c1.82.238 3.48.556 3.931.753.201.088.571.212.822.277.252.065.704.225 1.006.357 1.623.708 2.105.367 2.196-1.553.03-.651.114-1.739.185-2.418l.129-1.234-.615.001c-.339.001-.986-.117-1.438-.261-3.667-1.169-13.448-1.201-16.088-.052-.151.066-.603.197-1.005.291-1.175.276-2.304.692-3.951 1.458-.464.215-.937.391-1.051.391-.115 0-.209.076-.209.169 0 .092-.247.222-.548.289-.302.066-.549.194-.549.285 0 .09-.205.216-.457.279-.251.063-.457.185-.457.269 0 .754-1.746.788-2.017.04-.403-1.117-2.408-4.381-2.871-4.676-.127-.08-.231-.228-.231-.328 0-.237-3.036-3.273-3.273-3.273-.1 0-.248-.103-.328-.229-.384-.601-3.888-2.525-6.088-3.343-3.491-1.299-10.447-1.378-13.281-.151-.317.137-.716.249-.886.249-.171 0-.528.112-.795.249s-1.061.521-1.765.854c-1.464.692-3.355 1.78-3.725 2.144-.371.363-1.196.213-1.265-.231a3.503 3.503 0 0 0-.219-.731c-.09-.201-.242-.736-.339-1.188-.447-2.086-1.785-5.122-3.163-7.174-.677-1.008-.891-1.83-.535-2.05.193-.119 1.301-2.383 1.704-3.482.647-1.761.735-2.069.89-3.108.09-.603.246-1.335.346-1.627.302-.88.226-5.87-.111-7.331-.624-2.699-.869-3.458-1.693-5.23-.215-.463-.391-.936-.391-1.051 0-.115-.064-.209-.143-.209-.078 0-.24-.226-.359-.502a6.206 6.206 0 0 0-.869-1.439 36.889 36.889 0 0 1-.64-.818c-.921-1.203-3.537-3.639-3.908-3.639-.119 0-.345.144-.503.32m193.957 16.272c.079.552-.19.517-.457-.06-.189-.405-.177-.459.091-.408.169.032.334.243.366.468m.399 1.037c0 .276-.92 1.018-1.262 1.018-.289 0-.258-.073.302-.701.538-.604.96-.743.96-.317"
        />
        <path
          fill={forceColor ?? '#fcd38c'}
          d="M187.386.181c-.151.099-1.511.18-3.022.182-2.118.002-2.835.064-3.131.271-.28.197-1.04.283-2.828.32-1.837.039-2.434.108-2.4.28.034.169-.375.229-1.571.229-1.044 0-1.806.093-2.148.264-.318.158-1.168.278-2.121.299-1.149.025-1.616.103-1.685.284-.067.174-.443.249-1.249.249-.738 0-1.297.101-1.551.279-.26.182-.845.283-1.686.291-.981.009-1.288.074-1.288.27 0 .183-.251.262-.869.273-1.371.024-1.731.092-1.947.369-.11.142-.468.267-.795.278-1.532.049-1.689.077-1.645.297.031.158-.336.257-1.191.32-.681.05-1.235.174-1.232.274.003.101-.51.207-1.14.237-1.34.063-1.667.15-1.511.402.071.116-.299.184-1 .184-.821 0-1.141.072-1.218.274-.078.201-.395.274-1.194.274-.622 0-1.043.073-.983.17.137.222-.332.356-1.428.407-.529.025-.925.139-.979.281-.057.147-.403.239-.901.239-.5 0-.844.092-.901.241-.055.143-.441.256-.954.279-.563.025-.957.151-1.136.363-.151.178-.48.328-.731.334-1.064.025-1.278.075-1.234.289.029.146-.289.26-.91.324-.525.055-1.056.2-1.179.323s-.539.224-.924.224c-.454 0-.738.096-.806.274-.072.186-.363.274-.908.274-.592 0-.804.072-.804.275 0 .196-.2.274-.708.274-.407 0-.806.116-.937.274-.125.151-.448.274-.719.274-.27 0-.65.121-.846.269-.195.147-.534.271-.753.274a1.116 1.116 0 0 0-.672.28c-.151.151-.55.274-.887.274-.386 0-.728.135-.925.366-.199.232-.539.365-.935.365-.385 0-.663.105-.728.275-.057.15-.316.274-.573.274-.258 0-.516.123-.574.274-.071.186-.363.274-.908.274-.592 0-.803.072-.803.274 0 .184-.184.275-.555.275-.324 0-.598.114-.659.274-.062.161-.336.274-.665.274-.309 0-.697.123-.863.274-.166.15-.522.292-.791.314-.269.022-.489.146-.489.275 0 .2-.489.33-.96.256-.076-.012-.137.101-.137.252 0 .178-.179.274-.508.274-.282 0-.647.163-.821.366-.18.21-.539.366-.844.366-.303 0-.576.117-.636.274-.057.151-.316.274-.573.274-.258 0-.516.124-.574.274-.059.153-.331.275-.615.275s-.556.121-.614.274c-.058.151-.31.274-.559.274-.25 0-.523.123-.607.273-.084.15-.376.292-.649.314-.272.023-.496.147-.496.276 0 .2-.489.33-.959.256-.076-.012-.138.095-.138.238 0 .142-.246.314-.548.38-.302.066-.548.192-.548.28 0 .088-.288.214-.64.28-.367.069-.64.229-.64.374 0 .15-.19.254-.463.254-.255 0-.507.116-.562.258-.054.142-.298.308-.542.369-.244.061-.444.192-.444.291 0 .098-.156.179-.346.179-.191 0-.394.123-.452.274-.061.161-.335.274-.659.274-.371 0-.554.091-.554.275 0 .182-.183.274-.549.274-.365 0-.548.091-.548.274 0 .151-.104.274-.232.274-.127 0-.518.193-.868.429-.35.237-.884.511-1.185.61-.302.099-.549.297-.549.439 0 .143-.205.285-.457.318-.251.032-.539.164-.64.293-.101.129-.37.294-.597.366-.227.072-.366.207-.309.301.058.093-.105.169-.362.169-.294 0-.468.102-.468.275 0 .184-.184.274-.56.274-.349 0-.514.073-.438.195.066.107-.047.239-.251.292-.204.054-.416.213-.47.354-.054.14-.255.256-.447.256a.857.857 0 0 0-.577.274c-.125.151-.34.274-.479.274-.138 0-.252.082-.252.183 0 .101-.093.183-.207.183-.115 0-.399.205-.631.457-.244.262-.627.457-.901.457-.271 0-.428.079-.363.183.062.101-.097.263-.355.361-.257.098-.468.262-.468.365 0 .103-.21.188-.468.188-.257 0-.418.08-.358.177.06.098-.099.23-.355.294-.255.064-.464.231-.464.371 0 .14-.115.255-.255.255s-.304.128-.364.285c-.061.158-.19.237-.287.177-.098-.061-.345.057-.55.262-.205.205-.413.373-.464.373-.05 0-.256.164-.457.365-.201.201-.53.366-.731.366-.203 0-.366.122-.366.274a.274.274 0 0 1-.274.274.275.275 0 0 0-.274.274.306.306 0 0 1-.274.298c-.527.043-.611.069-.762.235-.09.098-.048.105.104.017.173-.1.214-.08.127.062-.072.116-.29.211-.486.211-.195 0-.354.124-.354.274a.276.276 0 0 1-.275.275.274.274 0 0 0-.274.274c0 .171-.173.274-.463.274-.274 0-.683.224-.999.548-.295.302-.622.549-.726.549-.103 0-.189.123-.189.274 0 .152-.162.274-.364.274-.2 0-.466.165-.592.366-.126.201-.332.366-.459.366-.126 0-.23.123-.23.274a.274.274 0 0 1-.274.274.274.274 0 0 0-.274.274c0 .151-.158.275-.351.275-.517 0-.941.197-.826.384.056.09-.068.164-.275.164-.213 0-.376.119-.376.274a.275.275 0 0 1-.275.274.276.276 0 0 0-.274.275c0 .155-.164.274-.376.274-.207 0-.326.081-.265.181.064.103-.009.134-.172.071-.156-.059-.284-.017-.284.094s-.123.202-.274.202c-.152 0-.274.163-.274.366 0 .203-.122.366-.274.366a.275.275 0 0 0-.275.274.274.274 0 0 1-.274.274.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274c-.402 0-1.565.659-1.419.805.068.068-.057.171-.277.229-.221.058-.353.183-.294.279.059.096-.065.22-.276.275-.211.055-.384.214-.384.353 0 .139-.124.253-.274.253a.276.276 0 0 0-.275.274c0 .151-.11.275-.245.275-.136 0-.395.164-.577.365-.182.201-.433.366-.558.366-.124 0-.273.123-.331.274a.458.458 0 0 1-.396.274c-.16 0-.237.088-.17.196.066.107-.052.24-.264.295-.211.055-.384.214-.384.353 0 .139-.123.253-.274.253a.275.275 0 0 0-.274.275c0 .15-.124.274-.274.274a.275.275 0 0 0-.275.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.274.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274c0 .151-.079.274-.175.274-.227 0-1.105.879-1.105 1.105 0 .096-.17.175-.377.175s-.325.082-.263.183c.062.101-.086.259-.331.352-.244.093-.61.381-.814.639-.204.259-.507.471-.675.471-.169 0-.25.087-.183.195.066.108-.052.24-.264.296a.49.49 0 0 0-.384.464c0 .248-.087.331-.274.259-.191-.074-.274.013-.274.285 0 .215-.054.336-.121.27-.165-.165-.631.244-.506.446.055.089-.028.162-.185.162a.28.28 0 0 0-.285.274.275.275 0 0 1-.274.274.276.276 0 0 0-.275.274c0 .248-.217.356-.594.296-.075-.012-.137.087-.137.219s-.247.476-.548.765c-.302.289-.549.675-.549.857 0 .182-.123.331-.274.331a.275.275 0 0 0-.274.275c0 .15-.079.274-.175.274-.226 0-1.105.878-1.105 1.105 0 .096-.123.175-.274.175a.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.275.275 0 0 0-.274.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.275c0 .15-.124.274-.274.274a.275.275 0 0 0-.275.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.275.27.27 0 0 1-.262.274c-.143 0-.289.185-.324.411-.034.226-.17.389-.3.361-.131-.027-.194.022-.139.111.055.088-.104.351-.352.585-.248.233-.451.533-.451.666s-.124.242-.275.242a.276.276 0 0 0-.274.275c0 .15-.123.274-.274.274a.274.274 0 0 0-.274.274c0 .151-.114.274-.253.274s-.298.173-.353.384c-.056.212-.189.33-.296.264-.114-.071-.195.035-.195.256 0 .207-.081.376-.179.376-.099 0-.231.206-.294.457-.064.251-.23.457-.37.457-.139 0-.254.165-.254.366 0 .201-.105.365-.234.365-.262 0-.863.638-.863.916 0 .1-.068.181-.152.181-.083 0-.268.224-.411.497-.312.598-.831 1.149-1.082 1.149-.101 0-.183.126-.183.28a.451.451 0 0 1-.274.385c-.157.06-.274.332-.274.634 0 .348-.094.529-.275.529a.274.274 0 0 0-.274.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.274c0 .151-.117.275-.26.275-.143 0-.314.246-.38.548-.066.302-.238.548-.38.548-.143 0-.26.12-.26.266a.548.548 0 0 1-.23.411c-.127.08-.394.474-.595.874-.2.401-.59.933-.866 1.184-.277.25-.503.592-.503.76a.47.47 0 0 1-.274.411.45.45 0 0 0-.274.385c0 .154-.124.28-.275.28-.15 0-.274.105-.274.233 0 .129-.164.375-.365.547-.201.172-.366.437-.366.589 0 .31-.633 1.007-.914 1.007-.101 0-.173.062-.161.138.079.504-.061.959-.296.959-.151 0-.274.115-.274.255s-.124.302-.275.36c-.15.058-.274.275-.274.482 0 .208-.123.425-.274.483-.151.057-.274.219-.274.359 0 .141-.124.255-.274.255-.171 0-.275.173-.275.457 0 .26-.095.438-.22.412-.207-.044-.25.049-.305.664-.013.139-.196.298-.407.353-.211.055-.333.183-.271.283a.22.22 0 0 1-.076.299.229.229 0 0 0-.067.315c.071.114.039.146-.075.076-.109-.067-.25.044-.315.246-.064.203-.191.369-.282.369-.091 0-.238.267-.327.594-.089.327-.255.573-.371.548-.115-.025-.209.158-.209.406 0 .331-.075.422-.281.343-.155-.059-.269-.036-.253.051.092.505-.048.983-.288.983-.168 0-.275.17-.275.437 0 .241-.123.485-.274.543a.45.45 0 0 0-.274.385c0 .154-.123.28-.274.28-.183 0-.275.183-.275.548 0 .347-.093.549-.253.549-.146 0-.306.273-.374.64-.072.383-.227.64-.386.64a.26.26 0 0 0-.266.254c0 .14-.124.302-.274.36-.151.058-.275.314-.275.568 0 .29-.102.463-.274.463-.183 0-.274.183-.274.548 0 .366-.092.549-.274.549-.184 0-.275.183-.275.554 0 .324-.113.598-.274.659-.151.058-.274.261-.274.452 0 .19-.099.325-.22.3-.218-.045-.261.065-.306.777-.012.201-.146.366-.297.366s-.274.162-.274.363c0 .2-.139.526-.308.724-.169.197-.329.501-.354.674a.743.743 0 0 1-.332.474c-.157.088-.286.361-.286.607 0 .247-.075.448-.168.448-.092 0-.224.253-.291.561-.068.309-.239.605-.381.66-.141.054-.256.298-.256.541 0 .244-.124.491-.275.549-.169.065-.274.343-.274.725 0 .399-.082.604-.228.575-.137-.027-.252.193-.286.548-.032.327-.127.595-.211.595-.084 0-.239.246-.344.548-.106.302-.278.548-.384.548-.106 0-.183.062-.171.138.08.503-.073 1.007-.387 1.276-.203.174-.366.539-.366.821 0 .329-.096.508-.274.508-.176 0-.276.18-.28.502-.003.277-.126.663-.274.858-.148.195-.268.468-.268.607 0 .139-.124.376-.275.527-.15.151-.274.556-.274.901 0 .396-.082.61-.223.581-.127-.026-.266.228-.325.594s-.199.62-.326.594c-.149-.03-.223.227-.223.777 0 .594-.073.823-.263.823-.172 0-.283.237-.32.685-.035.429-.142.669-.285.64-.126-.025-.219.016-.207.092.083.528-.076 1.149-.388 1.509-.22.253-.35.636-.326.958.027.348-.069.597-.273.711-.173.097-.314.384-.314.637 0 .254-.124.585-.275.736-.15.15-.274.552-.274.891 0 .399-.113.682-.32.797-.176.099-.299.226-.274.283.156.356.016 1.379-.183 1.339-.149-.03-.26.271-.32.868-.059.598-.17.898-.32.869-.155-.032-.228.212-.228.757 0 .547-.088.837-.276.909-.152.058-.265.17-.253.248.109.661-.054 2.054-.235 2.016-.124-.026-.277.294-.359.751-.08.438-.226.894-.325 1.014-.1.12-.239.585-.309 1.032-.07.448-.21.868-.311.934-.102.066-.223.579-.269 1.139-.046.561-.148.98-.226.932-.213-.131-.362.396-.362 1.278 0 .485-.093.823-.242.881-.156.059-.258.475-.286 1.158-.023.586-.131 1.12-.24 1.187-.108.067-.237.562-.288 1.101-.05.538-.204 1.141-.341 1.339-.145.211-.249.839-.249 1.509 0 .898-.059 1.147-.274 1.147-.213 0-.274.244-.274 1.097 0 .811-.066 1.097-.252 1.097-.178 0-.276.327-.333 1.111-.045.619-.183 1.175-.312 1.255-.127.079-.224.195-.215.26a.456.456 0 0 1-.003.162c-.009.025-.057.534-.104 1.131-.048.597-.205 1.252-.348 1.457-.158.225-.261.819-.261 1.498 0 .777-.085 1.196-.274 1.353-.195.161-.275.588-.275 1.469 0 .709-.082 1.27-.192 1.307-.264.087-.326.521-.342 2.388-.011 1.294-.066 1.6-.288 1.6-.225 0-.274.313-.274 1.717 0 1.301-.062 1.741-.256 1.815-.198.076-.261.637-.282 2.528-.019 1.67-.097 2.472-.248 2.566-.278.171-.262-.027-.289 3.542-.014 1.937-.087 2.987-.203 2.916-.117-.073-.18 4.265-.18 12.521s.063 12.594.18 12.521c.116-.071.181.961.181 2.88 0 2.139.065 3.06.228 3.236.186.2.177.222-.046.115-.18-.087-.167-.044.038.124.262.216.316.64.339 2.678.021 1.884.084 2.443.282 2.519.194.074.256.514.256 1.815 0 1.404.049 1.717.274 1.717.222 0 .277.306.288 1.6.016 1.867.078 2.301.342 2.388.11.037.192.601.192 1.316 0 .869.084 1.335.275 1.526.181.181.274.636.274 1.343 0 .63.107 1.222.261 1.442.143.205.29.819.325 1.366.035.546.129 1.096.207 1.222.078.126.076.23-.005.231-.082.002-.031.078.113.169.163.103.292.585.342 1.277.057.784.155 1.111.333 1.111.186 0 .252.286.252 1.097 0 .853.061 1.097.274 1.097.215 0 .274.249.274 1.147 0 .67.104 1.298.249 1.509.137.198.291.801.341 1.339.051.539.18 1.034.288 1.101.109.067.217.601.24 1.187.028.683.13 1.099.286 1.158.155.06.242.412.242.979 0 .554.093.94.249 1.031.14.082.29.578.341 1.126.05.538.173 1.032.274 1.097.1.064.243.529.317 1.031.074.503.211.962.306 1.021.094.058.219.428.278.822.059.394.216.805.349.912.133.107.261.63.285 1.161.028.596.137 1.002.285 1.059.149.057.241.4.241.895 0 .545.073.789.228.757.15-.029.261.271.32.869.06.597.171.898.32.868.193-.038.305.675.212 1.355-.009.066.115.194.275.283.176.099.29.406.29.781 0 .339.124.741.274.891.151.151.275.482.275.736 0 .253.141.54.314.637.204.114.3.363.273.711-.024.322.106.705.326.958.312.36.471.981.388 1.509-.012.076.081.117.207.092.143-.029.25.211.285.64.037.448.148.685.32.685.19 0 .263.229.263.823 0 .55.074.807.223.777.127-.026.267.228.326.594.056.352.193.623.302.602.11-.021.246.306.303.727.056.421.19.795.297.83.107.036.195.207.195.381 0 .173.12.475.268.67.148.195.271.581.274.858.004.322.104.502.28.502.178 0 .274.179.274.508 0 .282.163.647.366.821.314.269.467.773.387 1.276-.012.076.06.138.159.138.194 0 .736 1.08.917 1.828.061.251.21.436.33.411.136-.029.218.195.218.594 0 .447.083.64.274.64.181 0 .275.181.275.529 0 .291.115.573.256.627.142.055.313.351.381.66.067.308.199.561.291.561.093 0 .168.193.168.428 0 .236.163.576.362.756.198.18.324.387.278.461-.045.074.08.281.279.461s.361.52.361.756c0 .259.109.428.274.428.151 0 .285.165.297.366.042.659.067.731.252.72.1-.006.231.18.29.412.059.232.203.401.32.376.13-.028.212.204.212.594 0 .447.083.64.275.64.182 0 .274.183.274.549 0 .365.091.548.274.548.172 0 .274.173.274.463 0 .254.124.51.275.568.15.058.274.22.274.36 0 .14.119.254.266.254.158 0 .314.256.384.634.066.348.214.616.329.594.115-.022.235.228.266.555.036.368.158.594.32.594.145 0 .263.113.263.252 0 .138.123.354.274.479a.847.847 0 0 1 .274.571c0 .189.124.343.275.343.235 0 .375.456.295.96-.011.075.102.137.253.137.152 0 .274.163.274.366 0 .201.094.345.209.32.116-.025.282.221.371.548.089.327.236.594.327.594.091 0 .218.166.282.369.065.202.206.313.315.246.114-.07.146-.038.075.076a.229.229 0 0 0 .067.315.22.22 0 0 1 .076.299c-.062.1.06.228.271.283.211.055.394.214.407.353.055.615.098.708.305.664.125-.026.22.152.22.412 0 .284.104.457.275.457.15 0 .274.114.274.255 0 .14.123.302.274.359.151.058.274.314.274.568 0 .29.103.463.274.463.151 0 .275.124.275.274 0 .151.123.275.274.275.235 0 .375.455.296.959-.012.076.096.138.24.138s.314.164.378.365c.064.201.193.366.286.366.094 0 .171.124.171.276 0 .152.165.417.366.589.201.172.365.418.365.547 0 .128.124.233.274.233.151 0 .275.126.275.28a.45.45 0 0 0 .274.385c.151.058.274.264.274.457 0 .194.124.399.274.457.151.058.275.22.275.36 0 .14.123.255.274.255.151 0 .274.154.274.343 0 .189.123.446.274.571.151.125.274.343.274.485 0 .142.124.305.275.363.151.058.274.22.274.36 0 .14.117.255.26.255.142 0 .314.246.38.548.066.302.237.548.38.548.143 0 .26.124.26.275 0 .15.123.274.274.274.151 0 .274.123.274.274 0 .151.123.274.274.274.183 0 .275.183.275.549 0 .365.091.548.274.548.152 0 .274.163.274.366 0 .201.082.365.183.365.251 0 .77.551 1.082 1.149.143.273.328.497.411.497.084 0 .152.081.152.181 0 .278.601.916.863.916.129 0 .234.164.234.365 0 .201.115.366.254.366.14 0 .306.206.37.457.063.251.195.457.294.457.098 0 .179.169.179.376 0 .221.081.327.195.256.107-.066.24.052.296.264.055.211.214.384.353.384.139 0 .253.123.253.274 0 .151.123.274.274.274.151 0 .274.124.274.274 0 .151.124.275.274.275.151 0 .275.109.275.242s.203.433.451.666c.248.234.407.497.352.585-.055.089.008.138.139.111.13-.028.266.135.3.361.035.226.181.411.324.411a.27.27 0 0 1 .262.274c0 .151.123.275.274.275.151 0 .274.123.274.274 0 .151.124.274.275.274.15 0 .274.124.274.274 0 .151.123.275.274.275.151 0 .274.123.274.274 0 .151.124.274.274.274.151 0 .275.123.275.274 0 .151.123.274.274.274.151 0 .274.094.274.208 0 .244.855 1.072 1.106 1.072.096 0 .174.124.174.274 0 .151.123.275.274.275.151 0 .274.149.274.331 0 .182.247.568.549.857.301.289.548.633.548.765s.062.231.137.219c.377-.06.594.048.594.296 0 .15.124.274.275.274.15 0 .274.094.274.209 0 .114.247.444.548.732.302.289.549.603.549.7 0 .097.123.128.274.07.187-.072.274.011.274.259a.49.49 0 0 0 .384.464c.212.056.33.188.264.296-.067.107-.008.195.13.195s.487.247.776.548c.289.302.625.549.746.549s.268.123.326.274a.45.45 0 0 0 .385.274c.154 0 .28.094.28.208 0 .244.854 1.072 1.106 1.072.096 0 .174.123.174.274 0 .151.123.274.274.274.151 0 .274.124.274.275 0 .15.123.274.274.274.151 0 .274.123.274.274 0 .151.124.274.275.274.15 0 .274.124.274.274 0 .151.123.275.274.275.151 0 .274.114.274.253s.173.298.384.353c.212.055.33.188.264.295-.067.108.01.196.17.196s.338.123.396.274c.058.151.207.274.331.274.125 0 .376.165.558.366.182.201.441.365.577.365.135 0 .245.124.245.275 0 .15.124.274.275.274.15 0 .274.123.274.274 0 .151.123.274.274.274.151 0 .274.114.274.253s.182.3.404.358c.221.058.347.162.279.23-.146.146 1.017.805 1.419.805.151 0 .275.123.275.274 0 .151.123.274.274.274.152 0 .274.162.274.366 0 .203.122.365.275.365.15 0 .274.124.274.274 0 .151.123.275.274.275.151 0 .274.08.274.179 0 .099.218.234.484.301.513.128 1.162.677 1.162.982 0 .101.169.183.376.183s.331.074.275.164c-.115.187.309.384.826.384.193 0 .351.124.351.275 0 .151.123.274.274.274.151 0 .274.123.274.274 0 .151.104.274.23.274.127 0 .333.165.459.366.126.201.349.366.496.366.148 0 .638.37 1.091.822.541.541.981.823 1.284.823.289 0 .462.103.462.274 0 .151.123.274.274.274.151 0 .275.124.275.275 0 .15.159.274.354.274.196 0 .414.095.486.211.087.142.046.162-.127.062-.152-.088-.194-.081-.104.017.151.166.235.192.762.235.15.013.274.147.274.298 0 .15.123.274.274.274.151 0 .274.123.274.274 0 .151.062.28.137.288.566.058.888.188 1.067.433.114.156.26.284.325.284.064 0 .284.168.489.373.205.205.452.323.55.262.097-.06.226.019.287.177.06.157.224.285.364.285.14 0 .255.115.255.255s.209.307.464.371c.256.064.415.196.355.294-.06.097.101.177.358.177.284 0 .468.103.468.262 0 .144.185.289.411.324.227.035.397.146.379.248-.018.102.17.202.419.223.248.02.642.244.876.496.234.252.518.458.633.458.114 0 .207.082.207.183 0 .101.114.183.252.183.139 0 .354.123.479.274a.839.839 0 0 0 .562.274c.184 0 .4.109.481.243.08.133.295.297.477.364.183.067.281.205.218.306-.067.108.117.184.445.184.376 0 .56.09.56.274 0 .173.174.275.468.275.257 0 .42.076.362.169-.057.094.082.229.309.301.227.072.496.237.597.366.101.129.389.261.64.293.259.033.457.178.457.333 0 .151.083.285.183.299.462.062 1.006.307 1.006.454 0 .089.113.161.251.161.139 0 .355.124.48.274a.848.848 0 0 0 .571.275c.189 0 .343.123.343.274 0 .183.183.274.548.274.325 0 .549.096.549.234 0 .129.226.253.503.275.276.022.594.164.705.314.112.151.338.274.503.274.165 0 .3.077.3.17 0 .094.185.23.41.301.226.072.495.246.598.386.103.141.371.27.595.287.224.017.408.137.408.266s.061.241.137.249c.556.055 1.051.204 1.136.342.056.09.327.22.602.29.276.069.501.24.501.38 0 .16.202.254.549.254.324 0 .548.096.548.234 0 .129.224.253.496.276.273.022.565.164.649.314.084.15.357.273.607.273.249 0 .501.123.559.274.059.154.331.274.619.274.282 0 .545.096.584.212.039.117.268.242.508.279.241.037.567.183.724.325.157.142.53.303.83.357.3.054.573.18.606.28.033.1.337.233.675.296.337.064.658.231.712.372.054.141.306.256.561.256.254 0 .463.105.463.234s.22.253.489.275c.269.022.625.164.791.314.166.151.554.274.863.274.329 0 .603.113.665.274.061.16.335.274.659.274.371 0 .555.091.555.275 0 .202.211.274.803.274.545 0 .837.088.908.274.058.151.309.274.559.274.249 0 .521.12.603.267.082.147.472.308.865.356.393.049.787.217.874.373.097.173.411.284.803.284.354 0 .767.123.918.274.151.151.476.274.724.274.247 0 .49.107.54.238.051.13.398.256.772.279.374.024.771.164.883.312.121.16.508.268.96.268.509 0 .756.08.756.245 0 .16.265.254.77.274.469.018.83.137.923.304.094.168.42.274.839.274.377 0 .787.101.91.224s.654.268 1.179.323c.621.064.939.178.91.324-.044.214.17.264 1.234.289.251.006.58.156.731.334.179.211.573.338 1.132.363.473.021.823.097.779.169-.121.195.409.351 1.192.351.408 0 .735.1.789.24.058.15.462.257 1.071.282.583.024 1.057.145 1.174.298.119.156.621.278 1.28.312.747.039 1.07.127 1.038.285-.033.164.292.228 1.153.228.759 0 1.158.068 1.086.184-.156.252.171.339 1.511.402.63.03 1.143.136 1.14.237-.003.1.551.224 1.232.274.855.063 1.222.162 1.191.32-.025.126.098.239.274.252l1.051.073c.402.028.978.181 1.28.342.317.168.992.291 1.599.292.812 0 1.052.063 1.052.275 0 .218.271.275 1.325.28.875.004 1.446.097 1.68.274.226.171.778.269 1.514.269.811 0 1.188.075 1.255.249.069.179.521.259 1.594.283 1.859.042 2.088.076 2.359.347.137.137.847.217 1.918.217 1.263 0 1.688.059 1.654.229-.034.172.565.241 2.411.28 1.594.033 2.55.129 2.724.274.896.746 36.825.746 37.721 0 .173-.145 1.129-.241 2.723-.274 1.846-.039 2.445-.108 2.411-.28-.039-.193 2.857-.387 3.669-.246.083.015.103-.052.043-.148-.184-.298.137-.362 1.967-.396 1.29-.025 1.77-.096 1.77-.265 0-.162.441-.252 1.47-.298.874-.04 1.525-.156 1.605-.285.08-.129.696-.241 1.501-.273.973-.039 1.353-.12 1.32-.283-.032-.161.263-.229 1.006-.229.609-.001 1.281-.124 1.599-.293.302-.161.952-.316 1.445-.346.589-.035.952-.154 1.06-.347.124-.222.452-.293 1.354-.293.705 0 1.146-.071 1.083-.174-.116-.187.606-.346 1.914-.419.542-.031.807-.125.777-.275-.033-.164.289-.229 1.142-.229s1.176-.064 1.143-.228c-.032-.158.292-.245 1.051-.282.674-.032 1.172-.151 1.292-.309.115-.151.592-.275 1.161-.301.596-.027 1.002-.136 1.059-.285.054-.14.381-.24.789-.24.783 0 1.313-.156 1.192-.351-.044-.072.301-.15.766-.174.533-.028.951-.163 1.132-.366.158-.178.493-.326.744-.33 1.043-.016 1.278-.07 1.234-.285-.029-.146.289-.26.91-.324.525-.055 1.056-.2 1.179-.323s.533-.224.91-.224c.419 0 .745-.106.839-.274.093-.167.454-.286.923-.304.505-.02.77-.114.77-.274 0-.169.259-.245.833-.245.466 0 .787-.075.729-.169-.123-.199.299-.353 1.129-.413.324-.024.63-.149.68-.279.05-.131.378-.236.736-.236.452 0 .646-.082.646-.274 0-.197.202-.274.722-.274.477 0 .779-.101.889-.298.151-.27.376-.338 1.359-.41.176-.013.32-.147.32-.298 0-.183.184-.274.555-.274.324 0 .597-.114.659-.274.071-.186.363-.274.908-.274.592 0 .803-.072.803-.274 0-.181.181-.275.529-.275.302 0 .574-.118.634-.274.064-.165.339-.274.691-.274.322 0 .722-.123.888-.274.166-.15.522-.292.791-.314.269-.022.489-.146.489-.275 0-.129.209-.234.463-.234.255 0 .507-.115.561-.256.054-.141.375-.308.712-.372.338-.063.642-.196.675-.296.033-.1.305-.225.603-.28.299-.054.597-.185.662-.29.077-.125.154-.104.218.056.069.174.104.153.114-.07.01-.217.164-.32.477-.32.255 0 .51-.124.568-.274.059-.153.331-.275.615-.275s.556-.121.614-.274c.058-.151.31-.274.559-.274.25 0 .523-.123.607-.273.084-.15.376-.292.649-.314.272-.023.496-.147.496-.276 0-.138.224-.234.548-.234.354 0 .549-.093.549-.262 0-.284.624-.557.893-.391.091.057.208-.009.26-.145.052-.136.349-.298.66-.36.312-.062.545-.207.519-.321-.026-.114.158-.241.41-.282.251-.041.539-.175.64-.299.1-.124.574-.417 1.053-.65.479-.234.824-.502.766-.595-.057-.092.197-.168.566-.168.521 0 .647-.062.565-.275-.081-.211.04-.274.529-.274.442 0 .634-.083.634-.274 0-.151.159-.274.353-.274.194 0 .476-.124.626-.275.151-.15.363-.274.47-.274.108 0 .196-.077.196-.17 0-.17.482-.384.814-.362.096.006.237-.16.314-.368.092-.249.302-.379.609-.379.258 0 .513-.116.568-.258.054-.142.298-.308.542-.369.244-.062.444-.192.444-.291 0-.099.165-.179.366-.179.203 0 .365-.122.365-.275 0-.182.183-.274.549-.274.365 0 .548-.091.548-.274 0-.152.163-.274.366-.274.203 0 .365-.122.365-.274 0-.24.338-.368.783-.295.078.013.189-.1.248-.252.058-.152.22-.276.36-.276.14 0 .255-.082.255-.183 0-.101.123-.183.274-.183.151 0 .274-.082.274-.183 0-.1.124-.182.274-.182a.276.276 0 0 0 .275-.275c0-.235.455-.375.959-.296.076.012.117-.079.092-.202-.025-.123.139-.252.366-.287.226-.035.411-.18.411-.324 0-.159.184-.262.468-.262.257 0 .424-.07.371-.156-.053-.086.107-.248.355-.362.248-.113.451-.289.451-.392 0-.103.115-.187.255-.187s.304-.128.364-.285c.061-.158.19-.237.287-.177.098.061.345-.057.55-.262.205-.205.455-.373.555-.373.101 0 .183-.123.183-.274 0-.151.123-.284.274-.297.151-.012.357-.043.457-.068.101-.026.265-.056.366-.069.1-.013.183-.146.183-.297s.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.169.172-.275.446-.275.246 0 .505-.095.577-.211.086-.139.05-.161-.109-.063-.158.098-.195.077-.109-.063.072-.116.29-.211.486-.211.195 0 .354-.124.354-.274 0-.151.124-.275.275-.275a.274.274 0 0 0 .274-.274c0-.171.173-.274.462-.274.303 0 .743-.282 1.284-.823.453-.452.943-.822 1.091-.822.147 0 .37-.165.496-.366.126-.201.332-.366.459-.366.126 0 .23-.123.23-.274 0-.151.123-.274.274-.274a.274.274 0 0 0 .274-.274c0-.151.158-.275.351-.275.517 0 .941-.197.826-.384-.056-.09.009-.164.143-.164.134 0 .464-.251.733-.557.269-.307.674-.593.9-.637.226-.043.482-.205.569-.36.086-.155.234-.234.329-.176.094.059.171-.022.171-.179a.28.28 0 0 1 .274-.285c.153 0 .275-.162.275-.365 0-.244.122-.366.365-.366.201 0 .367-.103.368-.229.001-.125.371-.39.822-.589.452-.198.821-.466.821-.594 0-.128.124-.233.274-.233a.276.276 0 0 0 .275-.275c0-.15.123-.274.274-.274a.274.274 0 0 0 .274-.274c0-.151.124-.274.274-.274a.276.276 0 0 0 .275-.274c0-.151.11-.275.245-.275.136 0 .395-.164.577-.365.182-.201.403-.366.492-.366.088 0 .402-.247.697-.548.294-.302.621-.549.725-.549.104 0 .189-.123.189-.274 0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.151.123-.275.274-.275a.274.274 0 0 0 .274-.274c0-.151.103-.276.229-.277.279-.004 1.051-.793 1.051-1.074 0-.112.126-.203.28-.203a.45.45 0 0 0 .385-.274c.058-.151.261-.274.452-.274.19 0 .346-.124.346-.274 0-.151.103-.275.23-.275s.335-.167.463-.372.325-.316.438-.246c.129.079.154.043.067-.097-.088-.142.001-.26.246-.324a.49.49 0 0 0 .384-.464c0-.248.087-.331.274-.259.151.058.274.03.274-.063 0-.22.88-1.1 1.1-1.1.093 0 .121-.123.063-.274-.072-.187.011-.274.259-.274a.49.49 0 0 0 .464-.384c.056-.212.188-.33.296-.264.107.067.195.008.195-.13s.247-.487.548-.776c.302-.289.549-.675.549-.857 0-.182.123-.331.274-.331a.275.275 0 0 0 .274-.275c0-.15.103-.275.229-.277.278-.004 1.051-.793 1.051-1.074 0-.111.123-.203.274-.203a.274.274 0 0 0 .274-.274c0-.151.124-.274.275-.274.15 0 .274-.123.274-.274 0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.114-.274.253-.274s.298-.173.353-.384c.056-.211.179-.335.275-.276.096.059.22-.064.274-.274.055-.211.188-.328.295-.262.112.069.196-.025.196-.22 0-.187.288-.619.639-.96.352-.342.64-.728.64-.859s.124-.238.275-.238c.15 0 .274-.124.274-.275 0-.15.114-.274.253-.274s.298-.173.353-.384c.055-.211.179-.335.275-.276.096.059.219-.064.274-.274.055-.21.188-.328.295-.262.114.071.195-.035.195-.256 0-.207.081-.376.179-.376.099 0 .231-.206.294-.457.064-.251.23-.457.37-.457.139 0 .254-.165.254-.366 0-.203.122-.365.274-.365.151 0 .274-.114.274-.253s.144-.293.32-.341c.176-.048.485-.405.686-.794.404-.781.908-1.355 1.188-1.355.101 0 .183-.164.183-.365 0-.203.122-.366.274-.366.183 0 .274-.183.274-.548 0-.366.092-.549.275-.549a.274.274 0 0 0 .274-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.151.124-.275.275-.275.15 0 .28-.061.288-.137.056-.55.199-.823.654-1.248.286-.268.503-.549.482-.626-.021-.076.122-.285.32-.463.197-.179.358-.476.358-.662 0-.185.123-.337.274-.337a.274.274 0 0 0 .274-.274c0-.151.078-.275.173-.275.171 0 .622-.703.85-1.325.064-.176.231-.32.37-.32a.26.26 0 0 0 .253-.265c0-.146.127-.336.283-.424.155-.087.296-.332.312-.546.016-.213.185-.428.375-.478.191-.05.292-.179.225-.287-.067-.109.067-.267.301-.353.233-.086.403-.209.378-.273-.141-.358-.009-.847.228-.847a.275.275 0 0 0 .274-.275c0-.15.124-.274.275-.274.171 0 .274-.173.274-.463 0-.254.123-.51.274-.568.151-.057.274-.219.274-.359 0-.141.124-.255.274-.255.169 0 .275-.172.275-.446 0-.246.095-.505.211-.577.142-.088.162-.047.062.126-.088.152-.081.195.017.105.166-.152.191-.235.235-.762a.308.308 0 0 1 .303-.274c.3 0 .656-.714.493-.988-.054-.091-.003-.107.114-.034.123.075.265-.009.337-.201.069-.182.227-.414.352-.514.124-.101.255-.389.289-.64.035-.251.164-.436.288-.411.123.025.224-.084.224-.242 0-.158.123-.411.274-.561.151-.151.274-.433.274-.627s.124-.353.274-.353c.151 0 .275-.159.275-.355 0-.195.087-.408.194-.474.106-.066.271-.323.365-.571.094-.247.248-.402.343-.344.094.058.197-.163.228-.492.037-.383.156-.597.332-.597.167 0 .298-.208.335-.533.035-.305.289-.732.594-1 .296-.26.534-.653.534-.885 0-.248.11-.416.274-.416.183 0 .274-.183.274-.548 0-.366.092-.549.274-.549.192 0 .275-.193.275-.64 0-.39.082-.622.212-.594.117.025.261-.144.32-.376s.19-.418.29-.412c.185.011.21-.061.252-.72.012-.201.146-.366.297-.366.15 0 .274-.157.274-.349 0-.193.288-.787.64-1.322.352-.534.64-1.108.64-1.276a.47.47 0 0 1 .274-.41c.151-.057.274-.316.274-.573 0-.258.123-.516.274-.574.157-.06.274-.333.274-.634 0-.348.094-.529.275-.529.18 0 .274-.181.274-.529 0-.301.118-.574.274-.634a.477.477 0 0 0 .274-.419c0-.39.715-1.891.9-1.891.137 0 .175-.162.237-1.006.018-.251.137-.457.263-.457s.283-.288.349-.64c.066-.352.217-.64.334-.64.118 0 .232-.211.253-.47.022-.259.163-.648.314-.864.152-.216.275-.539.275-.717 0-.179.079-.325.175-.325.096 0 .232-.309.303-.686.07-.377.233-.768.362-.868.129-.101.26-.43.292-.732.033-.319.152-.529.285-.502.156.031.229-.217.229-.777 0-.61.071-.823.274-.823.168 0 .274-.171.274-.442 0-.553.181-1.043.347-.941.124.077.164-.085.25-.993.024-.252.158-.504.299-.561.141-.057.288-.416.327-.797.039-.382.191-.814.338-.961.147-.147.267-.432.267-.633s.124-.489.275-.64c.15-.15.274-.558.274-.906 0-.394.103-.673.274-.738.186-.071.274-.363.274-.908s.074-.789.229-.758c.149.03.26-.271.32-.868.059-.598.17-.898.32-.869.155.032.228-.212.228-.757 0-.495.092-.838.241-.895.148-.057.257-.463.285-1.059.029-.636.144-1.039.338-1.181.182-.133.299-.502.309-.972.009-.429.104-.757.221-.757.202 0 .434-.8.434-1.499 0-.195.124-.479.275-.63.167-.168.274-.615.274-1.155 0-.615.083-.914.274-.987.193-.074.274-.374.274-1.01 0-.52.09-.934.211-.974.115-.039.25-.56.298-1.158.049-.599.171-1.141.272-1.206.101-.064.224-.558.275-1.097.05-.538.204-1.141.341-1.339.145-.211.249-.839.249-1.509 0-.898.059-1.147.274-1.147.213 0 .274-.244.274-1.097s.061-1.097.274-1.097c.27 0 .317-.253.336-1.782.005-.378.099-.595.258-.595.138 0 .203-.076.145-.17-.058-.093-.042-.209.035-.257.077-.047.165-.567.195-1.155.03-.588.155-1.151.278-1.251.125-.103.25-.747.284-1.463.033-.704.152-1.336.264-1.406.112-.069.236-.728.277-1.462.041-.735.152-1.386.248-1.446.244-.156.301-.585.317-2.404.01-1.177.074-1.588.243-1.554.167.033.242-.418.281-1.676.042-1.359.119-1.777.366-1.979.203-.168.217-.211.038-.125-.222.107-.231.085-.046-.115.157-.168.229-.936.229-2.429 0-1.857.048-2.222.32-2.445.196-.16.213-.211.046-.13-.223.107-.232.085-.046-.115.163-.176.228-1.097.228-3.236 0-1.919.065-2.951.181-2.88.117.073.18-4.265.18-12.521s-.063-12.594-.18-12.521c-.116.071-.181-.961-.181-2.88 0-2.139-.065-3.06-.228-3.236-.186-.2-.177-.222.046-.115.167.081.15.03-.046-.13-.272-.223-.32-.588-.32-2.445 0-1.493-.072-2.261-.229-2.429-.185-.2-.176-.222.046-.115.179.086.165.043-.038-.125-.247-.202-.324-.62-.366-1.979-.039-1.258-.114-1.709-.281-1.676-.169.034-.233-.377-.243-1.554-.016-1.867-.078-2.301-.342-2.388-.107-.036-.192-.567-.192-1.203 0-.717-.1-1.269-.269-1.493-.158-.208-.271-.769-.275-1.36-.004-.553-.125-1.232-.27-1.509-.144-.277-.288-.963-.318-1.526-.031-.562-.12-1.061-.197-1.108-.077-.048-.093-.164-.035-.257.058-.094-.007-.17-.145-.17-.159 0-.253-.217-.258-.595-.019-1.529-.066-1.782-.336-1.782-.213 0-.274-.244-.274-1.097s-.061-1.097-.274-1.097c-.215 0-.274-.249-.274-1.147 0-.67-.104-1.298-.249-1.509-.137-.198-.291-.801-.341-1.339-.051-.539-.174-1.033-.275-1.097-.101-.065-.223-.607-.272-1.206-.048-.598-.183-1.119-.298-1.158-.121-.04-.211-.454-.211-.974 0-.636-.081-.936-.274-1.01-.191-.073-.274-.372-.274-.987 0-.54-.107-.987-.274-1.155-.151-.151-.275-.435-.275-.63 0-.699-.232-1.499-.434-1.499-.117 0-.212-.328-.221-.757-.01-.47-.127-.839-.309-.972-.194-.142-.309-.545-.338-1.181-.028-.596-.137-1.002-.285-1.059-.149-.057-.241-.4-.241-.895 0-.545-.073-.789-.228-.757-.15.029-.261-.271-.32-.869-.06-.597-.171-.898-.32-.868-.155.031-.229-.213-.229-.758s-.088-.837-.274-.908c-.171-.065-.274-.344-.274-.738 0-.348-.124-.756-.274-.906a1.05 1.05 0 0 1-.275-.64c0-.201-.12-.486-.267-.633-.147-.147-.299-.579-.338-.961-.039-.381-.186-.74-.327-.797-.141-.057-.275-.309-.299-.561-.088-.937-.129-1.07-.315-1.038-.105.018-.216-.275-.247-.653-.037-.448-.148-.685-.32-.685-.19 0-.263-.229-.263-.823 0-.55-.074-.807-.223-.777-.127.026-.267-.228-.326-.594-.056-.352-.193-.623-.302-.602-.11.021-.246-.306-.303-.727-.056-.421-.19-.795-.297-.83-.107-.036-.195-.205-.195-.375s-.123-.486-.275-.702a2.098 2.098 0 0 1-.314-.864c-.021-.259-.144-.47-.273-.47-.129 0-.245-.165-.257-.366-.045-.716-.072-.787-.343-.896-.151-.06-.297-.315-.325-.566l-.076-.686c-.014-.126-.098-.229-.188-.229-.089 0-.247-.246-.353-.548-.105-.302-.265-.548-.356-.548-.09 0-.165-.25-.165-.555 0-.324-.114-.597-.274-.659-.153-.059-.274-.33-.274-.615 0-.284-.121-.555-.274-.614-.151-.058-.275-.305-.275-.549 0-.243-.123-.49-.274-.548-.151-.058-.274-.316-.274-.574 0-.257-.123-.516-.274-.573-.151-.058-.274-.256-.274-.439s-.124-.456-.275-.607c-.15-.151-.274-.391-.274-.533 0-.143-.164-.408-.365-.59-.202-.182-.366-.524-.366-.76 0-.259-.109-.428-.274-.428-.151 0-.285-.165-.297-.366-.045-.712-.088-.822-.306-.777-.121.025-.22-.11-.22-.3 0-.191-.123-.394-.274-.452-.161-.061-.274-.335-.274-.659 0-.371-.091-.554-.275-.554-.182 0-.274-.183-.274-.549 0-.365-.091-.548-.274-.548-.164 0-.274-.169-.274-.42 0-.242-.229-.61-.541-.868-.361-.3-.543-.622-.548-.969-.006-.362-.119-.548-.374-.615-.261-.068-.365-.249-.365-.634 0-.312-.077-.49-.184-.424-.1.062-.26-.09-.354-.337-.094-.248-.259-.505-.365-.571-.107-.066-.194-.279-.194-.474 0-.196-.124-.355-.275-.355-.235 0-.375-.456-.295-.96.011-.075-.102-.137-.253-.137-.152 0-.274-.163-.274-.366 0-.201-.101-.345-.224-.32-.124.025-.253-.16-.288-.411-.034-.251-.165-.539-.289-.64a1.413 1.413 0 0 1-.352-.514c-.072-.192-.214-.276-.337-.201-.117.073-.168.057-.114-.034.163-.274-.193-.988-.493-.988a.308.308 0 0 1-.303-.274c-.044-.527-.069-.61-.235-.762-.098-.09-.105-.047-.017.105.1.173.08.214-.062.126-.116-.072-.211-.331-.211-.577 0-.274-.106-.446-.275-.446-.15 0-.274-.114-.274-.255 0-.14-.123-.302-.274-.359-.151-.058-.274-.314-.274-.568 0-.29-.103-.463-.274-.463a.276.276 0 0 1-.275-.274.275.275 0 0 0-.274-.275c-.152 0-.274-.162-.274-.365 0-.615-.011-.636-.388-.776-.202-.074-.321-.209-.266-.299.056-.09-.063-.206-.263-.259-.236-.061-.326-.194-.257-.375.062-.161-.054-.418-.273-.606-.21-.179-.381-.431-.381-.56 0-.128-.114-.233-.253-.233s-.306-.144-.37-.32c-.228-.622-.679-1.325-.85-1.325-.095 0-.173-.124-.173-.275a.274.274 0 0 0-.274-.274c-.151 0-.274-.154-.274-.343a.847.847 0 0 0-.274-.571c-.151-.125-.274-.303-.274-.394 0-.092-.255-.416-.567-.72-.496-.486-.643-.761-.699-1.308-.008-.076-.138-.137-.288-.137a.276.276 0 0 1-.275-.275.275.275 0 0 0-.274-.274.274.274 0 0 1-.274-.274.274.274 0 0 0-.274-.274c-.181 0-.275-.181-.275-.529 0-.302-.117-.574-.274-.634a.451.451 0 0 1-.274-.385c0-.154-.082-.28-.183-.28-.28 0-.784-.574-1.188-1.355-.201-.389-.51-.746-.686-.794-.176-.048-.32-.202-.32-.341s-.123-.253-.274-.253c-.152 0-.274-.162-.274-.365 0-.201-.115-.366-.254-.366-.14 0-.306-.206-.37-.457-.063-.251-.195-.457-.294-.457-.098 0-.179-.169-.179-.376 0-.221-.081-.327-.195-.256-.107.066-.24-.052-.296-.264-.055-.211-.214-.384-.353-.384-.139 0-.253-.123-.253-.274a.274.274 0 0 0-.274-.274.275.275 0 0 1-.274-.274.276.276 0 0 0-.274-.275c-.151 0-.275-.109-.275-.242s-.203-.433-.451-.666c-.248-.234-.407-.497-.352-.585.055-.089-.008-.138-.139-.111-.13.028-.266-.135-.3-.361-.035-.226-.181-.411-.324-.411a.27.27 0 0 1-.262-.274.275.275 0 0 0-.274-.275.274.274 0 0 1-.274-.274.275.275 0 0 0-.275-.274.276.276 0 0 1-.274-.274.275.275 0 0 0-.274-.275.274.274 0 0 1-.274-.274.275.275 0 0 0-.274-.274.275.275 0 0 1-.275-.274.274.274 0 0 0-.274-.274c-.151 0-.274-.078-.274-.174 0-.252-.828-1.106-1.072-1.106-.114 0-.208-.124-.208-.274a.275.275 0 0 0-.274-.275c-.151 0-.274-.149-.274-.331 0-.182-.247-.568-.549-.857-.301-.289-.548-.638-.548-.776s-.088-.197-.195-.13c-.108.066-.24-.052-.296-.264a.49.49 0 0 0-.464-.384c-.248 0-.331-.087-.259-.274.058-.151.03-.274-.063-.274-.22 0-1.1-.88-1.1-1.1 0-.093-.123-.121-.274-.063-.187.072-.274-.011-.274-.259a.49.49 0 0 0-.384-.464c-.212-.056-.33-.188-.264-.296.067-.107.006-.195-.134-.195s-.494-.244-.787-.543c-.294-.299-.636-.546-.762-.549-.126-.002-.229-.128-.229-.279 0-.152-.162-.274-.365-.274-.201 0-.366-.078-.366-.174 0-.251-.828-1.106-1.072-1.106-.114 0-.208-.123-.208-.274a.274.274 0 0 0-.274-.274.275.275 0 0 1-.274-.275.275.275 0 0 0-.274-.274.274.274 0 0 1-.274-.274.275.275 0 0 0-.275-.274.276.276 0 0 1-.274-.274.275.275 0 0 0-.274-.275.274.274 0 0 1-.274-.274.275.275 0 0 0-.275-.274.276.276 0 0 1-.274-.274.279.279 0 0 0-.28-.275.45.45 0 0 1-.385-.274c-.058-.151-.207-.274-.331-.274-.125 0-.376-.165-.558-.366-.182-.201-.441-.365-.577-.365-.135 0-.245-.124-.245-.275a.276.276 0 0 0-.275-.274.275.275 0 0 1-.274-.274.274.274 0 0 0-.274-.274c-.151 0-.274-.114-.274-.253s-.173-.298-.384-.353c-.212-.056-.34-.172-.286-.26.054-.088-.266-.319-.711-.515-.445-.196-.81-.459-.811-.584-.001-.126-.167-.229-.368-.229-.203 0-.365-.122-.365-.274a.275.275 0 0 0-.275-.274c-.152 0-.274-.163-.274-.366 0-.203-.122-.366-.274-.366-.151 0-.274-.091-.274-.202 0-.111-.128-.153-.284-.094-.163.063-.236.032-.172-.071.061-.1-.037-.185-.219-.189-.182-.004-.533-.251-.779-.548-.247-.298-.56-.541-.697-.541-.136 0-.202-.074-.146-.164.115-.187-.309-.384-.826-.384-.193 0-.351-.124-.351-.275a.274.274 0 0 0-.274-.274.274.274 0 0 1-.274-.274c0-.151-.094-.274-.209-.274-.114 0-.313-.144-.442-.32-.128-.176-.323-.33-.431-.343l-.381-.046c-.1-.012-.182-.146-.182-.297s-.086-.274-.189-.274c-.104 0-.431-.247-.726-.549-.316-.324-.725-.548-.999-.548-.29 0-.463-.103-.463-.274a.274.274 0 0 0-.274-.274.276.276 0 0 1-.275-.275c0-.15-.159-.274-.354-.274-.196 0-.414-.095-.486-.211-.087-.142-.046-.162.127-.062.152.088.194.081.104-.017-.151-.166-.235-.192-.762-.235a.306.306 0 0 1-.274-.298.275.275 0 0 0-.274-.274c-.151 0-.274-.114-.274-.254 0-.145-.274-.305-.64-.374-.383-.071-.64-.226-.64-.386 0-.146-.082-.265-.183-.265-.1 0-.35-.168-.555-.373-.205-.205-.452-.323-.55-.262-.097.06-.226-.019-.287-.177-.06-.157-.224-.285-.364-.285a.256.256 0 0 1-.255-.255c0-.14-.209-.307-.464-.371-.256-.064-.415-.196-.355-.294.06-.097-.101-.177-.358-.177-.284 0-.468-.103-.468-.262 0-.144-.185-.289-.411-.324-.227-.035-.391-.164-.366-.287.028-.137-.167-.224-.503-.224-.365 0-.548-.092-.548-.274a.276.276 0 0 0-.275-.275c-.15 0-.274-.082-.274-.182 0-.101-.123-.183-.274-.183-.151 0-.274-.082-.274-.183 0-.101-.124-.183-.274-.183-.151 0-.275-.08-.275-.177 0-.098-.267-.247-.594-.332-.327-.085-.569-.231-.537-.325.031-.094-.134-.22-.366-.279-.232-.059-.402-.203-.377-.32.027-.124-.181-.212-.502-.212-.366 0-.549-.092-.549-.274 0-.173-.174-.275-.468-.275-.257 0-.418-.079-.358-.177.061-.098-.093-.229-.341-.291-.248-.062-.496-.229-.55-.371-.055-.142-.315-.258-.579-.258-.322 0-.511-.117-.573-.355-.054-.206-.315-.404-.623-.471-.291-.064-.53-.174-.53-.244s-.369-.29-.821-.488c-.451-.199-.821-.464-.822-.59-.001-.131-.234-.228-.55-.228-.366 0-.549-.092-.549-.274 0-.193-.194-.275-.651-.275-.357 0-.603-.076-.546-.168.058-.093-.287-.361-.766-.595-.479-.233-.953-.522-1.053-.64-.101-.119-.389-.244-.64-.279-.252-.035-.437-.164-.412-.287.026-.123-.077-.224-.229-.224-.151 0-.582-.165-.957-.366-.375-.201-.786-.366-.913-.366s-.231-.123-.231-.274c0-.151-.062-.264-.138-.252-.47.074-.959-.056-.959-.256 0-.129-.224-.253-.496-.276-.273-.022-.565-.164-.649-.314-.084-.15-.357-.273-.607-.273-.249 0-.501-.123-.559-.274-.065-.169-.343-.274-.725-.274-.385 0-.603-.083-.575-.219.025-.12-.201-.268-.503-.33-.301-.061-.528-.21-.502-.33.025-.12-.016-.209-.092-.197-.562.089-1.196-.079-1.459-.387-.172-.201-.506-.366-.743-.366-.236 0-.552-.123-.703-.274-.151-.151-.433-.274-.627-.274s-.353-.105-.353-.234-.22-.253-.489-.275c-.269-.022-.625-.164-.791-.314-.166-.151-.554-.274-.863-.274-.329 0-.603-.113-.665-.274-.061-.16-.335-.274-.659-.274-.371 0-.555-.091-.555-.275 0-.202-.211-.274-.803-.274-.545 0-.837-.088-.908-.274-.058-.151-.316-.274-.574-.274-.257 0-.516-.124-.573-.274-.065-.17-.343-.275-.728-.275-.396 0-.736-.133-.935-.365-.21-.246-.539-.366-1.004-.366-.492 0-.69-.079-.69-.274 0-.186-.191-.276-.594-.28-.327-.003-.754-.127-.949-.274-.196-.148-.576-.269-.846-.269-.271 0-.592-.121-.714-.268-.123-.148-.277-.261-.343-.253-.647.086-1.307-.066-1.307-.301 0-.203-.212-.275-.804-.275-.545 0-.836-.088-.908-.274-.068-.178-.352-.274-.806-.274-.385 0-.801-.101-.924-.224s-.654-.268-1.179-.323c-.621-.064-.939-.178-.91-.324.044-.215-.191-.269-1.234-.285-.251-.004-.586-.152-.744-.33-.181-.203-.599-.338-1.136-.366-.498-.026-.887-.143-.941-.284-.057-.149-.401-.241-.901-.241s-.844-.092-.901-.24c-.057-.149-.463-.258-1.059-.285-.569-.026-1.046-.15-1.161-.301-.12-.158-.618-.277-1.292-.309-.759-.037-1.083-.124-1.051-.282.033-.164-.29-.228-1.143-.228s-1.175-.065-1.142-.229c.03-.15-.235-.244-.777-.275-1.29-.072-2.031-.231-1.919-.411.056-.091-.456-.189-1.138-.219-.872-.038-1.226-.122-1.194-.283.044-.22-.113-.248-1.645-.297-.327-.011-.685-.136-.795-.278-.216-.277-.576-.345-1.947-.369-.591-.011-.854-.089-.823-.244.033-.163-.344-.243-1.317-.278-.827-.03-1.416-.137-1.5-.272-.084-.136-.714-.25-1.609-.291-1.024-.046-1.47-.136-1.47-.296 0-.164-.436-.24-1.508-.264-1.882-.042-2.251-.103-2.194-.36.025-.113-.016-.195-.091-.183-.853.135-3.695-.06-3.656-.25.034-.172-.565-.241-2.411-.28-1.594-.033-2.55-.129-2.724-.274-.563-.469-30.785-.948-31.474-.499m22.577 17.187 4.845.373c3.438.265 7.224.652 9.598.982 3.424.476 5.622.807 6.764 1.017 2.859.527 6.431 1.234 7.587 1.503.452.105 1.316.299 1.919.431a90.05 90.05 0 0 1 2.24.526c.628.157 1.616.401 2.194.542.957.233 1.842.469 4.799 1.278.553.151 1.828.532 2.833.846 1.006.314 2.075.637 2.377.716.989.262 4.2 1.347 4.387 1.483.101.073.456.191.79.262.333.071.827.245 1.097.386.269.14.59.256.712.257.123 0 .493.116.823.257.594.252 1.643.659 2.886 1.118.665.246 3.658 1.452 4.296 1.732.201.088.653.283 1.005.433.352.15 1.026.444 1.498.652.472.209.903.379.956.379.131 0 2.44 1.071 5.163 2.393 1.223.594 2.313 1.081 2.423 1.081.109 0 .198.082.198.182 0 .101.103.184.228.184.246.001 1.956.85 4.159 2.065 2.8 1.544 3.211 1.763 3.702 1.966.277.115.503.283.503.374 0 .09.088.165.195.165.157 0 2.343 1.203 3.644 2.005.151.093.85.517 1.554.941.704.425 1.307.84 1.341.924.033.083.161.152.283.152.122 0 .382.126.579.28.635.497 2.304 1.548 2.46 1.548a.25.25 0 0 1 .212.137c.075.169 1.19.96 1.353.96.065 0 .43.246.811.548.38.302.747.549.814.549.067 0 .477.267.912.594.435.326.973.717 1.196.868.398.269 3.575 2.593 3.933 2.877.44.349 1.178.892 1.555 1.145.225.151.502.359.616.463.113.104.946.76 1.851 1.459.905.699 1.728 1.359 1.828 1.466.101.108.594.519 1.097.914s1.003.802 1.113.904c.109.103.638.557 1.177 1.01 2.128 1.788 2.574 2.182 5.377 4.746 1.734 1.586 9.193 9.052 10.896 10.907 2.447 2.664 2.816 3.078 3.648 4.094.452.551.905 1.094 1.006 1.205a43.775 43.775 0 0 1 1.821 2.174c.396.503.808.996.916 1.097.107.1.767.923 1.466 1.828s1.355 1.738 1.459 1.851c.104.114.312.39.463.613.151.224 1.056 1.46 2.011 2.746.955 1.287 1.86 2.522 2.011 2.745.151.223.418.594.594.824.176.231.32.502.32.604 0 .101.062.212.137.245.208.092 1.634 2.168 2.084 3.032.118.226.283.411.368.411.084 0 .153.075.153.167 0 .168 1.029 1.812 1.548 2.475.154.197.28.457.28.579 0 .122.07.25.155.283.202.08 3.867 6.273 3.867 6.534 0 .11.075.2.165.2.091 0 .258.226.371.503.114.276.489 1.018.835 1.649 1.765 3.222 2.214 4.055 2.684 4.978.281.553.512 1.108.513 1.234.002.125.085.228.186.228.1 0 .182.089.182.198 0 .11.484 1.2 1.074 2.423 1.146 2.372 1.587 3.326 2.212 4.783.216.503.514 1.18.661 1.506.147.325.381.86.518 1.188l.442 1.054a119.056 119.056 0 0 1 1.753 4.342c.144.377.514 1.333.823 2.125.309.791.562 1.532.562 1.645.001.113.117.427.257.696.141.27.315.764.386 1.097.071.334.19.689.264.79.074.1.32.799.547 1.554.228.754.486 1.512.574 1.684.088.173.239.625.336 1.006.096.38.476 1.679.844 2.885a139.8 139.8 0 0 1 .815 2.743c.081.301.327 1.206.548 2.011.221.804.516 1.935.657 2.513.141.578.385 1.566.542 2.194.158.629.394 1.636.526 2.24.132.603.326 1.467.431 1.919.269 1.156.976 4.728 1.503 7.587.702 3.814 1.601 10.971 1.996 15.905l.409 5.119c.282 3.546.28 16.74-.004 20.292l-.402 5.028c-.251 3.122-.647 6.836-.974 9.14-.797 5.601-.929 6.394-1.85 11.152-.676 3.491-1.829 8.438-2.728 11.7l-.549 2.011c-.15.553-.446 1.582-.657 2.286-.21.703-.45 1.526-.531 1.828-.265.974-1.32 4.196-1.469 4.485-.08.154-.208.562-.283.908-.076.345-.204.754-.283.908-.08.154-.326.815-.546 1.468a28.07 28.07 0 0 1-.655 1.765c-.139.317-.253.663-.253.77 0 .108-.116.465-.258.796a228.62 228.62 0 0 0-1.744 4.348c-.217.553-.468 1.17-.557 1.371-.09.201-.337.777-.549 1.279a90.567 90.567 0 0 1-.549 1.28c-.239.536-1.403 3.122-1.973 4.384-1.069 2.364-5.607 11.246-6.074 11.887-.151.208-1.35 2.396-1.878 3.427-.429.839-.409.839-2.055.025-.816-.403-1.681-.686-2.219-.725l-.883-.065 1.097.277c1.109.28 2.288.79 2.886 1.248.305.234.273.327-.503 1.461-.456.666-.829 1.254-.829 1.308 0 .053-.155.32-.344.592-.19.273-.817 1.236-1.395 2.141-1.677 2.626-2.967 4.528-5.455 8.044-10.63 15.023-25.888 30.255-41.8 41.728-1.258.907-9.116 6.141-10.117 6.738-.487.291-1.076.652-1.31.802-.747.483-2.553 1.552-2.742 1.624-.1.038-.841.459-1.645.936-4.308 2.555-12.265 6.574-17.002 8.589-.503.214-1.078.462-1.28.552-6.149 2.747-17.1 6.614-23.583 8.329-.502.133-1.531.406-2.285.608-4.557 1.218-10.444 2.513-14.625 3.219-.955.161-2.148.373-2.651.47-1.146.222-5.923.9-6.353.901-.212.001-.32-.141-.32-.421 0-1.232-.937-1.248-1.811-.032-.522.728-.649.802-1.527.887l-3.883.377c-10.063.978-28.164.673-36.472-.614-.653-.101-2.545-.354-4.204-.561-1.659-.207-3.387-.455-3.839-.551-.453-.095-1.851-.343-3.108-.55a89.875 89.875 0 0 1-3.565-.657c-.704-.155-1.856-.403-2.56-.553-3.253-.692-6.654-1.539-10.969-2.732-.502-.139-2.024-.595-3.382-1.012a456.028 456.028 0 0 0-3.29-1.001c-2.934-.864-10.421-3.653-14.9-5.549-.201-.085-.782-.324-1.291-.53-4.112-1.665-14.447-6.851-18.27-9.168a116.252 116.252 0 0 0-2.468-1.439 63.493 63.493 0 0 1-1.861-1.085c-.269-.171-1.073-.665-1.786-1.098-1.32-.802-8.006-5.263-9.461-6.313-1.874-1.353-7.146-5.343-7.746-5.863a170.879 170.879 0 0 0-2.554-2.119c-6.735-5.504-14.809-13.324-20.574-19.927-6.571-7.526-12.686-15.685-17.306-23.093-.428-.686-.901-1.441-1.052-1.676-.56-.877-2.925-4.862-2.925-4.929 0-.039-.355-.674-.789-1.411-.434-.737-.846-1.464-.915-1.615-.07-.151-.662-1.261-1.315-2.468-1.131-2.087-3.273-6.368-4.072-8.135-.205-.453-.699-1.527-1.098-2.387-.947-2.039-2.4-5.486-3.233-7.668a81.6 81.6 0 0 0-.904-2.285c-1.568-3.573-4.984-14.518-6.703-21.478-2.67-10.807-4.629-24.118-5.019-34.098-.062-1.609-.148-3.053-.191-3.209-.204-.748.293-.932 2.502-.932 2.133 0 2.212.017 4.187.923 2.219 1.017 4.074 3.192 5.126 6.012.324.867.367.646.085-.439-.652-2.517-2.807-4.805-5.851-6.214-1.026-.474-1.263-.508-3.657-.525l-2.559-.018-.061-5.111c-.094-7.827.71-19.091 1.895-26.547l.551-3.474c.156-.98.397-2.317.536-2.971.139-.653.429-2.134.645-3.29.215-1.157.46-2.349.544-2.651a75.16 75.16 0 0 0 .56-2.377c.462-2.082 1.351-5.635 1.714-6.855.135-.453.512-1.769.839-2.925 1.02-3.616 4.234-13.052 5.387-15.814.126-.301.378-.918.56-1.371.427-1.059.973-2.368 1.183-2.834.09-.201.383-.898.649-1.548 1.511-3.688 6.269-13.33 7.687-15.576.24-.381.437-.741.437-.8 0-.089 1.417-2.601 2.006-3.556l1.559-2.56c1.738-2.857 1.798-2.954 1.966-3.189.075-.106 1.148-1.715 2.382-3.575 2.816-4.242 8.329-11.796 9.073-12.431.059-.051.434-.503.833-1.006 1.609-2.025 4.941-5.85 7.954-9.131 2.546-2.772 9.117-9.233 11.635-11.44 8.986-7.876 17.868-14.564 25.265-19.024.736-.444 1.559-.95 1.828-1.125a8.71 8.71 0 0 1 .764-.448c.151-.072.604-.34 1.006-.597 1.316-.837 1.458-.921 1.865-1.098.221-.096.736-.385 1.144-.643.704-.444 1.535-.907 4.486-2.5 1.579-.852 6.197-3.149 8.41-4.182 3.162-1.478 4.688-2.17 6.033-2.737a94.591 94.591 0 0 0 1.279-.549c.201-.089.818-.34 1.371-.557a228.62 228.62 0 0 0 4.348-1.744c.331-.142.688-.258.796-.258.107 0 .453-.114.77-.253a28.07 28.07 0 0 1 1.765-.655c.653-.22 1.314-.466 1.468-.546.154-.079.563-.207.908-.283.346-.075.754-.203.908-.283.289-.149 3.511-1.204 4.485-1.469a97.722 97.722 0 0 0 1.828-.531c.704-.211 1.712-.502 2.241-.646l2.011-.55c3.267-.894 9.054-2.236 12.202-2.831 7.585-1.432 13.822-2.275 20.292-2.74 1.509-.108 3.524-.264 4.479-.346 2.544-.219 17.431-.232 20.201-.018m74.315 83.729c-3.083.187-6.207.621-11.335 1.575-1.481.276-5.266 1.212-7.221 1.786l-1.645.483c-.665.195-3.114 1.006-5.21 1.726-.453.156-.966.364-1.141.464-.174.1-.409.182-.52.182-.112 0-.463.113-.78.252s-1.028.431-1.581.65c-1.082.427-1.136.45-2.927 1.253-.654.294-1.374.593-1.598.664-2.818.894-19.469 10.252-21.892 12.303-.101.085-.512.354-.914.599-.402.244-.829.529-.947.634-.119.104-.642.477-1.162.829-1.64 1.11-10.001 7.384-10.231 7.678-.051.064-.503.441-1.006.837-.503.397-1.12.898-1.371 1.114-.251.216-1.032.873-1.736 1.461-.703.587-1.369 1.15-1.48 1.25-.111.101-.68.594-1.263 1.097a126.371 126.371 0 0 0-6.361 5.856c-1.738 1.704-5.628 5.814-7.177 7.581a60.437 60.437 0 0 1-1.075 1.206c-.107.11-.524.596-.926 1.08a187.806 187.806 0 0 1-2.723 3.199c-.222.251-.639.77-.927 1.153-.625.832-1.168 1.132-2.361 1.306-.491.071-1.067.198-1.28.281-.213.083-1.169.326-2.124.541-.955.214-2.189.51-2.742.658-.553.148-2.24.556-3.748.907-1.508.352-3.03.721-3.382.82-.612.173-2.456.603-5.21 1.214-.704.156-1.486.351-1.737.434-.252.082-1.421.373-2.599.647-2.41.559-2.446.583-4.634 3.09-.697.799-1.392 1.587-1.542 1.75a175.32 175.32 0 0 0-2.461 2.738c-1.582 1.797-3.292 3.717-3.572 4.012-.293.308-2.757 3.101-3.377 3.827a33.16 33.16 0 0 1-.919 1.012c-.302.317-1.37 1.52-2.375 2.673-1.004 1.152-1.876 2.137-1.939 2.187-2.042 1.642-2.133 3.398-.207 3.947 1.027.293 3.19.997 16.404 5.345 3.619 1.191 7.18 2.359 7.912 2.596 1.531.496 1.701.772 1.339 2.181-.46 1.797.263 6.397 1.497 9.514.482 1.22 1.23 2.636 1.57 2.977.23.23.277.982.067 1.076-.075.033-.63.636-1.233 1.34-1.167 1.361-2.192 2.521-2.667 3.019-.16.167-1.143 1.284-2.184 2.482a192.957 192.957 0 0 1-2.321 2.635c-.734.786-.466 2.551.389 2.558.091 0 1.86 1.682 3.931 3.737 2.071 2.055 4.008 3.828 4.306 3.94.537.203.562.182 5.632-4.924 2.801-2.821 5.206-5.129 5.344-5.129.138 0 .483.091.766.201 2.034.792 5.639 1.403 8.924 1.512 2.583.086 2.626.082.731-.066-4.366-.342-7.416-.857-9.281-1.567-1.304-.496-1.201-.571-6.367 4.672-3.741 3.797-4.994 4.962-5.434 5.05-.548.11-.737-.054-4.705-4.067-5.074-5.132-4.893-4.794-3.421-6.374.187-.202 1.025-1.148 1.862-2.103a441.378 441.378 0 0 1 4.129-4.659c2.115-2.365 2.473-3.095 1.746-3.566-.208-.134-1.381-2.507-1.718-3.475-.956-2.742-1.602-7.242-1.268-8.833.339-1.613-.464-2.249-3.879-3.077-.402-.097-.81-.254-.905-.349-.096-.095-.33-.172-.521-.172s-.606-.111-.923-.246c-.317-.134-1.193-.435-1.947-.669-.754-.233-1.631-.534-1.947-.669-.317-.134-.699-.245-.848-.245-.149 0-.507-.123-.795-.273-.288-.15-.692-.273-.898-.274-.207-.001-.453-.079-.549-.173-.095-.095-.503-.252-.905-.35a17.77 17.77 0 0 1-2.611-.873c-.33-.138-.729-.25-.887-.25-.157 0-.545-.111-.862-.245-.317-.135-1.563-.558-2.77-.942-1.206-.383-2.453-.807-2.769-.943-.317-.136-.709-.247-.871-.247-.162 0-.438-.073-.613-.163-.174-.09-.544-.253-.822-.363-1.216-.481-1.002-1.414.749-3.262.369-.389 1.493-1.648 2.498-2.796a235.142 235.142 0 0 1 2.103-2.382c.548-.587 2.89-3.212 3.587-4.022.684-.794 1.862-2.105 2.446-2.723.15-.16.886-.988 1.635-1.842.749-.853 1.448-1.642 1.554-1.753.106-.111.768-.85 1.472-1.643 3.265-3.678 2.991-3.495 6.399-4.272a76.969 76.969 0 0 0 2.285-.553c.352-.098 1.38-.35 2.285-.562a600.74 600.74 0 0 0 7.221-1.726 444.9 444.9 0 0 1 3.291-.807c1.257-.303 3.483-.842 4.948-1.197 1.464-.356 2.792-.647 2.949-.647.28 0 .826-.551 2.187-2.204 4.493-5.458 10.761-12.251 13.977-15.145a1860.2 1860.2 0 0 0 4.56-4.132c.11-.1.599-.512 1.087-.914a141.43 141.43 0 0 0 1.744-1.462c1.622-1.387 1.966-1.671 4.129-3.402a275.225 275.225 0 0 1 4.821-3.745c5.649-4.278 13.504-9.44 18.83-12.375l2.285-1.259c1.669-.92 8.584-4.357 8.767-4.357.066 0 .506-.17.978-.378.473-.209 1.147-.503 1.499-.654.352-.151.886-.385 1.188-.521 4.091-1.841 11.806-4.308 17.642-5.64 10.346-2.361 23.823-2.67 24.854-.569.296.603.399 8.208.153 11.327-.1 1.278-.089 1.462.052.823.099-.452.227-3.291.284-6.307l.104-5.485-.435-.639c-.752-1.108-6.123-1.662-12.398-1.28m12.002 15.996c-.288 1.79-.297 2.41-.015 1.189.15-.654.248-1.394.218-1.646-.036-.297-.107-.138-.203.457m-.534 3.108c-.305 1.653-.318 2.035-.039 1.097.149-.503.25-1.12.223-1.371-.038-.348-.082-.282-.184.274m-.477 2.468c-.015.251-.146.786-.291 1.188-.145.403-.262.978-.261 1.28.002.346.138.05.367-.805.2-.745.33-1.527.288-1.737-.064-.327-.079-.316-.103.074m-.92 3.701c-.125.376-.189.828-.143 1.005.062.237.09.21.106-.102.011-.233.108-.587.215-.787.107-.2.162-.462.122-.582-.041-.12-.176.089-.3.466m-.544 1.984c-.112.322-.2.717-.195.878.005.161.134-.065.287-.502.153-.437.241-.832.195-.878-.045-.045-.174.181-.287.502m-.548 1.828c-.112.322-.2.717-.195.878.005.161.134-.065.287-.502.153-.437.241-.832.195-.877-.046-.046-.175.18-.287.501m-.531 1.707c-.122.268-.218.627-.214.798.004.171.129.029.279-.315.32-.738.259-1.194-.065-.483m-.587 1.749c-.128.308-.189.603-.137.655.052.052.187-.169.299-.492.266-.763.139-.891-.162-.163m-.601 1.655c-.172.398-.313.796-.313.885 0 .088-.123.396-.273.684-.15.288-.271.647-.268.798.002.151.174-.137.382-.64l.663-1.601c.156-.378.248-.724.204-.769-.045-.044-.222.245-.395.643m-1.244 3.212a44.49 44.49 0 0 1-1.018 2.355c-.167.353-.261.684-.209.736.052.052.36-.545.686-1.327.325-.781.672-1.573.77-1.758.098-.186.135-.382.082-.435-.054-.054-.194.139-.311.429m-1.59 3.731c-.122.195-.218.459-.214.586.004.127.134-.002.288-.288.322-.593.261-.835-.074-.298m-1.211 2.688a90.71 90.71 0 0 1-1.143 2.301c-.154.283-.245.55-.202.592.042.043.588-.96 1.214-2.229.625-1.268 1.104-2.338 1.065-2.377-.039-.039-.46.732-.934 1.713m-57.146 1.685c-2.355.369-3.589.743-4.936 1.495-.15.085-.521.267-.822.406-2.255 1.035-5.365 4.354-6.622 7.066-1.336 2.883-1.503 3.564-1.594 6.49l-.08 2.559.164-2.321c.699-9.925 8.578-16.655 18.173-15.523 5.934.699 11.353 4.872 12.968 9.983.159.503.435 1.367.614 1.92.852 2.633.362 7.993-1.007 11.006-1.681 3.702-6.064 7.865-8.224 7.811l-.498-.012.457-.214c.525-.246.396-.154 2.232-1.583 6.036-4.696 6.908-13.773 1.916-19.93-2.487-3.067-6.207-5.005-10.057-5.241-3.435-.21-5.478.295-8.717 2.156-2.782 1.599-4.907 4.416-6.113 8.109-.713 2.182-.447 7.563.443 8.98.147.233.187.523.101.731-.125.301-.162.277-.295-.189-.084-.293-.225-.581-.312-.64-.43-.289-1.407-2.944-1.553-4.22-.058-.508-.079-.452-.101.274-.016.51.092 1.146.245 1.438.15.288.273.658.273.823.002 1.706 3.907 6.581 6.705 8.371 4.629 2.961 11.326 3.497 16.147 1.292.653-.299 1.229-.596 1.279-.66.051-.063.421-.329.823-.591 4.299-2.794 7.727-9.671 7.129-14.303-.305-2.366-.931-5.13-1.335-5.898-.1-.189-.374-.735-.611-1.212-.236-.478-.491-.869-.566-.869-.076 0-.138-.094-.138-.209 0-.638-3.37-4.02-5.027-5.044-2.256-1.395-4.249-1.99-8.41-2.511-.301-.037-1.494.08-2.651.26m54.911 2.797c-.37.524-.827 1.448-.753 1.522.044.043.304-.332.577-.836.46-.843.558-1.226.176-.686m-1.129 2.005c-.119.119-.217.291-.217.383 0 .091-.411.847-.914 1.679-.503.833-.914 1.57-.914 1.639 0 .068-.123.248-.274.399-.151.15-.274.361-.274.468 0 .107.164-.015.365-.27.201-.256.366-.507.366-.558 0-.052.496-.934 1.103-1.962 1.037-1.757 1.26-2.28.759-1.778m-3.257 5.631c-.268.404-.451.771-.408.814.044.044.301-.287.571-.735.613-1.014.494-1.072-.163-.079m-.944 1.641c-.172.301-.374.547-.449.548-.075.001-.137.076-.137.168 0 .168-1.028 1.812-1.548 2.475-.154.197-.279.444-.277.549.003.224.006.221.986-1.276 1.541-2.354 1.943-3.012 1.841-3.012-.058 0-.245.247-.416.548m-2.78 4.178c0 .085-.144.329-.32.541-.176.213-.608.807-.96 1.32-.352.512-1.01 1.455-1.462 2.094-.453.64-.946 1.344-1.097 1.565a7.59 7.59 0 0 1-.459.608 6.892 6.892 0 0 0-.483.672c-.247.386-1.458 1.949-2.403 3.1-.703.857-2.646 3.475-2.238 3.016 1.553-1.746 4.204-5.184 6.565-8.513.958-1.351 1.808-2.54 1.888-2.643.707-.904 1.321-1.915 1.163-1.915-.107 0-.194.069-.194.155M55.21 174.314a.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274c0 .152-.163.274-.366.274-.203 0-.365.122-.365.274a.276.276 0 0 1-.275.275.274.274 0 0 0-.274.274.274.274 0 0 1-.274.274.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274c-.152 0-.274.163-.274.366 0 .203-.122.366-.274.366a.274.274 0 0 0-.274.274.275.275 0 0 1-.274.274.276.276 0 0 0-.275.274.275.275 0 0 1-.274.275c-.151 0-.274.082-.274.182 0 .101-.173.183-.384.183-.705 0-2.541 2.137-2.541 2.959 0 .498-.079.698-.274.698-.204 0-.275.213-.275.822 0 .61.071.823.275.823.15 0 .274-.124.274-.274 0-.151.123-.275.274-.275a.274.274 0 0 0 .274-.274c0-.151.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.152.163-.274.366-.274.244 0 .365-.122.365-.366 0-.203.122-.365.275-.365.182 0 .274-.183.274-.549 0-.365.091-.548.274-.548a.274.274 0 0 0 .274-.274c0-.151.124-.275.275-.275.15 0 .274-.123.274-.274 0-.183.183-.274.548-.274.488 0 .549-.061.549-.548 0-.488.061-.549.548-.549.505 0 .549-.051.549-.64 0-.609.03-.64.639-.64.589 0 .64-.043.64-.548 0-.488.061-.548.549-.548.487 0 .548-.061.548-.549 0-.366-.091-.548-.274-.548a.275.275 0 0 1-.274-.275.276.276 0 0 0-.275-.274.276.276 0 0 0-.274.274m210.512 3.678c-1.531 1.88-1.602 1.964-2.651 3.119-.452.498-1.234 1.384-1.736 1.969-1.858 2.163-3.762 4.151-8.677 9.063-4.997 4.994-6.807 6.705-9.971 9.426-.905.778-1.672 1.484-1.706 1.568a.265.265 0 0 1-.23.154c-.197 0-1.096.744-1.947 1.612-.43.439-.596.776-.596 1.213 0 .334-.117 1.006-.26 1.496a24.274 24.274 0 0 0-.463 1.986 89.43 89.43 0 0 1-.463 2.285 528.856 528.856 0 0 0-1.094 5.119 25.611 25.611 0 0 1-.446 1.827c-.109.351-.189.886-.178 1.188.021.548.022.547.164-.09.078-.352.319-1.422.535-2.377.216-.955.468-2.107.56-2.559.092-.453.34-1.604.551-2.56.467-2.114.79-3.647 1.171-5.575.33-1.663.195-1.504 3.962-4.69 1.147-.971 2.333-1.99 2.634-2.265l2.56-2.337c3.88-3.543 10.183-10.015 14.369-14.754 3.574-4.046 5.536-6.394 5.343-6.392-.083.001-.727.709-1.431 1.574m-208.318-.844c0 .203-.122.366-.274.366a.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.276.276 0 0 0-.274.274.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.275.275 0 0 0-.274.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.275c0 .152-.163.274-.366.274-.203 0-.365.122-.365.274a.275.275 0 0 1-.275.274.275.275 0 0 0-.274.275c0 .15-.123.274-.274.274-.152 0-.274.162-.274.365 0 .204-.122.366-.275.366a.275.275 0 0 0-.274.274.275.275 0 0 1-.274.275.274.274 0 0 0-.274.274.275.275 0 0 1-.274.274.275.275 0 0 0-.275.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.275c0 .15-.124.274-.274.274a.275.275 0 0 0-.275.274c0 .152-.162.274-.365.274-.203 0-.366.122-.366.275 0 .15-.123.274-.274.274a.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274c-.152 0-.274.163-.274.366 0 .203-.122.365-.274.365a.275.275 0 0 0-.274.275.275.275 0 0 1-.274.274.275.275 0 0 0-.275.274c0 .152-.162.274-.363.274-.277 0-.411.194-.57.823-.12.478-.313.823-.459.823-.139 0-.253.123-.253.274 0 .152-.162.274-.366.274-.203 0-.365.122-.365.274 0 .151-.116.275-.258.275-.203 0-.273.439-.326 2.056-.07 2.171-.046 2.392.221 1.96.407-.66.643-.909.86-.909.129 0 .234-.123.234-.274 0-.151.109-.274.243-.274.239 0 3.413-2.93 3.413-3.15 0-.062 1.234-1.36 2.743-2.883 1.508-1.523 2.742-2.887 2.742-3.03 0-.143.123-.261.274-.261a.274.274 0 0 0 .274-.274c0-.151.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.151.124-.274.274-.274.157 0 .275-.165.275-.385 0-.267.084-.353.274-.28.189.073.274-.012.274-.274s.085-.347.274-.275c.187.072.274-.009.274-.254 0-.236.124-.36.36-.36.245 0 .327-.088.255-.274-.073-.191.013-.275.28-.275.22 0 .385-.117.385-.274 0-.152-.162-.274-.365-.274-.312 0-.366-.122-.366-.823 0-.609-.071-.822-.274-.822-.153 0-.275-.163-.275-.366 0-.203-.121-.366-.274-.366-.152 0-.274.163-.274.366m2.925 5.159c0 .224-.11.323-.32.288-.218-.037-.303.048-.266.266.036.217-.065.32-.314.32-.252 0-.335.086-.263.274.073.19-.013.274-.28.274-.22 0-.385.118-.385.275 0 .15-.123.274-.274.274a.275.275 0 0 0-.275.274.274.274 0 0 1-.274.274.275.275 0 0 0-.274.275c0 .15-.123.274-.274.274a.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274.276.276 0 0 0-.274.274.273.273 0 0 1-.269.275c-.288 0-4.484 4.119-4.484 4.402 0 .092-.123.168-.274.168a.275.275 0 0 0-.275.274c0 .151-.082.274-.182.274-.215 0-.258.04-2.902 2.643-1.119 1.101-2.034 2.109-2.034 2.239 0 .131-.124.237-.275.237-.15 0-.274.114-.274.254 0 .139-.226.401-.503.582a4.2 4.2 0 0 0-.836.753 9.696 9.696 0 0 1-.594.684c-.339.339-.333.652.014.652.221 0 .274.285.274 1.463 0 1.178.053 1.462.274 1.462.234 0 .274.494.274 3.346 0 3.178-.157 4.327-.594 4.331-.075.001-.134.146-.131.322.005.288.028.291.228.029.123-.159.317-.324.431-.365.299-.109 2.615-2.193 4.451-4.006 2.753-2.72 9.144-9.374 9.144-9.522 0-.079.151-.191.336-.25.185-.058.441-.302.569-.54.127-.239.427-.539.666-.666.238-.128.477-.371.531-.54.054-.169.307-.419.564-.556.266-.143.509-.468.568-.761.061-.305.222-.513.399-.515.332-.005 10.078-9.7 10.078-10.026 0-.114.082-.207.183-.207.1 0 .182-.076.182-.169 0-.436-1.216.549-3.471 2.813-2.592 2.602-2.927 2.822-2.927 1.926 0-.366-.092-.549-.274-.549-.153 0-.275-.162-.275-.365 0-.285-.121-.366-.548-.366-.366 0-.548-.091-.548-.274 0-.152-.163-.274-.366-.274-.284 0-.366-.122-.366-.549 0-.365-.091-.548-.274-.548-.183 0-.274-.183-.274-.549 0-.365-.092-.548-.274-.548a.275.275 0 0 1-.275-.274.274.274 0 0 0-.274-.274c-.151 0-.274-.115-.274-.254 0-.142-.242-.289-.548-.334-.443-.065-.549-.014-.549.262m7.245 7.916c-.062.162-.201.239-.309.172-.109-.067-.241.05-.297.263-.055.211-.219.384-.364.384-.146 0-.208.09-.138.203.079.128.364-.037.778-.451.36-.36.606-.701.548-.759-.058-.058-.156.027-.218.188m-2.857 2.739c0 .15-.124.274-.275.274-.15 0-.274.139-.274.308 0 .241.12.194.549-.217.63-.604.645-.64.274-.64a.275.275 0 0 0-.274.275m-2.377 2.376c0 .151-.062.255-.137.232-.169-.052-.96.619-.96.814 0 .377.578.067 1.097-.589.432-.545.506-.731.29-.731-.16 0-.29.123-.29.274m-1.645 1.646c0 .15-.124.274-.275.274a.275.275 0 0 0-.274.274c0 .151-.105.274-.233.274-.264 0-.735.499-.916.97-.066.172-.186.292-.266.266-.269-.088-1.005.727-.781.865.181.112 3.293-2.816 3.293-3.098 0-.055-.123-.1-.274-.1a.275.275 0 0 0-.274.275m-6.447 6.312c-1.685 1.706-3.125 3.103-3.199 3.103-.166 0-4.167 4.086-4.796 4.897-.847 1.094-2.019 1.806-2.312 1.405-.221-.303-.248-.306-.248-.03 0 .17.082.309.183.309.1 0 .183.123.183.274 0 .151.164.439.365.64.201.201.366.571.366.823 0 .284.103.457.274.457.203 0 .274.213.274.822 0 .61.071.823.274.823.199 0 .275-.204.275-.737 0-.486-.094-.773-.275-.842-.15-.058-.274-.217-.274-.354 0-.137-.139-.539-.308-.895-.293-.615-.292-.659.028-.893.189-.138.278-.34.203-.461-.073-.118-.053-.192.045-.164.212.059 2.486-1.959 4.372-3.881.74-.754 2.863-2.895 4.719-4.759 1.855-1.863 3.373-3.447 3.373-3.519 0-.451-.803.229-3.522 2.982M38.3 208.775c-.067.108.134.182.492.18.458-.002.538-.046.33-.18-.355-.23-.68-.23-.822 0m1.29.325c-.244.244-.061.406.457.406.308 0 .515-.072.46-.16-.126-.205-.782-.381-.917-.246m1.224.536c-.322.118-.285.419.051.419a.45.45 0 0 1 .385.274c.058.151.189.274.291.274.101 0 .545.376.985.836l.801.836v-.555c0-.304-.126-.66-.28-.79a65.499 65.499 0 0 1-.503-.425c-.522-.445-1.52-.946-1.73-.869m-11.107 6.629v3.354l.255-1.754c.217-1.498.217-1.987 0-3.354l-.255-1.601v3.355m38.62.26c-.287.218-.456.842-.228.842.167 0 .822-.728.822-.914 0-.246-.208-.221-.594.072m-22.435 3.082c.006 2.331.035 2.568.275 2.25.277-.367.388-3.568.153-4.444-.274-1.021-.433-.205-.428 2.194m21.201-1.965a.275.275 0 0 0 .549 0 .276.276 0 0 0-.275-.275.276.276 0 0 0-.274.275m-1.097 1.279c0 .151.124.275.275.275.15 0 .274-.124.274-.275a.276.276 0 0 0-.274-.274.276.276 0 0 0-.275.274m1.6 2.44c-1.447 1.445-2.148 2.277-2.148 2.549 0 .302-.108.404-.427.404-.234 0-.666.245-.959.544-.294.299-.636.545-.762.548-.126.003-.229.129-.229.28 0 .15-.123.274-.274.274a.274.274 0 0 0-.274.274.275.275 0 0 1-.274.274.276.276 0 0 0-.275.274.275.275 0 0 1-.274.275c-.151 0-.274.088-.274.196 0 .567-1.692 1.942-2.307 1.874-.624-.069-.851.178-.344.372.151.058.274.181.274.273 0 .093.494.68 1.097 1.307.604.626 1.097 1.205 1.097 1.287 0 .082.107.258.237.391.286.292 1.591 2.432 1.591 2.609 0 .069.124.25.275.401.15.15.274.465.274.698 0 .234.123.472.274.53.151.058.274.267.274.466 0 .198.074.406.164.461.211.131.385-.328.385-1.017 0-.455.43-.974 2.65-3.197 1.458-1.46 2.651-2.772 2.651-2.916a.27.27 0 0 1 .275-.262c.15 0 .274-.123.274-.274 0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.274c0-.153.163-.275.366-.275.203 0 .365-.121.365-.274 0-.151.124-.274.275-.274.152 0 .274-.163.274-.366 0-.203.122-.365.274-.365a.275.275 0 0 0 .274-.275c0-.15.124-.274.274-.274a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274.183 0 .274-.183.274-.549 0-.487-.061-.548-.548-.548-.366 0-.549-.092-.549-.274a.275.275 0 0 0-.274-.275c-.183 0-.274-.182-.274-.548 0-.366-.092-.548-.274-.548-.153 0-.275-.163-.275-.366 0-.244-.122-.366-.365-.366-.285 0-.366-.122-.366-.548 0-.366-.091-.549-.274-.549a.274.274 0 0 1-.274-.274.275.275 0 0 0-.275-.274c-.182 0-.274-.183-.274-.548 0-.366-.091-.549-.274-.549a.274.274 0 0 1-.274-.274c0-.748-.903-.174-2.971 1.891M29.25 220.11c-.116.218-.171.438-.121.488.051.05.187-.087.304-.305.117-.219.172-.439.121-.489-.05-.05-.187.087-.304.306m35.649-.092c0 .151.124.275.275.275a.275.275 0 1 0-.275-.275m170.056 1.32c-.121.404-.213.971-.205 1.261.01.356.101.175.278-.559.305-1.26.25-1.782-.073-.702m-171.152-.223c0 .151-.152.274-.337.274-.193 0-1.552 1.244-3.194 2.925-2.722 2.785-3.369 3.263-3.698 2.731-.066-.106-.297-.271-.513-.365-.6-.261-1.109-.604-1.271-.857-.081-.126-.297-.229-.481-.229a.836.836 0 0 1-.561-.274c-.125-.151-.341-.274-.48-.274-.139 0-.56-.165-.935-.366-.375-.201-.83-.366-1.011-.366-.181 0-.534-.133-.784-.297-.312-.205-.662-.264-1.12-.19-1.109.18-1.088.431.05.573.577.072 1.165.247 1.306.388.142.142.437.26.656.264.219.003.558.126.753.274.195.147.536.268.757.268.222 0 .45.124.508.274.058.151.314.275.568.275.29 0 .463.102.463.274 0 .171.173.274.463.274.254 0 .51.123.568.274.058.151.201.274.319.274s.346.144.508.32c.462.503 1.119.96 1.378.96.131 0 .237.082.237.183 0 .101.137.183.303.183.282 0 .282-.023 0-.334-.535-.591-.352-.859 2.623-3.848 1.608-1.617 2.925-3.024 2.925-3.127 0-.102.123-.187.274-.187a.274.274 0 1 0-.274-.274m-34.697.183c.052.333.219.37 1.875.418 2.233.065 2.247-.089.019-.213-1.044-.059-1.681-.177-1.787-.331-.119-.173-.149-.138-.107.126m4.075.579c.201.044.888.205 1.526.357.638.153 1.196.242 1.24.198.117-.117-2.216-.681-2.712-.656-.367.019-.374.031-.054.101m12.157.966c0 .308-.127.611-.297.706-.181.101-.224.212-.111.282.257.159 1.871-.077 1.871-.273 0-.141-.414-.237-.777-.179-.076.012-.137-.225-.137-.527 0-.366-.092-.549-.275-.549-.181 0-.274.182-.274.54m-9.04-.187c.096.094.42.221.722.283.547.113.546.113-.067-.169-.701-.324-.906-.359-.655-.114m1.362.467c0 .048.514.332 1.143.631a23.722 23.722 0 0 1 3.642 2.199c.343.254.498.313.356.135-.61-.76-5.141-3.373-5.141-2.965m196.739.8c-.117.39-.203.945-.191 1.235.014.356.046.409.097.162.042-.201.167-.718.278-1.148.256-.989.1-1.199-.184-.249m-36.26.668c-.051.051-.702.171-1.447.265l-1.354.172 1.646-.087c.904-.048 1.908-.136 2.23-.194.721-.13 1.333.7 1.334 1.809 0 .379.077.831.17 1.006.094.174.35.934.571 1.688.22.755.51 1.66.644 2.011.134.352.791 2.327 1.46 4.388.668 2.061 1.282 3.912 1.363 4.113.081.201.481 1.394.888 2.651.408 1.257.942 2.861 1.188 3.565.245.704.719 2.144 1.054 3.199.653 2.064 1.144 2.747 1.967 2.737.602-.008 1.025-.337 4.684-3.651.611-.553 1.762-1.581 2.56-2.285.797-.704 1.948-1.732 2.558-2.285.61-.553 2.787-2.486 4.839-4.296a536.643 536.643 0 0 0 4.017-3.565c.158-.151.985-.884 1.839-1.63 1.974-1.724 2.739-2.572 2.739-3.032 0-.246-.122-.127-.373.366-.206.402-.802 1.081-1.325 1.509-.524.427-1.46 1.25-2.081 1.828a61.915 61.915 0 0 1-2.004 1.781 74.531 74.531 0 0 0-1.98 1.739c-.606.554-1.467 1.335-1.912 1.737-.445.401-.94.853-1.099 1.003-.159.151-.536.467-.836.702-.537.42-3.17 2.785-4.108 3.689-.263.253-.711.644-.996.868-.284.224-.944.798-1.466 1.276-.916.839-2.714 2.438-3.849 3.42-1.259 1.091-2.053.721-2.655-1.235a66.653 66.653 0 0 0-.631-1.955c-.567-1.601-.686-1.954-.833-2.468-.208-.729-.722-2.286-.906-2.743-.081-.201-.567-1.682-1.081-3.29a188.405 188.405 0 0 0-1.132-3.474 17.618 17.618 0 0 1-.349-1.097c-.147-.536-.364-1.179-.832-2.468a92.078 92.078 0 0 1-.902-2.833c-.367-1.207-.745-2.383-.838-2.614a2.593 2.593 0 0 1-.17-.801c0-1.138-1.874-2.237-2.592-1.519m35.719 1.866c-.121.404-.213.971-.205 1.261.011.356.101.175.278-.559.305-1.261.25-1.782-.073-.702m-189.255 1.38c.852.878 1.588 1.596 1.635 1.596.047 0-.197-.3-.544-.668-.882-.935-1.116-1.164-1.927-1.888-.393-.351-.017.081.836.96m188.715 1.216c-.126.407-.223.968-.216 1.246.008.351.093.201.28-.493.319-1.186.265-1.819-.064-.753M46.97 230.576c.434.578.825 1.051.87 1.051.124 0-1.078-1.634-1.386-1.882-.15-.121.082.253.516.831m.931 1.305c-.002.089.243.564.545 1.054.302.49.549.957.549 1.036 0 .08.123.305.273.5.236.307.235.259-.008-.344-.315-.782-1.354-2.499-1.359-2.246m107.756 1.54c-.674.28-1.138.651-2.905 2.319-.32.302-1.645 1.536-2.945 2.743-1.3 1.206-2.58 2.399-2.845 2.65-.264.252-1.456 1.362-2.648 2.468-3.949 3.662-4.913 4.559-5.394 5.024-.262.254-1.413 1.325-2.557 2.38a484.935 484.935 0 0 0-3.363 3.131c-.705.666-1.807 1.695-2.449 2.285-.641.591-1.723 1.609-2.404 2.263a73.355 73.355 0 0 1-1.94 1.802 97.416 97.416 0 0 0-2.272 2.102 554.81 554.81 0 0 1-5.928 5.527c-.301.274-1.61 1.493-2.907 2.709a934.357 934.357 0 0 1-2.952 2.759c-2.658 2.459-5.009 4.691-5.583 5.302-.379.402-1.665 1.718-2.858 2.925-2.411 2.438-1.956 2.102 1.124-.832a663 663 0 0 1 6.401-6.025c.596-.553 1.344-1.251 1.661-1.553.317-.301 1.104-1.037 1.749-1.635.644-.598 1.833-1.709 2.642-2.468.809-.76 2.536-2.368 3.839-3.574a579.323 579.323 0 0 0 3.923-3.665 524.739 524.739 0 0 1 4.091-3.837c.437-.4 5.7-5.293 5.888-5.472.999-.953 4.911-4.606 5.213-4.868.213-.184 1.587-1.469 3.053-2.856 1.466-1.386 2.8-2.644 2.963-2.795l1.382-1.269c1.053-.966 3.606-3.37 5.837-5.498 2.561-2.441 3.604-2.428 5.83.072 2.393 2.686 2.327 3.237-.724 6.055l-1.98 1.833a365.76 365.76 0 0 0-4.784 4.462 389.289 389.289 0 0 1-2.93 2.755 536.048 536.048 0 0 0-5.29 4.928c-2.309 2.183-6.277 5.886-6.71 6.262a250.66 250.66 0 0 0-3.028 2.834 936.09 936.09 0 0 1-2.964 2.795 790.774 790.774 0 0 0-5.026 4.688l-3.311 3.109a149.86 149.86 0 0 1-1.736 1.596c-.542.489-1.688 1.557-2.548 2.375-.86.817-2.011 1.9-2.559 2.405-2.601 2.4-4.061 3.76-5.671 5.285-.963.911-2.053 1.931-2.423 2.266-.879.796-.875 1.127.014 1.13a13.93 13.93 0 0 1 1.416.095l.732.093-.797-.265c-.439-.145-.912-.22-1.051-.166-.345.132-.339-.608.006-.801.232-.13 2.144-1.887 5.258-4.831.929-.878 3.489-3.271 5.286-4.941.362-.337 1.465-1.353 2.45-2.258.985-.904 2.009-1.851 2.274-2.102.662-.627 2.748-2.578 5.667-5.302a566.562 566.562 0 0 0 3.214-3.016c.42-.402 1.252-1.184 1.848-1.737 1.513-1.403 6.236-5.827 6.928-6.49.315-.301 1.506-1.412 2.648-2.468a324.003 324.003 0 0 0 2.935-2.742 457.89 457.89 0 0 1 3.121-2.925 698.448 698.448 0 0 0 3.631-3.401c.754-.714 1.898-1.784 2.542-2.377.644-.592 1.754-1.642 2.468-2.333.713-.69 1.421-1.348 1.572-1.462 2.169-1.64 2.037-3.247-.477-5.817-1.778-1.817-2.476-2.132-3.647-1.646m-105.928 2.237c-.002.156.068.362.156.457.088.096.305.649.483 1.229.179.581.362 1.018.408.972.098-.098-.606-2.263-.867-2.667-.157-.242-.178-.241-.18.009m79.797.596c-.709.424-1.493 1.106-4 3.482a4032.272 4032.272 0 0 1-3.02 2.86c-.265.251-1.547 1.444-2.848 2.651a575.315 575.315 0 0 0-3.232 3.016 353.72 353.72 0 0 1-2.748 2.56 589.638 589.638 0 0 0-3.072 2.857c-.655.616-1.588 1.48-2.074 1.92-.485.439-1.568 1.457-2.406 2.261a123.3 123.3 0 0 1-2.683 2.493c-1.122.998-3.305 3.152-4.826 4.763a72.66 72.66 0 0 1-2.057 2.042c-.722.689-1.313 1.303-1.313 1.364 0 .061.391-.265.868-.724 1.965-1.887 6.859-6.521 8.082-7.653a815.569 815.569 0 0 0 6.396-5.963 362.35 362.35 0 0 1 5.037-4.706 484.34 484.34 0 0 0 3.657-3.41c.905-.856 2.132-2.008 2.728-2.559.595-.552 1.386-1.291 1.758-1.643 6.842-6.481 6.775-6.455 9.504-3.64 2.364 2.438 2.356 3.262-.058 5.578a536.64 536.64 0 0 1-6.172 5.822c-.648.599-1.796 1.669-2.55 2.379-.754.709-2.518 2.359-3.919 3.665a842.184 842.184 0 0 0-3.124 2.923c-.317.302-1.104 1.038-1.748 1.636a522.5 522.5 0 0 0-2.638 2.468c-.806.759-2.485 2.327-3.731 3.483-1.245 1.156-2.85 2.653-3.566 3.325a94.505 94.505 0 0 1-1.701 1.569c-.429.372-3.75 3.422-4.235 3.889-.16.154-1.341 1.257-2.623 2.449l-2.331 2.168.024 3.675c.02 3.084.051 3.469.189 2.395.091-.704.117-2.317.057-3.585l-.108-2.306.713-.711c2.449-2.441 7.545-7.093 8.086-7.383.282-.151 1.561-1.262 2.843-2.468 1.281-1.207 2.551-2.4 2.822-2.651.271-.252 1.102-1.033 1.847-1.737.745-.704 2.417-2.267 3.717-3.473a308.48 308.48 0 0 0 3.211-3.017c.467-.452 1.785-1.686 2.929-2.742a308.793 308.793 0 0 0 2.938-2.742c1.286-1.233 4.772-4.493 5.216-4.877 6.424-5.568 7.057-6.819 4.733-9.364-2.256-2.471-3.385-3.049-4.572-2.339m-78.68 2.686c-.004.251.107.868.247 1.371.329 1.186.339.49.012-.823-.138-.553-.255-.8-.259-.548m13.975-.021c-.068.11-.05.334.041.496.14.249.182.254.268.031.133-.348-.136-.807-.309-.527m.556 1.45c-.18.292.068 1.884.274 1.757.194-.12.193-1.123-.002-1.62-.095-.244-.18-.286-.272-.137m-13.978 1.985c-.038 1.536.162 1.715 1.859 1.669l1.312-.036-1.279-.065c-1.553-.079-1.617-.136-1.755-1.564l-.109-1.133-.028 1.129m14.537 1.262c-.178 1.077-.149 1.357.141 1.357.414 0 .451-.211.206-1.176l-.229-.899-.118.718m-10.726.636c1.503.357 1.799.383 1.097.096-.352-.144-.887-.258-1.188-.255-.541.007-.54.01.091.159m2.108.605c.198.137.566.312.817.389 1.633.498 4.861 3.473 6.139 5.657.383.654.724 1.162.759 1.127.442-.442-3.391-4.845-5.252-6.034-1.514-.967-3.624-1.943-2.463-1.139m9.775-.067c.371.239 2.616.239 2.468 0-.062-.101-.704-.182-1.427-.18-.917.002-1.232.056-1.041.18m3.017.548c-.066.107.123.183.457.183.333 0 .523-.076.457-.183-.062-.1-.268-.183-.457-.183-.19 0-.395.083-.457.183m3.199 1.646c0 .1.185.181.411.18.333-.003.359-.037.137-.18-.354-.23-.548-.23-.548 0m2.221 1.819c.04.12.133.213.206.205.218-.022.176-.273-.06-.352-.12-.04-.186.026-.146.147m.637.517c-.05.082-.026.255.054.384.113.184.169.173.254-.048.115-.3-.151-.59-.308-.336m.562.954c.053.201.169.366.258.366.191 0 .197-.058.05-.442-.161-.42-.42-.356-.308.076m.602.823c0 .151.082.274.183.274.1 0 .183-.123.183-.274 0-.151-.083-.274-.183-.274-.101 0-.183.123-.183.274m.548 1.005c0 .201.083.366.183.366.101 0 .183-.165.183-.366 0-.201-.082-.365-.183-.365-.1 0-.183.164-.183.365m-12.692.457c.631 1.802.888 2.45.948 2.39.1-.099-.459-1.696-.795-2.272-.154-.266-.223-.319-.153-.118m13.241.64c0 .201.082.366.183.366.1 0 .182-.165.182-.366 0-.201-.082-.365-.182-.365-.101 0-.183.164-.183.365m-12.089 2.24c.155.197.469.309.822.292l.572-.027-.548-.08c-.302-.044-.672-.176-.823-.293-.239-.185-.242-.171-.023.108m13.094.137c-.064.104.093.183.366.183.272 0 .43-.079.366-.183-.063-.101-.227-.183-.366-.183-.139 0-.304.082-.366.183m-7.587.27c1.766.285 3.212.342 1.829.072-.453-.088-1.399-.196-2.103-.241l-1.279-.081 1.553.25m11.929-.137c.377.039.994.039 1.371 0s.069-.072-.685-.072-1.063.033-.686.072m3.428.415c-.206.133-.114.178.366.178.479 0 .571-.045.365-.178-.151-.097-.315-.177-.365-.177-.051 0-.215.08-.366.177m-11.792.311c.503.151 1.185.39 1.515.531.78.332 1.19.329.551-.004-.585-.306-2.383-.845-2.734-.82-.135.009.166.141.668.293m76.784.555c-.482.122-.854.425-3.168 2.579-1.074.999-2.561 2.381-3.306 3.071-.744.69-1.785 1.665-2.313 2.168-.528.503-1.847 1.737-2.931 2.742a739.797 739.797 0 0 0-3.263 3.046c-.71.669-1.538 1.442-1.839 1.716a522.06 522.06 0 0 0-5.565 5.202c-.685.653-1.77 1.673-2.411 2.267-3.94 3.648-5.88 5.501-8.852 8.455-3.411 3.391-3.822 3.701-4.451 3.365-.545-.292-.727-.219-.202.081.898.514.834.555 4.123-2.616a508.388 508.388 0 0 1 4.378-4.148c1.397-1.307 3.122-2.927 3.834-3.599a82.962 82.962 0 0 1 1.746-1.615 93.098 93.098 0 0 0 1.925-1.794c.81-.771 1.921-1.816 2.468-2.322.548-.506 2.228-2.069 3.734-3.473a2055.85 2055.85 0 0 1 5.421-5.047c.364-.338 1.76-1.643 3.1-2.9 1.341-1.257 2.969-2.779 3.619-3.382.651-.603 1.559-1.456 2.019-1.894 2.355-2.247 3.193-2.191 5.616.372 2.383 2.521 2.288 3.082-1.045 6.184a2091.769 2091.769 0 0 0-4.535 4.231c-.666.62-2.363 2.213-3.77 3.54a556.11 556.11 0 0 1-3.04 2.851c-.263.241-1.447 1.343-2.63 2.449a1088.751 1088.751 0 0 1-2.628 2.451 942.56 942.56 0 0 0-2.934 2.742 2783.368 2783.368 0 0 1-3.829 3.582c-.754.704-1.996 1.871-2.759 2.593-.763.722-1.63 1.504-1.927 1.737-.298.233-1.242 1.089-2.098 1.903-.856.813-1.905 1.79-2.333 2.169-.897.797-.959 1.144-.311 1.753.257.241.758.878 1.115 1.415.357.538.691.936.742.885.102-.101-1.381-2.089-1.848-2.476-.39-.324-.37-.853.044-1.147.185-.132 1.275-1.121 2.423-2.198 1.147-1.077 2.426-2.187 2.842-2.468.65-.438 2.02-1.689 6.465-5.902.477-.453 1.351-1.268 1.942-1.811.591-.543 1.865-1.736 2.831-2.651a485.47 485.47 0 0 1 3.743-3.491 283.33 283.33 0 0 0 2.555-2.376 212.07 212.07 0 0 1 1.75-1.646c.648-.603 2.319-2.166 3.714-3.473l4.198-3.931c4.221-3.947 4.299-4.331 1.465-7.221-2.001-2.04-2.507-2.301-3.824-1.968m-71.917 1.375c4.733 2.393 7.951 5.509 11.279 10.922.216.352.394.577.396.501.013-.587-2.771-4.493-4.58-6.427-2.061-2.203-7.919-6.14-9.137-6.14-.121 0 .798.515 2.042 1.144m13.572 11.31-1.119 1.118-.387-.387c-.378-.378-.517-.324-.248.097.34.533 2.139-.57 2.877-1.765.231-.373-.033-.153-1.123.937m10.903 3.349c0 .257.082.468.183.468.101 0 .183-.16.183-.355 0-.195-.082-.406-.183-.468-.104-.064-.183.09-.183.355m.549 1.93c0 .201.082.366.182.366.101 0 .183-.165.183-.366 0-.201-.082-.365-.183-.365-.1 0-.182.164-.182.365m.659 2.301c-.061.16-.032.427.066.594.141.242.179.183.183-.29.006-.65-.077-.752-.249-.304m-4.891 6.966c-.138.317-6.175 5.907-6.38 5.907-.154 0-.179-.249-.087-.868.155-1.042.002-.984-.24.091-.409 1.82.268 1.344 6.241-4.395.397-.381.679-.736.626-.789-.052-.052-.124-.028-.16.054m-6.329 3.53c0 .352.037.496.083.32a1.501 1.501 0 0 0 0-.64c-.046-.176-.083-.032-.083.32m15.405 2.925c.201.087.654.154 1.006.149l.64-.009-.549-.14c-.821-.209-1.583-.209-1.097 0m239.727 1.183c-3.22.887-5.861 3.632-7.539 7.835l-.279.698-.872-.461c-1.096-.579-2.276-1.056-2.374-.958-.041.041.321.222.805.403a10.8 10.8 0 0 1 1.562.751c.916.566.931.56 1.409-.538 1.191-2.744 1.577-3.358 3.023-4.806 1.645-1.646 3.083-2.474 5.032-2.894.693-.149.96-.258.64-.261-.302-.003-.935.101-1.407.231m-15.869 6.842c-.352.063.553.116 2.011.118 1.724.002 2.331-.041 1.736-.123-1.11-.154-2.879-.151-3.747.005m-1.737.47c-.74.338-.296.351.482.013.338-.146.491-.266.341-.265-.151 0-.521.114-.823.252m-2.034.995c-.616.391-1.177.802-1.246.914-.069.112.229-.029.663-.314a72.714 72.714 0 0 1 1.429-.913c.352-.217.557-.396.457-.397-.101 0-.687.319-1.303.71m-205.391 1.53c.48.938.925 1.903.988 2.145.064.241.168.386.233.321.139-.139-1.611-3.873-1.898-4.05-.108-.067.197.646.677 1.584m202.621 1.001c-.611.777-1.205 1.867-1.084 1.988.045.045.227-.23.406-.611.178-.38.566-1 .862-1.377.295-.378.496-.686.446-.686-.05 0-.334.308-.63.686m-1.486 2.747c-.13.314-.194.677-.141.808.053.135.101.075.109-.137.008-.206.106-.466.218-.578.112-.112.169-.307.127-.434-.042-.126-.183.027-.313.341m-199.556.04c.224.852.647 2.83.802 3.748.123.729.158.794.176.318.028-.709-.641-3.815-.91-4.231-.147-.226-.162-.189-.068.165m199.241 2.926c0 1.055.03 1.487.067.959.037-.528.037-1.391 0-1.919s-.067-.096-.067.96m.123 2.218c-.004.164.112.576.259.914.345.795.354.466.012-.482-.144-.402-.267-.596-.271-.432m-198.295 1.803c0 1.056.03 1.488.067.96.037-.528.037-1.391 0-1.919s-.067-.096-.067.959m171.923-.412c.632.035 1.62.035 2.194-.001.574-.036.057-.066-1.15-.065-1.207 0-1.676.03-1.044.066m16.087-.001c.531.037 1.354.037 1.828-.001.474-.037.039-.068-.966-.067-1.006 0-1.394.031-.862.068m-18.975.398c-2.991.942-6.569 3.683-8.143 6.239-.095.156.068-.009.363-.365 1.589-1.92 5.16-4.922 5.887-4.951.087-.003.487-.165.889-.359.402-.194.855-.357 1.006-.362.15-.005.603-.128 1.005-.273 1.028-.37.212-.313-1.007.071m7.223.03c1.407.459 2.186.822 3.162 1.473.783.521 1.742.688 1.956.341.102-.164.679-.458 2.651-1.348.352-.159.513-.291.358-.294-.155-.002-1.019.366-1.92.818-1.962.986-1.995.988-3.16.204-.998-.671-3.2-1.581-3.782-1.563-.199.007.131.173.735.369m9.14-.111c-.977.322-.421.329.732.009.528-.146.721-.253.457-.252-.252.001-.786.11-1.189.243m5.942-.086c1.577.348 1.991.384 1.188.102-.402-.141-.978-.254-1.279-.25-.536.007-.534.01.091.148m2.011.422c0 .053.391.243.868.422.478.179 1.384.638 2.015 1.02 1.395.847 2.13.735 3.134-.475.14-.167-.178-.014-.706.341-1.173.789-1.009.793-2.413-.055-.639-.385-1.408-.788-1.71-.895a28.34 28.34 0 0 1-.868-.324c-.176-.072-.32-.087-.32-.034m-193.65 2.685c-.309 2.278-.318 2.711-.03 1.463.15-.654.249-1.476.22-1.828-.046-.546-.073-.492-.19.365m90.908 2.558c-.3.097.198.155 1.447.166 1.047.011 1.87-.011 1.828-.048-.178-.157-2.858-.253-3.275-.118m-2.468.311c-.912.23-.63.422.618.422.984 0 1.312-.06 1.257-.228-.078-.237-1.233-.356-1.875-.194m6.581.239c-.071.116.367.183 1.188.183s1.26-.067 1.189-.183c-.062-.1-.597-.182-1.189-.182-.591 0-1.126.082-1.188.182m-8.227.315c-.748.177-.707.417.07.417.524 0 .76-.072.711-.217-.087-.263-.295-.316-.781-.2m10.969.234c-.068.11.185.183.64.183s.708-.073.64-.183c-.062-.101-.35-.183-.64-.183-.29 0-.578.082-.64.183m-98.898 1.375c-.278.762-.469 1.421-.425 1.465.044.044.302-.549.573-1.317.27-.768.461-1.427.424-1.464-.037-.037-.295.555-.572 1.316m85.827-.735c-.125.15-.366.274-.534.274a.83.83 0 0 0-.511.204c-.228.228-.847.599-1.469.88-.226.103-.411.271-.411.374 0 .103-.074.187-.165.187-.396 0-3.857 3.368-3.857 3.753 0 .127-.123.277-.274.335a.45.45 0 0 0-.274.385c0 .154-.081.28-.18.28-.098 0-.229.2-.29.444-.062.244-.228.489-.37.543-.141.054-.257.239-.257.41 0 .171-.138.464-.307.65-.239.265-.258.387-.085.56.173.173.244.132.328-.187.058-.225.22-.409.359-.409.139 0 .253-.167.253-.371s.124-.419.274-.477c.151-.057.275-.261.275-.451s.123-.346.274-.346c.151 0 .274-.107.274-.237 0-.255.3-.679 1.23-1.741.324-.37.592-.734.594-.81.002-.075.128-.137.278-.137a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.115-.274.255-.274s.302-.123.36-.274a.449.449 0 0 1 .385-.274c.154 0 .28-.085.28-.188s.205-.265.457-.361c.251-.095.457-.249.457-.341 0-.092.206-.219.457-.282.251-.063.457-.196.457-.294 0-.099.131-.18.291-.18.16 0 .5-.164.756-.365.256-.201.618-.366.806-.366.187 0 .341-.082.341-.183 0-.287-1.027-.213-1.28.092m14.625-.113c0 .197.554.356.87.25.126-.042.183-.152.126-.244-.132-.215-.996-.22-.996-.006m1.097.555c0 .093.247.223.549.289.301.066.548.19.548.274 0 .085.24.207.533.271.293.064.579.235.634.38a.431.431 0 0 0 .368.263c.146 0 .304.144.35.32.068.261.088.25.105-.059.021-.383-1.208-1.358-1.713-1.358-.131 0-.285-.123-.343-.274-.113-.293-1.031-.388-1.031-.106m59.276 1.146c-.299.634-.604 1.348-.678 1.586-.117.374-.219.419-.76.331-.369-.06-.581-.031-.519.07.37.599 1.192.161 1.65-.879.254-.578.59-1.283.746-1.566.156-.284.243-.557.194-.606-.05-.05-.335.429-.633 1.064m-102.543.56a78.087 78.087 0 0 1-2.135 2.117c-.568.536-1.033 1.05-1.033 1.142 0 .093-.116.169-.258.169-.142 0-.635.39-1.095.868l-.836.868-.003 4.393c-.002 4.764-.103 5.295-.979 5.17-.387-.055-.395-.119-.434-3.895-.023-2.112-.043-3.927-.046-4.035-.003-.107-1.671 1.476-3.707 3.518-2.613 2.62-3.823 3.713-4.114 3.714-.463.002-.53.29-.166.719.459.54 1.949 3.134 1.949 3.392 0 .415.363.52.711.205.178-.161.419-.292.537-.292.118 0 .214-.085.214-.188s.185-.269.412-.37a48.307 48.307 0 0 0 1.761-.9c.742-.395 1.578-.768 1.858-.829.28-.062.555-.231.61-.375.063-.163.364-.266.792-.269.381-.003.851-.127 1.047-.274.195-.148.606-.271.914-.275.307-.003.718-.126.914-.274.195-.147.74-.268 1.211-.268.472 0 1.16-.127 1.53-.282.933-.389 9.948-.374 10.465.018.187.142.777.255 1.349.258.602.003 1.161.115 1.371.274.497.376 2.119.381 1.975.006-.06-.157-.333-.274-.64-.274s-.579-.117-.64-.275c-.058-.152-.426-.327-.817-.389-.635-.102-.711-.17-.711-.639 0-.478-.057-.525-.64-.525-.637 0-.64-.005-.64-.823 0-.609-.071-.823-.274-.823-.153 0-.274-.162-.274-.365 0-.203-.122-.366-.275-.366a.274.274 0 0 1-.274-.274.274.274 0 0 0-.274-.274.275.275 0 0 1-.274-.275.276.276 0 0 0-.275-.274.275.275 0 0 1-.274-.274.274.274 0 0 0-.274-.274c-.203 0-.274-.214-.274-.823 0-.792-.021-.823-.549-.823-.365 0-.548-.091-.548-.274 0-.152-.163-.274-.366-.274-.296 0-.365-.122-.365-.64 0-.447-.083-.64-.275-.64a.275.275 0 0 1-.274-.274.274.274 0 0 0-.274-.274.275.275 0 0 1-.274-.274.276.276 0 0 0-.275-.275c-.182 0-.274-.182-.274-.548 0-.488-.061-.549-.548-.549-.536 0-.549-.02-.549-.914 0-.893-.012-.914-.548-.914-.366 0-.549-.091-.549-.274 0-.152-.162-.274-.365-.274-.296 0-.366-.122-.366-.64 0-.915-.311-.816-1.585.503m-59.073.539a.852.852 0 0 0-.225.503c-.003.156-.127.443-.274.638-.148.195-.269.44-.269.543 0 .28.465-.434.792-1.218.311-.744.308-.798-.024-.466m149.964.238-1.28.255 1.188-.123c1.589-.164 5.674-.164 7.039 0 .894.107.978.097.457-.055-1.077-.315-5.957-.365-7.404-.077m-57.265.405c.278.042.689.041.914-.002.225-.044-.002-.078-.505-.077-.503.002-.687.037-.409.079m65.722-.002c.227.044.556.042.731-.003.175-.046-.011-.082-.413-.08-.403.002-.546.039-.318.083m-69.061.337-1.005.243 1.025-.098c.565-.054 1.305-.164 1.646-.245l.619-.146-.639.002c-.352.001-1.093.111-1.646.244m5.393-.09c.402.083.978.146 1.28.14l.548-.011-.548-.139c-.302-.077-.878-.14-1.28-.141h-.731l.731.151m51.402.175c-1.122.352-3.848 1.634-3.728 1.754.038.038.552-.177 1.141-.479a18.21 18.21 0 0 1 2.271-.93c1.509-.481 2.015-.69 1.657-.684-.151.002-.755.155-1.341.339m-48.934.18c.352.077 1.134.319 1.737.537 1.447.524 1.984.652 1.188.283-1.159-.537-2.63-1.003-3.101-.982-.375.017-.341.048.176.162m-10.055.287-.639.258.639-.11c.726-.126 1.395-.43.915-.415-.151.004-.563.124-.915.267m-2.468.985c-1.92.945-3.211 1.83-4.945 3.39-2.468 2.219-2.896 2.689-3.418 3.748-.123.251-.328.565-.455.698a.993.993 0 0 0-.231.594c0 .194-.078.353-.174.353-.096 0-.229.288-.295.64-.066.352-.192.64-.28.64-.089 0-.213.329-.278.731-.064.402-.168.732-.23.732-.063 0-.122.926-.131 2.057-.014 1.693.009 1.878.129 1.05.542-3.747.517-3.657 1.665-6.033 1.053-2.18 3.384-4.933 5.654-6.68.896-.688 3.907-2.278 4.316-2.278a.42.42 0 0 0 .319-.183c.192-.311-.131-.205-1.646.541m16.39.108c.166.169.402.275.524.234.121-.04-.014-.179-.302-.308-.49-.22-.505-.215-.222.074m-102.575.458c-.007.156.225.609.514 1.006.29.396.751 1.154 1.026 1.682.274.529.588 1.017.698 1.085.243.15-.844-1.822-1.451-2.631-.241-.322-.515-.775-.607-1.006-.102-.253-.173-.307-.18-.136m58.306.173c0 .268-.122.366-.457.366s-.457-.098-.457-.366.122-.365.457-.365.457.097.457.365m45.459-.062c.217.185.871.624 1.452.976 1.319.798 3.972 3.403 4.887 4.799.683 1.041 1.155 1.517.544.549-1.541-2.446-4.042-4.832-6.547-6.247-.529-.299-.622-.32-.336-.077m39.002.268c-1.251.851-3.327 3.045-4.045 4.273-.58.991-.752 1.37-1.163 2.56-.069.201.291-.457.801-1.463 1.064-2.099 2.245-3.513 4.053-4.853 1.086-.805 1.428-1.109 1.222-1.083-.025.003-.416.258-.868.566m-140.395 3.765c-.004.122.146.534.333.914.187.38.473.979.635 1.331.163.352.293.516.29.366-.008-.344-1.247-2.916-1.258-2.611m16.775 2.381c.834.034 2.15.034 2.925 0 .774-.035.091-.062-1.517-.062-1.609 0-2.243.028-1.408.062m-3.985.412c-1.436.399-1.107.473.445.099.61-.146 1.314-.299 1.566-.34.319-.052.264-.077-.183-.082-.352-.004-1.175.142-1.828.323m8.638-.239c.176.046.464.046.64 0s.032-.084-.32-.084-.496.038-.32.084m1.325.228c.201.081.736.199 1.188.262l.823.115-.823-.272c-.452-.149-.987-.267-1.188-.262l-.366.009.366.148m-21.466.31c-.008.114.105.485.252.823.147.338.267.492.266.341-.001-.338-.497-1.452-.518-1.164m107.298-.076c0 .066.287.681.639 1.366.351.685.639 1.145.64 1.022 0-.123-.179-.575-.398-1.005-.453-.891-.881-1.562-.881-1.383m-98.081.417c-.852.278-2.183.886-1.645.752.591-.148 2.523-.837 2.622-.936.136-.137-.168-.079-.977.184m14.452-.104c.096.093.421.221.722.283.547.113.546.113-.067-.17-.701-.323-.906-.358-.655-.113m109.954.502c0 .399-.353.754-1.142 1.149-.276.138-.469.284-.429.325.04.04.409-.098.819-.307.701-.358 1.166-1.121.866-1.421-.063-.062-.114.052-.114.254m-108.501.059a.444.444 0 0 0 .342.183c.125 0 .795.285 1.488.634.693.349 1.292.601 1.332.562.076-.076-2.91-1.562-3.14-1.562-.074 0-.084.083-.022.183m-19.875 1.248c-.876.47-1.699.962-1.828 1.093s.3-.056.954-.416a35.574 35.574 0 0 1 1.965-1.009c.427-.195.777-.398.777-.452 0-.185-.276-.069-1.868.784m-4.697-.334c-.006.151.106.645.249 1.097.177.563.258.679.257.366-.002-.501-.488-1.906-.506-1.463m130.35.927c-.855.459-1.172.808-.384.423.77-.376 1.429-.81 1.183-.779-.098.012-.457.172-.799.356m-21.984.34c.322.282.552.342.914.24.604-.169 3.354-.171 5.055-.003l1.279.127-1.462-.276c-.988-.187-2.117-.25-3.481-.193-1.13.047-2.176.006-2.376-.094-.276-.137-.259-.091.071.199m-79.44-.042c.06.097.462.417.892.71 1.498 1.021 4.341 3.797 5.226 5.102.273.403.545.774.604.824.059.051.335.482.612.96.277.478.582.917.678.976.87.537-2.367-3.746-4.242-5.613-1.341-1.336-4.11-3.509-3.77-2.959m-27.109.887c-.706.498-1.037.561-1.152.219-.044-.132-.068-.112-.057.046.034.481.726.396 1.387-.169.774-.662.689-.708-.178-.096m114.163-.341c.818.186 3.681 1.223 4.017 1.454.198.137.486.245.64.241.155-.004.049-.131-.236-.286-.865-.469-3.956-1.536-4.384-1.513-.369.019-.372.028-.037.104m11.625.971c-.813.603-1.479 1.14-1.479 1.194 0 .083.908-.558 2.834-2 .201-.151.311-.278.244-.282-.066-.005-.786.485-1.599 1.088m-81.003.732c0 .1-.211.183-.468.183-.265 0-.419-.08-.355-.183.062-.101.273-.183.468-.183s.355.082.355.183m74.565.246c.138.166.327.302.421.302.094 0 .748.377 1.454.838 1.26.823 1.292.832 1.666.503 1.006-.885 1.236-1.12 1.236-1.263 0-.085-.362.201-.804.635l-.804.789-1.07-.724c-1.463-.991-2.443-1.495-2.099-1.08m-65.47 2.997c.729.035 1.922.035 2.651 0 .729-.034.132-.063-1.326-.063-1.458 0-2.054.029-1.325.063m-3.014.179c.278.042.689.041.914-.003.225-.043-.003-.078-.505-.076-.503.001-.687.037-.409.079m8.27.04 1.919.269c.634.09.727.075.406-.067-.229-.101-1.093-.221-1.92-.268-1.362-.077-1.4-.071-.405.066m-10.695.295-1.006.242 1.097-.105c1.197-.114 2.222-.405 1.371-.389-.251.005-.909.118-1.462.252m13.894.207c.771.127 3.169.744 3.714.955.74.287 1.057.233.375-.064-.882-.384-3.47-1.019-4.039-.991-.488.024-.49.027-.05.1m-16.088.279c-3.152.909-6.954 2.578-8.659 3.802-.958.689-1.193.612-1.734-.567-.233-.51-.47-.881-.525-.826-.055.055.034.306.199.557.164.251.299.581.299.733 0 .795.862.903 1.871.234 2.291-1.518 5.933-3.076 8.869-3.795.427-.105.777-.229.777-.275 0-.12-.359-.075-1.097.137m22.775.645c-.534.627-.695.66-1.66.339-.201-.067-.1.019.225.19.703.372 1.31.18 1.801-.57.459-.699.245-.675-.366.041m23.447 37.973c.072.629-.335 1.014-1.071 1.014-.718 0-.754-.149-.229-.942.587-.887 1.204-.921 1.3-.072"
        />
        <path
          fill={forceColor ?? '#fc7329'}
          d="M194.881 17.491c-25.368.936-49.979 6.588-69.948 16.065-3.635 1.725-9.989 4.878-11.313 5.613a652.51 652.51 0 0 1-2.742 1.513c-4.712 2.58-11.478 6.853-16.454 10.391-2.505 1.781-6.857 5.013-7.038 5.226-.051.06-.668.555-1.371 1.101a63.135 63.135 0 0 0-1.927 1.549c-.355.307-1.091.928-1.636 1.38a128.65 128.65 0 0 0-1.828 1.554c-.46.402-1.365 1.184-2.009 1.737-7.639 6.557-17.409 17.174-24.52 26.644-3.072 4.091-4.951 6.803-7.294 10.529-.553.879-1.261 1.995-1.572 2.479-.817 1.27-3.364 5.509-3.364 5.599 0 .042-.399.757-.886 1.59-1.531 2.615-4.716 8.796-6.245 12.117-1.235 2.684-1.439 3.134-1.82 4.022a141.3 141.3 0 0 1-.556 1.279c-1.139 2.558-3.464 8.531-4.376 11.243a61.288 61.288 0 0 1-.737 2.103c-.279.67-1.877 5.653-2.14 6.673a92.031 92.031 0 0 1-.412 1.554c-.945 3.378-1.659 6.015-1.832 6.764-.117.502-.331 1.407-.476 2.011-3.124 12.972-4.614 25.547-4.701 39.671l-.042 6.947.548-.054c.302-.029.921-.098 1.376-.152.919-.109 3.891.388 3.987.667.033.098.181.178.329.178.354 0 1.763.76 1.95 1.052.08.125.265.228.411.228.146 0 .265.082.265.183 0 .101.124.183.274.183.153 0 .275.162.275.365 0 .202.082.366.182.366.407 0 .128-.451-.914-1.477-.603-.594-1.096-1.163-1.096-1.264 0-.101-.238-.184-.528-.184-1.124 0-1.09-2.062.053-3.172 1.157-1.126 1.508-2.894.702-3.539-.211-.168-.246-.408-.146-1.005.071-.432.166-2.965.21-5.63.088-5.359.259-6.342 1.356-7.792.295-.39.538-.811.541-.937.003-.126.088-.228.188-.228.101 0 .183-.288.183-.64 0-.64-.528-.934-.823-.457-.333.54-.87.181-.753-.503.065-.377.171-1.735.235-3.017.065-1.282.187-2.33.272-2.33.085 0 .155-.117.155-.259 0-.143.083-.287.184-.321.294-.098.787-3.245.552-3.528-.135-.163-.138-.386-.01-.725.103-.269.218-1.004.256-1.633.077-1.265.429-2.093 1.217-2.863 1.324-1.295 3.103-3.902 3.103-4.549 0-.303-.66-.071-1.473.518-.88.638-1.576.762-1.357.243.239-.567.63-2.316.633-2.829.001-.274.183-.869.403-1.322.467-.962.383-1.132-.421-.851-.704.245-.837.155-.576-.392.265-.554.915-2.812 1.048-3.637.059-.367.228-.768.376-.891s.27-.492.27-.819c0-.327.123-.697.274-.823.151-.125.274-.492.274-.816 0-.325.134-.859.298-1.188.164-.329.363-.856.441-1.171.244-.978.558-1.798 1.27-3.315.377-.805.746-1.833.82-2.285.074-.452.316-1.193.539-1.645.223-.452.604-1.44.847-2.194s.505-1.398.582-1.432c.076-.033.139-.181.139-.327 0-.147.168-.447.373-.667.205-.22.497-.829.649-1.352.153-.524.47-1.237.706-1.584.235-.347.482-.908.549-1.245.148-.753.993-2.513 1.404-2.924.166-.166.359-.64.429-1.053.07-.413.223-.753.339-.757.264-.008.95-1.092 1.924-3.042.411-.822.837-1.549.946-1.617.221-.137.548-.895.629-1.459.081-.564.286-1.005 1.02-2.193.373-.604.78-1.426.905-1.829.125-.402.386-.905.579-1.118.194-.213.42-.625.502-.914l.149-.527.128.731c.363 2.059.51 2.597.825 3.009l.343.45.306-1.051c.167-.578.449-1.191.625-1.363.176-.173.793-1.218 1.372-2.324.578-1.106 1.243-2.176 1.478-2.377.235-.201.633-.782.885-1.291.251-.509.587-1.034.745-1.165.159-.132.29-.332.292-.446.002-.113.311-.667.686-1.23.897-1.348 1.226-1.84 2.224-3.329.459-.685.999-1.514 1.2-1.843.201-.329.592-.865.869-1.191.276-.326.502-.712.502-.858 0-.145.185-.349.412-.454.226-.105.601-.453.833-.773 1.162-1.601 2.033-2.729 2.798-3.621.464-.541.95-1.189 1.08-1.441.131-.251.718-.999 1.305-1.661s1.068-1.283 1.068-1.38c0-.237 1.291-1.449 1.695-1.59.178-.063.374-.244.435-.404.062-.16.656-.871 1.322-1.58.665-.709 1.374-1.525 1.575-1.813.201-.288.451-.525.555-.527.316-.005 1.913-1.73 1.913-2.066 0-.172.096-.313.213-.313.118 0 1.742-1.503 3.611-3.34 4.316-4.242 6.565-6.349 6.775-6.349.092 0 .306-.236.476-.524.495-.838 1.357.644 1.357 2.334 0 .054.946-.865 2.102-2.042 1.156-1.176 2.102-2.219 2.102-2.315 0-.097.397-.376.881-.619 1.175-.59 3.6-2.992 3.338-3.307-.238-.287.641-.98 1.447-1.141.768-.154.686-.38-.227-.622a71.68 71.68 0 0 1-1.851-.532l-1.075-.325.892-.334c1.069-.4 2.044-.987 2.519-1.519.192-.214.476-.389.632-.389.155 0 .533-.242.84-.539.306-.296 1.05-.8 1.654-1.12.603-.32 1.467-.905 1.919-1.3l.967-.845c.08-.07.25-.28.379-.468.2-.292.279.024.547 2.194.335 2.712.739 4.541.902 4.089.055-.151.145-.485.201-.742.128-.589 1.095-1.364 2.854-2.287.754-.395 1.4-.783 1.434-.861.035-.079.461-.345.947-.591.486-.247.937-.534 1.002-.639.065-.104.584-.44 1.155-.746a52.19 52.19 0 0 0 1.769-.995 54.824 54.824 0 0 1 2.191-1.2c.803-.419 1.543-.871 1.646-1.004.373-.489 4.902-2.661 5.326-2.555.27.068.582-.042.924-.325.284-.234 1.134-.696 1.888-1.025 1.384-.604 2.604-1.175 3.108-1.456.293-.164 1.898-.829 2.885-1.195.33-.122.696-.319.813-.436.118-.118.506-.217.863-.22.357-.004.855-.124 1.106-.268.251-.144.633-.264.849-.268.215-.003.439-.129.497-.28.058-.151.301-.275.539-.275.239 0 .584-.164.766-.365.182-.201.481-.366.665-.366.184 0 .822-.236 1.419-.525.596-.289 1.399-.581 1.785-.648.632-.111 2.041-.614 3.678-1.313a3.7 3.7 0 0 1 1.212-.256c.336 0 .713-.123.839-.274.125-.151.406-.274.625-.274.219 0 .477-.078.572-.173.246-.243 1.655-.586 2.733-.665.503-.036 1.202-.183 1.554-.326a15.6 15.6 0 0 1 1.463-.483 34.593 34.593 0 0 0 1.371-.406 29.52 29.52 0 0 1 1.645-.449c2.645-.646 3.752-.936 4.786-1.252.246-.075.608.002.948.203l.549.324.88-.717a60.27 60.27 0 0 0 2.14-1.815c.63-.567 3.023-2.659 3.472-3.034.289-.242.791-.686 1.114-.988.843-.787 1.321-1.026 1.807-.904.234.058 1.118.011 1.963-.106 1.448-.2 3.73-.403 7.295-.648.855-.059 2.377-.193 3.382-.299 5.988-.628 23.877-.611 25.562.024.536.202 3.862.47 5.827.47h1.589l.193.767c.106.421.193.925.193 1.118 0 .795.614 1.223 1.844 1.284.635.031 1.297.133 1.471.227.175.093.837.175 1.472.183.635.007 1.566.086 2.069.176l2.324.415c.776.14 1.516.34 1.646.445.129.106.728.243 1.331.307.604.063 1.673.24 2.377.394.704.153 1.527.326 1.828.384.302.058.631.166.731.24.101.074.55.191.999.26.449.068 1.313.294 1.92.501 1.251.426 2.907.848 4.12 1.049a6.404 6.404 0 0 1 1.577.527c.415.215.794.352.843.303.049-.049.694.201 1.434.556.74.355 1.619.645 1.952.645.334 0 .953.177 1.377.394.423.217 1.016.456 1.318.532.76.192 1.687.521 2.61.925.43.189.9.343 1.045.343.145 0 .574.135.955.299.38.165.856.359 1.057.432.201.073.859.339 1.463.591 1.03.43 1.406.57 2.879 1.075.525.18 3.842 1.77 5.073 2.432 2.135 1.149 4.917 2.331 5.242 2.228.486-.154.862.829 1.145 2.998.374 2.868.388 2.925.723 2.925.351 0 4.52 2.084 4.97 2.485.159.141.394.257.522.257.129 0 .478.206.777.457.299.251.742.457.986.457s.443.065.443.143c0 .079.267.299.594.488.327.189.868.58 1.202.868.334.288.93.728 1.325.977.443.28.718.593.718.817 0 .293.123.363.64.363.504 0 .64.073.64.344 0 .285.178.36 1.051.44 1.551.142 4.631.83 5.105 1.14.44.288 1.022.784 1.873 1.595.29.277.642.503.782.503.141 0 .577.329.97.731.392.403.818.732.945.732.128 0 .625.369 1.106.819.48.451.984.821 1.118.823.134.002.751.486 1.371 1.077s1.374 1.201 1.675 1.357c.302.156 1.04.783 1.64 1.394.6.611 1.195 1.111 1.322 1.111s.623.378 1.103.839c.479.462 1.089.953 1.355 1.092.324.169.536.479.645.943.142.602.238.698.747.748.39.038.704.227.948.569.377.529.637.624 3.346 1.228.944.21 1.417.401 1.417.572 0 .141 1.172 1.456 2.605 2.921 3.884 3.974 4.399 4.52 4.799 5.084.406.574 3.575 3.97 3.798 4.072.079.036.297.365.486.733.19.368.606.916.925 1.217.319.302.684.796.812 1.097.127.302.697 1.02 1.265 1.596.568.576 1.032 1.129 1.032 1.228 0 .099.373.615.829 1.146 1.37 1.596 1.451 1.737 1.634 2.839.071.427.194.817.274.866.08.05.202.538.27 1.085.068.548.248 1.098.4 1.224.152.126.44.55.64.942.228.447.457.678.612.618.153-.059.316.094.423.396.095.27.637 1.178 1.203 2.017l1.029 1.524-.404.578c-.507.726-2.297 2.987-2.842 3.592-.226.25-.411.548-.411.66 0 .239.864.118 1.026-.143.134-.217.802.367.802.702 0 .135.123.245.274.245.151 0 .274.155.274.344 0 .188.124.445.274.571.151.125.275.372.275.548 0 .176.123.423.274.548.151.126.274.372.274.549 0 .176.123.423.274.548.151.125.274.408.274.628 0 .221.247.637.549.926.302.289.548.658.548.821 0 .162.09.384.2.494.145.145.126.319-.069.631-.776 1.241-.427 2.251.601 1.738.898-.448 1.097-.391 1.097.316 0 .339.123.72.274.845.151.125.274.505.274.845 0 .427.085.617.274.617.183 0 .274.183.274.549 0 .365.092.548.275.548.15 0 .274.114.274.252 0 .139.123.354.274.48a.847.847 0 0 1 .274.57c0 .189.075.344.166.344.091 0 .416.534.722 1.188.305.653.642 1.188.748 1.188.106 0 .192.247.192.549 0 .365.092.548.275.548.203 0 .274.213.274.823 0 .656.065.825.32.837.191.008.228.051.091.107-.258.104-.31.72-.073.867.085.053.311-.046.503-.218.191-.173.52-.438.731-.588.211-.151.898-.665 1.528-1.142 1.273-.966 1.758-1.107 1.589-.462-.066.255.097.837.436 1.555.298.631.542 1.243.542 1.361 0 .117.238.754.528 1.416.29.661.677 1.696.86 2.3.183.603.48 1.266.661 1.474.18.208.328.518.328.689 0 .172.374 1.057.832 1.968.733 1.461.819 1.756.731 2.51-.055.47-.052.751.006.626.059-.126.186-.229.282-.229.096 0 .604-.308 1.128-.685.965-.695 2.13-1.393 2.151-1.291.007.031.034.427.061.879.028.453.267 1.399.533 2.103.266.703.486 1.509.488 1.789.002.281.174.845.383 1.255.209.409.543 1.331.742 2.049.199.718.445 1.593.545 1.945.18.625.575 2.287.805 3.382.347 1.656.692 2.948.832 3.12.087.107.211.683.274 1.28.064.596.321 1.698.573 2.448.251.751.527 1.943.614 2.651.154 1.263.336 2.301.692 3.938.098.452.267 1.686.376 2.742.109 1.056.336 2.29.505 2.742.199.533.357 1.757.449 3.474.079 1.458.227 3.227.329 3.93l.291 2.011c.191 1.331.47 6.194.429 7.496-.022.704-.023 1.485-.003 1.737.181 2.241.194 12.465.019 13.985-.117 1.005-.242 3.062-.28 4.57-.037 1.509-.149 3.072-.249 3.474-.101.402-.354 2.37-.563 4.374-.208 2.004-.421 3.711-.473 3.794-.156.253-.766 4.054-.684 4.266.042.109-.224 1.675-.59 3.48s-.736 3.734-.821 4.287c-.284 1.83-.851 4.127-1.174 4.75-.174.338-.39 1.193-.479 1.899-.088.706-.243 1.367-.344 1.467-.101.101-.184.347-.184.546 0 .358-.247 1.246-.591 2.124-.099.251-.37 1.197-.602 2.102-.456 1.775-.773 2.766-1.026 3.2a3.192 3.192 0 0 0-.222.457c-.034.1-.17.47-.302.822-.131.352-.276 1.091-.321 1.641-.048.581-.221 1.178-.413 1.422-.182.232-.467.892-.634 1.467a18.203 18.203 0 0 1-.838 2.192c-.294.631-.535 1.268-.535 1.417 0 .148-.247.792-.548 1.431-.302.638-.549 1.258-.549 1.377 0 .118-.247.704-.548 1.302-.302.598-.549 1.213-.549 1.368 0 .155-.617 1.514-1.371 3.02-.754 1.505-1.371 2.856-1.371 3.001 0 .364-1.467 3.492-2.109 4.494-.289.452-.505.96-.479 1.127.053.35.012.365-2.439.879-2.42.508-2.468.525-2.346.843.132.345-.282 1.904-.607 2.284-.136.159-.247.374-.247.478 0 .606-1.423 2.292-2.283 2.704-3.06 1.467-4.815 3.215-6.301 6.277-.899 1.852-.871 1.836-2.241 1.3-.531-.208-.884-.297-.783-.196.845.845 2.817.951 2.839.153.004-.12.166-.547.36-.95.194-.402.356-.799.359-.883.01-.25 1.247-2.038 1.803-2.608 1.971-2.017 3.499-2.696 6.247-2.778l2.103-.062 1.258.652c.692.359 1.371.652 1.508.652.138 0 .25.126.25.281 0 .234.157.257.96.137 2.114-.316 3.872-.12 5.287.591.716.359 1.418.629 1.559.599.708-.148 7.383-13.071 10.604-20.529 12.494-28.928 17.308-61.736 13.655-93.053-.392-3.365-.943-6.908-.966-6.216-.01.302.066 1.042.17 1.645.457 2.675 1.067 8.616 1.474 14.351.259 3.659.257 18.268-.004 21.938-.47 6.626-1.295 14.052-2.012 18.099l-.485 2.742c-.319 1.81-.722 3.913-.998 5.21-.564 2.649-.726 3.393-.979 4.479-.44 1.891-.786 3.274-1.214 4.845-.219.804-.467 1.75-.551 2.102a44.434 44.434 0 0 1-.538 1.92 63.223 63.223 0 0 0-.544 1.889c-.087.335-.239.829-.339 1.097-.1.268-.485 1.475-.856 2.681-.371 1.207-.79 2.453-.931 2.77-.142.317-.257.657-.257.756 0 .099-.123.416-.273.704-.15.288-.274.692-.274.898-.001.206-.076.453-.167.549-.092.095-.251.461-.355.813-.332 1.128-.78 2.28-.955 2.459a.757.757 0 0 0-.171.457c-.001.156-.124.519-.274.807-.15.288-.273.601-.273.696 0 .155-.285.845-1.019 2.464-.144.317-.261.66-.261.762 0 .103-.116.419-.258.704-.242.484-.389.814-1.145 2.572-.163.378-.367.811-.453.962a4.621 4.621 0 0 0-.262.548c-.058.151-.263.613-.456 1.026-.193.413-.351.845-.351.96 0 .114-.082.208-.183.208-.1 0-.183.089-.183.197 0 .109-.288.796-.64 1.528-.352.731-.639 1.424-.639 1.539 0 .116-.074.21-.163.21-.09 0-.218.215-.284.479-.066.263-.239.598-.385.744a1.013 1.013 0 0 0-.265.618c0 .194-.076.353-.169.353-.093 0-.264.287-.38.639-.116.352-.287.64-.38.64-.092 0-.168.159-.168.353a.982.982 0 0 1-.25.602c-.138.138-.314.452-.391.699-.077.247-.19.49-.252.541-.102.083-.465.724-1.289 2.276-.157.297-.389.652-.515.79a1.033 1.033 0 0 0-.228.602c0 .194-.077.353-.17.353-.093 0-.422.535-.731 1.188-.562 1.191-.867 1.405-1.334.938-.138-.137-.452-.313-.699-.39-.247-.077-.502-.224-.569-.327-.066-.104-.58-.226-1.142-.273-1.421-.117-1.439-.588-.023-.588 1.02 0 1.449-.302 1.243-.876-.144-.402.102-1.044.678-1.769.304-.383.553-.885.553-1.117 0-1.441.825-.465 1.112 1.316.197 1.223.533 1.857.533 1.006a.85.85 0 0 1 .275-.571c.15-.125.274-.373.274-.551 0-.178.123-.371.274-.429.151-.058.274-.275.274-.482 0-.207.124-.425.274-.482.177-.068.275-.351.275-.795 0-.39.119-.788.274-.917.151-.125.274-.341.274-.479 0-.139.123-.252.274-.252.172 0 .275-.173.275-.463 0-.254.123-.51.274-.568.156-.06.274-.333.274-.634 0-.348.094-.529.274-.529.162 0 .276-.169.277-.411.002-.226.074-.524.161-.662.088-.137.099-.466.026-.731-.101-.365-.029-.605.296-.998.236-.284.428-.671.428-.86 0-.189.206-.647.458-1.017.251-.371.457-.8.457-.954 0-.154.12-.413.268-.576.147-.163.324-.786.392-1.385.091-.799.409-1.661 1.194-3.235 1.015-2.034 1.377-3.431.888-3.431a.189.189 0 0 1-.183-.193c0-.107.074-.148.164-.093.209.13.424-.415.265-.672-.07-.114-.033-.141.088-.066.145.089.179-.028.111-.383-.062-.323.04-.779.277-1.236.206-.399.378-.604.382-.457.009.331.481-.522.82-1.483.154-.435.181-.718.07-.718-.317 0 .035-2.223.499-3.148.237-.474.432-.992.432-1.151 0-.159.133-.547.296-.862.163-.315.365-1.072.45-1.682.341-2.459.505-3.166.969-4.184.267-.585.441-1.135.387-1.222-.054-.087.037-.496.203-.909a3.304 3.304 0 0 0 .208-1.569c-.051-.45-.02-.863.068-.918.089-.054.161-.282.161-.506 0-.225.165-.731.366-1.125.201-.395.369-1.008.373-1.364.005-.356.127-.976.272-1.378.302-.84.375-2.915.086-2.468-.153.237-.178.233-.18-.031-.005-.492.204-.89.401-.768.118.073.137-.1.053-.481-.099-.453-.076-.561.099-.453.17.105.199.022.112-.325-.134-.534.041-1.634.241-1.511.073.046.133-.305.132-.78-.001-1.189.193-3.131.626-6.255.202-1.458.395-3.514.429-4.57.054-1.655.47-5.575.65-6.124.033-.101-.003-.641-.08-1.199-.08-.582-.041-2.225.091-3.84.21-2.57.223-3.462.098-6.57-.023-.553.03-1.952.117-3.108.099-1.317.088-2.751-.029-3.839-.103-.955-.205-3.382-.227-5.393-.039-3.565-.25-5.759-.554-5.759-.209 0-.19-2.08.02-2.294.106-.107.108-.876.007-2.002-.091-1.006-.168-2.013-.171-2.24-.004-.226-.092-.411-.196-.411-.126 0-.147.559-.064 1.67.105 1.391.084 1.656-.13 1.586-.152-.05-.274-.379-.299-.802-.088-1.501-.449-4.611-.689-5.927l-.466-2.56a57.4 57.4 0 0 1-.372-2.376 33.826 33.826 0 0 0-.34-2.063 39.07 39.07 0 0 1-.382-2.466c-.109-.875-.363-1.962-.564-2.416-.202-.454-.489-1.401-.638-2.105-.15-.704-.392-1.814-.539-2.468a61.779 61.779 0 0 1-.441-2.159c-.095-.534-.259-1.234-.365-1.554-.106-.321-.363-1.323-.572-2.227-.209-.905-.547-2.01-.75-2.457a22.654 22.654 0 0 1-.627-1.539c-.141-.4-.326-.816-.411-.926-.085-.109-.209-.486-.276-.837-.152-.798-1.481-5.011-2.058-6.522-.237-.621-.431-1.381-.431-1.691 0-.725.046-.737-1.769.458-1.653 1.089-1.852 1.127-1.564.302.134-.386.117-.642-.064-.969-.136-.245-.249-.588-.253-.762-.004-.174-.247-.832-.54-1.462a18.673 18.673 0 0 1-.821-2.12c-.157-.536-.452-1.185-.654-1.442-.203-.257-.368-.635-.368-.84 0-.204-.258-.954-.573-1.666-.978-2.209-1.072-2.441-1.072-2.638 0-.106-.111-.258-.245-.338-.135-.081-.292-.311-.348-.512-.169-.606-1.677-3.823-1.906-4.065-.341-.362-2.213-3.93-2.351-4.482-.166-.66-.298-.634-.715.14-.601 1.116-.769 1.124-1.02.049-.124-.531-.37-1.13-.547-1.331-.178-.201-.498-.716-.713-1.143-.214-.427-.474-.777-.577-.777-.326 0-1.085-.95-1.085-1.359 0-.484-.523-1.53-1.166-2.332-.718-.896-.705-.876-1.37-2.159-.339-.653-.812-1.421-1.051-1.705-.239-.284-.435-.586-.435-.672 0-.085-.214-.409-.476-.721l-.477-.566.492-1.039.491-1.038-.472-.344c-.259-.189-.472-.422-.472-.518 0-.095-.432-.794-.96-1.551a114.613 114.613 0 0 1-1.416-2.078c-1.071-1.64-2.389-3.491-2.723-3.825a6.277 6.277 0 0 1-.668-.83c-.346-.527-.757-.616-.846-.182-.041.199-.166.107-.406-.301-.19-.324-.257-.534-.147-.466.109.067.003-.229-.235-.659-.315-.566-.515-1.41-.73-3.066-.35-2.712-.802-4.379-1.192-4.399-.255-.013-1.255-1.113-2.701-2.969-.654-.84-1.586-1.914-2.885-3.327-.462-.503-.913-1.094-1.001-1.315-.175-.436-1.854-1.017-3.541-1.226-.853-.105-.992-.209-2.925-2.188-1.116-1.143-2.166-2.151-2.333-2.239-.167-.089-1.277-1.084-2.468-2.211-2.182-2.065-6.475-5.816-8.013-7a16.5 16.5 0 0 1-1.26-1.069c-.473-.472-2.482-1.011-4.498-1.207-1.392-.136-2.013-.274-2.013-.45 0-.191-2.387-2.113-3.048-2.454-.319-.165-.854-.554-1.189-.864-.334-.311-1.157-.845-1.828-1.187-.672-.341-1.274-.706-1.338-.811-.065-.104-.421-.357-.791-.56-.689-.379-1.597-.98-2.41-1.595-.251-.19-.992-.626-1.645-.967-.654-.342-1.271-.726-1.371-.852-.101-.127-.739-.587-1.418-1.022-.68-.436-1.173-.861-1.097-.945.076-.084.038-.095-.085-.024-.393.225-2.216-.952-1.925-1.243.059-.059-.01-.113-.152-.121-.59-.031-.969-.19-3.625-1.519-1.529-.765-2.9-1.392-3.048-1.392-.364 0-.554-.581-.686-2.102-.256-2.951-.63-3.93-1.501-3.93-.358 0-.634-.109-.697-.275a.473.473 0 0 0-.414-.274c-.413 0-2.121-.816-3.355-1.603-.55-.351-1.446-.792-1.991-.979-.545-.188-1.081-.413-1.193-.501-.111-.087-.655-.304-1.208-.48-.553-.177-1.252-.468-1.554-.647-.302-.18-.898-.42-1.325-.533-.428-.114-.777-.286-.777-.383 0-.096-.238-.176-.528-.176-.56 0-1.056-.215-1.943-.843a4.906 4.906 0 0 0-1.186-.58c-.352-.107-1.38-.414-2.285-.683-.905-.27-1.933-.602-2.285-.74a8.354 8.354 0 0 0-1.371-.372c-.681-.114-3.695-1.519-3.291-1.534.101-.003.06-.086-.091-.184a1.141 1.141 0 0 0-.549-.167c-.181.007-.149.064.092.167.569.245-.071.214-.764-.036-.334-.121-.607-.294-.607-.386 0-.091-.227-.113-.503-.049-.391.091-.442.073-.229-.083.209-.152.128-.17-.342-.077-.34.067-.574.052-.521-.035.054-.086-.204-.165-.571-.176-.926-.027-3.136-.611-3.136-.829 0-.098-.082-.127-.183-.065-.1.062-.183.031-.183-.069 0-.099-.185-.238-.411-.307a2.356 2.356 0 0 1-.644-.312c-.127-.102-.574-.217-.992-.255a9.89 9.89 0 0 1-1.608-.32c-.466-.138-1.624-.355-2.572-.481-.973-.129-2.124-.414-2.639-.653-.956-.444-2.625-.754-4.247-.788-.526-.012-1.163-.1-1.416-.196-.252-.095-.579-.128-.727-.071-.148.057-.89-.081-1.649-.306-1.325-.394-1.393-.397-1.739-.084-.546.494-.93-.854-1.195-4.202-.064-.805-.154-1.598-.2-1.764-.107-.386-.81-.488-4.754-.69-1.721-.088-3.572-.249-4.113-.358-.603-.121-4.645-.222-10.448-.26-6.954-.045-9.522-.119-9.681-.277-.165-.166 2.086-.216 9.706-.216 8.576 0 9.959.037 10.196.274.225.225.915.274 3.844.274 3.036 0 3.648.047 4.097.312.448.264.623.278 1.142.09.337-.122.853-.177 1.145-.123.293.054 1.232.176 2.086.27 4.126.455 9.396 1.301 13.786 2.213 1.015.211 2.215.456 2.668.544.452.088 1.151.243 1.554.344 2.219.559 3.988.932 4.154.877.48-.16-10.416-2.467-15.306-3.241-5.023-.794-7.874-1.157-11.518-1.466-5.599-.475-6.868-.559-11.098-.732-4.139-.169-8.335-.191-11.845-.061m-7.602.971c2.742.003 2.643.152-.232.352l-2.216.154-1.328 1.071c-1.902 1.534-1.983 1.6-2.249 1.853-.269.255-.815.309-.815.081 0-.23-3.316-.036-3.931.23-.375.163-1.541.241-3.692.249-1.847.007-3.295.092-3.508.206a2.06 2.06 0 0 1-.821.194c-.252 0-.501.07-.554.155-.053.086-.736.206-1.519.269-.783.062-1.67.194-1.972.292-.508.166-1.526.372-3.564.721-.453.077-1.111.231-1.463.341-1.206.379-2.286.635-3.055.726-.423.05-.865.206-.982.347-.252.304-1.752.35-1.849.057-.092-.275-.772-.249-2.066.08-2.013.512-2.281.594-4.297 1.314-.352.126-1.01.33-1.462.453-1.425.388-2.632.765-3.199.999-.397.164-.667.174-.975.035-.308-.138-.524-.13-.775.026-.191.12-.463.218-.604.218-.14 0-.491.123-.779.273-.288.15-.699.274-.913.274-.214.001-.491.125-.616.275-.129.156-.527.275-.917.275-.444 0-.727.097-.795.274-.058.151-.303.274-.545.274-.243 0-.543.124-.668.274-.125.151-.508.275-.851.275-.385 0-.663.104-.728.274-.058.151-.265.274-.459.274s-.676.165-1.07.366c-.394.201-.833.365-.976.365-.142 0-.361.124-.487.275-.125.15-.372.274-.548.274-.177 0-.423.123-.549.274-.125.151-.495.274-.822.274-.328 0-.698.124-.823.274-.125.151-.414.275-.643.275-.228 0-.462.123-.52.274-.058.151-.27.274-.472.274-.202 0-.636.164-.966.365-.742.453-.807.453-.924.007-.064-.245.017-.394.253-.469.191-.061.347-.18.347-.265 0-.158 1.166-.724 3.613-1.754.329-.138.863-.373 1.189-.523a6.936 6.936 0 0 1 1.094-.391c.276-.065.503-.191.503-.28 0-.09.144-.166.32-.17.175-.003.649-.165 1.051-.359.402-.194.854-.359 1.005-.365.151-.007.434-.133.629-.281.195-.147.525-.271.732-.274.207-.003.536-.127.731-.274.195-.148.524-.271.731-.274.207-.004.536-.127.731-.275.196-.147.527-.268.737-.268.209 0 .543-.112.742-.248.198-.137.669-.305 1.046-.374s.685-.204.685-.3.229-.175.508-.175.67-.113.869-.251c.198-.138.71-.31 1.137-.382.427-.072.777-.196.777-.276 0-.081.368-.201.818-.269.451-.067.862-.193.915-.279.054-.086.446-.214.873-.284.427-.071.867-.202.978-.291.112-.09.564-.24 1.006-.335 1.164-.25 2.356-.571 3.088-.832.787-.281 1.99-.6 3.2-.849.502-.104.996-.254 1.096-.333.101-.079.655-.201 1.232-.271.576-.07 1.089-.194 1.14-.275.05-.082.558-.207 1.129-.279.571-.071 1.168-.202 1.328-.29.16-.089.784-.243 1.387-.342 2.044-.337 3.289-.581 3.865-.759.316-.097 1.098-.248 1.737-.335a52.69 52.69 0 0 0 2.168-.35c2.95-.56 4.226-.762 4.818-.762.361 0 1.255-.12 1.987-.266.731-.147 2.235-.359 3.341-.472l3.382-.347c.754-.077 1.536-.113 1.737-.079.201.034 1.346.063 2.544.065m57.694 4.657c0 .046.349.172.777.279 1.156.289 2.373.626 4.663 1.291 1.131.329 2.101.554 2.155.5.1-.099-.961-.42-5.036-1.524-2.388-.647-2.559-.684-2.559-.546m7.861 2.19c0 .116 3.131 1.054 3.221.964.07-.07-2.817-1.044-3.095-1.044-.07 0-.126.036-.126.08m3.488 1.085c.175.158 2.955 1.045 3.032.967.046-.046-.559-.298-1.345-.56-1.329-.442-1.871-.573-1.687-.407m4.738 1.668c.855.339 1.678.617 1.828.617.151 0-.425-.278-1.279-.617-.855-.339-1.678-.616-1.828-.616-.151 0 .425.277 1.279.616m2.236.729c.133.146 4.476 1.857 5.168 2.036.304.078.317.062.077-.093-.242-.157-1.157-.514-5.013-1.954-.201-.075-.305-.07-.232.011m5.991 2.379c.251.144.539.261.64.261.1 0-.023-.117-.274-.261-.252-.144-.54-.261-.64-.261-.101 0 .023.117.274.261m1.28.548c.251.144.539.262.64.262.1 0-.023-.118-.275-.262-.251-.143-.539-.261-.639-.261-.101 0 .022.118.274.261m1.919.815c1.198.556 2.472.969 1.463.474-1.012-.496-2.264-1.014-2.412-.999-.081.009.346.245.949.525m3.382 1.471c.352.192.722.35.823.35.101 0-.105-.158-.457-.35-.352-.193-.722-.351-.823-.351-.1 0 .105.158.457.351m1.11.429c.178.195 3.136 1.602 3.21 1.528.039-.039-.606-.392-1.432-.785-1.702-.81-1.925-.903-1.778-.743m7.117 3.494c0 .05.329.259.731.464.403.205.732.332.732.282 0-.05-.329-.259-.732-.465-.402-.205-.731-.332-.731-.281m2.274 1.293c.196.147.438.268.538.268.101 0 .023-.121-.172-.268-.195-.148-.437-.269-.538-.269-.1 0-.023.121.172.269m2.524 1.368c.478.3.93.544 1.006.542.076-.002-.253-.249-.73-.548-.478-.3-.93-.544-1.006-.542-.075.002.253.249.73.548m2.515 1.337c0 .044.596.433 1.325.864.729.43 1.511.901 1.737 1.047.226.145.411.219.411.164 0-.055-.72-.53-1.599-1.055-1.929-1.151-1.874-1.122-1.874-1.02m5.564 3.394c.056.091.395.338.753.55.358.211.606.31.55.219-.056-.09-.395-.337-.753-.549-.359-.211-.606-.31-.55-.22m2.845 1.731c0 .05.247.267.549.482.301.215.548.349.548.299 0-.05-.247-.267-.548-.482-.302-.215-.549-.349-.549-.299m5.119 3.455c0 .05.473.445 1.051.877l1.646 1.232c.326.245.594.405.594.355 0-.05-.473-.445-1.051-.878-.579-.432-1.319-.986-1.646-1.232-.327-.245-.594-.404-.594-.354m3.565 2.639c.1.095.553.442 1.005.771l.823.597-.64-.578c-.56-.506-1.665-1.24-1.188-.79m3.388 2.569c.003.075.229.295.502.488l.497.351-.443-.488c-.465-.513-.566-.576-.556-.351m1.091.838c0 .05.329.352.731.67.402.319.731.538.731.488 0-.05-.329-.352-.731-.671-.402-.318-.731-.538-.731-.487m1.887 1.537c.367.418 2.5 2.129 2.5 2.005 0-.042-.637-.597-1.416-1.231-.78-.635-1.267-.983-1.084-.774m5.426 4.492c0 .032.267.299.594.594l.594.537-.537-.594c-.501-.554-.651-.678-.651-.537m2.559 2.411c.754.684 4.009 3.884 7.234 7.112 3.225 3.227 5.404 5.374 4.842 4.771-3.938-4.232-12.357-12.523-13.173-12.975-.151-.083.343.408 1.097 1.092m-243.794-.075c-.043.069-.29.179-.548.244-.259.065-.817.465-1.242.89-.425.424-1.016.962-1.314 1.196-1.247.975-9.799 9.615-11.877 12-.604.692-1.406 1.56-1.783 1.928-.377.369-.685.766-.685.882 0 .116-.082.211-.183.211-.295 0-.211-.338.183-.731.201-.201.369-.428.373-.503.004-.076.251-.339.549-.586.297-.246.54-.555.54-.685 0-.131.124-.237.275-.237.15 0 .274-.124.274-.275 0-.15.123-.274.274-.274.151 0 .275-.103.276-.228.001-.126.412-.667.914-1.203s.912-1.006.912-1.046c0-.04.371-.443.823-.895.452-.453.823-.907.823-1.011 0-.103.123-.187.274-.187a.275.275 0 0 0 .274-.274c0-.151.124-.275.274-.275a.275.275 0 0 0 .275-.274c0-.151.123-.274.274-.274a.274.274 0 0 0 .274-.274c0-.151.123-.274.274-.274.151 0 .274-.08.274-.177 0-.097.579-.755 1.286-1.463.708-.707 1.366-1.286 1.463-1.286.097 0 .177-.123.177-.274 0-.151.123-.274.274-.274a.274.274 0 0 0 .274-.274c0-.151.123-.274.274-.274a.275.275 0 0 0 .274-.275c0-.15.124-.274.275-.274.15 0 .274-.123.274-.274 0-.151.089-.274.197-.274.109 0 .869-.667 1.691-1.483.822-.815 1.657-1.544 1.857-1.62.368-.138 1.05.145.907.377M336.38 78.668c0 .031.268.299.594.594l.595.537-.537-.594c-.501-.554-.652-.678-.652-.537m2.467 2.868c.867 1.013.879 1.024.68.64-.103-.202-.422-.571-.708-.823l-.519-.456.547.639m1.834 2.18c.468.596 1.022 1.233 1.231 1.417.209.183-.139-.304-.774-1.084-1.352-1.66-1.698-1.912-.457-.333m-279.986-.649c0 .038-.124.172-.275.297-.224.186-.274.174-.274-.069 0-.163.124-.297.274-.297.151 0 .275.031.275.069m-1.322 1.577c-.126.201-.291.365-.368.365-.076 0-.138.124-.138.274a.28.28 0 0 1-.281.275c-.224 0-.241-.074-.085-.366.108-.201.275-.366.372-.366.097 0 .176-.123.176-.274 0-.151.124-.274.276-.274.23 0 .238.061.048.366m283.406 1.645c.318.402.62.731.67.731.051 0-.169-.329-.487-.731-.319-.402-.621-.731-.671-.731-.05 0 .169.329.488.731m2.742 3.529c0 .043.256.356.569.697l.569.618-.395-.588c-.363-.541-.743-.913-.743-.727m1.919 2.595c.291.402.795 1.086 1.121 1.52.327.433.628.886.671 1.005.043.12.124.175.181.124.098-.089-1.856-2.815-2.292-3.197-.115-.101.029.146.319.548m3.218 4.56c.211.358.458.697.549.753.091.056-.008-.191-.22-.549-.211-.359-.458-.697-.549-.753-.09-.056.009.191.22.549m1.81 2.661c.215.302.432.549.482.549.05 0-.084-.247-.299-.549-.215-.301-.432-.548-.482-.548-.05 0 .084.247.299.548m1.663 2.641c.212.358.459.697.55.753.09.056-.009-.191-.22-.55-.212-.358-.459-.697-.549-.753-.091-.056.008.192.219.55m-56.786 1.994c-.078.188-.06.391.041.457.567.37.656 8.672.136 12.641-.645 4.92-2.135 11.441-3.655 15.997-1.5 4.494-2.779 7.717-4.039 10.174-.137.267-.248.594-.248.727 0 .308-3.852 8.069-4.843 9.757-.414.704-.81 1.403-.882 1.554a9.713 9.713 0 0 1-.487.823 13.74 13.74 0 0 0-.635 1.096c-.337.67-.666 1.183-.969 1.514-.126.137-.228.329-.228.427 0 .097-.086.277-.191.398-.105.121-.885 1.29-1.733 2.597-1.759 2.711-1.889 2.904-2.327 3.478-.176.231-.32.474-.32.541 0 .066-.103.228-.228.36a5.918 5.918 0 0 0-.503.645c-.151.223-.686.966-1.188 1.649a82.696 82.696 0 0 0-1.189 1.649c-.15.224-.356.5-.457.613-.1.113-.41.542-.689.953-.279.41-.649.904-.823 1.097-.174.193-.558.679-.855 1.081-.296.403-.586.773-.644.823-.085.074-1.038 1.276-2.289 2.888a10.44 10.44 0 0 1-.469.548c-.156.172-.732.84-1.279 1.486a62.147 62.147 0 0 1-1.453 1.661 80.94 80.94 0 0 0-1.446 1.63 44.653 44.653 0 0 1-1.783 1.934c-.436.436-.792.882-.792.99 0 .109-.124.197-.275.197a.275.275 0 0 0-.274.275.274.274 0 0 1-.274.274.274.274 0 0 0-.274.274.275.275 0 0 1-.275.274c-.15 0-.274.115-.274.255s-.123.302-.274.36a.45.45 0 0 0-.274.385c0 .154-.083.28-.183.28-.101 0-.183-.164-.183-.366 0-.201-.082-.365-.183-.365-.353 0-.177-.671.32-1.225.277-.308.914-1.011 1.417-1.561.503-.551 1.408-1.561 2.011-2.244.603-.683 1.448-1.63 1.876-2.106 1.245-1.381 1.577-1.838 1.244-1.71-.157.06-.286.169-.286.241 0 .107-3 3.567-3.876 4.47-.131.135-.852.935-1.603 1.779-1.736 1.951-4.849 5.153-8.233 8.469-2.444 2.395-3.253 3.159-5.738 5.415-.491.447-.985.896-1.096 1-.616.568-3.315 2.817-4.451 3.709-.868.681-.846.621-1.701 4.695a931.358 931.358 0 0 1-.832 3.931c-.502 2.319-.499 2.296-.286 2.097.111-.103.266-.631.344-1.173.147-1.022.598-1.525.598-.667 0 .259-.38 2.179-.844 4.266-.961 4.317-1.275 5.784-1.518 7.085-.094.503-.3 1.22-.458 1.594-.159.374-.288.971-.288 1.326 0 .355-.088.645-.196.645-.215 0-.076-1.825.187-2.468.083-.201.245-.9.361-1.554.47-2.66.659-3.574.777-3.754.068-.104.171-.721.229-1.371.134-1.496.028-1.267-.423.921-.197.955-.646 3.094-.998 4.753l-.908 4.296c-.572 2.711-.542 2.658-2.457 4.427-.98.905-2.068 1.884-2.417 2.174-.35.291-.767.652-.928.803-.294.276-.455.42-3.276 2.925-.85.754-1.677 1.495-1.84 1.645-.549.511-1.725 1.55-2.999 2.651a97.042 97.042 0 0 0-1.758 1.554c-.799.745-3.26 2.949-4.916 4.403-.85.746-1.794 1.582-2.098 1.859-.354.322-.758.502-1.122.502-.784 0-.848.127-.455.897.842 1.651 1.49 1.489 4.396-1.097 1.257-1.118 2.859-2.538 3.561-3.156.702-.617 1.898-1.698 2.658-2.402a234.98 234.98 0 0 1 2.923-2.651c.848-.754 2-1.783 2.559-2.285.56-.503 1.669-1.49 2.466-2.194l3.193-2.82c2.108-1.862 2.695-2.465 2.812-2.89.2-.721.882-3.914 1.222-5.716.199-1.056.529-2.619.732-3.474.203-.854.482-2.088.619-2.742.137-.653.545-2.545.907-4.205.361-1.659.952-4.535 1.312-6.391.778-4.006.554-3.538 2.465-5.145 3.802-3.198 9.05-8.079 13.522-12.578 11.144-11.213 19.07-21.03 26.51-32.833 3.023-4.796 7.475-13.229 9.126-17.288a98.65 98.65 0 0 1 1.12-2.638c1.69-3.757 4.272-12.089 5.099-16.454 1.082-5.702 1.414-8.447 1.583-13.071.143-3.94-.419-7.956-.938-6.7m58.819 1.215.77 1.326c.278.477.543.868.589.868.124 0-.884-1.759-1.283-2.239l-.342-.412.266.457m-58.834 2.56c0 1.458.029 2.054.064 1.325.034-.729.034-1.922 0-2.651-.035-.729-.064-.132-.064 1.326m61.54 2.057c-.002.076.242.528.542 1.006.299.477.546.805.548.73.002-.076-.242-.528-.542-1.006-.299-.477-.546-.806-.548-.73m-61.738 3.519c.001.603.035.828.075.499.041-.328.04-.822-.001-1.097-.042-.274-.075-.006-.074.598m64.477 1.554c.205.402.414.731.464.731.051 0-.076-.329-.281-.731-.206-.403-.415-.732-.465-.732-.05 0 .077.329.282.732m-64.793.563c-.069.518-.088.979-.043 1.024.045.045.14-.34.211-.856.07-.516.09-.976.043-1.023-.048-.048-.142.338-.211.855m-.541 3.664c-.152.762-.005.91.16.16.07-.316.088-.612.042-.659-.047-.047-.138.178-.202.499m67.728.434c0 .101.239.636.531 1.189.292.553.531.923.531.822 0-.1-.239-.635-.531-1.188-.292-.553-.531-.923-.531-.823m-68.185 2.103a7.9 7.9 0 0 1-.129.731c-.088.395-.074.413.106.132.114-.179.172-.508.129-.731-.044-.224-.091-.283-.106-.132m69.264.296c0 .1.121.342.269.537.147.195.268.273.268.172 0-.1-.121-.342-.268-.537-.148-.196-.269-.273-.269-.172m.564 1.075c0 .101.158.471.35.823.193.352.351.557.351.457 0-.101-.158-.471-.351-.823-.192-.352-.35-.558-.35-.457m-70.378 1.128a2.959 2.959 0 0 1-.14.548c-.091.26-.067.288.109.126.125-.115.188-.362.14-.549-.048-.186-.097-.243-.109-.125m72.025 2.437c-.009.05.178.566.415 1.147.417 1.025.674 1.465.656 1.123-.011-.2-1.05-2.402-1.071-2.27m1.093 2.601c-.021.217.574 1.625.654 1.546.039-.039-.089-.434-.285-.876-.196-.442-.362-.743-.369-.67m-74.926 1.467c-.311.86-.268 1.093.062.333.149-.344.247-.7.217-.79-.03-.09-.156.116-.279.457m75.657.411c0 .1.118.388.261.64.144.251.262.374.262.274 0-.101-.118-.389-.262-.64-.143-.251-.261-.375-.261-.274m-76.103.919a18.24 18.24 0 0 1-.226.726c-.068.201.01.135.174-.148.163-.282.265-.609.226-.726-.039-.118-.117-.051-.174.148m76.652.452c0 .263.515 1.31.529 1.072.003-.064-.114-.393-.261-.731-.147-.338-.267-.492-.268-.341m-77.2 1.193c-.057.198-.158.525-.227.727-.068.201.011.134.174-.149.164-.282.266-.609.227-.726-.039-.117-.118-.051-.174.148m77.84.452c.067.252.198.581.292.732.117.19.132.134.047-.183a3.353 3.353 0 0 0-.292-.732c-.118-.19-.132-.134-.047.183m-78.486 1.306c-.123.324-.186.627-.14.673.109.109.487-.889.417-1.1-.03-.09-.155.102-.277.427m78.943-.026c0 .263.515 1.31.529 1.072.003-.064-.114-.393-.261-.731-.147-.338-.267-.492-.268-.341m-79.493 1.508c-.196.537-.191.56.052.24.232-.308.37-.834.217-.834-.028 0-.149.267-.269.594m80.597 1.417c0 .151.155.644.345 1.097.19.452.345.699.345.548 0-.15-.155-.644-.345-1.097-.19-.452-.345-.699-.345-.548m.711 2.107c0 .252.991 2.996 1.058 2.929.088-.088-.866-3.025-.982-3.025-.042 0-.076.043-.076.096m-83.806 2.411c-.169.381-.391.844-.494 1.03-.102.186-.15.374-.106.418.044.044.218-.231.387-.612s.391-.844.494-1.03c.102-.186.15-.374.106-.418-.044-.044-.218.232-.387.612m84.91.9c-.004.114.113.484.26.822.147.339.27.522.274.408.004-.114-.113-.484-.26-.823-.147-.338-.27-.521-.274-.407m-85.898 1.179c-.133.212-.206.421-.163.464.127.126.536-.45.467-.658-.035-.105-.172-.017-.304.194m86.458.393c-.026.181.88 3.294.991 3.404.194.194.032-.512-.457-1.984-.283-.855-.523-1.494-.534-1.42m-87.007.704c-.132.212-.205.421-.162.464.127.126.536-.45.467-.658-.035-.105-.172-.018-.305.194m-56.339.71c-6.773.647-12.024 5.332-13.836 12.346-.364 1.41-.474 5.913-.161 6.581.095.201.27.736.391 1.188.196.74.219.536.228-2.011.013-3.82.433-5.462 2.119-8.292 1.466-2.46 4.633-5.377 6.871-6.329.252-.107.622-.272.823-.368 6.191-2.942 15.083-.619 18.734 4.894.517.781.553.803.553.34 0-.473-.369-1.21-.866-1.729-.127-.133-.231-.312-.231-.398 0-.217-2.315-2.551-3.199-3.225-2.955-2.254-7.293-3.391-11.426-2.997m55.791.387c-.132.212-.206.421-.163.463.127.127.536-.449.467-.657-.035-.105-.172-.018-.304.194m-.555 1.107c-.129.207-.194.415-.145.465.049.049.185-.09.302-.308.117-.218.182-.427.145-.464-.037-.038-.173.101-.302.307m-.63 1.242c-.445.754-.377.949.081.233.212-.331.351-.637.308-.68-.043-.043-.218.158-.389.447m89.83-.315c-.007.173.1.667.238 1.097.137.431.427 1.442.644 2.246.217.805.466 1.71.554 2.011.088.302.307 1.201.488 1.998.18.797.357 1.36.394 1.25.076-.227-1.178-5.267-1.854-7.453-.248-.804-.457-1.321-.464-1.149m-91.197 2.835c-.33.558-.566 1.048-.525 1.09.041.041.337-.39.658-.958.757-1.342.648-1.451-.133-.132m-.954 1.605c-.129.156-.194.324-.144.375.051.05.198-.036.327-.192s.194-.324.143-.375c-.05-.05-.197.036-.326.192m-2.24 3.846c-.456.61-.397.781.067.191.213-.27.357-.52.32-.555-.037-.035-.211.129-.387.364m96.771.907c-.006.201.107.736.249 1.189.143.452.264.658.269.457.005-.201-.107-.736-.25-1.189-.142-.452-.263-.658-.268-.457m-98.245 1.41c-.283.402-.474.771-.424.82.049.05.307-.255.573-.676.625-.989.519-1.091-.149-.144m98.798.967c-.007.201.101.777.241 1.28.14.502.26.749.268.548.007-.201-.102-.777-.242-1.28-.14-.502-.26-.749-.267-.548m-99.776.594c-.173.277-.401.621-.507.766-.141.192-.137.23.016.138.222-.133 1.023-1.407.885-1.407-.045 0-.222.227-.394.503m-1.089 1.63c-.179.285-.543.806-.809 1.158-.698.923-1.265 1.893-.788 1.348.187-.213.463-.573.614-.799.151-.226.356-.506.457-.622.484-.559 1.028-1.428.945-1.511-.051-.051-.24.14-.419.426m101.427.427c.002.578.467 2.413.485 1.919.008-.201-.099-.818-.237-1.371-.138-.553-.25-.8-.248-.548m.586 2.925c.099 1.172.91 5.741.981 5.528.067-.202-.573-4.201-.885-5.528l-.15-.64.054.64m-104.808.64c-.418.553-.686 1.005-.596 1.005.091 0 .398-.35.684-.777.285-.427.594-.88.687-1.005.092-.126.126-.229.076-.229-.051 0-.434.453-.851 1.006m-1.549 2.135a28.363 28.363 0 0 1-1.019 1.43l-1.543 1.919c-.647.804-1.137 1.503-1.087 1.552.05.05.159-.032.243-.182.085-.15.305-.449.489-.664 1.393-1.619 3.772-4.827 3.661-4.938-.049-.049-.384.349-.744.883m-4.526 5.863c-.332.427-.689.837-.792.911-.124.089-.118.135.017.137.113.002.401-.284.64-.636.239-.351.488-.639.553-.639.064-.001.164-.125.222-.276.175-.455-.004-.315-.64.503m-2.138 2.598c-.616.75-.998 1.317-.849 1.26.149-.057.271-.159.271-.226s.409-.572.909-1.123c.804-.885 1.065-1.275.853-1.275-.036 0-.569.614-1.184 1.364m-241.72 16.551c-.004 2.087.01 3.867.03 3.954.061.262-.388 1.226-.513 1.101-.063-.063-.106-1.082-.094-2.265.011-1.182.024-3.25.028-4.594.008-2.15.042-2.417.282-2.218.228.189.273.869.267 4.022m117.741-3.75c0 1.077-.335.948 17.916 6.891 4.132 1.345 6.945 2.298 7.716 2.615.234.096.342.013.428-.332.223-.886-.029-1.162-1.433-1.575-.725-.214-1.606-.504-1.958-.646-.352-.142-1.586-.559-2.742-.927a82.907 82.907 0 0 1-2.468-.812c-.201-.08-2.093-.699-4.205-1.377a574.73 574.73 0 0 1-5.301-1.725c-7.294-2.458-7.953-2.633-7.953-2.112M24.802 202.681c-.195.195-.141 1.889.061 1.889.1 0 .183-.452.183-1.005 0-1.017-.024-1.104-.244-.884m216.589 1.432c-.165.252-.393.46-.507.463-.432.012-1.257.935-1.282 1.434-.054 1.072-.642 1.523-.653.501-.009-.871.544-1.758 1.097-1.758.095 0 .175-.103.177-.228.003-.126.27-.362.594-.524.837-.418.912-.404.574.112m-2.806 5.273c-.234.234-.252-.181-.055-1.251l.135-.731.057.894c.031.492-.03.981-.137 1.088m-204.49.12-.366.158.366.01c.201.005.489-.07.64-.168.363-.234-.093-.234-.64 0m2.834 0c.251.081.621.147.822.147.29 0 .271-.031-.091-.147a3.328 3.328 0 0 0-.823-.146c-.289 0-.27.03.092.146m-4.936.655c-.255.142-.336.253-.183.251.151-.002.434-.124.629-.272.44-.332.168-.32-.446.021m-2.548.557c-.022.746.398.827 1.277.244.913-.606.875-.741-.05-.177-.757.462-.848.458-1.05-.045-.163-.403-.166-.404-.177-.022m208.607 1.558c-.171.595-.177.585-.193-.332-.009-.52.045-1.096.121-1.28.218-.533.281.885.072 1.612m-1.552 3.943c-.062.38-.167.93-.234 1.221-.082.358-.058.491.075.409.108-.067.253-.577.323-1.133.143-1.146.008-1.554-.164-.497m-56.092 9.695a3074.45 3074.45 0 0 0-5.014 5.12c-3.534 3.617-2.808 3.713-7.481-.993-2.691-2.709-3.81-3.724-3.952-3.582-.244.244.225.769 4.895 5.478 4.609 4.648 3.481 4.822 9.728-1.498 2.733-2.765 5.037-5.028 5.119-5.028.082 0 .636.16 1.23.355 3.534 1.161 8.318 1.664 12.464 1.311 1.435-.122 2.69-.171 2.789-.11.284.176.21-.749-.115-1.431-.295-.617-.297-.618-1.143-.441-3.533.74-12.094.028-15.159-1.26-.933-.392-.938-.389-3.361 2.079m-135.485-1.102c.324.04.9.041 1.28.001.379-.039.113-.072-.591-.073-.703-.001-1.014.032-.689.072m2.7.234c.201.086.531.154.732.151.294-.004.276-.034-.092-.151-.625-.2-1.105-.2-.64 0m186.674 5.097c-.092.803-.723 3.057-.973 3.475-.023.04-.182-.042-.353-.182-.277-.228-.3-.213-.211.133.076.293.028.37-.196.315-.164-.04-.593.196-.954.526s-.999.902-1.417 1.271c-.823.728-.908.882-.486.882.151 0 .275.082.275.183 0 .1-.124.183-.275.183a.275.275 0 0 0-.274.274c0 .151-.144.268-.32.26-.191-.009-.228-.052-.091-.107.321-.13.285-.61-.046-.61-.151 0-.274.085-.274.188 0 .104-.144.242-.32.307-.176.065-.487.288-.69.497-.204.208-.821.762-1.372 1.231a58.578 58.578 0 0 0-1.816 1.621c-.448.423-.844.683-.879.576-.074-.22.596-.947.872-.947.101 0 .183-.123.183-.274 0-.151.083-.274.184-.274.102 0 .71-.514 1.353-1.143.643-.628 1.492-1.406 1.888-1.728a32.688 32.688 0 0 0 1.453-1.28c.404-.382 1.367-1.27 2.141-1.973 1.427-1.299 2.119-2.394 2.124-3.36.004-.735.202-1.311.407-1.184.111.069.138.517.067 1.14m140.017 4.958c-.068.216-.083.434-.033.484.05.05.148-.085.216-.302.069-.216.084-.434.034-.484-.051-.051-.148.085-.217.302M64.56 242.23c0 .151.07.439.157.64.099.231.157.264.157.092 0-.151-.071-.439-.157-.64-.099-.231-.157-.265-.157-.092m157.07.841c-.384.342-.724.543-.756.447-.076-.228 1.107-1.283 1.303-1.161.083.051-.163.373-.547.714m-1.52 1.353a.186.186 0 0 1-.189.183c-.285 0-.529.787-.323 1.043.189.235.024.504-.746 1.209a68.3 68.3 0 0 0-.914.857c-.264.253-.767.694-1.119.982-.352.287-1.092.931-1.645 1.432l-1.646 1.487c-2.211 1.995-2.77 2.258-3.379 1.586-.363-.402-.132-.918.413-.918.153 0 .539-.267.858-.594a34.506 34.506 0 0 1 1.632-1.508 72.548 72.548 0 0 0 1.918-1.737 64.403 64.403 0 0 1 1.933-1.737 33.389 33.389 0 0 0 1.652-1.508c.323-.327.681-.594.796-.594.116 0 .21-.082.21-.183 0-.1.124-.183.274-.183.151 0 .275.083.275.183M80.4 256.625c.633.036 1.62.036 2.194 0 .574-.036.057-.066-1.15-.065-1.206 0-1.676.03-1.044.065m5.98.413c.201.087.489.158.64.158.173 0 .139-.059-.091-.158-.201-.086-.489-.157-.64-.157-.173 0-.139.058.091.157m18.752 22.065c.041.474.327.877.34.478.007-.22-.07-.451-.17-.513-.101-.063-.177-.047-.17.035m10.09 9.694c.278.042.689.041.914-.003.225-.043-.003-.078-.505-.076-.503.001-.687.037-.409.079m235.738 2.376a4.032 4.032 0 0 1-1.006 0c-.276-.042-.05-.076.503-.076s.779.034.503.076m-23.812 5.171-.366.157.366-.006c.201-.003.571-.071.823-.151l.457-.147-.457-.005a2.404 2.404 0 0 0-.823.152m3.565.098c1.543.318 1.952.311.914-.016-.452-.143-1.111-.253-1.462-.244-.493.011-.366.071.548.26m-11.035 8.062c-.065.472-.083.893-.04.936.043.043.136-.304.206-.77.07-.466.087-.887.039-.936-.048-.048-.141.298-.205.77m.031 1.848c-.055.668-.077.687-.943.81-1.229.174-1.206.256.073.248l1.087-.006.001-.868c0-1.035-.137-1.151-.218-.184m-184.371 2.606c0 .553.034.779.076.503a4.032 4.032 0 0 0 0-1.006c-.042-.276-.076-.05-.076.503m184.647-.287c.267.577.536.612.457.06-.032-.225-.197-.436-.366-.468-.268-.051-.28.003-.091.408m-24.51.054c.377.04.994.04 1.371 0 .377-.039.069-.071-.685-.071s-1.063.032-.686.071m15.177-.001c.277.042.689.04.914-.003.224-.043-.003-.078-.506-.076-.502.001-.686.036-.408.079m5.058.257c-.242.451-.238.455 1.356 1.263 1.535.778 2.407.749 1.033-.035-.553-.315-1.047-.635-1.097-.711-.05-.076-.297-.166-.549-.202-.302-.042-.448-.173-.431-.384.033-.424-.059-.403-.312.069m-2.456-.023c.201.086.53.157.731.157h.366l-.366-.157a2.231 2.231 0 0 0-.731-.157h-.366l.366.157m6.627 1.127c-.56.628-.591.701-.302.701.342 0 1.262-.742 1.262-1.018 0-.426-.422-.287-.96.317m-184.859 2.451c-.067.268-.087.522-.044.565.043.043.134-.14.201-.408.067-.268.087-.523.044-.566-.043-.043-.134.141-.201.409m151.895.124-.537.594.594-.537c.554-.5.679-.651.537-.651-.031 0-.298.267-.594.594m-14.065 5.987c-.493.126-.502.14-.091.143a3.5 3.5 0 0 0 .914-.143c.614-.197-.05-.197-.823 0m5.302-.008c.351.159 1.33.262 1.173.124-.042-.037-.406-.117-.808-.179-.509-.077-.62-.061-.365.055m-145.796 3.482c.215.301.432.548.482.548.051 0-.084-.247-.299-.548-.215-.302-.432-.549-.482-.549-.05 0 .085.247.299.549m16.956 5.434c.327.04.862.04 1.189 0 .327-.041.059-.074-.594-.074-.654 0-.921.033-.595.074m2.651-.002c.277.042.729.042 1.006 0 .276-.042.05-.076-.503-.076s-.779.034-.503.076m2.88.227c.15.102.432.186.624.188.468.004.322-.101-.35-.251-.401-.09-.475-.073-.274.063m104.704 1.335-.322.592.368-.431c.314-.367.481-.76.323-.756-.025.001-.191.268-.369.595m-23.004 1.835c.085.086.432.127.772.092.602-.062.598-.066-.155-.155-.425-.05-.703-.022-.617.063m6.691.311c.201.087.489.158.64.158.173 0 .139-.059-.092-.158-.201-.086-.489-.157-.64-.157-.172 0-.139.058.092.157m-106.7.778c.092.092.362.137.6.099.366-.057.34-.083-.167-.167-.364-.06-.534-.033-.433.068m116.012 1.828-.537.594.594-.537c.554-.501.678-.652.537-.652-.031 0-.299.268-.594.595m-1.749.731c.268.341.849.429 1.019.154.056-.091-.063-.123-.265-.07-.202.053-.51-.016-.686-.154-.288-.227-.295-.22-.068.07m-64.556 1.546c.226.043.597.043.823 0 .226-.044.041-.08-.412-.08-.452 0-.637.036-.411.08m4.938 0c.228.044.557.042.732-.004.174-.046-.012-.081-.414-.079-.402.002-.545.039-.318.083m30.346 44.309c-.331.193-.45.9-.153.9.448 0 .747-.264.747-.66 0-.478-.11-.522-.594-.24"
        />
      </g>
    </svg>
  );
}

function DfxAssetIconARB({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path
            d="M226 760v980c0 63 33 120 88 152l849 490c54 31 121 31 175 0l849-490c54-31 88-89 88-152V760c0-63-33-120-88-152l-849-490c-54-31-121-31-175 0L314 608c-54 31-87 89-87 152h-1z"
            fill={forceColor != null ? '#fff' : '#213147'}
          />
          <path
            d="m1435 1440-121 332c-3 9-3 19 0 29l208 571 241-139-289-793c-7-18-32-18-39 0zM1678 882c-7-18-32-18-39 0l-121 332c-3 9-3 19 0 29l341 935 241-139-422-1156v-1z"
            fill={forceColor ?? '#12aaff'}
          />
          <path
            d="M1250 155c6 0 12 2 17 5l918 530c11 6 17 18 17 30v1060c0 12-7 24-17 30l-918 530c-5 3-11 5-17 5s-12-2-17-5l-918-530c-11-6-17-18-17-30V719c0-12 7-24 17-30l918-530c5-3 11-5 17-5v1zm0-155c-33 0-65 8-95 25L237 555c-59 34-95 96-95 164v1060c0 68 36 130 95 164l918 530c29 17 62 25 95 25s65-8 95-25l918-530c59-34 95-96 95-164V719c0-68-36-130-95-164L1344 25c-29-17-62-25-95-25h1z"
            fill={forceColor ?? '#9dcced'}
          />
          <path d="m642 2179 85-232 170 141-159 146z" fill={forceColor ?? '#213147'} />
          <path
            d="M1172 644H939c-17 0-33 11-39 27L401 2039l241 139 550-1507c5-14-5-28-19-28l-1 1zM1580 644h-233c-17 0-33 11-39 27L738 2233l241 139 620-1701c5-14-5-28-19-28v1z"
            fill={forceColor ?? '#fff'}
          />
        </g>
      </g>
    </svg>
  );
}

function DfxAssetIconSUSHI({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="sushi_a" d="M0 0h24v24H0z" />
      </defs>
      <clipPath id="sushi_b">
        <use xlinkHref="#sushi_a" style={{ overflow: 'visible' }} />
      </clipPath>
      <g style={{ clipPath: 'url(#sushi_b)' }}>
        <linearGradient
          id="sushi_c"
          x1={20.644}
          x2={24.333}
          y1={1011.506}
          y2={998.84}
          gradientTransform="matrix(1 0 0 -1 -12 1012)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} style={{ stopColor: '#03b8ff' }} />
          <stop offset={1} style={{ stopColor: '#fa52a0' }} />
        </linearGradient>
        <path d="M5 2.3 23.6 15 19 21.8.4 9 5 2.3z" fill={forceColor ?? 'url(#sushi_c)'} />
        <linearGradient
          id="sushi_d"
          x1={23.682}
          x2={27.37}
          y1={1012.39}
          y2={999.724}
          gradientTransform="matrix(1 0 0 -1 -12 1012)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} style={{ stopColor: '#03b8ff' }} />
          <stop offset={1} style={{ stopColor: '#fa52a0' }} />
        </linearGradient>
        <path
          d="M23.6 15c-1.6 2.3-7 1.4-12.1-2.2C6.3 9.3 3.5 4.6 5 2.3 6.6 0 12 .9 17.1 4.5c5.2 3.4 8 8.2 6.5 10.5z"
          fill={forceColor ?? 'url(#sushi_d)'}
        />
        <linearGradient
          id="sushi_e"
          x1={17.616}
          x2={21.305}
          y1={1010.624}
          y2={997.958}
          gradientTransform="matrix(1 0 0 -1 -12 1012)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} style={{ stopColor: '#03b8ff' }} />
          <stop offset={1} style={{ stopColor: '#fa52a0' }} />
        </linearGradient>
        <path
          d="M19 21.7c-1.6 2.3-7 1.4-12.1-2.2s-8-8.2-6.4-10.6c1.6-2.3 7-1.4 12.1 2.2s7.9 8.3 6.4 10.6z"
          fill={forceColor ?? 'url(#sushi_e)'}
        />
        <path
          d="M23.6 15 19 21.8c-1.6 2.3-7 1.3-12.1-2.2-1-.7-1.9-1.4-2.8-2.2.7-.1 1.6-.5 2.5-1.5 1.6-1.7 2.4-2.1 3.1-2 .7 0 1.5.7 2.8 2.4 1.3 1.7 3.1 2.2 4.2 1.3.1-.1.2-.1.3-.2.9-.7 1.2-1 2.9-4.2.4-.8 1.8-2.1 3.7-1.5.5 1.3.5 2.4 0 3.3z"
          fill={forceColor ?? '#0e0f23'}
        />
        <path
          d="M22.9 14.6c-1.4 2-6.3 1-11-2.3C7.1 9 4.3 4.8 5.7 2.8s6.3-1 11 2.3 7.5 7.5 6.2 9.5zm-4.4-3c-.7 1-3.1.5-5.5-1.1-2.3-1.6-3.7-3.7-3-4.7.7-1 3.1-.5 5.5 1.1 2.3 1.6 3.7 3.7 3 4.7z"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: '#fff',
          }}
        />
        <path
          d="M4.6 4.6c0-.1-.1-.2-.2-.1s-.2.1-.2.2c.1.3.2.5.2.7 0 .1.1.2.2.1.1 0 .2-.1.1-.2 0-.2 0-.4-.1-.7zM5.1 6.2c0-.1-.1-.2-.2-.1s-.1.1-.1.2c1.1 2.5 3.4 5.2 6.4 7.2.1.1.2 0 .3 0 .1-.1 0-.2 0-.3-3.1-2-5.3-4.6-6.4-7zM17.2 16c-.1 0-.2 0-.2.1s0 .2.1.2c.3.1.7.2 1 .3.1 0 .2 0 .2-.1s0-.2-.1-.2c-.3-.1-.7-.2-1-.3zM19 16.4c-.1 0-.2.1-.2.2s.1.2.2.2c.8.1 1.7.2 2.4.1.1 0 .2-.1.2-.2s-.1-.2-.2-.2c-.8.1-1.6 0-2.4-.1z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

function DfxAssetIconINCH({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 706.8 665.2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M168.2 366.5 186.9 226 24.7 113.4l148.2 50.2 35-53.7 127.8-79.3 281.7 155.2L632 422.6 506.5 597l-99.2 15.2 51.3-93.9v-90.4l-37.3-70.6-37.9-25.1-58.3 60.1v63.6l-45.5 42.6-57.8 7-25.6 14.5-42-13.4-17.5-63 31.5-44.3v-32.8z"
        fill={forceColor ?? '#fff'}
      />
      <path
        d="M427.2 112.2c-30.9-6.4-64.7-4.7-64.7-4.7s-11.1 51.3-79.9 64.8c.5 0 90.9 30.9 144.6-60.1zM455.2 577.7c37.3-29.2 65.3-69.4 78.2-114.9.6-1.7 5.8-4.7 9.3-7 5.8-3.5 11.7-6.4 12.8-11.1 2.3-13.4 3.5-27.4 3.5-41.4 0-5.2-5.3-10.5-10.5-15.7-4.1-3.5-8.2-7.6-8.2-10.5-5.8-53.1-30.3-102.7-69.4-138.8l-4.1 4.1c37.9 35.6 62.4 84 67.7 135.3.6 4.7 5.2 9.3 9.9 14 4.1 3.5 8.8 8.8 8.8 11.1 0 13.4-1.2 26.8-3.5 40.2-.6 2.3-5.8 4.7-9.9 7-5.8 2.9-11.1 5.8-12.2 10.5-14 49.6-46.1 92.8-88.7 120.8 7.6-16.3 31.5-69.4 44.3-96.3l-2.3-86.3-74.1-71.7-42 5.8-46.1 74.7s21.6 27.4-8.8 59.5c-29.7 31.5-53.1 38.5-53.1 38.5l-21.6-11.7c6.4-8.2 19.3-20.4 29.2-28.6 16.9-14 33.8-15.2 33.8-30.3.7-31.6-33.2-22.9-33.2-22.9l-12.3 11.7-5.2 43.2-25.6 32.1-2.9-.6-42-9.3s25.7-13.4 29.8-28.6c4.1-14.6-8.2-63-8.8-65.9.6.6 12.3 10.5 17.5 26.8 9.3-25.7 21.6-50.2 25.1-52.5 3.5-2.3 50.7-27.4 50.7-27.4l-15.7 41.4 11.7-6.4 28-68.8s27.4-13.4 47.8-13.4c36.7-.6 91-45.5 66.5-126 7 2.9 128.3 63.6 149.3 182.6 15.7 91.5-36.2 177.2-123.7 226.8z"
        fill={forceColor ?? '#94a6c3'}
      />
      <path
        d="M316.4 125c13.4-15.8 8.2-39.1 8.2-39.1l-39.1 57.8c-.6 0 13.9.6 30.9-18.7zM185.1 440.6l4.7-23.3s-19.3 33.8-21 38.5c-1.8 5.3 1.2 14.6 8.7 14 7.6-.6 16.9-11.7 16.9-19.8 0-10.5-9.3-9.4-9.3-9.4z"
        fill={forceColor ?? '#1b314f'}
      />
      <path
        d="M531.6 69.6s29.2 1.2 59.5 4.7c-68.3-53.7-133-69.4-185.5-69.4-72.3 0-121.3 29.8-124.3 31.5L304.1.2s-91-8.8-123.1 87.5c-8.2-20.4-15.7-50.2-15.7-50.2S118 79 140.2 147.8C85.9 128 8.4 100.5 5.4 100c-4.1-.6-5.3 1.2-5.3 1.2s-1.2 1.7 2.3 4.7c6.5 5.1 129 95.6 155.9 113.1-5.8 21-5.8 30.9 0 40.8 8.2 13.4 8.7 20.4 7.6 30.3-1.2 9.9-11.7 95.7-14 106.2-2.3 10.5-26.8 47.8-25.7 58.9 1.2 11.1 16.3 58.3 29.8 63.6 9.9 3.5 34.4 11.1 50.7 11.1 5.8 0 11.1-1.2 13.4-3.5 9.9-8.7 12.8-10.5 19.8-10.5h1.7c2.9 0 6.4.6 10.5.6 9.3 0 21.6-1.8 30.3-9.9 12.8-12.8 35-30.3 42-38.5 8.8-11.1 13.4-26.2 11.1-41.4-1.8-14 5.8-26.3 14.6-38.5 11.1-14.6 31.5-40.8 31.5-40.8C421.9 377.6 447 423.7 447 475c0 91-79.3 164.5-177.3 164.5-15.2 0-29.7-1.7-44.3-5.2 44.9 15.7 82.8 21 113.8 21 65.9 0 100.9-23.9 100.9-23.9s-12.2 15.8-32.1 33.8h.6c109.1-15.2 162.2-105 162.2-105s-4.1 29.2-9.3 49c145.1-109.1 120.6-245.6 120-250.2 1.2 1.7 15.8 19.2 23.3 28.6 23.4-240.4-173.2-318-173.2-318zM308.2 453.5c-2.3 2.9-12.2 11.7-19.2 18.1-7 6.4-14.6 12.8-20.4 18.7-2.3 2.3-7 3.5-14 3.5h-17.5c8.8-11.7 34.4-38.5 43.2-44.3 10.5-7 15.8-14 9.3-26.2-6.4-12.3-23.3-9.3-23.3-9.3s9.9-4.1 18.7-4.1c-11.1-2.9-25.1 0-31.5 6.4-7 6.4-5.8 29.2-8.7 43.7-2.9 15.2-12.8 22.8-28 36.8-8.2 7.6-14 9.9-18.7 9.9-9.9-1.7-21.6-4.7-29.8-7.6-5.8-7.6-14.6-32.7-16.9-43.2 1.7-5.8 8.7-18.1 12.2-25.1 7-13.4 11.1-21 12.3-28 2.3-9.9 9.9-71.2 12.8-96.8 7.6 9.9 18.1 26.3 15.7 36.8 16.9-23.9 4.7-47.3-1.2-56.6-5.2-9.3-12.2-28-6.4-47.8 5.8-19.8 26.8-74.7 26.8-74.7s7 12.3 16.9 9.9c9.9-2.3 89.8-122.5 89.8-122.5s21.6 47.2-1.2 81.7c-23.3 34.4-46.1 40.8-46.1 40.8s32.1 5.8 61.8-15.8c12.2 28.6 23.9 58.3 24.5 62.4-1.8 4.1-25.1 60.1-27.4 63.6-1.2 1.2-9.3 3.5-15.2 4.7-9.9 2.9-15.7 4.7-18.1 6.4-4.1 3.5-22.8 54.8-31.5 79.9-10.5 2.9-21 8.8-28.6 20.4 4.1-2.9 16.9-4.7 26.3-5.8 8.2-.6 33.2 12.8 39.7 37.9v1.2c1.3 9.2-1.6 18-6.3 25zm-54.8 7c5.3-7.6 4.7-20.4 5.3-24.5.6-4.1 1.7-11.7 6.4-12.8 4.7-1.2 15.8.6 15.8 8.7 0 7.6-8.2 9.3-14 14.6-4.2 4-12.4 12.8-13.5 14zM486.1 349c5.8-29.7 6.4-55.4 4.7-76.4 22.7 30.3 36.7 67.1 40.8 105 .6 4.7 5.2 9.3 9.9 14 4.1 3.5 8.8 8.2 8.8 11.1 0 13.4-1.2 26.8-3.5 40.3-.6 1.7-5.8 4.7-9.9 7-5.8 2.9-11.1 5.8-12.2 10.5-12.8 44.9-40.3 84.6-77 112.6 54.2-56.6 80.4-150 38.4-224.1zm-36.7 229.3c37.9-29.2 67.1-70 79.9-116.1.6-1.7 5.8-4.7 9.3-7 5.8-2.9 11.7-6.4 12.8-11.1 2.3-13.4 3.5-27.4 3.5-41.4 0-5.2-5.3-10.5-10.5-15.7-2.9-3.5-7.6-7.6-7.6-10.5-4.7-42.6-21.6-82.8-47.8-116.1-11.7-70-58.3-91.6-59.5-92.2 1.2 1.8 31.5 45.5 10.5 96.8-21.6 51.9-77 43.8-81.7 44.3-4.7 0-22.7 23.3-45.5 66.5-2.9-1.2-15.2-4.1-29.2-1.7 10.5-29.2 26.3-70.6 29.2-74.1 1.2-1.2 9.9-3.5 15.8-5.2 11.1-2.9 16.3-4.7 18.1-7 1.2-1.8 7-15.2 12.8-29.2 5.3 0 18.7-1.2 19.8-1.8 1.2-1.2 12.3-29.7 12.3-33.2 0-2.9-22.8-59.5-31.5-81.1 4.1-4.7 8.2-10.5 12.2-16.9 119.6 12.9 213 114.4 213 237.4 0 94.5-55.4 176.8-135.9 215.3z"
        fill={forceColor ?? '#1b314f'}
      />
      <path
        d="M294.2 263.3c11.1-12.8 5.3-36.7-15.2-40.8 5.3-12.2 12.8-36.7 12.8-36.7s-59.5 93.3-64.7 95.1c-5.3 1.8-10.5-18.7-10.5-18.7-11.1 42.6 18.7 48.4 22.2 35 16.3-4.2 44.3-21.7 55.4-33.9z"
        fill={forceColor ?? '#1b314f'}
      />
      <path d="m243.4 286 30.3-51.9s17.5 8.8 8.7 22.8c-11 16.3-39 29.1-39 29.1z" fill={forceColor ?? '#ffd923'} />
      <path
        d="M618.5 526.4c-8.8 11.7-18.7 23.9-30.3 35.6 75.2-144.7 3.5-277.1.6-282.3 5.3 5.3 10.5 11.1 15.2 16.3 57.7 64.1 64.7 160.4 14.5 230.4zM688.5 340.3c-26.3-70.6-63.6-130.7-145.8-184.9-79.3-52.5-164.5-48.4-169.2-47.8h-1.2c2.9-1.2 5.8-1.8 8.7-2.3 18.1-5.8 41.4-10.5 64.8-13.4C507.7 83 570.1 104 612.7 149l1.2 1.2c48.4 51.3 73.5 115.4 74.6 190.1zM524 51.5c-86.9-16.3-142.9-8.2-183.2 7-1.2-4.7-5.3-14-8.8-21.6-12.1 14.6-25 32.1-33.1 43.2-22.2 15.2-31.5 29.8-31.5 29.8 12.8-43.8 50.2-76.4 95.7-84.6 12.8-2.3 26.8-3.5 42-3.5 40.2.6 80.4 10.5 118.9 29.7zM202.6 163.5c-68.2-2.3-45.5-81.7-44.3-86.3 0 .6 4.6 62.4 44.3 86.3zM269.7 20.6c-52.5 31.5-42 106.7-42 106.7-50.2-76.3 37.9-104.9 42-106.7z"
        fill={forceColor ?? '#d82122'}
      />
      <path
        d="M183.4 184.5c3.5 2.9 7 8.2 2.9 15.8-2.3 4.1-5.8 3.5-11.1 1.2-7-3.5-49-28-86.9-53.1 43.2 15.2 86.9 31.5 93.9 35 0 0 .6.6 1.2 1.1z"
        fill={forceColor ?? '#fff'}
      />
    </svg>
  );
}

function DfxAssetIconTUSD({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 2500 2500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <circle cx={1250} cy={1250} r={1250} fill={forceColor ?? '#1B5AFE'} />
        <g fill="#FFF">
          <path d="M615.1 646v425.9c235.2 0 425.9-190.7 425.9-425.8l-425.9-.1zM1041 1925.2v-857.4c0-3.6 0-7.2.1-10.8.1-3.6.2-7.2.4-10.8.2-3.6.4-7.2.7-10.7.3-3.6.6-7.1 1-10.6s.8-7.1 1.2-10.6c.4-3.5.9-7 1.5-10.5.5-3.5 1.1-7 1.7-10.4.6-3.5 1.3-6.9 2-10.3.7-3.4 1.4-6.8 2.2-10.2.8-3.4 1.6-6.8 2.5-10.1s1.8-6.7 2.7-10c.9-3.3 1.9-6.6 3-9.9 1-3.3 2.1-6.6 3.2-9.8 1.1-3.3 2.2-6.5 3.4-9.7 1.2-3.2 2.4-6.4 3.7-9.6 1.3-3.2 2.6-6.3 3.9-9.5 1.3-3.2 2.7-6.3 4.1-9.4 1.4-3.1 2.9-6.2 4.3-9.3 1.5-3.1 3-6.1 4.6-9.2l4.8-9c1.6-3 3.3-6 5-8.9 1.7-2.9 3.4-5.9 5.2-8.8 1.8-2.9 3.6-5.8 5.4-8.6 1.8-2.8 3.7-5.7 5.6-8.5 1.9-2.8 3.8-5.6 5.8-8.3 2-2.8 4-5.5 6-8.2s4.1-5.4 6.2-8c2.1-2.7 4.2-5.3 6.4-7.9 2.2-2.6 4.3-5.2 6.6-7.7 2.2-2.5 4.5-5.1 6.7-7.6 2.3-2.5 4.6-5 6.9-7.4 2.3-2.4 4.7-4.9 7.1-7.2 2.4-2.4 4.8-4.8 7.2-7.1 2.4-2.3 4.9-4.6 7.4-6.9 2.5-2.3 5-4.5 7.6-6.7 2.6-2.2 5.1-4.4 7.7-6.5 2.6-2.2 5.2-4.3 7.9-6.4 2.7-2.1 5.3-4.2 8.1-6.2 2.7-2 5.4-4 8.2-6 2.8-2 5.5-3.9 8.3-5.8 2.8-1.9 5.6-3.8 8.5-5.6 2.8-1.8 5.7-3.6 8.6-5.4 2.9-1.8 5.8-3.5 8.8-5.2 2.9-1.7 5.9-3.4 8.9-5l9-4.8c3-1.6 6.1-3.1 9.2-4.6 3.1-1.5 6.2-2.9 9.3-4.3 3.1-1.4 6.2-2.8 9.4-4.1 3.2-1.3 6.3-2.6 9.5-3.9 3.2-1.3 6.4-2.5 9.6-3.7 3.2-1.2 6.5-2.3 9.7-3.4s6.5-2.2 9.8-3.2l9.9-3c3.3-1 6.7-1.9 10-2.7 3.4-.9 6.7-1.7 10.1-2.5 3.4-.8 6.8-1.5 10.2-2.2 3.4-.7 6.9-1.4 10.3-2 3.4-.6 6.9-1.2 10.4-1.7l10.5-1.5c3.5-.5 7-.9 10.6-1.2 3.5-.4 7.1-.7 10.6-1 3.6-.3 7.1-.5 10.7-.7 3.6-.2 7.2-.3 10.8-.4 3.6-.1 7.2-.1 10.8-.1h422.1v421.8h-422.1v857.4l-421.5-.5z" />
        </g>
      </g>
    </svg>
  );
}

function DfxAssetIconSNX({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="scale(.26458)">
        <linearGradient
          id="snx_a"
          x1={1621.495}
          x2={1621.495}
          y1={225.489}
          y2={-30.511}
          gradientTransform="matrix(.75 0 0 -.75 -853.271 169.115)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} style={{ stopColor: '#090220' }} />
          <stop offset={1} style={{ stopColor: '#170659' }} />
        </linearGradient>
        <circle cx={362.8} cy={362.8} r={362.8} fill={forceColor ?? 'url(#snx_a)'} />
        <path
          d="M243.3 272.6c-2.9-3.6-7.3-5.6-12-5.6h-96.9c-.8 0-1.5-.3-2.1-.8-.5-.5-.8-1.1-.8-1.8v-65.3c0-.7.3-1.3.8-1.8.6-.6 1.3-.9 2.1-.8h102.4c25.8 0 48.1 10.6 66.9 31.7l24.9 30.4-48.5 59.1-36.8-45.1zm179-44.7c18.7-20.9 41.1-31.4 67.2-31.4h102.1c.7-.1 1.4.2 1.9.6.5.5.7 1.2.6 2v65.3c0 .7-.2 1.3-.6 1.8-.5.6-1.2.9-1.9.8h-96.9c-4.6-.1-9 2-12 5.6l-71.4 86.9L483 447c2.9 3.3 7.2 5.3 11.6 5.2h96.9c.7-.1 1.5.3 1.9.8.4.6.7 1.4.6 2.1v65.3c0 .7-.2 1.3-.6 1.8-.5.6-1.2.9-1.9.8h-102c-26.1 0-48.3-10.6-66.9-31.7l-59.4-72.5-59.4 72.5c-18.7 21.1-41.1 31.7-67.2 31.7H134.4c-.7.1-1.5-.3-1.9-.8-.5-.6-.7-1.4-.6-2.1v-65.3c0-.7.2-1.3.6-1.8.5-.6 1.2-.9 1.9-.8h96.9c4.6 0 9-2.1 12-5.6l70.1-85.6 108.9-133.1z"
          fill={forceColor != null ? '#fff' : '#00d1ff'}
        />
      </g>
    </svg>
  );
}

function DfxAssetIconMKR({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="mkr_a"
          x1={300}
          x2={300}
          y1={602}
          y2={2}
          gradientTransform="matrix(1 0 0 -1 0 602)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4fa89b" />
          <stop offset={1} stopColor="#6acebb" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <circle cx={300} cy={300} r={300} fill={forceColor ?? 'url(#mkr_a)'} />
          <path
            d="M152.34 390V248.8l107.08 80.59V390h27.33v-66.3a15.94 15.94 0 0 0-6.35-12.7l-129.86-97.77A16 16 0 0 0 125 226v164Zm296.14 0V248.8L341.4 329.39V390h-27.33v-66.3a15.94 15.94 0 0 1 6.35-12.7l129.86-97.73A16 16 0 0 1 475.82 226v164Z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

function DfxAssetIconENJ({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 141.7 141.7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={70.9} cy={70.9} r={70.9} fill={forceColor ?? '#7866d5'} />
      <path
        d="M99.6 36.4c2.4.3 4.9.5 7.3.9 4.7.9 6.3 3.3 5.5 8.1-.2 1.8-1.6 3.2-3.4 3.5-1.1.2-2.3.3-3.4.2-15.6 0-31.1.1-46.7.1-2.3 0-4.7.2-7 .6C44.2 51 41.2 54.2 40.6 62c-.3 3.6-.3 3.6 3.4 3.6h63.8c1 0 1.9.3 2.8.8 2.8 1.8 2.1 4.7 2 7.3-.1 2.1-1.4 3.3-3.6 3.7-.9.2-1.8.2-2.8.2H42.6c-2.3 0-2.3 0-2.1 2.3.1 2.1.3 4.2.8 6.3 1 3.8 3.3 6.2 7.2 7.3 4.2 1.2 8.6 1.4 12.9 1.5h45.5c1.9 0 3.7.2 4.9 2 1.9 3 .9 6.9-2.1 8.8-.4.3-.8.5-1.3.6-3.3 1.1-6.7 1.3-10.2 1.4-14.3.3-28.5.3-42.7 0-4.4-.1-8.8-.6-13.1-1.5-10.1-2.1-15.2-7.3-16.9-17.5-.4-2.3-.6-4.7-.9-7.1V63.1c.2-1.8.4-3.7.6-5.5 1.3-11.5 6.5-17.2 17.8-19.8 4-.9 8.2-1.1 12.2-1.5l44.4.1z"
        fill="#fff"
      />
      <path
        d="M76.8 109.8c-7.2 0-14.3-.1-21.4-.2-4.5-.1-9-.6-13.4-1.6-10.9-2.3-16.5-8.1-18.3-18.9-.3-1.7-.5-3.4-.6-5-.1-.7-.2-1.4-.3-2.2v-19l.2-1.8c.1-1.3.3-2.5.4-3.7 1.4-12.3 7.2-18.6 19.3-21.3 3.2-.7 6.3-1 9.4-1.3l3-.3H99.9c.7.1 1.5.2 2.2.2 1.7.2 3.4.3 5.2.7 5.7 1.1 7.9 4.3 6.9 10.1-.3 2.5-2.3 4.6-5 5-1.2.2-2.4.3-3.7.3-15.5.1-31.1.2-46.6.2-2.2 0-4.5.2-6.7.6-6.9 1.1-9.2 3.6-9.8 10.6 0 .6-.1 1.2-.1 1.7h65.5c1.3 0 2.6.4 3.7 1 3.4 2.2 3.1 5.5 2.9 7.9 0 .3-.1.7-.1 1-.2 2.8-1.9 4.7-5 5.3-1.1.2-2.1.2-3.1.2H42.3v.4c.1 2.1.3 4.1.8 6.1.8 3.1 2.7 5 5.9 5.9 4.3 1.2 8.7 1.4 12.5 1.4 11.8.1 23.8.1 35.5.1h10c1.5 0 4.6 0 6.4 2.9 1.2 1.9 1.5 4.1 1 6.2s-1.8 3.9-3.7 5.1c-.5.3-1.1.6-1.7.8-3.7 1.2-7.5 1.4-10.7 1.5-7.1 0-14.3.1-21.5.1zM26.4 81.6c.1.7.2 1.4.2 2.1l.6 4.8c1.6 9.4 6.1 14 15.5 16 4.2.9 8.5 1.4 12.8 1.5 14.1.3 28.5.3 42.7 0 2.9-.1 6.4-.3 9.6-1.3.3-.1.6-.3.9-.4 1-.7 1.8-1.7 2.1-2.9.3-1.2.1-2.4-.6-3.5-.6-.9-1.4-1.2-3.3-1.2h-10c-11.6 0-23.7 0-35.5-.1-4 0-8.7-.2-13.4-1.6-4.5-1.2-7.3-4.1-8.4-8.6-.5-2.2-.8-4.5-.8-6.7v-.1c-.1-1.4-.2-2.4.6-3.3.8-.9 1.9-.9 3.3-.9h63.6c.8 0 1.7 0 2.5-.2 1.6-.3 2-1 2.1-2 0-.4.1-.7.1-1.1.2-2.5.2-3.7-1.2-4.6-.5-.3-1.2-.5-1.8-.5H44c-2.2 0-3.5 0-4.5-1s-.8-2.4-.7-4.5c.7-8.6 4.3-12.5 12.8-13.8 2.4-.4 4.8-.6 7.3-.7 15.6 0 31.1-.1 46.7-.1 1.1 0 2.1 0 3.1-.2 1-.1 1.8-.9 1.9-1.9.7-4-.3-5.3-4.1-6.1-1.6-.3-3.2-.5-4.8-.6-.7-.1-1.5-.2-2.2-.2H55.3l-3 .3c-3.1.3-6 .5-9 1.2C32.8 42 28.2 47.1 27 57.9c-.1 1.2-.3 2.4-.4 3.7l-.2 1.7v18.3z"
        fill="#fff"
      />
    </svg>
  );
}

function DfxAssetIconCOMP({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 2000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1000 2000c552.3 0 1000-447.7 1000-1000S1552.3 0 1000 0 0 447.7 0 1000s447.7 1000 1000 1000z"
        fill={forceColor ?? '#070a0e'}
      />
      <path
        d="M577.7 1335.3c-29.9-18.3-48.2-50.8-48.2-85.8v-195.4c0-23.2 18.9-42 42.1-41.9 7.4 0 14.7 2 21.1 5.7l440.9 257.1c25.8 15 41.7 42.6 41.7 72.5v202.4c.1 27.8-22.4 50.4-50.2 50.4-9.3 0-18.5-2.6-26.4-7.4l-421-257.6zm657.2-370.9c25.8 15 41.6 42.7 41.7 72.5v410.8c0 12.1-6.5 23.3-17.1 29.2l-96.5 54.3c-1.2.7-2.5 1.2-3.9 1.6v-228.1c0-29.5-15.5-56.9-40.9-72.1L731 1001V743.5c0-23.2 18.9-42 42.1-41.9 7.4 0 14.7 2 21.1 5.7l440.7 257.1zm193-303.4c25.9 15 41.8 42.7 41.8 72.6v600c-.1 12.3-6.9 23.6-17.7 29.5l-91.5 49.4V994.8c0-29.5-15.5-56.8-40.7-72L924 685.4V441.2c0-7.4 2-14.7 5.6-21.1 11.7-20 37.4-26.8 57.4-15.2L1427.9 661z"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: forceColor != null ? '#fff' : '#00d395',
        }}
      />
    </svg>
  );
}

function DfxAssetIconBAT({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 2000 1719"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={forceColor ?? '#662d91'} d="m2000 1716.64-995.21-569.86L0 1719l2000-2.36z" />
      <path fill={forceColor ?? '#9e1f63'} d="m1005.11 0-.32 1146.78L2000 1716.64 1005.11 0z" />
      <path fill={forceColor ?? '#ff5000'} d="m0 1719 1004.79-572.22L1005.11 0 0 1719z" />
      <path
        fill="#fff"
        stroke={forceColor != null ? '#fff' : '#ff5000'}
        strokeMiterlimit={10}
        strokeWidth={25}
        d="M1002.75 695.67 591.9 1381.92h823.54l-412.69-686.25z"
      />
    </svg>
  );
}

function DfxAssetIconCRV({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 810 810"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="a">
          <path d="M5.813 328H18v82H5.812Zm0 0" />
        </clipPath>
        <clipPath id="b">
          <path d="M5.813 278H15v81H5.812Zm0 0" />
        </clipPath>
        <clipPath id="c">
          <path d="M5.813 358H14v80H5.812Zm0 0" />
        </clipPath>
        <clipPath id="d">
          <path d="M240 .004h62V6h-62Zm0 0" />
        </clipPath>
        <clipPath id="e">
          <path d="M794 365h15.621v47H794Zm0 0" />
        </clipPath>
        <clipPath id="f">
          <path d="M5.813 308H11v79H5.812Zm0 0" />
        </clipPath>
        <clipPath id="g">
          <path d="M254 .004h57V12h-57Zm0 0" />
        </clipPath>
        <clipPath id="h">
          <path d="M199 .004h56V4h-56Zm0 0" />
        </clipPath>
        <clipPath id="i">
          <path d="M795 341h14.621v49H795Zm0 0" />
        </clipPath>
        <clipPath id="j">
          <path d="M793 317h16.621v51H793Zm0 0" />
        </clipPath>
        <clipPath id="k">
          <path d="M217 .004h52V9h-52Zm0 0" />
        </clipPath>
        <clipPath id="l">
          <path d="M803 389h6.621v45H803Zm0 0" />
        </clipPath>
        <clipPath id="m">
          <path d="M804 367h5.621v47H804Zm0 0" />
        </clipPath>
        <clipPath id="n">
          <path d="M802 346h7.621v47H802Zm0 0" />
        </clipPath>
        <clipPath id="o">
          <path d="M210 805h31v4.996h-31Zm0 0" />
        </clipPath>
        <clipPath id="p">
          <path d="M235 801h31v8.996h-31Zm0 0" />
        </clipPath>
        <clipPath id="q">
          <path d="M205 805h31v4.996h-31Zm0 0" />
        </clipPath>
        <clipPath id="r">
          <path d="M228 801h32v8.996h-32Zm0 0" />
        </clipPath>
      </defs>
      <DfxAssetIconCRV0 forceColor={forceColor} />
      <DfxAssetIconCRV1 forceColor={forceColor} />
      <DfxAssetIconCRV2 forceColor={forceColor} />
    </svg>
  );
}
function DfxAssetIconCRV0({ forceColor }: BaseAssetIconProps) {
  return (
    <>
      <path fill={forceColor ?? '#00f'} d="m347.727 491.273-61.25 13.57-7.754-28.69 65.32-11.829Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m286.477 504.844-53.497 18.031-11.437-29.86 57.18-16.863Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m343.852 464.324-65.13 11.828-6.78-33.543 68.613-10.078Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m278.723 476.152-57.18 16.864-10.465-34.895 60.863-15.512Zm0 0" />
      <path fill={forceColor ?? '#0000f1'} d="m351.797 513.18-57.18 14.93-8.336-23.266 61.446-13.57Zm0 0" />
      <path fill={forceColor ?? '#0000da'} d="m294.617 528.11-49.23 18.995-12.407-24.23 53.497-18.031Zm0 0" />
      <path fill={forceColor ?? '#0058ff'} d="M340.555 432.531 271.94 442.61l-6.011-37.414 71.718-8.144Zm0 0" />
      <path fill={forceColor ?? '#0048ff'} d="m271.941 442.61-60.863 15.511-8.918-39.164 63.77-13.762Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m414.793 482.547-67.066 8.726-3.684-26.949 70.555-7.172Zm0 0" />
      <path fill={forceColor ?? '#0000da'} d="m356.254 529.27-53.11 15.898-8.527-17.059 57.18-14.93Zm0 0" />
      <path fill={forceColor ?? '#0000e8'} d="m232.98 522.875-43.613 22.488-15.504-30.828 47.68-21.52Zm0 0" />
      <path fill={forceColor ?? '#0000c4'} d="m303.145 545.168-44.774 19.969-12.984-18.032 49.23-18.996Zm0 0" />
      <path fill={forceColor ?? '#003cff'} d="m414.598 457.152-70.555 7.172-3.488-31.793 73.847-5.043Zm0 0" />
      <path fill={forceColor ?? '#0008ff'} d="m221.543 493.016-47.488 21.52-13.953-36.06 50.976-20.355Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m415.18 502.71-63.383 10.47-4.07-21.907 67.066-8.726Zm0 0" />
      <path fill={forceColor ?? '#0000c8'} d="m245.387 547.105-39.543 23.075-16.477-24.817 43.613-22.488Zm0 0" />
      <path fill={forceColor ?? '#0090ff'} d="m337.648 397.05-71.718 8.145-4.844-40.52 74.234-6.01Zm0 0" />
      <path fill={forceColor ?? '#0084ff'} d="m265.93 405.195-63.77 13.762-7.363-42.457 66.289-11.824Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m414.402 427.488-73.847 5.043-2.907-35.48 76.563-2.715Zm0 0" />
      <path fill={forceColor ?? '#003cff'} d="m211.078 458.121-50.976 20.356-12.02-40.325 54.078-19.195Zm0 0" />
      <path fill={forceColor ?? '#0000f6'} d="m415.566 517.64-59.312 11.63-4.457-16.09 63.383-10.47Zm0 0" />
      <path fill={forceColor ?? '#0000d1'} d="m360.52 539.16-48.653 16.672-8.722-10.664 53.109-15.898Zm0 0" />
      <path fill={forceColor ?? '#0000ad'} d="m258.371 565.137-35.277 23.457-17.25-18.414 39.543-23.075Zm0 0" />
      <path fill={forceColor ?? '#00b'} d="m311.867 555.832-40.316 20.356-13.18-11.051 44.774-19.969Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m414.21 394.336-76.562 2.715-2.328-38.387 78.89-.387Zm0 0" />
      <path fill={forceColor ?? '#0078ff'} d="m202.16 418.957-54.078 19.195-9.883-43.816 56.598-17.836Zm0 0" />
      <path fill={forceColor ?? '#0000ed'} d="M415.953 526.559 360.52 539.16l-4.266-9.89 59.312-11.63Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m335.32 358.664-74.234 6.012-3.684-42.653 76.176-3.878Zm0 0" />
      <path fill={forceColor ?? '#002cff'} d="m484.57 477.895-69.777 4.652-.195-25.395 72.879-2.52Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="M261.086 364.676 194.602 376.5l-5.622-44.59 68.422-9.887Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m481.469 496.508-66.29 6.203-.386-20.164 69.777-4.652Zm0 0" />
      <path fill={forceColor ?? '#0050ff'} d="m487.477 454.633-72.88 2.52-.195-29.47 75.79-.386Zm0 0" />
      <path fill={forceColor ?? '#0000da'} d="m189.367 545.363-33.336 26.172-18.996-31.215 36.828-25.785Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m173.863 514.535-36.828 25.785-17.058-36.836 40.125-25.007Zm0 0" />
      <path fill={forceColor ?? '#0000a4'} d="m271.55 576.188-31.01 23.652-17.446-11.246 35.277-23.457Zm0 0" />
      <path fill={forceColor ?? '#0000b6'} d="m205.844 570.18-29.656 26.558-20.157-25.203 33.336-26.172Zm0 0" />
      <path fill={forceColor ?? '#0000d6'} d="m364.977 542.648-44.387 17.059-8.723-3.875 48.653-16.672Zm0 0" />
      <path fill={forceColor ?? '#0004ff'} d="m478.367 509.883-62.8 7.758-.387-14.93 66.289-6.203Zm0 0" />
      <path fill={forceColor ?? '#0078ff'} d="m490.191 427.297-75.789.191-.191-33.152 78.305 2.133Zm0 0" />
      <path fill={forceColor ?? '#0000bf'} d="m320.59 559.707-35.86 20.55-13.18-4.07 40.317-20.355Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m414.21 358.277-78.89.387-1.742-40.52 80.633 1.942Zm0 0" />
      <path fill={forceColor ?? '#0034ff'} d="m160.102 478.477-40.125 25.007-14.922-41.097 43.027-24.235Zm0 0" />
      <path fill={forceColor ?? '#0000f1'} d="m416.344 529.465-51.367 13.183-4.457-3.296 55.433-12.793Zm0 0" />
      <path fill={forceColor ?? '#00009f'} d="m223.094 588.594-25.586 26.562-21.32-18.418 29.656-26.558Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m194.602 376.5-56.403 17.836-7.558-46.14 58.34-16.286Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m475.266 517.64-59.313 8.919-.387-8.918 62.801-7.758Zm0 0" />
      <path fill={forceColor ?? '#23ffd4'} d="m333.578 318.145-76.176 3.878-2.324-43.816 77.336-1.742Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m492.516 396.469-78.305-2.133v-36.059l80.437 4.653Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m257.402 322.023-68.226 9.887-3.684-45.754 69.586-7.949Zm0 0" />
      <path fill={forceColor ?? '#0000ad'} d="m284.73 580.258-26.746 23.652-17.445-4.07 31.012-23.653Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m148.082 438.152-43.027 24.235-12.211-44.98 45.355-23.071Zm0 0" />
      <path fill={forceColor ?? '#0000e8'} d="M369.242 539.547 328.926 556.8l-8.336 2.906 44.387-17.059Zm0 0" />
      <path fill={forceColor ?? '#000096'} d="m240.54 599.84-21.517 26.367-21.515-11.05 25.586-26.563Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m414.21 320.086-80.632-1.941-1.164-41.68 81.988 4.457Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m472.164 519.77-55.82 9.5-.39-2.711 59.312-8.918Zm0 0" />
      <path fill={forceColor ?? '#04f'} d="m553.574 477.313-69.004.582 2.907-23.262 71.718 1.742Zm0 0" />
      <path fill={forceColor ?? '#002cff'} d="m547.563 493.988-66.094 2.52 3.101-18.613 69.004-.582Zm0 0" />
      <path fill={forceColor ?? '#0000d1'} d="m329.117 556.8-31.785 20.356-12.602 3.102 35.86-20.551Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m494.648 362.93-80.437-4.653v-38.191l81.988 7.367Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m416.73 525.977-47.488 13.57-4.265 3.101 51.367-13.183Zm0 0" />
      <path fill={forceColor ?? '#0064ff'} d="m559.195 456.375-71.718-1.742 2.714-27.336 74.043 4.07Zm0 0" />
      <path fill={forceColor ?? '#19ffde'} d="m189.176 331.91-58.535 16.285-5.043-47.496 59.894-14.543Zm0 0" />
      <path fill={forceColor ?? '#001cff'} d="m541.555 505.813-63.188 4.07 3.102-13.375 66.094-2.52Zm0 0" />
      <path fill={forceColor ?? '#0000d1'} d="m156.031 571.535-23.261 29.082-21.903-31.215 26.168-29.082Zm0 0" />
      <path fill={forceColor ?? '#0000a8'} d="m176.188 596.738-19.77 28.887-23.648-25.008 23.261-29.082Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m332.414 276.465-77.336 1.742-.969-44.008 77.918.582Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m564.234 431.367-74.043-4.07 2.325-30.828 76.175 6.594Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m137.035 540.32-26.36 29.082-19.773-37.027 29.075-28.89Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m138.2 394.336-45.356 23.266-9.305-47.5 47.102-21.907Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m255.078 278.207-69.586 7.95-1.746-45.755 70.363-6.203Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m535.352 512.406-60.086 5.235 3.101-7.758 63.188-4.07Zm0 0" />
      <path fill={forceColor ?? '#0000bf'} d="m297.332 577.156-22.293 23.266-17.055 3.488 26.746-23.652Zm0 0" />
      <path fill={forceColor ?? '#00009b'} d="m257.984 603.91-17.445 25.98-21.32-3.683 21.32-26.172Zm0 0" />
      <path fill={forceColor ?? '#000092'} d="m197.508 615.156-16.281 28.5-24.614-18.031 19.575-28.887Zm0 0" />
      <path fill={forceColor ?? '#000cff'} d="m469.063 516.09-52.333 9.887-.386 3.488 55.82-9.695Zm0 0" />
      <path fill={forceColor ?? '#002cff'} d="m119.977 503.484-29.075 28.891-17.441-41.492 31.594-28.496Zm0 0" />
      <path fill={forceColor ?? '#5dff9a'} d="m414.402 280.922-81.988-4.457-.387-41.684 82.57 6.98Zm0 0" />
      <path fill={forceColor ?? '#2cffca'} d="m496.2 327.453-81.99-7.367.192-39.164 82.961 9.887Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m568.691 403.063-76.175-6.594 2.132-33.54 77.918 9.114Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m373.313 529.852-36.247 16.867-7.949 10.082 40.125-17.254Zm0 0" />
      <path fill={forceColor ?? '#000cff'} d="m417.313 516.477-44 13.375-4.07 9.695 47.487-13.57Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m529.148 513.762-56.984 6.008 3.102-2.13 60.086-5.234Zm0 0" />
      <path fill={forceColor ?? '#0000f1'} d="m337.066 546.719-27.718 19.968-12.016 10.47 31.785-20.356Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="M185.492 286.156 125.598 300.7l-2.13-47.5 60.278-12.797Zm0 0" />
      <path fill={forceColor ?? '#000089'} d="m219.219 626.207-12.793 28.11-25.2-10.66 16.282-28.5Zm0 0" />
      <path fill={forceColor ?? '#006cff'} d="M105.055 462.387 73.46 490.883 59.309 445.52l33.535-28.114Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m130.64 348.195-47.1 21.907-6.204-48.66 48.262-20.743Zm0 0" />
      <path fill={forceColor ?? '#06ecf1'} d="m572.566 372.043-77.918-9.113 1.551-35.477 79.278 11.824Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m332.027 234.781-77.918-.582.387-42.652 77.723 2.715Zm0 0" />
      <path fill={forceColor ?? '#0024ff'} d="m466.352 506.781-49.04 9.696-.582 9.5 52.332-9.887Zm0 0" />
      <path fill={forceColor ?? '#0000ad'} d="m275.04 600.422-13.567 25.398-20.934 4.07 17.445-25.98Zm0 0" />
      <path fill={forceColor ?? '#04f'} d="m609.781 494.957-62.218-.969 6.011-16.675 64.348 2.91Zm0 0" />
      <path fill={forceColor ?? '#005cff'} d="m617.922 480.223-64.348-2.91 5.621-20.938 66.48 5.043Zm0 0" />
      <path fill={forceColor ?? '#5dff9a'} d="m497.363 290.809-82.96-9.887.195-39.16 83.539 12.406Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m254.11 234.2-70.364 6.202.582-44.78 70.168-4.075Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m523.336 509.691-54.274 6.399 3.102 3.68 56.984-6.008Zm0 0" />
      <path fill={forceColor ?? '#0000df'} d="m309.348 566.688-18.414 22.683-15.895 11.05 22.293-23.265Zm0 0" />
      <path fill={forceColor ?? '#0038ff'} d="m601.254 505.23-59.7.582 6.009-11.824 62.218.969Zm0 0" />
      <path fill={forceColor ?? '#0078ff'} d="m625.676 461.418-66.48-5.043 5.038-25.008 68.422 7.367Zm0 0" />
      <path fill={forceColor ?? '#90ff66'} d="m414.598 241.762-82.57-6.98.19-40.52 82.575 9.113Zm0 0" />
      <path fill={forceColor ?? '#00008d'} d="m240.54 629.89-9.11 27.337-25.004-2.91 12.793-28.11Zm0 0" />
      <path fill={forceColor ?? '#001cff'} d="m377.188 513.762-32.95 16.285-7.172 16.672 36.247-16.867Zm0 0" />
      <path fill={forceColor ?? '#0034ff'} d="m592.531 510.66-57.18 1.746 6.204-6.593 59.504-.583Zm0 0" />
      <path fill={forceColor ?? '#0030ff'} d="m417.7 500.965-40.512 12.797-3.875 16.09 44-13.375Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m632.656 438.734-68.422-7.367 4.457-28.305 70.164 10.079Zm0 0" />
      <path fill={forceColor ?? '#33ffc4'} d="m575.477 339.277-79.278-11.824 1.164-36.644 80.242 14.543Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="M92.844 417.406 59.309 445.52l-10.852-48.082 35.082-27.336Zm0 0" />
      <path fill={forceColor ?? '#0000c8'} d="m132.77 600.617-13.567 31.02-24.617-30.828 16.09-31.407Zm0 0" />
      <path fill={forceColor ?? '#0000a4'} d="m156.613 625.625-11.05 30.438-26.36-24.426 13.567-31.02Zm0 0" />
      <path fill={forceColor ?? '#0008ff'} d="m344.238 530.047-23.84 19.387-11.05 17.254 27.718-19.97Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="M110.867 569.402 94.586 600.81l-22.094-36.641 18.41-31.793Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="M183.746 240.402 123.47 253.2l.578-46.336 60.281-11.242Zm0 0" />
      <path fill={forceColor ?? '#0034ff'} d="m584.004 511.242-54.856 2.52 6.204-1.356 57.18-1.746Zm0 0" />
      <path fill={forceColor ?? '#003cff'} d="m517.906 500.383-51.554 6.398 2.71 9.309 54.274-6.399Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="M125.598 300.7 77.336 321.44l-2.715-48.855 48.848-19.387Zm0 0" />
      <path fill={forceColor ?? '#000089'} d="m181.227 643.656-8.141 29.66-27.524-17.254 11.051-30.437Zm0 0" />
      <path fill={forceColor ?? '#04f'} d="m464.023 491.66-46.324 9.305-.387 15.512 49.04-9.696Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m638.855 413.14-70.164-10.077 3.875-31.02 71.524 12.793Zm0 0" />
      <path fill={forceColor ?? '#90ff66'} d="m498.137 254.168-83.54-12.406.196-38.387 83.344 14.926Zm0 0" />
      <path fill={forceColor ?? '#caff2c'} d="m332.219 194.262-77.723-2.715 1.742-40.711 77.145 4.848Zm0 0" />
      <path fill={forceColor ?? '#0000cd'} d="m290.934 589.371-9.692 24.621-19.77 11.828 13.567-25.398Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m90.902 532.375-18.41 31.793L53.11 522.68l20.352-31.797Zm0 0" />
      <path fill={forceColor ?? '#ceff29'} d="m254.496 191.547-70.168 4.074 2.52-42.46 69.39-2.325Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m414.793 203.375-82.574-9.113 1.164-38.578 81.601 11.242Zm0 0" />
      <path fill={forceColor ?? '#00009f'} d="m261.473 625.82-5.621 26.559-24.422 4.848 9.304-27.336Zm0 0" />
      <path fill={forceColor ?? '#60ff97'} d="m577.605 305.352-80.242-14.543.774-36.641 80.633 17.062Zm0 0" />
      <path fill={forceColor ?? '#0040ff'} d="m576.055 506.781-52.72 2.91 5.813 4.07 54.856-2.519Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m320.398 549.238-14.734 21.91-14.73 18.223 18.414-22.683Zm0 0" />
      <path fill={forceColor ?? 'navy'} d="m206.426 654.316-5.235 28.696-28.105-9.696 8.14-29.66Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m83.54 370.102-35.083 27.336-7.172-49.63 36.05-26.367Zm0 0" />
      <path fill={forceColor ?? '#0ff8e7'} d="m644.09 384.836-71.524-12.793 2.91-32.766 72.684 15.512Zm0 0" />
      <path fill={forceColor ?? '#0058ff'} d="m418.086 479.836-37.602 11.824-3.296 22.102 40.511-12.797Zm0 0" />
      <path fill={forceColor ?? '#0048ff'} d="m380.484 491.66-29.656 15.317-6.59 23.07 32.95-16.285Zm0 0" />
      <path fill={forceColor ?? '#0058ff'} d="m513.063 485.844-49.04 5.816 2.329 15.121 51.554-6.398Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="M73.46 490.883 53.11 522.68 37.214 477.12l22.094-31.601Zm0 0" />
      <path fill={forceColor ?? '#0060ff'} d="m664.055 498.832-54.274-3.875 8.14-14.734 56.02 5.816Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m653.781 507.559-52.527-2.329 8.527-10.273 54.274 3.875Zm0 0" />
      <path fill={forceColor ?? '#0074ff'} d="m673.941 486.04-56.02-5.817 7.755-18.805 57.566 7.754Zm0 0" />
      <path fill={forceColor ?? '#006cff'} d="m461.89 471.496-43.804 8.34-.387 21.129 46.324-9.305Zm0 0" />
      <path fill={forceColor ?? '#0038ff'} d="m350.828 506.977-20.738 18.222-9.692 24.04 23.84-19.192Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m568.305 497.281-50.399 3.102 5.43 9.308 52.527-2.91Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m498.137 218.3-83.344-14.925.191-36.45 82.961 17.063Zm0 0" />
      <path fill={forceColor ?? '#000084'} d="m231.43 657.227-2.52 27.918-27.719-1.942 5.235-28.887Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="M123.469 253.2 74.62 272.585l.777-47.887 48.649-17.836Zm0 0" />
      <path fill={forceColor ?? '#004cff'} d="m643.316 511.629-50.785-.969 8.723-5.43 52.527 2.329Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m184.328 195.621-60.281 11.242 3.297-44.203 59.504-9.5Zm0 0" />
      <path fill={forceColor ?? '#0090ff'} d="m683.242 469.172-57.566-7.754 6.98-22.684 59.117 10.274Zm0 0" />
      <path fill={forceColor ?? '#36ffc1'} d="m648.16 354.79-72.683-15.513 2.128-33.925 73.27 18.222Zm0 0" />
      <path fill={forceColor ?? '#8dff6a'} d="m578.77 271.23-80.633-17.062v-35.867l80.633 19.582Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m333.383 155.684-77.145-4.848 3.102-37.418 75.594 6.594Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m305.664 571.148-6.394 23.844-18.028 19 9.692-24.62Zm0 0" />
      <path fill={forceColor ?? '#0050ff'} d="m633.043 511.434-49.04-.192 8.528-.582 50.785.969Zm0 0" />
      <path fill={forceColor ?? '#0000c4'} d="m281.242 613.992-2.52 25.785-22.87 12.602 5.62-26.559Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m691.773 449.008-59.117-10.274 6.2-25.593 60.476 12.605Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m414.984 166.926-81.601-11.242 1.55-35.672 80.438 13.18Zm0 0" />
      <path fill={forceColor ?? '#0080ff'} d="m508.797 466.652-46.906 4.844 2.132 20.164 49.04-5.816Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m256.238 150.836-69.39 2.324L191.5 114l67.84-.582Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m77.336 321.441-36.05 26.368-3.298-49.825 36.633-25.398Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="M59.309 445.52 37.215 477.12l-12.02-48.273 23.262-31.41Zm0 0" />
      <path fill={forceColor ?? '#002cff'} d="m330.09 525.2-11.633 20.745-12.793 25.203 14.734-21.91Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m561.52 483.324-48.457 2.52 4.843 14.539 50.399-3.102Zm0 0" />
      <path fill={forceColor ?? '#00009f'} d="m145.563 656.063-2.325 29.468-27.523-24.039 3.488-29.855Zm0 0" />
      <path fill={forceColor ?? '#0000c8'} d="m119.203 631.637-3.488 29.855-25.586-30.437 4.457-30.246Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m418.668 453.469-35.277 10.66-2.907 27.531 37.602-11.824Zm0 0" />
      <path fill={forceColor ?? '#005cff'} d="m623.352 506.59-47.489.191 8.14 4.461 49.04.192Zm0 0" />
      <path fill={forceColor ?? '#007cff'} d="m383.39 464.129-27.136 13.766-5.426 29.082 29.656-15.317Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m699.332 425.746-60.477-12.605 5.235-28.305 61.445 15.316Zm0 0" />
      <path fill={forceColor ?? '#000089'} d="m173.086 673.316-1.16 28.887-28.688-16.672 2.325-29.468Zm0 0" />
      <path fill={forceColor ?? '#00009b'} d="m255.852 652.379.195 26.754-27.137 6.012 2.52-27.918Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m650.875 323.574-73.27-18.222 1.165-34.122 73.656 20.938Zm0 0" />
      <path fill={forceColor ?? '#0000fa'} d="m94.586 600.809-4.457 30.246-23.067-36.45 5.43-30.437Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m460.148 446.488-41.48 6.98-.387 26.368 43.61-8.34Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m497.945 183.988-82.96-17.062.386-33.735 81.602 19.196Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m578.77 237.883-80.633-19.774-.192-34.12 80.051 21.906Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m356.254 477.895-18.024 17.062-8.14 30.242 20.738-18.222Zm0 0" />
      <path fill={forceColor ?? 'navy'} d="M201.191 683.203v28.305l-29.265-9.305 1.16-28.887Zm0 0" />
      <path fill={forceColor ?? '#006cff'} d="M614.047 497.281h-45.742l7.75 9.5 47.297-.191Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m124.047 206.863-48.649 18.032 4.07-45.754 47.876-16.48Zm0 0" />
      <path fill={forceColor ?? '#19ffde'} d="m705.535 400.152-61.445-15.316 4.07-30.047 62.028 18.027Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m186.848 153.16-59.504 9.5 6.203-40.71L191.5 114Zm0 0" />
      <path fill={forceColor ?? '#0024ff'} d="m72.492 564.168-5.43 30.437-20.156-41.293 6.203-30.632Zm0 0" />
      <path fill={forceColor ?? '#0094ff'} d="m555.703 465.102-46.906 1.55 4.265 19.192 48.458-2.52Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m505.309 443-45.16 3.488 1.742 25.008 46.906-4.844Zm0 0" />
      <path fill={forceColor ?? '#ffb200'} d="m334.934 120.012-75.594-6.594 4.46-33.152 73.653 8.144Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m48.457 397.438-23.262 31.41-7.945-50.02 24.035-31.02Zm0 0" />
      <path fill={forceColor ?? '#0000f1'} d="m299.27 594.992.386 24.621-20.933 20.164 2.52-25.785Zm0 0" />
      <path fill={forceColor ?? '#ffbd00'} d="m415.371 133.191-80.437-13.18 2.328-31.6 78.5 14.925Zm0 0" />
      <path fill={forceColor ?? '#0020ff'} d="m318.457 545.945-3.293 22.68-15.894 26.367 6.394-23.844Zm0 0" />
      <path fill={forceColor ?? '#8dff6a'} d="M652.426 291.973 578.77 271.23v-33.347l73.656 23.265Zm0 0" />
      <path fill={forceColor ?? '#006cff'} d="m695.648 512.016-41.867-4.457 10.274-8.727 43.03 6.012Zm0 0" />
      <path fill={forceColor ?? '#0078ff'} d="m707.086 504.844-43.031-6.012 9.886-12.793 44.192 7.754Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m74.621 272.586-36.633 25.398.969-48.855 36.441-24.43Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m684.02 515.117-40.704-3.488 10.465-4.07 41.867 4.457Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m718.133 493.793-44.192-7.754 9.301-16.867 45.356 9.887Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="M259.34 113.418 191.5 114l6.59-34.898 65.71 1.164Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m419.055 422.64-33.532 8.919-2.132 32.378 35.277-10.468Zm0 0" />
      <path fill={forceColor ?? '#000084'} d="m228.91 685.145 1.164 27.914-28.883-1.551v-28.305Zm0 0" />
      <path fill={forceColor ?? '#00b'} d="m278.723 639.777 2.714 25.785-25.39 13.57-.195-26.753Zm0 0" />
      <path fill={forceColor ?? '#0084ff'} d="m605.906 483.71-44.386-.386 6.785 13.957h45.742Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m338.23 494.957-8.918 19.578-10.855 31.602 11.633-20.938Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="M710.188 372.816 648.16 354.79l2.715-31.215 62.605 20.746Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m458.984 417.406-39.93 5.235-.386 30.828 41.48-6.98Zm0 0" />
      <path fill={forceColor ?? '#0064ff'} d="m53.11 522.68-6.204 30.633L30.43 507.75l6.785-30.629Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m672.777 514.148-39.734-2.714 10.273.195 40.704 3.488Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m385.523 431.559-25.003 12.214-4.266 34.122 27.137-13.766Zm0 0" />
      <path fill={forceColor ?? '#00a4ff'} d="m728.598 479.059-45.356-9.887 8.531-20.164 46.325 12.215Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m577.996 205.895-80.05-21.907-.973-31.601 79.082 23.847Zm0 0" />
      <path fill={forceColor ?? '#ffc800'} d="M496.973 152.387 415.37 133.19l.39-29.855 79.856 20.746Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m550.86 442.805-45.551.195 3.488 23.652 46.906-1.55Zm0 0" />
      <path fill={forceColor ?? '#0074ff'} d="m661.73 508.914-38.378-2.324 9.691 4.844 39.734 2.714Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m738.098 461.223-46.325-12.215 7.364-23.262 47.101 14.73Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m502.79 415.664-43.806 1.742 1.164 29.082 45.16-3.488Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m360.52 443.773-15.895 15.512-6.395 35.672 18.024-17.062Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="m652.426 261.148-73.656-23.265-.97-31.988 73.266 25.59Zm0 0" />
      <path fill={forceColor ?? '#00a4ff'} d="m598.734 466.262-43.03-1.16 5.816 18.222 44.386.387Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m713.48 344.32-62.605-20.746 1.55-31.406 62.802 23.266Zm0 0" />
      <path fill={forceColor ?? '#000096'} d="m256.047 679.133 2.133 27.336-28.106 6.59-1.164-27.914Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m41.285 347.809-24.035 31.02-3.684-50.407 24.422-30.438Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m127.344 162.66-47.875 16.48 7.754-42.07 46.324-15.12Zm0 0" />
      <path fill={forceColor ?? '#ff7a00'} d="M337.262 88.41 263.8 80.266l5.812-28.11 70.746 9.5Zm0 0" />
      <path fill={forceColor ?? '#ff9c00'} d="m191.5 114-57.953 7.95 8.914-36.255 55.629-6.593Zm0 0" />
      <path fill={forceColor ?? '#ff8900'} d="M415.762 103.336 337.453 88.41l2.906-26.754 75.79 16.285Zm0 0" />
      <path fill={forceColor ?? '#0084ff'} d="m651.648 499.61-37.601-2.329 9.305 9.309 38.378 2.324Zm0 0" />
      <path fill={forceColor ?? '#00009f'} d="m143.238 685.531 3.293 26.754-27.328-23.847-3.488-26.946Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m746.238 440.477-46.906-14.73 6.203-25.595 47.68 17.063Zm0 0" />
      <path fill={forceColor ?? '#0000c8'} d="m115.715 661.492 3.488 26.946L93.617 658l-3.488-26.945Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m315.164 568.625 3.102 23.652-18.61 27.336-.386-24.62Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m37.215 477.121-6.785 30.824-12.598-48.468 7.363-30.63Zm0 0" />
      <path fill={forceColor ?? '#000089'} d="m171.926 702.203 3.293 26.95-28.688-16.868-3.293-26.754Zm0 0" />
      <path fill={forceColor ?? '#005cff'} d="m329.313 514.535-.97 21.52-13.179 32.57 3.293-22.488Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m419.25 387.938-32.176 6.98-1.55 36.64 33.53-8.917Zm0 0" />
      <path fill={forceColor ?? '#0000ed'} d="m299.656 619.613 5.235 24.625-23.454 21.324-2.714-25.785Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m576.055 176.234-79.082-23.847-1.356-28.305 77.531 25.59Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m458.207 384.836-38.957 3.101-.195 34.704 39.93-5.235Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m75.398 224.7-36.441 24.429 4.848-46.918 35.664-23.07Zm0 0" />
      <path fill={forceColor ?? '#0000fa'} d="M90.129 631.055 93.617 658l-23.066-36.254-3.489-27.14Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m547.176 417.215-44.387-1.55L505.31 443l45.55-.195Zm0 0" />
      <path fill={forceColor ?? '#ff6f00'} d="m263.8 80.266-65.71-1.164 8.531-29.274 62.992 2.328Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m495.617 124.082-79.855-20.746.386-25.395 77.727 22.102Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m387.074 394.918-23.648 10.277-2.906 38.578 25.003-12.214Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m642.348 486.621-36.442-2.91 8.14 13.57 37.411 2.328Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m344.625 459.285-6.977 18.223-8.336 37.027 8.918-19.578Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m592.727 445.324-41.868-2.52 4.844 22.298 43.031 1.16Zm0 0" />
      <path fill={forceColor ?? '#1fffd7'} d="m753.215 417.215-47.68-17.063 4.653-27.336 48.261 19.582Zm0 0" />
      <path fill={forceColor ?? 'navy'} d="m201 711.508 3.293 26.949-29.074-9.305-3.293-26.949Zm0 0" />
      <path fill={forceColor ?? '#8dff6a'} d="m715.227 315.434-62.801-23.266v-31.02l62.8 25.786Zm0 0" />
      <path fill={forceColor ?? '#e1ff16'} d="m651.066 231.484-73.07-25.59-1.941-29.66 72.3 27.528Zm0 0" />
      <path fill={forceColor ?? '#23ffd4'} d="m501.238 385.227-43.031-.391.777 32.57 43.805-1.742Zm0 0" />
      <path fill={forceColor ?? '#0024ff'} d="m67.063 594.605 3.488 27.141-20.156-41.293-3.489-27.14Zm0 0" />
      <path fill={forceColor ?? '#0084ff'} d="m724.14 518.61-28.492-6.594 11.438-7.172 29.074 7.949Zm0 0" />
      <path fill={forceColor ?? '#00b'} d="m281.438 665.563 3.292 26.753-26.55 14.153-2.133-27.336Zm0 0" />
      <path fill={forceColor ?? '#0080ff'} d="m711.93 520.547-27.91-5.43 11.628-3.101 28.493 6.593Zm0 0" />
      <path fill={forceColor ?? '#0090ff'} d="m736.16 512.793-29.074-7.95 11.047-11.05 29.847 9.5Zm0 0" />
      <path fill={forceColor ?? '#0084ff'} d="m699.914 518.996-27.137-4.848 11.243.97 27.91 5.429Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m747.98 503.293-29.847-9.5 10.465-14.734 30.238 11.437Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m363.426 405.195-14.535 13.762-4.266 40.328 15.895-15.512Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m25.195 428.848-7.363 30.629-8.336-50.016 7.754-30.633Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m634.398 470.14-35.664-3.878 7.172 17.449 36.442 2.91Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="M416.148 77.941 340.36 61.656l3.493-21.133 72.878 17.254Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m758.45 392.398-48.263-19.582 3.293-28.496 48.653 22.098Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m37.988 297.984-24.422 30.438.97-49.824 24.421-29.47Zm0 0" />
      <path fill={forceColor ?? '#000084'} d="m230.074 713.059 3.293 26.949-29.074-1.551-3.102-26.95Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m340.36 61.656-70.747-9.5 6.59-22.297 67.649 10.664Zm0 0" />
      <path fill={forceColor ?? '#ffab00'} d="m573.148 149.672-77.53-25.59-1.743-24.039 75.59 26.945Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m688.281 513.375-26.55-4.46 11.046 5.233 27.137 4.848Zm0 0" />
      <path fill={forceColor ?? '#2cffca'} d="m544.852 388.91-43.614-3.683 1.551 30.437 44.387 1.55Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m758.836 490.496-30.238-11.437 9.5-17.836 30.816 13.375Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m133.547 121.95-46.324 15.12 10.851-37.61 44.387-13.765Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m198.09 79.102-55.63 6.593 11.243-30.824 52.918-5.043Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m588.46 421.48-41.284-4.265 3.683 25.59 41.868 2.52Zm0 0" />
      <path fill={forceColor ?? '#50ffa7'} d="m458.016 349.555-38.38.968-.386 37.414 38.957-3.101Zm0 0" />
      <path fill={forceColor ?? '#4dffaa'} d="m419.637 350.523-31.594 4.457-.969 39.938 32.176-6.98Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m715.227 286.934-62.801-25.786-1.36-29.664 62.414 27.918Zm0 0" />
      <path fill={forceColor ?? '#0058ff'} d="m328.344 536.055 5.426 22.492-15.504 33.73-3.102-23.652Zm0 0" />
      <path fill={forceColor ?? '#ff6f00'} d="m493.875 100.043-77.727-22.102.582-20.164 75.012 23.266Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m46.906 553.313 3.489 27.14-16.477-45.172-3.488-27.531Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m648.355 203.762-72.3-27.528-2.907-26.562 71.137 29.273Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m318.266 592.277 7.171 23.653-20.546 28.308-5.235-24.625Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m337.648 477.508 1.16 20.164-10.464 38.383.969-21.52Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m677.621 504.262-26.164-4.457 10.273 9.11 26.551 4.46Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m500.656 352.46-42.64-2.714.191 35.09 43.031.39Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m768.914 474.598-30.816-13.375 8.14-20.746 31.207 15.511Zm0 0" />
      <path fill={forceColor ?? '#ff3f00'} d="m269.613 52.156-62.992-2.328 10.27-23.266 59.312 3.297Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m79.469 179.14-35.664 23.07 8.914-43.233 34.504-21.907Zm0 0" />
      <path fill={forceColor ?? '#49ffad'} d="m388.043 354.98-23.066 8.336-1.551 41.88 23.648-10.278Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m627.809 450.559-35.082-5.235 6.007 20.938 35.664 3.879Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="M762.133 366.418 713.48 344.32l1.747-28.886 48.648 24.62Zm0 0" />
      <path fill={forceColor ?? '#09f0ee'} d="m348.89 418.957-5.43 16.676-5.812 41.875 6.977-18.223Zm0 0" />
      <path fill={forceColor ?? '#00009b'} d="m258.18 706.664 3.097 26.945-27.91 6.399-3.293-26.95Zm0 0" />
      <path fill={forceColor ?? '#0000e8'} d="m304.89 644.238 4.266 26.364-24.426 21.714-3.293-26.754Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m667.738 491.66-25.39-5.039 9.3 12.988 25.973 4.653Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m777.445 455.988-31.207-15.511 6.977-23.262 31.594 18.027Zm0 0" />
      <path fill={forceColor ?? '#33ffc4'} d="m585.555 395.305-40.703-6.395 2.324 28.305 41.285 4.265Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m543.883 358.473-43.418-6.012.773 32.766 43.614 3.683Zm0 0" />
      <path fill={forceColor ?? '#ff3b00'} d="m416.73 57.777-72.878-17.254 3.875-14.93 69.39 18.032Zm0 0" />
      <path fill={forceColor ?? '#0000a8'} d="m146.531 712.285 5.235 24.235-27.137-23.653-5.426-24.43Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m713.48 259.402-62.414-27.918-2.71-27.722 61.832 30.05Zm0 0" />
      <path fill={forceColor ?? '#ff8600'} d="m569.465 126.988-75.59-26.945-2.133-19 73.266 27.918Zm0 0" />
      <path fill={forceColor ?? '#0000cd'} d="m119.203 688.438 5.426 24.43-25.39-30.247L93.616 658Zm0 0" />
      <g clipPath="url(#a)">
        <path fill={forceColor ?? '#53ffa4'} d="m17.25 378.828-7.754 30.633-3.684-50.797 7.754-30.242Zm0 0" />
      </g>
      <path fill={forceColor ?? '#46ffb1'} d="m364.977 363.316-13.762 11.829-2.324 43.812 14.535-13.762Zm0 0" />
      <path fill={forceColor ?? '#ff2900'} d="M343.852 40.523 276.203 29.86l7.754-15.507 63.77 11.242Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m30.43 507.75 3.488 27.531-12.598-48.273-3.488-27.531Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m458.402 312.719-38.57-1.746-.195 39.55 38.379-.777Zm0 0" />
      <path fill={forceColor ?? '#000092'} d="m175.219 729.152 4.847 24.04-28.3-16.672-5.235-24.235Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m644.285 178.945-71.137-29.273-3.683-22.684 69.586 30.633Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m419.832 310.973-31.789 2.132v41.875l31.594-4.457Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m622.965 428.266-34.504-6.786 4.266 24.04 35.082 5.039Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="M491.742 81.043 416.73 57.777l.387-14.152 71.91 23.652Zm0 0" />
      <path fill={forceColor ?? '#8aff6d'} d="m763.875 340.055-48.648-24.621v-28.5l48.648 26.945Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m38.957 249.129-24.422 29.469 5.621-47.5 23.649-28.887Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m93.617 658 5.621 24.621-22.87-35.863-5.817-25.012Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m659.402 475.957-25.004-5.816 7.95 16.48 25.39 5.04Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m501.043 318.145-42.64-5.426-.387 36.836 42.449 2.906Zm0 0" />
      <path fill={forceColor ?? '#29ffce'} d="m784.809 435.242-31.594-18.027 5.234-24.817 31.98 20.551Zm0 0" />
      <path fill={forceColor ?? '#ff3000'} d="m206.621 49.828-52.918 5.043 13.57-24.234 49.426-4.075Zm0 0" />
      <path fill={forceColor ?? '#ff5900'} d="M142.46 85.695 98.075 99.461l13.957-31.988 41.672-12.602Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m724.723 527.719-12.793-7.172 12.21-1.938 12.989 7.95Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m737.129 526.559-12.988-7.95 12.02-5.816 13.179 9.11Zm0 0" />
      <path fill={forceColor ?? '#000084'} d="m204.293 738.457 4.652 23.848-28.879-9.114-4.847-24.039Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m712.316 525.395-12.402-6.399 12.016 1.55 12.793 7.173Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m388.043 313.105-23.066 6.012v44.2l23.066-8.337Zm0 0" />
      <path fill={forceColor ?? '#00a4ff'} d="m749.34 521.902-13.18-9.109 11.82-9.5 13.184 10.664Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m338.809 497.672 6.98 21.324-12.02 39.55-5.425-22.491Zm0 0" />
      <path fill={forceColor ?? '#00b'} d="m284.73 692.316 3.102 27.141-26.36 14.152-3.292-26.945Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m333.77 558.547 8.918 22.68-17.25 34.703-7.172-23.653Zm0 0" />
      <path fill={forceColor ?? '#ff1600'} d="M276.203 29.86 216.7 26.562l11.63-16.477 55.628 4.266Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m584.39 367.195-40.507-8.722.969 30.437 40.703 6.395Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m700.688 519.578-12.407-6.203 11.633 5.621 12.402 6.399Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m70.55 621.746 5.817 25.012-19.77-40.715-6.202-25.59Zm0 0" />
      <path fill={forceColor ?? '#06ecf1'} d="m343.46 435.633 2.52 18.805-7.171 43.234-1.16-20.164Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m710.188 233.813-61.833-30.051-4.07-24.817 60.86 31.602Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m544.46 326.871-43.417-8.726-.578 34.316 43.418 6.012Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m761.164 513.957-13.184-10.664 10.856-12.797 13.57 12.215Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m652.426 457.734-24.617-7.175 6.59 19.582 25.003 5.816Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m565.008 108.96-73.266-27.917-2.715-13.766 70.746 28.5Zm0 0" />
      <path fill={forceColor ?? '#ff9100'} d="m87.223 137.07-34.504 21.907 12.601-38.965L98.074 99.46Zm0 0" />
      <path fill={forceColor ?? '#46ffb1'} d="m790.238 412.95-31.789-20.552 3.684-25.98 31.98 22.879Zm0 0" />
      <path fill={forceColor ?? '#39ffbe'} d="m619.668 404.031-34.113-8.726 2.906 26.175 34.504 6.786Zm0 0" />
      <path fill={forceColor ?? '#f20'} d="m417.117 43.625-69.39-18.031 4.265-8.14L417.7 35.675Zm0 0" />
      <path fill={forceColor ?? '#adff49'} d="m763.875 313.879-48.648-27.14-1.747-27.337 48.457 29.082Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m351.215 375.145-4.844 14.925-2.91 45.563 5.43-16.676Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m689.64 510.66-12.019-6.398 10.66 9.113 12.407 6.203Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m639.05 157.621-69.585-30.633-4.457-18.027 67.84 31.406Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m325.438 615.93 5.039 25.785-21.32 28.887-4.266-26.364Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m459.18 275.105-39.157-4.457-.191 40.325 38.57 1.746Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m772.406 502.71-13.57-12.214 10.078-15.898 13.57 14.156Zm0 0" />
      <path fill={forceColor ?? '#00008d'} d="m233.367 740.008 4.266 23.847-28.688-1.55-4.652-23.848Zm0 0" />
      <path fill={forceColor ?? '#ff3800'} d="m489.027 67.277-71.91-23.652.582-7.95 68.422 23.653Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m17.832 459.477 3.488 27.53-8.14-49.823-3.684-27.723Zm0 0" />
      <path fill={forceColor ?? '#adff49'} d="m502.402 283.441-43.222-8.336-.778 37.614 42.641 5.426Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="m420.023 270.648-32.562-.582.582 43.04 31.789-2.133Zm0 0" />
      <path fill={forceColor ?? '#f60b00'} d="m347.727 25.594-63.77-11.242 8.336-8.532 59.7 11.633Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m364.977 319.117-13.762 9.692v46.336l13.762-11.829Zm0 0" />
      <g clipPath="url(#b)">
        <path fill={forceColor ?? '#97ff60'} d="m13.566 328.422-7.754 30.242.97-50.02 7.753-29.855Zm0 0" />
      </g>
      <path fill={forceColor ?? '#00c0ff'} d="m679.754 498.445-12.016-6.785 9.883 12.602 12.02 6.398Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m50.395 580.453 6.203 25.59-16.282-44.781-6.398-25.98Zm0 0" />
      <path fill={forceColor ?? '#1fffd7'} d="m647.191 436.988-24.226-8.722 4.844 22.293 24.617 7.175Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m782.484 488.754-13.761-14.156 8.722-18.61 13.762 16.285Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="M584.973 338.309 544.46 326.87l-.578 31.602 40.508 8.722Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m794.113 389.297-31.98-22.879 1.742-26.363 31.984 25.007Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m705.145 210.547-60.86-31.602-5.234-21.324 59.699 32.957Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m546.402 294.883-44-11.442-1.359 34.704 43.418 8.726Zm0 0" />
      <path fill={forceColor ?? '#baff3c'} d="m387.46 270.066-23.839 3.684 1.356 45.367 23.066-6.012Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m618.313 378.246-33.922-11.05 1.164 28.109 34.113 8.726Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m559.773 95.777-70.746-28.5-2.906-7.949 68.031 28.5Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m43.805 202.21-23.649 28.888 9.887-44.395 22.676-27.726Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m761.938 288.484-48.458-29.082-3.293-25.59 47.875 31.02Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m216.89 26.563-49.617 4.074 15.313-17.254 45.742-3.297Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m671.227 483.52-11.825-7.563 8.336 15.703 12.016 6.785Zm0 0" />
      <path fill={forceColor ?? '#0000ed'} d="m309.156 670.602 2.906 27.144-24.23 21.711-3.102-27.14Zm0 0" />
      <path fill={forceColor ?? '#ff7a00'} d="m632.656 140.367-67.648-31.406-5.235-13.184 65.711 31.989Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="m283.957 14.352-55.629-4.266 12.598-8.918 51.367 4.652Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m460.535 237.691-40.512-7.367v40.324l39.157 4.457Zm0 0" />
      <path fill={forceColor ?? '#fa0f00'} d="m417.7 35.676-65.708-18.223 4.457-1.164 61.637 17.836Zm0 0" />
      <path fill={forceColor ?? '#ff2500'} d="m153.703 54.871-41.672 12.602 16.477-25.399 38.765-11.437Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m791.207 472.273-13.762-16.285 7.364-20.746 13.761 18.227Zm0 0" />
      <path fill={forceColor ?? '#00009f'} d="m261.473 733.61 3.875 24.042-27.715 6.203-4.266-23.847Zm0 0" />
      <path fill={forceColor ?? '#ff2500'} d="M486.121 59.328 417.7 35.676l.387-1.551 64.934 23.457Zm0 0" />
      <path fill={forceColor ?? '#dbff1c'} d="m504.922 248.934-44.387-11.243-1.355 37.414 43.222 8.336Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m420.023 230.324-33.918-3.105 1.356 42.847 32.562.582Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m345.98 454.438 8.141 20.16-8.332 44.398-6.98-21.324Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m643.895 414.5-24.227-10.469 3.297 24.235 24.226 8.722Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m345.79 518.996 10.464 21.715-13.567 40.516-8.917-22.68Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m346.371 390.07 3.102 17.45-3.493 46.918-2.52-18.805Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="M351.992 17.453 292.293 5.82l8.914-1.164 55.242 11.633Zm0 0" />
      <path fill={forceColor ?? '#0000b2'} d="m151.766 736.52 5.039 20.16-26.555-23.262-5.621-20.55Zm0 0" />
      <path fill={forceColor ?? '#8aff6d'} d="m795.86 365.063-31.985-25.008v-26.176l31.984 27.336Zm0 0" />
      <path fill={forceColor ?? '#0000da'} d="m124.629 712.867 5.43 20.551-24.618-29.469-6.203-21.328Zm0 0" />
      <path fill={forceColor ?? '#a7ff50'} d="m587.105 309.035-40.898-14.152-1.746 31.988 40.512 11.438Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m351.215 328.809-4.844 13.183v48.078l4.844-14.925Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m664.055 466.262-11.63-8.528 6.977 18.223 11.825 7.563Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m721.04 536.055 3.487-8.336 12.602-1.16-3.684 9.109Zm0 0" />
      <path fill={forceColor ?? '#ffab00'} d="m698.75 190.578-59.7-32.957-6.394-17.254 58.535 33.735Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m33.918 535.281 6.398 25.98-12.406-47.5-6.59-26.753Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m549.504 263.281-44.582-14.347-2.52 34.507 43.805 11.442Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m709.023 533.148 3.293-7.753 12.211 2.324-3.488 8.336Zm0 0" />
      <path fill={forceColor ?? '#f50'} d="M98.074 99.46 65.32 120.013l16.282-33.153 30.43-19.386Zm0 0" />
      <g clipPath="url(#c)">
        <path fill={forceColor ?? '#53ffa4'} d="m9.496 409.46 3.684 27.724-3.684-50.602-3.684-27.918Zm0 0" />
      </g>
      <path fill={forceColor ?? '#00009b'} d="m180.066 753.191 4.457 19.774-27.718-16.285-5.04-20.16Zm0 0" />
      <path fill={forceColor ?? '#ff3f00'} d="m554.152 87.828-68.03-28.5-3.102-1.746 64.933 28.113Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m733.445 535.668 3.684-9.11 12.21-4.656-3.878 10.082Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m363.621 273.75-14.73 7.754 2.324 47.305 13.762-9.692Zm0 0" />
      <path fill={forceColor ?? '#0050ff'} d="m342.688 581.227 5.816 25.203-18.027 35.285-5.04-25.785Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m618.89 351.879-33.917-13.57-.582 28.886 33.922 11.051Zm0 0" />
      <path fill={forceColor ?? '#30ffc7'} d="m798.57 453.469-13.761-18.227 5.43-22.293 13.952 20.356Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m758.063 264.832-47.875-31.02-5.043-23.265 47.488 32.766Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m697.395 527.137 3.293-7.559 11.628 5.817-3.293 7.753Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m99.238 682.621 6.008 21.328-22.289-35.285-6.59-21.906Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m625.484 127.766-65.71-31.989-5.622-7.949 63.383 31.988Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m745.656 531.984 3.684-10.082 11.824-7.945-3.879 11.242Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m462.277 201.629-42.254-10.082v38.777l40.512 7.367Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m386.105 227.219-25.39 1.36 2.71 45.171 24.036-3.684Zm0 0" />
      <path fill={forceColor ?? '#ed0400'} d="m418.086 34.125-61.637-17.836 4.653 5.816 57.37 17.254Zm0 0" />
      <path fill={forceColor ?? '#ff1e00'} d="m483.02 57.582-64.934-23.457.387 5.234 61.25 22.684Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m508.215 215.781-45.938-14.152-1.742 36.062 44.387 11.243Zm0 0" />
      <path fill={forceColor ?? '#00c0ff'} d="m686.54 518.219 3.1-7.559 11.048 8.918-3.293 7.754Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m14.535 278.598-7.754 30.047 5.817-47.883 7.558-29.664Zm0 0" />
      <path fill={forceColor ?? '#000092'} d="m208.945 762.305 3.875 19.773-28.297-9.113-4.457-19.774Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m420.023 191.547-35.855-5.817 1.937 41.489 33.918 3.105Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m757.285 525.2 3.88-11.243 11.046-11.246-4.07 12.797Zm0 0" />
      <path fill={forceColor ?? '#5dff9a'} d="m642.348 390.848-24.035-12.602 1.355 25.785 24.227 10.469Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m658.82 447.07-11.629-10.082 5.235 20.746 11.824 8.528Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m795.86 341.215-31.985-27.336-1.938-25.395 31.79 29.274Zm0 0" />
      <g clipPath="url(#d)">
        <path fill={forceColor ?? '#c80000'} d="m292.293 5.82-51.367-4.652L254.3.004l46.906 4.652Zm0 0" />
      </g>
      <path fill={forceColor ?? '#0000c4'} d="m287.832 719.457 3.684 24.234-26.168 13.961-4.07-24.043Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m676.652 506.59 3.102-8.145 9.887 12.215-3.102 7.559Zm0 0" />
      <path fill={forceColor ?? '#cd0000'} d="m228.328 10.086-45.742 3.297 16.668-9.5 41.672-2.715Zm0 0" />
      <path fill={forceColor ?? '#ceff29'} d="m591.176 280.34-41.672-17.059-3.297 31.602 40.898 14.152Zm0 0" />
      <path fill={forceColor ?? '#ff3800'} d="M547.953 85.695 483.02 57.582l-3.102 4.461 61.637 27.14Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m554.152 233.035-45.937-17.254-3.293 33.153 44.582 14.347Zm0 0" />
      <path fill={forceColor ?? '#4dffaa'} d="m804.191 433.305-13.761-20.356 3.683-23.652 13.762 22.488Zm0 0" />
      <path fill={forceColor ?? '#0030ff'} d="m76.367 646.758 6.59 21.906-19.383-39.937-6.976-22.684Zm0 0" />
      <path fill={forceColor ?? '#d10000'} d="M356.45 16.29 301.206 4.655l9.11 6.399 50.785 11.05Zm0 0" />
      <path fill={forceColor ?? '#ff9100'} d="m691.191 174.102-58.343-33.735-7.364-12.601 56.79 34.12Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m330.477 641.715 3.101 27.336-21.32 28.695-3.102-27.144Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m464.605 167.895-44.582-12.989v36.64l42.254 10.083Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m768.336 515.508 4.07-12.797 10.078-13.957-4.265 14.539Zm0 0" />
      <path fill={forceColor ?? '#a4ff53'} d="m621.414 325.125-34.309-16.09-2.132 29.274 33.918 13.57Zm0 0" />
      <path fill={forceColor ?? '#f50'} d="m617.535 119.816-63.383-31.988-6.199-2.133 61.055 31.602Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m752.633 243.313-47.488-32.766-6.395-19.969 46.71 33.93Zm0 0" />
      <path fill={forceColor ?? '#ff1e00'} d="m479.918 62.043-61.445-22.684.39 11.828 57.758 21.325Zm0 0" />
      <path fill={forceColor ?? '#ff8d00'} d="m52.719 158.977-22.676 27.726 14.148-39.746 21.13-26.945Zm0 0" />
      <path fill={forceColor ?? '#ffb600'} d="m512.48 184.762-47.875-16.867-2.328 33.734 45.938 14.152Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m418.473 39.36-57.371-17.255 4.652 12.989 53.11 16.093Zm0 0" />
      <path fill={forceColor ?? '#e40000'} d="m167.273 30.637-38.765 11.437L147.5 23.852l35.086-10.47Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m668.32 492.242 2.907-8.722 8.527 14.925-3.102 8.145Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m384.168 185.73-27.719-1.16 4.266 43.813 25.39-1.164Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m420.023 154.906-38.57-8.336 2.715 39.16 35.855 5.817Zm0 0" />
      <path fill={forceColor ?? '#000096'} d="m237.633 763.855 3.293 19.774-28.106-1.55-3.875-19.774Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m360.715 228.383-16.285 5.625 4.46 47.496 14.731-7.754Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="M655.332 426.324 643.895 414.5l3.296 22.488 11.63 10.082Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m21.32 487.008 6.59 26.754-8.14-49.242-6.59-27.336Zm0 0" />
      <path fill={forceColor ?? '#ff3800'} d="m541.555 89.184-61.832-27.141-3.293 10.469 58.73 25.98Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m348.89 281.504-5.43 11.437 2.911 49.051 4.844-13.183Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m642.926 366.809-24.035-14.93-.578 26.367 24.035 12.602Zm0 0" />
      <path fill={forceColor ?? '#ff7e00'} d="m467.125 137.266-47.293-15.512.191 33.152 44.582 12.989Zm0 0" />
      <path fill={forceColor ?? '#09f0ee'} d="m778.219 503.293 4.265-14.54 8.723-16.48-4.266 16.09Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m346.371 342.188 3.102 15.894v49.438l-3.102-17.45Zm0 0" />
      <path fill={forceColor ?? '#ffc400'} d="m559.969 204.926-47.489-20.164-4.265 31.02 45.937 17.253Zm0 0" />
      <path fill={forceColor ?? '#ff2900'} d="m476.621 72.512-57.758-21.325.387 18.028 54.078 19.777Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m349.473 407.52 8.914 19.195-4.266 48.078-8.14-20.356Zm0 0" />
      <path fill={forceColor ?? '#ff9100'} d="m517.328 156.844-50.008-19.578-2.715 30.629 47.875 16.867Zm0 0" />
      <path fill={forceColor ?? '#caff2c'} d="m793.727 317.758-31.79-29.274-3.875-23.652 31.594 31.02Zm0 0" />
      <g clipPath="url(#e)">
        <path fill={forceColor ?? '#6aff8d'} d="m807.875 411.785-13.762-22.488 1.746-24.04 13.953 24.427Zm0 0" />
      </g>
      <path fill={forceColor ?? '#f1fc06'} d="m596.602 253.004-42.45-19.969-4.648 30.246 41.672 17.059Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m354.121 474.793 11.242 20.746-9.11 45.172-10.464-21.715Zm0 0" />
      <path fill={forceColor ?? '#ff7a00'} d="m682.273 161.887-56.789-34.121-7.949-7.95 55.242 34.317Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m609.008 117.297-61.055-31.602-6.398 3.489 58.535 30.828Zm0 0" />
      <path fill={forceColor ?? '#ff1300'} d="m418.863 51.188-53.11-16.094 4.458 19.386 49.039 14.735Zm0 0" />
      <path fill={forceColor ?? '#d60000'} d="m361.102 22.105-50.786-11.05 9.11 13.765 46.328 10.274Zm0 0" />
      <path fill={forceColor ?? '#ff5900'} d="m470.031 110.703-50.394-17.836.195 28.887 47.293 15.512Zm0 0" />
      <g clipPath="url(#f)">
        <path fill={forceColor ?? '#97ff60'} d="m5.813 358.664 3.683 27.918.969-49.629-3.684-28.308Zm0 0" />
      </g>
      <path fill={forceColor ?? '#ff3b00'} d="M473.328 88.992 419.25 69.215l.387 23.652 50.59 17.836Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m56.598 606.043 6.976 22.684-16.086-43.622-7.172-23.843Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m661.34 475.957 2.715-9.695 7.172 17.258-2.907 8.918Zm0 0" />
      <path fill={forceColor ?? '#ff4300'} d="m535.16 98.492-58.73-25.98-3.102 16.48 55.629 24.04Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m419.832 121.754-41.676-10.66 3.297 35.476 38.57 8.336Zm0 0" />
      <path fill={forceColor ?? '#ff6f00'} d="m522.95 132.613-52.723-21.91-2.907 26.563 50.008 19.578Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m625.676 299.148-34.5-18.808-4.07 28.695 34.308 16.09Zm0 0" />
      <path fill={forceColor ?? '#ff1e00'} d="m112.031 67.473-30.43 19.386 19.383-26.562 27.524-18.223Zm0 0" />
      <g clipPath="url(#g)">
        <path fill={forceColor ?? '#b00'} d="M301.207 4.656 254.301.004l13.762 6.59 42.253 4.46Zm0 0" />
      </g>
      <path fill={forceColor ?? '#ffbd00'} d="m745.46 224.508-46.71-33.93-7.559-16.476 45.547 34.894Zm0 0" />
      <path fill={forceColor ?? '#f50'} d="m528.957 113.031-55.629-24.039-3.101 21.711 52.722 21.91Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m356.254 540.71 6.203 24.813-13.953 40.907-5.817-25.203Zm0 0" />
      <path fill={forceColor ?? '#ff2900'} d="M419.25 69.215 370.21 54.48l4.071 25.594 45.356 12.793Zm0 0" />
      <path fill={forceColor ?? '#ff4700'} d="M419.637 92.867 374.28 80.074l3.875 31.02 41.676 10.66Zm0 0" />
      <path fill={forceColor ?? '#ffa300'} d="m566.754 179.723-49.426-22.88-4.848 27.919 47.489 20.164Zm0 0" />
      <path fill={forceColor ?? '#ff8900'} d="m381.453 146.57-30.625-3.488 5.621 41.488 27.719 1.16Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m786.941 488.363 4.266-16.09 7.363-18.804-4.457 18.027Zm0 0" />
      <path fill={forceColor ?? '#ff5200'} d="m600.09 120.012-58.535-30.828-6.395 9.308 56.207 29.274Zm0 0" />
      <path fill={forceColor ?? '#60ff97'} d="m653.977 404.418-11.63-13.57 1.548 23.652 11.437 11.633Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m689.832 542.262 19.191-9.114 12.016 2.907-19.574 9.5Zm0 0" />
      <g clipPath="url(#h)">
        <path fill={forceColor ?? '#b20000'} d="m240.926 1.168-41.672 2.715 17.832-1.551L254.3.004Zm0 0" />
      </g>
      <path fill={forceColor ?? '#00b8ff'} d="m701.465 545.555 19.574-9.5 12.406-.387-19.965 10.082Zm0 0" />
      <path fill={forceColor ?? '#0000f1'} d="m312.258 697.746 3.293 24.621-24.035 21.324-3.684-24.234Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m678.398 536.055 18.997-8.918 11.628 6.011-19.191 9.114Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m603.387 227.61-43.418-22.684-5.817 28.11 42.45 19.968Zm0 0" />
      <path fill={forceColor ?? '#a0ff56'} d="m645.64 342.574-24.226-17.449-2.523 26.754 24.035 14.734Zm0 0" />
      <path fill={forceColor ?? '#ff6f00'} d="m672.777 154.133-55.242-34.317-8.527-2.52 53.496 33.735Zm0 0" />
      <path fill={forceColor ?? '#e40000'} d="M365.754 35.094 319.426 24.82l8.722 20.742 42.063 8.918Zm0 0" />
      <path fill={forceColor ?? '#ff8200'} d="m574.313 158.008-51.364-25.203-5.62 24.039 49.425 22.879Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m20.156 231.098-7.558 29.664 10.273-44.785 7.172-29.274Zm0 0" />
      <path fill={forceColor ?? '#0000a8'} d="m265.348 757.652 2.91 19.97-27.332 6.007-3.293-19.774Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m356.45 184.57-18.415 3.489 6.395 45.949 16.285-5.625Zm0 0" />
      <path fill={forceColor ?? '#30ffc7'} d="m655.914 457.926 2.906-10.856 5.235 19.192-2.715 9.695Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m713.48 545.75 19.965-10.082 12.016-3.684-20.352 11.051Zm0 0" />
      <g clipPath="url(#i)">
        <path fill={forceColor ?? '#87ff70'} d="m809.813 389.684-13.954-24.426v-24.043l13.762 26.367Zm0 0" />
      </g>
      <path fill={forceColor ?? '#ff5900'} d="M591.367 127.766 535.16 98.492l-6.203 14.54 53.691 27.527Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m789.656 295.852-31.593-31.02-5.43-21.52 31.015 32.375Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m667.93 527.137 18.61-8.918 10.855 9.113-18.997 8.723Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m582.648 140.559-53.691-27.528-6.008 19.774 51.364 25.203Zm0 0" />
      <path fill={forceColor ?? '#ff5d00'} d="m378.156 111.094-33.918-5.625 6.59 37.613 30.625 3.488Zm0 0" />
      <path fill={forceColor ?? '#0000c4'} d="m156.805 756.68 3.488 15.316-25.973-22.488-4.07-16.09Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m631.684 274.523-35.082-21.52-5.426 27.337 34.5 18.808Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m725.11 543.035 20.35-11.05 11.825-6.786-20.738 12.215Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m736.738 208.996-45.547-34.894-8.918-12.215 44.774 35.285Zm0 0" />
      <path fill={forceColor ?? '#ff1300'} d="m370.21 54.48-42.062-8.917 8.336 27.144 37.797 7.367Zm0 0" />
      <path fill={forceColor ?? '#0000e8'} d="m130.25 733.418 4.07 16.09-24.035-28.692-4.844-16.867Zm0 0" />
      <path fill={forceColor ?? '#36ffc1'} d="m794.113 471.496 4.457-18.027 5.621-20.164-4.652 19.773Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m658.434 515.7 18.218-9.11 9.887 11.629-18.61 8.918Zm0 0" />
      <path fill={forceColor ?? '#ff3400'} d="m374.281 80.074-37.797-7.367 7.754 32.762 33.918 5.625Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m344.43 234.008-6.977 9.691 6.008 49.242 5.43-11.437Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m348.504 606.43 3.098 27.53-18.024 35.09-3.101-27.335Zm0 0" />
      <path fill={forceColor ?? '#b00'} d="M182.586 13.383 147.5 23.852l20.742-10.278 31.012-9.691Zm0 0" />
      <path fill={forceColor ?? '#bf0000'} d="m310.316 11.055-42.253-4.461 13.761 14.347 37.602 3.88Zm0 0" />
      <path fill={forceColor ?? '#ffb600'} d="m611.527 205.121-44.773-25.398-6.785 25.203 43.418 22.683Zm0 0" />
      <path fill={forceColor ?? '#ff6800'} d="m662.309 151.031-53.301-33.734-8.918 2.715 51.754 32.761Zm0 0" />
      <path fill={forceColor ?? '#0000ad'} d="m184.523 772.965 2.715 14.93-26.945-15.899-3.488-15.316Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m40.316 561.262 7.172 23.843-12.02-46.722-7.558-24.621Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m13.18 437.184 6.59 27.336-3.684-49.825-6.59-28.113Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m654.363 382.316-11.437-15.507-.578 24.039 11.629 13.57Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m65.32 120.012-21.129 26.945 18.22-34.312L81.6 86.859Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m736.547 537.414 20.738-12.215 10.856-9.5-20.934 13.184Zm0 0" />
      <path fill={forceColor ?? '#0004ff'} d="m105.441 703.95 4.844 16.866L88.578 686.5l-5.621-17.64Zm0 0" />
      <path fill={forceColor ?? '#49ffad'} d="m652.617 438.54 2.715-12.216 3.488 20.746-2.906 10.856Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m343.46 292.941 2.52 14.543 3.684 50.598-3.293-15.894Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m650.098 502.129 18.222-9.692 8.332 14.153-18.218 9.11Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m650.098 319.117-24.422-19.969-4.262 25.977 24.031 17.45Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m620.637 185.73-46.324-27.722-7.56 21.715 44.774 25.398Zm0 0" />
      <path fill={forceColor ?? '#ff7e00'} d="m350.828 143.082-21.32 1.742 8.527 43.235 18.414-3.489Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m651.844 152.773-51.754-32.761-8.723 7.754 49.817 31.601Zm0 0" />
      <g clipPath="url(#j)">
        <path fill={forceColor ?? '#a7ff50'} d="m809.621 367.582-13.762-26.367-2.132-23.457 13.566 28.305Zm0 0" />
      </g>
      <path fill={forceColor ?? '#ffea00'} d="m783.648 275.688-31.015-32.375-7.172-18.805 30.625 33.539Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m639.246 251.844-35.86-24.235-6.784 25.395 35.082 21.52Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m727.047 197.172-44.774-35.285-9.496-7.754 43.418 35.281Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m349.664 358.082 8.723 18.227v50.406l-8.914-19.195Zm0 0" />
    </>
  );
}

function DfxAssetIconCRV1({ forceColor }: BaseAssetIconProps) {
  return (
    <>
      <path fill={forceColor ?? '#ff8200'} d="m630.715 170.418-48.067-29.86-8.336 17.45 46.325 27.722Zm0 0" />
      <path fill={forceColor ?? '#ff7300'} d="m641.184 159.367-49.817-31.601-8.719 12.793 48.067 29.859Zm0 0" />
      <path fill={forceColor ?? '#0000a4'} d="m212.82 782.078 1.942 14.735-27.524-8.918-2.715-14.93Zm0 0" />
      <g clipPath="url(#k)">
        <path fill={forceColor ?? '#a40000'} d="m254.3.004-37.214 2.328 18.414 6.59 32.563-2.328Zm0 0" />
      </g>
      <path fill={forceColor ?? '#50ffa7'} d="m799.54 453.078 4.651-19.773 3.684-21.52-4.652 21.715Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m747.207 528.883 20.934-13.184 10.078-12.406-21.32 14.539Zm0 0" />
      <path fill={forceColor ?? '#cd0000'} d="m319.426 24.82-37.602-3.879L295.2 42.656l32.95 2.907Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m358.387 426.715 11.824 20.16-4.652 48.664-11.438-20.941Zm0 0" />
      <path fill={forceColor ?? '#1fffd7'} d="m643.316 486.426 18.024-10.469 6.98 16.48-18.222 9.692Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m6.781 308.645 3.684 28.308 5.816-47.887-3.683-28.304Zm0 0" />
      <path fill={forceColor ?? '#da0000'} d="m128.508 42.074-27.524 18.418 22.094-19.195L147.5 23.852Zm0 0" />
      <path fill={forceColor ?? '#0000cd'} d="m291.516 743.691 2.52 20.356-25.778 13.574-2.91-19.969Zm0 0" />
      <path fill={forceColor ?? '#003cff'} d="m82.957 668.86 5.621 17.64-18.996-38.773-6.008-18.805Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="M344.238 105.469h-24.812l10.082 39.355 21.32-1.55Zm0 0" />
      <path fill={forceColor ?? '#9dff5a'} d="m656.883 360.41-11.438-17.836-2.52 24.235 11.438 15.507Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m651.066 418.379 2.91-13.961 1.356 21.906-2.715 12.215Zm0 0" />
      <path fill={forceColor ?? '#e80000'} d="M328.148 45.563 295.2 42.656l12.598 28.305 28.687 1.746Zm0 0" />
      <path fill={forceColor ?? '#ffc400'} d="m648.355 231.68-36.828-26.559-8.14 22.488 35.86 24.235Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m338.035 188.059-9.11 8.144 8.528 47.496 6.977-9.691Zm0 0" />
      <path fill={forceColor ?? '#ff8600'} d="m716.195 189.414-43.418-35.281-10.273-3.102 42.254 34.7Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m656.3 296.82-24.616-22.297-6.008 24.625 24.422 19.97Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m365.363 495.54 6.785 24.62-9.691 45.363-6.203-24.812Zm0 0" />
      <path fill={forceColor ?? '#f20'} d="m336.484 72.707-28.687-1.746 11.629 34.508h24.812Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m333.578 669.05 3.293 25.013-21.32 28.304-3.293-24.62Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m776.086 258.047-30.625-33.54-8.723-15.51 30.239 34.315Zm0 0" />
      <path fill={forceColor ?? '#0ff8e7'} d="m756.898 517.832 21.32-14.539 8.723-14.93-21.707 16.094Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m807.293 346.063-13.566-28.305-4.07-21.906 13.374 29.855Zm0 0" />
      <path fill={forceColor ?? '#33ffc4'} d="m638.082 469.363 17.832-11.437 5.426 18.031-18.024 10.469Zm0 0" />
      <path fill={forceColor ?? '#0000a8'} d="m240.926 783.629 1.164 14.734-27.328-1.55-1.942-14.735Zm0 0" />
      <g clipPath="url(#l)">
        <path fill={forceColor ?? '#6aff8d'} d="m803.223 433.5 4.652-21.715 1.938-22.101-4.844 23.457Zm0 0" />
      </g>
      <path fill={forceColor ?? '#9f0000'} d="m199.254 3.883-31.012 9.691 21.903-1.937 26.94-9.305Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m655.719 552.535 34.113-10.273 11.633 3.293-34.504 10.664Zm0 0" />
      <path fill={forceColor ?? '#ffab00'} d="m658.434 214.813-37.797-29.083-9.11 19.391 36.828 26.559Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m645.059 546.137 33.34-10.082 11.433 6.207-34.113 10.273Zm0 0" />
      <path fill={forceColor ?? '#ff8200'} d="m704.758 185.73-42.45-34.699-10.464 1.742 41.09 33.93Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m27.91 513.762 7.559 24.62-7.946-48.273-7.753-25.59Zm0 0" />
      <path fill={forceColor ?? '#ff8d00'} d="m30.043 186.703-7.172 29.274 14.926-40.325 6.394-28.695Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m666.96 556.219 34.505-10.664 12.015.195-35.082 11.246Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m634.785 537.219 33.145-10.082 10.468 8.918-33.53 10.082Zm0 0" />
      <path fill={forceColor ?? '#a80000'} d="M268.063 6.594 235.5 8.922l18.414 14.539 27.91-2.52Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m337.453 243.7 1.164 13.57 7.363 50.214-2.52-14.543Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m669.48 201.242-38.765-30.824-10.078 15.312 37.797 29.083Zm0 0" />
      <path fill={forceColor ?? '#ff8200'} d="m692.934 186.703-41.09-33.93-10.66 6.594 39.93 32.57Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m651.457 398.02 2.906-15.704-.386 22.102-2.91 13.96Zm0 0" />
      <path fill={forceColor ?? '#baff3c'} d="m661.535 339.082-11.437-19.965-4.457 23.457 11.437 17.836Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m664.25 276.656-25.004-24.812-7.562 22.68L656.3 296.82Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m678.398 556.996 35.082-11.246 11.63-2.715-35.278 11.828Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m765.234 504.457 21.707-16.094 7.172-16.867-21.902 17.645Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m625.676 525.781 32.758-10.082 9.496 11.438-33.145 10.082Zm0 0" />
      <path fill={forceColor ?? '#0078ff'} d="m63.574 628.727 6.008 19-15.504-42.457-6.59-20.165Zm0 0" />
      <path fill={forceColor ?? '#ff8900'} d="m681.113 191.938-39.93-32.57-10.468 11.05 38.765 31.02Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m766.977 243.313-30.239-34.317-9.691-11.824 29.465 34.703Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m362.457 565.523 3.102 27.918-13.957 40.52-3.098-27.531Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m9.496 386.582 6.59 28.113 1.164-49.246-6.785-28.496Zm0 0" />
      <path fill={forceColor ?? '#ff7300'} d="m329.508 144.824-12.02 6.594 11.438 44.785 9.11-8.144Zm0 0" />
      <path fill={forceColor ?? '#4dffaa'} d="m634.785 451.14 17.832-12.6 3.297 19.386-17.832 11.437Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m803.031 325.707-13.375-29.855-6.008-20.164 13.372 31.214Zm0 0" />
      <path fill={forceColor ?? '#ff1a00'} d="M81.602 86.86 62.41 112.644l21.711-27.532 16.863-24.816Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m689.832 554.863 35.277-11.828 11.438-5.62-35.86 12.6Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m617.73 512.406 32.368-10.277 8.336 13.57-32.758 10.082Zm0 0" />
      <g clipPath="url(#m)">
        <path fill={forceColor ?? '#87ff70'} d="m804.969 413.14 4.843-23.456-.19-22.102-4.849 25.203Zm0 0" />
      </g>
      <path fill={forceColor ?? '#c4ff33'} d="m345.98 307.484 8.141 17.254 4.266 51.57-8.723-18.226Zm0 0" />
      <path fill={forceColor ?? '#b60000'} d="m281.824 20.941-27.91 2.52 17.832 22.297 23.453-3.102Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m673.746 258.82-25.39-27.14-9.11 20.164 25.004 24.812Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m756.512 231.875-29.657-34.703-10.66-7.758 29.075 34.703Zm0 0" />
      <path fill={forceColor ?? '#0000fa'} d="m315.55 722.367 1.938 20.742-23.453 20.938-2.52-20.356Zm0 0" />
      <path fill={forceColor ?? '#00b'} d="m268.258 777.621.387 14.734-26.555 6.008-1.164-14.734Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m772.21 489.14 21.903-17.644 5.426-18.418-22.094 19Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m700.688 550.016 35.859-12.602 10.66-8.531-36.441 13.765Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m667.738 319.117-11.437-22.297-6.203 22.297 11.437 19.965Zm0 0" />
      <path fill={forceColor ?? '#ff3f00'} d="m319.426 105.469-15.309 5.043 13.371 40.906 12.02-6.594Zm0 0" />
      <path fill={forceColor ?? '#9aff5d'} d="m653.977 377.86 3.101-17.45-2.715 21.906-2.906 15.704Zm0 0" />
      <path fill={forceColor ?? '#b20000'} d="m147.5 23.852-24.422 17.445 24.23-11.242 20.934-16.48Zm0 0" />
      <path fill={forceColor ?? '#0000d6'} d="m160.293 771.996 1.164 9.887-25.004-21.906-2.133-10.47Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m611.14 497.281 32.176-10.855 6.782 15.703-32.368 10.277Zm0 0" />
      <path fill={forceColor ?? '#0000fa'} d="m134.32 749.508 2.133 10.469-23.066-27.528-3.102-11.633Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m633.234 432.336 17.832-13.957 1.551 20.16-17.832 12.602Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m358.387 376.309 12.02 19.578-.196 50.988-11.824-20.16Zm0 0" />
      <path fill={forceColor ?? '#d60000'} d="m295.2 42.656-23.454 3.102L288.61 75.03l19.188-4.07Zm0 0" />
      <path fill={forceColor ?? '#960000'} d="m217.086 2.332-26.941 9.11 22.675 6.398 22.68-8.918Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m797.02 306.902-13.372-31.214-7.562-17.641 13.184 32.183Zm0 0" />
      <path fill={forceColor ?? '#ff1300'} d="m307.797 70.96-19.188 4.071 15.313 35.48 15.504-5.042Zm0 0" />
      <path fill={forceColor ?? '#0000bf'} d="m187.238 787.895.192 9.304-25.973-15.316-1.164-9.887Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m684.406 243.895-25.972-29.083-10.079 16.868 25.391 27.14Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m12.598 260.762 3.683 28.304 10.274-44.59-3.684-28.5Zm0 0" />
      <path fill={forceColor ?? '#ff9c00'} d="m745.27 224.117-29.075-34.703-11.437-3.684 28.3 34.512Zm0 0" />
      <g clipPath="url(#n)">
        <path fill={forceColor ?? '#a0ff56'} d="m804.773 392.785 4.848-25.203-2.328-21.52-4.844 26.754Zm0 0" />
      </g>
      <path fill={forceColor ?? '#ffab00'} d="m328.926 196.203-.969 12.211 10.66 48.664-1.164-13.379Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m110.285 720.816 2.91 11.633-20.933-32.96-3.684-12.989Zm0 0" />
      <path fill={forceColor ?? '#06ecf1'} d="m710.766 542.648 36.441-13.765 9.691-11.051-36.828 14.734Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m47.488 585.105 6.59 20.165-11.824-45.172-6.785-21.715Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m351.602 633.96 2.91 25.59-17.64 34.513-3.294-25.012Zm0 0" />
      <path fill={forceColor ?? '#39ffbe'} d="m606.293 480.996 31.789-11.633 5.234 17.063-32.175 10.855Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m696.035 232.262-26.555-31.02-11.046 13.57 25.972 29.083Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m370.21 446.875 6.978 24.234-5.04 49.051-6.785-24.62Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m733.059 220.242-28.301-34.512-11.824.973 27.718 33.73Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m19.77 464.52 7.753 25.59-3.683-48.66-7.754-26.755Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m777.445 472.078 22.094-19 3.684-19.578-22.29 20.55Zm0 0" />
      <path fill={forceColor ?? '#eeff09'} d="m675.879 301.086-11.629-24.43-7.95 20.164 11.63 22.297Zm0 0" />
      <path fill={forceColor ?? '#ff9f00'} d="m708.246 224.313-27.133-32.375-11.633 9.304 26.555 31.02Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m720.652 220.434-27.718-33.73-11.82 5.233 27.132 32.375Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m658.434 358.664 3.101-19.582-4.457 21.328-3.101 17.45Zm0 0" />
      <path fill={forceColor ?? '#0000b6'} d="m214.762 796.813-.778 8.917-26.554-8.53-.192-9.305Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m599.121 557.383 45.746-11.246 10.852 6.398-46.324 11.438Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m789.27 290.23-13.184-32.183-9.11-14.735 12.989 32.958Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m633.816 413.336 17.641-15.316-.39 20.359-17.833 13.957Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m609.395 563.973 46.324-11.438 11.242 3.684-46.711 11.828Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m589.43 548.27 45.355-11.051 10.082 8.918-45.746 11.246Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m620.25 568.047 46.906-11.828 11.242.777-47.293 12.406Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m44.191 146.957-6.394 28.695 18.992-34.703 5.621-28.304Zm0 0" />
      <path fill={forceColor ?? '#09f0ee'} d="m580.707 536.832 44.969-11.05 9.11 11.437-45.356 11.05Zm0 0" />
      <path fill={forceColor ?? '#19ffde'} d="m720.07 532.566 36.828-14.734 8.336-13.375-37.214 15.895Zm0 0" />
      <path fill={forceColor ?? '#0048ff'} d="m88.578 686.5 3.684 12.988-18.028-37.222-4.652-14.54Zm0 0" />
      <path fill={forceColor ?? '#50ffa7'} d="m603 463.55 31.785-12.41 3.297 18.223-31.789 11.633Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m802.45 372.816 4.843-26.753-4.07-20.356-5.04 27.918Zm0 0" />
      <path fill={forceColor ?? '#960000'} d="m235.5 8.922-22.68 8.918 22.68 14.539 18.414-8.918Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m685.375 285.188-11.629-26.368-9.496 17.836 11.629 24.43Zm0 0" />
      <path fill={forceColor ?? '#0000da'} d="m294.035 764.047-.387 15.316-25.003 12.992-.387-14.734Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m631.105 569.402 47.293-12.406 11.434-2.133-48.066 12.989Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m338.617 257.078 7.172 16.477 8.332 51.183-8.14-17.254Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m573.148 523.648 44.582-11.242 7.946 13.375-44.969 11.051Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="M317.488 151.418 314 162.468l13.957 45.946.969-12.21Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m10.465 336.953 6.785 28.496 5.621-47.11-6.59-29.273Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m780.934 454.05 22.289-20.55 1.746-20.36-22.485 21.91Zm0 0" />
      <path fill={forceColor ?? '#d10000'} d="M100.984 60.492 84.121 85.113l24.613-20.355 14.344-23.461Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m779.965 276.27-12.988-32.957-10.465-11.438 12.793 33.344Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m372.148 520.16 3.102 27.918-9.691 45.363-3.102-27.918Zm0 0" />
      <path fill={forceColor ?? '#ceff29'} d="m664.637 340.637 3.293-21.52-6.395 19.965-3.101 19.582Zm0 0" />
      <path fill={forceColor ?? '#960000'} d="m168.242 13.574-20.933 16.48 25.586-2.714 17.25-15.703Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m636.145 394.727 17.832-16.868-2.52 20.16-17.64 15.317Zm0 0" />
      <path fill={forceColor ?? '#00b'} d="m242.09 798.363-1.938 8.723-26.168-1.356.778-8.918Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m641.766 567.852 48.066-12.989 10.856-4.847-48.649 13.765Zm0 0" />
      <path fill={forceColor ?? '#0020ff'} d="m336.871 694.063 1.55 21.519-20.933 27.527-1.937-20.742Zm0 0" />
      <path
        fill={forceColor ?? '#29ffce'}
        d="m728.02 520.352 37.214-15.895 6.977-15.316-37.602 16.867ZM566.754 508.723l44.387-11.442 6.59 15.125-44.583 11.242Zm0 0"
      />
      <path fill={forceColor ?? '#ffd000'} d="m696.23 272.2-11.824-28.305-10.66 14.925 11.629 26.368Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m601.45 445.71 31.784-13.374 1.551 18.805L603 463.55Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m798.184 353.625 4.847-27.918-6.011-18.805-4.844 29.078Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m769.305 265.219-12.793-33.344-11.242-7.758 12.597 33.348Zm0 0" />
      <path fill={forceColor ?? '#a80000'} d="M253.914 23.46 235.5 32.38l21.902 22.492 14.344-9.113Zm0 0" />
      <path fill={forceColor ?? '#19ffde'} d="m35.469 538.383 6.785 21.715-7.559-46.918-7.172-23.07Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m354.121 324.738 11.633 19.192 4.652 51.957-12.02-19.578Zm0 0" />
      <path fill={forceColor ?? '#ff3400'} d="m304.117 110.512-6.785 10.273L314 162.47l3.488-11.051Zm0 0" />
      <path fill={forceColor ?? '#0080ff'} d="m69.582 647.727 4.652 14.539-14.925-40.907-5.23-16.09Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m707.86 262.313-11.825-30.051-11.629 11.633 11.824 28.304Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m652.04 563.781 48.648-13.57 10.078-7.563-49.036 14.348Zm0 0" />
      <path fill={forceColor ?? '#87ff70'} d="m782.484 435.05 22.485-21.91-.196-20.355-22.484 23.266Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m562.102 492.438 44-11.442 5.039 16.48-44.387 11.247Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m672.582 324.352 3.297-23.266-7.95 18.031-3.292 21.52Zm0 0" />
      <path fill={forceColor ?? '#ffb200'} d="m757.867 257.465-12.597-33.348-12.211-3.875L745.46 253.2Zm0 0" />
      <path fill={forceColor ?? '#c80000'} d="m271.746 45.758-14.344 9.113 20.934 29.856 10.273-9.696Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m288.61 75.031-10.274 9.696 18.996 36.058 6.785-10.273Zm0 0" />
      <path fill={forceColor ?? '#b1ff46'} d="m640.215 376.89 18.219-18.226-4.457 19.195-17.832 16.868Zm0 0" />
      <path fill={forceColor ?? '#ffb200'} d="m720.266 255.719-12.211-31.406-12.02 7.949 11.824 30.05Zm0 0" />
      <path fill={forceColor ?? '#ff8d00'} d="m22.871 215.977 3.684 28.5 14.922-39.938-3.68-28.887Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m734.61 506.008 37.6-16.867 5.235-17.063-37.797 18.031Zm0 0" />
      <path fill={forceColor ?? '#ffab00'} d="m745.46 253.2-12.401-32.958h-12.407l12.211 32.375Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m732.863 252.617-12.21-32.375-12.598 4.07 12.21 31.407Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m601.836 427.684 31.98-14.348-.582 19-31.785 13.375Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m544.074 569.79 55.047-12.407 10.274 6.59-55.434 12.992Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m534.965 560.29 54.465-12.02 9.691 9.113-55.047 12.406Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m16.086 414.695 7.754 26.754 1.164-48.082-7.754-27.918Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m792.176 335.98 4.844-29.078-7.75-16.672-4.848 30.047Zm0 0" />
      <path fill={forceColor ?? '#0000ed'} d="m161.457 781.883-1.164 3.879-23.84-20.742v-5.043Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m365.559 593.441 2.906 25.98-13.953 40.13-2.91-25.395Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m370.406 395.887 6.977 24.043-.195 51.18-6.977-24.235Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m553.96 576.965 55.435-12.992 10.855 4.074-56.21 13.375Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="M136.453 759.977v5.043l-22.098-26.368-.968-6.203Zm0 0" />
      <path fill={forceColor ?? '#ffa300'} d="m327.957 208.414 5.426 15.703 12.406 49.438-7.172-16.477Zm0 0" />
      <path
        fill={forceColor ?? '#0cf4eb'}
        d="m526.629 548.656 54.078-11.824 8.723 11.438-54.465 12.02ZM661.73 556.996l49.036-14.348 9.304-10.082-49.62 15.121Zm0 0"
      />
      <path fill={forceColor ?? '#0000cd'} d="m268.645 792.355-2.907 9.11-25.39 5.62 1.742-8.722Zm0 0" />
      <path fill={forceColor ?? '#50ffa7'} d="M558.805 475.57 603 463.55l3.102 17.446-44 11.442Zm0 0" />
      <path fill={forceColor ?? '#0000d6'} d="m187.43 797.2-2.325 3.1-24.812-14.538 1.164-3.88Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m681.887 310.195 3.488-25.007-9.496 15.898-3.297 23.266Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m564.04 581.422 56.21-13.375 10.855 1.355-56.793 13.766Zm0 0" />
      <path fill={forceColor ?? '#890000'} d="m190.145 11.637-17.25 15.703 26.359 5.816L212.82 17.84Zm0 0" />
      <path fill={forceColor ?? '#19ffde'} d="m519.457 535.281 53.691-11.633 7.559 13.184-54.078 12.02Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m317.488 743.11-.968 15.898-22.872 20.355.387-15.316Zm0 0" />
      <path fill={forceColor ?? '#a0ff56'} d="m782.29 416.05 22.483-23.265-2.324-19.969-22.484 24.43Zm0 0" />
      <path fill={forceColor ?? '#0024ff'} d="m113.387 732.45.968 6.202-19.96-31.406-2.133-7.758Zm0 0" />
      <path fill={forceColor ?? '#ff1600'} d="m62.41 112.645-5.62 28.304 22.483-28.113 4.848-27.723Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m646.223 360.41 18.414-19.773-6.203 18.027-18.22 18.227Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m784.422 320.277 4.848-29.855-9.305-14.152-4.653 30.632Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m739.648 490.11 37.797-18.032 3.489-18.027-37.993 19.191Zm0 0" />
      <path fill={forceColor ?? '#a80000'} d="m123.078 41.297-14.344 23.46 26.946-12.019 11.629-22.683Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m574.313 583.168 56.792-13.766 10.66-1.55-57.18 14.347Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m603.969 410.234 32.176-15.507-2.329 18.609-31.98 14.348Zm0 0" />
      <path fill={forceColor ?? '#29ffce'} d="m513.45 520.16 53.304-11.437 6.394 14.925-53.691 11.633Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m54.078 605.27 5.23 16.09-11.433-43.622-5.621-17.64Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m670.45 547.688 49.62-15.122 7.95-12.214-50.008 15.703Zm0 0" />
      <path fill={forceColor ?? '#0000cd'} d="m213.984 805.73-3.488 2.715-25.39-8.144 2.324-3.102Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m557.45 458.121 44-12.41 1.55 17.84-44.195 12.02Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m692.547 298.758 3.683-26.559-10.855 12.988-3.488 25.008Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m16.281 289.066 6.59 29.274 10.274-44.008-6.59-29.855Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m377.188 471.11 3.101 28.304-5.039 48.664-3.102-27.918Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m584.586 582.2 57.18-14.348 10.273-4.07-57.762 14.734Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m775.313 306.902 4.652-30.632-10.66-11.051-4.461 31.02Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="m779.965 397.246 22.484-24.43-4.265-19-22.29 25.399Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m345.79 273.555 10.464 18.804 9.5 51.57-11.633-19.19Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m92.262 699.488 2.133 7.758L77.14 671.57l-2.907-9.304Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m27.523 490.11 7.172 23.07-3.492-47.305-7.363-24.426Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m508.797 504.066 53.305-11.628 4.652 16.285-53.305 11.629Zm0 0" />
      <path fill={forceColor ?? '#005cff'} d="m354.512 659.55 1.355 22.102-17.445 33.93-1.55-21.52Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m314 162.469 3.102 15.316 16.28 46.332-5.425-15.703Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m703.984 290.23 3.875-27.918-11.629 9.887-3.683 26.559Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m653.977 345.676 18.605-21.324-7.945 16.285-18.414 19.773Zm0 0" />
      <path fill={forceColor ?? '#890000'} d="m212.82 17.84-13.566 15.316 26.555 14.153 9.691-14.93Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m742.941 473.242 37.993-19.191 1.55-19-37.992 20.355Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m764.652 296.238 4.653-31.02-11.438-7.753-4.652 31.02Zm0 0" />
      <path fill={forceColor ?? '#adff49'} d="m608.04 393.563 32.175-16.672-4.07 17.836-32.176 15.507Zm0 0" />
      <path fill={forceColor ?? '#2cffca'} d="m678.012 536.055 50.008-15.703 6.59-14.344-50.204 16.672Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m557.645 440.867 44.19-13.183-.386 18.027-44 12.41Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m487.09 588.594 61.832-14.926-9.5-8.336-62.024 14.734Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m477.398 580.066 62.024-14.734-8.723-10.469-62.219 14.54Zm0 0" />
      <path fill={forceColor ?? '#ffc400'} d="m716.195 284.8 4.07-29.081-12.406 6.594-3.875 27.917Zm0 0" />
      <path fill={forceColor ?? '#0000ed'} d="m293.648 779.363-3.875 9.5-24.035 12.602 2.907-9.11Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m594.277 578.516 57.762-14.735 9.691-6.785-58.343 15.121Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="M497.168 594.41 559 579.484l-10.078-5.816-61.832 14.926Zm0 0" />
      <g clipPath="url(#o)">
        <path fill={forceColor ?? '#0000d1'} d="M240.348 807.086 235.5 809.8l-25.2-1.356 3.684-2.715Zm0 0" />
      </g>
      <path fill={forceColor ?? '#ffc400'} d="m753.215 288.484 4.652-31.02-12.406-4.265-4.262 30.824Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="M505.695 487.2 559 475.57l3.102 16.868-53.305 11.628Zm0 0" />
      <path fill={forceColor ?? '#0ff8e7'} d="m468.48 569.402 62.22-14.539-7.75-12.601-62.415 14.343Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m728.598 282.668 4.265-30.05-12.597 3.1-4.07 29.083Zm0 0" />
      <path fill={forceColor ?? '#ceff29'} d="m775.895 379.215 22.289-25.59-6.008-17.645-22.29 26.563Zm0 0" />
      <path fill={forceColor ?? '#ffbd00'} d="m741.2 284.023 4.26-30.628-12.597-.778-4.265 30.051Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m507.637 597.707 61.636-15.121L559 579.484l-61.832 14.926Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m662.89 333.074 18.997-22.879-9.305 14.157-18.605 21.324Zm0 0" />
      <path fill={forceColor ?? '#ff2d00'} d="m297.332 120.785.387 14.93 19.383 42.07L314 162.47Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m460.535 556.605 62.414-14.343-6.785-14.348-62.414 14.152Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m37.797 175.652 3.68 28.887 18.996-34.703-3.684-28.887Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m365.754 343.93 6.781 23.847 4.848 52.153-6.977-24.043Zm0 0" />
      <path fill={forceColor ?? '#9b0000'} d="m235.5 32.379-9.691 14.93 25.586 22.296 6.007-14.734Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m17.25 365.45 7.754 27.917 5.621-46.14-7.754-28.887Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m74.234 662.266 2.907 9.304-14.34-38.965-3.492-11.246Zm0 0" />
      <path fill={forceColor ?? '#87ff70'} d="m744.492 455.406 37.992-20.355-.195-19-38.184 21.324Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m518.102 598.094 61.445-15.121-10.274-.387-61.636 15.121Zm0 0" />
      <path fill={forceColor ?? '#8d0000'} d="m147.309 30.055-11.63 22.683 28.493-3.683 8.723-21.715Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m613.66 378.246 32.563-17.836-6.008 16.48-32.176 16.673Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m684.406 522.68 50.203-16.672 5.04-15.899-50.59 17.45Zm0 0" />
      <path fill={forceColor ?? '#0ff8e7'} d="m603.387 572.117 58.343-15.12 8.72-9.31-58.727 15.704Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m338.422 715.582-1.742 16.672-20.16 26.754.968-15.899Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m375.25 548.078 2.715 26.754-9.5 44.59-2.906-25.98Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m559.773 424 44.196-13.766-2.133 17.45-44.191 13.183Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m42.254 560.098 5.621 17.64-7.367-44.976-5.813-19.582Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m160.293 785.762-2.52-2.133-22.484-19.582 1.164.973Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m504.34 469.945 53.11-11.824 1.355 17.45-53.11 11.628Zm0 0" />
      <path fill={forceColor ?? '#0010ff'} d="m136.453 765.02-1.164-.973-20.934-24.813v-.582Zm0 0" />
      <path fill={forceColor ?? '#30ffc7'} d="m453.75 542.066 62.414-14.152-5.234-15.703-62.606 13.957Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m769.887 362.543 22.289-26.563-7.754-15.703-22.098 27.145Zm0 0" />
      <path fill={forceColor ?? '#e80000'} d="m278.336 84.727-2.715 14.539 22.098 36.449-.387-14.93Zm0 0" />
      <path fill={forceColor ?? '#b00'} d="m257.402 54.871-6.007 14.734 24.226 29.66 2.715-14.538Zm0 0" />
      <path fill={forceColor ?? '#d10000'} d="m84.121 85.113-4.848 27.723 25.782-20.742 3.68-27.336Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m673.164 322.797 19.383-24.04-10.66 11.438-18.996 22.88Zm0 0" />
      <path fill={forceColor ?? '#0000f1'} d="m185.105 800.3-3.878-2.71-23.454-13.961 2.52 2.133Zm0 0" />
      <path fill={forceColor ?? '#ff9f00'} d="m333.383 224.117 9.11 18.613 13.956 49.63-10.66-18.805Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m528.18 595.77 61.25-15.122-9.883 2.325-61.445 15.12Zm0 0" />
      <path fill={forceColor ?? '#0038ff'} d="M114.355 738.652v.582L95.363 709.57l-.968-2.324Zm0 0" />
      <g clipPath="url(#p)">
        <path fill={forceColor ?? '#0000e3'} d="m265.738 801.465-5.816 3.101-24.422 5.235 4.652-2.715Zm0 0" />
      </g>
      <path fill={forceColor ?? '#9dff5a'} d="m744.105 437.375 38.184-21.324-2.324-18.805-38.184 22.102Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m448.324 526.168 62.606-13.957-3.875-16.48-62.61 13.57Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m762.324 347.422 22.098-27.145-9.11-13.375-21.902 27.723Zm0 0" />
      <path fill={forceColor ?? '#1fffd7'} d="m611.723 563.39 58.726-15.702 7.563-11.633-59.121 16.093Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m620.832 364.676 33.145-19-7.754 14.734-32.563 17.836Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m423.32 605.074 63.77-16.48-9.692-8.528-64.156 16.286Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m689.059 507.559 50.59-17.45 3.292-16.867-50.78 18.031Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m413.242 596.352 64.156-16.286-8.918-10.664-64.543 15.703Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m684.21 315.434 19.774-25.204-11.437 8.528-19.383 24.234Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m504.535 452.691 53.11-11.824-.196 17.254-53.11 11.824Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m563.457 408.102 44.582-14.54-4.07 16.672L559.773 424Zm0 0" />
      <path fill={forceColor ?? '#0000e8'} d="m210.3 808.445-5.23-3.297-23.843-7.558 3.878 2.71Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m433.98 611.086 63.188-16.676-10.078-5.816-63.77 16.48Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m23.84 441.45 7.363 24.425 1.164-46.527-7.363-25.98Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m403.938 585.105 64.542-15.703-7.945-12.797-64.738 15.125Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m537.68 590.535 61.25-14.93-9.5 5.043-61.25 15.122Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m377.383 419.93 2.906 28.496v50.988l-3.101-28.305Zm0 0" />
      <path fill={forceColor ?? '#ff9100'} d="m26.555 244.477 6.59 29.855 14.73-39.55-6.398-30.243Zm0 0" />
      <path fill={forceColor ?? '#0008ff'} d="m316.52 759.008-4.653 10.469-22.094 19.386 3.875-9.5Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m753.41 334.625 21.903-27.723-10.47-10.664-21.706 27.723Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m444.64 614.379 62.997-16.672-10.469-3.297-63.188 16.676Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m368.465 619.422.969 23.07-13.567 39.16-1.355-22.101Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m59.309 621.36 3.492 11.245-10.856-41.488-4.07-13.379Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m696.035 310.973 20.16-26.172-12.21 5.43-19.774 25.203Zm0 0" />
      <path fill={forceColor ?? '#0064ff'} d="m94.395 707.246.968 2.324-16.281-33.734-1.941-4.266Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m395.797 571.73 64.738-15.125-6.785-14.539-65.125 14.735Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m444.445 509.3 62.61-13.57-2.133-17.253-62.996 13.57Zm0 0" />
      <path fill={forceColor ?? 'maroon'} d="m172.895 27.34-8.723 21.715 29.46 4.843 5.622-20.742Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m741.781 419.348 38.184-22.102-4.07-18.031-37.993 22.879Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m743.137 323.96 21.707-27.722-11.63-7.754-21.124 27.723Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m629.555 353.043 33.336-19.969-8.914 12.602-33.145 19Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m708.246 309.617 20.352-26.949-12.403 2.133-20.16 26.172Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m455.496 614.96 62.606-16.866-10.465-.387-62.996 16.867Zm0 0" />
      <path fill={forceColor ?? '#30ffc7'} d="m618.89 552.148 59.122-16.093 6.394-13.375-59.699 16.48Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m732.09 316.207 21.125-27.723-12.016-4.652-20.933 27.527Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m720.266 311.36 20.933-27.337-12.601-1.355-20.352 26.95Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m692.16 491.273 50.781-18.03 1.551-17.837-50.976 18.614Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m506.473 436.215 53.3-12.215-2.128 16.867-53.11 12.02Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m568.887 393.563 44.773-15.317-5.62 15.317-44.583 14.539Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m546.402 582.973 61.25-14.926-8.722 7.558-61.25 14.93Zm0 0" />
      <path fill={forceColor ?? '#2cffca'} d="m388.625 556.8 65.125-14.734-5.426-15.898-65.515 13.96Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="m317.102 177.785 7.558 18.61 17.832 46.335-9.11-18.613Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m356.254 292.36 6.59 24.042 9.691 51.375-6.781-23.847Zm0 0" />
      <g clipPath="url(#q)">
        <path fill={forceColor ?? '#0000ed'} d="m235.5 809.996-6.785-3.488-23.645-1.36 5.23 3.297Zm0 0" />
      </g>
      <path fill={forceColor ?? '#56ffa0'} d="m34.695 513.18 5.813 19.582-3.293-45.367-6.012-21.52Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m441.926 492.047 62.996-13.57-.777-17.254-62.797 13.183Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m465.96 612.441 62.22-16.671-10.078 2.324-62.606 16.867Zm0 0" />
      <path fill={forceColor ?? '#ff1a00'} d="m56.79 140.95 3.683 29.077 22.484-28.109-3.684-29.082Zm0 0" />
      <path fill={forceColor ?? '#caff2c'} d="m737.902 402.094 37.993-22.88-6.008-16.671L732.09 386Zm0 0" />
      <path fill={forceColor ?? '#000cff'} d="m157.773 783.629-2.52-7.367-21.124-18.418 1.16 6.203Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m289.773 788.863-6.98 3.684-22.871 12.02 5.816-3.102Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m361.684 623.105 61.636-18.03-10.078-8.723-62.219 17.445Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m351.023 613.797 62.22-17.445-9.305-11.247-62.801 16.868Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m135.29 764.047-1.161-6.203-19.578-23.457-.196 4.847Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m639.246 343.93 33.918-21.133-10.273 10.277-33.336 19.969Zm0 0" />
      <path fill={forceColor ?? '#a40000'} d="m108.734 64.758-3.68 27.336 28.106-12.797 2.52-26.559Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m372.73 629.695 61.25-18.61-10.66-6.01-61.636 18.03Zm0 0" />
      <path fill={forceColor ?? '#0064ff'} d="m355.867 681.652-2.133 17.836-17.054 32.766 1.742-16.672Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m22.871 318.34 7.754 28.887 10.078-43.04-7.558-29.855Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m76.95 671.57 2.132 4.266L65.512 639l-2.711-6.395Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m382.809 540.129 65.515-13.961-3.879-16.867-65.707 13.379Zm0 0" />
      <path fill={forceColor ?? '#06ecf1'} d="m341.137 601.973 62.8-16.868-8.14-13.375-63.578 16.09Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m181.227 797.59-4.07-8.34-21.903-12.988 2.52 7.367Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m624.707 539.16 59.504-16.48 4.848-15.121-59.895 16.867Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m693.516 474.02 50.976-18.614-.387-18.031-50.976 19.195Zm0 0" />
      <path fill={forceColor ?? '#840000'} d="m199.254 33.156-5.621 20.742 29.46 13.575 2.716-20.164Zm0 0" />
      <path fill={forceColor ?? '#19ffde'} d="m554.152 572.7 61.25-14.735-7.75 10.082-61.25 14.926Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m380.098 499.414 2.906 27.336-5.04 48.082-2.714-26.754Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m384.168 633.188 60.473-18.614-10.66-3.488-61.25 18.61Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m575.668 380.766 45.164-16.09-7.172 13.57-44.773 15.317Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m509.96 420.703 53.497-12.601L559.773 424l-53.3 12.215Zm0 0" />
      <path fill={forceColor ?? '#004cff'} d="m114.355 739.234.196-4.847-17.832-27.723-1.356 2.906Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m475.848 607.207 61.832-16.672-9.5 5.235-62.22 16.671Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m332.219 587.82 63.578-16.09-7.172-14.93-63.965 15.122Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m732.09 386 37.797-23.457-7.563-15.121-37.601 24.039Zm0 0" />
      <path fill={forceColor ?? '#ff2900'} d="m297.719 135.715 5.426 18.805 21.515 41.875-7.558-18.61Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m649.906 337.531 34.305-22.097-11.047 7.363-33.918 21.133Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m441.348 474.406 62.797-13.183 1.164-16.868-62.993 12.989Zm0 0" />
      <path fill={forceColor ?? '#1fffd7'} d="m47.875 577.738 4.07 13.38-6.98-42.848-4.457-15.508Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m205.07 805.148-5.62-8.722-22.294-7.176 4.07 8.34Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m395.602 633.766 59.894-18.805-10.855-.582-60.473 18.808Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m378.738 522.68 65.707-13.38-2.52-17.253-65.706 12.601Zm0 0" />
      <g clipPath="url(#r)">
        <path fill={forceColor ?? '#00f'} d="m259.922 804.566-8.14-3.101-23.067 5.043 6.785 3.488Zm0 0" />
      </g>
      <path fill={forceColor ?? '#29ffce'} d="m324.66 571.922 63.965-15.121-5.816-16.672-64.352 14.152Zm0 0" />
      <path fill={forceColor ?? '#eeff09'} d="m724.723 371.46 37.601-24.038-8.914-12.797-37.215 24.04Zm0 0" />
      <path fill={forceColor ?? '#920000'} d="m225.613 47.309-2.52 20.164 28.493 21.71-.191-19.578Zm0 0" />
      <path fill={forceColor ?? '#0038ff'} d="m336.68 732.254-5.43 11.437-19.383 25.786 4.653-10.47Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m661.148 333.848 34.887-22.875-11.824 4.46-34.305 22.098Zm0 0" />
      <path fill={forceColor ?? '#9aff5d'} d="m693.129 456.57 50.976-19.195-2.324-18.027-50.785 19.773Zm0 0" />
      <path fill={forceColor ?? '#0074ff'} d="m95.363 709.57 1.356-2.906-15.313-31.601-2.324.773Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m629.164 524.426 59.895-16.867 3.101-16.286-60.086 17.059Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m305.086 642.879 56.598-19.774-10.66-9.308-57.376 19Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m293.648 632.797 57.375-19-9.886-11.824-58.149 18.03Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m25.004 393.367 7.363 25.98 5.43-44.784-7.172-27.336Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m583.809 370.102 45.746-17.059-8.723 11.633-45.164 16.09Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="m275.621 99.266 2.91 19.195 24.614 36.059-5.426-18.805Zm0 0" />
      <path fill={forceColor ?? '#29ffce'} d="m560.742 560.484 61.25-14.539-6.59 12.02-61.25 14.734Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m372.535 367.777 2.91 28.692 4.844 51.957-2.906-28.496Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m317.297 649.86 55.433-20.165-11.046-6.59-56.598 19.774Zm0 0" />
      <path fill={forceColor ?? '#09f0ee'} d="m484.762 599.258 61.64-16.285-8.722 7.562-61.832 16.672Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m514.809 406.55 54.078-12.988-5.43 14.54-53.496 12.601Zm0 0" />
      <path fill={forceColor ?? '#b20000'} d="m251.395 69.605.19 19.579 26.946 29.277-2.91-19.195Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m406.652 631.055 59.309-18.614-10.465 2.52-59.894 18.805Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m282.988 620.004 58.149-18.031-8.918-14.153-58.727 16.867Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m716.195 358.664 37.215-24.039-10.273-10.664-36.828 24.43Zm0 0" />
      <path fill={forceColor ?? '#ff5200'} d="m41.477 204.54 6.398 30.241 18.8-33.926-6.202-30.828Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m672.777 333.074 35.47-23.457-12.212 1.356-34.887 22.875Zm0 0" />
      <path fill={forceColor ?? '#ff9f00'} d="m342.492 242.73 6.012 24.04 14.34 49.632-6.59-24.043Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="M62.8 632.605 65.513 639l-10.274-39.16-3.293-8.723Zm0 0" />
      <path fill={forceColor ?? '#0028ff'} d="m155.254 776.262-.582-12.407-19.574-17.062-.97 11.05Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m329.508 653.734 54.66-20.547-11.438-3.492-55.433 20.164Zm0 0" />
      <path fill={forceColor ?? '#9aff5d'} d="m442.316 457.344 62.993-12.989 2.714-16.09-63.187 12.794Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m377.965 574.832.773 23.844-9.304 43.816-.97-23.07Zm0 0" />
      <path fill={forceColor ?? '#0040ff'} d="m134.129 757.844.969-11.051-18.22-21.711-2.327 9.305Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m376.219 504.648 65.707-12.601-.578-17.64-66.098 12.019Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m318.457 554.281 64.352-14.152-4.07-17.45L314 535.669Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m706.309 348.195 36.828-24.234-11.047-7.754-36.442 24.234Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m684.406 335.402 35.86-24.043-12.02-1.742-35.469 23.457Zm0 0" />
      <path fill={forceColor ?? '#00f'} d="m228.715 806.508-6.977-8.918-22.289-1.164 5.621 8.722Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m695.648 340.441 36.442-24.234-11.824-4.848-35.86 23.848Zm0 0" />
      <path fill={forceColor ?? '#0ff8e7'} d="m273.297 604.688 58.922-16.868-7.559-15.898-59.504 15.512Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m177.156 789.25-1.937-13.375-20.547-12.02.582 12.407Zm0 0" />
      <path fill={forceColor ?? '#890000'} d="m135.68 52.738-2.52 26.754 29.848-4.265 1.164-26.172Zm0 0" />
      <path fill={forceColor ?? '#0018ff'} d="m311.867 769.477-8.14 4.46-20.934 18.61 6.98-3.684Zm0 0" />
      <path fill={forceColor ?? '#b1ff46'} d="m690.805 439.121 50.976-19.773-3.879-17.254-50.976 20.16Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m593.113 361.574 46.133-17.644-9.691 9.113-45.746 17.059Zm0 0" />
      <path fill={forceColor ?? '#0060ff'} d="m114.55 734.387 2.329-9.305-16.477-25.785-3.683 7.367Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m632.074 508.332 60.086-17.059 1.356-17.253-60.282 17.445Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m341.719 654.316 53.883-20.55-11.434-.578-54.66 20.546Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m31.203 465.875 6.012 21.52.969-44.786-6.008-23.261Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m417.117 625.43 58.73-18.223-9.886 5.234-59.309 18.614Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m256.629 663.816 48.457-20.937-11.438-10.082-49.62 19.969Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m565.977 546.332 61.058-14.348-5.043 13.961-61.25 14.54Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m492.902 588.594 61.25-15.895-7.75 10.274-61.64 16.285Zm0 0" />
      <path fill={forceColor ?? '#00c0ff'} d="m244.027 652.766 49.621-19.97-10.66-12.792-50.59 18.805Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m78.887 675.836 2.52-.774-12.598-34.507L65.512 639Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m521.398 394.145 54.27-13.38-6.781 12.798-54.078 12.988Zm0 0" />
      <path fill={forceColor ?? '#d10000'} d="m79.469 112.836 3.488 29.082 25.586-20.55-3.488-29.274Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m269.809 671.379 47.488-21.52-12.211-6.98-48.457 20.937Zm0 0" />
      <path fill={forceColor ?? '#23ffd4'} d="m265.156 587.434 59.504-15.512-6.203-17.64-60.086 14.343Zm0 0" />
      <path fill={forceColor ?? '#0010ff'} d="m199.45 796.426-3.49-13.961-20.741-6.59 1.937 13.184Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m232.398 638.809 50.59-18.805-9.691-15.317-51.363 17.641Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m314 535.668 64.738-12.988-2.52-18.032-65.124 11.829Zm0 0" />
      <path fill={forceColor ?? '#0008ff'} d="m282.793 792.547-9.3-2.52-21.712 11.438 8.14 3.101Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m375.25 486.426 66.098-12.02.968-17.062-66.097 11.246Zm0 0" />
      <path fill={forceColor ?? '#b1ff46'} d="m444.836 441.059 63.187-12.793 4.262-14.93-63.187 12.41Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m686.926 422.254 50.976-20.16L732.09 386l-50.59 20.355Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m283.184 675.645 46.324-21.91-12.211-3.876-47.488 21.52Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m603.191 355.95 46.715-18.419-10.66 6.399-46.133 17.644Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m369.434 642.492-2.52 19-13.18 37.996 2.133-17.836Zm0 0" />
      <path fill={forceColor ?? '#00c0ff'} d="m353.543 651.41 53.11-20.355-11.051 2.71-53.883 20.551Zm0 0" />
      <path fill={forceColor ?? '#0040ff'} d="m154.672 763.855 4.07-16.285-18.023-15.703-5.621 14.926Zm0 0" />
      <path fill={forceColor ?? '#08f'} d="m96.719 706.664 3.683-7.367-14.148-29.469-4.848 5.235Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m40.508 532.762 4.457 15.508-3.098-43.23-4.652-17.645Zm0 0" />
      <path fill={forceColor ?? '#0058ff'} d="m135.098 746.793 5.62-14.926-16.863-20.164-6.976 13.379Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m33.145 274.332 7.558 29.856 14.535-38.583-7.363-30.824Zm0 0" />
      <path fill={forceColor ?? '#06ecf1'} d="m221.934 622.328 51.558-17.64-8.336-17.254-52.336 16.09Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m217.473 685.531 39.156-21.715-12.602-11.05-40.316 20.746Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m426.613 617.094 58.149-17.836-8.914 7.949-58.73 18.418Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m203.71 673.512 40.317-20.746-11.629-13.957-41.48 19.386Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m380.29 448.426 2.905 27.918-.191 50.215-2.906-27.145Zm0 0" />
      <path fill={forceColor ?? '#0034ff'} d="m175.219 775.875 2.328-17.254-18.805-11.05-4.07 16.284Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m633.234 491.465 60.282-17.445-.387-17.45-60.281 17.45Zm0 0" />
      <path fill={forceColor ?? '#0008ff'} d="m251.781 801.465-8.527-8.723-21.516 4.848 6.977 8.918Zm0 0" />
      <path fill={forceColor ?? '#39ffbe'} d="m258.371 568.625 60.086-14.344L314 535.668l-60.473 12.797Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="m324.66 196.395 5.235 24.039 18.609 46.336-6.012-24.04Zm0 0" />
      <path fill={forceColor ?? '#0094ff'} d="m231.816 693.867 37.993-22.488-13.18-7.563-39.156 21.715Zm0 0" />
      <path fill={forceColor ?? '#e1ff16'} d="m528.957 383.676 54.852-13.574-8.141 10.664-54.27 13.379Zm0 0" />
      <path fill={forceColor ?? '#29ffce'} d="m499.496 575.992 61.246-15.508-6.59 12.215-61.25 16.09Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m569.465 530.629 61.25-14.152-3.68 15.507-61.058 14.348Zm0 0" />
      <path fill={forceColor ?? '#0074ff'} d="m116.879 725.082 6.976-13.379-15.12-23.848-8.333 11.442Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m296.363 676.227 45.356-21.91-12.211-.583-46.324 21.91Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="M681.5 406.355 732.09 386l-7.367-14.54-50.203 20.552Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m190.918 658.195 41.48-19.386-10.464-16.48-42.45 17.644Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m613.852 352.848 47.296-19-11.242 3.683-46.715 18.418Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m51.945 591.117 3.293 8.723-6.59-40.52-3.683-11.05Zm0 0" />
      <path fill={forceColor ?? '#0014ff'} d="m221.738 797.59-5.039-13.961-20.738-.969 3.488 13.766Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m311.094 516.477 65.125-11.829-.969-18.222-65.125 10.664Zm0 0" />
      <path fill={forceColor ?? 'maroon'} d="m164.172 49.055-1.164 26.172 30.625 4.457V53.898Zm0 0" />
      <path fill={forceColor ?? '#005cff'} d="m158.742 747.57 10.664-19.195-16.476-14.54-12.211 18.032Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m188.594 707.438 28.879-21.907-13.762-12.02-30.234 20.743Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m140.719 731.867 12.21-18.031-15.507-18.223-13.567 16.09Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m212.82 603.523 52.336-16.09-6.785-18.808-52.914 14.156Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m173.477 694.254 30.234-20.742-12.793-15.317-31.594 19.192Zm0 0" />
      <path fill={forceColor ?? '#0094ff'} d="m246.547 698.52 36.637-22.875-13.375-4.266-37.993 22.488Zm0 0" />
      <path fill={forceColor ?? '#002cff'} d="m195.96 782.66.774-17.836-19.187-6.203-2.328 17.254Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m362.844 316.402 3.101 28.887 9.5 51.18-2.91-28.692Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m364.785 645.398 52.332-19.773-10.465 5.43-53.109 20.355Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m353.734 699.488-6.203 12.797-16.281 31.406 5.43-11.437Zm0 0" />
      <path fill={forceColor ?? '#9aff5d'} d="m376.219 468.59 66.097-11.246 2.52-16.285-65.902 10.468Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m449.098 425.746 63.187-12.41 5.621-13.375-62.992 12.406Zm0 0" />
      <path fill={forceColor ?? '#0074ff'} d="m169.406 728.375 19.188-21.129-15.117-13.183-20.547 19.773Zm0 0" />
      <path fill={forceColor ?? '#0080ff'} d="m204.293 716.55 27.523-22.683-14.343-8.336-28.88 21.715Zm0 0" />
      <path fill={forceColor ?? '#004cff'} d="m177.547 758.621 9.11-20.164-17.25-10.082-10.665 19.195Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m65.512 639 3.297 1.555-9.5-36.645-4.07-4.07Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m674.52 392.012 50.203-20.551-8.528-12.797-50.008 20.55Zm0 0" />
      <path fill={forceColor ?? '#0084ff'} d="m152.93 713.836 20.547-19.774-13.957-16.675-22.098 18.226Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m624.902 352.656 47.875-19.582-11.629.774-47.296 19Zm0 0" />
      <path fill={forceColor ?? '#00e0fb'} d="m179.484 639.973 42.45-17.645-9.114-18.805-43.222 15.899Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m159.324 677.387 31.594-19.192-11.434-18.222-32.757 17.445Zm0 0" />
      <path fill={forceColor ?? '#008cff'} d="m123.855 711.703 13.567-16.09-13.953-21.91-14.735 14.152Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m81.406 675.063 4.848-5.235L74.43 637.84l-5.621 2.715Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m186.656 738.457 17.637-21.906-15.7-9.305-19.187 21.129Zm0 0" />
      <path fill={forceColor ?? '#9aff5d'} d="m632.848 474.02 60.28-17.45-2.132-17.449-60.281 17.45Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m100.402 699.297 8.332-11.442-13.18-26.945-9.3 8.918Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m434.95 605.852 57.952-17.063-8.14 10.469-58.149 17.836Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m309.348 673.316 44.195-21.906-11.824 2.906-45.356 21.91Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m30.625 347.227 7.172 27.336 9.883-41.489-6.977-28.887Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="M253.527 548.465 314 535.668l-2.906-19.191-60.668 11.242Zm0 0" />
      <path fill={forceColor ?? '#eeff09'} d="m537.68 375.918 55.433-14.152-9.304 8.336-54.852 13.765Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m666.188 379.215 50.007-20.55-9.886-10.274-49.426 20.355Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m137.422 695.613 21.902-18.226-12.597-19.969-23.258 16.285Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m635.95 355.367 48.456-19.965-11.629-2.328-47.875 19.582Zm0 0" />
      <path fill={forceColor ?? '#007cff'} d="m220.383 721.785 26.164-23.265-14.73-4.653-27.524 22.684Zm0 0" />
      <path fill={forceColor ?? '#0094ff'} d="m261.086 699.297 35.277-23.07-13.18-.582-36.636 22.875Zm0 0" />
      <path fill={forceColor ?? '#04f'} d="m331.25 743.691-8.914 5.817-18.61 24.43 8.141-4.461Zm0 0" />
      <path fill={forceColor ?? '#ff1e00'} d="m60.473 170.027 6.203 30.828 22.289-27.53-6.008-31.407Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m571.598 513.762 61.25-13.766-2.133 16.48-61.25 14.153Zm0 0" />
      <path fill={forceColor ?? '#0048ff'} d="m196.734 764.824 7.559-20.746-17.637-5.621-9.11 20.164Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m656.883 368.746 49.426-20.355-10.66-7.95-49.04 20.356Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m504.922 561.262 61.055-14.93-5.235 14.152-61.246 15.508Zm0 0" />
    </>
  );
}

function DfxAssetIconCRV2({ forceColor }: BaseAssetIconProps) {
  return (
    <>
      <path fill={forceColor ?? '#ffe200'} d="m646.61 360.797 49.038-20.356-11.242-5.039-48.457 19.965Zm0 0" />
      <path fill={forceColor ?? '#36ffc1'} d="m205.457 582.781 52.914-14.156-4.844-20.16-53.496 12.601Zm0 0" />
      <path fill={forceColor ?? '#0064ff'} d="m204.293 744.078 16.09-22.293-16.09-5.234-17.637 21.906Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m146.727 657.418 32.757-17.445-9.886-20.551-33.727 15.316Zm0 0" />
      <path fill={forceColor ?? '#ff2900'} d="m303.145 154.52 4.46 24.234 22.29 41.68-5.235-24.04Zm0 0" />
      <path fill={forceColor ?? '#87ff70'} d="m310.125 497.09 65.125-10.664.969-17.836-65.125 9.691Zm0 0" />
      <path fill={forceColor ?? '#0030ff'} d="m216.7 783.629-.97-17.836-18.996-.969-.773 17.64Zm0 0" />
      <path fill={forceColor ?? '#13fce4'} d="m169.598 619.422 43.222-15.899-7.363-20.742-44 13.957Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m383.004 526.559.582 25.203-4.848 46.914-.773-23.844Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m108.734 687.855 14.735-14.152-12.02-24.812-15.894 12.02Zm0 0" />
      <path fill={forceColor ?? '#002cff'} d="m303.727 773.938-10.465-1.36-19.77 17.45 9.301 2.519Zm0 0" />
      <path fill={forceColor ?? '#a80000'} d="m105.055 92.094 3.488 29.273 28.105-12.601-3.488-29.274Zm0 0" />
      <path fill={forceColor ?? '#00dcfe'} d="m375.055 636.29 51.558-19.196-9.496 8.531-52.332 19.773Zm0 0" />
      <path fill={forceColor ?? 'maroon'} d="M193.633 53.898v25.786l30.43 12.992-.97-25.203Zm0 0" />
      <path fill={forceColor ?? '#0020ff'} d="m243.254 792.934-6.59-13.762-19.965 4.457 5.04 13.96Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m454.914 412.367 62.992-12.406 7.172-11.246-63.187 12.02Zm0 0" />
      <path fill={forceColor ?? '#00c0ff'} d="m123.469 673.703 23.258-16.285-10.856-22.68-24.422 14.153Zm0 0" />
      <path fill={forceColor ?? '#0020ff'} d="m273.492 790.027-9.887-7.949-20.351 10.664 8.527 8.723Zm0 0" />
      <path
        fill={forceColor ?? '#b1ff46'}
        d="m378.934 451.527 65.902-10.66 4.262-15.12-65.903 10.077ZM630.715 456.57l60.09-17.449-3.88-16.867-60.085 17.45Zm0 0"
      />
      <path fill={forceColor ?? '#ceff29'} d="m32.367 419.348 5.817 23.261 5.425-43.039-5.812-25.007Zm0 0" />
      <path fill={forceColor ?? '#007cff'} d="m236.273 722.559 24.813-23.262-14.54-.777-26.163 23.265Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m547.176 370.492 56.015-14.543-10.078 5.625-55.433 14.344Zm0 0" />
      <path fill={forceColor ?? '#00bcff'} d="m321.367 666.727 43.418-21.329-11.242 6.012-44.195 21.906Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m86.254 669.828 9.3-8.918-10.85-29.664-10.274 6.594Zm0 0" />
      <path fill={forceColor ?? '#009cff'} d="m275.234 696 34.114-22.684-12.985 2.91-35.277 23.07Zm0 0" />
      <path fill={forceColor ?? '#6dff8a'} d="m250.426 527.719 60.668-11.242-.969-19.387-60.863 9.887Zm0 0" />
      <path fill={forceColor ?? '#004cff'} d="m215.73 765.793 6.008-20.742-17.445-.973-7.559 20.746Zm0 0" />
      <path fill={forceColor ?? '#23ffd4'} d="m442.121 592.277 57.375-16.285-6.594 12.797-57.953 17.063Zm0 0" />
      <path fill={forceColor ?? '#0064ff'} d="m221.738 745.05 14.535-22.491-15.89-.774-16.09 22.293Zm0 0" />
      <path fill={forceColor ?? '#09f0ee'} d="m135.871 634.738 33.727-15.316-8.141-22.684-34.695 13.184Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="m278.531 118.46 3.489 24.622 25.585 35.672-4.46-24.234Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m571.793 496.313 61.441-13.57-.386 17.253-61.25 13.766Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m68.809 640.555 5.62-2.715-8.722-34.121-6.398.191Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m37.215 487.395 4.652 17.449.969-42.457-4.461-19.778Zm0 0" />
      <path fill={forceColor ?? '#920000'} d="m223.094 67.473.969 25.203L253.913 114l-2.328-24.816Zm0 0" />
      <path
        fill={forceColor ?? '#50ffa7'}
        d="m508.605 544.781 60.86-14.152-3.488 15.703-61.055 14.93ZM200.031 561.066l53.496-12.601-3.101-20.746-53.887 10.664Zm0 0"
      />
      <path fill={forceColor ?? '#30ffc7'} d="m161.457 596.738 44-13.957-5.426-21.715-44.777 11.825Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m626.84 439.703 60.086-17.45-5.426-15.898-59.895 17.45Zm0 0" />
      <path fill={forceColor ?? '#2cffca'} d="m55.238 599.84 4.07 4.07-6.199-37.996-4.46-6.594Zm0 0" />
      <path fill={forceColor ?? '#00d4ff'} d="m95.555 660.91 15.894-12.02-9.883-27.144-16.863 9.5Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m44.965 548.27 3.683 11.05-2.906-40.906-3.875-13.375Zm0 0" />
      <path fill={forceColor ?? '#b20000'} d="M251.586 89.184 253.914 114l28.106 29.082-3.489-24.621Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m111.45 648.89 24.421-14.152-9.11-24.816-25.195 11.824Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m557.254 367.969 56.598-15.121-10.66 3.101-56.016 14.543Zm0 0" />
      <path fill={forceColor ?? '#9dff5a'} d="m311.094 478.281 65.125-9.691 2.715-17.063-65.125 8.727Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m461.89 400.734 63.188-12.02 8.14-9.304-62.991 12.02Zm0 0" />
      <path fill={forceColor ?? '#09f0ee'} d="m383.973 624.27 50.976-18.418-8.336 11.242-51.558 19.195Zm0 0" />
      <path fill={forceColor ?? '#06ecf1'} d="m378.738 598.676-2.71 20.36-9.114 42.456 2.52-19Zm0 0" />
      <path fill={forceColor ?? '#003cff'} d="m236.664 779.172-2.52-17.45-18.414 4.071.97 17.836Zm0 0" />
      <path fill={forceColor ?? '#08f'} d="M251.781 719.07 275.234 696l-14.148 3.297-24.813 23.262Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m375.445 396.469 2.907 28.695 4.843 51.18-2.906-27.918Zm0 0" />
      <path fill={forceColor ?? '#ff9f00'} d="m348.504 266.77 3.098 29.082 14.343 49.437-3.101-28.887Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m383.195 435.824 65.903-10.078 5.816-13.379-65.902 9.305Zm0 0" />
      <path fill={forceColor ?? '#ff5900'} d="m47.875 234.781 7.363 30.824 18.414-33.152-6.976-31.598Zm0 0" />
      <path fill={forceColor ?? '#00d0ff'} d="m332.414 656.84 42.64-20.55-10.269 9.108-43.418 21.329Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m621.605 423.805 59.895-17.45-6.98-14.343-59.504 17.254Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m288.414 689.02 32.953-22.293-12.02 6.59L275.235 696Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m567.723 368.164 57.18-15.508-11.051.192-56.403 15.12Zm0 0" />
      <path fill={forceColor ?? '#0070ff'} d="m238.602 741.172 13.18-22.102-15.509 3.489-14.535 22.492Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m234.145 761.723 4.457-20.551-16.864 3.879-6.008 20.742Zm0 0" />
      <path fill={forceColor ?? '#87ff70'} d="m249.262 506.977 60.863-9.887.969-18.809-61.055 8.145Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m570.434 478.672 61.445-13.379 1.355 17.45-61.441 13.57Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m126.762 609.922 34.695-13.184-6.203-23.847-35.082 10.859Zm0 0" />
      <path fill={forceColor ?? '#39ffbe'} d="m447.547 576.77 57.375-15.508-5.426 14.73-57.375 16.285Zm0 0" />
      <path fill={forceColor ?? '#0038ff'} d="m263.605 782.078-8.14-12.797-18.8 9.89 6.589 13.571Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m74.43 637.84 10.273-6.594-8.14-31.406-10.856 3.879Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m510.543 527.332 61.055-13.57-1.938 16.867-61.055 14.348Zm0 0" />
      <path fill={forceColor ?? '#00b0ff'} d="m366.914 661.492-6.59 14.153-12.793 36.64 6.203-12.797Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m615.016 409.266 59.504-17.254-8.332-12.797-59.118 17.062Zm0 0" />
      <path fill={forceColor ?? '#6aff8d'} d="m196.54 538.383 53.886-10.664-1.164-20.742-54.078 8.722Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m578.188 371.266 57.761-15.899-11.047-2.71-57.18 15.507Zm0 0" />
      <path fill={forceColor ?? '#49ffad'} d="m155.254 572.89 44.777-11.824-3.492-22.683-45.16 9.695Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m470.227 391.43 62.992-12.02 9.113-6.594-62.996 11.829Zm0 0" />
      <path fill={forceColor ?? '#8d0000'} d="m133.16 79.492 3.488 29.274 29.657-4.07-3.297-29.47Zm0 0" />
      <path fill={forceColor ?? '#0040ff'} d="m293.262 772.578-11.242-6.785-18.415 16.285 9.887 8.145Zm0 0" />
      <path fill={forceColor ?? '#1fffd7'} d="m101.566 621.746 25.196-11.824-6.59-26.172-25.973 9.11Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m84.703 631.246 16.863-9.5L94.2 592.86l-17.636 6.98Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m607.07 396.277 59.117-17.062-9.304-10.469-58.73 16.867Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m313.809 460.254 65.125-8.727 4.261-15.703-64.93 7.563Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m588.46 377.082 58.15-16.285-10.66-5.43-57.763 15.899Zm0 0" />
      <path fill={forceColor ?? '#007cff'} d="m347.531 712.285-9.691 7.172-15.504 30.05 8.914-5.816Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m598.152 385.613 58.73-16.867-10.273-7.95-58.148 16.286Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m391.531 609.727 50.59-17.45-7.172 13.575-50.976 18.418Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="M322.336 749.508h-11.629l-17.445 23.07 10.465 1.36Zm0 0" />
      <path fill={forceColor ?? '#d60000'} d="m82.957 141.918 6.008 31.406 25.39-20.355-5.812-31.602Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m266.32 711.121 22.094-22.293-13.18 7.172-23.453 23.07Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m389.012 421.672 65.902-9.305 6.977-11.633-65.512 8.918Zm0 0" />
      <path fill={forceColor ?? '#ff9c00'} d="m40.703 304.188 6.977 28.886 13.957-37.418-6.399-30.05Zm0 0" />
      <path fill={forceColor ?? '#30ffc7'} d="m59.309 603.91 6.398-.191-5.816-35.285-6.782-2.52Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m567.336 461.223 61.637-12.989 2.906 17.059-61.445 13.379Zm0 0" />
      <path fill={forceColor ?? '#0050ff'} d="m255.465 769.281-3.88-16.863-17.44 9.305 2.52 17.449Zm0 0" />
      <path fill={forceColor ?? '#00e4f8'} d="m342.3 643.848 41.673-19.578-8.918 12.02-42.64 20.55Zm0 0" />
      <path fill={forceColor ?? '#00c0ff'} d="m300.625 678.164 31.79-21.324-11.048 9.887-32.953 22.101Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m479.531 384.645 62.801-11.829 9.883-3.875-62.8 11.825Zm0 0" />
      <path fill={forceColor ?? '#a0ff56'} d="m250.04 486.426 61.054-8.145 2.715-18.027-60.864 6.785Zm0 0" />
      <path fill={forceColor ?? '#50ffa7'} d="m451.426 559.32 57.18-14.343-3.684 16.285-57.375 15.508Zm0 0" />
      <path fill={forceColor ?? '#0080ff'} d="m254.496 732.836 11.824-21.715-14.539 7.95-13.18 22.1Zm0 0" />
      <path fill={forceColor ?? '#46ffb1'} d="m120.172 583.75 35.082-10.86-3.875-24.812-35.664 8.527Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m383.195 476.344.582 26.172-.191 49.246-.582-25.203Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m510.734 509.3 61.059-12.988-.195 17.45-61.055 13.57Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m251.586 752.418 2.91-19.777-15.894 8.53-4.457 20.552Zm0 0" />
      <path fill={forceColor ?? '#5dff9a'} d="m48.648 559.32 4.461 6.594-2.714-38.195-4.653-9.305Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="m329.895 220.434 3.101 29.277 18.606 46.14-3.098-29.081Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m37.797 374.563 5.812 25.007 9.5-39.937-5.43-26.559Zm0 0" />
      <path fill={forceColor ?? '#87ff70'} d="m195.184 515.7 54.078-8.723.777-20.551-54.078 6.98Zm0 0" />
      <path fill={forceColor ?? '#6aff8d'} d="m151.379 548.078 45.16-9.695-1.355-22.684-45.356 7.563Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m562.684 444.55 61.828-12.796 4.46 16.48-61.636 12.989Zm0 0" />
      <path fill={forceColor ?? '#36ffc1'} d="m65.707 603.719 10.856-3.88-5.235-32.57-11.437 1.165Zm0 0" />
      <path fill={forceColor ?? '#caff2c'} d="m318.266 443.387 64.93-7.563 5.816-14.152-64.739 6.785Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m396.379 409.652 65.512-8.918 8.336-9.304-65.32 8.53Zm0 0" />
      <path fill={forceColor ?? '#90ff66'} d="m41.867 504.844 3.875 13.57.969-40.133-3.875-15.894Zm0 0" />
      <path fill={forceColor ?? '#caff2c'} d="m38.375 442.61 4.46 19.777 5.04-40.907-4.266-21.91Zm0 0" />
      <path fill={forceColor ?? '#40ffb7'} d="m94.2 592.86 25.972-9.11-4.457-27.145-26.363 6.594Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m489.414 380.766 62.8-11.825 10.274-1.164-62.605 11.825Zm0 0" />
      <path fill={forceColor ?? '#0054ff'} d="m282.02 765.793-9.5-11.824-17.055 15.312 8.14 12.797Zm0 0" />
      <path fill={forceColor ?? '#33ffc4'} d="m397.348 592.86 50.199-16.09-5.426 15.507-50.59 17.45Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m76.563 599.84 17.636-6.98-4.847-29.66-18.024 4.265Zm0 0" />
      <path fill={forceColor ?? '#00acff'} d="m279.5 699.297 20.934-21.133-12.02 10.664-22.094 22.293Zm0 0" />
      <path fill={forceColor ?? 'maroon'} d="m163.008 75.227 3.297 29.468 30.625 4.457-3.493-29.468Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m365.945 345.29 2.91 29.077 9.497 50.797-2.907-28.695Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m556.672 428.848 61.832-12.602 6.008 15.508-61.828 12.797Zm0 0" />
      <path fill={forceColor ?? '#94ff63'} d="m509.188 490.883 61.246-12.211 1.359 17.64-61.059 12.989Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m350.441 627.953 41.09-18.226-7.558 14.543-41.672 19.578Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m311.094 663.816 31.207-19.968-9.887 12.992-31.98 21.324Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m453.363 540.902 57.18-13.57-1.938 17.645-57.18 14.539Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m499.883 379.602 62.605-11.825 10.469 1.551-62.61 11.824Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="m252.945 467.04 60.864-6.786 4.457-16.867-60.668 5.62Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m383.586 551.762-2.91 21.71-4.649 45.563 2.711-20.36Zm0 0" />
      <path fill={forceColor ?? '#ff2500'} d="m66.676 200.855 6.976 31.598 21.903-26.945-6.59-32.184Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m115.715 556.605 35.664-8.527-1.55-24.816-35.86 6.008Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m269.031 719.848 10.469-20.551-13.18 11.824-11.824 21.52Zm0 0" />
      <path fill={forceColor ?? '#0068ff'} d="m310.707 749.508-12.406-5.43-16.281 21.715 11.242 6.785Zm0 0" />
      <path fill={forceColor ?? '#e1ff16'} d="m549.113 414.887 62.028-12.407 7.363 13.766-61.832 12.602Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m404.906 399.96 65.32-8.53 9.305-6.785-65.129 8.335Zm0 0" />
      <path fill={forceColor ?? '#006cff'} d="m272.52 753.969-5.04-15.703-15.894 14.152 3.879 16.863Zm0 0" />
      <path fill={forceColor ?? '#ff2900'} d="m307.605 178.754 3.102 29.469 22.29 41.488-3.102-29.277Zm0 0" />
      <path fill={forceColor ?? '#60ff97'} d="m53.11 565.914 6.78 2.52-2.519-35.48-6.976-5.235Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m510.348 381.348 62.609-12.02 10.465 4.652-62.606 11.829Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m324.273 428.457 64.739-6.785 7.367-12.02-64.352 6.012Zm0 0" />
      <path fill={forceColor ?? '#a4ff53'} d="m195.96 493.406 54.08-6.98 2.905-19.387-53.886 5.04Zm0 0" />
      <path fill={forceColor ?? '#0080ff'} d="m267.48 738.457 1.551-18.61-14.535 12.989-2.91 19.582Zm0 0" />
      <path fill={forceColor ?? '#87ff70'} d="m149.828 523.262 45.356-7.563.777-22.293-45.36 5.426Zm0 0" />
      <path fill={forceColor ?? '#eeff09'} d="m540.586 402.867 62.023-12.215 8.532 11.828-62.028 12.407Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m520.816 385.809 62.606-12.024 9.887 7.176-62.22 12.02Zm0 0" />
      <path fill={forceColor ?? '#ad0000'} d="m108.543 121.367 5.812 31.602 27.915-12.215-5.622-31.988Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m531.09 392.98 62.219-12.02 9.3 9.692-62.023 12.215Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m376.027 619.035-6.98 15.895-8.723 40.715 6.59-14.153Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m505.89 472.66 61.446-11.437 3.098 17.449-61.246 12.21Zm0 0" />
      <path fill={forceColor ?? '#4dffaa'} d="m401.418 574.25 50.008-14.93-3.88 17.45-50.198 16.09Zm0 0" />
      <path fill={forceColor ?? '#08f'} d="m337.84 719.457-12.598 1.55-14.535 28.5h11.629Zm0 0" />
      <path fill={forceColor ?? 'maroon'} d="m193.633 79.684 3.297 29.468 30.625 13.184-3.493-29.66Zm0 0" />
      <path fill={forceColor ?? '#66ff90'} d="m89.352 563.2 26.363-6.595-1.746-27.335-26.555 3.878Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m360.324 675.645-10.465 8.918-12.02 34.894 9.692-7.172Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m291.129 683.594 19.965-19.778-10.66 14.348-20.934 21.133Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m453.559 521.516 57.175-12.215-.191 18.031-57.18 13.57Zm0 0" />
      <path fill={forceColor ?? '#60ff97'} d="m59.89 568.434 11.438-1.164L69 534.7l-11.629-1.747Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m414.402 392.98 64.934-8.335 10.078-3.88-64.738 8.145Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="m282.02 143.082 3.101 29.273 25.586 35.868-3.102-29.47Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m71.328 567.27 18.024-4.07-1.938-30.052L69 534.7Zm0 0" />
      <path fill={forceColor ?? '#90ff66'} d="m45.742 518.414 4.653 9.305.773-37.61-4.457-11.828Zm0 0" />
      <path fill={forceColor ?? '#2cffca'} d="m356.645 609.535 40.703-16.676-5.817 16.868-41.09 18.226Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m257.598 449.008 60.668-5.621 6.007-14.93-60.086 4.461Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="m55.238 265.605 6.399 30.051 18.023-32.183-6.008-31.02Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m320.008 646.367 30.433-18.414-8.14 15.895-31.207 19.968Zm0 0" />
      <path fill={forceColor ?? '#920000'} d="m224.063 92.676 3.492 29.66 29.652 21.133L253.914 114Zm0 0" />
      <path fill={forceColor ?? '#eeff09'} d="m332.027 415.664 64.352-6.012 8.527-9.691-63.965 5.426Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m501.043 455.21 61.64-10.66 4.653 16.673-61.445 11.437Zm0 0" />
      <path fill={forceColor ?? '#007cff'} d="m298.3 744.078-10.66-10.273-15.12 20.164 9.5 11.824Zm0 0" />
      <path fill={forceColor ?? '#b20000'} d="m253.914 114 3.293 29.469 27.914 28.886-3.101-29.273Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m378.352 425.164.773 27.336 4.652 50.016-.582-26.172Zm0 0" />
      <path fill={forceColor ?? '#8aff6d'} d="m113.969 529.27 35.86-6.008.773-24.43-35.856 3.492Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m424.676 388.91 64.738-8.144 10.469-1.164-64.352 8.144Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m199.059 472.078 53.886-5.039 4.653-18.031-53.496 3.492Zm0 0" />
      <path fill={forceColor ?? '#00b4ff'} d="m281.824 702.59 9.305-18.996-11.629 15.703-10.469 20.55Zm0 0" />
      <path fill={forceColor ?? '#ffa300'} d="m351.602 295.852 3.101 29.855 14.152 48.66-2.91-29.273Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m42.836 462.387 3.875 15.894 4.848-38.578-3.684-18.223Zm0 0" />
      <path fill={forceColor ?? '#a7ff50'} d="m150.602 498.832 45.359-5.426 3.098-21.328-45.16 3.297Zm0 0" />
      <path fill={forceColor ?? '#ffa300'} d="m47.68 333.074 5.43 26.559 13.566-35.863-5.04-28.114Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m403.55 554.281 49.813-13.379-1.937 18.614-50.008 14.734Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m451.813 502.129 57.375-11.246 1.546 18.418-57.175 12.215Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m43.61 399.57 4.265 21.91 9.11-38-3.876-23.847Zm0 0" />
      <path fill={forceColor ?? '#d4ff23'} d="m494.648 439.121 62.024-10.273 6.012 15.703-61.641 10.66Zm0 0" />
      <path fill={forceColor ?? '#0090ff'} d="m287.64 733.805-6.398-14.153-13.762 18.614 5.04 15.703Zm0 0" />
      <path fill={forceColor ?? '#00a0ff'} d="m281.242 719.652.39-17.062-12.6 17.258-1.552 18.609Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m435.531 387.746 64.352-8.144 10.465 1.746-63.961 8.144Zm0 0" />
      <path fill={forceColor ?? '#8dff6a'} d="m50.395 527.719 6.976 5.234.969-34.894-7.172-7.95Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m264.188 432.723 60.085-4.266 7.754-12.793-59.699 3.293Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m340.941 405.387 63.965-5.426 9.496-6.98-63.379 5.039Zm0 0" />
      <path fill={forceColor ?? '#8aff6d'} d="m87.414 533.148 26.555-3.878.777-26.946-26.555 1.356Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m300.82 664.594 19.188-18.227-8.914 17.45-19.965 19.777Zm0 0" />
      <path fill={forceColor ?? '#0098ff'} d="m325.242 721.008-13.18-3.488-13.761 26.558 12.406 5.43Zm0 0" />
      <path fill={forceColor ?? '#46ffb1'} d="m361.102 589.176 40.316-14.926-4.07 18.61-40.703 16.675Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m486.703 424.582 62.41-9.695 7.559 13.96-62.024 10.274Zm0 0" />
      <path fill={forceColor ?? '#920000'} d="m136.648 108.766 5.622 31.988 29.265-4.07-5.23-31.989Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="m88.965 173.324 6.59 32.184 24.812-19.778-6.012-32.761Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m446.387 389.492 63.96-8.144 10.66 4.46-63.573 8.337Zm0 0" />
      <path fill={forceColor ?? '#26ffd1'} d="m326.988 626.207 29.657-16.672-6.204 18.418-30.433 18.414Zm0 0" />
      <path fill={forceColor ?? '#83ff73'} d="m383.777 502.516-2.906 23.265-.195 47.692 2.91-21.711Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m477.785 411.98 62.8-9.113 8.528 12.02-62.41 9.695Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m457.434 394.145 63.574-8.336 10.082 7.367-63.192 8.527Zm0 0" />
      <path fill={forceColor ?? '#8dff6a'} d="M57.371 532.953 69 534.7l.969-32.183-11.63-4.457Zm0 0" />
      <path fill={forceColor ?? '#8dff6a'} d="m69 534.7 18.414-1.552.777-29.468-18.222-1.164Zm0 0" />
      <path fill={forceColor ?? '#adff49'} d="m448.324 482.742 57.567-10.082 3.296 18.223-57.375 11.246Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m467.898 401.703 63.192-8.723 9.496 9.887-62.8 9.113Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m204.102 452.5 53.496-3.492 6.59-16.09-53.11 1.937Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m403.55 533.344 50.009-11.828-.196 19.386-49.812 13.38Zm0 0" />
      <path fill={forceColor ?? '#aaff4d'} d="m114.746 502.324 35.856-3.492 3.296-23.457-35.664 1.355Zm0 0" />
      <path fill={forceColor ?? '#00c4ff'} d="m349.86 684.563-13.18 3.683-11.438 32.762 12.598-1.551Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m351.023 398.02 63.38-5.04 10.273-4.07-62.801 4.652Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m153.898 475.375 45.16-3.297 5.044-19.578-44.778 1.355Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m292.293 681.652 8.527-17.058-9.691 19-9.496 18.996Zm0 0" />
      <path fill={forceColor ?? '#46ffb1'} d="m380.676 573.473-7.172 17.644-4.457 43.813 6.98-15.895Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m46.71 478.281 4.458 11.828 4.652-36.058-4.261-14.348Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m332.996 249.71 3.488 30.438 18.22 45.559-3.102-29.855Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m272.328 418.957 59.7-3.293 8.913-10.277-59.117 2.52Zm0 0" />
      <path fill={forceColor ?? '#00a8ff'} d="m312.063 717.52-11.825-8.336-12.597 24.62 10.66 10.274Zm0 0" />
      <path fill={forceColor ?? '#0ff8e7'} d="M369.047 634.93 358 645.79l-8.14 38.773 10.464-8.918Zm0 0" />
      <path fill={forceColor ?? '#c4ff33'} d="m443.09 464.324 57.953-9.113 4.848 17.45-57.567 10.081Zm0 0" />
      <path fill={forceColor ?? '#63ff94'} d="m363.234 567.465 40.317-13.184-2.133 19.969-40.316 14.926Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m368.855 374.367.97 28.5 9.3 49.438-.773-27.14Zm0 0" />
      <path fill={forceColor ?? '#ff3000'} d="m73.652 232.453 6.008 31.02 21.324-25.977-5.43-31.988Zm0 0" />
      <path fill={forceColor ?? '#00c8ff'} d="m292.875 696.969-.582-15.317-10.469 20.938-.582 17.062Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m361.875 393.563 62.8-4.653 10.856-1.164-62.219 4.652Zm0 0" />
      <path fill={forceColor ?? '#00b8ff'} d="m300.238 709.184-7.363-12.215-11.633 22.683 6.399 14.153Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m308.379 642.492 18.414-16.285-6.785 20.16-19.188 18.227Zm0 0" />
      <path fill={forceColor ?? '#adff49'} d="m88.191 503.68 26.555-1.356 3.488-25.594-26.359-1.16Zm0 0" />
      <path fill={forceColor ?? '#840000'} d="m166.305 104.695 5.23 31.989 30.238 4.457-4.843-31.989Zm0 0" />
      <path fill={forceColor ?? '#97ff60'} d="m401.61 512.406 50.202-10.277 1.747 19.387-50.008 11.828Zm0 0" />
      <path fill={forceColor ?? '#43ffb4'} d="m331.64 603.91 29.266-14.734-4.261 20.36-29.852 16.671Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m47.875 421.48 3.684 18.223 8.527-35.867-3.102-20.356Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m436.113 447.07 58.535-7.949 6.395 16.09-57.953 9.113Zm0 0" />
      <path fill={forceColor ?? '#eeff09'} d="m211.078 434.855 53.11-2.132 8.14-13.766-52.527.777Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m51.168 490.11 7.172 7.949 4.07-33.348-6.59-10.66Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m281.824 407.906 59.117-2.52 10.082-7.366-58.343 1.94Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m373.313 392.398 62.218-4.652 10.856 1.746-61.446 4.653Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m61.637 295.656 5.039 28.114 17.25-30.829-4.266-29.468Zm0 0" />
      <path fill={forceColor ?? '#caff2c'} d="m118.234 476.73 35.664-1.355 5.426-21.52-35.277-.968Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m69.969 502.516 18.222 1.164 3.684-28.11-18.027-3.879Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m53.11 359.633 3.874 23.847 12.985-34.12-3.293-25.59Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m159.324 453.855 44.778-1.355 6.976-17.645-44.191-.386Zm0 0" />
      <path fill={forceColor ?? '#ff2d00'} d="m310.707 208.223 3.68 30.824 22.097 41.101-3.488-30.437Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m427.777 431.559 58.926-6.977 7.945 14.54-58.535 7.948Zm0 0" />
      <path fill={forceColor ?? '#0cf'} d="m336.68 688.246-14.153-1.55-10.464 30.824 13.18 3.488Zm0 0" />
      <path fill={forceColor ?? '#b00'} d="m114.355 152.969 6.012 32.761 27.328-11.824-5.425-33.152Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="m58.34 498.059 11.629 4.457 3.879-30.825-11.438-6.98Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m384.941 394.145 61.446-4.653 11.047 4.653-60.864 5.039Zm0 0" />
      <path fill={forceColor ?? '#7dff7a'} d="m363.234 544.586 40.317-11.242v20.937l-40.317 13.184Zm0 0" />
      <path fill={forceColor ?? '#b1ff46'} d="m397.734 491.465 50.59-8.723 3.488 19.387-50.203 10.277Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m300.625 657.613 7.754-15.12-7.559 22.1-8.527 17.06Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m418.281 418.184 59.504-6.204 8.918 12.602-58.926 6.977Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m396.57 399.184 60.864-5.04 10.464 7.56-60.277 5.624Zm0 0" />
      <path fill={forceColor ?? '#890000'} d="m196.93 109.152 4.843 32.184 30.239 12.797-4.457-31.797Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m407.621 407.328 60.277-5.625 9.887 10.277-59.504 6.204Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m379.125 452.5-2.906 24.813 4.652 48.468 2.906-23.265Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m292.68 399.96 58.343-1.94 10.852-4.457-57.566 1.55Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m219.8 419.734 52.528-.777 9.496-11.05-51.558-.192Zm0 0" />
      <path fill={forceColor ?? '#60ff97'} d="m333.965 580.066 29.27-12.601-2.329 21.71-29.265 14.735Zm0 0" />
      <path fill={forceColor ?? '#3cffba'} d="m313.418 618.063 18.223-14.153-4.848 22.297-18.414 16.285Zm0 0" />
      <path fill={forceColor ?? '#e40000'} d="m285.121 172.355 4.07 31.407 25.196 35.285-3.68-30.824Zm0 0" />
      <path fill={forceColor ?? '#00d8ff'} d="m322.527 686.695-12.402-6.203-9.887 28.692 11.825 8.336Zm0 0" />
      <path fill={forceColor ?? '#16ffe1'} d="m358.195 645.79-13.765 5.815-7.75 36.641 13.18-3.683Zm0 0" />
      <path fill={forceColor ?? '#0cf4eb'} d="m301.79 670.602-1.165-12.989-8.332 24.04.582 15.316Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m91.875 475.57 26.36 1.16 5.812-23.843-25.777-3.297Zm0 0" />
      <path fill={forceColor ?? '#9b0000'} d="m227.555 122.336 4.457 31.797 29.46 21.129-4.265-31.793Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m51.559 439.703 4.261 14.348 7.95-33.348-3.684-16.867Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m391.918 471.496 51.172-7.172 5.234 18.418-50.59 8.723Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m354.703 325.707 1.36 29.273 13.761 47.887-.969-28.5Zm0 0" />
      <path fill={forceColor ?? '#b00'} d="m257.207 143.469 4.266 31.793 27.718 28.5-4.07-31.407Zm0 0" />
      <path fill={forceColor ?? '#02e8f4'} d="m310.125 680.492-8.336-9.89-8.914 26.367 7.363 12.215Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m380.871 525.781-7.367 19.582v45.754l7.172-17.644Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="m166.887 434.469 44.191.386 8.723-15.12-43.418-1.747Zm0 0" />
      <path fill={forceColor ?? '#9aff5d'} d="m361.102 521.71 40.507-9.304 1.942 20.938-40.317 11.242Zm0 0" />
      <path fill={forceColor ?? '#49ffad'} d="m373.504 591.117-11.238 12.988-4.07 41.684 10.85-10.86Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m304.309 395.113 57.566-1.55 11.438-1.165-56.793 1.356Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m124.047 452.887 35.277.968 7.563-19.386-34.504-2.91Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m95.555 205.508 5.43 31.988 24.226-19-4.844-32.766Zm0 0" />
      <path fill={forceColor ?? '#dbff1c'} d="m73.848 471.691 18.027 3.88 6.395-26.176-17.446-6.204Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m384.555 452.887 51.558-5.817 6.977 17.254-51.172 7.172Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m230.266 407.715 51.558.191 10.856-7.945-50.785-.973Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m55.82 454.05 6.59 10.66 7.559-31.019-6.2-12.988Zm0 0" />
      <path fill={forceColor ?? '#9f0000'} d="m142.27 140.754 5.425 32.957 28.883-3.684-5.043-33.343Zm0 0" />
      <path fill={forceColor ?? '#36ffc1'} d="m306.246 630.664 7.172-12.601-5.04 24.43-7.753 15.12Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m56.984 383.48 3.102 20.356 12.21-31.988-2.327-22.489Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m316.52 393.754 56.793-1.356 11.628 1.747-55.824 1.742Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m333.965 555.055 29.27-10.47v22.88l-29.27 12.601Zm0 0" />
      <path fill={forceColor ?? '#e1ff16'} d="m62.41 464.71 11.438 6.981 6.976-28.5-10.855-9.5Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m375.445 436.215 52.332-4.656 8.336 15.511-51.558 5.817Zm0 0" />
      <path fill={forceColor ?? '#5dff9a'} d="m316.133 591.7 17.832-11.634-2.324 23.844-18.223 14.153Zm0 0" />
      <path fill={forceColor ?? '#ff3b00'} d="m79.66 263.473 4.266 29.468 20.547-24.812-3.489-30.633Zm0 0" />
      <path fill={forceColor ?? '#1cffdb'} d="m344.43 651.605-14.73.774-7.173 34.316 14.153 1.551Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="m356.836 498.832 40.898-7.367 3.875 20.941-40.507 9.305Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m329.117 395.887 55.824-1.742 11.63 5.039-55.048 2.132Zm0 0" />
      <path fill={forceColor ?? '#ff7a00'} d="m66.676 323.77 3.293 25.59 16.476-29.274-2.52-27.145Zm0 0" />
      <path fill={forceColor ?? '#ffea00'} d="m365.172 421.672 53.11-3.488 9.495 13.375-52.332 4.656Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m176.383 417.988 43.418 1.746 10.465-12.02-42.45-3.1Zm0 0" />
      <path fill={forceColor ?? '#ffd000'} d="m341.523 401.316 55.047-2.132 11.051 8.144-53.887 2.711Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m98.27 449.59 25.777 3.297 8.336-21.328-25.196-5.426Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m353.734 410.04 53.887-2.712 10.66 10.856-53.11 3.488Zm0 0" />
      <path fill={forceColor ?? '#ffc800'} d="m241.895 398.988 50.785.973 11.629-4.848-49.813-1.36Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m336.484 280.148 1.551 30.438 18.027 44.394-1.359-29.273Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m369.824 402.867-2.52 26.367 8.915 48.079 2.906-24.813Zm0 0" />
      <path fill={forceColor ?? '#30ffc7'} d="m307.992 641.328-1.746-10.664-5.621 26.95 1.164 12.988Zm0 0" />
      <path fill={forceColor ?? '#ffe600'} d="m132.383 431.559 34.504 2.91 9.496-16.48-33.531-4.458Zm0 0" />
      <path fill={forceColor ?? '#23ffd4'} d="m329.7 652.379-12.985-3.684-6.59 31.797 12.402 6.203Zm0 0" />
      <path fill={forceColor ?? '#29ffce'} d="m316.715 648.695-8.723-7.367-6.203 29.274 8.336 9.89Zm0 0" />
      <path fill={forceColor ?? '#d1ff26'} d="m350.441 477.121 41.477-5.625 5.816 19.969-40.898 7.367Zm0 0" />
      <path fill={forceColor ?? '#9dff5a'} d="m331.445 529.852 29.657-8.141 2.132 22.875-29.27 10.469Zm0 0" />
      <path fill={forceColor ?? '#ffc400'} d="m60.086 403.836 3.684 16.867 11.433-30.05-2.906-18.805Zm0 0" />
      <path fill={forceColor ?? '#4dffaa'} d="m362.266 604.105-13.957 8.141-3.88 39.36L358 645.788Zm0 0" />
      <path fill={forceColor ?? '#920000'} d="m171.535 136.684 5.043 33.343 29.461 4.461-4.266-33.347Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m254.496 393.754 49.813 1.36 12.21-1.36-48.648-1.55Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m80.824 443.191 17.446 6.399 8.918-23.457-16.672-8.531Zm0 0" />
      <path fill={forceColor ?? '#5aff9d'} d="m308.96 601.973 7.173-10.274-2.715 26.364-7.172 12.601Zm0 0" />
      <path fill={forceColor ?? '#c80000'} d="m120.367 185.73 4.844 32.766 26.363-11.633-3.879-32.957Zm0 0" />
      <path fill={forceColor ?? '#beff39'} d="m376.219 477.313-6.977 21.328 4.262 46.722 7.367-19.582Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m315.938 564.363 18.027-9.308v25.011L316.133 591.7Zm0 0" />
      <path fill={forceColor ?? '#ffc800'} d="m187.816 404.613 42.45 3.102 11.629-8.727-41.477-3.875Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m373.504 545.363-11.047 15.121-.191 43.621 11.238-12.988Zm0 0" />
      <path fill={forceColor ?? '#e7ff0f'} d="m342.105 456.762 42.45-3.875 7.558 18.61-41.672 5.624Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m63.77 420.703 6.199 12.988 10.664-27.722-5.43-15.317Zm0 0" />
      <path fill={forceColor ?? '#ff3400'} d="m314.387 239.047 1.941 31.406 21.707 40.133-1.55-30.438Zm0 0" />
      <path fill={forceColor ?? '#ffde00'} d="m69.969 433.691 10.855 9.5 9.692-25.59-9.883-11.632Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m267.871 392.203 48.649 1.55 12.597 2.134-47.484-1.551Zm0 0" />
      <path fill={forceColor ?? 'gold'} d="m107.188 426.133 25.195 5.426 10.469-18.028-24.23-7.367Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m142.852 413.531 33.53 4.457 11.434-13.375-32.754-5.816Zm0 0" />
      <path fill={forceColor ?? '#ff8600'} d="m69.969 349.36 2.328 22.488 15.508-27.528-1.36-24.234Zm0 0" />
      <path fill={forceColor ?? '#baff3c'} d="m326.598 504.844 30.238-6.012 4.266 22.879-29.657 8.14Zm0 0" />
      <path fill={forceColor ?? '#960000'} d="m201.773 141.336 4.266 33.152 29.656 12.793-3.683-33.148Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m332.219 438.54 43.226-2.325 9.11 16.672-42.45 3.875Zm0 0" />
      <path fill={forceColor ?? '#56ffa0'} d="m311.094 609.727-2.133-7.754-2.715 28.691 1.746 10.664Zm0 0" />
      <path fill={forceColor ?? '#4dffaa'} d="m348.309 612.246-14.926 3.297-3.684 36.836 14.73-.774Zm0 0" />
      <path fill={forceColor ?? '#ff1300'} d="m100.984 237.496 3.489 30.633 23.257-18.227-2.52-31.406Zm0 0" />
      <path fill={forceColor ?? '#ffbd00'} d="m281.633 394.336 47.484 1.55 12.406 5.43-46.324-.968Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m356.063 354.98-2.329 27.918 13.57 46.336 2.52-26.367Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m289.191 203.762 2.52 31.988 24.617 34.703-1.941-31.406Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m200.418 394.918 41.477 4.07 12.601-5.234-40.125-4.457Zm0 0" />
      <path fill={forceColor ?? '#ffdb00'} d="m320.785 422.64 44.387-.968 10.273 14.543-43.226 2.324Zm0 0" />
      <path fill={forceColor ?? '#ff4a00'} d="m83.926 292.941 2.52 27.145 19.577-23.461-1.55-28.496Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m295.2 400.348 46.323.968 12.211 8.723-45.355-.191Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m308.379 409.848 45.355.191 11.438 11.633-44.387.969Zm0 0" />
      <path fill={forceColor ?? '#a40000'} d="m232.012 154.133 3.683 33.148 28.88 20.551-3.102-32.57Zm0 0" />
      <path fill={forceColor ?? '#a0ff56'} d="m313.227 536.637 18.218-6.785 2.52 25.203-18.027 9.308Zm0 0" />
      <path fill={forceColor ?? '#c40000'} d="m261.473 175.262 3.101 32.57 27.137 27.918-2.52-31.988Zm0 0" />
      <path fill={forceColor ?? '#53ffa4'} d="m320.008 614.574-8.914-4.847-3.102 31.601 8.723 7.367Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m308.766 571.922 7.171-7.559.196 27.336-7.172 10.274Zm0 0" />
      <path fill={forceColor ?? '#50ffa7'} d="m333.383 615.543-13.375-.969-3.293 34.121 12.984 3.684Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m319.621 480.996 30.82-3.875 6.395 21.711-30.238 6.012Zm0 0" />
      <path fill={forceColor ?? '#ffc800'} d="m90.516 417.602 16.671 8.53 11.434-19.968-15.504-10.277Zm0 0" />
      <path fill={forceColor ?? '#ad0000'} d="m147.695 173.906 3.88 32.957 27.91-3.488-3.102-33.348Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m72.297 371.848 2.906 18.804 14.54-25.785-1.938-20.547Zm0 0" />
      <path fill={forceColor ?? '#ffb600'} d="m155.254 398.797 32.562 5.816 12.602-9.5-31.207-6.98Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m362.457 560.484-14.148 10.664v41.098l13.957-8.14Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m214.371 389.297 40.125 4.457 13.375-1.55-38.766-4.653Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m118.621 406.164 24.23 7.367 12.212-14.734-22.872-8.727Zm0 0" />
      <path fill={forceColor ?? '#f8f500'} d="M367.305 429.234 360.52 452.5l8.722 46.14 6.977-21.327Zm0 0" />
      <path fill={forceColor ?? '#ffb600'} d="m80.633 405.969 9.883 11.633 12.601-21.715-9.113-13.762Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m75.203 390.652 5.43 15.317 13.37-23.844-4.26-17.258Zm0 0" />
      <path fill={forceColor ?? '#baff3c'} d="m369.242 498.64-11.047 17.641 4.262 44.203 11.047-15.12Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m310.512 458.508 31.593-1.746 8.336 20.36-30.82 3.874Zm0 0" />
      <path fill={forceColor ?? '#c1ff36'} d="m307.992 509.11 18.606-4.266 4.847 25.008-18.218 6.785Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m310.898 576.965-2.132-5.043.195 30.05 2.133 7.755Zm0 0" />
      <path fill={forceColor ?? '#ff7300'} d="m338.035 310.586-1.746 29.078 17.445 43.234 2.329-27.722Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m229.105 387.55 38.766 4.653 13.762 2.133-37.606-4.266Zm0 0" />
      <path fill={forceColor ?? '#ff5d00'} d="m86.445 320.086 1.36 24.234 18.605-22.297-.387-25.398Zm0 0" />
      <path fill={forceColor ?? '#a4ff53'} d="m305.86 541.293 7.367-4.656 2.71 27.726-7.171 7.559Zm0 0" />
      <path fill={forceColor ?? '#da0000'} d="m125.21 218.496 2.52 31.406 25.391-11.05-1.547-31.989Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="M299.656 438.54h32.563l9.886 18.222-31.593 1.746Zm0 0" />
      <path fill={forceColor ?? '#ffa300'} d="m169.21 388.133 31.208 6.98 13.953-5.816-30.043-7.367Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m348.309 571.148-14.926 6.008v38.387l14.926-3.297Zm0 0" />
      <path fill={forceColor ?? '#a40000'} d="m176.383 170.027 3.101 33.153 28.88 4.46-2.325-33.152Zm0 0" />
      <path fill={forceColor ?? '#ffab00'} d="m244.027 390.07 37.606 4.266 13.566 6.012-36.246-3.684Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m102.922 395.695 15.7 10.47 13.57-16.095-14.344-11.824Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m320.008 578.902-9.11-1.937.196 32.762 8.914 4.847Zm0 0" />
      <path fill={forceColor ?? '#ff2500'} d="m104.473 268.129 1.55 28.496 22.094-17.445-.387-29.278Zm0 0" />
      <path fill={forceColor ?? '#fc0'} d="m287.059 421.09 33.726 1.55 11.434 15.9h-32.563Zm0 0" />
      <path fill={forceColor ?? '#ffae00'} d="m258.953 396.664 36.246 3.684 13.18 9.5-34.887-2.715Zm0 0" />
      <path fill={forceColor ?? '#80ff77'} d="m333.383 577.156-13.375 1.746v35.672l13.375.969Zm0 0" />
      <path fill={forceColor ?? '#ff9f00'} d="m132.191 390.07 23.063 8.727 13.957-10.664-21.711-9.692Zm0 0" />
      <path fill={forceColor ?? '#ffbd00'} d="m273.492 407.133 34.887 2.715 12.406 12.793-33.726-1.551Zm0 0" />
      <path fill={forceColor ?? '#e1ff16'} d="m300.238 482.742 19.383-1.746 6.977 23.848-18.606 4.265Zm0 0" />
      <path fill={forceColor ?? '#ff3f00'} d="m316.328 270.453-.973 30.438 20.934 38.773 1.746-29.078Zm0 0" />
      <path fill={forceColor ?? '#ff6f00'} d="m87.805 344.32 1.937 20.547 17.25-20.547-.582-22.297Zm0 0" />
      <path fill={forceColor ?? '#ffb600'} d="m353.734 382.898-6.203 25.204L360.52 452.5l6.785-23.266Zm0 0" />
      <path fill={forceColor ?? '#ff9800'} d="m184.328 381.93 30.043 7.367 14.54-1.746-28.493-7.559Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m94.004 382.125 8.918 13.57 14.926-17.449-7.754-15.316Zm0 0" />
      <path fill={forceColor ?? '#b7ff40'} d="M358.195 516.281 344.43 529.27l3.879 41.878 14.148-10.664Zm0 0" />
      <path fill={forceColor ?? '#a40000'} d="m206.04 174.488 2.323 33.153 28.688 12.406-1.356-32.766Zm0 0" />
      <path fill={forceColor ?? '#a7ff50'} d="m307.605 543.617-1.746-2.324 2.907 30.629 2.132 5.043Zm0 0" />
      <path fill={forceColor ?? '#c7ff30'} d="m300.043 511.242 7.95-2.133 5.234 27.528-7.368 4.656Zm0 0" />
      <path fill={forceColor ?? '#ff8200'} d="m89.742 364.867 4.262 17.258 16.09-19.195-3.102-18.61Zm0 0" />
      <path fill={forceColor ?? '#f1fc06'} d="m360.52 452.5-10.66 19.773 8.335 43.817 11.047-17.45Zm0 0" />
      <path fill={forceColor ?? '#fbf100'} d="m290.16 458.121 20.352.387 9.11 22.488-19.384 1.746Zm0 0" />
      <path fill={forceColor ?? '#ff1300'} d="m291.71 235.75-.386 31.602 24.031 33.539.973-30.438Zm0 0" />
      <path fill={forceColor ?? '#c40000'} d="m151.574 206.863 1.547 31.989 26.945-3.293-.582-32.38Zm0 0" />
      <path fill={forceColor ?? '#b60000'} d="m235.695 187.281 1.356 32.766 27.91 20.164-.387-32.379Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m200.418 379.992 28.492 7.559 15.117 2.52-27.136-7.368Zm0 0" />
      <path
        fill={forceColor ?? '#ff8d00'}
        d="m147.5 378.441 21.71 9.692 15.118-6.203-20.156-10.47ZM117.848 378.246l14.343 11.824 15.309-11.629-12.984-12.992Zm0 0"
      />
      <path fill={forceColor ?? '#d10000'} d="m264.574 207.832.387 32.379 26.363 27.14.387-31.601Zm0 0" />
      <path fill={forceColor ?? '#ff3800'} d="m106.023 296.625.387 25.398 20.934-16.285.773-26.558Zm0 0" />
      <path fill={forceColor ?? '#adff49'} d="m316.52 542.648-8.915.97 3.293 33.347 9.11 1.937Zm0 0" />
      <path fill={forceColor ?? '#b4ff43'} d="m344.43 529.27-14.73 8.726 3.683 39.16 14.926-6.008Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m278.14 436.02 21.516 2.52 10.856 19.968-20.352-.387Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m127.73 249.902.387 29.278 24.23-10.278.774-30.05Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m216.89 382.703 27.137 7.367 14.926 6.594-25.586-6.785Zm0 0" />
      <path fill={forceColor ?? '#b1ff46'} d="m329.7 538.188-13.18 4.46 3.488 36.254 13.375-1.746Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m291.516 482.16 8.722.582 7.754 26.367-7.949 2.133Zm0 0" />
      <path fill={forceColor ?? '#ff7e00'} d="m336.29 339.664-5.427 26.95 16.668 41.488 6.203-25.204Zm0 0" />
      <path fill={forceColor ?? '#ffb900'} d="m264.379 417.02 22.68 4.07 12.597 17.45-21.515-2.52Zm0 0" />
      <path fill={forceColor ?? '#ff9c00'} d="m233.367 389.879 25.586 6.785 14.54 10.469-24.231-5.621Zm0 0" />
      <path fill={forceColor ?? '#ceff29'} d="m301.207 510.66-1.164.582 5.816 30.051 1.746 2.324Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m249.262 401.512 24.23 5.62 13.567 13.958-22.68-4.07Zm0 0" />
      <path fill={forceColor ?? '#f70'} d="m110.094 362.93 7.754 15.316 16.668-12.797-6.203-16.476Zm0 0" />
      <path fill={forceColor ?? '#ff8200'} d="m164.172 371.46 20.156 10.47 16.09-1.938-18.61-10.664Zm0 0" />
      <path fill={forceColor ?? '#ff4a00'} d="m106.41 322.023.582 22.297 19.578-15.125.774-23.457Zm0 0" />
      <path fill={forceColor ?? '#b60000'} d="m179.484 203.18.582 32.379 27.715 4.261.582-32.18Zm0 0" />
      <path fill={forceColor ?? '#ebff0c'} d="m349.86 472.273-13.376 15.704 7.946 41.293 13.765-12.989Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="m106.992 344.32 3.102 18.61 18.219-13.957-1.743-19.778Zm0 0" />
      <path fill={forceColor ?? '#f70'} d="M134.516 365.45 147.5 378.44l16.672-6.98-11.438-13.766Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m347.531 408.102-10.078 21.906 12.406 42.265 10.66-19.773Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="m280.469 455.21 9.691 2.911 10.078 24.621-8.722-.582Zm0 0" />
      <path fill={forceColor ?? '#d7ff1f'} d="m309.543 506.781-8.336 3.88 6.398 32.956 8.915-.969Zm0 0" />
      <path fill={forceColor ?? '#ff4a00'} d="m315.355 300.89-4.843 28.5 20.351 37.223 5.426-26.949Zm0 0" />
      <path fill={forceColor ?? '#ff7a00'} d="m181.809 369.328 18.609 10.664 16.473 2.711-17.055-10.273Zm0 0" />
      <path fill={forceColor ?? '#ff1a00'} d="m128.117 279.18-.773 26.558 22.68-9.695 2.324-27.14Zm0 0" />
      <path fill={forceColor ?? '#da0000'} d="m153.121 238.852-.773 30.05 25.586-3.297 2.132-30.046Zm0 0" />
      <path fill={forceColor ?? '#f4f802'} d="m291.902 478.863-.386 3.297 8.527 29.082 1.164-.582Zm0 0" />
      <path fill={forceColor ?? '#e4ff13'} d="m336.484 487.977-14.343 11.437 7.367 38.774 14.922-8.918Zm0 0" />
      <path fill={forceColor ?? '#b00'} d="m208.363 207.64-.582 32.18 27.524 11.828 1.746-31.601Zm0 0" />
      <path fill={forceColor ?? '#ffc100'} d="m267.094 430.98 11.047 5.04 12.02 22.101-9.692-2.91Zm0 0" />
      <path fill={forceColor ?? '#deff19'} d="m322.14 499.414-12.597 7.367 6.977 35.867 12.988-4.46Zm0 0" />
      <path fill={forceColor ?? '#ff6000'} d="m128.313 348.973 6.203 16.476 18.218-7.754-4.652-17.058Zm0 0" />
      <path fill={forceColor ?? '#ff7e00'} d="m199.836 372.43 17.055 10.273 16.476 7.176-15.504-9.695Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m152.734 357.695 11.438 13.766 17.637-2.133-9.883-13.765Zm0 0" />
      <path fill={forceColor ?? '#ff1e00'} d="m291.324 267.352-3.879 29.855 23.067 32.184 4.843-28.5Zm0 0" />
      <path fill={forceColor ?? '#ffa700'} d="m251.977 409.848 12.402 7.172 13.762 19-11.047-5.04Zm0 0" />
      <path fill={forceColor ?? '#c80000'} d="m237.05 220.047-1.745 31.601 26.945 19.387 2.71-30.824Zm0 0" />
      <path fill={forceColor ?? '#ff8600'} d="m217.863 380.184 15.504 9.695 15.895 11.633-13.762-8.727Zm0 0" />
      <path fill={forceColor ?? '#ff3000'} d="m127.344 305.738-.774 23.457 21.32-9.11 2.133-24.042Zm0 0" />
      <path fill={forceColor ?? '#ff8900'} d="m330.863 366.613-9.304 24.04 15.894 39.355 10.078-21.906Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m235.5 392.785 13.762 8.727 15.117 15.508-12.402-7.172Zm0 0" />
      <path fill={forceColor ?? '#e40000'} d="m264.96 240.21-2.71 30.825 25.195 26.172 3.88-29.855Zm0 0" />
      <path fill={forceColor ?? '#ffc800'} d="m337.453 430.008-12.793 18.031 11.824 39.938 13.375-15.704Zm0 0" />
      <path fill={forceColor ?? '#ff4a00'} d="m126.57 329.195 1.743 19.778 19.769-8.336-.191-20.551Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m279.887 449.395.582 5.816 11.047 26.95.386-3.298Zm0 0" />
      <path fill={forceColor ?? '#feed00'} d="m299.27 472.469-7.368 6.394 9.305 31.797 8.336-3.879Zm0 0" />
      <path fill={forceColor ?? '#cd0000'} d="m180.066 235.559-2.132 30.046 26.359 4.266 3.488-30.05Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m171.926 355.563 9.883 13.765 18.027 3.102-8.14-13.766Zm0 0" />
      <path fill={forceColor ?? '#f10800'} d="m152.348 268.902-2.325 27.141 24.227-2.906 3.684-27.532Zm0 0" />
      <path fill={forceColor ?? '#ffd300'} d="m324.66 448.04-13.375 14.151 10.856 37.223 14.343-11.437Zm0 0" />
      <path fill={forceColor ?? '#ff5200'} d="m148.082 340.637 4.652 17.058 19.192-2.132-2.91-17.45Zm0 0" />
      <path fill={forceColor ?? '#ffe200'} d="M311.285 462.191 299.27 472.47l10.273 34.508 12.598-7.563Zm0 0" />
      <path fill={forceColor ?? '#ffb200'} d="m265.348 422.836 1.746 8.144 13.375 24.23-.582-5.815Zm0 0" />
      <path fill={forceColor ?? '#ff5900'} d="m310.512 329.39-8.336 25.59 19.383 35.672 9.304-24.039Zm0 0" />
      <path fill={forceColor ?? '#ff6400'} d="m191.695 358.664 8.14 13.766 18.028 7.754-6.398-12.793Zm0 0" />
      <path fill={forceColor ?? '#f20'} d="m150.023 296.043-2.132 24.043 22.675-2.715 3.684-24.234Zm0 0" />
      <path fill={forceColor ?? '#ffc400'} d="m286.281 440.285-6.394 9.11 12.015 29.468 7.368-6.394Zm0 0" />
      <path fill={forceColor ?? '#ff3800'} d="m147.89 320.086.192 20.55 20.934-2.523 1.55-20.742Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m321.559 390.652-12.016 20.36 15.117 37.027 12.793-18.031Zm0 0" />
      <path fill={forceColor ?? '#d10000'} d="m207.781 239.82-3.488 30.051 26.363 11.246 4.649-29.469Zm0 0" />
      <path fill={forceColor ?? '#ff9400'} d="m248.875 399.766 3.102 10.082 15.117 21.132-1.746-8.144Zm0 0" />
      <path fill={forceColor ?? '#ff6c00'} d="m211.465 367.39 6.398 12.794 17.637 12.601-4.844-11.633Zm0 0" />
      <path fill={forceColor ?? '#ff7e00'} d="m230.656 381.152 4.844 11.633 16.477 17.063-3.102-10.082Zm0 0" />
      <path fill={forceColor ?? '#ff3000'} d="m287.445 297.207-7.172 27.145 21.903 30.628 8.336-25.59Zm0 0" />
      <path fill={forceColor ?? '#ff4a00'} d="m169.016 338.113 2.91 17.45 19.77 3.101-1.165-17.059Zm0 0" />
      <path fill={forceColor ?? '#e80000'} d="m177.934 265.605-3.684 27.532 24.809 3.879 5.234-27.145Zm0 0" />
      <path fill={forceColor ?? '#df0000'} d="m235.305 251.648-4.649 29.66 25.582 18.227 6.012-28.5Zm0 0" />
      <path fill={forceColor ?? '#ffb200'} d="m297.137 427.488-10.856 12.797 13.184 32.184 11.82-10.278Zm0 0" />
      <path fill={forceColor ?? '#fa0f00'} d="m262.25 271.035-6.012 28.5 24.035 24.817 7.172-27.336Zm0 0" />
      <path fill={forceColor ?? '#ffa300'} d="m309.734 411.012-12.597 16.476 14.148 34.703 13.57-14.152Zm0 0" />
      <path fill={forceColor ?? '#ff9f00'} d="m270.39 411.203-5.042 11.633 14.539 26.559 6.394-9.11Zm0 0" />
      <path fill={forceColor ?? '#ff6800'} d="m302.176 354.98-10.66 22.489 18.027 33.543 12.016-20.36Zm0 0" />
      <path fill={forceColor ?? '#ff3000'} d="m170.566 317.371-1.55 20.742 21.515 3.492 3.297-20.55Zm0 0" />
      <path fill={forceColor ?? '#ff4a00'} d="m190.531 341.605 1.164 17.06 19.77 8.726.582-16.286Zm0 0" />
      <path fill={forceColor ?? '#ff1a00'} d="m174.25 293.137-3.684 24.234 23.262 3.684 5.23-24.04Zm0 0" />
      <path fill={forceColor ?? '#ff7e00'} d="m252.559 386.387-3.684 13.379 16.473 23.07 5.234-11.633Zm0 0" />
      <path fill={forceColor ?? '#ed0400'} d="m204.293 269.871-5.234 27.145 24.812 10.855 6.785-26.754Zm0 0" />
      <path fill={forceColor ?? '#f50'} d="m212.047 351.105-.582 16.286 19.191 13.761 2.13-15.12Zm0 0" />
      <path fill={forceColor ?? '#ff8d00'} d="m280.082 396.277-9.691 14.926 15.89 29.082 10.856-12.797Zm0 0" />
      <path fill={forceColor ?? '#ff6800'} d="m232.785 366.031-2.129 15.121 18.219 18.614 3.684-13.38Zm0 0" />
      <path fill={forceColor ?? '#ff7a00'} d="m291.516 377.469-11.434 18.808 17.055 31.211 12.597-16.476Zm0 0" />
      <path fill={forceColor ?? '#ff4300'} d="m280.273 324.352-9.496 24.23 20.739 28.887 10.66-22.489Zm0 0" />
      <path fill={forceColor ?? '#ff3400'} d="m193.828 321.055-3.297 20.55 21.516 9.5 4.844-19.968Zm0 0" />
      <path fill={forceColor ?? '#fa0f00'} d="m230.656 281.117-6.785 26.754 24.227 17.254 8.14-25.59Zm0 0" />
      <path fill={forceColor ?? '#ff1a00'} d="m199.059 297.016-5.23 24.039 23.062 10.082 6.98-23.266Zm0 0" />
      <path fill={forceColor ?? '#f20'} d="m256.238 299.535-8.14 25.59 22.68 23.457 9.495-24.23Zm0 0" />
      <path fill={forceColor ?? '#ff6800'} d="m260.7 369.328-8.141 17.059 17.832 24.816 9.691-14.926Zm0 0" />
      <path fill={forceColor ?? '#f50'} d="M270.777 348.582 260.7 369.328l19.383 26.95 11.434-18.81Zm0 0" />
      <path fill={forceColor ?? '#ff3b00'} d="m216.89 331.137-4.843 19.968 20.738 14.926 6.59-18.61Zm0 0" />
      <path fill={forceColor ?? '#ff4e00'} d="m239.375 347.422-6.59 18.61 19.774 20.355 8.14-17.059Zm0 0" />
      <path fill={forceColor ?? '#ff2500'} d="m223.871 307.871-6.98 23.266 22.484 16.285 8.723-22.297Zm0 0" />
      <path fill={forceColor ?? '#ff3800'} d="m247.906 325.125-8.531 22.297 21.324 21.906 10.078-20.746Zm0 0" />
    </>
  );
}

function DfxAssetIconAXS({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: forceColor ?? '#0055d5',
        }}
      />
      <path
        d="M272 330.8s-53.8-43-57.5 63.2c-3.7 82.3-3.6 242.1 34.5 317.6 16.1 28.4 37.6 19.7 77.6-8.6 34.8-25.7 160.7-141.7 214-192.6S702 313.5 724.5 412.7c8.9 41.7 19.9 77.1 11.5 169.6-2.6 28.5-14.8 50.1-70.4 11.5-42-27-81.9-56-81.9-56s-7.7-13.8-25.9 8.6c-14.3 17.9-21.5 22.3 1.4 35.9 23 13.6 139.3 93.8 183.9 106.3 36.8 10.7 57.8 10.5 58.9-61.8-.2-57.4-3.5-221.7-24.4-291.7-15.8-43.6-39-63.4-89.1-14.4S480.4 522.9 394 592.3c-57.3 43-81.8 81.8-103.4 10.1-15.2-54.3-34.9-223.3 27.3-191.1 38.9 18.6 58.3 18.5 43.1 30.2-15.2 11.6-58.9 51.7-58.9 51.7s-13.5 10.9-7.2 34.5c6.3 16.5 6.3 24.7 40.2-7.2s58.9-56 58.9-56 5.4-8.5 21.5 7.2 18.7 20.1 18.7 20.1 4.3 11.7 21.5-8.6c17.3-20.3 28.4-32.7-4.3-51.7C418.8 412.3 272 330.8 272 330.8z"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: '#fff',
        }}
      />
    </svg>
  );
}

function DfxAssetIconGRT({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={48} cy={48} r={48} fill={forceColor ?? '#6747ed'} />
      <path
        d="M135.3 106.2c-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8m0-32c10.6 0 19.2 8.6 19.2 19.2s-8.6 19.2-19.2 19.2-19.2-8.6-19.2-19.2 8.6-19.2 19.2-19.2zm18.3 39.4c1.3 1.3 1.3 3.3 0 4.5l-12.8 12.8c-1.3 1.3-3.3 1.3-4.5 0-1.3-1.3-1.3-3.3 0-4.5l12.8-12.8c1.2-1.3 3.3-1.3 4.5 0zm7.4-36.2c0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.7 0 3.2 1.4 3.2 3.2z"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: '#fff',
        }}
        transform="translate(-88 -52)"
      />
    </svg>
  );
}

function DfxAssetIconAAVE({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="aave_a" d="M0 0h800v800H0z" />
      </defs>
      <clipPath id="aave_b">
        <use xlinkHref="#aave_a" style={{ overflow: 'visible' }} />
      </clipPath>
      <g style={{ clipPath: 'url(#aave_b)' }}>
        <linearGradient
          id="aave_c"
          x1={-597.355}
          x2={-598.099}
          y1={900.686}
          y2={900.06}
          gradientTransform="matrix(776 0 0 -776 464237 699089)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} style={{ stopColor: '#b6509e' }} />
          <stop offset={1} style={{ stopColor: '#2ebac6' }} />
        </linearGradient>
        <circle cx={400} cy={400} r={388} fill={forceColor ?? 'url(#aave_c)'} />
        <path
          d="M569.8 554.6 438.6 237.4c-7.4-16.4-18.4-24.4-32.9-24.4h-11.6c-14.5 0-25.5 8-32.9 24.4l-57.1 138.2h-43.2c-12.9.1-23.4 10.5-23.5 23.5v.3c.1 12.9 10.6 23.4 23.5 23.5h23.2l-54.5 131.7c-1 2.9-1.6 5.9-1.6 9 0 7.4 2.3 13.2 6.4 17.7s10 6.7 17.4 6.7c4.9-.1 9.6-1.6 13.5-4.5 4.2-2.9 7.1-7.1 9.4-11.9l60-148.8h41.6c12.9-.1 23.4-10.5 23.5-23.5v-.6c-.1-12.9-10.6-23.4-23.5-23.5h-22.2l45.8-114.1 124.8 310.4c2.3 4.8 5.2 9 9.4 11.9 3.9 2.9 8.7 4.4 13.5 4.5 7.4 0 13.2-2.2 17.4-6.7 4.2-4.5 6.4-10.3 6.4-17.7.1-3-.4-6.1-1.6-8.9z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

function DfxAssetIconMANA({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mana_a" x1="85.355%" x2="14.645%" y1="14.645%" y2="85.355%">
          <stop offset="0%" stopColor="#FF2D55" />
          <stop offset="100%" stopColor="#FFBC5B" />
        </linearGradient>
        <linearGradient id="mana_b" x1="49.966%" x2="49.966%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A524B3" />
          <stop offset="100%" stopColor="#FF2D55" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={200} cy={200} r={200} fill={forceColor ?? 'url(#mana_a)'} />
        <path fill={forceColor != null ? '#fff' : 'url(#mana_b)'} d="M125.7 0v150h125z" transform="translate(16 130)" />
        <path fill="#FFF" d="M16.7 280h125V130z" />
        <path fill={forceColor ?? '#FC9965'} d="M40 320c11.4 15.1 24.9 28.6 40 40h240c15.1-11.4 28.6-24.9 40-40H40z" />
        <path fill={forceColor ?? '#FF2D55'} d="M80 360c33.4 25.1 75 40 120 40s86.6-14.9 120-40H80z" />
        <path fill={forceColor != null ? '#fff' : 'url(#mana_b)'} d="M252.3 0v110H344z" transform="translate(16 210)" />
        <path fill={forceColor ?? '#FFBC5B'} d="M268.3 280H16.7c6.2 14.3 14.1 27.7 23.3 40h228.4v-40h-.1z" />
        <path fill="#FFF" d="M176.7 320h91.6V210z" />
        <circle cx={268.3} cy={130} r={50} fill={forceColor != null ? '#fff' : '#FFC95B'} />
        <circle cx={141.7} cy={75} r={25} fill={forceColor != null ? '#fff' : '#FFC95B'} />
      </g>
    </svg>
  );
}

function DfxAssetIconSAND({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient
        id="sand_a"
        x1={25.214}
        x2={25.837}
        y1={1024.822}
        y2={1024.119}
        gradientTransform="matrix(50 0 0 -50 -1250 51250)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} style={{ stopColor: '#00adef' }} />
        <stop offset={1} style={{ stopColor: '#0084ff' }} />
      </linearGradient>
      <circle cx={25} cy={25} r={25} fill={forceColor ?? 'url(#sand_a)'} />
      <path
        d="m16.6 11.8-2.7 2.7v10.7l2.7 2.7h10.7v5.4H22v-2.7h-8.1V36l2.7 2.7h16.1l2.7-2.7V25.2l-2.7-2.7H22v-5.4h5.4v2.7h8.1v-5.4l-2.7-2.7H16.6z"
        fill={'#fff'}
      />
    </svg>
  );
}

function DfxAssetIconAPE({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 185.6 185.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <radialGradient
          id="ape_a"
          cx={-109.707}
          cy={-1.113}
          r={1}
          gradientTransform="rotate(90 -5780.492 5757.271) scale(104.235)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.167} style={{ stopColor: '#073183' }} />
          <stop offset={1} style={{ stopColor: '#0054f9' }} />
        </radialGradient>
        <path
          d="M185.6 92.8C185.6 41.5 144 0 92.8 0 41.5 0 0 41.5 0 92.8c0 51.2 41.5 92.8 92.8 92.8 51.2 0 92.8-41.6 92.8-92.8z"
          fill={forceColor ?? 'url(#ape_a)'}
        />
      </g>
      <g id="Layer_1_00000019678216197568292700000009484231850298271916_">
        <path
          d="M155.9 63.8c-.4 2.3-.8 3.4-1.4 4.6-.6 1.4-1.2 2.9-1.8 6.1-.2 1.2-.4 2.2-.5 3v.1c-.2 1.3-.3 2.2-.8 3.7-.4 1.3-1.1 3.4-2.8 5.6-1.4 1.8-3.7 4.9-6.8 5.3-.3 0-.8 0-1.1-.1-8.8-4.5-16.3-7.8-18.9-8.5-3-.9-2.6-7.5-2.3-13.3.2-2.6.3-5.1.2-7.2-.4-7.4-1.7-15.4-8.1-19.3-3.8-2.3-8.8-3-13.5-3 .9-.4 1.8-1 2.9-1.6 2.8-1.6 6.2-3.6 9.7-4 1.1-.1 2.2-.2 3.3-.4 6.9-.8 12.9-1.5 19.2.7 2.9 1 8.7 4.2 10.2 7.3 1.1 2.1 2.9 3.8 6.4 7.1 1.9 1.7 3.1 2.7 4 3.5 1.3 1 1.5 1.3 1.9 2 1.2 2.4.8 4.9.2 8.4zM124 94.1c.4.1.6.6.3 1-.9 1.4-2 3.4-3.3 5.7-.6 1.1-1.2 2.2-1.7 3-1.7 2.9-1.8 5.4-1.9 7.3-.1 2.1-.2 3-1.5 3.8-1 .7-2.1.9-9.3 2-1.3.2-1.8.4-2.3.7-.1.1-.3.1-.4.2-.4.2-.8-.2-.8-.6.1-1 .1-2.3.1-4v-.3c0-1.4 0-2.6-.1-3.5-.1-1.8-.1-2.6.4-3.4.6-1 1.1-1.3 1.8-1.8 1.1-.7 2.6-1.6 4.7-4.6 1.2-1.6 1.4-2.5 1.6-3.2.1-.3.1-.4 1-1.1s3.8-2.9 7.5-2.3c1.2.2 2.5.6 3.9 1.1zM95.3 127.3c-.2.2-.3.3-.6.3-.8 0-1.3-.2-1.6-.6-.7-.9-.6-2.7-.5-3.8l3.1-.8c.2 1.7.3 4-.4 4.9zM95.5 116.3c-.1.4-.1.9-.1 1.5v2.3c-1 .3-1.8.3-2.8.3v-2.6c0-.6 0-1.5.1-1.8.3 0 .6-.1.9-.2.6-.1 1.5-.3 2-.2 0 .2 0 .5-.1.7zM89.9 126.4c-.1 1.6-.6 3.5-2.1 3.8-.7.1-1-.1-1.2-.3-1-.9-1.1-3.7-1-5.7.7 0 1.5-.1 2.5-.3.6-.1 1.2-.3 1.7-.4.1.8.2 1.8.1 2.9zM89.2 120.8l-3.3 1.2c.2-1.3.4-3.1.5-4.3.1-.8.3-1.1.4-1.2 0 0 .1-.1.2-.1h.2l2.1-.1c-.1 1-.1 3.2-.1 4.5zM83.8 119.8c-.2.5-.4 1.9-.5 2.9l-4.1-.1c.2-1.3.6-2.6.9-3.6.4-1 .7-1.8 1.1-2s1.3-.3 1.9.2c.9.6 1.1 1.5.7 2.6zM82.3 132.5c-.3.4-.7.7-1.1.7-.5.1-.8-.1-1.1-.3-1.3-1.2-1.2-5.1-1.1-7 1.7-.4 3.6-.7 4.5-.8 0 1.5.1 5.6-1.2 7.4zM76.9 122.4c-.2.5-.4 1-.5 1.5-.5.2-2 0-3.5-.3l1-6.5c1.7-.5 3.7-.6 4.1-.1.7.7-.6 4-1.1 5.4zM75 133.4c-.8 1-2 1.5-3.7 1.4-1.2 0-1.6-.5-1.8-.8-.9-1.5 0-5 .9-7.2l5.6.3c.1.4.1.9.1 1.4.1 1.7-.1 3.7-1.1 4.9z"
          fill="#fff"
        />
        <path
          d="M121.4 86.1c-5.1-1.4-4.6-8.8-4.2-16 .1-2.5.3-4.9.2-6.9-.4-6.7-1.5-14-6.9-17.3-5.8-3.5-15.3-2.7-21.1-2-2.1.6-4.1 1.1-5.7 1-3.4-.2-6.1-1.6-8.5-2.9-1.8-1-3.4-1.9-5-1.9H70c-4.5.3-6.6 1.4-8.5 3.1-.5.4-1.1 1.6-3 7.1-1 2.8-1.1 4.3-1.3 5.7-.2 1.3-.3 2.7-1 4.8-.5 1.4-.9 2.6-1.2 3.8-.9 3.1-1.7 5.6-3.9 8.6-.3.3-.6.9-1 1.4-.5.8-1.1 1.8-2 2.9-.6.8-1.9 3.8-1.8 4.7.1 1.5.6 2.4 1.1 3.4s1.2 2.2 1.3 3.9v.3c.2 2.6-.2 3.9-5.1 8.3-3.1 2.8-5.4 5.5-6.9 7.5-.1.2 0 .4.3.4h1c1.2.1 2.4.6 3.2 1.5.1.2.4.2.6.1.8-.3 1.7-.3 2.5-.2 1 .1 2.1.4 2.8 1.1.2.2.5.3.8.2.8-.2 1.7-.2 2.5.1.6.2 1.2.6 1.6 1.1.3.3.8.4 1.2.2.2-.1.5-.3.8-.4 1.1-.4 2.3-.2 3.3.2.5.2 1 .3 1.5.7.8.6 1.4 1.4 1.7 2.3.2.5.9.7 1.3.3.8-.6 1.4-.7 2-.5.3.1.5.3.7.6.3.4.8.8 1.2.6 1.7-.5 3.7-.2 5.2.6.5.3 1.1.7 1.4 1.3v-.3c0-.1.1-.2.2-.3l.3-.1c.8-.3 5-1.5 6.6.2.1.1.2.1.3 0 .2-.2.4-.4.5-.4 1.1-.6 2.9-.7 4.1.4.2.2.6.1.8-.1.1-.2.2-.3.4-.4.4-.4 1-.5 1.6-.5l2.3-.1c.6 0 2.4-.2 2.9-.3h.1c.2 0 .5-.1.8-.2 1.1-.2 2.4-.5 3.4 0s.9 1.6.8 2.6c0 .4-.1.8-.1 1.2v.6c0 .9 0 1.7-.1 2.3l.1.5v.1c.1.4.6.7.9.4.8-.5 1.6-1.1 1.9-1.5v-.1c0-.1.1-.3.2-.7.1-.9.3-2.6.3-6.1v-.4c0-1.3 0-2.4-.1-3.3-.1-1.9-.2-3.4.8-4.9.9-1.5 1.8-2 2.7-2.6 1-.6 2.1-1.3 4-3.9.9-1.3 1-1.8 1.1-2.2.2-1 .5-1.6 2-2.6 1.2-.9 4.7-3.6 9.5-2.8 1.6.3 4.1 1.1 6.7 2.1.1 0 .2.1.3.1h.1c2.3.9 4.4 1.9 5.9 2.7.3.2.7.1 1-.2.5-.6 1-.9 1.5-1.3.2-.1.4-.2.5-.3.1 0 .1-.1.1-.1.4-.3.4-1.1-.1-1.3-6.7-3.3-13.1-5.3-15.2-5.9zm-48.2 1.5C71.6 94.4 61 102 56.2 102H55.9c-.1 0-.2 0-.3-.1h-.2c-.9-.3-2.1-.9-3-1.8-.6-.6-1.1-1.4-1.3-2.1 0-.1-.1-.3-.1-.4-.3-1.2-.6-2.6.4-5 .1-.3.3-.6.4-.9 0-.1.1-.2.1-.3.1-.3.2-.5.3-.7.1-.4.3-.7.4-.9 0-.1.1-.2.1-.3.3-.8.3-1.1.4-1.4 0-.2.1-.6.2-1 .3-1.3.5-2.4.6-3.3.2-1.7.5-3.2 1.4-4.6.2-.2.3-.4.5-.6l.2-.2.2-.2c.2-.2.5-.3.7-.4.1 0 .2-.1.3-.1.2-.1.4-.1.6-.2.9-.2 1.9-.2 3.1-.1 1.3.1 2.5.3 3.5.6.9.2 1.7.5 2.3.8.1 0 .1.1.2.1.1.1.2.1.4.2s.3.1.5.2l.6.3.2.1c.7.3 1.4.7 1.9 1.1.3.2.5.4.7.6.1.1.2.1.2.2l.2.2c2.1 1.8 2 4.3 1.6 5.8zm5-25.9-.2 1.2c-.5 2.8-1.6 6.6-5.6 7.6-3.9.9-4.8 1.1-7.5 1.3h-.2c-2 0-5.9-1.3-6.6-4.4-.4-2 .5-3.5 1.9-5.9.2-.4.5-.8.8-1.3 2-3.3 2.7-5.7 3.3-7.6.6-1.9 1.1-3.4 2.4-4.7.3-.3.6-.6 1-.8.2-.2.5-.3.8-.5.4-.2.8-.3 1.2-.5.9-.3 1.9-.4 2.8-.4 1.9 0 3.8.5 5.1 1.6.6.5 1.5 1.4 2 4.3.2 1.5-.2 4.2-1.2 10.1zm28.7 8c-1.4 2.4-2.1 3.7-3.3 4.7-2.4 2-5.1 2.4-7.4 2.4-1.6 0-3-.3-3.9-.4-2.4-.4-6.7-1.2-8.2-4.7-.3-.7-.3-1.1-.3-1.7 0-.5 0-1.5-.3-3.6v-.1c-.1-1-.2-2.1 0-3.5v-.2c.8-4.2 1.1-4.8 1.2-5.2.4-.8 1.4-1.2 2.3-.7.8.4 1.1 1.4.8 2.2-.1.2-.3 1.1-1 4.4v.2c-.2.9-.1 1.6 0 2.5v.1c.3 2.4.3 3.4.3 4v.4c.3.7.9 1.1 1.6 1.5.5.2 1-.2.9-.7-.7-3.7-.7-8 .7-10.7.5-.9 1.3-2.3 2.1-3.7.1-.1.2-.3.2-.4.1-.1.1-.2.2-.3.4-.6.7-1.1 1-1.6 0-.1.1-.1.1-.2l.1-.1c.1-.1.1-.2.2-.3 0 0 0-.1.1-.1l.1-.1c0-.1.1-.1.1-.2.3-.4.6-.8.8-1.2.4-.5-.1-1.1-.6-.9-1.4.6-2.3 1.3-2.5 1.4-.7.6-1.8.5-2.4-.3-.6-.7-.5-1.8.3-2.4.9-.7 5.5-4 11-2.5 4 1.1 6 4.2 6.8 5.3.6.9 2.6 3.7 2.5 7.7 0 2.9-1.2 5.1-3.5 9z"
          fill="#fff"
        />
        <path
          d="M71.1 49.2c-.3.7-.6 1.5-1 2.4-.8 2.1-1.8 4.5-2.3 5.4-.8 1.5-1.4 2.5-1.9 3.2-.6.9-1 1.6-1.4 2.6-.6 1.7-.7 3.6-.3 5.7-1.1-.1-2.8-.8-3-1.8-.1-.7.3-1.4 1.5-3.5.2-.4.5-.9.8-1.3 2.1-3.6 3-6.3 3.6-8.3.7-2.1 1-3 2.1-3.8.7-.3 1.3-.5 1.9-.6zM69 124.8c-1.2 2.4-2.6 4.6-3.5 5.7-.8-2-2.1-6.7-1.7-10.4v-.3c.1-1.2.4-2.2 1-3.1.4-.6 1.4-.9 2.5-.9.8 0 1.7.2 2.5.6.4.2 1 .7 1 2 .2 1.8-.7 4.2-1.8 6.4z"
          fill="#fff"
        />
        <path
          d="M133 98.1c.1.1.1.2.1.3-.3.7-.8 1.2-1.3 1.8-.6.7-1.3 1.5-1.9 2.8-.9 1.8-1.2 3.4-1.3 7.6-.2 4.9 0 7.6.2 9.6.1 1.9.2 3.1-.1 5-.7 3.8-2.3 6.3-4.4 9.5-2.6 4-5.2 8.1-9.6 9.4-.4.1-.4.1-1.6.1-1 0-2.7 0-5.8.1-5.8.2-8.7.3-11.1.8-2.6.5-3.9 1.1-5.3 1.6-1.2.5-2.3.9-4.4 1.4-1.3.3-3.2.5-9.7.6-6.8 0-10.9 0-16.2-.6-7.4-.8-11.1-1.3-13.6-2.6-5.8-3.1-8.3-8.7-12.3-17.9 0-.1.1-.2.2-.2l.6.3c.2.1.4.1.5.1.4.1.8.1 1.2 0 .1 0 .1 0 .2-.1.1 0 .2 0 .2.1.3.7.7 1.3 1.4 1.7s1.5.4 2.2.4c.8 0 1.6-.1 2.4-.2.4 0 .8.2 1 .5.7 1.8 1.6 3 3 3.2h.3c.3 0 .8-.1 1.4-.5.5-.4 1.3-.1 1.7.4.3.5.7.8 1.1 1.1 1.4 1.4 4.8 2.1 7.6 2.1 1.5 0 2.9-.2 3.7-.6 1.2-.6 1.2-1.4 1.1-1.8-.1-.6-.2-1.3-.3-1.9 0-.1.1-.1.1 0 .2.4.4.8.9.9h.2c.8 0 2 .3 2.2 1 .1.4.3.7.5 1.1.5.7 1.4 1.6 3.3 1.7h.1c2.2 0 3.9-.7 5-2.1.1-.1.1-.2.2-.3.4-.6 1.6-.6 2.1-.1.6.5 1.3.8 2.1.8h.4c1-.1 1.8-.6 2.5-1.5.4-.6.7-1.3.9-2.1.1-.2.4-.3.6-.1.4.4 1.1.8 2.1.8.2 0 .5 0 .8-.1 1.9-.4 2.9-2 3.3-3.7 0-.1.1-.1.1 0 .5.6 1.4 1.3 2.9 1.3h.2c.8 0 1.5-.4 2-1 .6-.8.8-2 .9-3.1 0-.3.2-.6.6-.8 1.6-.7 3.6-2.2 4.2-3.2 0 0 0-.1.1-.1.1-.3.4-.5.6-.5 1.3-.2 1.8-.5 2.3-.7.4-.2.7-.3 1.7-.5 7.3-1.1 8.7-1.4 10.3-2.4 2.4-1.6 2.5-3.8 2.6-5.9.1-1.8.2-3.8 1.6-6.2.5-.9 1.1-1.9 1.7-3.1 1.1-2 2.6-4.8 3.7-6.3.2-.3.6-.4.9-.2 2.5.9 4.7 1.9 5.1 2.3z"
          fill="#fff"
        />
        <path
          d="M62 119.9c-.3 2.5-.5 5.9-.1 10.3.1 1.2.3 2.5.5 3.8-.3.2-1.4.5-3.2.4-2.6-.1-5.2-.7-6-1.6l-.1-.1c-.6-.5-1.1-.9-1.1-1.8 0-.3.1-.6.4-1.1.2-.2.4-.5.6-.9.4-.6 1-1.3 1.6-2.3 1.7-2.8 2.3-3.7 3.1-4.8.1-.1.1-.2.2-.3.5-.6 1-1.4 1.9-2.7.6-.9 1.1-1.7 1.6-2.3.7-1 1.2-1.5 1.5-1.8 0 .4-.1 1-.2 1.6-.4 1.2-.6 2.3-.7 3.6zM60.7 80.5c0 .1 0 .1 0 0-.4.5-.8 1.1-1.3 2.1-1.3 2.8-1.3 4.4-1.3 5.7 0 .7 0 1.2-.2 1.8-.1.4-.3.9-.6 1.4-.7 1.7-1.7 3.9-1.3 6.9-.6-.3-1.5-1-1.7-1.3 0-.2-.1-.3-.1-.5-.2-.9-.3-1.5.2-2.9 1.6-3.6 1.8-4.5 1.9-5.5 0-.2.1-.4.1-.7.3-1.4.5-2.6.6-3.6.2-1.5.4-2.5.9-3.2.2-.3.7-.4 1.4-.4.3 0 .6 0 1 .1h.1l.3.1zM58.7 116.2c-.1-.9-.2-1.7-.6-2.6 0 0-.1-.2-.1-.3-.1-.1-.1-.2-.2-.3l-.1-.1c-.1-.1-.1-.1-.2-.1l-.1-.1c-.1 0-.1-.1-.2-.1h-.1c-.5-.2-1-.4-1.6-.5H55c-.1 0-.2.1-.4.1-.1 0-.1.1-.2.1l-.1.1-.2.2-.1.1v.1l-.6.9c-.5.7-1 1.5-1.5 2.2s-.9 1.3-1.4 2c-.3.4-.5.7-.8 1.1 0 .1-.1.1-.1.2.3.1.6.1.9.2.7.1 1.4.2 2 .3 1.4.2 2.9.3 4.3.2h.2c.3-.5.8-1.1 1.3-1.9.3-.4.6-.8.8-1.2-.3-.1-.4-.4-.4-.6zM53.6 122.1c-.1 1.1-1.3 3.9-3.2 6.6-1.6 2.2-2.6 2.8-2.8 2.8-.8-.1-1.5-2-2.1-3.9-.2-.8-.5-1.5-.6-2.2-.4-1.4-.5-3.4-.4-4.6 1.6.9 4.4 1.1 8.4 1.1.2.1.5.1.7.2zM50.8 113.1c-.7 1.1-1.4 2.1-2.1 3.1-.4.5-.7 1-1.1 1.5-.2.3-.5.6-.7.9-.6-.1-1.1-.3-1.7-.4-.5-.1-.9-.3-1.4-.5-.1 0-.2-.1-.3-.1-.1-.1-.2-.3-.3-.4.2-.3.3-.7.5-1 .3-.6.6-1.2 1-1.8.6-1 1.3-2.1 2.4-2.8.1 0 .1-.1.2-.1.4-.2.8-.4 1.3-.5H49.4c.1 0 .2.1.4.1 0 0 .1 0 .1.1.1.1.2.1.3.2-.2-.1.2.3.2.2.2.6.3.9.4 1.5zM45.4 110.2c-1.3 1-2.2 2.4-2.9 3.9l-1.2 2.4c0 .1-.1.2-.1.2-.4-.1-.8-.2-1.1-.3-.4-.1-.8-.3-1.2-.4-.2-.1-.3-.2-.5-.3.4-.7.8-1.4 1.3-2.1.6-.9 1.3-1.9 2-2.7.3-.3.6-.7.9-.9.4-.2.8-.2 1.3-.1.5 0 1 0 1.4.2-.1 0 0 .1.1.1zM43.4 127.2l-.2.2h-.1c-.3 0-.6.1-.9.1-.6 0-1.2.1-1.8 0-.3 0-.6-.1-.8-.3-.2-.3-.3-.9-.4-1.3-.4-2.2-.4-4.4-.2-6.6 1.1.4 2.3.7 3.5.9-.3 2 .2 4.9.4 5.7.3.4.4.9.5 1.3zM39.8 109.5c-1 1.2-1.9 2.5-2.7 3.9-.3.5-.7 1.1-1 1.7-.4-.1-.8-.3-1.1-.5s-.6-.4-.8-.6c-.1-.1-.3-.2-.4-.3 0 0-.1 0-.1-.1.1-.3.3-.5.3-.7.2-.5.4-.9.7-1.3.5-.8 1-1.6 1.6-2.4.2-.3.4-.6.8-.7.3-.1.7 0 1 0 .6.1 1.2.5 1.7 1zM32.1 114.8c0-.1.1-.1 0 0 .4.4.7.7 1.1 1 .2.1.3.3.5.4v.1c-.4 1.7-.7 3.5-.7 5.3 0 .1-.1.1-.1 0-.5-2.1-1.1-5.5-.8-6.8zM37 118.5c-.2 1.5-.3 3-.2 4.5 0 .8.1 1.6.2 2.5H36.2l-.4-.2c-.2-.1-.4-.4-.6-.7-.4-.7-.5-1.5-.5-2.3-.1-1.5.1-3.1.4-4.6.2.1.5.2.8.3.4.2.7.4 1.1.5z"
          fill="#fff"
        />
      </g>
      <defs>
        <path
          id="SVGID_00000128454529727717975320000012486895950618847389_"
          d="M185.6 92.8C185.6 41.5 144 0 92.8 0 41.5 0 0 41.5 0 92.8c0 51.2 41.5 92.8 92.8 92.8 51.2 0 92.8-41.6 92.8-92.8z"
        />
      </defs>
      <clipPath id="SVGID_00000112632825680152813190000016325904004000894366_">
        <use xlinkHref="#SVGID_00000128454529727717975320000012486895950618847389_" style={{ overflow: 'visible' }} />
      </clipPath>
      <g style={{ clipPath: 'url(#SVGID_00000112632825680152813190000016325904004000894366_)' }}>
        <g id="Layer_2_00000107572151008996527030000016290061794924690866_" style={{ opacity: 0.8 }}>
          <linearGradient
            id="SVGID_00000174576723511659957990000012099251455123196824_"
            x1={-12.996}
            x2={199.632}
            y1={635.135}
            y2={858.3}
            gradientTransform="translate(0 -656)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.206} style={{ stopColor: '#89d0ff' }} />
            <stop offset={0.398} style={{ stopColor: '#ebbf9a' }} />
            <stop offset={0.602} style={{ stopColor: '#eb8280' }} />
            <stop offset={0.841} style={{ stopColor: '#a281ff' }} />
          </linearGradient>
          <path
            d="M76.4 196.5c-6.8 0-13.2-.4-18.6-.8l-1.5-.1-1.5-.2c-.7-.1-1.5-.2-2.4-.3-5.2-.6-14.9-1.6-25.6-6.6l-1.7-.8-1.5-.9C3 175.2-4.6 157.9-8.8 148.6c-.3-.6-.6-1.3-.9-2-2.1-4.3-3.4-8.1-4.5-11.7l-.2-.8-.2-.8c-3-10.6-3.7-19.7-2.4-28.8 1.4-9.1 4.7-17.3 10.6-26l3-4.9c.6-1 1-2.1 1.3-3.2C.2 59 5.4 50.9 8 47c.7-4.7 1.9-9.3 3.5-13.8l.2-.7.3-.7c0-.1.1-.3.2-.6C13.4 27.7 16.1 19.6 23 11l2.6-3 2.7-2.4c6.8-6.2 15-10.8 23.8-13.4 4.9-1.5 10-2.4 15.2-2.7h1.2c.9 0 1.8-.1 2.6-.1 3.2 0 6.4.3 9.6.8 2 .3 4 .1 5.9-.7 5.5-2.3 11.2-3.8 17.1-4.6.5-.1.9-.1 1.3-.2.9-.1 2.4-.3 4.2-.5 3.1-.3 7.9-.7 13-.7 10.1 0 18.8 1.3 26.6 4l.7.2.6.2c17.2 6.5 25.9 15.6 32.2 23.5l.3.4.9.8c5.7 4.4 10.5 9.9 14.3 16l1.2 1.9 1 2c8.4 17.1 5.7 33 4.7 38.9l-.1.3c-.7 4.4-1.9 8.7-3.4 12.9-.6 4-1.5 8-2.8 11.8-2.2 6.8-5.5 13.3-9.7 19.1-2.4 3.4-5.2 6.7-8.2 9.6-1.1 1-1.8 2.4-2 3.9-.1.9-.3 1.8-.4 2.7-2.5 13.2-8.2 22.4-10.6 26.1l-7.1 10.2c-8.6 10.7-18.8 17.7-31.1 21.5l-3 .9-3.2.6c-3.7.7-7.4 1-11.2 1H108.8c-1.4 0-2.8.3-4.2.7-8.2 2.6-17.2 3.8-28.2 3.8z"
            style={{
              opacity: 0.8,
              fill: 'none',
              stroke: 'url(#SVGID_00000174576723511659957990000012099251455123196824_)',
              strokeWidth: 1.0554,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="SVGID_00000078007290311443526780000002645036182949499018_"
            x1={-4.751}
            x2={191.268}
            y1={644.737}
            y2={851.313}
            gradientTransform="translate(0 -656)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.206} style={{ stopColor: '#89d0ff' }} />
            <stop offset={0.398} style={{ stopColor: '#ebbf9a' }} />
            <stop offset={0.602} style={{ stopColor: '#eb80da' }} />
            <stop offset={0.841} style={{ stopColor: '#a281ff' }} />
          </linearGradient>
          <path
            d="M76.4 189.4c-6.5 0-12.8-.4-18-.8l-1.2-.1-1.2-.2c-.8-.1-1.7-.2-2.6-.3-5.1-.5-13.5-1.5-22.9-5.9l-1.4-.7-1.3-.7c-18.3-10.1-25-25.2-29-34.2-.3-.6-.6-1.4-1-2.1-1.9-3.8-3.1-7.4-4.1-10.6l-.2-.7-.2-.6C-9.3 123-10 115-8.8 107.1-7.6 99.3-4.6 92 .6 84.4l3.9-6.3c.7-1.1 1.2-2.4 1.4-3.7 1.9-10.8 7-18.4 9.3-21.9l.3-.4.1-.2c0-.1.1-.2.1-.3.1-.5.3-.9.4-1.3.6-4.4 1.7-8.8 3.2-13l.2-.6.2-.6c.1-.2.1-.4.3-1 1.1-3.3 3.4-10.2 9.4-17.6l2.2-2.6 2.2-2c5.9-5.4 13-9.4 20.6-11.6C58.8 0 63.2-.8 67.8-1h1c.8 0 1.5-.1 2.2-.1 3.3 0 6.5-.9 9.7-.3 2.5.5 5 .2 7.3-.8 4.3-1.9 10.1-2.6 16.7-3.5.5-.1.9-.1 1.2-.2.9-.1 2.3-.3 3.9-.4 2.9-.3 7.4-.6 12.3-.6 9.2 0 17 1.2 23.9 3.5l.6.2.5.2c15.2 5.8 22.7 13.4 28.6 20.9.3.4.7.8.8 1l.1.1 1.1 1 .1.2c5.1 3.9 9.4 8.7 12.7 14.1l1 1.6.8 1.7c7.2 14.7 5 28.2 4 33.9l-.1.3c-.7 4.2-1.8 8.2-3.3 12.2-.5 3.8-1.4 7.6-2.6 11.2-2 6-4.9 11.7-8.6 16.9-2.5 3.6-5.5 6.9-8.7 9.8-1.5 1.4-2.5 3.2-2.7 5.3-.2 1.5-.4 2.9-.6 4.4-2.2 11.7-7.2 19.7-9.6 23.3l-5.8 8.4c-7.7 9.9-16.8 16.3-27.8 19.7l-2.5.8-2.7.5c-3.2.6-6.5.9-9.7.8h-4.5c-1.5.1-3 .3-4.5.8-7.3 2.4-15.8 3.5-26.2 3.5z"
            style={{
              opacity: 0.8,
              fill: 'none',
              stroke: 'url(#SVGID_00000078007290311443526780000002645036182949499018_)',
              strokeWidth: 1.0554,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="SVGID_00000018943696915612414720000001476804467929569966_"
            x1={3.576}
            x2={182.984}
            y1={653.04}
            y2={843.021}
            gradientTransform="translate(0 -656)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.206} style={{ stopColor: '#89d0ff' }} />
            <stop offset={0.398} style={{ stopColor: '#ebbf9a' }} />
            <stop offset={0.602} style={{ stopColor: '#eb8280' }} />
            <stop offset={0.841} style={{ stopColor: '#a281ff' }} />
          </linearGradient>
          <path
            d="M76.4 181.1c-6.2 0-12.3-.4-17.4-.8l-1-.1-1-.1c-.9-.1-1.9-.2-2.9-.3-4.8-.5-12.1-1.3-20.3-5.2l-1.1-.5-1-.6c-15.7-8.8-21.5-21.8-25.3-30.4-.3-.7-.7-1.6-1-2.3-1.7-3.4-2.8-6.6-3.7-9.6l-.2-.5-.1-.5C-.9 122-1.5 115-.5 108.4c1-6.7 3.7-13 8.3-19.7l.6-.8.6-.8c.4-.5.7-1 1.1-1.4l2.3-4.3c.8-1.4 1.3-2.9 1.5-4.5 1.5-9.6 6.1-16.5 8.2-19.7.1-.2.3-.4.4-.5l.5-.7c.2-.4.4-.9.6-1.5s.5-1.5.7-2.3c.5-4.1 1.5-8.1 2.9-12l.2-.5.2-.5c.1-.4.3-.7.5-1.4 1-3.1 2.9-8.8 8-15l1.7-2.1 1.8-1.6c5-4.6 11-7.9 17.5-9.9 3.8-1.1 7.6-1.8 11.6-2h2.7c3.4 0 6.7.4 10 1.3 2.8.7 5.8.4 8.4-.9 4.2-2 9.8-4.2 16.3-5 .4-.1.8-.1 1.1-.2.8-.1 2.1-.3 3.7-.4 2.7-.3 7-.6 11.5-.6 8.2 0 15.1 1 21.2 3.1l.4.2.4.2c14 5.3 20.2 12.2 25 18.3 1.1 1.3 1.2 1.5 1.9 2.2l.9.8.3.4c2.3 1.8 7 5.5 11.1 12.2l.8 1.3.7 1.3c6.1 12.3 4.2 23.5 3.3 28.9l-.1.3c-.6 3.9-1.7 7.8-3.3 11.5v.3c-.4 3.5-1.2 7-2.3 10.3-1.7 5.3-4.2 10.2-7.5 14.7-2.7 3.9-6 7.4-9.7 10.4-.9.7-1.6 1.6-2.1 2.6s-.8 2.1-.9 3.2c-.1 2.2-.4 4.4-.8 6.6-1.9 10.1-6.3 17.1-8.5 20.6l-4.5 6.6c-6.7 9-14.7 14.8-24.4 17.8l-2 .6-2.2.4c-2.7.5-5.5.7-8.3.7H108.1l-2.3.1c-1.6.1-3.2.3-4.7.9-6.9 2.2-14.8 3.2-24.7 3.2z"
            style={{
              opacity: 0.8,
              fill: 'none',
              stroke: 'url(#SVGID_00000018943696915612414720000001476804467929569966_)',
              strokeWidth: 0.9894,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="SVGID_00000024689210688303160630000017284372851326692799_"
            x1={11.893}
            x2={174.651}
            y1={661.371}
            y2={834.707}
            gradientTransform="translate(0 -656)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.206} style={{ stopColor: '#89d0ff' }} />
            <stop offset={0.398} style={{ stopColor: '#ebbf9a' }} />
            <stop offset={0.602} style={{ stopColor: '#eb80e7' }} />
            <stop offset={0.841} style={{ stopColor: '#a281ff' }} />
          </linearGradient>
          <path
            d="M76.4 172.8c-5.9 0-11.8-.4-16.7-.8l-.7-.1-.7-.1c-1-.1-2.1-.3-3.1-.4-4.5-.5-10.7-1.2-17.7-4.4l-.8-.4-.8-.4c-13.3-7.5-18.2-18.5-21.8-26.5-.4-.8-.8-1.7-1.1-2.5-1.5-3.1-2.5-6-3.3-8.5l-.1-.4-.3-.3c-3.9-13.8-2.4-23.5 5.2-34.6l.4-.6.4-.6c.5-.6 1-1.3 1.5-1.9.7-.9 1.4-1.9 2.2-2.8.5-.6.9-1.3 1.2-2l.9-2.2c.4-1 .6-2 .7-3 .8-8.9 5.1-15.3 7.2-18.5.2-.2.4-.6.5-.7l.5-.8.2-.2c.3-.5.8-1.7 1.2-2.9.2-.8.6-2.1 1-3.2v-.1c.4-3.7 1.3-7.4 2.6-10.9l.1-.3.1-.3c.2-.6.4-1.1.6-1.8.9-2.7 2.4-7.3 6.5-12.4l1.3-1.6 1.3-1.2c9.7-8.8 20.5-9.5 24.1-9.8h2.1c4.3 0 8.5.9 12.5 2.6.7.3 1.5.4 2.2.4.8 0 1.5-.2 2.2-.6 3.7-2.1 10.4-6 19-7 .4-.1.8-.1 1.1-.1.8-.1 2-.2 3.4-.4 2.6-.2 6.5-.5 10.7-.5 7.3 0 13.3.9 18.4 2.6l.3.1.3.1c12 4.5 17.1 10.2 21.4 15.6 1.1 1.5 1.7 2.1 2.9 3.3l.7.6.5.6.4.3c2 1.6 5.8 4.5 9.2 10l.6 1 .5 1c4.9 10 3.3 19 2.5 23.8v.3c-.6 3.5-1.6 7-3 10.3l-.1.3c0 .1 0 .1-.1.3-.1.3-.1.6-.1.9l-.1.4c-.3 3-1 5.9-2 8.7-1.5 4.5-3.6 8.7-6.4 12.5-2.7 3.9-5.8 7.1-9.2 9.6-1.5 1.1-2.7 2.5-3.6 4.2-.9 1.7-1.3 3.5-1.3 5.4 0 2.3-.3 4.7-.7 7-1.6 8.6-5.2 14.4-7.5 17.9l-3.3 4.9c-5.8 8.1-12.7 13.3-21 15.9l-.4.1c-.7.2-1.4.4-2.1.5l-.5.1c-2.3.4-4.6.6-6.9.6H107.7c-1.1 0-2.5.1-3.7.1-1.7.1-3.3.4-4.9 1-6 1.8-13.3 2.8-22.7 2.8z"
            style={{
              opacity: 0.8,
              fill: 'none',
              stroke: 'url(#SVGID_00000024689210688303160630000017284372851326692799_)',
              strokeWidth: 0.9235,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="SVGID_00000085930422432826479730000016146188682793707422_"
            x1={20.16}
            x2={166.302}
            y1={669.718}
            y2={826.396}
            gradientTransform="translate(0 -656)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.206} style={{ stopColor: '#89d0ff' }} />
            <stop offset={0.398} style={{ stopColor: '#ebbf9a' }} />
            <stop offset={0.602} style={{ stopColor: '#eb80d3' }} />
            <stop offset={0.841} style={{ stopColor: '#a281ff' }} />
          </linearGradient>
          <path
            d="M76.4 164.5c-5.7 0-11.3-.4-16.1-.8h-.5l-.5-.1c-1.1-.2-2.3-.3-3.4-.4-4.2-.5-9.4-1-15-3.7l-.6-.3-.5-.3c-10.9-6.1-15-15.3-18.2-22.7-.4-.9-.8-1.8-1.2-2.8-1.3-2.6-2.2-5.2-2.9-7.4l-.1-.3-.1-.3c-3.2-11.4-2.1-18.6 4.1-27.6l.3-.4.3-.4c.5-.7 1-1.3 1.5-2 1.6-2.1 3.2-4.2 5.5-6.7.5-.5.8-1.3.9-2L30 84l-.1-.9v-.9c.2-7.4 3.9-12.9 5.9-15.9.2-.3.5-.7.6-.9l.3-.5.3-.4c.4-.6 1.3-2.7 2.1-4.6.3-.8.7-2.4 1.2-3.7.1-.4.1-.5.2-1.4.3-3.1 1.1-6.2 2.1-9.1l.1-.2.1-.2c.3-.8.5-1.4.8-2.2.8-2.4 2-5.9 5.1-9.8l.9-1.1.9-.8c6.8-6.1 14.1-7.3 19.1-7.6h1.5c4.2 0 9.3 2 12 3.3.6.3 1.3.5 2 .5s1.4-.1 2.1-.3c1.7-.6 3.3-1.3 4.8-2.1 3.4-2 9-5.2 16-6 .4-.1.7-.1 1-.1.7-.1 1.8-.2 3.2-.4 2.4-.2 6-.5 9.9-.5 6.3 0 11.5.7 15.7 2.2l.2.1.2.1c10 3.8 14 8.1 17.8 13 1.2 1.6 2.1 2.7 3.9 4.3l.4.4.4.4c.4.4.8.7 1.2 1 1.7 1.3 4.6 3.6 7.1 7.8l.4.6.3.7c3.7 7.5 2.5 14.6 1.8 18.8v.3c-.5 2.9-1.3 5.7-2.5 8.4-.3.7-.5 1.4-.7 2.2-.1.5-.2 1-.2 1.4l-.1.4c-.3 2.4-.8 4.8-1.6 7.1-1.2 3.7-3 7.2-5.2 10.3-3.4 4.8-7.3 8.2-12 10.4-1.1.5-2.1 1.3-2.8 2.4-.7 1-1.1 2.3-1.2 3.5v1.2c.2 3.6.5 7.7-.3 12-1.3 7-4.3 11.7-6.5 15.2 0 0-10.2 14.2-19.5 17.1l-1 .3-1.1.2c-1.8.3-3.6.5-5.5.5H109.4c-.4 0-1 0-1.9.1h-.4c-3.6.1-6.9.2-7.9.4-.5.1-1 .2-1.5.4-4.9 2.1-11.8 3.1-21.3 3.1z"
            style={{
              opacity: 0.8,
              fill: 'none',
              stroke: 'url(#SVGID_00000085930422432826479730000016146188682793707422_)',
              strokeWidth: 0.8575,
              strokeMiterlimit: 10,
            }}
          />
          <linearGradient
            id="SVGID_00000038379881502420268080000011052478818508933564_"
            x1={28.535}
            x2={158.045}
            y1={677.965}
            y2={818.048}
            gradientTransform="translate(0 -656)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.206} style={{ stopColor: '#89d0ff' }} />
            <stop offset={0.398} style={{ stopColor: '#ebbf9a' }} />
            <stop offset={0.602} style={{ stopColor: '#a280eb' }} />
            <stop offset={0.841} style={{ stopColor: '#a281ff' }} />
          </linearGradient>
          <path
            d="M76.4 156.3c-5.4 0-10.8-.4-15.4-.7h-.4c-1.3-.2-2.5-.3-3.6-.4-3.9-.4-8-.9-12.4-2.9l-.3-.1-.3-.1c-8.5-4.8-11.7-11.9-14.7-18.8-.4-1-.9-2-1.4-3-1-2-1.8-4.2-2.4-6.3v-.2c-2.6-9.1-1.9-13.7 2.9-20.7l.1-.2.1-.2c.6-.7 1.1-1.4 1.6-2 2.3-3 4.3-5.6 8.8-9.8.3-.3.6-.7.7-1.2.1-.4.1-.9-.1-1.3l-.8-2.3c-.2-.7-.3-1.5-.3-2.2v-1.1c.2-5 2.8-8.9 4.5-11.5.3-.4.5-.8.7-1.1l.2-.3.2-.3c.9-1.2 2.4-4.7 3.2-6.8.2-.7.7-2.4 1.2-3.7.3-1 .5-2 .6-3 .3-2.5.8-5 1.7-7.3v-.2c.4-1 .7-1.8.9-2.6.7-2.1 1.5-4.5 3.7-7.2l.4-.5.4-.4c4.8-4.4 10.1-5.2 14.1-5.5H71.2c4 0 7 1.6 9 2.7l.5.2h.1c.6.3 1 .6 1.5.8 1.2.6 2.7.8 4 .4 2.8-.7 7.1-2.4 9.9-4h.1c3-1.8 7.6-4.4 13-5 .3-.1.7-.1 1-.1.6-.1 1.7-.2 2.9-.3 2.2-.2 5.6-.5 9.1-.5 5.4 0 9.7.6 13 1.7h.2c8 3 11 6.2 14.2 10.4 1.3 1.7 2.6 3.3 5 5.4l.2.2.2.2c.6.6 1.3 1.2 2.1 1.8 1.4 1.1 3.4 2.6 5.1 5.5l.2.3.2.3c2.5 5.2 1.7 10.1 1.1 13.8v.3c-.4 2.3-1 4.5-2 6.7-.5 1.2-.9 2.5-1.1 3.8-.1.8-.2 1.4-.3 1.9l-.1.4c-.2 1.9-.6 3.7-1.2 5.5-.9 2.9-2.3 5.6-4.1 8.1-3 4.4-6.4 7.1-10.9 8.5-2.2.7-4 2.1-5.2 4l-.4.5-.4.5c-1.1 1.3-.8 6.3-.6 9.3.2 3.3.4 6.7-.2 9.9-1 5.5-3.4 9.2-5.5 12.4 0 0-7.8 11.3-14.9 13.4l-.5.2-.5.1c-1.3.2-2.7.4-4.1.4h-2c-.5 0-1.2 0-2.4.1h-.2c-4.7.2-7.6.3-9.2.6-1.1.2-2.1.5-3.1.9-4.3 1.7-10.1 2.6-18.5 2.6z"
            style={{
              opacity: 0.8,
              fill: 'none',
              stroke: 'url(#SVGID_00000038379881502420268080000011052478818508933564_)',
              strokeWidth: 0.8575,
              strokeMiterlimit: 10,
            }}
          />
        </g>
      </g>
    </svg>
  );
}

function DfxAssetIconLINK({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 37.8 43.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m18.9 0-4 2.3L4 8.6l-4 2.3v21.8L4 35l11 6.3 4 2.3 4-2.3L33.8 35l4-2.3V10.9l-4-2.3-10.9-6.3ZM8 28.1V15.5l10.9-6.3 10.9 6.3v12.6l-10.9 6.3Z"
          fill={forceColor ?? '#2a5ada'}
        />
      </g>
    </svg>
  );
}

function DfxAssetIconUNI({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 168.3 193.8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66 44.1c-2.1-.3-2.2-.4-1.2-.5 1.9-.3 6.3.1 9.4.8 7.2 1.7 13.7 6.1 20.6 13.8l1.8 2.1 2.6-.4c11.1-1.8 22.5-.4 32 4 2.6 1.2 6.7 3.6 7.2 4.2.2.2.5 1.5.7 2.8.7 4.7.4 8.2-1.1 10.9-.8 1.5-.8 1.9-.3 3.2.4 1 1.6 1.7 2.7 1.7 2.4 0 4.9-3.8 6.1-9.1l.5-2.1.9 1c5.1 5.7 9.1 13.6 9.7 19.2l.2 1.5-.9-1.3c-1.5-2.3-2.9-3.8-4.8-5.1-3.4-2.3-7-3-16.5-3.5-8.6-.5-13.5-1.2-18.3-2.8-8.2-2.7-12.4-6.2-22.1-19.1-4.3-5.7-7-8.8-9.7-11.4-5.9-5.7-11.8-8.7-19.5-9.9z"
        fill={forceColor ?? '#ff007a'}
      />
      <path
        d="M140.5 56.8c.2-3.8.7-6.3 1.8-8.6.4-.9.8-1.7.9-1.7.1 0-.1.7-.4 1.5-.8 2.2-.9 5.3-.4 8.8.7 4.5 1 5.1 5.8 10 2.2 2.3 4.8 5.2 5.8 6.4l1.7 2.2-1.7-1.6c-2.1-2-6.9-5.8-8-6.3-.7-.4-.8-.4-1.3.1-.4.4-.5 1-.5 3.9-.1 4.5-.7 7.3-2.2 10.2-.8 1.5-.9 1.2-.2-.5.5-1.3.6-1.9.6-6.2 0-8.7-1-10.8-7.1-14.3-1.5-.9-4.1-2.2-5.6-2.9-1.6-.7-2.8-1.3-2.7-1.3.2-.2 6.1 1.5 8.4 2.5 3.5 1.4 4.1 1.5 4.5 1.4.3-.3.5-1.1.6-3.6zM70.1 71.7c-4.2-5.8-6.9-14.8-6.3-21.5l.2-2.1 1 .2c1.8.3 4.9 1.5 6.4 2.4 4 2.4 5.8 5.7 7.5 13.9.5 2.4 1.2 5.2 1.5 6.1.5 1.5 2.4 5 4 7.2 1.1 1.6.4 2.4-2.1 2.2-3.8-.4-8.9-3.9-12.2-8.4zM135.4 115.2c-19.8-8-26.8-14.9-26.8-26.6 0-1.7.1-3.1.1-3.1.1 0 .8.6 1.7 1.3 4 3.2 8.5 4.6 21 6.4 7.3 1.1 11.5 1.9 15.3 3.2 12.1 4 19.6 12.2 21.4 23.3.5 3.2.2 9.3-.6 12.5-.7 2.5-2.7 7.1-3.2 7.2-.1 0-.3-.5-.3-1.3-.2-4.2-2.3-8.2-5.8-11.3-4.2-3.6-9.6-6.3-22.8-11.6zM121.4 118.5c-.2-1.5-.7-3.4-1-4.2l-.5-1.5.9 1.1c1.3 1.5 2.3 3.3 3.2 5.8.7 1.9.7 2.5.7 5.6 0 3-.1 3.7-.7 5.4-1 2.7-2.2 4.6-4.2 6.7-3.6 3.7-8.3 5.7-15 6.6-1.2.1-4.6.4-7.6.6-7.5.4-12.5 1.2-17 2.8-.6.2-1.2.4-1.3.3-.2-.2 2.9-2 5.4-3.2 3.5-1.7 7.1-2.6 15-4 3.9-.6 7.9-1.4 8.9-1.8 9.9-3.1 14.8-10.8 13.2-20.2z"
        fill={forceColor ?? '#ff007a'}
      />
      <path
        d="M130.5 134.6c-2.6-5.7-3.2-11.1-1.8-16.2.2-.5.4-1 .6-1 .2 0 .8.3 1.4.7 1.2.8 3.7 2.2 10.1 5.7 8.1 4.4 12.7 7.8 15.9 11.7 2.8 3.4 4.5 7.3 5.3 12.1.5 2.7.2 9.2-.5 11.9-2.2 8.5-7.2 15.3-14.5 19.2-1.1.6-2 1-2.1 1-.1 0 .3-1 .9-2.2 2.4-5.1 2.7-10 .9-15.5-1.1-3.4-3.4-7.5-8-14.4-5.5-8-6.8-10.1-8.2-13zM56 165.2c7.4-6.2 16.5-10.6 24.9-12 3.6-.6 9.6-.4 12.9.5 5.3 1.4 10.1 4.4 12.6 8.1 2.4 3.6 3.5 6.7 4.6 13.6.4 2.7.9 5.5 1 6.1.8 3.6 2.4 6.4 4.4 7.9 3.1 2.3 8.5 2.4 13.8.4.9-.3 1.7-.6 1.7-.5.2.2-2.5 2-4.3 2.9-2.5 1.3-4.5 1.7-7.2 1.7-4.8 0-8.9-2.5-12.2-7.5-.7-1-2.1-3.9-3.3-6.6-3.5-8.1-5.3-10.5-9.4-13.2-3.6-2.3-8.2-2.8-11.7-1.1-4.6 2.2-5.8 8.1-2.6 11.7 1.3 1.5 3.7 2.7 5.7 3 3.7.5 6.9-2.4 6.9-6.1 0-2.4-.9-3.8-3.3-4.9-3.2-1.4-6.7.2-6.6 3.3 0 1.3.6 2.1 1.9 2.7.8.4.8.4.2.3-2.9-.6-3.6-4.2-1.3-6.5 2.8-2.8 8.7-1.6 10.7 2.3.8 1.6.9 4.8.2 6.8-1.7 4.4-6.5 6.7-11.4 5.4-3.3-.9-4.7-1.8-8.7-5.9-7-7.2-9.7-8.6-19.7-10.1l-1.9-.3 2.1-2z"
        fill={forceColor ?? '#ff007a'}
      />
      <path
        d="M3.4 4.3c23.3 28.3 59.2 72.3 61 74.7 1.5 2 .9 3.9-1.6 5.3-1.4.8-4.3 1.6-5.7 1.6-1.6 0-3.5-.8-4.8-2.1-.9-.9-4.8-6.6-13.6-20.3C32 53 26.3 44.3 26.2 44.2c-.4-.2-.4-.2 11.8 21.6C45.7 79.5 48.2 84.4 48.2 85c0 1.3-.4 2-2 3.8-2.7 3-3.9 6.4-4.8 13.5-1 7.9-3.7 13.5-11.4 23-4.5 5.6-5.2 6.6-6.3 8.9-1.4 2.8-1.8 4.4-2 8-.2 3.8.2 6.2 1.3 9.8 1 3.2 2.1 5.3 4.8 9.4 2.3 3.6 3.7 6.3 3.7 7.3 0 .8.2.8 3.8 0 8.6-2 15.7-5.4 19.6-9.6 2.4-2.6 3-4 3-7.6 0-2.3-.1-2.8-.7-4.2-1-2.2-2.9-4-7-6.8-5.4-3.7-7.7-6.7-8.3-10.7-.5-3.4.1-5.7 3.1-12 3.1-6.5 3.9-9.2 4.4-15.8.3-4.2.8-5.9 2-7.2 1.3-1.4 2.4-1.9 5.5-2.3 5.1-.7 8.4-2 11-4.5 2.3-2.1 3.3-4.2 3.4-7.3l.1-2.3-1.3-1.4C65.4 71.6.3 0 0 0c-.1 0 1.5 1.9 3.4 4.3zm30.7 142.2c1.1-1.9.5-4.3-1.3-5.5-1.7-1.1-4.3-.6-4.3.9 0 .4.2.8.8 1 .9.5 1 1 .3 2.1s-.7 2.1.2 2.8c1.4 1.1 3.3.5 4.3-1.3zM74.6 93.9c-2.4.7-4.7 3.3-5.4 5.9-.4 1.6-.2 4.5.5 5.4 1.1 1.4 2.1 1.8 4.9 1.8 5.5 0 10.2-2.4 10.7-5.3.5-2.4-1.6-5.7-4.5-7.2-1.5-.8-4.6-1.1-6.2-.6zm6.4 5c.8-1.2.5-2.5-1-3.4-2.7-1.7-6.8-.3-6.8 2.3 0 1.3 2.1 2.7 4.1 2.7 1.3 0 3.1-.8 3.7-1.6z"
        fill={forceColor ?? '#ff007a'}
      />
    </svg>
  );
}

function DfxAssetIconQNT({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 451.3 488.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m102.3 29 124.1 145.4 83.3-49S209.2-9 182.4.5C157.2 10.1 102.3 29 102.3 29zM312.8 125.4s18.9-33.2 28.3-77.5c0 0 94.3 37.9 58.1 132.8l-86.4-55.3z"
        fill={forceColor ?? '#000'}
      />
      <path
        d="m399.2 180.8 7.9 99.6 36.1-4.7s9.4-3.2 7.9-20.5c-1.6-19-4.7-58.5-4.7-58.5s1.6-9.5-20.4-12.6c-26.8-4.9-26.8-3.3-26.8-3.3zM407 280.4l-72.3 58.5 33 64.8s7.9 25.3 31.4-3.2c22-28.5 31.4-33.2 29.8-50.6-1.4-17.4-6.2-58.5-21.9-69.5zM333.2 338.8l-99-44.3L147.8 470s-6.3 12.6 15.7 14.2c22 3.2 58.1 11.1 77-7.9 18.9-17.3 92.7-137.5 92.7-137.5zM234.2 293l-9.4-117-213.7 14.3s-12.6 1.6-11 25.3C1.7 247.2 4.8 282 4.8 282s-1.6 14.2 26.7 15.8c28.3 1.5 199.6 1.5 202.7-4.8z"
        fill={forceColor ?? '#000'}
      />
    </svg>
  );
}
function DfxAssetIconXCHF({ forceColor }: BaseAssetIconProps) {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 300 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={forceColor ?? '#ce0e2d'}
        fillRule="evenodd"
        d="m80.168 147.035-6.86-16.808-36.277 89.125h21.992L148.027.422 249.25 249.293H121.71l-21.241-52.258 12.031-29.664 21.148 51.98h79.32l-64.94-159.746-77.165 189.688H.848l72.46-178.246L92.2 117.516zm0 0"
      />
    </svg>
  );
}

function DfxAssetIconPlaceholder() {
  const sizeContext = useContext(SizeContext);
  return (
    <svg
      width={SIZE_MAPS[sizeContext]}
      height={SIZE_MAPS[sizeContext]}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_422_24)">
        <circle cx="16" cy="16" r="16" fill="#B8C4D8" />
        <path
          d="M19.6935 23.0748C23.7288 23.0748 27 19.8036 27 15.7684C27 11.7331 23.7288 8.46188 19.6935 8.46188C15.6583 8.46188 12.3871 11.7331 12.3871 15.7684C12.3871 19.8036 15.6583 23.0748 19.6935 23.0748Z"
          fill="url(#paint0_linear_422_24)"
        />
        <path
          d="M13.0383 24.0767C17.4778 24.0767 21.0767 20.4778 21.0767 16.0383C21.0767 11.5989 17.4778 8 13.0383 8C8.59889 8 5 11.5989 5 16.0383C5 20.4778 8.59889 24.0767 13.0383 24.0767Z"
          fill="url(#paint1_linear_422_24)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_422_24"
          x1="25.8226"
          y1="12.5767"
          x2="12.8376"
          y2="19.2706"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.104167" stopColor="white" />
          <stop offset="0.520833" stopColor="#C7D0E0" />
          <stop offset="1" stopColor="#B8C4D8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_422_24"
          x1="17.941"
          y1="10.1956"
          x2="7.60596"
          y2="22.5088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.375" stopColor="#F3F5F8" />
          <stop offset="0.682292" stopColor="#E3E8F0" />
          <stop offset="1" stopColor="#C7D1E0" />
        </linearGradient>
        <clipPath id="clip0_422_24">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
