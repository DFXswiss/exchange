import { useEffect, useState } from 'react';
import { BuyTabContentOverview } from './buy-tab-content/buy.overview';
import { IconVariant, StyledTabContentWrapper, StyledTabProps } from '@dfx.swiss/react-components';
import { Asset, Blockchain, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { DfxServices, Service } from '@dfx.swiss/services-react';

enum BuyTabStep {
  OVERVIEW,
  LOGIN,
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
  const { isLoggedIn } = useAuthContext();
  const { sync } = useSessionContext();

  useEffect(() => {
    if (isLoggedIn && currentAsset) {
      onStepUpdate(BuyTabStep.BUY_PROCESS);
    } else {
      onStepUpdate(BuyTabStep.OVERVIEW);
    }
  }, [isLoggedIn]);

  switch (step) {
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            if (!asset.buyable) return;
            setCurrentAsset(asset);
            if (isLoggedIn) {
              onStepUpdate(BuyTabStep.BUY_PROCESS);
            } else {
              onStepUpdate(BuyTabStep.LOGIN);
            }
          }}
        />
      );
    case BuyTabStep.LOGIN:
      if (!isLoggedIn) {
        return (
          <StyledTabContentWrapper showBackArrow onBackClick={() => onStepUpdate(BuyTabStep.OVERVIEW)}>
            <DfxServices headless="true" service={Service.CONNECT} blockchain={Blockchain.ETHEREUM} onClose={sync} />
          </StyledTabContentWrapper>
        );
      }
      return <></>;
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
            onClose={() => onStepUpdate(BuyTabStep.OVERVIEW)}
          />
        </StyledTabContentWrapper>
      );
    default:
      return <></>;
  }
}
