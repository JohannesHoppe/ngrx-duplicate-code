import { createReducer, on } from '@ngrx/store';
import reduceReducers from 'reduce-reducers';
import { Action, ActionReducer } from '@ngrx/store';

import { SubmittableItem, Status, combineSomeReducer } from 'projects/shared/api-adapter';
import { Book } from 'projects/shared/book';

import * as BookActions from './book.actions';
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
export const counterReducer = createReducer(
  initialState,

  on(BookActions.incrementCounter, state => ({
    ...state,
    counter: state.counter + 1
  })),

  on(BookActions.decrementCounter, state => ({
    ...state,
    counter: state.counter - 1
  })),
);

// the normal `combineReducers` always overrides not defined properties
/*
export const adapterReducer = combineReducers({
  books: booksApiAdapter.getReducer(),
  authors: authorsApiAdapter.getReducer(),
  thumbnails: thumbnailsApiAdapter.getReducer(),
  counter: s => s // this will be lost!
});
*/

// ... but our own `combineSomeReducer` will ignore the counter
export const adapterReducer = combineSomeReducer({
  books: booksApiAdapter.getReducer() as any,
  authors: authorsApiAdapter.getReducer() as any,
  thumbnails: thumbnailsApiAdapter.getReducer() as any
  // no counter here!
}) as unknown as ActionReducer<State, Action>; // counter is indeed missing, so we have to force the type here

export const reducer = reduceReducers(initialState, counterReducer, adapterReducer);
