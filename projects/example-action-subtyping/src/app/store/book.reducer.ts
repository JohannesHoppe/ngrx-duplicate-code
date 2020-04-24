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

  on(BookActions.loadItems, (state, { kind }) => ({
    ...state,
    ...(kind === 'books' ? { booksStatus: Status.Submitting } : {}),
    ...(kind === 'authors' ? { authorsStatus: Status.Submitting } : {}),
    ...(kind === 'thumbnails' ? { thumbnailsStatus: Status.Submitting } : {})
  })),

  on(BookActions.loadItemsSuccess, (state, { kind, data }) => ({
    ...state,

    ...(kind === 'books' ? {
      books: data,
      booksStatus: Status.Successful,
      booksError: undefined
    } : {}),

    ...(kind === 'authors' ? {
      authors: data,
      authorsStatus: Status.Successful,
      authorsError: undefined
    } : {}),

    ...(kind === 'thumbnails' ? {
      thumbnails: data,
      thumbnailsStatus: Status.Successful,
      thumbnailsError: undefined
    } : {})
  })),

  on(BookActions.loadItemsFailure, (state, { kind, error }) => ({
    ...state,

    ...(kind === 'books' ? {
      books: [],
      booksStatus: Status.Failure,
      booksError: error
    } : {}),

    ...(kind === 'authors' ? {
      authors: [],
      authorsStatus: Status.Failure,
      authorsError: error
    } : {}),

    ...(kind === 'thumbnails' ? {
      thumbnails: [],
      thumbnailsStatus: Status.Failure,
      thumbnailsError: error
    } : {})
  }))
);

