import { StringValueCannotExceedLengthRule } from './cannot-exceed-length.rule';
describe('Cannot exceed length rule', () => {
  it('should be valid when value does not exceeds tested length', () => {
    const rule = new FakeRule('asdf');
    expect(rule.IsValid()).toBeTruthy();
  });

  it('should not be valid when value exceeds tested length', () => {
    const rule = new FakeRule('asdffdsa');
    expect(rule.IsValid()).toBeFalsy();
  });
});

class FakeRule extends StringValueCannotExceedLengthRule {
  ErrorMessage: string;

  constructor(private valueToValidate: string) {
    super(5);
  }
  ValueToValidate(): string {
    return this.valueToValidate;
  }
}
