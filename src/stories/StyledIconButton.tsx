import DfxIcon, { IconVariant, IconColor, IconSize } from './DfxIcon';

export interface StyledIconButtonProps {
  onClick: () => void;
  size?: IconSize;
  icon: IconVariant;
  color?: IconColor;
  inline?: boolean;
}

export default function StyledIconButton({
  onClick,
  size = IconSize.MD,
  icon,
  inline = false,
  color = IconColor.RED,
}: StyledIconButtonProps) {
  let buttonClass = 'inline-block h-full align-top';
  inline ? (buttonClass += ' px-2 pt-0.5') : null;
  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      <DfxIcon icon={icon} color={color} size={size} />
    </button>
  );
}
