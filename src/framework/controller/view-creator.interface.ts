import { Observable } from 'rxjs/Rx';

export interface ViewCreator<T, U> {
  CreateView(param?: U): Observable<T>;
}

