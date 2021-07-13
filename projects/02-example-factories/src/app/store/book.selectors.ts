import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';
import * as fromBook from './book.reducer';


export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);

export const selectAuthors = createSelector(
  selectBookState,
  state => state.authors
);

export const selectThumbnails = createSelector(
  selectBookState,
  state => state.thumbnails
);

export const booksSelectors = booksApiAdapter.getSelectors(selectBooks);
export const authorsSelectors = authorsApiAdapter.getSelectors(selectAuthors);
export const thumbnailsSelectors = thumbnailsApiAdapter.getSelectors(selectThumbnails);


// counter: regular selector for demonstration
export const selectCounter = createSelector(
  selectBookState,
  state => state.counter
);
