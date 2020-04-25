import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';
import * as BookActions from './book.actions';


export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectItems = createSelector(
  selectBookState,
  (booksState: fromBook.State, props: { kind: BookActions.ActionKinds }) => booksState[props.kind].data
);

export const selectItemsStatus = createSelector(
  selectBookState,
  (booksState: fromBook.State, props: { kind: BookActions.ActionKinds }) => booksState[props.kind].status
);

export const selectItemsError = createSelector(
  selectBookState,
  (booksState: fromBook.State, props: { kind: BookActions.ActionKinds }) => booksState[props.kind].error
);
