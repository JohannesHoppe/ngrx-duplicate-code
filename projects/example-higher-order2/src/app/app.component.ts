import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookSelectors from './store/book.selectors';
import * as BookActions from './store/book.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRx: Higher-Order 2';

  books$ = this.store.select(BookSelectors.booksSelectors.selectItems);
  booksStatus$ = this.store.select(BookSelectors.booksSelectors.selectItemsStatus);
  booksError$ = this.store.select(BookSelectors.booksSelectors.selectItemsError);

  authors$ = this.store.select(BookSelectors.authorsSelectors.selectItems);
  authorsStatus$ = this.store.select(BookSelectors.authorsSelectors.selectItemsStatus);
  authorsError$ = this.store.select(BookSelectors.authorsSelectors.selectItemsError);

  thumbnails$ = this.store.select(BookSelectors.thumbnailsSelectors.selectItems);
  thumbnailsStatus$ = this.store.select(BookSelectors.thumbnailsSelectors.selectItemsStatus);
  thumbnailsError$ = this.store.select(BookSelectors.thumbnailsSelectors.selectItemsError);

  counter$ = this.store.select(BookSelectors.selectCounter);

  constructor(private store: Store) { }

  loadBooks() {
    this.store.dispatch(BookActions.booksActions.load());
  }

  loadAuthors() {
    this.store.dispatch(BookActions.authorsActions.load());
  }

  loadThumbnails() {
    this.store.dispatch(BookActions.thumbnailsActions.load());
  }

  incrementCounter() {
    this.store.dispatch(BookActions.incrementCounter());
  }

  decrementCounter() {
    this.store.dispatch(BookActions.decrementCounter());
  }
}
