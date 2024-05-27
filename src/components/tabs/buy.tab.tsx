import { useEffect, useState } from 'react';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { IconVariant, StyledTabContentWrapper, StyledTabProps } from '@dfx.swiss/react-components';
import { Asset, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { DfxServices, Service } from '@dfx.swiss/services-react';

enum BuyTabStep {
  OVERVIEW,
  BUY_PROCESS,
}

export function useBuyTab(showConnectModal: () => void): StyledTabProps {
  const [step, setStep] = useState<BuyTabStep>(BuyTabStep.OVERVIEW);

  return {
    title: 'Buy',
    icon: IconVariant.BANK,
    deactivated: false,
    content: <BuyTabContent step={step} onStepUpdate={setStep} onShowConnectModal={showConnectModal} />,
    onActivate: () => setStep(BuyTabStep.OVERVIEW),
  };
}

interface BuyTabContentProps {
  step: BuyTabStep;
  onStepUpdate: (step: BuyTabStep) => void;
  onShowConnectModal: () => void;
}

function BuyTabContent({ step, onStepUpdate, onShowConnectModal }: BuyTabContentProps): JSX.Element {
  const [currentAsset, setCurrentAsset] = useState<Asset>();
  const { isLoggedIn } = useSessionContext();
  const { authenticationToken } = useAuthContext();

  useEffect(() => {
    if (!isLoggedIn && step === BuyTabStep.BUY_PROCESS) {
      onStepUpdate(BuyTabStep.OVERVIEW);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    onStepUpdate(BuyTabStep.OVERVIEW);
  }, [authenticationToken]);

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
              onShowConnectModal();
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
