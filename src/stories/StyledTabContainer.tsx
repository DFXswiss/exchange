import React from 'react';
import StyledTab from './StyledTab';
import StyledTabContent from './StyledTabContent';

export default function StyledTabContainer() {
  const [openTab, setOpenTab] = React.useState(1);

  const updateOpenTab = function (tabId: number) {
    setOpenTab(tabId);
  };

  return (
    <>
      <div className="flex flex-wrap text-dfxBlue-800">
        <div className="w-full">
          <ul className="flex mb-0 rounded-t-lg list-none bg-white/50 flex-wrap p-0 flex-row" role="tablist">
            <StyledTab tabId={1} updateActiveTab={updateOpenTab} openTab={openTab}>
              Buy
            </StyledTab>
            <StyledTab tabId={2} updateActiveTab={updateOpenTab} openTab={openTab}>
              Sell
            </StyledTab>
            <StyledTab tabId={3} updateActiveTab={updateOpenTab} openTab={openTab}>
              Konvertieren
            </StyledTab>
            <StyledTab tabId={4} updateActiveTab={updateOpenTab} openTab={openTab}>
              Stake
            </StyledTab>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-b-lg">
            <div className="p-8 flex-auto">
              <div className="tab-content tab-space">
                <StyledTabContent tabId={1} openTab={openTab}>
                  <h2>Buy</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium explicabo, quibusdam
                    nisi quae a! Quis consectetur qui, impedit autem exercitationem incidunt eligendi. Itaque quaerat
                    dolor non velit, maiores perspiciatis?
                  </p>
                  <h2>Buy</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium explicabo, quibusdam
                    nisi quae a! Quis consectetur qui, impedit autem exercitationem incidunt eligendi. Itaque quaerat
                    dolor non velit, maiores perspiciatis?
                  </p>
                </StyledTabContent>
                <StyledTabContent tabId={2} openTab={openTab}>
                  <h2>Sell your Crypto</h2>
                </StyledTabContent>
                <StyledTabContent tabId={3} openTab={openTab}>
                  <h2>Tab 3</h2>
                </StyledTabContent>
                <StyledTabContent tabId={4} openTab={openTab}>
                  <h2>Tab 4</h2>
                </StyledTabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
