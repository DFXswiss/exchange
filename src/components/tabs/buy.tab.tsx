import { useState } from 'react';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { BuyTabContentProcess } from './buy-tab-content/buy.process';
import { IconVariant, StyledTabProps } from '@dfx.swiss/react-components';
import { Asset, useSessionContext } from '@dfx.swiss/react';
import { useWalletContext } from '../../contexts/wallet.context';

enum BuyTabStep {
  OVERVIEW,
  BUY_PROCESS,
}

export function useBuyTab(): StyledTabProps {
  const [step, setStep] = useState<BuyTabStep>(BuyTabStep.OVERVIEW);

  return {
    title: 'Buy',
    icon: IconVariant.BANK,
    deactivated: false,
    content: <BuyTabContent step={step} onStepUpdate={setStep} />,
    onActivate: () => setStep(BuyTabStep.OVERVIEW),
  };
}

interface BuyTabContentProps {
  step: BuyTabStep;
  onStepUpdate: (step: BuyTabStep) => void;
}

function BuyTabContent({ step, onStepUpdate }: BuyTabContentProps): JSX.Element {
  const [currentAsset, setCurrentAsset] = useState<Asset>();
  const { requestLogin } = useWalletContext();
  const { isLoggedIn } = useSessionContext();

  switch (step) {
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            if (!asset.buyable) return;
            if (isLoggedIn) {
              setCurrentAsset(asset);
              onStepUpdate(BuyTabStep.BUY_PROCESS);
            } else {
              requestLogin();
            }
          }}
        />
      );
    case BuyTabStep.BUY_PROCESS:
      return <BuyTabContentProcess onBack={() => onStepUpdate(BuyTabStep.OVERVIEW)} asset={currentAsset} />;
  }
}
