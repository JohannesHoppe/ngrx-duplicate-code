import { HttpErrorResponse } from '@angular/common/http';


export enum Status {
  NotSubmitted,
  Submitting,
  Successful,
  Failure
}

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
