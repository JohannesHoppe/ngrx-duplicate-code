import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of, defer } from 'rxjs';

import * as BookActions from './book.actions';
import { DataService } from '../../../../shared/data.service';


@Injectable()
export class BookEffects {

  // loadItems$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(BookActions.loadItems),
  //     concatMap(({ kind }) => defer(() => {
  //       switch (kind) {
  //         case 'books': return this.service.getBooks();
  //         case 'authors': return this.service.getAuthors();
  //         case 'thumbnails': return this.service.getThumbnails();
  //       }}).pipe(
  //         map((data) => BookActions.loadItemsSuccess({ kind, data })),
  //         catchError(error => of(BookActions.loadItemsFailure({ kind, error })))
  //     ))
  //   );
  // });

  constructor(private actions$: Actions, private service: DataService) {}
}
