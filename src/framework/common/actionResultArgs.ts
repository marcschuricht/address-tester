export enum ActionResult {
  Success,
  Error,
  ValidationError
}

export class ActionResultArgs<R> {
  Error: string;
  ValidationErrors: Array<string>;
  Result: ActionResult;
  OriginalValue: R;

  public static Success<R>(original: R): ActionResultArgs<R> {
    const result = new ActionResultArgs<R>();
    result.Result = ActionResult.Success;
    result.Error = null;
    result.ValidationErrors = [];
    result.OriginalValue = original;
    return result;
  }

  public static ValidationFailure<R>(validationErrors: Array<string>, original: R): ActionResultArgs<R> {
    const result = new ActionResultArgs<R>();
    result.Result = ActionResult.ValidationError;
    result.Error = null;
    result.ValidationErrors = validationErrors;
    result.OriginalValue = original;
    return result;
  }

  public static Error<R>(ex: any): ActionResultArgs<R> {
    const result = new ActionResultArgs<R>();
    result.Result = ActionResult.Error;
    result.Error = ex.toString();
    result.ValidationErrors = null;
    result.OriginalValue = null;
    return result;
  }
  /**
   *
   */
  private constructor() {

  }

}
