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
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id="rpl_c">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <linearGradient id="rpl_b" x1={-1.089} x2={249.534} y1={249.534} y2={2} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="#ffd275" />
        <stop offset={0.132} stopColor="#feca74" />
        <stop offset={0.358} stopColor="#fbb570" />
        <stop offset={0.652} stopColor="#f79569" />
        <stop offset={1} stopColor="#f2665f" />
      </linearGradient>
      <clipPath id="rpl_d">
        <path d="M30 46h36v45H30zm0 0" />
      </clipPath>
      <clipPath id="rpl_e">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_f">
        <path d="M34 0h27v31H34zm0 0" />
      </clipPath>
      <clipPath id="rpl_g">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_h">
        <path d="M65 2h72v42H65zm0 0" />
      </clipPath>
      <clipPath id="rpl_i">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_j">
        <path d="M169 39h40v83h-40zm0 0" />
      </clipPath>
      <clipPath id="rpl_k">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_l">
        <path d="M139 90h23v36h-23zm0 0" />
      </clipPath>
      <clipPath id="rpl_m">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_n">
        <path d="M120 142h17v29h-17zm0 0" />
      </clipPath>
      <clipPath id="rpl_o">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_p">
        <path d="M144 172h18v27h-18zm0 0" />
      </clipPath>
      <clipPath id="rpl_q">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_r">
        <path d="M161 200h26v43h-26zm0 0" />
      </clipPath>
      <clipPath id="rpl_s">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_t">
        <path d="M0 170h95v80H0zm0 0" />
      </clipPath>
      <clipPath id="rpl_u">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <clipPath id="rpl_v">
        <path d="M250.371 125.184c0 69.14-56.047 125.187-125.187 125.187C56.047 250.371 0 194.324 0 125.184 0 56.047 56.047 0 125.184 0c69.14 0 125.187 56.047 125.187 125.184zm0 0" />
      </clipPath>
      <filter id="rpl_a" width="100%" height="100%" x="0%" y="0%">
        <feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
      </filter>
      <mask id="rpl_x">
        <g filter="url(#rpl_a)">
          <path fillOpacity={0.7} d="M0 0h250v250H0z" />
        </g>
      </mask>
      <clipPath id="rpl_w">
        <path d="M0 0h250v250H0z" />
      </clipPath>
      <g fill={forceColor != null ? '#fff' : 'url(#rpl_b)'} clipPath="url(#rpl_c)">
        <path d="M0 0h250v250H0z" />
        <path d="M0 0h250v250H0z" />
      </g>
      <g clipPath="url(#rpl_d)">
        <g clipPath="url(#rpl_e)">
          <path
            fill={forceColor != null ? '#fff' : '#f8a171'}
            d="M63.195 90.254H33.566a2.787 2.787 0 0 1-2.78-2.777V48.89a2.787 2.787 0 0 1 2.78-2.782h29.63a2.787 2.787 0 0 1 2.777 2.782v38.586a2.786 2.786 0 0 1-2.778 2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_f)">
        <g clipPath="url(#rpl_g)">
          <path
            fill={forceColor != null ? '#fff' : '#faaa71'}
            d="M57.34 30.832H37.594a2.786 2.786 0 0 1-2.778-2.777V.973a2.786 2.786 0 0 1 2.778-2.778H57.34A2.786 2.786 0 0 1 60.117.973v27.082a2.786 2.786 0 0 1-2.777 2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_h)">
        <g clipPath="url(#rpl_i)">
          <path
            fill={forceColor != null ? '#fff' : '#f9a471'}
            d="M133.566 43.797H68.75a2.786 2.786 0 0 1-2.777-2.777V5.602a2.786 2.786 0 0 1 2.777-2.778h64.816a2.786 2.786 0 0 1 2.778 2.778V41.02a2.77 2.77 0 0 1-2.778 2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_j)">
        <g clipPath="url(#rpl_k)">
          <path
            fill={forceColor != null ? '#fff' : '#f7956b'}
            d="M205.484 121.574h-33.656a2.786 2.786 0 0 1-2.777-2.777V41.945a2.786 2.786 0 0 1 2.777-2.777h33.637a2.786 2.786 0 0 1 2.777 2.777v76.852c.024 1.527-1.226 2.777-2.758 2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_l)">
        <g clipPath="url(#rpl_m)">
          <path
            fill={forceColor != null ? '#fff' : '#faab72'}
            d="M158.266 125.277h-15.743a2.786 2.786 0 0 1-2.777-2.777V93.496a2.786 2.786 0 0 1 2.777-2.777h15.743a2.786 2.786 0 0 1 2.777 2.777V122.5a2.786 2.786 0 0 1-2.777 2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_n)">
        <g clipPath="url(#rpl_o)">
          <path
            fill={forceColor != null ? '#fff' : '#f9a571'}
            d="M133.566 170.184h-10.488a2.786 2.786 0 0 1-2.777-2.778v-22.523a2.786 2.786 0 0 1 2.777-2.778h10.488a2.786 2.786 0 0 1 2.778 2.778v22.523a2.786 2.786 0 0 1-2.778 2.778zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_p)">
        <g clipPath="url(#rpl_q)">
          <path
            fill={forceColor != null ? '#fff' : '#fbb171'}
            d="M158.266 198.75h-11.414a2.786 2.786 0 0 1-2.778-2.777V175.3a2.786 2.786 0 0 1 2.778-2.778h11.414a2.786 2.786 0 0 1 2.777 2.778v20.672a2.786 2.786 0 0 1-2.777 2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_r)">
        <g clipPath="url(#rpl_s)">
          <path
            fill={forceColor != null ? '#fff' : '#f89e71'}
            d="M163.82 200.277h20.371a2.786 2.786 0 0 1 2.778 2.778v37.039a2.786 2.786 0 0 1-2.778 2.777h-20.37a2.786 2.786 0 0 1-2.778-2.777v-37.04c0-1.503 1.25-2.777 2.777-2.777zm0 0"
          />
        </g>
      </g>
      <g clipPath="url(#rpl_t)">
        <g clipPath="url(#rpl_u)">
          <path
            fill={forceColor != null ? '#fff' : '#fcbb71'}
            d="M-.695 249.816h91.968a2.787 2.787 0 0 0 2.778-2.78v-74.071a2.787 2.787 0 0 0-2.778-2.781H-.695a2.787 2.787 0 0 0-2.778 2.78v74.071a2.787 2.787 0 0 0 2.778 2.781zm0 0"
          />
        </g>
      </g>
      <path
        fill={forceColor != null ? '#fff' : '#ffd48a'}
        d="M125.184 11.574c15.347 0 30.21 3.008 44.214 8.91 13.52 5.72 25.672 13.914 36.11 24.356 10.441 10.437 18.637 22.59 24.351 36.11 5.926 14.003 8.914 28.866 8.914 44.21 0 15.348-3.007 30.211-8.914 44.215-5.714 13.52-13.91 25.672-24.351 36.11-10.438 10.44-22.59 18.636-36.11 24.355-14.003 5.926-28.867 8.91-44.214 8.91-15.344 0-30.207-3.008-44.211-8.91-13.52-5.719-25.672-13.914-36.114-24.356-10.437-10.437-18.632-22.59-24.351-36.109-5.926-13.98-8.934-28.867-8.934-44.191 0-15.325 3.008-30.207 8.91-44.211 5.72-13.52 13.914-25.672 24.356-36.114 10.437-10.437 22.59-18.632 36.11-24.351 14.003-5.926 28.89-8.934 44.234-8.934m0-11.574C56.043 0 0 56.043 0 125.184 0 194.328 56.043 250.37 125.184 250.37c69.144 0 125.187-56.043 125.187-125.187C250.371 56.043 194.305 0 125.184 0zm0 0"
      />
      <g clipPath="url(#rpl_v)">
        <g clipPath="url(#rpl_w)" mask="url(#rpl_x)">
          <path
            fill={forceColor != null ? '#fff' : '#f04b36'}
            d="M125.184 258.45c-17.985 0-35.438-3.52-51.875-10.485-15.88-6.715-30.114-16.32-42.36-28.567-12.246-12.222-21.851-26.48-28.566-42.34-6.942-16.433-10.485-33.886-10.485-51.874 0-17.985 3.52-35.438 10.485-51.875 6.715-15.88 16.32-30.114 28.566-42.36C43.195 18.703 57.43 9.098 73.31 2.383c16.414-6.965 33.867-10.485 51.875-10.485 17.988 0 35.441 3.52 51.875 10.485 15.882 6.715 30.117 16.32 42.363 28.566 12.246 12.246 21.851 26.48 28.562 42.36 6.946 16.437 10.489 33.89 10.489 51.875 0 17.988-3.52 35.441-10.489 51.875-6.71 15.882-16.316 30.117-28.562 42.363s-26.48 21.851-42.363 28.562c-16.434 6.946-33.887 10.465-51.875 10.465zm0-238.774c-14.258 0-28.055 2.777-41.063 8.289-12.57 5.32-23.844 12.914-33.543 22.613S33.266 71.551 27.965 84.121c-5.512 12.984-8.29 26.805-8.29 41.063 0 14.261 2.778 28.058 8.29 41.066 5.32 12.57 12.914 23.844 22.613 33.543s20.973 17.312 33.543 22.613c12.984 5.489 26.805 8.29 41.063 8.29 14.261 0 28.058-2.778 41.066-8.29 12.57-5.324 23.844-12.914 33.543-22.613s17.312-20.973 22.613-33.543c5.489-12.984 8.29-26.805 8.29-41.066 0-14.258-2.778-28.055-8.29-41.063-5.324-12.57-12.914-23.844-22.613-33.543S178.82 33.266 166.25 27.965c-13.008-5.512-26.828-8.29-41.066-8.29zm0 0"
          />
        </g>
      </g>
      <path
        fill={forceColor ?? '#ffd48a'}
        d="M125.184 11.574c15.347 0 30.21 3.008 44.214 8.91 13.52 5.72 25.672 13.914 36.11 24.356 10.441 10.437 18.637 22.59 24.351 36.11 5.926 14.003 8.914 28.866 8.914 44.21 0 15.348-3.007 30.211-8.914 44.215-5.714 13.52-13.91 25.672-24.351 36.11-10.438 10.44-22.59 18.636-36.11 24.355-14.003 5.926-28.867 8.91-44.214 8.91-15.344 0-30.207-3.008-44.211-8.91-13.52-5.719-25.672-13.914-36.114-24.356-10.437-10.437-18.632-22.59-24.351-36.109-5.926-13.98-8.934-28.867-8.934-44.191 0-15.325 3.008-30.207 8.91-44.211 5.72-13.52 13.914-25.672 24.356-36.114 10.437-10.437 22.59-18.632 36.11-24.351 14.003-5.926 28.89-8.934 44.234-8.934m0-11.574C56.043 0 0 56.043 0 125.184 0 194.328 56.043 250.37 125.184 250.37c69.144 0 125.187-56.043 125.187-125.187C250.371 56.043 194.305 0 125.184 0zm0 0"
      />
      <path
        fill={forceColor != null ? '#fff' : '#fe8c2c'}
        d="M98.195 148.91c1.434 1.414 2.848 2.824 4.282 4.238.878.856 1.132.88 1.968 0 1.782-1.828 3.586-3.632 5.371-5.464.325-.344.625-.461 1.086-.301 3.102 1.09 6.297 1.183 9.516.836 1.25-.14 1.273-.14 1.363 1.203-1.039.094-2.058.23-3.078.3-.738.048-1.504.024-2.246.024h-.879c-1.25-.277-2.523-.512-3.773-.879-.672-.21-1.133-.117-1.621.414a362.96 362.96 0 0 1-5.278 5.442c-.691.695-.996.695-1.71 0-1.481-1.48-3.012-2.965-4.446-4.493-.277-.37-.371-.902-.555-1.32zm0 0"
      />
      <path
        fill={forceColor ?? '#fefefe'}
        d="M51.594 200.68a2.7 2.7 0 0 1-.535-.395c-.856-.902-1.735-1.781-2.59-2.707-.094-.113-.164-.254-.235-.394l2.594-2.454 2.547-2.382 3.844-3.614c.254-.207.531-.414.785-.644a1364.77 1364.77 0 0 0 6.113-5.719l18.817-17.57c3.52-3.285 7.039-6.598 10.578-9.883.742-.695 1.62-.672 2.34.066.347.348.671.743 1.02 1.114.714.785.714 1.574-.048 2.312a93.042 93.042 0 0 1-2.129 1.992c-3.379 3.149-6.761 6.297-10.117 9.446-4.906 4.582-9.816 9.187-14.746 13.773-2.66 2.5-5.324 4.977-7.984 7.477-.395.37-.743.785-1.09 1.18l-4.422 4.003-2.406 2.246zm6.527 5.996-3.543-3.266 2.152-2.082 2.34-2.176 4.075-3.797c.136-.113.3-.207.414-.324 2.086-1.941 4.168-3.886 6.25-5.855l15.578-14.582a739.81 739.81 0 0 1 6.02-5.602c.741-.695 1.62-.648 2.34.113.253.278.483.536.714.813 1.09 1.133 1.09 1.781-.043 2.848-4.633 4.328-9.238 8.68-13.867 13.007-1.598 1.48-3.196 2.942-4.77 4.446a832.839 832.839 0 0 0-4.722 4.488l-4.211 3.914-2.895 2.73-1.598 1.504-.925.813-1.758 1.617zm-15.879-16.574 1.504-1.598.672-.531 1.852-1.782 1.898-1.785c.23-.136.437-.3.625-.46.855-.837 1.71-1.692 2.543-2.524l1.113-1.09c.278-.16.531-.324.762-.531 1.297-1.203 2.57-2.406 3.867-3.61 2.082-1.968 4.168-3.937 6.25-5.906.902-.808 1.805-1.617 2.684-2.453 3.125-2.914 6.25-5.879 9.398-8.797 1.067-.992 2.2-1.941 3.29-2.914.741-.117 1.32.16 1.804.695.23.278.488.532.719.809.949 1.09.925 1.715-.141 2.707-1.086 1.02-2.2 2.04-3.285 3.059a9148.19 9148.19 0 0 0-15.813 14.812c-1.597 1.48-3.191 2.942-4.765 4.422-.903.855-1.762 1.734-2.664 2.594-.418.347-.832.672-1.227 1.039-.855.812-1.71 1.644-2.57 2.476l-2.613 2.41-2.895 2.637c-.672-.761-1.367-1.527-2.016-2.312-.367-.395-.668-.903-.992-1.367zm56.875-41.297c-.648-.996-.672-1.02.16-1.989 1.434-1.691 2.918-3.336 4.375-5 .23-.28.418-.511.184-.882-1.41-2.22-1.895-4.7-1.895-7.313 0-.047 0-.094-.023-.14.113-1.016.113-1.016-.79-1.32-3.077-1.016-6.155-2.036-9.233-3.056a494.98 494.98 0 0 0-5.348-1.687c-.879-.672-.902-.926-.188-1.738 3.59-4.051 7.176-8.102 10.813-12.153.348-.394.902-.648 1.387-.832.765-.277 1.55-.441 2.34-.648.093-.024.183-.024.277-.047 4.027-.973 8.054-1.922 12.058-2.895a.954.954 0 0 0 .465-.277c1.02-1.156 2.035-2.336 3.055-3.52 2.523-2.89 5.14-5.714 8.078-8.214 1.922-1.645 3.844-3.29 5.766-4.91 1.226-.903 2.406-1.805 3.632-2.707 5.211-3.797 10.672-7.106 16.575-9.7 1.992-.879 4.05-1.62 6.09-2.453.136-.023.253-.047.39-.094a57.787 57.787 0 0 1 12.617-2.683c.141 0 .278.023.418.023 2.106.047 4.211.047 6.317.137 1.23.07 1.23.164 1.554 1.508.16 2.89 0 5.808-.464 8.656-1.368 7.961-4.446 15.277-8.59 22.152-6.664 11.086-15.184 20.579-25.043 28.868a2 2 0 0 0-.742 1.226c-1.02 4.813-2.036 9.653-3.102 14.465-.094.418-.3.79-.602 1.09a1468.924 1468.924 0 0 1-12.5 11.133c-.253.21-.671.21-1.043.324-.23-.414-.507-.785-.648-1.203-.715-2.082-1.387-4.168-2.082-6.274-.766-2.406-1.55-4.836-2.316-7.246-.024-.09-.137-.16-.207-.23-.07-1.227-.094-1.227-1.25-1.11-2.965.325-5.903.23-8.774-.765-.441-.16-.695-.047-1.02.277-1.617 1.692-3.285 3.356-4.93 5.047-.784.809-1.019.785-1.827 0a272.106 272.106 0 0 1-3.934-3.82zm33.38-31.227.136.188c.07.16.187.3.3.437 2.641 2.57 5.79 3.45 9.399 2.707 1.367-.277 2.64-.832 3.703-1.781 2.246-1.734 3.45-4.05 3.684-6.852.16-1.945-.117-3.843-1.184-5.554-.043-.118-.09-.207-.137-.301-3.75-6.297-13.078-6.25-16.738.113-1.55 2.688-1.781 5.535-.668 8.473.508.86.992 1.715 1.504 2.57zm0 0"
      />
      <path
        fill={forceColor != null ? '#fff' : '#fecaa8'}
        d="M145.945 119.2c-1.066.948-2.316 1.503-3.683 1.757-3.563.742-6.711-.137-9.352-2.684a3.247 3.247 0 0 1-.3-.441l-.137-.184v.024a4.877 4.877 0 0 0-.188-.555c-1.156-2.152-1.363-4.422-.601-6.738a8.424 8.424 0 0 1 2.5-3.727c2.34-2.035 5.046-2.636 8.011-1.851 1.551.418 2.848 1.297 3.957 2.5 2.477 2.664 2.985 6.804 1.133 9.906-.414.672-.902 1.32-1.34 1.992zm0 0"
      />
      <path
        fill={forceColor != null ? '#fff' : '#fe7837'}
        d="M148.422 106.86c-.14-.067-.324-.09-.418-.208-1.805-2.082-4.027-3.242-6.805-3.449-2.34-.183-4.445.395-6.297 1.762-2.336 1.71-3.75 4.004-3.89 6.941-.043.95.07 1.922.093 2.871 0 .094-.07.188-.113.278-1.137-2.914-.883-5.739.668-8.403 3.637-6.32 12.918-6.367 16.668-.117.024.117.07.211.094.324zm0 0"
      />
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
