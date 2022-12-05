import { IconContext, IconType } from 'react-icons';
import {
  MdContentCopy,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdUnfoldLess,
  MdUnfoldMore,
  MdExpandLess,
  MdExpandMore,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import React, { ReactElement } from 'react';

interface DfxIconProps {
  icon: IconVariant;
  color: IconColors;
}

export enum IconColors {
  RED = 'RED',
  BLUE = 'BLUE',
  LIGHTBLUE = 'LIGHTBLUE',
  GRAY = 'GRAY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

const COLOR_MAPS: Record<IconColors, string> = {
  [IconColors.RED]: '#F5516C',
  [IconColors.BLUE]: '#072440',
  [IconColors.LIGHTBLUE]: '#5A81BB',
  [IconColors.GRAY]: '#D6DBE2',
  [IconColors.WHITE]: '#ffffff',
  [IconColors.BLACK]: '#000000',
};

export enum IconVariant {
  COPY = 'COPY',
  BACK = 'BACK',
  FORWARD = 'FORWARD',
  UNFOLDLESS = 'UNFOLDLESS',
  UNFOLDMORE = 'UNFOLDMORE',
  EXPANDLESS = 'EXPANDLESS',
  EXPANDMORE = 'EXPANDMORE',
  CHEVRIGHT = 'CHEVRIGHT',
  CHEVLEFT = 'CHEVLEFT',
}

const VARIANT_MAPS: Record<IconVariant, ReactElement<IconType>> = {
  [IconVariant.COPY]: <MdContentCopy />,
  [IconVariant.BACK]: <MdArrowBackIos />,
  [IconVariant.FORWARD]: <MdArrowForwardIos />,
  [IconVariant.UNFOLDLESS]: <MdUnfoldLess />,
  [IconVariant.UNFOLDMORE]: <MdUnfoldMore />,
  [IconVariant.EXPANDLESS]: <MdExpandLess />,
  [IconVariant.EXPANDMORE]: <MdExpandMore />,
  [IconVariant.CHEVLEFT]: <MdChevronLeft />,
  [IconVariant.CHEVRIGHT]: <MdChevronRight />,
};

export default function DfxIcon({ icon, color = IconColors.RED }: DfxIconProps) {
  return (
    <IconContext.Provider value={{ color: COLOR_MAPS[color] }}>
      <div>{VARIANT_MAPS[icon]}</div>
    </IconContext.Provider>
  );
}
