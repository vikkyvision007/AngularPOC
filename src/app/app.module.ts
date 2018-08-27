import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppComponent } from './app.component';
import { Poc1Component } from './poc1/poc1.component';
import { appRouter } from './app.route';
import { BookService } from './poc1/book.service';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { AngularDraggableModule } from 'angular2-draggable';
import { Poc2Component } from './poc2/poc2.component';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { HomeComponent } from './home/home.component';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Poc3Component } from './poc3/poc3.component';
import { SidebarModule } from 'ng-sidebar';
import { NewdashboardComponent } from './newdashboard/newdashboard.component';
import { NgDraggableWidgetModule } from 'ngx-draggable-widget';
import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';
import { CardService } from './dynamic-dashboard/card.service';
import { CardDirective } from './dynamic-dashboard/card.directive';
import { JobCardComponent }   from './dynamic-dashboard/job-card.component';
import { CardProfileComponent } from './dynamic-dashboard/card-profile.component';
import { CardTemplateComponent } from './dynamic-dashboard/card-template.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    Poc1Component,
    Poc2Component,
    HomeComponent,
    Poc3Component,
    NewdashboardComponent,
    DynamicDashboardComponent,
    CardDirective,
    JobCardComponent,
    CardProfileComponent,
    CardTemplateComponent,
    PieChartComponent,
    ColumnChartComponent,
    TimelineChartComponent,
    LineChartComponent,
    ComboChartComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    HttpClientModule,
    AngularDraggableModule,
    SortableModule,
    SlideMenuModule,
    PanelMenuModule,
    DialogModule,
    NgDraggableWidgetModule,
    Ng2GoogleChartsModule,
    SidebarModule.forRoot()
  ],
  providers: [BookService, CardService],
  bootstrap: [AppComponent],
  entryComponents: [ PieChartComponent, ColumnChartComponent, TimelineChartComponent, LineChartComponent, ComboChartComponent, CardProfileComponent ],
})
export class AppModule { }
