import { PropsWithChildren } from 'react';

interface IStyledDataBoxProps extends PropsWithChildren {
  heading: string;
  loggedIn?: boolean;
  boxButtonLabel?: string;
  boxButtonOnClick?: () => void;
}

export default function StyledDataBox({
  heading,
  children,
  loggedIn = false,
  boxButtonLabel = 'Log Out',
  boxButtonOnClick,
}: IStyledDataBoxProps) {
  let headingClasses = 'mb-2';
  let containerClasses = ' border-white/20  py-3 px-4';

  loggedIn ? (containerClasses += ' rounded-t border-x border-t') : (containerClasses += ' border rounded');

  if (children === undefined) {
    headingClasses += ' text-white/20';
  }

  return (
    <div className="mb-6 sm:max-w-lg md:max-w-none md:w-full mx-auto">
      <div className={containerClasses}>
        <h2 className={headingClasses}>{heading}</h2>
        <div>{children}</div>
      </div>
      {loggedIn && (
        <button
          type="button"
          onClick={boxButtonOnClick}
          className="bg-white/10 border-white/20 uppercase p-2 font-bold border w-full rounded-b hover:bg-white/20 focus:bg-white/20 active:bg-white/30"
        >
          {boxButtonLabel}
        </button>
      )}
    </div>
  );
}
