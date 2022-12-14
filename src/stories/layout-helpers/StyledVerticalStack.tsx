import { PropsWithChildren } from 'react';

export interface StyledVerticalStackProps extends PropsWithChildren {
  gap?: number;
}

export default function StyledVerticalStack({ children, gap = 0 }: StyledVerticalStackProps) {
  const gapRem = gap / 4;
  const spacing = gapRem + 'rem';
  return (
    <div style={{ gap: spacing }} className="flex flex-col">
      {children}
    </div>
  );
}
