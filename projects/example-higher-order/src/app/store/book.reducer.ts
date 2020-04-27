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

// export const initialState: State = {
//   books: { ... initialSubmittableItem },
//   authors: { ... initialSubmittableItem },
//   thumbnails: { ... initialSubmittableItem },
// };

export function reducer(state: any, action: Action) {
  debugger;
  state = booksReducer(state, action);
  state = authorsReducer(state, action);
  state = thumbnailsReducer(state, action);
  return state;
}
