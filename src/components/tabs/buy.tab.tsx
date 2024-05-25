import { useEffect, useState } from 'react';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { IconVariant, StyledTabContentWrapper, StyledTabProps } from '@dfx.swiss/react-components';
import { Asset, Blockchain, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { DfxServices, Service } from '@dfx.swiss/services-react';

enum BuyTabStep {
  LOGIN,
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
  const { isLoggedIn, sync } = useSessionContext();
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
    case BuyTabStep.LOGIN:
      return (
        <StyledTabContentWrapper
          showBackArrow
          onBackClick={() => onStepUpdate(BuyTabStep.OVERVIEW)}
          className="max-w-none"
        >
          <DfxServices
            headless="true"
            service={Service.CONNECT}
            blockchain={Blockchain.ETHEREUM}
            session={authenticationToken}
            onClose={() => {
              sync();
              onStepUpdate(BuyTabStep.OVERVIEW);
            }}
          />
        </StyledTabContentWrapper>
      );
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            if (!asset.buyable) return;
            if (isLoggedIn) {
              setCurrentAsset(asset);
              onStepUpdate(BuyTabStep.BUY_PROCESS);
            } else {
              // requestLogin();
              onStepUpdate(BuyTabStep.LOGIN);
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
