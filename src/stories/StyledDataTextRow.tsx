import { PropsWithChildren } from 'react';

interface StyledDataTextRowProps extends PropsWithChildren {
  label: string;
}

export default function StyledDataTextRow({ label, children }: StyledDataTextRowProps) {
  const labelClasses = 'text-dfxGray-600';
  const rowDataClasses = 'flex-auto overflow-hidden ';

  return (
    <div className="flex py-1">
      <div className="flex-none w-48">
        <p className={labelClasses}>{label}</p>
      </div>
      <div className={rowDataClasses}>{children}</div>
    </div>
  );
}
