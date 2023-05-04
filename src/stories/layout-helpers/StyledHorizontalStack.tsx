import { PropsWithChildren } from 'react';
import { convertToRem } from './LayoutFunctions';

export interface StyledHorizontalStackProps extends PropsWithChildren {
  gap?: number;
  spanAcross?: boolean;
  center?: boolean;
  marginX?: number;
  marginY?: number;
}

export default function StyledHorizontalStack({
  children,
  gap = 0,
  spanAcross,
  marginY,
  marginX,
  center,
}: StyledHorizontalStackProps) {
  const spacing = convertToRem(gap);
  const mY = marginY != undefined ? convertToRem(marginY) : '0';
  const mX = marginX != undefined ? convertToRem(marginX) : '0';

  let classNames = 'flex ';
  center && (classNames += 'justify-center ');
  spanAcross && (classNames += 'justify-between ');

  return (
    <div style={{ gap: spacing, margin: mY + ' ' + mX }} className={classNames}>
      {children}
    </div>
  );
}
