import { Component, Input }  from '@angular/core';

import { CardComponent }       from './card.component';

@Component({
  template: `
        <div class="card-block">
                <div class="cdesc">
                  <p><i class="far fa-address-book"></i>
                    {{data.AuthorName}}
                  </p>
                  <p><i class="fas fa-dollar-sign"></i>
                  {{data.BookPrice}}
                  </p>
                  <p><i class="fas fa-book"></i>
                  {{data.Publisher}}
                  </p>
                </div>
        </div>
  `
})
export class CardProfileComponent implements CardComponent {
  @Input() data: any;
}


