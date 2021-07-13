import { combineReducers, createReducer, on } from '@ngrx/store';
import { SubmittableItem } from 'projects/shared/api-adapter';
import { Book } from 'projects/shared/book';

import { decrementCounter, incrementCounter } from './book.actions';
import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';


export const bookFeatureKey = 'book';


export interface State {
  books: SubmittableItem<Book[]>;
  authors: SubmittableItem<string[]>;
  thumbnails: SubmittableItem<string[]>;
  counter: number;
}

export const initialState: State = {
  books: booksApiAdapter.getInitialState(),
  authors: authorsApiAdapter.getInitialState(),
  thumbnails: thumbnailsApiAdapter.getInitialState(),
  counter: 1
};

// counter: regular reducer for demonstration
const counterReducer = createReducer(
  initialState.counter,

  // this is not how it is normally done,
  // one would probably expect `state.counter`, see next demo!
  on(incrementCounter, state => state + 1),
  on(decrementCounter, state => state - 1),
);

export const reducer = combineReducers({
  books: booksApiAdapter.getReducer(),
  authors: authorsApiAdapter.getReducer(),
  thumbnails: thumbnailsApiAdapter.getReducer(),
  counter: counterReducer
}, initialState);
