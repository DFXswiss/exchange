import * as React from 'react';

interface IDfxYourDataBoxProps {
  heading: string;
  isLoggedIn: boolean;
  hasEmail?: boolean;
}

export default function DfxYourDataBox({ heading, isLoggedIn, hasEmail }: IDfxYourDataBoxProps) {
  return (
    <div>
      <h2 className="text-4xl font-black uppercase text-primary-red">{heading}</h2>

      {isLoggedIn && (
        <div>
          <p>E-Mail-Adress</p>
          {hasEmail ? (
            <p>john.doe@gmail.com</p>
          ) : (
            <button type="button" onClick={() => {}}>
              Add E-Mail Adress
            </button>
          )}
        </div>
      )}
    </div>
  );
}
