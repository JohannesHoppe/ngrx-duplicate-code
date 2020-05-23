import { createReducer, on } from '@ngrx/store';

import { createActionsFactory } from './create-actions-factory';
import { createInitialStateFactory, Status } from './create-initial-state-factory';


export function createReducerFactory<T extends string, TData>(type: T, defaultValue: TData) {

  function getReducer() {

    const { getInitialState } = createInitialStateFactory<TData>(defaultValue);
    const { getActions } = createActionsFactory<T, TData>(type);

    const { load, loadSuccess, loadFailure } = getActions();

    const reducer = createReducer(
      getInitialState(),

      on(load, (state) => ({
        ...state,
          status: Status.Submitting
      })),

      on(loadSuccess, (state, { data }) => ({
        ...state,
        data,
        status: Status.Successful,
        error: undefined
      })),

      on(loadFailure, (state, { error }) => ({
        ...state,
        data: defaultValue,
        status: Status.Failure,
        error
      }))
    );

    return reducer;
  }

  return { getReducer };
}
