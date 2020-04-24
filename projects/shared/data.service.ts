import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }

  getAuthors() {
    return this.http.get<{ authors: string[] }[]>('https://api.angular.schule/books')
      .pipe(
        map(books => books.reduce((prev, current) => ([...prev, ...current.authors]), [] as string[])),
        map(authors => authors.filter(author => !!author)),
        map(authors => [...new Set(authors)])
      );
  }

  getThumbnails() {
    return this.http.get<{ firstThumbnailUrl: string }[]>('https://api.angular.schule/books')
      .pipe(
        map(books => books.reduce((prev, current) => ([...prev, current.firstThumbnailUrl]), [] as string[])),
        map(thumnails => thumnails.filter(thumnail => thumnail.indexOf('placeholder_book') === -1)),
        map(thumnails => [...new Set(thumnails)])
      );
  }

}
