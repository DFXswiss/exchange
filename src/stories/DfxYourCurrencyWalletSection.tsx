import DfxIcon, { IconColors, IconSizes, IconVariant } from './DfxIcon';
import StyledDropdown, { DropdownItem } from './form/StyledDropdown';
import StyledCoinListItem, { Protocol } from './StyledCoinListItem';

interface DfxYourCurrencyWalletSectionProps {
  items: DropdownItem[];
}

export default function DfxYourCurrencyWalletSection({ items }: DfxYourCurrencyWalletSectionProps) {
  return (
    <div className="flex justify-between  items-center">
      <div className="basis-5/12 shrink-1">
        <StyledDropdown
          name="currency-select"
          label="Your Currency"
          labelIcon={IconVariant.BANK}
          items={items}
          onSelect={(item) => {
            console.log('selected ' + item.title);
          }}
        />
      </div>
      <div className="basis-2/12 shrink-0 flex justify-center pt-9">
        <div className=" ">
          <DfxIcon icon={IconVariant.ARROW_RIGHT} size={IconSizes.LG} color={IconColors.GRAY} />
        </div>
      </div>
      <div className="basis-5/12 shrink-1">
        <div className="flex ml-3.5 mb-2.5">
          <DfxIcon icon={IconVariant.WALLET} size={IconSizes.SM} color={IconColors.BLUE} />

          <label className="text-dfxBlue-800 text-base font-semibold pl-3.5">Your Wallet</label>
        </div>
        <div className="border border-dfxGray-400 rounded px-2 py-1.5 drop-shadow-sm">
          <StyledCoinListItem
            asset="ETH"
            protocol={Protocol.ERC_20}
            onClick={() => {
              console.log('click');
            }}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
