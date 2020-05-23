import { combineReducers, createReducer, on } from '@ngrx/store';
import { SubmittableItem } from 'projects/shared/api-adapter';
import { Book } from 'projects/shared/book';

import * as BookActions from './book.actions';
import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';


export const bookFeatureKey = 'book';

export const booksReducer = booksApiAdapter.getReducer();
export const authorsReducer = authorsApiAdapter.getReducer();
export const thumbnailsReducer = thumbnailsApiAdapter.getReducer();


export interface State {
  books: SubmittableItem<Book[]>;
  authors: SubmittableItem<string[]>;
  thumbnails: SubmittableItem<string[]>;
  counter: number;
}

export const initialState: State = {
  books: undefined,
  authors: undefined,
  thumbnails: undefined,
  counter: 1
};

// counter: regular reducer for demonstration
const counterReducer = createReducer(
  initialState.counter,

  on(BookActions.incrementCounter, state => state + 1),
  on(BookActions.decrementCounter, state => state - 1),
);

export const reducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer,
  thumbnails: thumbnailsReducer,
  counter: counterReducer
}, initialState);
