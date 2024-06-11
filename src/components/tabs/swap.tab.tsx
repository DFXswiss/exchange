import { useEffect, useState } from 'react';
import {
  IconVariant,
  StyledButton,
  StyledTabContentWrapper,
  StyledTabProps,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { DfxServices, Service } from '@dfx.swiss/services-react';

enum SwapTabStep {
  OVERVIEW,
  LOGIN,
  SWAP_PROCESS,
}

export function useSwapTab(): StyledTabProps {
  return {
    title: 'Swap',
    icon: IconVariant.SWAP,
    deactivated: false,
    content: <SwapTabContent />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onActivate: () => {},
  };
}

function ServicesContent(): JSX.Element {
  const [step, setStep] = useState<SwapTabStep>();
  const { isLoggedIn } = useAuthContext();
  const { sync } = useSessionContext();
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    if (isLoggedIn) {
      if (step !== SwapTabStep.SWAP_PROCESS) setStep(SwapTabStep.SWAP_PROCESS);
    } else {
      if (step !== SwapTabStep.OVERVIEW) setStep(SwapTabStep.OVERVIEW);
    }
  }, [isLoggedIn]);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  switch (step) {
    case SwapTabStep.OVERVIEW:
      return (
        <StyledTabContentWrapper>
          <StyledVerticalStack gap={4} marginY={20} center>
            <StyledButton label="Connect Wallet" onClick={() => setStep(SwapTabStep.LOGIN)} />
          </StyledVerticalStack>
        </StyledTabContentWrapper>
      );
    case SwapTabStep.LOGIN:
      if (!isLoggedIn) {
        return (
          <StyledTabContentWrapper showBackArrow onBackClick={() => setStep(SwapTabStep.OVERVIEW)}>
            <DfxServices headless="true" service={Service.CONNECT} onClose={sync} />
          </StyledTabContentWrapper>
        );
      }
      return <></>;
    case SwapTabStep.SWAP_PROCESS:
      return (
        <StyledTabContentWrapper className="max-w-none min-h-96">
          <DfxServices
            key={refreshKey}
            headless="true"
            borderless="true"
            service={Service.SWAP}
            onClose={() => {
              setStep(SwapTabStep.SWAP_PROCESS);
              handleRefresh();
            }}
          />
        </StyledTabContentWrapper>
      );
    default:
      return <></>;
  }
}

function SwapTabContent(): JSX.Element {
  return (
    <>
      <StyledVerticalStack gap={5}>
        <ServicesContent />
      </StyledVerticalStack>
    </>
  );
}
