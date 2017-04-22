import { Injectable } from '@angular/core';
import { BaseValidator } from '../base.validator';
import { RawAddress } from './../../transfer/raw/address.raw';
import { Line1CannotExceed50CharactersRule } from './rule/line1-cannot-exceed-50-chars.rule';
import { ValidationRule } from '../rule/cannot-exceed-length.rule';


@Injectable()
export class AddressValidator extends BaseValidator<RawAddress> {
  Rules: ValidationRule<RawAddress>[];

  constructor() {
    super();
    this.Rules.push(new Line1CannotExceed50CharactersRule());
  }

}

