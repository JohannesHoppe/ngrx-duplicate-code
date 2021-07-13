import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookSelectors from './store/book.selectors';
import * as BookActions from './store/book.actions';
import { Observable } from 'rxjs';
import { Book } from 'projects/shared/book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRx: Action Subtyping 2';

  books$ = this.store.select(BookSelectors.selectItems, { kind: 'books'}) as Observable<Book[]>;
  booksStatus$ = this.store.select(BookSelectors.selectItemsStatus, { kind: 'books'});
  booksError$ = this.store.select(BookSelectors.selectItemsError, { kind: 'books'});

  // second duplication 🤨

  authors$ = this.store.select(BookSelectors.selectItems, { kind: 'authors'}) as Observable<string[]>;
  authorsStatus$ = this.store.select(BookSelectors.selectItemsStatus, { kind: 'authors'});
  authorsError$ = this.store.select(BookSelectors.selectItemsError, { kind: 'authors'});

  // third duplication 😞

  thumbnails$ = this.store.select(BookSelectors.selectItems, { kind: 'thumbnails'}) as Observable<string[]>;
  thumbnailsStatus$ = this.store.select(BookSelectors.selectItemsStatus, { kind: 'thumbnails'});
  thumbnailsError$ = this.store.select(BookSelectors.selectItemsError, { kind: 'thumbnails'});

  constructor(private store: Store) { }

  loadItems(kind: BookActions.ActionKinds) {
    this.store.dispatch(BookActions.loadItems({ kind }));
  }
}
