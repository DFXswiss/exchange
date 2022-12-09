import { useState } from 'react';
import { Asset } from '../../api/definitions/asset';
import { Blockchain } from '../../api/definitions/blockchain';
import { IconVariant } from '../../stories/DfxIcon';
import { Protocols } from '../../stories/StyledCoinListItem';
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

export const BuyTabDefinitions = {
  headings: {
    [Blockchain.ETH]: 'Ethereum mainnet · ERC-20 token',
    [Blockchain.BSC]: 'Binance Smart Chain · BEP-20 token',
  },
  protocols: {
    [Blockchain.ETH]: Protocols.ERC_20,
    [Blockchain.BSC]: Protocols.BEP_20,
  },
};

function BuyTabContent(): JSX.Element {
  const [step, setStep] = useState<BuyTabStep>(BuyTabStep.OVERVIEW);
  const [currentAsset, setCurrentAsset] = useState<Asset>();

  switch (step) {
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            setCurrentAsset(asset);
            setStep(BuyTabStep.BUY_PROCESS);
          }}
        />
      );
    case BuyTabStep.BUY_PROCESS:
      return <BuyTabContentProcess onBack={() => setStep(BuyTabStep.OVERVIEW)} asset={currentAsset} />;
  }
}
