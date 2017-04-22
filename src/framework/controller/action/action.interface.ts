import { ActionResultArgs } from './../../common/actionResultArgs';
import { Observable } from 'rxjs/Rx';
export interface Action<T> {
  Execute(raw: T): Observable<ActionResultArgs<T>>;
}
