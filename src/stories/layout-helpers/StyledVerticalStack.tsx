import { PropsWithChildren } from 'react';
import { convertToRem } from './LayoutFunctions';

export interface StyledVerticalStackProps extends PropsWithChildren {
  gap?: number;
  marginY?: number;
  marginX?: number;
  center?: boolean;
}

export default function StyledVerticalStack({ children, gap = 0, marginY, marginX, center }: StyledVerticalStackProps) {
  const spacing = convertToRem(gap);
  const mY = marginY != undefined ? convertToRem(marginY) : '0';
  const mX = marginX != undefined ? convertToRem(marginX) : '0';
  let classNames = 'flex flex-col ';
  center && (classNames += 'items-center');

  return (
    <div style={{ gap: spacing, margin: mY + ' ' + mX }} className={classNames}>
      {children}
    </div>
  );
}
