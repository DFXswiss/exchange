import { PropsWithChildren } from 'react';

interface StyledTabProps extends PropsWithChildren {
  tabId: number;
  updateActiveTab: (tId: number) => any;
  openTab: number;
  deactivated?: boolean;
}

export default function StyledTab({ tabId, children, openTab, updateActiveTab, deactivated = false }: StyledTabProps) {
  const hrefLink = '#link' + tabId;
  let tabClasses = 'text-2xl font-black px-16 py-2 rounded-t-lg block ';
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
      </a>
    </li>
  );
}
