import StyledCoinListItem from './StyledCoinListItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Protocol } from '../hooks/blockchain.hook';
import { Asset } from '../api/definitions/asset';

export default {
  title: 'Building Blocks/StyledCoinListItem',
  component: StyledCoinListItem,
} as ComponentMeta<typeof StyledCoinListItem>;

export const SingleCoinListItem: ComponentStory<typeof StyledCoinListItem> = (args) => {
  return (
    <div className="bg-white p-10 max-w-xl">
      <StyledCoinListItem {...args}></StyledCoinListItem>
    </div>
  );
};
SingleCoinListItem.args = {
  asset: {
    name: 'BNB',
    description: 'BNB Morbi leo risus, porta ac consectetur ac, vestibul',
    chainId: '0x93...23452',
    blockchainExplorerLink: 'http://duckduckgo.com',
    comingSoon: false,
  } as Asset,
  protocol: Protocol.ERC_20,
  popupLabel:
    'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
};
