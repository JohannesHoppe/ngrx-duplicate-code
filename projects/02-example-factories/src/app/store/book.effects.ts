import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

import { DataService } from '../../../../shared/data.service';
import { authorsApiAdapter, booksApiAdapter, thumbnailsApiAdapter } from './book.adapter';


@Injectable()
export class BookEffects {

  loadBooks$ = booksApiAdapter.getEffect(this.actions$, () => this.service.getBooks());
  loadAuthors$ = authorsApiAdapter.getEffect(this.actions$, () => this.service.getAuthors());
  loadThumbnails$ = thumbnailsApiAdapter.getEffect(this.actions$, () => this.service.getThumbnails());

  constructor(private actions$: Actions, private service: DataService) {}
}
