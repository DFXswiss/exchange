import DfxIcon, { IconVariant, IconColor, IconSize } from './DfxIcon';
import StyledLoadingSpinner, { SpinnerSize, SpinnerVariant } from './StyledLoadingSpinner';

export interface StyledIconButtonProps {
  onClick: () => void;
  size?: IconSize;
  icon: IconVariant;
  color?: IconColor;
  inline?: boolean;
  isLoading?: boolean;
}

export default function StyledIconButton({
  onClick,
  size = IconSize.MD,
  icon,
  inline = false,
  color = IconColor.RED,
  isLoading = false,
}: StyledIconButtonProps) {
  let buttonClass = 'inline-block flex h-full align-top hover:scale-110 transition ease-in-out delay-100';
  inline ? (buttonClass += ' px-2 pt-0.5') : null;
  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      <DfxIcon icon={icon} color={color} size={size} />
      {isLoading && (
        <div className="place-self-center">
          <StyledLoadingSpinner variant={SpinnerVariant.LIGHT_MODE} size={SpinnerSize.SM} />
        </div>
      )}
    </button>
  );
}
