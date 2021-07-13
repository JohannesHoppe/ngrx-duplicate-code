import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { Status } from 'projects/shared/status';

import { Book } from '../../../../shared/book';
import {
  loadAuthors,
  loadAuthorsFailure,
  loadAuthorsSuccess,
  loadBooks,
  loadBooksFailure,
  loadBooksSuccess,
  loadThumbnails,
  loadThumbnailsFailure,
  loadThumbnailsSuccess,
} from './book.actions';


export const bookFeatureKey = 'book';

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

  on(loadBooks, state => ({
    ...state,
    booksStatus: Status.Submitting,
  })),

  on(loadBooksSuccess, (state, { data: books }) => ({
    ...state,
    books,
    booksStatus: Status.Successful,
    booksError: undefined
  })),

  on(loadBooksFailure, (state, { error: booksError }) => ({
    ...state,
    books: [],
    booksStatus: Status.Failure,
    booksError
  })),

  // second duplication 🤨

  on(loadAuthors, state => ({
    ...state,
    authorsStatus: Status.Submitting,
  })),

  on(loadAuthorsSuccess, (state, { data: authors }) => ({
    ...state,
    authors,
    authorsStatus: Status.Successful,
    authorsError: undefined
  })),

  on(loadAuthorsFailure, (state, { error: authorsError }) => ({
    ...state,
    authors: [],
    authorsStatus: Status.Failure,
    authorsError
  })),

  // third duplication 😞

  on(loadThumbnails, state => ({
    ...state,
    thumbnailsStatus: Status.Submitting,
  })),

  on(loadThumbnailsSuccess, (state, { data: thumbnails }) => ({
    ...state,
    thumbnails,
    thumbnailsStatus: Status.Successful,
    thumbnailsError: undefined
  })),

  on(loadThumbnailsFailure, (state, { error: thumbnailsError }) => ({
    ...state,
    thumbnails: [],
    thumbnailsStatus: Status.Failure,
    thumbnailsError
  }))
);

