import { PropsWithChildren } from 'react';
import { IconColors, IconSizes, IconVariant } from './DfxIcon';
import StyledIconButton from './StyledIconButton';

interface StyledDataBoxProps extends PropsWithChildren {
  heading: string;
  loggedIn?: boolean;
  hasSettings?: boolean;
  boxButtonLabel?: string;
  boxButtonOnClick?: () => void;
}

export default function StyledDataBox({
  heading,
  children,
  loggedIn = false,
  hasSettings = false,
  boxButtonLabel = 'Log Out',
  boxButtonOnClick,
}: StyledDataBoxProps) {
  let headingClasses = 'mb-2';
  let containerClasses = ' border-white/20  p-3';

  loggedIn ? (containerClasses += ' rounded-t border-x border-t') : (containerClasses += ' border rounded');

  if (children === undefined) {
    headingClasses += ' text-white/20';
  }

  return (
    <div className="mb-6 sm:max-w-lg md:max-w-none md:w-full mx-auto">
      <div className={containerClasses}>
        <div className="flex justify-between content-start">
          <h2 className={headingClasses}>{heading}</h2>
          {hasSettings && (
            <StyledIconButton
              icon={IconVariant.SETTINGS}
              color={IconColors.RED}
              size={IconSizes.LG}
              onClick={() => {
                console.log('clicked');
              }}
            />
          )}
        </div>
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
