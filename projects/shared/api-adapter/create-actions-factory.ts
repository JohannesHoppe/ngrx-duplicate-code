import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';


export const SUFFIX_SUCCESS = 'Success';
export const SUFFIX_FAILURE = 'Failure';


export function addSuffix<T extends string, TSuffix extends string>(type: T, suffix: TSuffix) {
  return type + ' ' + suffix as `${T} ${TSuffix}`
}

export function createActionsFactory<T extends string, TData>(type: T) {

  function getActions() {

    const load = createAction(type);

    const loadSuccess = createAction(
      addSuffix(type, SUFFIX_SUCCESS),
      props<{ data: TData }>()
    );

    const loadFailure = createAction(
      addSuffix(type, SUFFIX_FAILURE),
      props<{ error: HttpErrorResponse }>()
    );

    return {
      load,
      loadSuccess,
      loadFailure
    };
  }

  return { getActions };
}
