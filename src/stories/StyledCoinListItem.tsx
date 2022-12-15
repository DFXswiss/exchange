import DfxAssetIcon, { AssetIconVariant } from './DfxAssetIcon';

export interface StyledCoinListItemProps {
  asset: string;
  onClick: () => void;
  protocol: Protocol;
  disabled?: boolean;
}

export enum Protocol {
  ERC_20 = 'ERC-20',
  BEP_20 = 'BEP-20',
}

const NAME_MAPS: Record<AssetIconVariant, string> = {
  [AssetIconVariant.USDT]: 'USD Tether',
  [AssetIconVariant.BNB]: 'BNB',
  [AssetIconVariant.DFI]: 'DFI',
  [AssetIconVariant.USDC]: 'USD Coin',
  [AssetIconVariant.BUSD]: 'Binance USD',
  [AssetIconVariant.ETH]: 'Ethereum',
  [AssetIconVariant.DAI]: 'Dai',
  [AssetIconVariant.BTC]: 'Bitcoin',
};

export default function StyledCoinListItem({ asset, onClick, protocol, disabled }: StyledCoinListItemProps) {
  let buttonClasses = 'flex gap-2 rounded px-3 py-2 h-12';

  disabled ? null : (buttonClasses += ' hover:bg-dfxGray-400/50 focus:bg-dfxGray-400/50 active:bg-dfxGray-400/80');

  return (
    <button type="button" onClick={onClick} className={buttonClasses} disabled={disabled}>
      <div className="self-center">
        <DfxAssetIcon asset={asset as AssetIconVariant} />
      </div>
      <div className="flex-col text-dfxBlue-800 text-left">
        <div className="flex font-semibold gap-1">
          <h4 className="leading-none">{asset}</h4> <span className="self-start leading-none text-2xs">{protocol}</span>{' '}
        </div>
        <span className="text-dfxGray-800 text-xs relative -top-1">{NAME_MAPS[asset as AssetIconVariant]}</span>
      </div>
    </button>
  );
}
