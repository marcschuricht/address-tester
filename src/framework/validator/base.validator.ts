import { ForEachCommentCallback } from 'tslint/lib';
import { ValidationRule } from './rule/cannot-exceed-length.rule';
export abstract class BaseValidator<T> {
  abstract Rules: Array<ValidationRule<T>>;
  ValidationErrors: Array<string> = [];
  /**
   *
   */
  constructor() {
    this.Rules = new Array<ValidationRule<T>>();
  }

  Validate(): boolean {
    return this.Rules.map(x => {
      var valid = x.IsValid();
      if (!valid) {
        this.ValidationErrors.push(x.ErrorMessage);
      }
      return valid;
    }).reduce((prev, curr) => {
      return prev && curr;
    });
  };
}
