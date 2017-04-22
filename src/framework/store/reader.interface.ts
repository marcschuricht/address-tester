import { Observable } from 'rxjs/Rx';

export interface Reader<TParam, TDomain> {
  Get(id?: TParam): Observable<TDomain>;
}

export interface Creater<TDomain, TResult> {
  Post(item: TDomain): Observable<TResult>;
}

export interface Deleter<TDomain, TResult> {
  Delete(item: TDomain): Observable<TResult>;
}

export interface Updater<TDomain, TResult> {
  Put(TDomain): Observable<TResult>;
}
