import { PropsWithChildren } from 'react';

interface IStyledDataBoxProps extends PropsWithChildren {
  heading: string;
}

export default function StyledDataBox({ heading, children }: IStyledDataBoxProps) {
  return (
    <aside className="border border-white/20 rounded py-3 px-4 max-w-lg">
      <h2 className="">{heading}</h2>
      <div>{children}</div>
    </aside>
  );
}
