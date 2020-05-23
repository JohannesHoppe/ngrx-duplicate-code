import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';
import * as fromBook from './book.reducer';


export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const booksSelectors = booksApiAdapter.getSelectors('books', selectBookState);
export const authorsSelectors = authorsApiAdapter.getSelectors('authors', selectBookState);
export const thumbnailsSelectors = thumbnailsApiAdapter.getSelectors('thumbnails', selectBookState);


// counter: regular selector for demonstration

export const selectCounter = createSelector(
  selectBookState,
  state => state.counter
);
