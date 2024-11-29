import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookResponse } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  loadBooks() {
    return this.httpClient.get<BookResponse>(
      'https://www.googleapis.com/books/v1/volumes?q=%22stephen%20king%22&key=AIzaSyDgREt8NYUbcruFXvlhNrZVSQo6JTAC5Yk%0A'
    )
  }
}
