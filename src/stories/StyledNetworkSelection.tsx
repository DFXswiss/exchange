import StyledNetworkChip from './StyledNetworkChip';

interface StyledNetworkSelectionProps {
  networks: { network: string; isActive: boolean }[];
  onNetworkChange: (network: string) => void;
}

export default function StyledNetworkSelection({
  networks,
  onNetworkChange,
}: StyledNetworkSelectionProps): JSX.Element {
  return (
    <div className="flex flex-row gap-4 pb-5 border-b border-dfxGray-400">
      {networks.map((element) => (
        <button key={element.network} onClick={() => onNetworkChange(element.network)}>
          <StyledNetworkChip {...element} />
        </button>
      ))}
    </div>
  );
}
