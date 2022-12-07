import { Asset } from '../../../api/definitions/asset';
import { IconVariant } from '../../../stories/DfxIcon';
import { IconButton } from '../../../stories/StyledIconButton.stories';

interface BuyTabContentProcessProps {
  asset?: Asset;
  onBack: () => void;
}

export function BuyTabContentProcess({ asset, onBack }: BuyTabContentProcessProps): JSX.Element {
  return (
    <div className="flex flex-col gap-8">
      <IconButton icon={IconVariant.BACK} onClick={onBack} />
      <p>
        Just give me {asset?.name} on {asset?.blockchain} for free
      </p>
    </div>
  );
}
