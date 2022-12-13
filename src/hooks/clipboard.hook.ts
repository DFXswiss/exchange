interface ClipboardInterface {
  copy: (text?: string) => Promise<void>;
}

export function useClipboard(): ClipboardInterface {
  async function copy(text?: string): Promise<void> {
    console.log('TODO copy', text);
  }
  return { copy };
}
