import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: false,

  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit, OnDestroy {
  books!: Book[];
  bookSubscription!: Subscription;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookSubscription = this.bookService
      .loadBooks()
      .subscribe((response) => {
        this.books = response.items;
      });
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

  back() {
    this.router.navigate(['']);
  }
}
