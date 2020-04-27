import { createActionsFactory } from './create-actions-factory';
import { createInitialStateFactory } from './create-initial-state-factory';
import { createReducerFactory } from './create-reducer-factory';

export { typeSuccess, typeFailure } from './create-actions-factory';
export { Status, SubmittableItem } from './create-initial-state-factory';

export function createApiAdapter<T extends string, TData>(type: T, key: string, defaultValue: TData) {

  const state = createInitialStateFactory<TData>(key, defaultValue);
  const actions = createActionsFactory<T, TData>(type);
  const reducer = createReducerFactory<T, TData>(type, key, defaultValue);


  return {
    ...state,
    ...actions,
    ...reducer,
  };
}


