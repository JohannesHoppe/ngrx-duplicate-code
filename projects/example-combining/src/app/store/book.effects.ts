import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from './book.actions';
import { DataService } from '../../../../shared/data.service';
import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';



@Injectable()
export class BookEffects {



  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks,
             BookActions.loadAuthors,
             BookActions.loadThumbnails
             ),
      concatMap(action =>
        this.getData(action).pipe(
          map(() => BookActions.loadBooksSuccess({ data: undefined })),
          // catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  getData(action: TypedAction<'[Book] Load Books' | '[Book] Load Authors' | '[Book] Load Thumbnails'>) {
    switch (action.type) {
      case BookActions.loadBooks.type: return this.service.getBooks();
      case BookActions.loadAuthors.type: return this.service.getAuthors();
      case BookActions.loadThumbnails.type: return this.service.getThumbnails();
    }
  }

  constructor(private actions$: Actions, private service: DataService) {}
}
