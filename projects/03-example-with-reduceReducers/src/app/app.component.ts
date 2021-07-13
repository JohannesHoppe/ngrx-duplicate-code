import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { authorsActions, booksActions, decrementCounter, incrementCounter, thumbnailsActions } from './store/book.actions';
import { authorsSelectors, booksSelectors, selectCounter, thumbnailsSelectors } from './store/book.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRx: ReduceReducers';

  books$ = this.store.select(booksSelectors.selectItems);
  booksStatus$ = this.store.select(booksSelectors.selectItemsStatus);
  booksError$ = this.store.select(booksSelectors.selectItemsError);

  authors$ = this.store.select(authorsSelectors.selectItems);
  authorsStatus$ = this.store.select(authorsSelectors.selectItemsStatus);
  authorsError$ = this.store.select(authorsSelectors.selectItemsError);

  thumbnails$ = this.store.select(thumbnailsSelectors.selectItems);
  thumbnailsStatus$ = this.store.select(thumbnailsSelectors.selectItemsStatus);
  thumbnailsError$ = this.store.select(thumbnailsSelectors.selectItemsError);

  counter$ = this.store.select(selectCounter);

  constructor(private store: Store) { }

  loadBooks() {
    this.store.dispatch(booksActions.load());
  }

  loadAuthors() {
    this.store.dispatch(authorsActions.load());
  }

  loadThumbnails() {
    this.store.dispatch(thumbnailsActions.load());
  }

  incrementCounter() {
    this.store.dispatch(incrementCounter());
  }

  decrementCounter() {
    this.store.dispatch(decrementCounter());
  }
}
