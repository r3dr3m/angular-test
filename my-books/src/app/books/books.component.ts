import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  the_book : Book = {
    id: 0,
    name: "A new Hope",
    author: "George Lucas",
    univers: "Star Wars",
    read: true
  };

  constructor() { }

  ngOnInit() {
  }

}
