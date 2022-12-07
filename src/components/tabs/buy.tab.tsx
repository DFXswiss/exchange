import { useState } from 'react';
import { Asset } from '../../api/definitions/asset';
import { IconVariant } from '../../stories/DfxIcon';
import { StyledTabProps } from '../../stories/StyledTabContainer';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { BuyTabContentProcess } from './buy-tab-content/buy.process';

enum BuyTabStep {
  OVERVIEW,
  BUY_PROCESS,
}

export function BuyTab(): StyledTabProps {
  return {
    title: 'Buy',
    icon: IconVariant.BANK,
    deactivated: false,
    content: <BuyTabContent />,
  };
}

function BuyTabContent(): JSX.Element {
  const [step, setStep] = useState<BuyTabStep>(BuyTabStep.OVERVIEW);
  const [currentAsset, setCurrentAsset] = useState<Asset>();

  function next() {
    setStep(BuyTabStep.BUY_PROCESS);
  }

  function back() {
    setStep(BuyTabStep.OVERVIEW);
  }

  switch (step) {
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            setCurrentAsset(asset);
            next();
          }}
        />
      );
    case BuyTabStep.BUY_PROCESS:
      return <BuyTabContentProcess onBack={back} asset={currentAsset} />;
  }
}
