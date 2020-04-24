import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from './book.actions';
import { DataService } from '../../../../shared/data.service';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      concatMap(() =>
        this.service.getBooks().pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  // second duplication 🤨

  loadAuthors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadAuthors),
      concatMap(() =>
        this.service.getAuthors().pipe(
          map(data => BookActions.loadAuthorsSuccess({ data })),
          catchError(error => of(BookActions.loadAuthorsFailure({ error }))))
      )
    );
  });

  // third duplication 😞

  loadThumbnails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadThumbnails),
      concatMap(() =>
        this.service.getThumbnails().pipe(
          map(data => BookActions.loadThumbnailsSuccess({ data })),
          catchError(error => of(BookActions.loadThumbnailsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private service: DataService) {}
}
