import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { Book } from '../../../../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

export const bookFeatureKey = 'book';

export enum Status {
  NotSubmitted,
  Submitting,
  Successful,
  Failure
}

export interface State {
  books: Book[];
  booksStatus: Status;
  booksError: HttpErrorResponse | undefined;

  authors: string[];
  authorsStatus: Status;
  authorsError: HttpErrorResponse | undefined;

  thumbnails: string[];
  thumbnailsStatus: Status;
  thumbnailsError: HttpErrorResponse | undefined;
}

export const initialState: State = {
  books: [],
  booksStatus: Status.NotSubmitted,
  booksError: undefined,

  authors: [],
  authorsStatus: Status.NotSubmitted,
  authorsError: undefined,

  thumbnails: [],
  thumbnailsStatus: Status.NotSubmitted,
  thumbnailsError: undefined,
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    booksStatus: Status.Submitting,
  })),

  on(BookActions.loadBooksSuccess, (state, { data: books }) => ({
    ...state,
    books,
    booksStatus: Status.Successful,
    booksError: undefined
  })),

  on(BookActions.loadBooksFailure, (state, { error: booksError }) => ({
    ...state,
    books: [],
    booksStatus: Status.Failure,
    booksError
  })),

  // second duplication 🤨

  on(BookActions.loadAuthors, state => ({
    ...state,
    authorsStatus: Status.Submitting,
  })),

  on(BookActions.loadAuthorsSuccess, (state, { data: authors }) => ({
    ...state,
    authors,
    authorsStatus: Status.Successful,
    authorsError: undefined
  })),

  on(BookActions.loadAuthorsFailure, (state, { error: authorsError }) => ({
    ...state,
    authors: [],
    authorsStatus: Status.Failure,
    authorsError
  })),

  // third duplication 😞

  on(BookActions.loadThumbnails, state => ({
    ...state,
    thumbnailsStatus: Status.Submitting,
  })),

  on(BookActions.loadThumbnailsSuccess, (state, { data: thumbnails }) => ({
    ...state,
    thumbnails,
    thumbnailsStatus: Status.Successful,
    thumbnailsError: undefined
  })),

  on(BookActions.loadThumbnailsFailure, (state, { error: thumbnailsError }) => ({
    ...state,
    thumbnails: [],
    thumbnailsStatus: Status.Failure,
    thumbnailsError
  }))
);

