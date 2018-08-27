import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poc1',
  templateUrl: './poc1.component.html',
  styleUrls: ['./poc1.component.css', '../../../node_modules/angular2-draggable/css/resizable.min.css'
  ]
})
export class Poc1Component implements OnInit {
  cardList: IBook[];
  display: boolean = false;
  constructor(private _bookService: BookService, private _router: Router) { }

  ngOnInit() {
    this.cardList = this._bookService.getBooks();
  }

  showDialog() {
        this.display = true;
  }

  hideDialog() {
        this.display = false;
  }
  
  addBook() {
    this.cardList.push({
       "BookId": 9,
        "BookName": "Chandan Koranga",
        "AuthorName": "Elon Musk",
        "Publisher": "EMS",
        "PublishDate": "05-07-2018",    
        "BookPrice": 420.90,
        "BookCount": 20,
        "Availability": true,
        "Rating": 3
    })
  }

   removeBook() {
     this.cardList.shift();
   }
}
