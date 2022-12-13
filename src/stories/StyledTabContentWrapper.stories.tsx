import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconVariant } from './DfxIcon';
import StyledTabContainer from './StyledTabContainer';
import StyledTabContentWrapper from './StyledTabContentWrapper';
import StyledDataTable from './StyledDataTable';
import StyledDataTableRow from './StyledDataTableRow';
import StyledIconButton from './StyledIconButton';
import StyledSpacer from './StyledSpacer';

export default {
  title: 'Composites/StyledTabContentWrapper',
  component: StyledTabContentWrapper,
} as ComponentMeta<typeof StyledTabContentWrapper>;

export const Default: ComponentStory<typeof StyledTabContentWrapper> = () => {
  return (
    <StyledTabContainer
      tabs={[
        {
          title: 'Buy',
          deactivated: false,
          icon: IconVariant.BANK,
          content: (
            <StyledTabContentWrapper
              showBackArrow={true}
              onBackClick={() => {
                console.log('back');
              }}
            >
              <h1>Democontent</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda minima, quae possimus beatae
                quisquam iste vel aspernatur, ab velit, exercitationem nobis atque veritatis vitae expedita dolor magni
                magnam ut?
              </p>
              <StyledSpacer spacing={8} showLine />
              <StyledDataTable heading="Data">
                <StyledDataTableRow label="IBAN">
                  LU11 6060 0020 0000 5040
                  <StyledIconButton
                    icon={IconVariant.COPY}
                    onClick={() => {
                      console.log('copied.');
                    }}
                  />
                </StyledDataTableRow>
                <StyledDataTableRow label="BIC">
                  OLKILUL1
                  <StyledIconButton
                    icon={IconVariant.COPY}
                    onClick={() => {
                      console.log('copied.');
                    }}
                  />
                </StyledDataTableRow>
                <StyledDataTableRow label="Purpose of Payment">
                  OC11-A025-BCF7
                  <StyledIconButton
                    icon={IconVariant.COPY}
                    onClick={() => {
                      console.log('copied.');
                    }}
                  />
                </StyledDataTableRow>
              </StyledDataTable>
            </StyledTabContentWrapper>
          ),
        },
        { title: 'Sell', deactivated: false, icon: IconVariant.WALLET, content: <h2>Tab2 : sell</h2> },
        {
          title: 'Convert',
          deactivated: false,
          flagWord1: 'Coming',
          flagWord2: 'Soon',
          content: <h2>Tab 3: convert</h2>,
        },
        { title: 'Stake', flagWord1: 'Beta', content: <h2>Tab4: Staking</h2> },
      ]}
    ></StyledTabContainer>
  );
};
