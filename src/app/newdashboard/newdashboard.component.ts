import { Component, OnInit } from '@angular/core';
import { IBook } from './book';
import { BookService } from './book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newdashboard',
  templateUrl: './newdashboard.component.html',
  styleUrls: ['./newdashboard.component.css', '../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class NewdashboardComponent implements OnInit {

  cardList: IBook[];
  display: boolean = false;
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  
  constructor() { }
  
  ngOnInit() {
  }

  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }

  cards: IBook[] = [
     {
        "BookId": 1,
        "BookName": "Meditations",
        "AuthorName": "Marcus Aurelius",
        "Publisher": "Penguin",
        "PublishDate": "05-07-2018",
        "BookPrice": 120.90,
        "BookCount": 120,
        "Availability": true,
        "Rating": 1
    },
    {
        "BookId": 2,
        "BookName": "Tipping Point",
        "AuthorName": "Malcom Gladwel",
        "Publisher": "Prime",
        "PublishDate": "05-07-2018",
        "BookPrice": 420.90,
        "BookCount": 20,
        "Availability": true,
        "Rating": 3.5
    },
    {
        "BookId": 3,
        "BookName": "Sapiens",
        "AuthorName": "Yuval Noah Harari",
        "Publisher": "Prime",
        "PublishDate": "05-07-2018",
        "BookPrice": 420.90,
        "BookCount": 20,
        "Availability": true,
        "Rating": 2
    },
    {
        "BookId": 4,
        "BookName": "Elon Musk",
        "AuthorName": "Elon Musk",
        "Publisher": "EMS",
        "PublishDate": "05-07-2018",    
        "BookPrice": 420.90,
        "BookCount": 20,
        "Availability": true,
        "Rating": 3
    }
  ];

// constructor() {}
// ngOnInit(){}
}
