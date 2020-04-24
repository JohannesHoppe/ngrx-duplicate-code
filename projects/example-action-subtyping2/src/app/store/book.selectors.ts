import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooks = createSelector(
  selectBookState,
  (booksState, props) => booksState.books
);

export const selectBooksStatus = createSelector(
  selectBookState,
  (booksState, props) => booksState.booksStatus
);

export const selectBooksError = createSelector(
  selectBookState,
  (booksState, props) => booksState.booksError
);
