import { createReducer, on, Action } from '@ngrx/store';
import * as BookActions from './book.actions';
import { booksApiAdapter, authorsApiAdapter, thumbnailsApiAdapter } from './book.adapter';
import { SubmittableItem } from '../api-adapter/api-adapter';
import { Book } from 'projects/shared/book';

export const bookFeatureKey = 'book';

export const booksReducer = booksApiAdapter.getReducer();
export const authorsReducer = authorsApiAdapter.getReducer();
export const thumbnailsReducer = thumbnailsApiAdapter.getReducer();



export interface State {
  books: SubmittableItem<Book[]>;
  authors: SubmittableItem<string[]>;
  thumbnails: SubmittableItem<string[]>;
}

export const initialState: State = {
  books: undefined,
  authors: undefined,
  thumbnails: undefined,
};

export function reducer(state: State = initialState, action: Action) {

  return {
    books: booksReducer(state.books, action),
    authors: authorsReducer(state.authors, action),
    thumbnails: thumbnailsReducer(state.thumbnails, action),
  };
}
