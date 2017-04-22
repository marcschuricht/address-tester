import { RawAddress } from './../../../transfer/raw/address.raw';
import { Line1CannotExceed50CharactersRule } from './line1-cannot-exceed-50-chars.rule';

describe('Line 1 cannot exceed 50 Char rule', () => {
  const dummy: RawAddress = new RawAddress();
  const rule = new Line1CannotExceed50CharactersRule();
  rule.Actor = dummy;
  beforeEach(() => {
    dummy.line1 = 'something great';
  });

  it('should have the correct error message', () => {
    expect(rule.ErrorMessage).toBe('The value for line1 is too long.');
  });

  it('should have validate the correct value', () => {
    expect(rule.ValueToValidate()).toBe('something great');
  });
});
