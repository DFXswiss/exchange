export enum StyledIconButtonSizes {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface StyledIconButtonProps {
  onClick: () => void;
  size?: StyledIconButtonSizes;
}

const SIZE_MAPS: Record<StyledIconButtonSizes, string> = {
  [StyledIconButtonSizes.BIG]: 'font-bold text-base rounded px-7 py-2.5 ',
  [StyledIconButtonSizes.SMALL]: 'text-sm rounded-md px-3.5 py-0.5 ',
};

export default function StyledIconButton({ onClick, size = StyledIconButtonSizes.BIG }: StyledIconButtonProps) {
  let buttonClasses =
    'inline-block leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ';

  buttonClasses += [SIZE_MAPS[size] ? 'uppercase' : 'normal-case'].join(' ');

  return <button type="button" className={buttonClasses} onClick={onClick}></button>;
}
