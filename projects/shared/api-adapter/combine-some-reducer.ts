import { Action, ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';


// TODO: check if a similar function exists in NgRx!!
export function combineSomeReducer<T, V extends Action = Action>(
  reducers: ActionReducerMap<T, V>, initialState?: Partial<T>): ActionReducer<T, V> {

    const combinedReducer = combineReducers(reducers, initialState);

    // a function that takes an `Action` and a `State`, and returns a `State`.
    return (state: T | undefined, action: V): T => {

      const newState = combinedReducer(state, action);

      // TODO: investigate if we should avoid identical copies here
      return {
        ...state,
        ...newState
      };
    };
}
