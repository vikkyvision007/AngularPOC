import { Component, Input } from '@angular/core';

import { CardComponent }       from './card.component';

@Component({
  styleUrls: ['./dynamic-dashboard.component.css'],
  template: `
      <h2>Angular Component- Job Card Component</h2>
      <p>This will represent Job cards</p>

      <header>
        <h2>{{data.BookName}}</h2>
      </header>

      <section>
          <nav>
            <ul>
              <li><a href="#">Author Name- {{data.AuthorName}}</a></li>
              <li><a href="#">Publisher- {{data.Publisher}}</a></li>
              <li><a href="#">PublishDate- {{data.PublishDate}} </a></li>
            </ul>
          </nav>
  
          <article>
            <h1>BookPrice - {{data.BookPrice}}</h1>
            <p></p>
          </article>
      </section>
  `
})
export class JobCardComponent implements CardComponent {
  @Input() data: any;

}