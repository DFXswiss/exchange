import { useState } from 'react';
import { useAssetContext } from '../api/contexts/asset.context';
import { useUserContext } from '../api/contexts/user.context';
import { useSession } from '../hooks/session.hook';
import DfxLogo from '../stories/DfxLogo';
import DfxTitleSection from '../stories/DfxTitleSection';
import StyledButton from '../stories/StyledButton';

export function Main() {
  const { user, changeMail } = useUserContext();
  const { assets } = useAssetContext();
  const { isMetaMaskInstalled, address, blockchain, login } = useSession();

  const [mail, setMail] = useState<string>();

  async function handleSubmit() {
    if (!mail) return;
    await changeMail(mail);
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen gap-4">
      <div className="pt-8">
        <DfxLogo />
        <DfxTitleSection heading="DFX Multichain" subheading="BUY • SELL • CONVERT • STAKE" />
      </div>
      <p>{`api url from process is ${process.env.REACT_APP_API_URL}`}</p>
      {isMetaMaskInstalled ? (
        <StyledButton label="Connect to metamask" onClick={login} />
      ) : (
        <p>Please install MetaMask</p>
      )}
      {address && <p>{`Logged in with ${address}`}</p>}
      {blockchain && <p>{`Network: ${blockchain}`}</p>}
      {user && (
        <>
          <p>{`${user.mail} (ref ${user.ref})`}</p>
          <input
            type="text"
            onChange={(e) => setMail(e.target.value)}
            className="focus:outline-none px-4 py-2 rounded-full border border-white bg-blue-900 text-dfxBlue-500"
          />
          <StyledButton label="Change" onClick={handleSubmit} />
        </>
      )}
      {assets && (
        <p className="max-w-lg break-words">
          {assets.map((asset) => `${asset.name} (${asset.blockchain})`).join(', ')}
        </p>
      )}
    </div>
  );
}
