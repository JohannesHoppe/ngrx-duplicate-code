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
  authorsError: HttpErrorResponse| undefined;

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

  on(BookActions.loadBooks,
     BookActions.loadAuthors,
     BookActions.loadThumbnails, (state, { type }) => ({
    ...state,
    ...(type === BookActions.loadBooks.type      ? { booksStatus:      Status.Submitting } : {}),
    ...(type === BookActions.loadAuthors.type    ? { authorsStatus:    Status.Submitting } : {}),
    ...(type === BookActions.loadThumbnails.type ? { thumbnailsStatus: Status.Submitting } : {})
  })),

  on(BookActions.loadBooksSuccess,
     BookActions.loadAuthorsSuccess,
     BookActions.loadThumbnailsSuccess, (state, { type, data }) => ({
    ...state,

    ...(type === BookActions.loadBooksSuccess.type ? {
      books: data as Book[], // unfortunately, we to cast here since data might be Book[] OR string[] 😞
      booksStatus: Status.Successful,
      booksError: undefined
    } : {}),

    // still some kind of second duplication 🤨

    ...(type === BookActions.loadAuthorsSuccess.type ? {
      authors: data as string[], // cast 😞
      authorsStatus: Status.Successful,
      authorsError: undefined
    } : {}),

    // still some kind of third duplication 😞

    ...(type === BookActions.loadThumbnailsSuccess.type ? {
      thumbnails: data as string[], // cast 😞
      thumbnailsStatus: Status.Successful,
      thumbnailsError: undefined
    } : {})
  })),

  on(BookActions.loadBooksFailure,
     BookActions.loadAuthorsFailure,
     BookActions.loadThumbnailsFailure, (state, { type, error }) => ({
    ...state,

    ...(type === BookActions.loadBooksFailure.type ? {
      books: [],
      booksStatus: Status.Failure,
      booksError: error
    } : {}),

    ...(type === BookActions.loadAuthorsFailure.type ? {
      authors: [],
      authorsStatus: Status.Failure,
      authorsError: error
    } : {}),

    ...(type === BookActions.loadThumbnailsFailure.type ? {
      thumbnails: [],
      thumbnailsStatus: Status.Failure,
      thumbnailsError: error
    } : {})
  }))
);

