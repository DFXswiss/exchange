import { Asset, AssetType } from '../api/definitions/asset';
import { Protocol } from '../hooks/blockchain.hook';
import BigNumber from 'bignumber.js';
import DfxAssetIcon, { AssetIconVariant } from './DfxAssetIcon';

interface StyledBalanceProps {
  asset: Asset;
  protocol: Protocol;
  balance: BigNumber;
  balanceInUsd?: BigNumber;
  isSelected: boolean;
  onClick: () => void;
}

export default function StyledBalance({
  asset,
  protocol,
  balance,
  balanceInUsd,
  isSelected,
  onClick,
}: StyledBalanceProps): JSX.Element {
  let wrapperClasses = 'group flex rounded place-self-start w-full ';
  const buttonClasses = 'flex justify-between rounded-l px-3 py-1.5 z-10 flex-1';

  if (isSelected) {
    wrapperClasses += 'bg-dfxGray-400';
  } else {
    wrapperClasses += 'bg-white hover:bg-dfxGray-400/50';
  }

  return (
    <div className={wrapperClasses}>
      <button type="button" onClick={onClick} className={buttonClasses}>
        <div className="flex gap-2">
          <div className="self-center">
            <DfxAssetIcon asset={asset.name as AssetIconVariant} />
          </div>
          <div className="text-left">
            <div className="flex font-semibold gap-1 text-dfxBlue-800">
              <h4 className="leading-snug">{asset.name}</h4>
              {asset.type !== AssetType.COIN && (
                <span className="self-start mt-1 leading-none font-semibold text-2xs shrink-0">{protocol}</span>
              )}
            </div>
            <span className="text-dfxGray-800 text-xs leading-tight block">{asset.description}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-dfxBlue-800">{balance.toString()}</h4>
          {balanceInUsd && (
            <span className="text-dfxGray-800 font-normal text-xs text-end">${balanceInUsd.toString()}</span>
          )}
        </div>
      </button>
    </div>
  );
}
