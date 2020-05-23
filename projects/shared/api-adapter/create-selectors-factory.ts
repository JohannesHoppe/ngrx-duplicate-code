import { createSelector } from '@ngrx/store';

// TODO: typing
export function createSelectorsFactory() {

  function getSelectors(key: string, featureSelector: any) {

    const selectItems = createSelector(
      featureSelector,
      state => state[key].data
    );

    const selectItemsStatus = createSelector(
      featureSelector,
      state => state[key].status
    );

    const selectItemsError = createSelector(
      featureSelector,
      state => state[key].error
    );

    return {
      selectItems,
      selectItemsStatus,
      selectItemsError
    };
  }

  return { getSelectors };
}
