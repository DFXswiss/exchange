import React, { PropsWithChildren } from 'react';
import StyledButton from './StyledButton';

export enum StyledModalColors {
  GRAY = 'GRAY',
  WHITE = 'WHITE',
  DFXGRADIENT = 'DFXGRADIENT',
}

interface StyledModalProps extends PropsWithChildren {
  setShowModalFunc: (showModal: boolean) => any;
  closeWithX?: boolean;
  heading?: string;
}

export default function StyledModal({ setShowModalFunc, closeWithX, heading }: StyledModalProps) {
  function setShowModal(modalState: boolean) {
    setShowModalFunc(modalState);
  }

  return (
    <>
      <div className="justify-center text-dfxBlue-800 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{heading}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0  opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their
                perception of themselves! They're slowed down by their perception of themselves. If you're taught you
                can’t do anything, you won’t do anything. I was taught I could do everything.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <StyledButton label="Close Modal" onClick={() => setShowModal(false)}></StyledButton>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
