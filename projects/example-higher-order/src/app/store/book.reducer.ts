import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { booksApiAdapter, authorsApiAdapter, thumbnailsApiAdapter } from './book.adapter';
import { SubmittableItem } from '../api-adapter/api-adapter';

export const bookFeatureKey = 'book';

export const booksReducer = booksApiAdapter.getReducer();
export const authorsReducer = authorsApiAdapter.getReducer();
export const thumbnailsReducer = thumbnailsApiAdapter.getReducer();



export interface State {
  books: SubmittableItem<Book[]>;
  authors: SubmittableItem<string>;
  thumbnails: SubmittableItem<string>;
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
