import { useBlockchain } from '../../hooks/blockchain.hook';
import { useEffect, useMemo, useState } from 'react';

import {
  IconVariant,
  StyledBalanceSelection,
  StyledButton,
  StyledHorizontalStack,
  StyledNetworkSelection,
  StyledTabContentWrapper,
  StyledTabProps,
  StyledVerticalStack,
} from '@dfx.swiss/react-components';
import { Asset, AssetType, Blockchain, useAssetContext, useAuthContext, useSessionContext } from '@dfx.swiss/react';
import { DfxServices, Service } from '@dfx.swiss/services-react';
import BigNumber from 'bignumber.js';

enum SellTabStep {
  OVERVIEW,
  LOGIN,
  SELL_PROCESS,
}

export function useSellTab(): StyledTabProps {
  return {
    title: 'Sell',
    icon: IconVariant.SELL,
    deactivated: false,
    content: <SellTabContent />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onActivate: () => { },
  };
}

interface ServicesContentProps {
  selectedAsset?: Asset;
}

function ServicesContent({ selectedAsset }: ServicesContentProps): JSX.Element {
  const [step, setStep] = useState<SellTabStep>();
  const { authenticationToken } = useAuthContext();
  const { sync } = useSessionContext();

  useEffect(() => {
    if (authenticationToken) {
      if (step !== SellTabStep.SELL_PROCESS) setStep(SellTabStep.SELL_PROCESS);
    } else {
      if (step !== SellTabStep.OVERVIEW) setStep(SellTabStep.OVERVIEW);
    }
  }, [authenticationToken]);

  switch (step) {
    case SellTabStep.OVERVIEW:
      return (
        <StyledTabContentWrapper leftBorder>
          <StyledVerticalStack gap={4} marginY={20} center>
            <StyledButton label="Connect Wallet" onClick={() => setStep(SellTabStep.LOGIN)} />
          </StyledVerticalStack>
        </StyledTabContentWrapper>
      );
    case SellTabStep.LOGIN:
      if (!authenticationToken) {
        return (
          <StyledTabContentWrapper
            showBackArrow
            onBackClick={() => setStep(SellTabStep.OVERVIEW)}
          >
            <DfxServices
              headless="true"
              service={Service.CONNECT}
              blockchain={Blockchain.ETHEREUM}
              onClose={sync}
            />
          </StyledTabContentWrapper>
        );
      }
      return <></>;
    case SellTabStep.SELL_PROCESS:
      return (
        <StyledTabContentWrapper>
          <StyledVerticalStack gap={4} marginY={12} center>
            <DfxServices
              key={selectedAsset?.uniqueName}
              headless="true"
              borderless="true"
              service={Service.SELL}
              assets={selectedAsset?.uniqueName}
              blockchain={selectedAsset?.blockchain}
              assetIn={selectedAsset?.uniqueName}
            />
          </StyledVerticalStack>
        </StyledTabContentWrapper>
      );
    default:
      return <></>;
  }
}

function SellTabContent(): JSX.Element {
  const { availableBlockchains } = useSessionContext();
  const { assets } = useAssetContext();
  const { toString, toProtocol } = useBlockchain();
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [blockchain, setBlockchain] = useState<Blockchain>(Blockchain.ETHEREUM);

  const sellableAssets = useMemo(
    () => blockchain && assets.get(blockchain)?.filter((asset) => asset.sellable),
    [blockchain, assets],
  );

  useEffect(() => {
    if (!sellableAssets) return;
    if (!selectedAsset || (selectedAsset && selectedAsset.blockchain !== blockchain)) {
      setSelectedAsset(sellableAssets[0]);
    }
  }, [blockchain, assets]);

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
        <StyledHorizontalStack gap={5}>
          <StyledBalanceSelection
            balances={
              blockchain
                ? sellableAssets?.map((value) => ({
                  asset: value,
                  isToken: value.type === AssetType.TOKEN,
                  protocol: toProtocol(blockchain),
                  isSelected: value.id === selectedAsset?.id,
                  balance: new BigNumber(0),
                })) ?? []
                : []
            }
            onSelectionChanged={(value) =>
              setSelectedAsset(sellableAssets?.find((asset) => asset.id === value.id))
            }
          />
          <ServicesContent selectedAsset={selectedAsset} />
        </StyledHorizontalStack>
      </StyledVerticalStack>
    </>
  );
}
