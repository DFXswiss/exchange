interface StyledNetworkChipProps {
  network: string;
  isActive: boolean;
}

export default function StyledNetworkChip({ network, isActive }: StyledNetworkChipProps): JSX.Element {
  return (
    <div
      className={`flex flex-row flex-grow px-3 gap-1 rounded-full border border-dfxGray-400 ${
        isActive ? 'bg-dfxGray-400' : 'bg-white'
      } items-center justify-center`}
    >
      {isActive && (
        <div className="bg-dfxGreen-100 h-2.5 w-2.5 rounded-full border-0.5 border-black border-opacity-30 -ml-1.5" />
      )}
      <p className="text-dfxBlue-800 text-sm font-normal">{network}</p>
    </div>
  );
}
