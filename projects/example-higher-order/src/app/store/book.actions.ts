import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '../../../../shared/book';
import { createApiAction } from '../api-creators/create-api-actions';

export const {
  load: loadBooks,
  loadSuccess: loadBooksSuccess,
  loadFailure: loadBooksFailure
} = createApiAction<string, Book[]>('[Book] Load Books');

export const {
  load: loadAuthors,
  loadSuccess: loadAuthorsSuccess,
  loadFailure: loadAuthorsFailure
} = createApiAction<string, string>('[Book] Load Authors');

export const {
  load: loadThumbnails,
  loadSuccess: loadThumbnailsSuccess,
  loadFailure: loadThumbnailsFailure
} = createApiAction<string, string>('[Book] Load Thumbnails');
