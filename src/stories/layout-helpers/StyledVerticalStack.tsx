import { PropsWithChildren } from 'react';
import { convertToRem } from './LayoutFunctions';

export interface StyledVerticalStackProps extends PropsWithChildren {
  gap?: number;
  align?: StyledVerticalStackAlignContent;
  marginY?: number;
  marginX?: number;
}

export enum StyledVerticalStackAlignContent {
  CENTER = 'items-center',
  START = 'items-start',
  END = 'items-end',
}

export default function StyledVerticalStack({
  children,
  gap = 0,
  align = StyledVerticalStackAlignContent.START,
  marginY,
  marginX,
}: StyledVerticalStackProps) {
  let mY: string | undefined;
  let mX: string | undefined;

  const spacing = convertToRem(gap);
  marginY !== undefined ? (mY = convertToRem(marginY)) : (mY = '0');
  marginX !== undefined ? (mX = convertToRem(marginX)) : (mX = '0');

  return (
    <div style={{ gap: spacing, margin: mY + ' ' + mX }} className={'flex flex-col ' + align}>
      {children}
    </div>
  );
}
