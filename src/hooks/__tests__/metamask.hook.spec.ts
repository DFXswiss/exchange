import { useMetaMask } from '../metamask.hook';

enum Test {
  NOT_INSTALLED,
  INSTALLED,
}

describe('useMetaMask', () => {
  function setup(testCase: Test) {
    switch (testCase) {
      case Test.INSTALLED:
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        (window as any).ethereum = { isMetaMask: true, on: () => {} };
        break;
      case Test.NOT_INSTALLED:
        (window as any).ethereum = undefined;
        break;
    }
  }

  it('should return is installed, if installed', () => {
    setup(Test.INSTALLED);
    const { isInstalled } = useMetaMask();
    expect(isInstalled).toBeTruthy();
  });

  it('should return is not installed, if not installed', () => {
    setup(Test.NOT_INSTALLED);
    const { isInstalled } = useMetaMask();
    expect(isInstalled).toBeFalsy();
  });
});
