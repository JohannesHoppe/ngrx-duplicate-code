import { createReducer, on } from '@ngrx/store';
import { createInitialStateFactory, Status } from './create-initial-state-factory';
import { createActionsFactory } from './create-actions-factory';


export function createReducerFactory<T extends string, TData>(type: T, key: string, defaultValue: TData) {

  function getReducer() {

    const { getInitialApiState } = createInitialStateFactory<TData>(key, defaultValue);
    const { getApiActions } = createActionsFactory<T, TData>(type);

    const { load, loadSuccess, loadFailure } = getApiActions();

    const reducer = createReducer(
      getInitialApiState(),

      on(load, (state) => ({
        ...state,
        [key]: {
          ...state[key],
          status: Status.Submitting
        }
      })),

      on(loadSuccess, (state, { data }) => ({
        ...state,
        [key]: {
          ...state[key],
          data,
          status: Status.Successful,
          error: undefined
        }
      })),

      on(loadFailure, (state, { error }) => ({
        ...state,
        [key]: {
          ...state[key],
          data: [],
          status: Status.Failure,
          error
        }
      }))
    );

    return reducer;
  }

  return { getReducer };
}
