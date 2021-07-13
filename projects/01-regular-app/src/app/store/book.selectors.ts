import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooks = createSelector(
  selectBookState,
  (booksState: fromBook.State) => booksState.books
);

export const selectBooksStatus = createSelector(
  selectBookState,
  (booksState: fromBook.State) => booksState.booksStatus
);

export const selectBooksError = createSelector(
  selectBookState,
  (booksState: fromBook.State) => booksState.booksError
);

// second duplication 🤨

export const selectAuthors = createSelector(
  selectBookState,
  authorsState => authorsState.authors
);

export const selectAuthorsStatus = createSelector(
  selectBookState,
  authorsState => authorsState.authorsStatus
);

export const selectAuthorsError = createSelector(
  selectBookState,
  authorsState => authorsState.authorsError
);

// third duplication 😞

export const selectThumbnails = createSelector(
  selectBookState,
  thumbnailsState => thumbnailsState.thumbnails
);

export const selectThumbnailsStatus = createSelector(
  selectBookState,
  thumbnailsState => thumbnailsState.thumbnailsStatus
);

export const selectThumbnailsError = createSelector(
  selectBookState,
  thumbnailsState => thumbnailsState.booksError
);
