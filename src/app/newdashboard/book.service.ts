import { IBook } from './book';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


declare function require(url: string)
@Injectable()
export class BookService {
    bkurl = require("./books.json");
    constructor(private _http: HttpClient) {
    }

    getBooks() {
        return this.bkurl
    }
}


