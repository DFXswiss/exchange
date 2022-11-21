import { Abc } from './abc';

describe('Test', () => {
  it('should add 2 and 2 correctly', () => {
    expect(Abc.add(2, 2)).toEqual(4);
  });
});
