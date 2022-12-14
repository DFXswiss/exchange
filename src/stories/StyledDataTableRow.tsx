import { PropsWithChildren, useContext } from 'react';
import { AlignContent, ThemeContext } from './StyledDataTable';
import StyledLoadingSpinner, { SpinnerSizes, SpinnerVariant } from './StyledLoadingSpinner';

interface StyledDataTableRowProps extends PropsWithChildren {
  label?: string;
  discreet?: boolean;
  isLoading?: boolean;
}

const ALIGN_MAPS: Record<AlignContent, string> = {
  [AlignContent.LEFT]: ' justify-start',
  [AlignContent.RIGHT]: ' justify-end',
  [AlignContent.BETWEEN]: ' justify-between',
};

export default function StyledDataTableRow({ label, children, discreet, isLoading }: StyledDataTableRowProps) {
  const theme = useContext(ThemeContext);

  let wrapperClasses = 'flex text-sm';
  let labelClasses = ' ';
  let rowDataClasses = 'flex gap-3 w-full';

  discreet ? (wrapperClasses += ' opacity-70') : null;

  theme.showBorder
    ? (wrapperClasses += ' px-3.5 py-2.5 border-t border-x last:border-y first:rounded-t last:rounded-b')
    : (wrapperClasses += ' py-2');

  !theme.showBorder && theme.narrow ? (wrapperClasses += ' px-3.5') : null;

  if (theme.darkTheme) {
    labelClasses += ' text-dfxGray-600';
    wrapperClasses += ' border-white/20';
  } else {
    labelClasses += ' text-dfxGray-800';
    rowDataClasses += ' text-dfxBlue-800';
    wrapperClasses += ' border-dfxGray-400';
  }

  rowDataClasses += ALIGN_MAPS[theme.alignContent];

  return (
    <div className={wrapperClasses}>
      {label !== undefined && (
        <div className="flex-none w-48">
          <p className={labelClasses}>{label}</p>
        </div>
      )}

      <div className={rowDataClasses}>
        {isLoading ? <StyledLoadingSpinner size={SpinnerSizes.SM} variant={SpinnerVariant.PALE} /> : children}
      </div>
    </div>
  );
}
