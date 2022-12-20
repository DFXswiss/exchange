import { useState } from 'react';
import { Asset } from '../../api/definitions/asset';
import { useSessionContext } from '../../contexts/session.context';
import { IconVariant } from '../../stories/DfxIcon';
import { StyledTabProps } from '../../stories/StyledTabContainer';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { BuyTabContentProcess } from './buy-tab-content/buy.process';

enum BuyTabStep {
  OVERVIEW,
  BUY_PROCESS,
}

export const BuyTab: StyledTabProps = {
  title: 'Buy',
  icon: IconVariant.BANK,
  deactivated: false,
  content: <BuyTabContent />,
};

function BuyTabContent(): JSX.Element {
  const [step, setStep] = useState<BuyTabStep>(BuyTabStep.OVERVIEW);
  const [currentAsset, setCurrentAsset] = useState<Asset>();
  const { isLoggedIn, login } = useSessionContext();

  switch (step) {
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            if (!asset.buyable) return;
            if (isLoggedIn) {
              setCurrentAsset(asset);
              setStep(BuyTabStep.BUY_PROCESS);
            } else {
              login();
            }
          }}
        />
      );
    case BuyTabStep.BUY_PROCESS:
      return <BuyTabContentProcess onBack={() => setStep(BuyTabStep.OVERVIEW)} asset={currentAsset} />;
  }
}
