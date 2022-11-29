import { useState } from 'react';
import { useAssetContext } from '../api/contexts/asset.context';
import { useUserContext } from '../api/contexts/user.context';
import { useSession } from '../hooks/session.hook';

export function Main() {
  const { user, changeMail } = useUserContext();
  const { assets } = useAssetContext();
  const { isMetaMaskInstalled, address, login } = useSession();

  const [mail, setMail] = useState<string>();

  async function handleSubmit() {
    if (!mail) return;
    await changeMail(mail);
  }

  return (
    <div className="bg-blue-900 flex flex-col items-center w-screen h-screen gap-4">
      <h1 className="text-white text-3xl pt-8">Welcome to our awesome exchange</h1>
      <p className="text-white">{`api url from process is ${process.env.REACT_APP_API_URL}`}</p>
      {isMetaMaskInstalled ? (
        <button className="rounded-full bg-white px-4 py-2 text-blue-900" onClick={login}>
          Connect to metamask
        </button>
      ) : (
        <p className="text-white">Please install MetaMask</p>
      )}
      {address && <p className="text-white">{`Logged in with ${address}`}</p>}
      {user && (
        <>
          <p className="text-white">{`${user.mail} (ref ${user.ref})`}</p>
          <input
            type="text"
            onChange={(e) => setMail(e.target.value)}
            className="text-white focus:outline-none px-4 py-2 rounded-full border border-white bg-blue-900"
          />
          <button className="rounded-full bg-white ml-4 px-4 py-2 text-blue-900" onClick={handleSubmit}>
            Change
          </button>
        </>
      )}
      {assets && (
        <p className="text-white max-w-lg break-words">
          {assets.map((asset) => `${asset.name} (${asset.blockchain})`).join(', ')}
        </p>
      )}
    </div>
  );
}
