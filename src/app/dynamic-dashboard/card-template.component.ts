import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CardDirective } from './card.directive';
import { CardComponent } from './card.component';
import { CardItem } from './card-item';

@Component({
  selector: 'app-card-template',
  template: `
              <div class="drag-boundary" [ngClass]="{ 'top-b': !edge?.top, 'bottom-b': !edge?.bottom, 'left-b': !edge?.left, 'right-b': !edge?.right }" #myBounds>
                <div ngDraggable [handle]="DemoHandle" class="card" *ngFor="let item of cardList" ngResizable 
                [zIndexMoving]="99999"
                [zIndex]="1000"
                (edge)="checkEdge($event)" [bounds]="myBounds" [inBounds]="inBounds">
                  <h6 #DemoHandle class="cheader">{{item.data.BookName}}</h6>
                  <div class="card-block">
                      <ng-template card-host></ng-template>
                  </div>
                </div>
              </div>   
            `
})
export class CardTemplateComponent implements OnInit, OnDestroy {
  @Input() cardList: CardItem[];
  currentAdIndex = -1;
  @ViewChild(CardDirective) cardHost: CardDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.cardList.length;
    let cardItem = this.cardList[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardItem.component);

    let viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<CardComponent>componentRef.instance).data = cardItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
