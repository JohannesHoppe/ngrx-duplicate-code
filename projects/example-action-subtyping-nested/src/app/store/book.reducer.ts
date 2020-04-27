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

export interface SubmittableItem<TData> {
  data: TData;
  status: Status;
  error: HttpErrorResponse;
}

const initialSubmittableItem = {
  data: [],
  status: Status.NotSubmitted,
  error: undefined,
};

export interface State {
  books: SubmittableItem<Book[]>;
  authors: SubmittableItem<string[]>;
  thumbnails: SubmittableItem<string[]>;
}

export const initialState: State = {
  books: { ... initialSubmittableItem },
  authors: { ... initialSubmittableItem },
  thumbnails: { ... initialSubmittableItem },
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadItems, (state, { kind }) => ({
    ...state,
    [kind]: {
      ...state[kind],
      status: Status.Submitting
    }
  })),

  on(BookActions.loadItemsSuccess, (state, { kind, data }) => ({
    ...state,
    [kind]: {
      ...state[kind],
      data,
      status: Status.Successful,
      error: undefined
    }
  })),

  on(BookActions.loadItemsFailure, (state, { kind, error }) => ({
    ...state,
    [kind]: {
      ...state[kind],
      data: [],
      status: Status.Failure,
      error
    }
  }))
);
