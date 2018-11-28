import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spider-dropdown',
  templateUrl: './spider-dropdown.component.html',
  styleUrls: ['./spider-dropdown.component.css']
})
export class SpiderDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  let active:boolean = false;
}
actionItem(event: MouseEvent){
  event.preventDefault();
  console.log(event.srcElement) // HTMLElement
}

}
