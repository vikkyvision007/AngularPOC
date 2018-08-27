import { CardItem } from './card-item';
import { Injectable } from '@angular/core';
import { JobCardComponent }   from './job-card.component';
import { CardProfileComponent } from './card-profile.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { ColumnChartComponent } from '../column-chart/column-chart.component';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { ComboChartComponent } from '../combo-chart/combo-chart.component';

declare function require(url: string)
@Injectable()
export class CardService {
    cardList: CardItem[];
    componentList: any;
    bkurl = require("./card-list.json");
    constructor() {
        this.componentList= [PieChartComponent, ColumnChartComponent, TimelineChartComponent, LineChartComponent, ComboChartComponent, CardProfileComponent ];
    }

    getCards() {
        this.cardList = [];
        this.bkurl.forEach(element => {
            this.componentList.forEach(component => {
                if (component.name == element.component)
                    this.cardList.push(new CardItem(component, element.data));
            });
        });
        return this.cardList;
    }
}