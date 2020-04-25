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
  title = 'NgRx: Action Subtyping 2';

  books$ = this.store.select(BookSelectors.selectItems, { kind: 'books'});
  booksStatus$ = this.store.select(BookSelectors.selectItemsStatus, { kind: 'books'});
  booksError$ = this.store.select(BookSelectors.selectItemsError, { kind: 'books'});

  // second duplication 🤨

  authors$ = this.store.select(BookSelectors.selectItems, { kind: 'authors'});
  authorsStatus$ = this.store.select(BookSelectors.selectItemsStatus, { kind: 'authors'});
  authorsError$ = this.store.select(BookSelectors.selectItemsError, { kind: 'authors'});

  // third duplication 😞

  thumbnails$ = this.store.select(BookSelectors.selectItems, { kind: 'thumbnails'});
  thumbnailsStatus$ = this.store.select(BookSelectors.selectItemsStatus, { kind: 'thumbnails'});
  thumbnailsError$ = this.store.select(BookSelectors.selectItemsError, { kind: 'thumbnails'});

  constructor(private store: Store) { }

  loadItems(kind: BookActions.ActionKinds) {
    this.store.dispatch(BookActions.loadItems({ kind }));
  }
}
