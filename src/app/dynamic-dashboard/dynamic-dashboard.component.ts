import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewChildren, QueryList } from '@angular/core';
import { CardService } from './card.service';
import { CardItem } from './card-item';
import { CardDirective } from './card.directive';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-dynamic-dashboard',
  templateUrl: './dynamic-dashboard.component.html',
  styleUrls: ['./dynamic-dashboard.component.css', '../../../node_modules/angular2-draggable/css/resizable.min.css']
})
export class DynamicDashboardComponent implements OnInit {
  cardList: CardItem[];
  @ViewChildren(CardDirective) cardHosts: QueryList<CardDirective>;
  currentAdIndex = -1;
  interval: any;
  viewContainerRef: any;
 
  constructor(private cardService: CardService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.cardList = this.cardService.getCards();
  }

  ngAfterViewInit(){
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    
    this.cardHosts.forEach(element => {
         element.viewContainerRef.clear();
         this.currentAdIndex = Math.floor(Math.random() * this.cardList.length);
         let cardItem = this.cardList[this.currentAdIndex];
         this.viewContainerRef = element.viewContainerRef;
         let componentFactory = this.componentFactoryResolver.resolveComponentFactory(element.item.component);
         //let componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem.component);
         let componentRef = this.viewContainerRef.createComponent(componentFactory);
        //(<CardComponent>componentRef.instance).data = element.item.data;
        (<CardComponent>componentRef.instance).data = cardItem.data;
    });
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
