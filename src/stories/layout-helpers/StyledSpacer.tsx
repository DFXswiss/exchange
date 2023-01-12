import { convertToRem } from './LayoutFunctions';

export interface StyledSpacerProps {
  showLine?: boolean;
  spacing: number;
}

export default function StyledSpacer({ showLine, spacing }: StyledSpacerProps) {
  const spacerClasses = showLine ? 'border-t border-dfxGray-400' : '';

  const margin = convertToRem(spacing);

  return <div style={{ margin: margin + ' 0' }} className={spacerClasses}></div>;
}
