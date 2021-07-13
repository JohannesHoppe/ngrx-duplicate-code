import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Book } from './book';

const API_URL = 'https://api.angular.schule/books'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>(API_URL);
  }

  getAuthors() {
    return this.http.get<{ authors: string[] }[]>(API_URL)
      .pipe(
        map(books => books.reduce((prev, current) => ([...prev, ...current.authors]), [] as string[])),
        map(authors => authors.filter(author => !!author)),
        map(authors => [...new Set(authors)])
      );
  }

  getThumbnails() {
    return this.http.get<{ firstThumbnailUrl: string }[]>(API_URL)
      .pipe(
        map(books => books.reduce((prev, current) => ([...prev, current.firstThumbnailUrl]), [] as string[])),
        map(thumnails => thumnails.filter(thumnail => thumnail.indexOf('placeholder_book') === -1)),
        map(thumnails => [...new Set(thumnails)])
      );
  }

}
