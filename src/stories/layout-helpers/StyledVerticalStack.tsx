import { PropsWithChildren } from 'react';

export interface StyledVerticalStackProps extends PropsWithChildren {
  gap?: number;
  align?: StyledVerticalStackAlignContent;
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
}: StyledVerticalStackProps) {
  const gapRem = gap / 4;
  const spacing = gapRem + 'rem';
  return (
    <div style={{ gap: spacing }} className={'flex flex-col ' + align}>
      {children}
    </div>
  );
}
