import { PropsWithChildren, createContext, useContext } from 'react';
import { ThemeContext } from './StyledDataTable';

interface StyledDataTableRowProps extends PropsWithChildren {
  label: string;
}

export default function StyledDataTableRow({ label, children }: StyledDataTableRowProps) {
  const theme = useContext(ThemeContext);

  let wrapperClasses = 'flex text-sm';
  let labelClasses = ' ';
  let rowDataClasses = 'flex gap-3 w-full';

  theme.showBorder
    ? (wrapperClasses +=
        ' px-3.5 py-2.5 border-t border-x last:border-y border-dfxGray-400 first:rounded-t last:rounded-b')
    : (wrapperClasses += ' px-0 py-2.5');

  if (theme.darkTheme) {
    labelClasses += ' text-dfxGray-600';
  } else {
    labelClasses += ' text-dfxGray-800';
    rowDataClasses += ' text-dfxBlue-800';
  }

  theme.alignRight ? (rowDataClasses += ' justify-end') : (rowDataClasses += ' justify-start');

  return (
    <div className={wrapperClasses}>
      <div className="flex-none w-48">
        <p className={labelClasses}>{label}</p>
      </div>
      <div className={rowDataClasses}>{children}</div>
    </div>
  );
}
