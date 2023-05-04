import { SpinnerCircular } from 'spinners-react';

export interface StyledLoadingSpinnerProps {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
}

export enum SpinnerVariant {
  DARK_MODE = 'DARK_MODE',
  LIGHT_MODE = 'LIGHT_MODE',
  PALE = 'PALE',
}

export enum SpinnerSize {
  SM = 'SMALL',
  MD = 'MEDIUM',
  LG = 'LARGE',
}

const SIZE_MAPS: Record<SpinnerSize, number> = {
  [SpinnerSize.SM]: 10,
  [SpinnerSize.MD]: 20,
  [SpinnerSize.LG]: 30,
};

const THICKNESS_MAPS: Record<SpinnerSize, number> = {
  [SpinnerSize.SM]: 350,
  [SpinnerSize.MD]: 250,
  [SpinnerSize.LG]: 200,
};

type VariantProps = {
  primaryColor: string;
  secondaryColor: string;
};

const VARIANT_MAPS: Record<SpinnerVariant, VariantProps> = {
  [SpinnerVariant.DARK_MODE]: { primaryColor: '#F5516C', secondaryColor: 'rgba(255,255,255,0.2)' },
  [SpinnerVariant.LIGHT_MODE]: { primaryColor: '#F5516C', secondaryColor: 'rgba(7,36,64,0.2)' },
  [SpinnerVariant.PALE]: { primaryColor: '#ffffff', secondaryColor: 'rgba(255,255,255,0.2)' },
};

export default function StyledLoadingSpinner({
  variant = SpinnerVariant.DARK_MODE,
  size = SpinnerSize.MD,
}: StyledLoadingSpinnerProps) {
  return (
    <SpinnerCircular
      size={SIZE_MAPS[size]}
      thickness={THICKNESS_MAPS[size]}
      speed={105}
      color={VARIANT_MAPS[variant].primaryColor}
      secondaryColor={VARIANT_MAPS[variant].secondaryColor}
    />
  );
}
