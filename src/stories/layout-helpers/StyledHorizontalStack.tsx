import { PropsWithChildren } from 'react';

export interface StyledHorizontalStackProps extends PropsWithChildren {
  gap?: number;
  spanAcross?: boolean;
}

export default function StyledHorizontalStack({ children, gap = 0, spanAcross }: StyledHorizontalStackProps) {
  const gapRem = gap / 4;
  const spacing = gapRem + 'rem';
  let classNames = 'flex';
  spanAcross ? (classNames += ' justify-between') : null;
  return (
    <div style={{ gap: spacing }} className={classNames}>
      {children}
    </div>
  );
}
