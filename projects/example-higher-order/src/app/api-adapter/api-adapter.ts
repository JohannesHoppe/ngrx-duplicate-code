import { createActionsFactory } from './create-actions-factory';
import { createInitialStateFactory } from './create-initial-state-factory';
import { createReducerFactory } from './create-reducer-factory';
import { createSelectorsFactory } from './create-selectors-factory';

export { typeSuccess, typeFailure } from './create-actions-factory';
export { Status, SubmittableItem } from './create-initial-state-factory';

export function createApiAdapter<T extends string, TData>(type: T, defaultValue: TData) {

  const state = createInitialStateFactory<TData>(defaultValue);
  const actions = createActionsFactory<T, TData>(type);
  const reducer = createReducerFactory<T, TData>(type, defaultValue);
  const selectors = createSelectorsFactory();

  return {
    ...state,
    ...actions,
    ...reducer,
    ...selectors
  };
}
