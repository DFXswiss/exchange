import { PropsWithChildren } from 'react';

interface IStyledDataTextRowProps extends PropsWithChildren {
  label: string;
}

export default function StyledDataTextRow({ label, children }: IStyledDataTextRowProps) {
  return (
    <div className="flex">
      <div className="flex-none w-48">
        <p className="text-dfxGray-600">{label}</p>
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
}
