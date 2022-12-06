import React, { ReactNode } from 'react';
import StyledTab, { TabType } from './StyledTab';

interface StyledTabContainerProps {
  tabs: Array<TabProps>;
  openTabOnLoad?: number;
}

type TabProps = {
  title: string;
  deactivated: boolean;
  content: ReactNode | undefined;
  type?: TabType;
};

export default function StyledTabContainer({ tabs, openTabOnLoad = 0 }: StyledTabContainerProps) {
  const [openTab, setOpenTab] = React.useState(openTabOnLoad);

  return (
    <>
      <div className="flex flex-wrap text-dfxBlue-800 mt-6">
        <div className="w-full">
          <ul className="flex mb-0 rounded-t-lg list-none bg-white/50 flex-wrap p-0 flex-row" role="tablist">
            {tabs.map((tab: TabProps, index: number) => {
              return (
                <StyledTab
                  tabId={index}
                  updateActiveTab={setOpenTab}
                  openTab={openTab}
                  deactivated={tab.deactivated}
                  key={index}
                  type={tab.type}
                >
                  {tab.title}
                </StyledTab>
              );
            })}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-b-lg">
            <div className="p-8 flex-auto">
              <div className="tab-content tab-space">{tabs[openTab].content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
