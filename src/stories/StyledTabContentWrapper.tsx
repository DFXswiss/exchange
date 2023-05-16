import { PropsWithChildren } from 'react';
import { IconVariant } from './DfxIcon';
import StyledIconButton from './StyledIconButton';

export interface StyledTabContentWrapperProps extends PropsWithChildren {
  showBackArrow?: boolean;
  leftBorder?: boolean;
  onBackClick?: () => void;
}

export default function StyledTabContentWrapper({
  showBackArrow = false,
  leftBorder = false,
  children,
  onBackClick,
}: StyledTabContentWrapperProps) {
  return (
    <div className={`w-full ${leftBorder ? 'border-l border-dfxGray-400' : ''}`}>
      {showBackArrow && onBackClick && (
        <div className="absolute">
          <StyledIconButton icon={IconVariant.BACK} onClick={onBackClick} />
        </div>
      )}
      <div className="m-auto max-w-lg">{children}</div>
    </div>
  );
}
