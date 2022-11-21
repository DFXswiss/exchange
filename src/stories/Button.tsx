import * as React from 'react';

interface IButtonProps {
  label: string;
}

export default function Button({ label }: IButtonProps) {
  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-primary-red text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-dfxRedBlue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => {}}
      >
        {label}
      </button>
    </div>
  );
}
