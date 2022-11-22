import * as React from 'react';
import classNames from 'classnames';

type StyledButtonSizes = 'BIG' | 'SMALL';
type StyledButtonWidths = 'MIN' | 'MD' | 'FULL';
type StyledButtonColors = 'RED' | 'GRAY' | 'OUTLINE' | 'WHITE';

export interface IStyledButtonProps {
  label: string;
  size: StyledButtonSizes;
  width: StyledButtonWidths;
  color: StyledButtonColors;
  noCaps: boolean;
}

export default function StyledButton({ label, size, width, color, noCaps }: IStyledButtonProps) {
  let buttonClasses = classNames('foo', { bar: noCaps });

  return (
    <div>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-primary-red text-white font-bold text-base leading-tight uppercase rounded shadow-md hover:bg-dfxRed-150 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {}}
        >
          {label}
        </button>
      </div>
      <p className="text-sm text-center"></p>
    </div>
  );
}
