import { Routes, RouterModule } from '@angular/router';
import { Poc1Component } from './poc1/poc1.component';
import { Poc2Component } from './poc2/poc2.component';
import { Poc3Component } from './poc3/poc3.component';
import { HomeComponent } from './home/home.component';
import { NewdashboardComponent } from './newdashboard/newdashboard.component';
import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';

const router :  Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: Poc1Component },
    { path: 'sidebar', component: Poc2Component },
    { path: 'sidebar-new', component: Poc3Component },
    { path: 'dashboard-new', component: NewdashboardComponent },
    { path: 'dynamic-dashboard', component: DynamicDashboardComponent }
    ]

export const appRouter = RouterModule.forRoot(router);