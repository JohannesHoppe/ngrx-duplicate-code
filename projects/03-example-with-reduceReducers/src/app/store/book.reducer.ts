import { createReducer, on } from '@ngrx/store';
import reduceReducers from 'reduce-reducers';
import { Action, ActionReducer } from '@ngrx/store';

import { SubmittableItem, Status, combineSomeReducer } from 'projects/shared/api-adapter';
import { Book } from 'projects/shared/book';

import * as BookActions from './book.actions';
import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';


export const bookFeatureKey = 'book';


export interface State {
  books: SubmittableItem<Book[]> | undefined;
  authors: SubmittableItem<string[]> | undefined;
  thumbnails: SubmittableItem<string[]> | undefined;
  counter: number;
}

export const initialState: State = {
  books: undefined,
  authors: undefined,
  thumbnails: undefined,
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

// the normal combineReducers overrides unknown properties
/*
export const adapterReducer = combineReducers({
  books: booksApiAdapter.getReducer(),
  authors: authorsApiAdapter.getReducer(),
  thumbnails: thumbnailsApiAdapter.getReducer(),
  counter: s => s // it only has to passthrough the state
});
*/

export const adapterReducer = combineSomeReducer({
  books: booksApiAdapter.getReducer() as any,
  authors: authorsApiAdapter.getReducer() as any,
  thumbnails: thumbnailsApiAdapter.getReducer() as any
  // no counter here!
}) as unknown as ActionReducer<State, Action>; // counter is indeed missing, so we have to force the type here

export const reducer = reduceReducers(initialState, counterReducer, adapterReducer);
