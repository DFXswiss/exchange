import { useAssetContext } from '../api/contexts/asset.context';
import DfxLogo from '../stories/DfxLogo';
import DfxTitleSection from '../stories/DfxTitleSection';
import { Connect } from './connect';
import { UserBox } from './user-box';
import { WalletBox } from './wallet-box';

export function Main(): JSX.Element {
  const { assets } = useAssetContext();

  return (
    <div className="text-center p-2 h-screen">
      <div className="max-w-6xl text-left mx-auto ">
        <div className="flex justify-between">
          <DfxLogo />
          <Connect />
        </div>
        <div className="md:flex justify-between mt-6">
          <div className="basis-3/5 max-w-[50%] px-6 mx-auto md:mx-0">
            <DfxTitleSection heading="DFX Multichain" subheading="Buy • Sell • Convert • Stake" />
          </div>
          <aside className="basis-2/5 shrink-0 md:min-w-[470px] lg:min-w-[512px] mx-auto md:mx-0">
            <WalletBox />
            <UserBox />
          </aside>
        </div>
        <div className="bg-white w-full h-96 rounded-lg text-black">
          <h1>Buy</h1>
          <p className="break-words">{assets.map((asset) => `${asset.name} (${asset.blockchain})`).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
