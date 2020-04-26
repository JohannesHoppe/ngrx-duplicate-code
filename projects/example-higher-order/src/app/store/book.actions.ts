import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '../../../../shared/book';

export type ActionKinds = 'books' | 'authors' | 'thumbnails';

export const loadItems = createAction(
  '[Book] Load Items',
  props<{ kind: ActionKinds }>()
);
export const loadItemsSuccess = createAction(
  '[Book] Load Items Success',
  props<{ kind: ActionKinds, data: Book[] | string[] }>()
);
export const loadItemsFailure = createAction(
  '[Book] Load Items Failure',
  props<{ kind: ActionKinds, error: HttpErrorResponse }>()
);
