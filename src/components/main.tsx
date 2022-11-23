import { useWalletContext } from '../contexts/wallet.context';

export function Main() {
  const { address, login, isInstalled } = useWalletContext();
  return (
    <div className="bg-blue-900 flex flex-col items-center w-screen h-screen gap-4">
      <h1 className="text-white text-3xl pt-8">Welcome to our awesome exchange</h1>
      <p className="text-white">{`api url from process is ${process.env.REACT_APP_API_URL}`}</p>
      {isInstalled ? (
        <button className="rounded-full bg-white px-4 py-2 text-blue-900" onClick={login}>
          Connect to metamask
        </button>
      ) : (
        <p className="text-white">Please install MetaMask</p>
      )}
      {address && <p className="text-white">{`Logged in with ${address}`}</p>}
    </div>
  );
}
