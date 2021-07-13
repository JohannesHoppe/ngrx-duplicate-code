import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadAuthors, loadBooks, loadThumbnails } from './store/book.actions';
import {
  selectAuthors,
  selectAuthorsError,
  selectAuthorsStatus,
  selectBooks,
  selectBooksError,
  selectBooksStatus,
  selectThumbnails,
  selectThumbnailsError,
  selectThumbnailsStatus,
} from './store/book.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgRx: Regular App';

  books$ = this.store.select(selectBooks);
  booksStatus$ = this.store.select(selectBooksStatus);
  booksError$ = this.store.select(selectBooksError);

  // second duplication 🤨

  authors$ = this.store.select(selectAuthors);
  authorsStatus$ = this.store.select(selectAuthorsStatus);
  authorsError$ = this.store.select(selectAuthorsError);

  // third duplication 😞

  thumbnails$ = this.store.select(selectThumbnails);
  thumbnailsStatus$ = this.store.select(selectThumbnailsStatus);
  thumbnailsError$ = this.store.select(selectThumbnailsError);

  constructor(private store: Store) { }

  loadBooks() {
    this.store.dispatch(loadBooks());
  }

  loadAuthors() {
    this.store.dispatch(loadAuthors());
  }

  loadThumbnails() {
    this.store.dispatch(loadThumbnails());
  }
}
