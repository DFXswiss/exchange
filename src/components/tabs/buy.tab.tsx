import { useState } from 'react';
import { Asset } from '../../api/definitions/asset';
import { Blockchain } from '../../api/definitions/blockchain';
import { useSessionContext } from '../../contexts/session.context';
import { IconVariant } from '../../stories/DfxIcon';
import { Protocol } from '../../stories/StyledCoinListItem';
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
    [Blockchain.ETH]: Protocol.ERC_20,
    [Blockchain.BSC]: Protocol.BEP_20,
  },
};

function BuyTabContent(): JSX.Element {
  const [step, setStep] = useState<BuyTabStep>(BuyTabStep.OVERVIEW);
  const [currentAsset, setCurrentAsset] = useState<Asset>();
  const { isLoggedIn, login } = useSessionContext();

  switch (step) {
    case BuyTabStep.OVERVIEW:
      return (
        <BuyTabContentOverview
          onAssetClicked={(asset) => {
            if (isLoggedIn) {
              setCurrentAsset(asset);
              setStep(BuyTabStep.BUY_PROCESS);
            } else {
              login();
            }
          }}
        />
      );
    case BuyTabStep.BUY_PROCESS:
      return <BuyTabContentProcess onBack={() => setStep(BuyTabStep.OVERVIEW)} asset={currentAsset} />;
  }
}
