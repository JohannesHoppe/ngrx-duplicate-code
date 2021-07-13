import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { DataService } from '../../../../shared/data.service';
import {
  loadAuthors,
  loadAuthorsFailure,
  loadAuthorsSuccess,
  loadBooks,
  loadBooksFailure,
  loadBooksSuccess,
  loadThumbnails,
  loadThumbnailsFailure,
  loadThumbnailsSuccess,
} from './book.actions';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBooks),
      concatMap(() =>
        this.service.getBooks().pipe(
          map(data => loadBooksSuccess({ data })),
          catchError(error => of(loadBooksFailure({ error }))))
      )
    );
  });

  // second duplication 🤨

  loadAuthors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAuthors),
      concatMap(() =>
        this.service.getAuthors().pipe(
          map(data => loadAuthorsSuccess({ data })),
          catchError(error => of(loadAuthorsFailure({ error }))))
      )
    );
  });

  // third duplication 😞

  loadThumbnails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadThumbnails),
      concatMap(() =>
        this.service.getThumbnails().pipe(
          map(data => loadThumbnailsSuccess({ data })),
          catchError(error => of(loadThumbnailsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private service: DataService) {}
}
