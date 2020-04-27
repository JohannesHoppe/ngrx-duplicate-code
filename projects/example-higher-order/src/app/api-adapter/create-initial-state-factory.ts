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
  error: HttpErrorResponse;
}

export function createInitialStateFactory<TData>(key: string, initialValueOfT: TData) {

  function getInitialApiState(): { [key: string]: SubmittableItem<TData>} {
    return {
      [key] : {
        data: initialValueOfT,
        status: Status.NotSubmitted,
        error: undefined
      }
    };
  }

  return { getInitialApiState };
}
