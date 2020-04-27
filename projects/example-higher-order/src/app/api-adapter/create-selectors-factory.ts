import { createAction, createSelector, MemoizedSelector } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

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
