import { booksApiAdapter, authorsApiAdapter, thumbnailsApiAdapter } from './book.adapter';
import { createAction } from '@ngrx/store';


export const booksActions = booksApiAdapter.getActions();
export const authorsActions = authorsApiAdapter.getActions();
export const thumbnailsActions = thumbnailsApiAdapter.getActions();



// counter: regular actions for demonstration
export const incrementCounter = createAction(
  '[Book] Increase Counter'
);

export const decrementCounter = createAction(
  '[Book] Decrement Counter'
);
