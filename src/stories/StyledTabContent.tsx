import { PropsWithChildren } from 'react';

interface StyledTabContentProps extends PropsWithChildren {
  openTab?: number;
  tabId: number;
}

export default function StyledTabContent({ openTab = 1, tabId, children }: StyledTabContentProps) {
  const myTabId = 'link' + tabId;

  return (
    <div className={openTab === tabId ? 'block' : 'hidden'} id={myTabId}>
      {children}
    </div>
  );
}
