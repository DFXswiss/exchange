import copy from 'copy-to-clipboard';

interface ClipboardInterface {
  copy: (text?: string) => void;
}

export function useClipboard(): ClipboardInterface {
  function copyHelper(text?: string): void {
    if (!text) return;
    copy(text);
  }

  return { copy: copyHelper };
}
