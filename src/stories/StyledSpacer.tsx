export interface StyledSpacerProps {
  showLine?: boolean;
  spacing: number;
}

export default function StyledSpacer({ showLine, spacing }: StyledSpacerProps) {
  let spacerClasses = '';

  showLine ? (spacerClasses = ' border-t border-dfxGray-400') : null;

  const margin = 4 * spacing;

  return <div style={{ margin: margin + 'px 0' }} className={spacerClasses}></div>;
}
