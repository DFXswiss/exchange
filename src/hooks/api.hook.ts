export function useApi() {
  async function getSignMessage(): Promise<string> {
    return 'message_to_sign';
  }

  return { getSignMessage };
}
