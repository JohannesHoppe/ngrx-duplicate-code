import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createChildSelectors } from 'ngrx-child-selectors';

import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';
import * as fromBook from './book.reducer';


export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const {
  selectBooks,
  selectAuthors,
  selectThumbnails
} = createChildSelectors(selectBookState, fromBook.initialState);

export const booksSelectors = booksApiAdapter.getSelectors(selectBooks);
export const authorsSelectors = authorsApiAdapter.getSelectors(selectAuthors);
export const thumbnailsSelectors = thumbnailsApiAdapter.getSelectors(selectThumbnails);


// counter: regular selector for demonstration
export const selectCounter = createSelector(
  selectBookState,
  state => state.counter
);
