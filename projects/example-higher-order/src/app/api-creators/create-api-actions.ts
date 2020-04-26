import { props, createAction } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const SUFFIX_SUCCESS = ' Success';
export const SUFFIX_FAILURE = ' Failure';

export function typeSuccess<T extends string>(type: T) {
  return type + SUFFIX_SUCCESS;
}

export function typeFailure<T extends string>(type: T) {
  return type + SUFFIX_FAILURE;
}

export function createApiAction<T extends string, TData>(type: T) {

  const load = createAction(type);

  const loadSuccess = createAction(
    typeSuccess(type),
    props<{ data: TData }>()
  );

  const loadFailure = createAction(
    typeFailure(type),
    props<{ error: HttpErrorResponse }>()
  );

  return {
    load,
    loadSuccess,
    loadFailure
  };
}


