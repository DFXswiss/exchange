import DfxAssetIcon, { AssetIconVariant } from './DfxAssetIcon';

export interface StyledCoinListItemProps {
  asset: string;
  disabled?: boolean;
  comingSoon?: boolean;
  onClick: () => void;
  protocol: Protocol;
}

export enum Protocol {
  ERC_20 = 'ERC-20',
  BEP_20 = 'BEP-20',
}

const NAME_MAPS: Record<AssetIconVariant, string> = {
  [AssetIconVariant.USDT]: 'Tether',
  [AssetIconVariant.BNB]: 'BNB',
  [AssetIconVariant.DFI]: 'DFI',
  [AssetIconVariant.USDC]: 'USD Coin',
  [AssetIconVariant.BUSD]: 'Binance USD',
  [AssetIconVariant.ETH]: 'Ethereum',
  [AssetIconVariant.DAI]: 'Dai',
  [AssetIconVariant.BTC]: 'Bitcoin',
  [AssetIconVariant.BSCUSD]: 'Binance Tether',
};

export default function StyledCoinListItem({
  asset,
  onClick,
  protocol,
  disabled,
  comingSoon,
}: StyledCoinListItemProps) {
  const name = comingSoon ? 'Coming soon' : NAME_MAPS[asset as AssetIconVariant];
  let buttonClasses = 'flex gap-2 rounded px-3 py-2 h-12';

  disabled || comingSoon
    ? null
    : (buttonClasses += ' hover:bg-dfxGray-400/50 focus:bg-dfxGray-400/50 active:bg-dfxGray-400/80');

  return (
    <button type="button" onClick={onClick} className={buttonClasses} disabled={disabled || comingSoon}>
      <div className="self-center">
        <DfxAssetIcon asset={asset as AssetIconVariant} disabled={comingSoon} />
      </div>
      <div className="flex-col text-dfxBlue-800 text-left">
        <div className="flex font-semibold gap-1 ">
          <h4 className="leading-none">{asset}</h4>
          <span className="self-start leading-none text-2xs shrink-0">{protocol}</span>{' '}
        </div>
        <span className="text-dfxGray-800 text-xs leading-none relative -top-1">{name}</span>
      </div>
    </button>
  );
}
