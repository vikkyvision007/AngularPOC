import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[card-host]',
})
export class CardDirective {
  @Input() item: any;
  constructor(public viewContainerRef: ViewContainerRef) { }
}

