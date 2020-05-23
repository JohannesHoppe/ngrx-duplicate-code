import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { createActionsFactory } from './create-actions-factory';


export function createEffectFactory<T extends string, TData>(type: T) {

  function getEffect(actions$: Actions, getData: () => Observable<TData>) {

    const { getActions } = createActionsFactory<T, TData>(type);
    const { load, loadSuccess, loadFailure } = getActions();

    const effect$ = createEffect(() => {
      return actions$.pipe(
        ofType(load),
        concatMap(() => getData().pipe(
            map((data) => loadSuccess({ data })),
            catchError(error => of(loadFailure({ error })))
        ))
      );
    });

    return effect$;
  }

  return { getEffect };
}
