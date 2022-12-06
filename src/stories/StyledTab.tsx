import { PropsWithChildren, ReactElement } from 'react';
import DfxIcon, { IconColors, IconSizes, IconVariant } from './DfxIcon';

export enum TabType {
  BUY = 'BUY',
  SOON = 'COMING SOON',
}

const TABTYPE_MAP: Record<TabType, ReactElement> = {
  [TabType.BUY]: <IconTab icon={IconVariant.BANK} />,
  [TabType.SOON]: <ComingSoon />,
};

interface StyledTabProps extends PropsWithChildren {
  tabId: number;
  updateActiveTab: (tId: number) => any;
  openTab: number;
  deactivated?: boolean;
  type?: TabType;
}

export default function StyledTab({
  tabId,
  children,
  type,
  openTab,
  updateActiveTab,
  deactivated = false,
}: StyledTabProps) {
  const hrefLink = '#link' + tabId;
  let tabClasses = 'text-2xl font-black px-12 py-2 rounded-t-lg block flex gap-2 ';
  if (deactivated === false) {
    openTab === tabId ? (tabClasses += 'bg-white') : (tabClasses += 'hover:bg-white/10 focus:bg-white/10');
  } else {
    tabClasses += 'cursor-default text-dfxBlue-800/70';
  }

  function setCurrentTab() {
    updateActiveTab(tabId);
  }

  return (
    <li className="flex-none text-center ">
      <a
        className={tabClasses}
        onClick={(e) => {
          e.preventDefault();
          if (deactivated === false) {
            setCurrentTab();
          }
        }}
        data-toggle="tab"
        href={hrefLink}
        role="tablist"
      >
        {children}
        {type && TABTYPE_MAP[type]}
      </a>
    </li>
  );
}

function ComingSoon() {
  return (
    <div className="text-2xs uppercase font-normal text-left leading-tight place-self-center">
      coming
      <br />
      soon
    </div>
  );
}

type IconTabProps = {
  icon: IconVariant;
};

function IconTab({ icon }: IconTabProps) {
  return (
    <div className="place-self-center ml-1">
      <DfxIcon icon={icon} color={IconColors.BLUE} size={IconSizes.LG} />
    </div>
  );
}
