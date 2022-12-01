import { PropsWithChildren } from 'react';

interface IStyledDataBoxProps extends PropsWithChildren {
  heading: string;
}

export default function StyledDataBox({ heading, children }: IStyledDataBoxProps) {
  return (
    <div className="border border-white/20 rounded mb-6 py-3 px-4 sm:max-w-lg md:max-w-none md:w-full mx-auto">
      <h2 className="mb-2">{heading}</h2>
      <div>{children}</div>
    </div>
  );
}
