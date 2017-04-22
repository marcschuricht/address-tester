import { RawAddress } from './../../../transfer/raw/address.raw';
import { StringValueCannotExceedLengthRule } from '../../rule/cannot-exceed-length.rule';
export class Line1CannotExceed50CharactersRule extends StringValueCannotExceedLengthRule<RawAddress> {

  ErrorMessage = 'The value for line1 is too long.';

  constructor() {
    super(50);
  }

  ValueToValidate(): string {
    return this.Actor.line1;
  }
}
