import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

import { booksApiAdapter, authorsApiAdapter, thumbnailsApiAdapter } from './book.adapter';


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
