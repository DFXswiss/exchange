import { useEffect, useState } from 'react';
import { IconVariant, StyledButton, StyledNetworkSelection, StyledTabContentWrapper, StyledTabProps, StyledVerticalStack } from '@dfx.swiss/react-components';
import { Blockchain, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { DfxServices, Service } from '@dfx.swiss/services-react';
import { useBlockchain } from '../../hooks/blockchain.hook';

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
    onActivate: () => { },
  };
}

function ServicesContent({ selectedBlockchain }: { selectedBlockchain: Blockchain }): JSX.Element {
  const [step, setStep] = useState<SwapTabStep>();
  const { authenticationToken } = useAuthContext();
  const { sync } = useSessionContext();

  useEffect(() => {
    if (authenticationToken) {
      if (step !== SwapTabStep.SWAP_PROCESS) setStep(SwapTabStep.SWAP_PROCESS);
    } else {
      if (step !== SwapTabStep.OVERVIEW) setStep(SwapTabStep.OVERVIEW);
    }
  }, [authenticationToken]);

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
      if (!authenticationToken) {
        return (
          <StyledTabContentWrapper
            showBackArrow
            onBackClick={() => setStep(SwapTabStep.OVERVIEW)}
          >
            <DfxServices
              headless="true"
              service={Service.CONNECT}
              blockchain={selectedBlockchain}
              onClose={sync}
            />
          </StyledTabContentWrapper>
        );
      }
      return <></>;
    case SwapTabStep.SWAP_PROCESS:
      return (
        <StyledTabContentWrapper
          className="max-w-none"
        >
          <DfxServices
            key={selectedBlockchain}
            headless="true"
            borderless="true"
            service={Service.SWAP}
            blockchain={selectedBlockchain}
            session={authenticationToken}
            onClose={() => setStep(SwapTabStep.OVERVIEW)}
          />
        </StyledTabContentWrapper>
      );
    default:
      return <></>;
  }
}

function SwapTabContent(): JSX.Element {
  const { availableBlockchains } = useSessionContext();
  const { toString } = useBlockchain();
  const [blockchain, setBlockchain] = useState<Blockchain>(Blockchain.ETHEREUM);

  return (
    <>
      <StyledVerticalStack gap={5}>
        <StyledNetworkSelection
          networks={
            availableBlockchains
              ?.filter((b) => toString(b))
              .map((b) => ({ network: toString(b), isActive: b === blockchain })) ?? []
          }
          onNetworkChange={(network) => setBlockchain(availableBlockchains?.find((b) => toString(b) === network) ?? Blockchain.ETHEREUM)}
        />
        <ServicesContent selectedBlockchain={blockchain} />
      </StyledVerticalStack>
    </>
  );
}

