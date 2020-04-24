import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of, defer } from 'rxjs';

import * as BookActions from './book.actions';
import { DataService } from '../../../../shared/data.service';


@Injectable()
export class BookEffects {

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks,
             BookActions.loadAuthors,
             BookActions.loadThumbnails),
      concatMap(({ type }) => defer(() => {
        switch (type) {
          case BookActions.loadBooks.type: return this.service.getBooks();
          case BookActions.loadAuthors.type: return this.service.getAuthors();
          case BookActions.loadThumbnails.type: return this.service.getThumbnails();
        }}).pipe(
          map((data: any) => {
            switch (type) {
              case BookActions.loadBooks.type: return BookActions.loadBooksSuccess({ data });
              case BookActions.loadAuthors.type: return BookActions.loadAuthorsSuccess({ data });
              case BookActions.loadThumbnails.type: return BookActions.loadThumbnailsSuccess({ data });
            }
          }),
          catchError(error => {
            switch (type) {
              case BookActions.loadBooks.type: return of(BookActions.loadBooksFailure({ error }));
              case BookActions.loadAuthors.type: return of(BookActions.loadAuthorsFailure({ error }));
              case BookActions.loadThumbnails.type: return of(BookActions.loadThumbnailsFailure({ error }));
            }
          })
      ))
    );
  });

  constructor(private actions$: Actions, private service: DataService) { }
}
