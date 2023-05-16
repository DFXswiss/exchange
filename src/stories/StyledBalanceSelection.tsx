import { Asset } from '../api/definitions/asset';
import { Protocol } from '../hooks/blockchain.hook';
import BigNumber from 'bignumber.js';
import StyledBalance from './StyledBalance';
import { useState } from 'react';
import DfxIcon, { IconColor, IconSize, IconVariant } from './DfxIcon';

interface StyledBalanceSelectionProps {
  balances: { asset: Asset; protocol: Protocol; balance: BigNumber; balanceInUsd: BigNumber; isSelected: boolean }[];
  onSelectionChanged: (asset: Asset) => void;
}

export default function StyledBalanceSelection({
  balances,
  onSelectionChanged,
}: StyledBalanceSelectionProps): JSX.Element {
  const [filter, setFilter] = useState('');

  return (
    <div className="flex flex-col gap-5 w-72 shrink-0">
      <div className="relative">
        <div className="absolute left-2 top-[9px]">
          <DfxIcon icon={IconVariant.SEARCH} color={IconColor.BLUE} size={IconSize.LG} />
        </div>
        <input
          className="text-base font-normal rounded-md pl-8 pr-3 py-2 w-full bg-white text-dfxBlue-800 placeholder:text-dfxGray-600 border border-dfxGray-400 outline-2 outline-dfxBlue-400"
          placeholder="Search a token"
          onChange={(value) => setFilter(value.target.value)}
        />
      </div>
      <div className="flex flex-col flex-grow gap-2 overflow-auto">
        {balances
          .filter((balance) => balance.asset.name.toLowerCase().includes(filter.toLowerCase()))
          .map((balance) => (
            <StyledBalance
              key={balance.asset.uniqueName}
              {...balance}
              onClick={() => onSelectionChanged(balance.asset)}
            />
          ))}
      </div>
    </div>
  );
}
