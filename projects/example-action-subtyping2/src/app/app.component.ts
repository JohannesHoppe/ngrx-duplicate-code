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
  title = 'NgRx: Action Subtyping';

  books$ = this.store.select(BookSelectors.selectBooks);
  booksStatus$ = this.store.select(BookSelectors.selectBooksStatus);
  booksError$ = this.store.select(BookSelectors.selectBooksError);

  // second duplication 🤨

  authors$ = this.store.select(BookSelectors.selectAuthors);
  authorsStatus$ = this.store.select(BookSelectors.selectAuthorsStatus);
  authorsError$ = this.store.select(BookSelectors.selectAuthorsError);

  // third duplication 😞

  thumbnails$ = this.store.select(BookSelectors.selectThumbnails);
  thumbnailsStatus$ = this.store.select(BookSelectors.selectThumbnailsStatus);
  thumbnailsError$ = this.store.select(BookSelectors.selectThumbnailsError);

  constructor(private store: Store) { }

  loadItems(kind: BookActions.ActionKinds) {
    this.store.dispatch(BookActions.loadItems({ kind }));
  }
}
