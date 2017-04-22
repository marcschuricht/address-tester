export interface ValidationRule<T> {

  Actor: T;
  ErrorMessage: string;
  IsValid(): boolean;
  ValueToValidate(): any;

}

export abstract class StringValueCannotExceedLengthRule<T> implements ValidationRule<T> {
  public Actor: T;
  abstract ErrorMessage: string;

  constructor(private length: number) {
  }

  abstract ValueToValidate(): string;

  IsValid(): boolean {
    if (this.ValueToValidate().length > this.length) {
      return false;
    }
    return true;
  }
}
