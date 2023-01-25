import { Asset } from '../api/definitions/asset';
import { Protocol } from '../hooks/blockchain.hook';
import DfxAssetIcon, { AssetIconVariant } from './DfxAssetIcon';
import DfxIcon, { IconColor, IconVariant } from './DfxIcon';
import StyledHorizontalStack from './layout-helpers/StyledHorizontalStack';
import StyledVerticalStack from './layout-helpers/StyledVerticalStack';
import StyledIconButton from './StyledIconButton';
import { useFloating, offset, flip, shift, useDismiss, useInteractions } from '@floating-ui/react';
import { useState } from 'react';

export interface StyledCoinListItemProps {
  asset: Asset;
  disabled?: boolean;
  onClick: () => void;
  protocol: Protocol;
  //TODO: refactor as Asset-Props: these popup-Props should come from Asset-Object
  popupTitle: string;
  popupContractAddress: string;
  popupExplorerLink: string;
  popupDescription: string;
}

export default function StyledCoinListItem({
  asset,
  onClick,
  protocol,
  disabled,
  popupContractAddress,
  popupDescription,
  popupExplorerLink,
  popupTitle,
}: StyledCoinListItemProps) {
  const [open, setPopupOpen] = useState(false);
  const { x, y, strategy, refs, context } = useFloating({
    open,
    placement: 'bottom-start',
    middleware: [offset(12), flip(), shift()],
    onOpenChange: setPopupOpen,
  });
  const dismiss = useDismiss(context, { outsidePress: true });
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const name = asset.comingSoon ? 'Coming soon' : asset.description;
  const buttonClasses = 'flex gap-2 rounded-l px-3 py-2 z-10 flex-1 active:bg-dfxGray-400/80';
  let wrapperClasses = 'group flex rounded place-self-start';
  let threeDotsClasses = ' rounded-r grow-0';

  if (!(disabled || asset.comingSoon)) {
    wrapperClasses += ' hover:bg-dfxGray-400/50 focus:bg-dfxGray-400/50 ';
    threeDotsClasses += ' group-hover:visible active:bg-dfxGray-500';
    if (open) {
      threeDotsClasses += ' bg-dfxGray-500 visible';
      wrapperClasses += ' bg-dfxGray-400/50';
    } else {
      threeDotsClasses += ' invisible hover:bg-dfxGray-400/90';
    }
  }

  return (
    <>
      <div className={wrapperClasses}>
        <button
          ref={refs.setReference}
          type="button"
          onClick={onClick}
          className={buttonClasses}
          disabled={disabled || asset.comingSoon}
          {...getReferenceProps()}
        >
          <div className="self-center">
            <DfxAssetIcon asset={asset.name as AssetIconVariant} disabled={asset.comingSoon} />
          </div>
          <div className="text-dfxBlue-800 text-left">
            <div className="flex font-semibold gap-1 ">
              <h4 className="leading-snug">{asset.name}</h4>
              <span className="self-start leading-none text-2xs shrink-0">{protocol}</span>{' '}
            </div>
            <span className="text-dfxGray-800 text-xs leading-tight block">{name}</span>
          </div>
        </button>
        <button
          className={threeDotsClasses}
          onClick={() => {
            setPopupOpen(!open);
          }}
        >
          <DfxIcon icon={IconVariant.THREE_DOTS_VERT} color={IconColor.BLUE} />
        </button>
      </div>
      {open && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
          }}
          {...getFloatingProps()}
          className="bg-white z-20 rounded shadow-xl text-sm border border-dfxGray-600/20 p-4 max-w-sm text-dfxBlue-800"
        >
          <StyledVerticalStack gap={4}>
            <h4 className="font-bold">{popupTitle}</h4>
            <StyledHorizontalStack spanAcross>
              <span className="font-bold">Contract</span>
              <StyledHorizontalStack gap={2}>
                <span className="font-bold">{popupContractAddress}</span>
                <StyledIconButton
                  icon={IconVariant.COPY}
                  onClick={() => {
                    console.log('copied.');
                  }}
                />
                <StyledIconButton
                  icon={IconVariant.METAMASK_LOGO}
                  onClick={() => {
                    console.log(`added ${popupContractAddress} to metamask.`);
                  }}
                />
                <StyledIconButton
                  icon={IconVariant.OPEN_IN_NEW}
                  onClick={() => {
                    window.open(popupExplorerLink, '_blank');
                  }}
                />
              </StyledHorizontalStack>
            </StyledHorizontalStack>
            <p className="text-dfxGray-700 text-xs">{popupDescription}</p>
          </StyledVerticalStack>
        </div>
      )}
    </>
  );
}
