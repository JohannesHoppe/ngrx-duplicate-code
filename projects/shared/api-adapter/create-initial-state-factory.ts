import { HttpErrorResponse } from '@angular/common/http';

import { Status } from '../status';
export { Status } from '../status';


export interface SubmittableItem<TData> {
  data: TData;
  status: Status;
  error: HttpErrorResponse | undefined;
}

export function createInitialStateFactory<TData>(initialValueOfT: TData) {

  function getInitialState(): SubmittableItem<TData> {
    return {
      data: initialValueOfT,
      status: Status.NotSubmitted,
      error: undefined
    };
  }

  return { getInitialState };
}
