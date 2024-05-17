import { useState } from 'react';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { IconVariant, StyledTabContentWrapper, StyledTabProps } from '@dfx.swiss/react-components';
import { Asset, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { useWalletContext } from '../../contexts/wallet.context';
import { DfxServices, Service } from '@dfx.swiss/services-react';

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
  const { authenticationToken } = useAuthContext();

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
      return (
        <StyledTabContentWrapper
          showBackArrow
          onBackClick={() => onStepUpdate(BuyTabStep.OVERVIEW)}
          className="max-w-none"
        >
          <DfxServices
            headless="true"
            borderless="true"
            service={Service.BUY}
            blockchain={currentAsset?.blockchain}
            assetOut={currentAsset?.uniqueName}
            session={authenticationToken}
            onClose={() => onStepUpdate(BuyTabStep.OVERVIEW)}
          />
        </StyledTabContentWrapper>
      );
  }
}
