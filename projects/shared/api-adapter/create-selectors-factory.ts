import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { SubmittableItem } from './create-initial-state-factory';


export function createSelectorsFactory<TData>() {

  function getSelectors(selectBooks:
    MemoizedSelector<object, SubmittableItem<TData> | undefined, DefaultProjectorFn<SubmittableItem<TData> | undefined>>) {

    const selectItems = createSelector(
      selectBooks,
      state => state?.data
    );

    const selectItemsStatus = createSelector(
      selectBooks,
      state => state?.status
    );

    const selectItemsError = createSelector(
      selectBooks,
      state => state?.error
    );

    return {
      selectItems,
      selectItemsStatus,
      selectItemsError
    };
  }

  return { getSelectors };
}
